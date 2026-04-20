"use client"

import Image from "next/image"
import Link from "next/link"
import { WORKBOOKS, COMPANION } from "@/lib/books-catalog"
import ScrollToTopButton from "@/components/ScrollToTopButton"

const TAG_TINTS = ["bg-lavenderTint", "bg-blueTint", "bg-peachTint"]
const TAG_TEXT = ["text-brandPurple", "text-brandBlue", "text-brandOrange"]

export default function WorkbooksPage() {
  return (
    <main className="min-h-screen bg-cream text-ink px-6 py-16 md:py-20">
      <section className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
          >
            &larr; wandarogers.com
          </Link>
        </div>

        {/* Hero card */}
        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl">
          <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
            Workbooks
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            Go deeper on your own terms.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Each workbook targets a specific creative block. Download, work through it, keep it. $27 each, or get all five plus the full Companion guide and save.
          </p>
        </div>

        {/* Workbook cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {WORKBOOKS.map((wb) => (
            <div
              key={wb.slug}
              className="rounded-[1.75rem] border border-black/10 bg-surface p-7 shadow-sm flex flex-col h-full"
            >
              {/* Archetype badge */}
              <span
                className={`self-start rounded-full px-3 py-1 text-xs font-medium ${wb.tint} ${wb.accentText}`}
              >
                {wb.archetype}
              </span>

              {/* Title */}
              <h2 className="mt-4 text-xl font-semibold leading-snug">
                {wb.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-muted text-sm leading-relaxed flex-1">
                {wb.description}
              </p>

              {/* Bottom row */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-2xl font-semibold">{wb.price}</span>
                <a
                  href={wb.href}
                  className="rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                >
                  Get it &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Companion full-width card */}
        <div className="mt-8 rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl">
          <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
            Best value
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
            {COMPANION.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {COMPANION.description}
          </p>

          {/* Tag pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {COMPANION.tags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-medium ${TAG_TINTS[i % TAG_TINTS.length]} ${TAG_TEXT[i % TAG_TEXT.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-6 flex flex-wrap items-end gap-3">
            <span className="text-4xl font-semibold">{COMPANION.price}</span>
            <span className="text-muted text-sm mb-1">vs. {COMPANION.originalPrice} individually</span>
          </div>

          <a
            href={COMPANION.href}
            className="mt-6 inline-block rounded-full bg-brandPurple text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            Get the Companion &rarr;
          </a>
        </div>

        {/* Cross-reference section */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* The Books Behind the Work */}
          <div className="rounded-[1.75rem] bg-lavenderTint/40 p-8 flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/books/creatively-blocked.jpg"
                  alt="Why You're Creatively Blocked"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/books/first-to-make-it.jpg"
                  alt="The First to Make It This Far"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-snug">
                Two books on creativity and identity.
              </h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                Written from lived experience. Honest, practical, and personal.
              </p>
            </div>
            <Link
              href="/books"
              className="self-start rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Browse the Books &rarr;
            </Link>
          </div>

          {/* Listen While You Work */}
          <div className="rounded-[1.75rem] bg-blueTint/40 p-8 flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/music/im-not-a-rapper/cover.jpg"
                  alt="I'm Not a Rapper"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/music/some-experience-necessary/cover.jpg"
                  alt="Some Experience Necessary"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-snug">
                Music to create by.
              </h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                Two albums. Stream previews or buy the tracks you want.
              </p>
            </div>
            <Link
              href="/music"
              className="self-start rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Browse the Music Store &rarr;
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  )
}
