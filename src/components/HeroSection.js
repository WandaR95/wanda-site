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
              Artist • Author • Creator of the Mellow Mastermind Framework
            </p>

            <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-ink">
              Build a creative life that feels
              <span className="block text-brandPurple">clear, grounded, and real.</span>
            </h1>

            <p className="mt-8 text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
              I’m Wanda Rogers. I create music, write books, and build frameworks
              for people who want to reconnect with their voice, move through
              creative resistance, and build a life where creativity isn’t forced
              and it just flows.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Through music, storytelling, and the Mellow Mastermind framework,
              my work explores identity, resilience, self-trust, and what it means
              to keep creating while becoming who you were meant to be.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#lead-magnet"
                className="rounded-full bg-brandPurple text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Get Your Free Creative Clarity Guide
              </a>

              <a
                href="#music"
                className="rounded-full border border-brandBlue/30 px-6 py-3 text-sm text-brandBlue hover:bg-blueTint transition"
              >
                Listen to My Music
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