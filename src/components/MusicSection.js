"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionIntro from "./SectionIntro"
import Reveal from "./Reveal"

export default function MusicSection({
  revealUp,
  featuredTracks,
  currentTrackIndex,
  isPlaying,
  playTrack,
}) {
  const moods = [
    {
      emoji: "🌌",
      label: "Reflective",
      description: "For introspection, softness, and emotional depth.",
      trackIndex: 0,
      tint: "bg-lavenderTint",
    },
    {
      emoji: "🔥",
      label: "Confident",
      description: "For forward motion, self-belief, and presence.",
      trackIndex: 1,
      tint: "bg-peachTint",
    },
    {
      emoji: "🌊",
      label: "Calm",
      description: "For spaciousness, stillness, and gentle release.",
      trackIndex: 2,
      tint: "bg-blueTint",
    },
    {
      emoji: "⚡",
      label: "Energetic",
      description: "For momentum, edge, and staying in motion.",
      trackIndex: 3,
      tint: "bg-lavenderTint",
    },
  ]

  const currentTrack = featuredTracks[currentTrackIndex]

  return (
    <motion.section
      id="music"
      className="relative overflow-hidden border-t border-black/10"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 -z-10 flex items-end justify-center gap-2 opacity-[0.07]">
        <div className="h-24 w-2 rounded-full bg-brandPurple animate-pulse" />
        <div className="h-40 w-2 rounded-full bg-brandBlue animate-pulse [animation-delay:120ms]" />
        <div className="h-28 w-2 rounded-full bg-brandOrange animate-pulse [animation-delay:240ms]" />
        <div className="h-52 w-2 rounded-full bg-brandPurple animate-pulse [animation-delay:360ms]" />
        <div className="h-32 w-2 rounded-full bg-brandBlue animate-pulse [animation-delay:480ms]" />
        <div className="h-44 w-2 rounded-full bg-brandOrange animate-pulse [animation-delay:600ms]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="Featured Music"
            title="Listen by mood."
            body="Start with the feeling you need most. Each path leads into a different part of the music."
          />
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {moods.map((mood, index) => (
            <Reveal key={mood.label} delay={0.05 * (index + 1)}>
              <button
                onClick={() => playTrack(mood.trackIndex)}
                className={`w-full text-left rounded-[1.5rem] border border-black/10 ${mood.tint} p-6 transition hover:scale-[1.01] hover:shadow-md`}
              >
                <p className="text-2xl">{mood.emoji}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">
                  {mood.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {mood.description}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">

          {/* Now Selected — featured card */}
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-brandPurple/20 bg-gradient-to-br from-lavenderTint via-surface to-blueTint/40 p-8 md:p-10 shadow-xl flex flex-col min-h-[380px]">
              <p className="text-[11px] tracking-[0.32em] uppercase text-brandPurple/60">
                Now Selected
              </p>

              <div className="flex-1 flex flex-col justify-center text-center py-8">
                <p className="text-sm text-muted">{currentTrack.album}</p>
                <h3 className="mt-3 text-4xl md:text-5xl font-semibold text-ink leading-tight">
                  {currentTrack.title}
                </h3>
                <p className="mt-5 text-lg italic text-ink/60 leading-relaxed max-w-sm mx-auto">
                  {currentTrack.vibe}
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => playTrack(currentTrackIndex)}
                  className="rounded-full bg-brandPurple px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 shadow-lg"
                >
                  {isPlaying ? "⏸  Pause" : "▶  Play Track"}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Albums — stacked */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.14}>
              <div className="rounded-[1.75rem] border border-black/10 bg-surface p-5 shadow-sm flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] mb-4">
                  <Image
                    src="/music/some-experience-necessary/cover.jpg"
                    alt="Some Experience Necessary cover"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Album</p>
                <h3 className="mt-1.5 text-lg font-semibold text-ink">
                  Some Experience Necessary
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Exploration, feeling, softness, and the stretch that comes with becoming.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-[1.75rem] border border-black/10 bg-surface p-5 shadow-sm flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] mb-4">
                  <Image
                    src="/music/im-not-a-rapper/cover.jpg"
                    alt="I'm Not a Rapper cover"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Album</p>
                <h3 className="mt-1.5 text-lg font-semibold text-ink">
                  I&apos;m Not a Rapper
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Voice, contradiction, confidence, edge, and the freedom to define yourself on your own terms.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </motion.section>
  )
}