"use client"

import { useRef, useState } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ChooseYourPathSection from "@/components/ChooseYourPathSection"
import LeadMagnetSection from "@/components/LeadMagnetSection"
import AboutSection from "@/components/AboutSection"
import MusicSection from "@/components/MusicSection"
import ThisIsForYouSection from "@/components/ThisIsForYouSection"
import BooksSection from "@/components/BooksSection"
import MellowMastermindSection from "@/components/MellowMastermindSection"
import CoachingSection from "@/components/CoachingSection"
import WhatThisWorkHoldsSection from "@/components/WhatThisWorkHoldsSection"
import Footer from "@/components/Footer"
import FloatingPlayer from "@/components/FloatingPlayer"
import ScrollProgressBar from "@/components/ScrollProgressBar"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import AmbientBackground from "@/components/AmbientBackground"

const featuredTracks = [
  {
    title: "Mars",
    src: "/music/some-experience-necessary/mars.mp3",
    album: "Some Experience Necessary",
    vibe: "dreamy, reflective, expansive",
  },
  {
    title: "Built For This",
    src: "/music/im-not-a-rapper/built-for-this.mp3",
    album: "I'm Not a Rapper",
    vibe: "confident, focused, forward-moving",
  },
  {
    title: "In the Rain",
    src: "/music/some-experience-necessary/in-the-rain.mp3",
    album: "Some Experience Necessary",
    vibe: "calm, spacious, gently restorative",
  },
  {
    title: "Boss Moves",
    src: "/music/im-not-a-rapper/boss-moves.mp3",
    album: "I'm Not a Rapper",
    vibe: "energetic, sharp, momentum-heavy",
  },
]

const featuredBooks = [
  {
    title: "Why You're Creatively Blocked",
    format: "Paperback",
    image: "/books/creatively-blocked.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/paperback/product-kvddgn4.html?page=1&pageSize=4",
    description:
      "A guide for creatives navigating resistance, rebuilding momentum, and learning how to work with their creativity instead of against it.",
    cta: "Get the Book",
  },
  {
    title: "The First to Make It This Far",
    format: "Paperback",
    image: "/books/first-to-make-it.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/the-first-to-make-it-this-far/paperback/product-yvkv7yd.html?page=1&pageSize=4",
    description:
      "A story about resilience, identity, and making it through what was supposed to break you.",
    cta: "Read the Story",
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
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerVisible, setPlayerVisible] = useState(false)

  const currentTrack = featuredTracks[currentTrackIndex]
  const calendlyLink = "https://calendly.com/wanda-rogers/30min"

  const togglePlay = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error("Playback failed:", error)
      }
    }
  }

  const playTrack = async (index) => {
    if (!audioRef.current) {
      setCurrentTrackIndex(index)
      setPlayerVisible(true)
      return
    }

    const isSameTrack = index === currentTrackIndex

    if (isSameTrack) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        try {
          await audioRef.current.play()
          setPlayerVisible(true)
          setIsPlaying(true)
        } catch (error) {
          console.error("Playback failed:", error)
        }
      }
      return
    }

    setCurrentTrackIndex(index)
    setPlayerVisible(true)
    setIsPlaying(true)

    setTimeout(async () => {
      if (!audioRef.current) return
      audioRef.current.load()
      try {
        await audioRef.current.play()
      } catch (error) {
        console.error("Playback failed:", error)
      }
    }, 0)
  }

  const playNext = async () => {
    const nextIndex = (currentTrackIndex + 1) % featuredTracks.length
    setCurrentTrackIndex(nextIndex)
    setPlayerVisible(true)
    setIsPlaying(true)

    setTimeout(async () => {
      if (!audioRef.current) return
      audioRef.current.load()
      try {
        await audioRef.current.play()
      } catch (error) {
        console.error("Playback failed:", error)
      }
    }, 0)
  }

  const playPrev = async () => {
    const prevIndex =
      (currentTrackIndex - 1 + featuredTracks.length) % featuredTracks.length
    setCurrentTrackIndex(prevIndex)
    setPlayerVisible(true)
    setIsPlaying(true)

    setTimeout(async () => {
      if (!audioRef.current) return
      audioRef.current.load()
      try {
        await audioRef.current.play()
      } catch (error) {
        console.error("Playback failed:", error)
      }
    }, 0)
  }

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    setIsPlaying(false)
    setPlayerVisible(false)
  }

  return (
    <main className="pt-8 relative min-h-screen bg-cream text-ink pb-32 overflow-hidden">
      <AmbientBackground />
      <ScrollProgressBar />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_20%_18%,rgba(37,99,235,0.10),transparent_20%),radial-gradient(circle_at_82%_10%,rgba(249,115,22,0.10),transparent_24%)]" />

      <Navbar calendlyLink={calendlyLink} />

      <HeroSection calendlyLink={calendlyLink} />
      <ChooseYourPathSection revealUp={revealUp} />

      <MusicSection
        revealUp={revealUp}
        featuredTracks={featuredTracks}
        currentTrackIndex={currentTrackIndex}
        isPlaying={isPlaying}
        playTrack={playTrack}
      />

      <ThisIsForYouSection />
      <LeadMagnetSection revealUp={revealUp} />

      <BooksSection
        revealUp={revealUp}
        featuredBooks={featuredBooks}
      />

      <AboutSection revealUp={revealUp} />
      <MellowMastermindSection revealUp={revealUp} />
      <CoachingSection
        revealUp={revealUp}
        calendlyLink={calendlyLink}
      />
      <WhatThisWorkHoldsSection revealUp={revealUp} />
      <Footer />

      <FloatingPlayer
        playerVisible={playerVisible}
        currentTrack={featuredTracks[currentTrackIndex]}
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