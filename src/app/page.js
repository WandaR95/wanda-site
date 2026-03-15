"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

const featuredTracks = [
  {
    title: "Mars",
    src: "/music/some-experience-necessary/mars.mp3",
    album: "Some Experience Necessary",
  },
  {
    title: "Broken Mirrors",
    src: "/music/im-not-a-rapper/broken-mirrors.mp3",
    album: "I'm Not a Rapper",
  },
  {
    title: "Built For This",
    src: "/music/im-not-a-rapper/built-for-this.mp3",
    album: "I'm Not a Rapper",
  },
]

const featuredBooks = [
  {
    title: "Why You're Creatively Blocked",
    format: "Paperback",
    image: "/books/creatively-blocked.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/paperback/product-kvddgn4.html?page=1&pageSize=4",
    description:
      "A science-backed guide for creatives ready to move through resistance and create with more clarity, self-trust, and consistency.",
  },
  {
    title: "The First to Make It This Far",
    format: "Paperback",
    image: "/books/first-to-make-it.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/the-first-to-make-it-this-far/paperback/product-yvkv7yd.html?page=1&pageSize=4",
    description:
      "A memoir of resilience, rhythm, and renewal for anyone who has survived more than they often say out loud.",
  },
]

const revealUp = {
  hidden: { opacity: 0, y: 32 },
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

  return (
    <main className="relative min-h-screen bg-cream text-ink pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.10),transparent_22%)]" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(247,243,237,0.82)] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-ink"
          >
            Wanda Rogers
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#about" className="hover:text-ink transition">
              About
            </a>
            <a href="#music" className="hover:text-ink transition">
              Music
            </a>
            <a href="#books" className="hover:text-ink transition">
              Books
            </a>
            <a href="#community" className="hover:text-ink transition">
              Community
            </a>
            <a href="#work" className="hover:text-ink transition">
              Coaching
            </a>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brandPurple text-white px-5 py-2 font-medium hover:opacity-90 transition"
            >
              Book Call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-14 md:pt-20 pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
              Artist • Author • Architect of creative clarity and freedom
            </p>

            <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-ink">
              A creative life that feels
              <span className="block text-brandPurple">clear, grounded, and real.</span>
            </h1>

            <p className="mt-8 text-muted text-lg md:text-xl leading-relaxed max-w-xl">
              I’m Wanda Rogers. I make music, write books, build tools for
              creatives, and help people move through the invisible blocks that
              keep their gifts buried.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Through <span className="text-brandPurple font-semibold">Mellow Mastermind</span>,
              I’m creating a space where creativity, identity, and self-trust can
              grow together.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/free-downloads"
                className="rounded-full bg-brandPurple text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Get Free Music
              </a>

              <a
                href="#music"
                className="rounded-full border border-brandBlue/30 px-6 py-3 text-sm text-brandBlue hover:bg-blueTint transition"
              >
                Listen Now
              </a>

              <a
                href="#work"
                className="rounded-full border border-brandOrange/30 px-6 py-3 text-sm text-brandOrange hover:bg-peachTint transition"
              >
                Work With Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brandPurple/15 via-transparent to-brandOrange/10 blur-2xl" />
            <img
              src="/wanda-hero.jpg"
              alt="Wanda Rogers"
              className="relative rounded-[2rem] w-full shadow-2xl object-cover border border-black/10"
            />
          </motion.div>
        </div>
      </section>

      {/* CREATIVE UNIVERSE */}
      <motion.section
        className="border-t border-black/10"
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
              Creative Universe
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-ink">
              Everything I build comes from the same source.
            </h2>

            <p className="mt-6 text-muted text-lg leading-relaxed">
              Music, books, coaching, and creative tools are all expressions of
              the same mission: helping people reconnect with their voice and
              create something meaningful with it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="rounded-[1.5rem] border border-black/10 bg-surface p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">Music</h3>

              <p className="mt-3 text-muted">
                My music explores identity, growth, and creative freedom.
              </p>

              <a
                href="#music"
                className="inline-block mt-5 text-sm text-brandBlue hover:opacity-80"
              >
                Listen →
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-surface p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">Books</h3>

              <p className="mt-3 text-muted">
                Writing that helps creatives understand themselves and move
                through the blocks that hold them back.
              </p>

              <a
                href="#books"
                className="inline-block mt-5 text-sm text-brandBlue hover:opacity-80"
              >
                Explore →
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-surface p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">Mellow Mastermind</h3>

              <p className="mt-3 text-muted">
                A framework and community focused on clarity, self-trust, and
                sustainable creativity.
              </p>

              <a
                href="#community"
                className="inline-block mt-5 text-sm text-brandBlue hover:opacity-80"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BRAND STRIP */}
      <section className="border-y border-black/10 bg-surface/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-muted">
          <span>Music</span>
          <span>Books</span>
          <span>Free Creative Tools</span>
          <span>Coaching</span>
          <span>Mellow Mastermind Community</span>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 md:py-24"
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
              About
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
              I help creatives stop fighting themselves.
            </h2>
          </div>

          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              I’m an artist, author, and creativity coach who understands how
              easy it is to have real talent and still feel stuck, scattered,
              inconsistent, or disconnected from your own voice.
            </p>

            <p>
              My work sits at the intersection of creative psychology, identity,
              nervous system awareness, and execution. I help people understand
              what their resistance is protecting, then build a way forward that
              feels sustainable instead of forced.
            </p>

            <p>
              This isn’t about hustling harder. It’s about making room for the
              kind of creativity that can actually last.
            </p>
          </div>
        </div>
      </motion.section>

      {/* MUSIC */}
      <motion.section
        id="music"
        className="relative overflow-hidden border-t border-black/10 bg-[#F9F6F1]"
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
          <div className="h-20 w-2 rounded-full bg-brandPurple animate-pulse [animation-delay:720ms]" />
          <div className="h-36 w-2 rounded-full bg-brandBlue animate-pulse [animation-delay:840ms]" />
          <div className="h-24 w-2 rounded-full bg-brandOrange animate-pulse [animation-delay:960ms]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
              Music
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
              Sound is part of the story too.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted">
              These featured tracks give people a quick way into my creative
              world: identity, depth, and forward motion.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="space-y-4">
              {featuredTracks.map((track, index) => (
                <button
                  key={track.title}
                  onClick={() => playTrack(index)}
                  className="w-full text-left rounded-[1.5rem] border border-black/10 bg-surface px-6 py-5 hover:border-brandPurple/25 hover:bg-lavenderTint transition shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-ink font-medium">{track.title}</p>
                      <p className="mt-1 text-sm text-muted">{track.album}</p>
                    </div>

                    <span className="rounded-full border border-brandPurple/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brandPurple">
                      {currentTrackIndex === index && isPlaying ? "Playing" : "Play"}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-black/10 bg-surface p-6 shadow-sm">
                <img
                  src="/music/some-experience-necessary/cover.jpg"
                  alt="Some Experience Necessary cover"
                  className="w-full rounded-[1.25rem] mb-5"
                />
                <p className="text-sm uppercase tracking-[0.2em] text-ink/40">
                  Album
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">
                  Some Experience Necessary
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Exploration, emotion, and the process of becoming.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/10 bg-surface p-6 shadow-sm">
                <img
                  src="/music/im-not-a-rapper/cover.jpg"
                  alt="I'm Not a Rapper cover"
                  className="w-full rounded-[1.25rem] mb-5"
                />
                <p className="text-sm uppercase tracking-[0.2em] text-ink/40">
                  Album
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">
                  I&apos;m Not a Rapper
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Voice, contradiction, confidence, and range.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/free-downloads"
              className="inline-flex rounded-full bg-brandOrange text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Unlock Free Downloads
            </a>
          </div>
        </div>
      </motion.section>

      {/* BOOKS */}
      <motion.section
        id="books"
        className="max-w-7xl mx-auto px-6 py-20 md:py-24"
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
            Books
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
            Books and workbooks for the creative process.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {featuredBooks.map((book) => (
            <a
              key={book.title}
              href={book.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-black/10 bg-surface p-7 hover:border-brandBlue/25 transition shadow-sm"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full rounded-[1.25rem] shadow-xl"
              />

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/40">
                  {book.format}
                </span>
                <span className="text-sm text-brandBlue group-hover:opacity-80 transition">
                  View →
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-snug text-ink">
                {book.title}
              </h3>

              <p className="mt-4 text-muted leading-relaxed">
                {book.description}
              </p>

              <div className="mt-7 inline-flex rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold">
                Buy on Lulu
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* COMMUNITY / METHOD */}
      <motion.section
        id="community"
        className="border-t border-black/10 bg-[#F9F6F1]"
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
                Mellow Mastermind
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
                A framework and community for creatives building from truth.
              </h2>

              <p className="mt-6 text-muted leading-relaxed">
                Mellow Mastermind is the part of my brand focused on creative
                support, sustainable output, and helping people work with their
                minds instead of against them.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Clarity",
                  desc: "Understand your patterns, your resistance, and what’s actually in the way.",
                },
                {
                  title: "Self-Trust",
                  desc: "Build a creative life that is less fear-driven and more aligned.",
                },
                {
                  title: "Sustainability",
                  desc: "Create systems that let your output keep going without burning you out.",
                },
              ].map((item, i) => {
                const tintClasses = [
                  "bg-lavenderTint",
                  "bg-blueTint",
                  "bg-peachTint",
                ]
                return (
                  <div
                    key={item.title}
                    className={`rounded-[1.5rem] border border-black/10 ${tintClasses[i]} p-6`}
                  >
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-muted leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* COACHING */}
      <motion.section
        id="work"
        className="max-w-7xl mx-auto px-6 py-20 md:py-24"
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="rounded-[2rem] border border-black/10 bg-surface p-10 md:p-14 text-center shadow-xl">
          <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
            Coaching
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink">
            Work with me directly.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted">
            For creatives who want deeper support around identity, creative
            blocks, self-trust, and building a more sustainable body of work.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brandPurple text-white px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Apply / Book a Call
            </a>

            <a
              href="/free-downloads"
              className="rounded-full border border-brandBlue/30 px-8 py-3.5 text-sm text-brandBlue hover:bg-blueTint transition"
            >
              Start with Free Music
            </a>
          </div>
        </div>
      </motion.section>

      {/* FREE TOOLS CTA */}
      <motion.section
        id="tools"
        className="border-t border-black/10"
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center rounded-[2rem] border border-black/10 bg-surface p-8 md:p-10 shadow-sm">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
                Free Tools
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-ink">
                Start with something free.
              </h2>

              <p className="mt-4 max-w-2xl text-muted leading-relaxed">
                Get free music, creative tools, and updates on new releases,
                books, and future Mellow Mastermind offerings.
              </p>
            </div>

            <a
              href="/free-downloads"
              className="inline-flex items-center justify-center rounded-full bg-brandOrange text-white px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Get Free Downloads
            </a>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm text-muted">
          <div>
            <h3 className="text-ink font-semibold mb-3">Wanda Rogers</h3>
            <p className="leading-relaxed">
              Artist, author, and creativity coach helping creatives move from
              resistance to expression through music, books, and the Mellow
              Mastermind framework.
            </p>
          </div>

          <div>
            <h4 className="text-ink font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#music" className="hover:text-ink">
                  Music
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-ink">
                  Books
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-ink">
                  Mellow Mastermind
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-ink">
                  Coaching
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@wandarogers.com" className="hover:text-ink">
                  hello@wandarogers.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mellowmastermind"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/wandarogers95"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-8 text-xs text-ink/40">
          © {new Date().getFullYear()} Wanda Rogers. All rights reserved.
        </div>
      </footer>

      {/* FLOATING PLAYER */}
      {playerVisible && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl z-50">
          <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,253,249,0.92)] backdrop-blur-xl px-5 py-4 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink/40">
                  Now Playing
                </p>
                <p className="mt-1 text-ink font-medium">{currentTrack.title}</p>
                <p className="text-sm text-muted">{currentTrack.album}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={playPrev}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-ink hover:border-brandBlue/30"
                >
                  Prev
                </button>

                <button
                  onClick={togglePlay}
                  className="rounded-full bg-brandPurple text-white px-5 py-2 text-sm font-semibold"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>

                <button
                  onClick={playNext}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-ink hover:border-brandBlue/30"
                >
                  Next
                </button>
              </div>
            </div>

            <audio
              ref={audioRef}
              className="w-full mt-4"
              onEnded={playNext}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            >
              <source src={currentTrack.src} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      )}
    </main>
  )
}