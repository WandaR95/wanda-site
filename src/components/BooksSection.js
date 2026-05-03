"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import SectionIntro from "./SectionIntro"
import Reveal from "./Reveal"

export default function BooksSection({ revealUp, featuredBooks }) {
  return (
    <motion.section
      id="books"
      className="border-t border-black/10 bg-[#F9F6F1]"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="Books"
            title="For the inner work behind the creative work."
            body="These books explore the emotional and psychological layers behind creativity: identity, resistance, healing, ambition, and the courage it takes to keep becoming who you are meant to be."
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
          {featuredBooks.map((book, index) => (
            <Reveal key={book.title} delay={0.08 * (index + 1)} className="h-full">
              <div className="group flex flex-col h-full rounded-[1.75rem] border border-black/10 bg-surface p-7 hover:border-brandBlue/25 transition shadow-sm">
                <div className="relative w-full overflow-hidden shadow-xl" style={{ aspectRatio: "1024/1384" }}>
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-ink/40">
                    {book.format}
                  </span>
                  <Link href="/books" className="text-sm text-brandBlue hover:opacity-80 transition">
                    View →
                  </Link>
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-snug text-ink">
                  {book.title}
                </h3>

                <p className="mt-4 text-muted leading-relaxed flex-1">
                  {book.description}
                </p>

                {book.themes && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {book.themes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-full bg-lavenderTint px-3 py-1 text-xs text-ink/60"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                >
                  {book.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  )
}