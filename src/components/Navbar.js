"use client"

export default function Navbar({ calendlyLink }) {
  const links = [
    { label: "Music", href: "#music" },
    { label: "Books", href: "#books" },
    { label: "Free Reset", href: "#lead-magnet" },
    { label: "Mellow Mastermind", href: "#mellow-mastermind" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/30 backdrop-blur-xl shadow-sm px-6 py-3">

          {/* Logo */}
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight text-ink"
          >
            Wanda Rogers
          </a>

          {/* Links */}
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

          {/* CTA */}
          <a
            href={calendlyLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brandPurple text-white px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Support
          </a>

        </div>
      </div>
    </header>
  )
}