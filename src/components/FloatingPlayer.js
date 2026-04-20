"use client"

import Image from "next/image"

export default function FloatingPlayer({
  playerVisible,
  currentTrack,
  audioRef,
  isPlaying,
  togglePlay,
  playPrev,
  playNext,
  stopPlayback,
}) {
  if (!playerVisible || !currentTrack) return null

  const albumCover = currentTrack.src.replace(/\/[^/]+\.mp3$/, "/cover.jpg")

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-5 rounded-2xl border border-white/40 bg-white/45 backdrop-blur-xl px-5 py-4 shadow-[0_20px_60px_rgba(31,41,55,0.12)]">

        {/* Album Art */}
        <div className="relative h-12 w-12 overflow-hidden rounded-lg">
          <Image
            src={albumCover}
            alt={currentTrack.album}
            fill
            className="object-cover"
          />
        </div>

        {/* Track Info */}
        <div className="min-w-[180px]">
          <p className="text-sm font-semibold text-ink">
            {currentTrack.title}
          </p>
          <p className="text-xs text-muted">
            {currentTrack.album}
          </p>

          {/* Equalizer */}
          {isPlaying && (
            <div className="mt-1 flex gap-[2px]">
              <span className="h-[6px] w-[2px] bg-brandPurple animate-pulse"></span>
              <span className="h-[10px] w-[2px] bg-brandPurple animate-pulse [animation-delay:120ms]"></span>
              <span className="h-[7px] w-[2px] bg-brandPurple animate-pulse [animation-delay:240ms]"></span>
              <span className="h-[11px] w-[2px] bg-brandPurple animate-pulse [animation-delay:360ms]"></span>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">

          <button
            onClick={playPrev}
            className="text-sm text-muted hover:text-ink transition"
          >
            ◀
          </button>

          <button
            onClick={togglePlay}
            className="rounded-full bg-brandPurple px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button
            onClick={playNext}
            className="text-sm text-muted hover:text-ink transition"
          >
            ▶
          </button>

        </div>

        {/* Close */}
        <button
          onClick={stopPlayback}
          className="text-muted hover:text-ink transition"
        >
          ✕
        </button>

      </div>
    </div>
  )
}