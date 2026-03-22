"use client"

import { useEffect, useState } from "react"

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-5 z-50 rounded-full border border-black/10 bg-[rgba(255,253,249,0.92)] px-4 py-3 text-sm font-semibold text-ink shadow-xl backdrop-blur-xl transition hover:bg-white"
    >
      ↑ Top
    </button>
  )
}