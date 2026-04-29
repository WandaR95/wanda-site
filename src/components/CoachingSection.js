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
                ⚡ Founding rate · $997 · Only 5 spots total
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
                $997 · 3 months · 6 sessions · bi-weekly · 60 min each
              </p>

              {/* Spots counter — update SPOTS_CLAIMED as spots fill */}
              {(() => {
                const SPOTS_TOTAL = 5
                const SPOTS_CLAIMED = 0
                const SPOTS_LEFT = SPOTS_TOTAL - SPOTS_CLAIMED
                const pct = Math.round((SPOTS_CLAIMED / SPOTS_TOTAL) * 100)
                return (
                  <div className="mt-6 max-w-xs mx-auto">
                    <div className="flex justify-between text-xs text-ink/50 mb-1.5">
                      <span>Founding spots remaining</span>
                      <span className="font-semibold text-brandOrange">{SPOTS_LEFT} of {SPOTS_TOTAL}</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-brandOrange transition-all duration-500"
                        style={{ width: `${Math.max(pct, 4)}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-ink/40">
                      {SPOTS_LEFT === SPOTS_TOTAL
                        ? "All spots still available at founding rate"
                        : `${SPOTS_CLAIMED} spot${SPOTS_CLAIMED !== 1 ? "s" : ""} claimed — founding rate closes when the last one fills`}
                    </p>
                  </div>
                )
              })()}

              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted">
                This is the founding client offer. You get full access to my creative
                clarity framework, dedicated 1:1 sessions, and a customized 90-day
                roadmap — at a rate that goes away once these 5 spots are filled. If
                you&apos;ve been circling this work, this is the door.
              </p>
            </div>

            {/* 3 benefit boxes */}
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-4 text-left items-stretch">
              <Reveal delay={0.06} className="h-full">
                <div className="h-full flex flex-col rounded-[1.25rem] border border-black/10 bg-lavenderTint p-6">
                  <p className="font-semibold text-ink">1:1 Creative Clarity Sessions</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    We diagnose the real block — not the surface one. Every session is
                    built around your archetype, your work, and your actual life.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="h-full">
                <div className="h-full flex flex-col rounded-[1.25rem] border border-black/10 bg-blueTint p-6">
                  <p className="font-semibold text-ink">90-Day Custom Roadmap</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    Your archetype, your goals, your timeline. A clear path forward
                    built in session one — so you always know what you&apos;re moving toward.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18} className="h-full">
                <div className="h-full flex flex-col rounded-[1.25rem] border border-black/10 bg-peachTint p-6">
                  <p className="font-semibold text-ink">Direct Access Between Sessions</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    Async support when you get stuck mid-week. You don&apos;t have to hold
                    your question until the next call.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* What changes */}
            <div className="mt-10 max-w-4xl mx-auto rounded-[1.5rem] border border-black/10 bg-[#FCFAF7] p-7 md:p-8">
              <p className="text-sm font-semibold text-ink mb-4">
                90 days from now, you&apos;ll have:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-brandPurple shrink-0">✓</span>
                  A named, understood creative archetype — not a vague sense of being stuck
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-brandPurple shrink-0">✓</span>
                  A creative practice built around your actual schedule and energy
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-brandPurple shrink-0">✓</span>
                  Clarity on which projects deserve your attention — and permission to release the rest
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-brandPurple shrink-0">✓</span>
                  The ability to get unstuck without spiraling — on your own
                </li>
              </ul>
            </div>

            {/* Qualification */}
            <div className="mt-6 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              <Reveal delay={0.06} className="h-full">
                <div className="h-full rounded-[1.25rem] border border-black/10 bg-surface p-6">
                  <p className="text-sm font-semibold text-ink mb-3">This is for you if:</p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed">
                    <li className="flex items-start gap-2"><span className="mt-0.5 text-brandPurple shrink-0">→</span> You&apos;ve been circling the same creative block for months or years</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5 text-brandPurple shrink-0">→</span> You know what you want to make but can&apos;t seem to make yourself do it</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5 text-brandPurple shrink-0">→</span> You&apos;re ready to do the real work, not just talk about it</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.12} className="h-full">
                <div className="h-full rounded-[1.25rem] border border-black/10 bg-surface p-6">
                  <p className="text-sm font-semibold text-ink mb-3">This isn&apos;t for you if:</p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed">
                    <li className="flex items-start gap-2"><span className="mt-0.5 text-muted shrink-0">✕</span> You want a quick fix or a content calendar</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5 text-muted shrink-0">✕</span> You&apos;re looking for someone to hold your hand every step of the way</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5 text-muted shrink-0">✕</span> You&apos;re not ready to look honestly at what&apos;s actually in the way</li>
                  </ul>
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
