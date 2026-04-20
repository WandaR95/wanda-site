"use client"

import { useParams } from "next/navigation"
import { useRef, useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  getAlbumBySlug,
  TRACK_PRICE_CENTS,
  BUNDLE_3_PRICE_CENTS,
  BUNDLE_5_PRICE_CENTS,
  resolvePurchase,
} from "@/lib/music-catalog"
import ScrollToTopButton from "@/components/ScrollToTopButton"

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`
}

export default function AlbumPage() {
  const { albumSlug } = useParams()
  const album = getAlbumBySlug(albumSlug)

  const audioRef = useRef(null)
  const previewTimeoutRef = useRef(null)

  const [playingSlug, setPlayingSlug] = useState("")
  const [cartTrackSlugs, setCartTrackSlugs] = useState([])
  const [albumInCart, setAlbumInCart] = useState(false)
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  const clearPreviewTimeout = () => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current)
      previewTimeoutRef.current = null
    }
  }

  const handlePlayPreview = async (track) => {
    if (!audioRef.current) return
    try {
      clearPreviewTimeout()
      if (playingSlug === track.slug) {
        audioRef.current.pause()
        setPlayingSlug("")
        return
      }
      audioRef.current.src = track.previewSrc
      audioRef.current.currentTime = track.previewStart ?? 0
      await audioRef.current.play()
      setPlayingSlug(track.slug)
      previewTimeoutRef.current = setTimeout(() => {
        if (audioRef.current) audioRef.current.pause()
        setPlayingSlug("")
      }, track.previewDuration * 1000)
    } catch (err) {
      console.error("Preview failed:", err)
    }
  }

  const toggleTrackInCart = (slug) => {
    setCartTrackSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const cartSummary = useMemo(() => {
    return resolvePurchase({
      trackSlugs: cartTrackSlugs,
      albumSlugs: albumInCart ? [albumSlug] : [],
    })
  }, [cartTrackSlugs, albumInCart, albumSlug])

  const startCheckout = async () => {
    try {
      setLoadingCheckout(true)
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trackSlugs: cartTrackSlugs,
          albumSlugs: albumInCart ? [albumSlug] : [],
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        alert(data.error || "Unable to start checkout.")
        setLoadingCheckout(false)
        return
      }
      window.location.href = data.url
    } catch (err) {
      console.error(err)
      alert("Something went wrong starting checkout.")
      setLoadingCheckout(false)
    }
  }

  if (!album) {
    return (
      <main className="min-h-screen bg-cream text-ink px-6 py-16 flex flex-col items-center justify-center gap-6">
        <p className="text-2xl font-semibold">Album not found.</p>
        <Link href="/music" className="text-brandPurple hover:opacity-80 transition text-sm font-medium">
          ← Back to Music Store
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-cream text-ink px-6 py-16 md:py-20">
      <audio ref={audioRef} hidden />

      <section className="max-w-7xl mx-auto">

        {/* Back nav */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
          >
            ← wandarogers.com
          </Link>
          <span className="text-ink/20">/</span>
          <Link
            href="/music"
            className="text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
          >
            Music Store
          </Link>
          <span className="text-ink/20">/</span>
          <span className="text-sm text-ink/60">{album.title}</span>
        </div>

        {/* Album hero */}
        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl mb-8">
          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
            <Image
              src={album.cover}
              alt={album.title}
              width={220}
              height={220}
              className="w-full rounded-[1.25rem] shadow-lg"
            />
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50 mb-3">
                Full Album
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                {album.title}
              </h1>
              <p className="mt-4 text-muted text-lg">
                {album.tracks.length} tracks &nbsp;·&nbsp; {formatPrice(album.priceCents)} for the full album
              </p>
              <p className="mt-2 text-muted text-sm">
                Or pick individual tracks — {formatPrice(TRACK_PRICE_CENTS)} each,
                3 for {formatPrice(BUNDLE_3_PRICE_CENTS)}, any 5 for {formatPrice(BUNDLE_5_PRICE_CENTS)}.
              </p>
              <button
                onClick={() => setAlbumInCart((v) => !v)}
                className={`mt-6 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  albumInCart
                    ? "bg-brandPurple text-white"
                    : "border border-brandPurple text-brandPurple hover:bg-brandPurple hover:text-white"
                }`}
              >
                {albumInCart ? "✓ Full Album Added" : `Add Full Album — ${formatPrice(album.priceCents)}`}
              </button>
            </div>
          </div>
        </div>

        {/* Track list + cart */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* Tracks */}
          <div className="rounded-[2rem] border border-black/10 bg-surface p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Tracks</h2>
            <div className="space-y-4">
              {album.tracks.map((track, i) => {
                const inCart = cartTrackSlugs.includes(track.slug)
                return (
                  <div
                    key={track.slug}
                    className="rounded-[1.25rem] border border-black/10 bg-[#FCFAF7] p-5"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4 max-w-xl">
                        <span className="mt-0.5 text-sm font-semibold text-ink/30 w-5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold">{track.title}</h3>
                          <p className="mt-0.5 text-sm text-muted">{track.vibe}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 shrink-0">
                        <button
                          onClick={() => handlePlayPreview(track)}
                          className="rounded-full bg-brandPurple px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
                        >
                          {playingSlug === track.slug ? "⏸ Pause" : "▶ Preview"}
                        </button>
                        <button
                          onClick={() => toggleTrackInCart(track.slug)}
                          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                            inCart
                              ? "bg-brandBlue text-white"
                              : "border border-brandBlue text-brandBlue hover:bg-brandBlue hover:text-white"
                          }`}
                        >
                          {inCart ? "✓ Added" : `Add — ${formatPrice(TRACK_PRICE_CENTS)}`}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Cart */}
          <aside className="lg:sticky lg:top-6 rounded-[2rem] border border-black/10 bg-surface p-6 shadow-sm">
            <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">Cart</p>
            <h2 className="mt-3 text-2xl font-semibold">Your selections</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10 space-y-2 text-sm text-muted">
                {albumInCart && (
                  <p>Full album: <strong className="text-ink">{album.title}</strong></p>
                )}
                {cartTrackSlugs.length > 0 && (
                  <p>Individual tracks: <strong className="text-ink">{cartTrackSlugs.length}</strong></p>
                )}
                {!albumInCart && cartTrackSlugs.length === 0 && (
                  <p className="text-ink/40 italic">Nothing added yet.</p>
                )}
              </div>

              {cartSummary.trackPricingSummary.length > 0 && (
                <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10">
                  <p className="text-sm font-semibold text-ink">Bundle pricing applied</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {cartSummary.trackPricingSummary.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10">
                <p className="text-sm text-muted">Total</p>
                <p className="mt-1 text-3xl font-semibold text-ink">
                  {formatPrice(cartSummary.totalCents)}
                </p>
              </div>

              <button
                onClick={startCheckout}
                disabled={loadingCheckout || cartSummary.deliveredTracks.length === 0}
                className="w-full rounded-full bg-brandPurple px-6 py-4 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loadingCheckout ? "Redirecting to checkout..." : "Checkout"}
              </button>

              <p className="text-xs leading-relaxed text-muted">
                After payment you&apos;ll get immediate download access and a copy sent to your email.
              </p>
            </div>
          </aside>

        </div>

        {/* Discography link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/music"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-lavenderTint/60 px-6 py-3.5 text-sm font-medium text-brandPurple hover:bg-lavenderTint transition-colors duration-200"
          >
            Browse the full discography →
          </Link>
        </div>

      </section>

      <ScrollToTopButton />
    </main>
  )
}
