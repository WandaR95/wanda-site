import { headers } from "next/headers"
import { stripe } from "@/lib/stripe"
import { resolvePurchase } from "@/lib/music-catalog"
import { sendDownloadEmail, sendWorkbookDownloadEmail } from "@/lib/mailersend"

export async function POST(request) {
  const body = await request.text()
  const signature = (await headers()).get("stripe-signature")

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    console.error("Webhook signature verification failed:", error.message)
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object
    const email = session.customer_details?.email
    const purchaseType = session.metadata?.type

    if (email && purchaseType === "workbook") {
      const workbookSlugs = JSON.parse(session.metadata?.workbookSlugs || "[]")
      try {
        await sendWorkbookDownloadEmail({
          toEmail: email,
          toName: session.customer_details?.name || "Customer",
          workbookSlugs,
        })
      } catch (error) {
        console.error("Failed sending workbook download email:", error)
      }
    } else if (email) {
      const trackSlugs = JSON.parse(session.metadata?.trackSlugs || "[]")
      const albumSlugs = JSON.parse(session.metadata?.albumSlugs || "[]")
      const purchase = resolvePurchase({ trackSlugs, albumSlugs })

      try {
        await sendDownloadEmail({
          toEmail: email,
          toName: session.customer_details?.name || "Customer",
          tracks: purchase.deliveredTracks,
        })
      } catch (error) {
        console.error("Failed sending download email:", error)
      }
    }
  }

  return new Response("ok", { status: 200 })
}