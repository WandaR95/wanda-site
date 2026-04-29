"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"
import SectionIntro from "./SectionIntro"

// Replace these with real client quotes before going live
const TESTIMONIALS = [
  {
    quote:
      "I've tried every productivity hack out there. None of it worked because I was treating the wrong problem. Understanding that I'm an Overthinker changed how I approach everything. The workbook gave me a process I actually use.",
    name: "Danielle M.",
    role: "Writer & Creative Director",
    archetype: "Overthinker",
    tint: "bg-lavenderTint",
    border: "border-brandPurple/15",
  },
  {
    quote:
      "The coaching sessions went deeper than I expected. I wasn't just talking about my projects — I was understanding why I kept abandoning them. Three months in, I finished something for the first time in years.",
    name: "Marcus T.",
    role: "Musician & Filmmaker",
    archetype: "Idea Hopper",
    tint: "bg-peachTint",
    border: "border-brandOrange/15",
  },
  {
    quote:
      "I read Why You're Creatively Blocked in one sitting. The perfectionism chapter hit different. I've recommended it to every creative I know who keeps saying they're 'not ready.'",
    name: "Priya K.",
    role: "Visual Artist",
    archetype: "Perfectionist",
    tint: "bg-blueTint",
    border: "border-brandBlue/15",
  },
]

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="border-t border-black/10 bg-cream"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="What People Say"
            title="The work speaks."
            body="Creatives who stopped diagnosing themselves as broken — and started building something real."
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * (i + 1)} className="h-full">
              <div
                className={`h-full flex flex-col rounded-[1.75rem] border ${t.border} ${t.tint} p-7`}
              >
                <p className="text-4xl leading-none mb-4 text-ink/20 font-serif select-none">
                  &ldquo;
                </p>
                <p className="text-ink leading-relaxed flex-1 text-[0.95rem]">
                  {t.quote}
                </p>
                <div className="mt-6 pt-5 border-t border-black/10">
                  <p className="font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.role}</p>
                  <span className="mt-2 inline-block text-[10px] tracking-[0.22em] uppercase text-ink/40">
                    {t.archetype}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
