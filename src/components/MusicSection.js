"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionIntro from "./SectionIntro"
import Reveal from "./Reveal"

const albums = [
  {
    src: "/music/some-experience-necessary/cover.jpg",
    alt: "Some Experience Necessary cover",
    title: "Some Experience Necessary",
    description: "Exploration, feeling, softness, and the stretch that comes with becoming.",
    trackIndex: 0,
  },
  {
    src: "/music/im-not-a-rapper/cover.jpg",
    alt: "I\u2019m Not a Rapper cover",
    title: "I\u2019m Not a Rapper",
    description: "Voice, contradiction, confidence, edge, and the freedom to define yourself on your own terms.",
    trackIndex: 1,
  },
]

export default function MusicSection({
  revealUp,
  featuredTracks,
  currentTrackIndex,
  isPlaying,
  playTrack,
}) {
  const moods = [
    { emoji: "🌌", label: "Reflective", trackIndex: 0, tint: "bg-lavenderTint", activeBorder: "border-brandPurple/40" },
    { emoji: "🔥", label: "Confident",  trackIndex: 1, tint: "bg-peachTint",    activeBorder: "border-brandOrange/40" },
    { emoji: "🌊", label: "Calm",       trackIndex: 2, tint: "bg-blueTint",     activeBorder: "border-brandBlue/40"  },
    { emoji: "⚡", label: "Energetic",  trackIndex: 3, tint: "bg-lavenderTint", activeBorder: "border-brandPurple/40" },
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
      {/* Background equalizer decoration */}
      <div className="absolute inset-0 -z-10 flex items-end justify-around opacity-[0.045] px-4">
        {[38, 62, 48, 80, 55, 90, 42, 70, 58, 85, 45, 68, 52, 88, 40, 72, 50, 82].map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-t-sm bg-brandPurple animate-pulse"
            style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="Featured Music"
            title="Listen by mood."
            body="Start with the feeling you need most. Each path leads into a different part of the music."
          />
        </Reveal>

        {/* Mood selector pills */}
        <Reveal delay={0.06}>
          <div className="mt-8 flex flex-wrap gap-3">
            {moods.map((mood) => {
              const active = currentTrackIndex === mood.trackIndex
              return (
                <button
                  key={mood.label}
                  onClick={() => playTrack(mood.trackIndex)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200
                    ${active
                      ? `${mood.tint} ${mood.activeBorder} text-ink shadow-sm scale-[1.02]`
                      : "border-black/10 bg-surface text-muted hover:border-black/20 hover:bg-lavenderTint/40"
                    }`}
                >
                  <span>{mood.emoji}</span>
                  <span>{mood.label}</span>
                  {active && (
                    <span className="flex items-end gap-[2px] h-3 ml-0.5">
                      {[60, 100, 45, 80, 55].map((h, i) => (
                        <span
                          key={i}
                          className="w-[3px] rounded-full bg-brandPurple/70 animate-pulse"
                          style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                        />
                      ))}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-[1.65fr_1fr] gap-6 items-start">

          {/* Now Selected — featured card */}
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-brandPurple/15 bg-gradient-to-br from-lavenderTint via-surface to-blueTint/25 shadow-xl overflow-hidden">
              {/* Accent bar */}
              <div className="h-[3px] bg-gradient-to-r from-brandPurple via-brandBlue to-brandOrange" />

              <div className="p-8 md:p-10 flex flex-col min-h-[380px]">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <p className="text-[10px] tracking-[0.36em] uppercase font-medium text-brandPurple/55">
                    Now Selected
                  </p>

                  {/* Live equalizer — visible when playing */}
                  <span
                    className={`flex items-end gap-[3px] h-4 transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
                    aria-hidden="true"
                  >
                    {[50, 100, 65, 35, 80].map((h, i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-full bg-brandPurple animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 110}ms` }}
                      />
                    ))}
                  </span>
                </div>

                {/* Track info */}
                <div className="flex-1 flex flex-col justify-center text-center py-8">
                  <span className="inline-block self-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-muted mb-5">
                    {currentTrack.album}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-semibold text-ink leading-[1.05] tracking-tight">
                    {currentTrack.title}
                  </h3>

                  <p className="mt-5 text-base italic text-ink/50 leading-relaxed max-w-xs mx-auto">
                    {currentTrack.vibe}
                  </p>
                </div>

                {/* Play button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => playTrack(currentTrackIndex)}
                    className="rounded-full bg-brandPurple px-9 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brandPurple/20 transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isPlaying ? "⏸  Pause" : "▶  Play Track"}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Albums — horizontal cards + discography link */}
          <div className="flex flex-col gap-4">
            {albums.map((album, i) => (
              <Reveal key={album.title} delay={0.16 + i * 0.08}>
                <button
                  onClick={() => playTrack(album.trackIndex)}
                  className="group w-full text-left rounded-[1.5rem] border border-black/10 bg-surface p-4 shadow-sm hover:border-brandPurple/25 hover:shadow-md transition-all duration-200 flex items-center gap-4"
                >
                  {/* Thumbnail */}
                  <div className="relative w-[76px] h-[76px] rounded-[0.75rem] overflow-hidden shrink-0 shadow-sm">
                    <Image src={album.src} alt={album.alt} fill className="object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-ink/35 mb-1">Album</p>
                    <h3 className="text-[15px] font-semibold text-ink leading-snug">{album.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted line-clamp-2">
                      {album.description}
                    </p>
                  </div>

                  {/* Play arrow */}
                  <span className="shrink-0 text-ink/25 group-hover:text-brandPurple transition-colors duration-200 text-lg pr-1">
                    ▶
                  </span>
                </button>
              </Reveal>
            ))}

            {/* Browse all */}
            <Reveal delay={0.34}>
              <a
                href="/music"
                className="flex items-center justify-center gap-2 rounded-[1.5rem] border border-black/10 bg-lavenderTint/60 px-5 py-3.5 text-sm font-medium text-brandPurple hover:bg-lavenderTint transition-colors duration-200"
              >
                Browse full discography →
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
