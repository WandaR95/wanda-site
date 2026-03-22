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
                  Free Resource
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
                  Get clear. Get moving. Create with less friction.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
                  Creative blocks rarely mean you’ve lost your talent. More often,
                  they mean something inside you needs clarity, space, or a
                  different way forward.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-muted max-w-2xl">
                  This free resource is designed to help you reconnect with your
                  voice, reduce creative friction, and regain momentum without
                  forcing inspiration.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
                  <span className="rounded-full bg-lavenderTint px-4 py-2">
                    Creative clarity
                  </span>
                  <span className="rounded-full bg-blueTint px-4 py-2">
                    Gentle momentum
                  </span>
                  <span className="rounded-full bg-peachTint px-4 py-2">
                    Self-trust tools
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.5rem] border border-black/10 bg-[#FCFAF7] p-6 md:p-7">
                <h3 className="text-2xl font-semibold text-ink">
                  Get your FREE Mellow Mastermind Creative Clarity Guide
                </h3>

                <p className="mt-3 text-muted leading-relaxed">
                  Enter your details below and I’ll send it to you.
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