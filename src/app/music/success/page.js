import Link from "next/link"
import { stripe } from "@/lib/stripe"
import { resolvePurchase } from "@/lib/music-catalog"
import { createDownloadToken } from "@/lib/download-tokens"

export const dynamic = "force-dynamic"

export default async function MusicSuccessPage({ searchParams }) {
  const sessionId = searchParams.session_id

  if (!sessionId) {
    return (
      <main className="min-h-screen bg-cream text-ink px-6 py-20">
        <div className="max-w-3xl mx-auto rounded-[2rem] border border-black/10 bg-surface p-8">
          <h1 className="text-3xl font-semibold">Missing session</h1>
          <p className="mt-4 text-muted">
            We couldn&apos;t find your purchase session.
          </p>
          <Link href="/music" className="mt-6 inline-block text-brandPurple">
            Return to the music store
          </Link>
        </div>
      </main>
    )
  }

  let session

  try {
    session = await stripe.checkout.sessions.retrieve(sessionId)
  } catch {
    return (
      <main className="min-h-screen bg-cream text-ink px-6 py-20">
        <div className="max-w-3xl mx-auto rounded-[2rem] border border-black/10 bg-surface p-8">
          <h1 className="text-3xl font-semibold">Could not load your order</h1>
          <Link href="/music" className="mt-6 inline-block text-brandPurple">
            Return to the music store
          </Link>
        </div>
      </main>
    )
  }

  const trackSlugs = JSON.parse(session.metadata?.trackSlugs || "[]")
  const albumSlugs = JSON.parse(session.metadata?.albumSlugs || "[]")
  const purchase = resolvePurchase({ trackSlugs, albumSlugs })
  const email = session.customer_details?.email || ""

  const downloads = purchase.deliveredTracks.map((track) => ({
    ...track,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/download/${createDownloadToken({
      trackSlug: track.slug,
      email,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
    })}`,
  }))

  return (
    <main className="min-h-screen bg-cream text-ink px-6 py-20">
      <section className="max-w-4xl mx-auto rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl">
        <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
          Wanda Rogers Music
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          Your purchase is ready.
        </h1>

        <p className="mt-5 text-lg text-muted leading-relaxed">
          Your download links are below, and a copy has also been sent to your email.
        </p>

        <div className="mt-10 space-y-4">
          {downloads.map((track) => (
            <div
              key={track.slug}
              className="rounded-2xl border border-black/10 bg-[#FCFAF7] p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h2 className="text-xl font-semibold">{track.title}</h2>
                <p className="text-sm text-muted">{track.albumTitle}</p>
              </div>

              <a
                href={track.url}
                className="rounded-full bg-brandPurple px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition text-center"
              >
                Download Track
              </a>
            </div>
          ))}
        </div>

        <Link
          href="/music"
          className="mt-8 inline-block text-brandPurple hover:opacity-80"
        >
          Back to the music store
        </Link>
      </section>
    </main>
  )
}