"use client"

import { useRef, useState } from "react"

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
    <main className="min-h-screen bg-[#050505] text-white pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.10),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_25%)]" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-white">
            Wanda Rogers
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/65">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#music" className="hover:text-white transition">Music</a>
            <a href="#books" className="hover:text-white transition">Books</a>
            <a href="#community" className="hover:text-white transition">Community</a>
            <a href="#work" className="hover:text-white transition">Coaching</a>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white text-black px-5 py-2 font-medium hover:opacity-90 transition"
            >
              Book Call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-14 md:pt-20 pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-white/45">
              Artist • Author • Creativity Coach
            </p>

            <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              A creative life that feels
              <span className="block text-white/70">clear, grounded, and real.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/68">
              I’m Wanda Rogers. I make music, write books, build tools for creatives,
              and help people move through the invisible blocks that keep their gifts buried.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-white/52">
              Through <span className="text-white font-medium">Mellow Mastermind</span>,
              I’m creating a space where creativity, identity, and self-trust can grow together.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/free-downloads"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Get Free Music
              </a>

              <a
                href="#music"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:text-white hover:border-white/30 transition"
              >
                Listen Now
              </a>

              <a
                href="#work"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:text-white hover:border-white/30 transition"
              >
                Work With Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="/wanda-hero.jpg"
                alt="Wanda Rogers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-white/50">
          <span>Music</span>
          <span>Books</span>
          <span>Free Creative Tools</span>
          <span>Coaching</span>
          <span>Mellow Mastermind Community</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/45">
              About
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              I help creatives stop fighting themselves.
            </h2>
          </div>

          <div className="space-y-6 text-white/68 text-lg leading-relaxed">
            <p>
              I’m an artist, author, and creativity coach who understands how easy it is
              to have real talent and still feel stuck, scattered, inconsistent, or disconnected
              from your own voice.
            </p>

            <p>
              My work sits at the intersection of creative psychology, identity, nervous system awareness,
              and execution. I help people understand what their resistance is protecting,
              then build a way forward that feels sustainable instead of forced.
            </p>

            <p>
              This isn’t about hustling harder. It’s about making room for the kind of creativity
              that can actually last.
            </p>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/45">
              Music
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Sound is part of the story too.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              These featured tracks give people a quick way into my creative world:
              identity, depth, and forward motion.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="space-y-4">
              {featuredTracks.map((track, index) => (
                <button
                  key={track.title}
                  onClick={() => playTrack(index)}
                  className="w-full text-left rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-6 py-5 hover:border-white/25 hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white font-medium">{track.title}</p>
                      <p className="mt-1 text-sm text-white/45">{track.album}</p>
                    </div>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                      {currentTrackIndex === index && isPlaying ? "Playing" : "Play"}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <img
                  src="/music/some-experience-necessary/cover.jpg"
                  alt="Some Experience Necessary cover"
                  className="w-full rounded-[1.25rem] mb-5"
                />
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">Album</p>
                <h3 className="mt-2 text-2xl font-semibold">Some Experience Necessary</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Exploration, emotion, and the process of becoming.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <img
                  src="/music/im-not-a-rapper/cover.jpg"
                  alt="I'm Not a Rapper cover"
                  className="w-full rounded-[1.25rem] mb-5"
                />
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">Album</p>
                <h3 className="mt-2 text-2xl font-semibold">I&apos;m Not a Rapper</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Voice, contradiction, confidence, and range.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/free-downloads"
              className="inline-flex rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Unlock Free Downloads
            </a>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section id="books" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] uppercase text-white/45">
            Books
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
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
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 hover:border-white/25 transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full rounded-[1.25rem] shadow-2xl"
              />

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {book.format}
                </span>
                <span className="text-sm text-white/50 group-hover:text-white/70 transition">
                  View →
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-snug">
                {book.title}
              </h3>

              <p className="mt-4 text-white/58 leading-relaxed">
                {book.description}
              </p>

              <div className="mt-7 inline-flex rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold">
                Buy on Lulu
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* COMMUNITY / METHOD */}
      <section id="community" className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-white/45">
                Mellow Mastermind
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                A framework and community for creatives building from truth.
              </h2>

              <p className="mt-6 text-white/62 leading-relaxed">
                Mellow Mastermind is the part of my brand focused on creative support,
                sustainable output, and helping people work with their minds instead of against them.
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COACHING */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 md:p-14 text-center shadow-2xl">
          <p className="text-[11px] tracking-[0.28em] uppercase text-white/45">
            Coaching
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Work with me directly.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-white/65">
            For creatives who want deeper support around identity, creative blocks,
            self-trust, and building a more sustainable body of work.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Apply / Book a Call
            </a>

            <a
              href="/free-downloads"
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm text-white/80 hover:text-white hover:border-white/30 transition"
            >
              Start with Free Music
            </a>
          </div>
        </div>
      </section>

      {/* FREE TOOLS CTA */}
      <section id="tools" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-white/45">
                Free Tools
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                Start with something free.
              </h2>

              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                Get free music, creative tools, and updates on new releases, books,
                and future Mellow Mastermind offerings.
              </p>
            </div>

            <a
              href="/free-downloads"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Get Free Downloads
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm text-white/55">
          <div>
            <h3 className="text-white font-semibold mb-3">Wanda Rogers</h3>
            <p>Artist, author, creativity coach, and founder of Mellow Mastermind.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#music" className="hover:text-white">Music</a></li>
              <li><a href="#books" className="hover:text-white">Books</a></li>
              <li><a href="#community" className="hover:text-white">Mellow Mastermind</a></li>
              <li><a href="#work" className="hover:text-white">Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@wandarogers.com" className="hover:text-white">
                  hello@wandarogers.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-8 text-xs text-white/35">
          © {new Date().getFullYear()} Wanda Rogers. All rights reserved.
        </div>
      </footer>

      {/* FLOATING PLAYER */}
      {playerVisible && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl z-50">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/85 backdrop-blur-xl px-5 py-4 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Now Playing
                </p>
                <p className="mt-1 text-white font-medium">{currentTrack.title}</p>
                <p className="text-sm text-white/40">{currentTrack.album}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={playPrev}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:border-white/30"
                >
                  Prev
                </button>

                <button
                  onClick={togglePlay}
                  className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>

                <button
                  onClick={playNext}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:border-white/30"
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