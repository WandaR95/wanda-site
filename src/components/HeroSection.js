"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function HeroSection() {
  return (
    <section id="top" className="max-w-7xl mx-auto px-6 pt-14 md:pt-20 pb-16 md:pb-20">
      <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
        <Reveal delay={0.04}>
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
              Wanda Rogers | Artist · Author · Identity Architect
            </p>

            <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-ink">
              You&apos;re not creatively broken.
              <span className="block text-brandPurple mt-2">
                You just have the wrong diagnosis.
              </span>
            </h1>

            <p className="mt-8 text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
              I&apos;m Wanda Rogers. I help creatives figure out exactly what&apos;s
              getting in their way and build a practice that&apos;s grounded,
              sustainable, and fully their own.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Through music, memoir, and the Mellow Mastermind framework, I work
              with the full picture: identity, resistance, self-trust, and the
              specific pattern that&apos;s keeping you from the work you were meant to do.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quiz"
                className="rounded-full bg-brandPurple text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Take the 60-Second Quiz →
              </a>

              <a
                href="/workbooks"
                className="rounded-full border border-brandBlue/30 px-6 py-3 text-sm text-brandBlue hover:bg-blueTint transition"
              >
                Find Your Fix
              </a>

              <a
                href="#coaching"
                className="rounded-full border border-brandOrange/30 px-6 py-3 text-sm text-brandOrange hover:bg-peachTint transition"
              >
                Work With Me
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brandPurple/15 via-transparent to-brandOrange/10 blur-2xl" />
            <Image
              src="/wanda-hero.jpg"
              alt="Wanda Rogers"
              width={900}
              height={1100}
              priority
              className="relative rounded-[2rem] w-full shadow-2xl object-cover border border-black/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
