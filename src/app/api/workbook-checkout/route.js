import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { WORKBOOKS, COMPANION } from "@/lib/books-catalog"

export async function POST(request) {
  try {
    const { slugs } = await request.json()
    if (!Array.isArray(slugs) || slugs.length === 0) {
      return NextResponse.json({ error: "No items selected." }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    const lineItems = []
    const purchasedSlugs = []

    for (const slug of slugs) {
      if (slug === "companion") {
        lineItems.push({
          price_data: {
            currency: "usd",
            product_data: { name: COMPANION.title },
            unit_amount: COMPANION.digitalPriceCents,
          },
          quantity: 1,
        })
        purchasedSlugs.push("companion")
        continue
      }

      const wb = WORKBOOKS.find((w) => w.slug === slug)
      if (!wb) continue

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: wb.title },
          unit_amount: wb.digitalPriceCents,
        },
        quantity: 1,
      })
      purchasedSlugs.push(slug)
    }

    if (lineItems.length === 0) {
      return NextResponse.json({ error: "No valid items." }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      billing_address_collection: "auto",
      customer_creation: "always",
      success_url: `${siteUrl}/workbooks/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/workbooks`,
      line_items: lineItems,
      metadata: {
        type: "workbook",
        workbookSlugs: JSON.stringify(purchasedSlugs),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Workbook checkout error:", error)
    return NextResponse.json({ error: "Unable to start checkout." }, { status: 500 })
  }
}
