"use client"

import { motion } from "framer-motion"
import SectionIntro from "./SectionIntro"
import Reveal from "./Reveal"

export default function WhatThisWorkHoldsSection({ revealUp }) {
  const pillars = [
    {
      number: "01",
      title: "Clarity",
      body: "Understanding what’s actually in the way changes everything. When you can name the friction, you can move through it differently.",
    },
    {
      number: "02",
      title: "Expression",
      body: "Your voice gets stronger when it stops being forced. Real creativity sounds different when it comes from truth instead of pressure.",
    },
    {
      number: "03",
      title: "Self-Trust",
      body: "Sustainable creativity begins when you trust yourself enough to keep going, even before everything feels perfect.",
    },
  ]

  return (
    <motion.section
      id="what-this-work-holds"
      className="border-t border-black/10"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="What This Work Holds"
            title="Built around clarity, expression, and self-trust."
            body="Everything here is designed to help creatives reconnect with themselves, move with intention, and build from a place that feels honest."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.08 * (index + 1)} className="h-full">
              <div className="h-full flex flex-col rounded-[1.75rem] border border-black/10 bg-surface p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-ink/40">
                  {pillar.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-muted leading-relaxed flex-1">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  )
}