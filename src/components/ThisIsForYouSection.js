"use client"

import Reveal from "./Reveal"

export default function ThisIsForYouSection() {
  const items = [
    "You’ve been feeling creatively blocked or disconnected.",
    "You know there’s more in you, but momentum has felt inconsistent.",
    "You’re tired of forcing creativity through pressure alone.",
    "You want a more honest, sustainable relationship with your voice.",
  ]

  return (
    <section className="border-t border-black/10 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <Reveal>
          <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-10 shadow-sm">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
                This Is For You If
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-ink">
                You’re not lacking talent. You may just need a different way back in.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                The Mellow Mastermind Creative Clarity Guide was made for people who are ready to reconnect
                with their creativity in a way that feels grounded, clear, and real.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4 items-stretch">
              {items.map((item, index) => (
                <Reveal key={item} delay={0.06 * (index + 1)} className="h-full">
                  <div className="h-full flex items-center rounded-[1.25rem] border border-black/10 bg-white p-5">
                    <p className="text-muted leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}