"use client"

import { motion } from "framer-motion"

export default function FinalCtaSection({ revealUp }) {
  return (
    <motion.section
      className="border-t border-black/10 bg-[#F9F6F1]"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
          Begin Anywhere
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink">
          However you enter, the invitation is the same.
          One brand. Multiple ways in.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted max-w-3xl mx-auto">
          Listen to the music.
          Read the books.
          Start with a free resource.
          Book a call when you’re ready.

          Every path leads to the same place:
          a deeper relationship with your voice and your creativity.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#music"
            className="rounded-full bg-brandPurple text-white px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition"
          >
            Listen
          </a>
          <a
            href="#books"
            className="rounded-full border border-brandBlue/30 px-8 py-3.5 text-sm text-brandBlue hover:bg-blueTint transition"
          >
            Read
          </a>
          <a
            href="#coaching"
            className="rounded-full border border-brandOrange/30 px-8 py-3.5 text-sm text-brandOrange hover:bg-peachTint transition"
          >
            Work With Me
          </a>
        </div>
      </div>
    </motion.section>
  )
}