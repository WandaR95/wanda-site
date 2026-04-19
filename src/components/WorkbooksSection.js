"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"
import SectionIntro from "./SectionIntro"

const workbooks = [
  {
    title: "The Overthinking Workbook",
    archetype: "Overthinker",
    tint: "bg-lavenderTint",
    accentText: "text-brandPurple",
    description:
      "Stop analyzing and start making. A guided process for breaking the loop, moving through paralysis, and building the muscle of decisive action.",
    href: "#",
  },
  {
    title: "The Perfectionist's Permission Slip",
    archetype: "Perfectionist",
    tint: "bg-blueTint",
    accentText: "text-brandBlue",
    description:
      "Let go of the standard that's keeping you stuck. Exercises for building \"good enough\" momentum. Finished beats flawless.",
    href: "#",
  },
  {
    title: "The Focus Fix",
    archetype: "Distracted",
    tint: "bg-peachTint",
    accentText: "text-brandOrange",
    description:
      "For creatives who can't stay in the chair. Practical systems for the distracted maker: boundary-setting, time-blocking, and reclaiming your own creative hours.",
    href: "#",
  },
  {
    title: "The Idea Graveyard",
    archetype: "Idea Hopper",
    tint: "bg-lavenderTint",
    accentText: "text-brandPurple",
    description:
      "Finish what you started. A structured excavation of your abandoned projects: finding out which ones still matter and building the commitment to see them through.",
    href: "#",
  },
  {
    title: "The Burnout Recovery Guide",
    archetype: "Burnout",
    tint: "bg-peachTint",
    accentText: "text-brandOrange",
    description:
      "Reignite slowly, sustainably. Rest is part of the process, not a detour from it. A step-by-step guide to rebuilding creative energy from the ground up.",
    href: "#",
  },
]

export default function WorkbooksSection({ revealUp }) {
  return (
    <motion.section
      id="workbooks"
      className="border-t border-black/10 bg-[#F9F6F1]"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="Workbooks"
            title="Go deeper on your own terms."
            body="Each workbook targets a specific creative block. Download, work through it, keep it. $27 each, or get all five plus the full Companion guide and save."
          />
        </Reveal>

        {/* 5 individual workbooks */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workbooks.map((wb, i) => (
            <Reveal key={wb.title} delay={0.06 * (i + 1)}>
              <div className="group flex flex-col rounded-[1.75rem] border border-black/10 bg-surface p-7 shadow-sm hover:border-brandPurple/25 hover:shadow-md transition-all duration-200 h-full">
                {/* Tint badge */}
                <span
                  className={`self-start rounded-full ${wb.tint} ${wb.accentText} px-3 py-1 text-xs font-medium mb-5`}
                >
                  {wb.archetype}
                </span>

                <h3 className="text-xl font-semibold leading-snug text-ink">
                  {wb.title}
                </h3>

                <p className="mt-3 text-muted text-sm leading-relaxed flex-1">
                  {wb.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-ink">$27</span>
                  <a
                    href={wb.href}
                    className="rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Get it →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Companion — full-width feature card */}
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-[11px] tracking-[0.28em] uppercase text-ink/40 mb-3">
                  Best value
                </p>
                <h3 className="text-3xl md:text-4xl font-semibold text-ink leading-snug">
                  The Creative Clarity Companion
                </h3>
                <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
                  All 5 workbooks plus a complete 12-week guided program, structured
                  by archetype, paced for real life. One price. One process. Everything
                  you need to move from blocked to building.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-lavenderTint px-4 py-2 text-muted">
                    All 5 workbooks included
                  </span>
                  <span className="rounded-full bg-blueTint px-4 py-2 text-muted">
                    12-week guided program
                  </span>
                  <span className="rounded-full bg-peachTint px-4 py-2 text-muted">
                    Archetype-specific path
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
                <div className="text-center lg:text-right">
                  <p className="text-4xl font-semibold text-ink">$97</p>
                  <p className="text-sm text-muted mt-1">
                    vs. $135 individually
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-full bg-brandPurple text-white px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition whitespace-nowrap"
                >
                  Get the Companion →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </motion.section>
  )
}
