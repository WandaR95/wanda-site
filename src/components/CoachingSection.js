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
          <div className="rounded-[2rem] border border-black/10 bg-surface p-10 md:p-14 shadow-xl">

            {/* Urgency badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-peachTint border border-brandOrange/20 px-5 py-2 text-sm font-medium text-brandOrange">
                ⚡ 5 founding spots · $997 · This rate closes when spots fill
              </span>
            </div>

            <div className="text-center">
              <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
                1:1 Coaching
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink">
                Founding Client Rate:
                <span className="block text-brandPurple mt-1">5 Spots Only</span>
              </h2>

              <p className="mt-3 text-xl font-medium text-muted">
                $997 · 3 months · 1:1 coaching
              </p>

              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted">
                This is the founding client offer. You get full access to my creative
                clarity framework, dedicated 1:1 sessions, and a customized 90-day
                roadmap, at a rate that goes away once these 5 spots are filled. If
                you&apos;ve been circling this work, this is the door.
              </p>
            </div>

            {/* 3 benefit boxes */}
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-4 text-left items-stretch">
              <Reveal delay={0.06} className="h-full">
                <div className="h-full flex flex-col rounded-[1.25rem] border border-black/10 bg-lavenderTint p-6">
                  <p className="font-semibold text-ink">1:1 Creative Clarity Sessions</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    Diagnose the real block. Build a practice around your actual life,
                    not someone else&apos;s template.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="h-full">
                <div className="h-full flex flex-col rounded-[1.25rem] border border-black/10 bg-blueTint p-6">
                  <p className="font-semibold text-ink">90-Day Custom Roadmap</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    Your archetype, your goals, your timeline. A clear path forward,
                    not a generic plan.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18} className="h-full">
                <div className="h-full flex flex-col rounded-[1.25rem] border border-black/10 bg-peachTint p-6">
                  <p className="font-semibold text-ink">Direct Access</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    Async support between sessions. You don&apos;t have to wait until the
                    next call to get unstuck.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brandPurple text-white px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition"
              >
                Claim Your Spot →
              </a>

              <a
                href="#workbooks"
                className="rounded-full border border-brandBlue/30 px-8 py-3.5 text-sm text-brandBlue hover:bg-blueTint transition"
              >
                Not ready? Start with a workbook →
              </a>
            </div>

            <p className="mt-6 text-center text-xs text-ink/40">
              The 30-minute call is free. The founding rate is not permanent.
            </p>
          </div>
        </div>
      </Reveal>
    </motion.section>
  )
}
