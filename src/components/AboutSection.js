"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"

const pillars = [
  {
    tint: "bg-lavenderTint",
    label: "Capoeira",
    body: "I've been training Capoeira for over a decade. It's a martial art where you learn to read people, adapt mid-movement, and find power in flow. It taught me that creativity isn't about force. It's about timing, presence, and trusting your body to know before your brain catches up.",
  },
  {
    tint: "bg-blueTint",
    label: "Microsoft",
    body: "Working at Microsoft taught me how to move with intention inside complex systems, advocate for ideas that matter, and find space for genuine creative work within demanding environments. That experience sharpened how I think about clarity, strategy, and what it really takes to bring something meaningful to life.",
  },
  {
    tint: "bg-peachTint",
    label: "Music",
    body: "Music is where I process everything I can't put into regular words. It's a form of expression when my feelings need a voice and an outlet. Two albums. Dozens of tracks. All of it honest.",
  },
  {
    tint: "bg-lavenderTint",
    label: "Memoir",
    body: "My book The First to Make It This Far is the story of becoming someone no one in your family has been before. What it costs you, and what it gives you.",
  },
]

export default function AboutSection({ revealUp }) {
  return (
    <motion.section
      id="about"
      className="border-t border-black/10 bg-[#F9F6F1]"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <Reveal delay={0.04}>
              <div className="lg:sticky lg:top-28">
                <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
                  About
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
                  Four lives.
                  <br />
                  One creative obsession.
                </h2>

                <p className="mt-6 text-muted leading-relaxed">
                  I&apos;m an artist, author, and founder of Mellow Mastermind. My work
                  lives at the intersection of creativity, identity, and personal growth.
                  It&apos;s shaped by everything I&apos;ve lived, not just what I&apos;ve studied.
                </p>

                <Reveal delay={0.14}>
                  <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-surface p-6 shadow-sm">
                    <p className="text-xl md:text-2xl font-semibold leading-tight text-ink">
                      Creative resistance isn&apos;t a character flaw.
                      <br />
                      It&apos;s information.
                    </p>

                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      When you learn how to understand it instead of fighting it,
                      everything about your creative process changes.
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5 items-stretch">
              {pillars.map((p, i) => (
                <Reveal key={p.label} delay={0.06 * (i + 1)} className="h-full">
                  <div className={`h-full flex flex-col rounded-[1.75rem] border border-black/10 ${p.tint} p-7`}>
                    <p className="text-[11px] tracking-[0.24em] uppercase text-ink/50 mb-3">
                      {p.label}
                    </p>
                    <p className="text-muted leading-relaxed flex-1">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </motion.section>
  )
}
