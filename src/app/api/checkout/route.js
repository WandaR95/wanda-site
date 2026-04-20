import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { resolvePurchase } from "@/lib/music-catalog"

export async function POST(request) {
  try {
    const body = await request.json()
    const trackSlugs = Array.isArray(body.trackSlugs) ? body.trackSlugs : []
    const albumSlugs = Array.isArray(body.albumSlugs) ? body.albumSlugs : []

    const purchase = resolvePurchase({ trackSlugs, albumSlugs })

    if (!purchase.deliveredTracks.length) {
      return NextResponse.json(
        { error: "No valid items selected." },
        { status: 400 }
      )
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

    const descriptionParts = [
      purchase.selectedTracks.length
        ? `${purchase.selectedTracks.length} selected track(s)`
        : null,
      purchase.selectedAlbums.length
        ? `${purchase.selectedAlbums.length} album purchase(s)`
        : null,
    ].filter(Boolean)

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      billing_address_collection: "auto",
      customer_creation: "always",
      success_url: `${siteUrl}/music/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/music`,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Wanda Rogers Music Purchase",
              description: descriptionParts.join(" • "),
            },
            unit_amount: purchase.totalCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        trackSlugs: JSON.stringify(trackSlugs),
        albumSlugs: JSON.stringify(albumSlugs),
        deliveredTrackSlugs: JSON.stringify(
          purchase.deliveredTracks.map((track) => track.slug)
        ),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Unable to start checkout." },
      { status: 500 }
    )
  }
}