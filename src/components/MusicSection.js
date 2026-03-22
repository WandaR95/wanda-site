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

        <div className="mt-12 grid lg:grid-cols-[1.05fr_0.95fr_0.95fr] gap-8 items-start">
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-black/10 bg-surface p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-ink/40">
                Now Selected
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-ink">
                {currentTrack.title}
              </h3>

              <p className="mt-2 text-muted">{currentTrack.album}</p>

              <p className="mt-5 text-lg italic text-ink/70">
                {currentTrack.vibe}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => playTrack(currentTrackIndex)}
                  className="rounded-full bg-brandPurple px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {isPlaying ? "Pause Track" : "Play Track"}
                </button>

                <a
                  href="#lead-magnet"
                  className="rounded-full border border-brandOrange/30 px-6 py-3 text-sm font-semibold text-brandOrange hover:bg-peachTint transition"
                >
                  Unlock a Free Song
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[1.75rem] border border-black/10 bg-surface p-6 shadow-sm">
              <Image
                src="/music/some-experience-necessary/cover.jpg"
                alt="Some Experience Necessary cover"
                width={700}
                height={700}
                className="w-full rounded-[1.25rem] mb-5"
              />
              <p className="text-sm uppercase tracking-[0.2em] text-ink/40">
                Album
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">
                Some Experience Necessary
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Exploration, feeling, softness, and the stretch that comes with
                becoming.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="rounded-[1.75rem] border border-black/10 bg-surface p-6 shadow-sm">
              <Image
                src="/music/im-not-a-rapper/cover.jpg"
                alt="I'm Not a Rapper cover"
                width={700}
                height={700}
                className="w-full rounded-[1.25rem] mb-5"
              />
              <p className="text-sm uppercase tracking-[0.2em] text-ink/40">
                Album
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">
                I&apos;m Not a Rapper
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Voice, contradiction, confidence, edge, and the freedom to define
                yourself on your own terms.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </motion.section>
  )
}