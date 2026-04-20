"use client"

import { useMemo, useRef, useState } from "react"
import Image from "next/image"
import {
  ALBUMS,
  TRACK_PRICE_CENTS,
  resolvePurchase,
} from "@/lib/music-catalog"

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`
}

export default function MusicStorePage() {
  const audioRef = useRef(null)
  const previewTimeoutRef = useRef(null)

  const [playingSlug, setPlayingSlug] = useState("")
  const [cartTrackSlugs, setCartTrackSlugs] = useState([])
  const [cartAlbumSlugs, setCartAlbumSlugs] = useState([])
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
      audioRef.current.currentTime = 0
      await audioRef.current.play()
      setPlayingSlug(track.slug)

      previewTimeoutRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause()
        }
        setPlayingSlug("")
      }, track.previewDuration * 1000)
    } catch (error) {
      console.error("Preview playback failed:", error)
    }
  }

  const toggleTrackInCart = (trackSlug) => {
    setCartTrackSlugs((prev) =>
      prev.includes(trackSlug)
        ? prev.filter((slug) => slug !== trackSlug)
        : [...prev, trackSlug]
    )
  }

  const toggleAlbumInCart = (albumSlug) => {
    setCartAlbumSlugs((prev) =>
      prev.includes(albumSlug)
        ? prev.filter((slug) => slug !== albumSlug)
        : [...prev, albumSlug]
    )
  }

  const cartSummary = useMemo(() => {
    return resolvePurchase({
      trackSlugs: cartTrackSlugs,
      albumSlugs: cartAlbumSlugs,
    })
  }, [cartTrackSlugs, cartAlbumSlugs])

  const startCheckout = async () => {
    try {
      setLoadingCheckout(true)

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackSlugs: cartTrackSlugs,
          albumSlugs: cartAlbumSlugs,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error || "Unable to start checkout.")
        setLoadingCheckout(false)
        return
      }

      window.location.href = data.url
    } catch (error) {
      console.error(error)
      alert("Something went wrong starting checkout.")
      setLoadingCheckout(false)
    }
  }

  return (
    <main className="min-h-screen bg-cream text-ink px-6 py-16 md:py-20">
      <audio ref={audioRef} hidden />

      <section className="max-w-7xl mx-auto">
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
          >
            ← Back to wandarogers.com
          </a>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl">
          <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
            Wanda Rogers Music Store
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            Buy the music you actually want to keep.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Preview the songs, build your cart, and unlock full downloads.
            Singles are $2 each. Bundle 3 tracks for $5 or any 5 for $8.
            Full albums: <em>I&apos;m Not a Rapper</em> is $22, <em>Some Experience Necessary</em> is $20.
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          <div className="space-y-10">
            {ALBUMS.map((album) => (
              <section
                key={album.slug}
                className="rounded-[2rem] border border-black/10 bg-surface p-6 md:p-8 shadow-sm"
              >
                <div className="grid md:grid-cols-[180px_1fr] gap-6">
                  <div>
                    <Image
                      src={album.cover}
                      alt={album.title}
                      width={500}
                      height={500}
                      className="w-full rounded-[1.25rem]"
                    />
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h2 className="text-3xl font-semibold">{album.title}</h2>
                        <p className="mt-2 text-muted">
                          Full album download: {formatPrice(album.priceCents)}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleAlbumInCart(album.slug)}
                        className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                          cartAlbumSlugs.includes(album.slug)
                            ? "bg-brandPurple text-white"
                            : "border border-brandPurple text-brandPurple hover:bg-brandPurple hover:text-white"
                        }`}
                      >
                        {cartAlbumSlugs.includes(album.slug)
                          ? "Album Added"
                          : "Add Album to Cart"}
                      </button>
                    </div>

                    <div className="mt-6 space-y-4">
                      {album.tracks.map((track) => {
                        const inCart = cartTrackSlugs.includes(track.slug)

                        return (
                          <div
                            key={track.slug}
                            className="rounded-[1.25rem] border border-black/10 bg-[#FCFAF7] p-5"
                          >
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                              <div className="max-w-2xl">
                                <h3 className="text-xl font-semibold">{track.title}</h3>
                                <p className="mt-1 text-sm text-muted">{track.vibe}</p>
                              </div>

                              <div className="flex flex-wrap gap-3">
                                <button
                                  onClick={() => handlePlayPreview(track)}
                                  className="rounded-full bg-brandPurple px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                                >
                                  {playingSlug === track.slug
                                    ? "Pause Preview"
                                    : "Play Preview"}
                                </button>

                                <button
                                  onClick={() => toggleTrackInCart(track.slug)}
                                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                                    inCart
                                      ? "bg-brandBlue text-white"
                                      : "border border-brandBlue text-brandBlue hover:bg-brandBlue hover:text-white"
                                  }`}
                                >
                                  {inCart ? "Track Added" : `Add Track • ${formatPrice(TRACK_PRICE_CENTS)}`}
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-6 rounded-[2rem] border border-black/10 bg-surface p-6 shadow-sm">
            <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
              Cart
            </p>

            <h2 className="mt-3 text-2xl font-semibold">Your selections</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10">
                <p className="text-sm text-muted">
                  Tracks selected: <strong className="text-ink">{cartSummary.selectedTracks.length}</strong>
                </p>

                <p className="mt-2 text-sm text-muted">
                  Albums selected: <strong className="text-ink">{cartSummary.selectedAlbums.length}</strong>
                </p>

                <p className="mt-2 text-sm text-muted">
                  Delivered tracks: <strong className="text-ink">{cartSummary.deliveredTracks.length}</strong>
                </p>
              </div>

              {cartSummary.trackPricingSummary.length > 0 ? (
                <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10">
                  <p className="text-sm font-semibold text-ink">Track pricing applied</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {cartSummary.trackPricingSummary.map((item, index) => (
                      <li key={`${item}-${index}`}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10">
                <p className="text-sm text-muted">Total</p>
                <p className="mt-2 text-3xl font-semibold text-ink">
                  {formatPrice(cartSummary.totalCents)}
                </p>
              </div>

              <button
                onClick={startCheckout}
                disabled={
                  loadingCheckout || cartSummary.deliveredTracks.length === 0
                }
                className="w-full rounded-full bg-brandPurple px-6 py-4 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loadingCheckout ? "Redirecting to checkout..." : "Checkout"}
              </button>

              <p className="text-xs leading-relaxed text-muted">
                After payment, you&apos;ll get immediate download access and a copy sent to your email.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}