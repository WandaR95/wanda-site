"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"

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
              <div>
                <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
                  About
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
                  Helping creatives stop fighting themselves.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  I’m an artist, author, and founder of Mellow Mastermind. My work
                  lives at the intersection of creativity, identity, and personal
                  growth.
                </p>

                <p>
                  I’ve spent years studying what actually happens beneath creative
                  blocks — the fear, the pressure, the identity shifts, and the
                  quiet voice that gets buried under expectations.
                </p>

                <p>
                  Through music, books, and the Mellow Mastermind framework, I help
                  people reconnect with that voice and build a creative life that
                  feels more honest, sustainable, and fully their own.
                </p>

                <Reveal delay={0.18}>
                  <div className="rounded-[1.5rem] border border-black/10 bg-surface p-6 shadow-sm">
                    <p className="text-xl md:text-2xl font-semibold leading-tight text-ink">
                      Creative resistance isn’t a character flaw.
                      <br />
                      It’s information.
                    </p>

                    <p className="mt-3 text-muted">
                      When you learn how to understand it instead of fighting it,
                      everything about your creative process changes.
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </motion.section>
  )
}