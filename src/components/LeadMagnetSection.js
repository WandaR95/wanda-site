"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"
import LeadMagnetForm from "./LeadMagnetForm"

export default function LeadMagnetSection({ revealUp }) {
  return (
    <motion.section
      id="lead-magnet"
      className="max-w-7xl mx-auto px-6 py-20 md:py-24"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Reveal>
        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-10 shadow-xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <Reveal delay={0.04}>
              <div>
                <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
                  Mellow Mastermind
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
                  The Creative Clarity Guide
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
                  Stop overthinking. Start creating. This free guide gives you a
                  15-minute reset designed to help you break through creative
                  blocks, rebuild momentum, and move with more clarity in less
                  time than it takes to scroll.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-muted max-w-2xl">
                  Based on <em>Why You&apos;re Creatively Blocked</em>, this free
                  guide gives you a powerful first step toward deeper clarity,
                  stronger consistency, and a more sustainable creative process.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
                  <span className="rounded-full bg-lavenderTint px-4 py-2">
                    Creative clarity
                  </span>
                  <span className="rounded-full bg-blueTint px-4 py-2">
                    15-minute reset
                  </span>
                  <span className="rounded-full bg-peachTint px-4 py-2">
                    Momentum-building tools
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.5rem] border border-black/10 bg-[#FCFAF7] p-6 md:p-7">
                <h3 className="text-2xl font-semibold text-ink">
                  Get the Creative Clarity Guide — free
                </h3>

                <p className="mt-3 text-muted leading-relaxed">
                  Enter your details below to get instant access to The 15-Minute
                  Creative Reset. Get clear. Get moving. Create with less friction.
                </p>

                <div className="mt-6">
                  <LeadMagnetForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </motion.section>
  )
}