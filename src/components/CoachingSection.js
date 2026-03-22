"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function CoachingSection({ revealUp, calendlyLink }) {
  return (
    <motion.section
      id="coaching"
      className="border-t border-black/10 bg-[#F9F6F1]"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="rounded-[2rem] border border-black/10 bg-surface p-10 md:p-14 text-center shadow-xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
              Support
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink">
              For creatives ready to move differently.
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted">
              If you know there’s more in you but keep running into overthinking,
              self-doubt, or creative blocks, this work is designed to help you
              reconnect with clarity, rebuild trust in your voice, and move with
              more intention.
            </p>

            <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-4 text-left">
              <Reveal delay={0.06}>
                <div className="rounded-[1.25rem] border border-black/10 bg-[#FCFAF7] p-5">
                  <p className="font-semibold text-ink">Creative clarity</p>
                  <p className="mt-2 text-sm text-muted">
                    Understand what is actually blocking your momentum.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-[1.25rem] border border-black/10 bg-[#FCFAF7] p-5">
                  <p className="font-semibold text-ink">Strategic support</p>
                  <p className="mt-2 text-sm text-muted">
                    Build a path forward that fits your real life.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="rounded-[1.25rem] border border-black/10 bg-[#FCFAF7] p-5">
                  <p className="font-semibold text-ink">Sustainable execution</p>
                  <p className="mt-2 text-sm text-muted">
                    Create without burning yourself out in the process.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brandPurple text-white px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition"
              >
                Book a Call
              </a>

              <a
                href="#lead-magnet"
                className="rounded-full border border-brandBlue/30 px-8 py-3.5 text-sm text-brandBlue hover:bg-blueTint transition"
              >
                Start With the Creative Clarity Guide
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </motion.section>
  )
}