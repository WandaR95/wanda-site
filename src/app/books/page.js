"use client"

import Image from "next/image"
import Link from "next/link"
import { BOOKS } from "@/lib/books-catalog"
import ScrollToTopButton from "@/components/ScrollToTopButton"

const THEME_TINTS = ["bg-lavenderTint", "bg-blueTint", "bg-peachTint"]
const THEME_TEXT = ["text-brandPurple", "text-brandBlue", "text-brandOrange"]

export default function BooksPage() {
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
            Books by Wanda Rogers
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            The inner work is the real work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Two books on creativity, identity, and becoming. Each one written from the inside out.
          </p>
        </div>

        {/* Book cards grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {BOOKS.map((book) => (
            <div
              key={book.slug}
              className="rounded-[1.75rem] border border-black/10 bg-surface p-7 shadow-sm flex flex-col h-full"
            >
              {/* Book cover */}
              <div className="relative w-full overflow-hidden mb-6" style={{ aspectRatio: "1024/1384" }}>
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Format badge */}
              <p className="text-[10px] tracking-[0.28em] uppercase text-ink/40 font-medium">
                {book.format}
              </p>

              {/* Title */}
              <h2 className="mt-2 text-2xl font-semibold leading-snug">
                {book.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-muted leading-relaxed">
                {book.description}
              </p>

              {/* Long description */}
              <p className="mt-2 text-muted text-sm leading-relaxed">
                {book.longDescription}
              </p>

              {/* Theme pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {book.themes.map((theme, i) => (
                  <span
                    key={theme}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${THEME_TINTS[i % THEME_TINTS.length]} ${THEME_TEXT[i % THEME_TEXT.length]}`}
                  >
                    {theme}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6 flex flex-col gap-3">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  className="self-start rounded-full bg-brandPurple text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  {book.cta}
                </a>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  Buy on Lulu &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-reference section */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Listen to the Music */}
          <div className="rounded-[1.75rem] bg-lavenderTint/40 p-8 flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="relative w-[76px] h-[76px] rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/music/im-not-a-rapper/cover.jpg"
                  alt="I'm Not a Rapper"
                  fill
                  className="object-cover"
                  sizes="76px"
                />
              </div>
              <div className="relative w-[76px] h-[76px] rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/music/some-experience-necessary/cover.jpg"
                  alt="Some Experience Necessary"
                  fill
                  className="object-cover"
                  sizes="76px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-snug">
                Two albums. All of it honest.
              </h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                Stream previews, buy tracks, or grab the full album.
              </p>
            </div>
            <Link
              href="/music"
              className="self-start rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Browse the Music Store &rarr;
            </Link>
          </div>

          {/* Go Deeper with Workbooks */}
          <div className="rounded-[1.75rem] bg-peachTint/40 p-8 flex flex-col gap-5">
            <div>
              <h3 className="text-xl font-semibold leading-snug">
                Targeted workbooks for every creative block.
              </h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                Five workbooks, one companion guide. Built around your archetype.
              </p>
            </div>
            <Link
              href="/workbooks"
              className="self-start rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Browse the Workbooks &rarr;
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  )
}
