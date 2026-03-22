"use client"

import { motion } from "framer-motion"

export default function InsightSignupSection({ revealUp }) {
  return (
    <motion.section
      className="border-t border-black/10 bg-[#F9F6F1]"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
          Creative Insights
        </p>

        <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink">
          Notes for creatives navigating identity and growth.
        </h2>

        <p className="mt-6 text-muted text-lg leading-relaxed">
          Occasionally I share reflections about creativity, resistance,
          identity, and the process of becoming. If that resonates with you,
          you're invited.
        </p>

        <a
          href="#lead-magnet"
          className="inline-flex mt-8 rounded-full bg-brandPurple text-white px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
        >
          Join the List
        </a>
      </div>
    </motion.section>
  )
}