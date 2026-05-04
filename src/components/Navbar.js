"use client"

import Image from "next/image"
import { useState } from "react"

export default function Navbar({ calendlyLink }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: "Creative Clarity Guide", href: "#lead-magnet" },
    { label: "Workbooks", href: "#workbooks" },
    { label: "Books", href: "#books" },
    { label: "Coaching", href: "#coaching" },
    { label: "Mellow Mastermind", href: "#mellow-mastermind" },
    { label: "Music", href: "/music" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Main bar */}
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/30 backdrop-blur-xl shadow-sm px-6 py-3">

          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-ink hover:opacity-80 transition"
          >
            <Image
              src="/logo-icon.png"
              alt="Mellow Mastermind"
              width={32}
              height={32}
              className="rounded-md"
            />
            Wanda Rogers
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink/70">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-ink transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@wandarogers.com"
              className="rounded-full bg-brandPurple text-white px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              Work With Me
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-xl hover:bg-black/5 transition text-ink"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-black/10 bg-white/95 backdrop-blur-xl shadow-lg px-6 py-5">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm text-ink/70 hover:text-ink border-b border-black/5 last:border-0 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@wandarogers.com"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-brandPurple text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition text-center"
              >
                Work With Me
              </a>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}
