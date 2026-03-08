"use client"

import { useRef, useState } from "react"

const featuredTracks = [
  {
    title: "Mars",
    src: "/music/some-experience-necessary/mars.mp3",
  },
  {
    title: "Broken Mirrors",
    src: "/music/im-not-a-rapper/broken-mirrors.mp3",
  },
  {
    title: "Built For This",
    src: "/music/im-not-a-rapper/built-for-this.mp3",
  },
]

const products = [
  {
    title: "Why You're Creatively Blocked — Paperback",
    format: "Paperback",
    image: "/books/creatively-blocked.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/paperback/product-kvddgn4.html?page=1&pageSize=4",
    featured: true,
    description:
      "A bold, science-backed guide for creatives ready to stop fighting themselves and start creating with clarity.",
  },
  {
    title: "The First to Make It This Far — Paperback",
    format: "Paperback",
    image: "/books/first-to-make-it.jpg",
    link: "https://www.lulu.com/shop/wanda-rogers/the-first-to-make-it-this-far/paperback/product-yvkv7yd.html?page=1&pageSize=4",
    featured: true,
    description:
      "A memoir of resilience, rhythm, and renewal for anyone who has survived more than they speak about.",
  },
  {
    title: "The First to Make It This Far — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/the-first-to-make-it-this-far/ebook/product-je6eed5.html?page=1&pageSize=4",
    description: "Digital edition.",
  },
  {
    title: "Why You're Creatively Blocked — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/ebook/product-578yy4r.html?page=1&pageSize=4",
    description: "Digital edition.",
  },
  {
    title: "Perfectionist Workbook — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-perfectionist-workbook/ebook/product-zmrjwj6.html?page=1&pageSize=4",
    description: "For creatives stuck waiting until it feels perfect.",
  },
  {
    title: "Idea Hopper Workbook — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-idea-hopper-workbook/ebook/product-2mr7e7m.html?page=1&pageSize=4",
    description: "For creatives drowning in too many ideas.",
  },
  {
    title: "Overthinker Workbook — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-overthinker-workbook/ebook/product-m2zr56j.html?page=1&pageSize=4",
    description: "For creatives trapped in analysis.",
  },
  {
    title: "Distracted Workbook — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-distracted-workbook/ebook/product-659ej9m.html?page=1&pageSize=4",
    description: "For creatives who struggle to stay locked in.",
  },
  {
    title: "Burnout Workbook — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-burnout-workbook/ebook/product-84y8j47.html?page=1&pageSize=4",
    description: "For creatives who need restoration, not more pressure.",
  },
  {
    title: "Comprehensive Companion Workbook — eBook",
    format: "eBook",
    link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-comprehensive-companion-workbook/ebook/product-7k8n854.html?page=1&pageSize=4",
    description: "The full support toolkit for staying unblocked.",
  },
]

export default function Home() {
  const audioRef = useRef(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

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
    <main className="min-h-screen bg-black text-white pb-40">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white font-semibold tracking-wide">
            Wanda Rogers
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#music" className="hover:text-white transition">
              Music
            </a>
            <a href="#method" className="hover:text-white transition">
              Method
            </a>
            <a href="#shop" className="hover:text-white transition">
              Books
            </a>
            <a href="#tools" className="hover:text-white transition">
              Free Tools
            </a>
            <a href="#work" className="hover:text-white transition">
              Coaching
            </a>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
            >
              Book Call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-white/50 tracking-widest text-xs uppercase">
            Wanda Rogers
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Artist. Author. Creativity Coach.
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            I help creatives move through the invisible blocks that keep their
            ideas buried, so they can create with more clarity, self-trust, and
            freedom.
          </p>

          <p className="mt-6 text-white/60 leading-relaxed max-w-xl">
            Through music, books, creative tools, and the{" "}
            <strong>Mellow Mastermind</strong> framework, I’m building a space
            where creativity can feel both powerful and safe.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="#work"
              className="bg-white text-black px-6 py-3 rounded-xl text-sm font-medium"
            >
              Work With Me
            </a>

            <a
              href="#music"
              className="border border-white/20 px-6 py-3 rounded-xl text-sm text-white/80 hover:text-white"
            >
              Listen to Music
            </a>

            <a
              href="/free-downloads"
              className="border border-white/20 px-6 py-3 rounded-xl text-sm text-white/80 hover:text-white"
            >
              Get Free Music
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/wanda-hero.jpg"
            alt="Wanda Rogers"
            className="rounded-3xl w-full max-h-[680px] object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-white/50 tracking-widest text-xs uppercase">
              About Wanda Rogers
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              I help creatives stop fighting themselves and start building from truth.
            </h2>
          </div>

          <div className="text-white/70 leading-relaxed space-y-6 text-lg">
            <p>
              I’m Wanda Rogers — artist, author, creativity coach, and founder
              of Mellow Mastermind.
            </p>

            <p>
              My work is for ambitious creatives who know they have something
              real to offer, but keep running into invisible resistance:
              overthinking, burnout, perfectionism, inconsistency, and fear
              disguised as “not ready yet.”
            </p>

            <p>
              I blend creative psychology, nervous system awareness, identity
              work, and practical execution so creativity can feel safer,
              clearer, and more sustainable.
            </p>

            <p>
              This is not about hustling harder. It’s about creating from a
              place of self-trust, alignment, and freedom.
            </p>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="py-20 px-6 border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/50 tracking-widest text-xs uppercase">
              Music
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
              Sound is another way I tell the story.
            </h2>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Music has always been one of the ways I translate emotion,
              identity, creativity, and truth.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {featuredTracks.map((track, index) => (
              <button
                key={track.title}
                onClick={() => playTrack(index)}
                className="w-full text-left bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/25 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-medium">{track.title}</p>
                    <p className="text-white/50 text-sm mt-1">
                      Click to play in the floating player
                    </p>
                  </div>

                  <span className="text-white/60 text-sm">
                    {currentTrackIndex === index && isPlaying ? "Playing" : "Play"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <img
                src="/music/some-experience-necessary/cover.jpg"
                alt="Some Experience Necessary cover"
                className="rounded-2xl mb-6 w-full"
              />

              <h3 className="text-2xl font-semibold">
                Some Experience Necessary
              </h3>

              <p className="text-white/60 mt-3 text-sm leading-relaxed">
                A project rooted in exploration, emotion, and the process of becoming.
              </p>

              <a
                href="/free-downloads"
                className="inline-block mt-6 bg-white text-black px-5 py-2 rounded-xl text-sm"
              >
                Free Download
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <img
                src="/music/im-not-a-rapper/cover.jpg"
                alt="I'm Not a Rapper cover"
                className="rounded-2xl mb-6 w-full"
              />

              <h3 className="text-2xl font-semibold">
                I&apos;m Not a Rapper
              </h3>

              <p className="text-white/60 mt-3 text-sm leading-relaxed">
                A project exploring voice, identity, confidence, and creative range.
              </p>

              <a
                href="/free-downloads"
                className="inline-block mt-6 bg-white text-black px-5 py-2 rounded-xl text-sm"
              >
                Free Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/50 tracking-widest text-xs uppercase">
            Mellow Mastermind
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            The Mellow Mastermind Method
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Clarity → Regulation → Identity → Output → Income
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Regulate the Brain",
                desc: "Create internal safety so your creativity can return naturally—without forcing yourself.",
              },
              {
                title: "Rebuild Identity",
                desc: "Align who you believe you are with the creator you’re becoming, so your actions match your vision.",
              },
              {
                title: "Release Consistent Output",
                desc: "Install a system that makes execution sustainable, so you can create, publish, and sell with more ease.",
              },
            ].map((m) => (
              <div
                key={m.title}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl"
              >
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="text-white/60 mt-4 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="py-20 px-6 border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold">Books & Workbooks</h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              Resources for creatives who want more clarity, more courage, and more consistency.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {products
              .filter((p) => p.featured)
              .map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-white/30 transition"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full rounded-2xl mb-8 shadow-2xl transition duration-300 group-hover:scale-[1.02]"
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest uppercase text-white/60">
                      {p.format}
                    </span>
                    <span className="text-white/40 group-hover:text-white/70 transition">
                      View →
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug">
                    {p.title}
                  </h3>

                  <p className="mt-4 text-white/60 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-8 inline-flex rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium">
                    Buy on Lulu
                  </div>
                </a>
              ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center">Digital Library</h3>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => !p.featured)
                .map((p) => (
                  <a
                    key={p.title}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-white/25 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-widest uppercase text-white/60">
                        {p.format}
                      </span>
                      <span className="text-white/40 group-hover:text-white/70 transition">
                        View →
                      </span>
                    </div>

                    <h4 className="mt-5 text-lg font-semibold leading-snug">
                      {p.title}
                    </h4>

                    <p className="mt-3 text-white/60 leading-relaxed text-sm">
                      {p.description}
                    </p>

                    <div className="mt-6 inline-flex rounded-2xl bg-white text-black px-4 py-2 text-sm font-medium">
                      Buy on Lulu
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREE TOOLS */}
      <section id="tools" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/50 tracking-widest text-xs uppercase">
            Free Tools
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Tools for unblocking your creativity
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            These resources are designed to help creatives reset their mind,
            capture ideas, and build momentum again.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-semibold">Creative Block Reset</h3>
              <p className="mt-4 text-white/60 text-sm">
                A short guide to help you reconnect with your creative flow.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-semibold">Idea Capture Sheet</h3>
              <p className="mt-4 text-white/60 text-sm">
                A simple framework for collecting and organizing creative ideas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-semibold">Creative Prompts</h3>
              <p className="mt-4 text-white/60 text-sm">
                Writing and reflection prompts to spark new ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COACHING */}
      <section id="work" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Freedom is built.
            </h2>

            <p className="text-white/70 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              This isn’t about doing more. It’s about becoming the kind of creator
              who can hold their own power calmly, consistently, and without
              abandoning authenticity.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-medium hover:opacity-90"
              >
                Apply / Book a Call
              </a>

              <a
                href="#method"
                className="border border-white/30 hover:border-white px-10 py-4 rounded-2xl text-lg text-white/90"
              >
                See the Method
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-20 py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-white/60">
          <div>
            <h3 className="text-white font-semibold mb-3">Wanda Rogers</h3>
            <p>Artist, author, creativity coach, and founder of Mellow Mastermind.</p>
            <p className="mt-3">
              Helping creatives move from resistance to expression.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#music" className="hover:text-white">
                  Music
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white">
                  Books & Workbooks
                </a>
              </li>
              <li>
                <a href="#method" className="hover:text-white">
                  The Method
                </a>
              </li>
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

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 text-xs text-white/40">
          © {new Date().getFullYear()} Wanda Rogers. All rights reserved.
        </div>
      </footer>

      {/* FLOATING MUSIC PLAYER */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">
        <div className="bg-black/90 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-white/50 text-xs tracking-widest uppercase">
                Now Playing
              </p>
              <p className="text-white font-medium mt-1">
                {currentTrack.title}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={playPrev}
                className="border border-white/15 text-white px-4 py-2 rounded-xl text-sm hover:border-white/30"
              >
                Prev
              </button>

              <button
                onClick={togglePlay}
                className="bg-white text-black px-5 py-2 rounded-xl text-sm font-medium"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>

              <button
                onClick={playNext}
                className="border border-white/15 text-white px-4 py-2 rounded-xl text-sm hover:border-white/30"
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
    </main>
  )
}