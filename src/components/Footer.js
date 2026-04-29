import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F2ECE4]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm text-muted">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src="/logo-icon.png" alt="Mellow Mastermind" width={28} height={28} className="rounded-sm" />
            <h3 className="text-ink font-semibold">Wanda Rogers</h3>
          </div>
          <p className="leading-relaxed">
            Wanda Rogers is an artist, author, and founder of Mellow Mastermind,
            a creative framework designed to help people reconnect with their
            voice and build a creative life that feels clear, grounded, and real 
            through music, books, and the Mellow Mastermind framework.
          </p>
        </div>

        <div>
          <h4 className="text-ink font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#music" className="hover:text-ink">Music</a></li>
            <li><a href="#books" className="hover:text-ink">Books</a></li>
            <li><a href="#mellow-mastermind" className="hover:text-ink">Mellow Mastermind</a></li>
            <li><a href="#coaching" className="hover:text-ink">Support</a></li>
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
                href="https://www.tiktok.com/@wandarogers"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@wandarogers"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/c37KhByYUb"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                Discord
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
  )
}