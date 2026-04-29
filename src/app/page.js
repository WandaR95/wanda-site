"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import QuizSection from "@/components/QuizSection"
import LeadMagnetSection from "@/components/LeadMagnetSection"
import AboutSection from "@/components/AboutSection"
import MusicSection from "@/components/MusicSection"
import ThisIsForYouSection from "@/components/ThisIsForYouSection"
import BooksSection from "@/components/BooksSection"
import WorkbooksSection from "@/components/WorkbooksSection"
import MellowMastermindSection from "@/components/MellowMastermindSection"
import CoachingSection from "@/components/CoachingSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import WhatThisWorkHoldsSection from "@/components/WhatThisWorkHoldsSection"
import Footer from "@/components/Footer"
import FloatingPlayer from "@/components/FloatingPlayer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import AmbientBackground from "@/components/AmbientBackground"
import ScrollProgressBar from "@/components/ScrollProgressBar"

const featuredTracks = [
  // HOMEPAGE FEATURED 4
  {
    title: "Mars",
    src: "/music/some-experience-necessary/mars.mp3",
    album: "Some Experience Necessary",
    vibe: "Experimental, spacey, and immersive.",
    buyHref: "YOUR_MARS_PURCHASE_LINK",
    previewStart: 90,
    previewDuration: 60,
  },
  {
    title: "Boss Moves",
    src: "/music/im-not-a-rapper/boss-moves.mp3",
    album: "I'm Not A Rapper",
    vibe: "High-energy confidence with a powerful bass-driven presence.",
    buyHref: "YOUR_BOSS_MOVES_PURCHASE_LINK",
    previewStart: 20,
    previewDuration: 60,
  },
  {
    title: "Relax",
    src: "/music/some-experience-necessary/relax.mp3",
    album: "Some Experience Necessary",
    vibe: "Vulnerable, reflective, and emotionally powerful.",
    buyHref: "YOUR_RELAX_PURCHASE_LINK",
    previewStart: 75,
    previewDuration: 60,
  },
  {
    title: "Party Maniac",
    src: "/music/some-experience-necessary/party-maniac.mp3",
    album: "Some Experience Necessary",
    vibe: "High-energy, fun, and unpredictable.",
    buyHref: "YOUR_PARTY_MANIAC_PURCHASE_LINK",
    previewStart: 50,
    previewDuration: 60,
  },

  // I'M NOT A RAPPER
  {
    title: "Bars for No Reason",
    src: "/music/im-not-a-rapper/bars-for-no-reason.mp3",
    album: "I'm Not A Rapper",
    vibe: "Rapid-fire lyricism with a shifting flow that keeps you locked in.",
    buyHref: "YOUR_BARS_FOR_NO_REASON_PURCHASE_LINK",
    previewStart: 45,
    previewDuration: 60,
  },
  {
    title: "Bright Lights",
    src: "/music/im-not-a-rapper/bright-lights.mp3",
    album: "I'm Not A Rapper",
    vibe: "A rising build into an explosive, unforgettable hook.",
    buyHref: "YOUR_BRIGHT_LIGHTS_PURCHASE_LINK",
    previewStart: 35,
    previewDuration: 60,
  },
  {
    title: "Broken Mirrors",
    src: "/music/im-not-a-rapper/broken-mirrors.mp3",
    album: "I'm Not A Rapper",
    vibe: "Raw emotion and vulnerability layered over powerful production.",
    buyHref: "YOUR_BROKEN_MIRRORS_PURCHASE_LINK",
    previewStart: 75,
    previewDuration: 60,
  },
  {
    title: "Built for This",
    src: "/music/im-not-a-rapper/built-for-this.mp3",
    album: "I'm Not A Rapper",
    vibe: "Pure adrenaline and unstoppable momentum.",
    buyHref: "YOUR_BUILT_FOR_THIS_PURCHASE_LINK",
    previewStart: 0,
    previewDuration: 60,
  },
  {
    title: "Confessions",
    src: "/music/im-not-a-rapper/confessions.mp3",
    album: "I'm Not A Rapper",
    vibe: "Personal, reflective, and emotionally revealing.",
    buyHref: "YOUR_CONFESSIONS_PURCHASE_LINK",
    previewStart: 90,
    previewDuration: 60,
  },
  {
    title: "Dreamworld Fantasy",
    src: "/music/im-not-a-rapper/dreamworld-fantasy.mp3",
    album: "I'm Not A Rapper",
    vibe: "Immersive, atmospheric, and hypnotic.",
    buyHref: "YOUR_DREAMWORLD_FANTASY_PURCHASE_LINK",
    previewStart: 120,
    previewDuration: 60,
  },
  {
    title: "I Like It",
    src: "/music/im-not-a-rapper/i-like-it.mp3",
    album: "I'm Not A Rapper",
    vibe: "Catchy, flirty, and instantly memorable.",
    buyHref: "YOUR_I_LIKE_IT_PURCHASE_LINK",
    previewStart: 15,
    previewDuration: 60,
  },
  {
    title: "Mic Check",
    src: "/music/im-not-a-rapper/mic-check.mp3",
    album: "I'm Not A Rapper",
    vibe: "Smooth groove with evolving rhythm.",
    buyHref: "YOUR_MIC_CHECK_PURCHASE_LINK",
    previewStart: 30,
    previewDuration: 60,
  },
  {
    title: "Stereo Love",
    src: "/music/im-not-a-rapper/stereo-love.mp3",
    album: "I'm Not A Rapper",
    vibe: "Melodic build with a signature sonic hook.",
    buyHref: "YOUR_STEREO_LOVE_PURCHASE_LINK",
    previewStart: 45,
    previewDuration: 60,
  },
  {
    title: "West Coast Riches",
    src: "/music/im-not-a-rapper/west-coast-riches.mp3",
    album: "I'm Not A Rapper",
    vibe: "Smooth, melodic West Coast energy.",
    buyHref: "YOUR_WEST_COAST_RICHES_PURCHASE_LINK",
    previewStart: 60,
    previewDuration: 60,
  },

  // SOME EXPERIENCE NECESSARY
  {
    title: "I See You",
    src: "/music/some-experience-necessary/i-see-you.mp3",
    album: "Some Experience Necessary",
    vibe: "Melodic, smooth, and emotionally layered.",
    buyHref: "YOUR_I_SEE_YOU_PURCHASE_LINK",
    previewStart: 45,
    previewDuration: 60,
  },
  {
    title: "I'm Ready",
    src: "/music/some-experience-necessary/im-ready.mp3",
    album: "Some Experience Necessary",
    vibe: "Tension building into a powerful release.",
    buyHref: "YOUR_IM_READY_PURCHASE_LINK",
    previewStart: 30,
    previewDuration: 60,
  },
  {
    title: "In Charge",
    src: "/music/some-experience-necessary/in-charge.mp3",
    album: "Some Experience Necessary",
    vibe: "Assertive, confident, and commanding.",
    buyHref: "YOUR_IN_CHARGE_PURCHASE_LINK",
    previewStart: 15,
    previewDuration: 60,
  },
  {
    title: "In the Rain",
    src: "/music/some-experience-necessary/in-the-rain.mp3",
    album: "Some Experience Necessary",
    vibe: "Emotional build into a powerful sonic shift.",
    buyHref: "YOUR_IN_THE_RAIN_PURCHASE_LINK",
    previewStart: 120,
    previewDuration: 60,
  },
  {
    title: "Lil Bit",
    src: "/music/some-experience-necessary/lil-bit.mp3",
    album: "Some Experience Necessary",
    vibe: "Upbeat, catchy, and instantly engaging.",
    buyHref: "YOUR_LIL_BIT_PURCHASE_LINK",
    previewStart: 0,
    previewDuration: 60,
  },
  {
    title: "On the Cool",
    src: "/music/some-experience-necessary/on-the-cool.mp3",
    album: "Some Experience Necessary",
    vibe: "Smooth, laid-back, and rhythmically fluid.",
    buyHref: "YOUR_ON_THE_COOL_PURCHASE_LINK",
    previewStart: 50,
    previewDuration: 60,
  },
  {
    title: "Outer Space Love",
    src: "/music/some-experience-necessary/outer-space-love.mp3",
    album: "Some Experience Necessary",
    vibe: "Layered, expansive, and atmospheric.",
    buyHref: "YOUR_OUTER_SPACE_LOVE_PURCHASE_LINK",
    previewStart: 75,
    previewDuration: 60,
  },
]

const featuredBooks = [
  {
    title: "Why You're Creatively Blocked",
    format: "Paperback",
    image: "/books/creatively-blocked.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/paperback/product-kvddgn4.html?page=1&pageSize=4",
    description:
      "Creative blocks are not character flaws. They are signals. This book breaks down the most common forms of creative resistance — perfectionism, overthinking, distraction, burnout — and gives you a framework for understanding what yours is actually telling you. Through honest writing and practical exercises, you'll learn to move through what has been stopping you and build a creative practice that is sustainable, authentic, and yours.",
    themes: ["Creative resistance", "Self-trust", "Momentum", "Identity"],
    cta: "Get Unblocked Now",
  },
  {
    title: "The First to Make It This Far",
    format: "Paperback",
    image: "/books/first-to-make-it.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/the-first-to-make-it-this-far/paperback/product-yvkv7yd.html?page=1&pageSize=4",
    description:
      "What does it cost to become someone no one in your family has ever been? This book is a memoir of first-generation ambition — the isolation, the imposter syndrome, the grief of outgrowing spaces you once called home, and the quiet pride that comes with building something entirely your own. For anyone who has ever felt like they were becoming too much and not enough at the same time.",
    themes: ["First-generation identity", "Ambition", "Belonging", "Resilience"],
    cta: "Read My Story",
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

export default function Home() {
  const audioRef = useRef(null)
  const previewTimeoutRef = useRef(null)

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerVisible, setPlayerVisible] = useState(false)

  const currentTrack = featuredTracks[currentTrackIndex]
  const calendlyLink = "https://calendly.com/wanda-rogers/30min"

  const clearPreviewTimeout = () => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current)
      previewTimeoutRef.current = null
    }
  }

  const startPreviewTimer = (track) => {
    clearPreviewTimeout()

    previewTimeoutRef.current = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = track.previewStart
      }
      setIsPlaying(false)
    }, Math.min(track.previewDuration, 60) * 1000)
  }

  const playTrack = async (index) => {
    if (!audioRef.current) return

    const track = featuredTracks[index]

    try {
      clearPreviewTimeout()

      if (currentTrackIndex === index && isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
        return
      }

      setCurrentTrackIndex(index)
      setPlayerVisible(true)

      audioRef.current.src = track.src
      audioRef.current.currentTime = track.previewStart

      await audioRef.current.play()
      setIsPlaying(true)

      startPreviewTimer(track)
    } catch (error) {
      console.error("Playback failed:", error)
    }
  }

  const togglePlay = async () => {
    if (!audioRef.current) return

    const track = featuredTracks[currentTrackIndex]
    const previewEnd = track.previewStart + track.previewDuration

    try {
      if (isPlaying) {
        clearPreviewTimeout()
        audioRef.current.pause()
        setIsPlaying(false)
        return
      }

      if (
        audioRef.current.currentTime < track.previewStart ||
        audioRef.current.currentTime >= previewEnd
      ) {
        audioRef.current.currentTime = track.previewStart
      }

      await audioRef.current.play()
      setIsPlaying(true)

      const remainingSeconds = Math.max(0, previewEnd - audioRef.current.currentTime)

      clearPreviewTimeout()
      previewTimeoutRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.currentTime = track.previewStart
        }
        setIsPlaying(false)
      }, remainingSeconds * 1000)
    } catch (error) {
      console.error("Toggle failed:", error)
    }
  }

  const playNext = async () => {
    const nextIndex = (currentTrackIndex + 1) % featuredTracks.length
    await playTrack(nextIndex)
  }

  const playPrev = async () => {
    const prevIndex =
      (currentTrackIndex - 1 + featuredTracks.length) % featuredTracks.length
    await playTrack(prevIndex)
  }

  const stopPlayback = () => {
    clearPreviewTimeout()

    if (!audioRef.current) return

    audioRef.current.pause()
    audioRef.current.currentTime =
      featuredTracks[currentTrackIndex]?.previewStart || 0

    setIsPlaying(false)
    setPlayerVisible(false)
  }

  useEffect(() => {
    return () => {
      clearPreviewTimeout()
    }
  }, [])

  return (
    <main className="pt-8 relative min-h-screen bg-cream text-ink pb-32 overflow-hidden">
      <audio ref={audioRef} hidden />
      <AmbientBackground />
      <ScrollProgressBar />
      <div className="relative z-10" />

      <Navbar calendlyLink={calendlyLink} />

      <HeroSection calendlyLink={calendlyLink} />
      <QuizSection revealUp={revealUp} />
      <LeadMagnetSection revealUp={revealUp} />

      <MusicSection
        revealUp={revealUp}
        featuredTracks={featuredTracks}
        currentTrackIndex={currentTrackIndex}
        isPlaying={isPlaying}
        playTrack={playTrack}
        selectTrack={setCurrentTrackIndex}
      />

      <ThisIsForYouSection />

      <WorkbooksSection revealUp={revealUp} />
      <BooksSection revealUp={revealUp} featuredBooks={featuredBooks} />

      <AboutSection revealUp={revealUp} />
      <MellowMastermindSection revealUp={revealUp} />
      <TestimonialsSection />
      <CoachingSection revealUp={revealUp} calendlyLink={calendlyLink} />
      <WhatThisWorkHoldsSection revealUp={revealUp} />
      <Footer />

      <FloatingPlayer
        playerVisible={playerVisible}
        currentTrack={currentTrack}
        audioRef={audioRef}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        playPrev={playPrev}
        playNext={playNext}
        stopPlayback={stopPlayback}
        setIsPlaying={setIsPlaying}
        setPlayerVisible={setPlayerVisible}
      />

      <ScrollToTopButton />
    </main>
  )
}