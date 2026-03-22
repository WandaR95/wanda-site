"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function ChooseYourPathSection({ revealUp }) {
  const paths = [
    {
      eyebrow: "For the listener",
      title: "Start with my music.",
      body: "If you connect through sound first, begin there. The music is often the fastest way into the emotional core of my work.",
      cta: "Listen Now",
      href: "#music",
      tint: "bg-lavenderTint",
    },
    {
      eyebrow: "For the creative in transition",
      title: "Start with clarity.",
      body: "If you’ve been feeling blocked, disconnected, or creatively heavy, begin with the free reset and reconnect with your rhythm.",
      cta: "Get the Free Reset",
      href: "#lead-magnet",
      tint: "bg-blueTint",
    },
    {
      eyebrow: "For the deeper thinker",
      title: "Start with the books.",
      body: "If you want to explore the inner work behind creativity, identity, resistance, and becoming, this is your way in.",
      cta: "Explore the Books",
      href: "#books",
      tint: "bg-peachTint",
    },
  ]

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 pb-20 md:pb-24"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Reveal>
        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-10 shadow-xl">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
              Choose Your Way In
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-ink">
              However you enter, the invitation is the same:
              reconnect with your voice.
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Start where it feels most natural. Whether you enter through music,
              insight, or reflection, each path leads toward deeper clarity,
              stronger self-trust, and more honest creative expression.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {paths.map((path, index) => (
              <Reveal key={path.title} delay={0.06 * (index + 1)}>
                <div
                  className={`rounded-[1.5rem] border border-black/10 ${path.tint} p-6`}
                >
                  <p className="text-[11px] tracking-[0.25em] uppercase text-ink/45">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-ink">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">
                    {path.body}
                  </p>
                  <a
                    href={path.href}
                    className="inline-flex mt-6 rounded-full bg-white/80 border border-black/10 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white transition"
                  >
                    {path.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </motion.section>
  )
}