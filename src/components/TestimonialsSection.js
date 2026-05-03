"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"
import SectionIntro from "./SectionIntro"

// PLACEHOLDER quotes — grounded in real observed behavior, same framework applied professionally.
// Replace with direct quotes from book readers, workbook users, or coaching clients before launch.
const TESTIMONIALS = [
  {
    quote:
      "I've read a lot of books about creative blocks. Most name the problem and leave you there. This one actually broke it down in a way I could act on. I started the workbook skeptical and finished it with a clearer head than I've had in years.",
    name: "D.M.",
    role: "Writer & Creative Director",
    archetype: "Overthinker",
    tint: "bg-lavenderTint",
    border: "border-brandPurple/15",
  },
  {
    quote:
      "I came in thinking I just needed accountability. What I actually got was someone who helped me understand why I kept abandoning things — and that changed everything. Three months later I finished a project I'd been circling for two years.",
    name: "M.T.",
    role: "Musician & Filmmaker",
    archetype: "Idea Hopper",
    tint: "bg-peachTint",
    border: "border-brandOrange/15",
  },
  {
    quote:
      "The perfectionism chapter stopped me cold. I've been calling myself a work-in-progress for so long I forgot I was allowed to finish things. I've already passed this book to three people who needed to hear it.",
    name: "P.K.",
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
