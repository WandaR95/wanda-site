"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { WORKBOOKS, COMPANION } from "@/lib/books-catalog"
import ScrollToTopButton from "@/components/ScrollToTopButton"

const CART_KEY = "workbook-cart"

export default function WorkbooksPage() {
  const [cart, setCart] = useState([])
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  // Restore cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY)
      if (saved) setCart(JSON.parse(saved))
    } catch {}
    setLoadingCheckout(false)
  }, [])

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      if (cart.length > 0) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart))
      } else {
        localStorage.removeItem(CART_KEY)
      }
    } catch {}
  }, [cart])

  const toggle = (slug) =>
    setCart((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )

  const inCart = (slug) => cart.includes(slug)

  const total = cart.reduce((sum, slug) => {
    if (slug === "companion") return sum + COMPANION.digitalPriceCents
    const wb = WORKBOOKS.find((w) => w.slug === slug)
    return sum + (wb?.digitalPriceCents ?? 0)
  }, 0)

  const startCheckout = async () => {
    if (cart.length === 0) return
    try {
      setLoadingCheckout(true)
      const res = await fetch("/api/workbook-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slugs: cart }),
      })
      const data = await res.json()
      if (!res.ok) { alert(data.error || "Unable to start checkout."); setLoadingCheckout(false); return }
      window.location.href = data.url
    } catch {
      alert("Something went wrong.")
      setLoadingCheckout(false)
    }
  }

  const formatPrice = (cents) => `$${(cents / 100).toFixed(2)}`

  return (
    <main className="min-h-screen bg-cream text-ink px-6 py-16 md:py-20">
      <section className="max-w-6xl mx-auto">

        {/* Back nav */}
        <div className="mb-6">
          <Link href="/" className="text-sm font-medium text-muted hover:text-ink transition-colors duration-200">
            &larr; wandarogers.com
          </Link>
        </div>

        {/* Hero */}
        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl mb-10">
          <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">Workbooks</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Go deeper on your own terms.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Each workbook targets a specific creative block. Download the PDF instantly, work through it, keep it.
            Add any to your cart below, then checkout in one step.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">

          {/* Workbook grid */}
          <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {WORKBOOKS.map((wb) => (
                <div
                  key={wb.slug}
                  className="rounded-[1.75rem] border border-black/10 bg-surface shadow-sm flex flex-col overflow-hidden"
                >
                  {/* Cover */}
                  <div className="relative w-full" style={{ aspectRatio: "800/1040" }}>
                    <Image src={wb.cover} alt={wb.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Archetype badge */}
                    <span className={`self-start rounded-full px-3 py-1 text-xs font-medium ${wb.tint} ${wb.accentText} mb-4`}>
                      {wb.archetype}
                    </span>

                    <h2 className="text-lg font-semibold leading-snug">{wb.title}</h2>
                    <p className="mt-2 text-muted text-sm leading-relaxed flex-1">{wb.description}</p>

                    {/* Pricing row */}
                    <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between gap-3">
                      <p className="text-2xl font-semibold">{wb.digitalPrice}</p>
                      <button
                        onClick={() => toggle(wb.slug)}
                        className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                          inCart(wb.slug)
                            ? "bg-brandPurple text-white"
                            : "border border-brandPurple text-brandPurple hover:bg-brandPurple hover:text-white"
                        }`}
                      >
                        {inCart(wb.slug) ? "✓ Added" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Companion full-width card */}
            <div className="mt-8 rounded-[2rem] border border-brandPurple/20 bg-surface shadow-xl overflow-hidden">
              <div className="h-[3px] bg-gradient-to-r from-brandPurple via-brandBlue to-brandOrange" />
              <div className="grid md:grid-cols-[220px_1fr] gap-0">
                {/* Cover */}
                <div className="relative min-h-[220px]">
                  <Image src={COMPANION.cover} alt={COMPANION.title} fill className="object-cover" sizes="220px" />
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-ink/40 mb-3">Best value</p>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-snug">{COMPANION.title}</h2>
                  <p className="mt-3 text-muted leading-relaxed">{COMPANION.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {COMPANION.tags.map((tag, i) => {
                      const tints = ["bg-lavenderTint text-brandPurple", "bg-blueTint text-brandBlue", "bg-peachTint text-brandOrange"]
                      return (
                        <span key={tag} className={`rounded-full px-3 py-1 text-xs font-medium ${tints[i % tints.length]}`}>
                          {tag}
                        </span>
                      )
                    })}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-semibold">{COMPANION.digitalPrice}</p>
                      <p className="text-sm text-muted line-through">{COMPANION.originalPrice}</p>
                    </div>
                    <button
                      onClick={() => toggle("companion")}
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                        inCart("companion")
                          ? "bg-brandPurple text-white"
                          : "border border-brandPurple text-brandPurple hover:bg-brandPurple hover:text-white"
                      }`}
                    >
                      {inCart("companion") ? "✓ Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky cart */}
          <aside className="lg:sticky lg:top-6 rounded-[2rem] border border-black/10 bg-surface p-6 shadow-sm">
            <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">Cart</p>
            <h2 className="mt-3 text-2xl font-semibold">Your selections</h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10 min-h-[64px]">
                {cart.length === 0 ? (
                  <p className="text-sm text-ink/35 italic">Nothing added yet.</p>
                ) : (
                  <ul className="space-y-1.5 text-sm text-muted">
                    {cart.map((slug) => {
                      const label = slug === "companion"
                        ? COMPANION.title
                        : WORKBOOKS.find((w) => w.slug === slug)?.title
                      const price = slug === "companion"
                        ? COMPANION.digitalPrice
                        : WORKBOOKS.find((w) => w.slug === slug)?.digitalPrice
                      return (
                        <li key={slug} className="flex justify-between gap-2">
                          <span className="truncate">{label}</span>
                          <span className="shrink-0 font-medium text-ink">{price}</span>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>

              <div className="rounded-2xl bg-[#FCFAF7] p-4 border border-black/10">
                <p className="text-sm text-muted">Total</p>
                <p className="mt-1 text-3xl font-semibold">{formatPrice(total)}</p>
              </div>

              <button
                onClick={startCheckout}
                disabled={loadingCheckout || cart.length === 0}
                className="w-full rounded-full bg-brandPurple px-6 py-4 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loadingCheckout ? "Redirecting..." : "Checkout"}
              </button>

              <p className="text-xs leading-relaxed text-muted">
                After payment you&apos;ll get instant PDF access and a copy sent to your email.
              </p>
            </div>
          </aside>

        </div>

        {/* Cross-references */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-[1.75rem] bg-lavenderTint/40 p-8 flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image src="/books/creatively-blocked.jpg" alt="Why You're Creatively Blocked" fill className="object-cover" sizes="64px" />
              </div>
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image src="/books/first-to-make-it.jpg" alt="The First to Make It This Far" fill className="object-cover" sizes="64px" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">The books behind the work.</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">Two books on creativity and identity. Written from lived experience.</p>
            </div>
            <Link href="/books" className="self-start rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">
              Browse the Books &rarr;
            </Link>
          </div>

          <div className="rounded-[1.75rem] bg-blueTint/40 p-8 flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image src="/music/im-not-a-rapper/cover.jpg" alt="I'm Not a Rapper" fill className="object-cover" sizes="64px" />
              </div>
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image src="/music/some-experience-necessary/cover.jpg" alt="Some Experience Necessary" fill className="object-cover" sizes="64px" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Music to create by.</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">Two albums. Stream previews or buy the tracks you want.</p>
            </div>
            <Link href="/music" className="self-start rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">
              Browse the Music Store &rarr;
            </Link>
          </div>
        </div>

      </section>
      <ScrollToTopButton />
    </main>
  )
}
