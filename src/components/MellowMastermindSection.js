"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function MellowMastermindSection({ revealUp }) {
  return (
    <motion.section
      id="mellow-mastermind"
      className="border-t border-black/10"
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
                  Mellow Mastermind
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
                  A framework for creatives learning to trust themselves again.
                </h2>

                <p className="mt-6 text-muted leading-relaxed text-lg">
                  Mellow Mastermind is the philosophy behind everything I create.
                  It’s built on the belief that creativity becomes sustainable when
                  clarity, self-trust, and expression work together.
                </p>

                <p className="mt-5 text-muted leading-relaxed text-lg">
                  Instead of forcing creativity through pressure or hustle, this
                  framework focuses on understanding how creativity actually works
                  within you.
                </p>

                <a
                  href="#coaching"
                  className="inline-flex mt-8 rounded-full border border-brandPurple/25 px-6 py-3 text-sm font-semibold text-brandPurple hover:bg-lavenderTint transition"
                >
                  Explore the Support Path
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col rounded-[1.5rem] border border-black/10 bg-lavenderTint p-6">
                  <h3 className="text-xl font-semibold text-ink">
                    Clarity
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed flex-1">
                    Understand the patterns, fears, and pressures shaping your
                    creative process.
                  </p>
                </div>

                <div className="flex flex-col rounded-[1.5rem] border border-black/10 bg-blueTint p-6">
                  <h3 className="text-xl font-semibold text-ink">
                    Self-Trust
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed flex-1">
                    Rebuild confidence in your voice so your creativity no longer
                    depends on external validation.
                  </p>
                </div>

                <div className="flex flex-col rounded-[1.5rem] border border-black/10 bg-peachTint p-6">
                  <h3 className="text-xl font-semibold text-ink">
                    Sustainability
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed flex-1">
                    Build creative rhythms that support your life instead of
                    exhausting it.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </motion.section>
  )
}