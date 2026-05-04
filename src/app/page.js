"use client"

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import QuizSection from "@/components/QuizSection"
import LeadMagnetSection from "@/components/LeadMagnetSection"
import AboutSection from "@/components/AboutSection"
import ThisIsForYouSection from "@/components/ThisIsForYouSection"
import BooksSection from "@/components/BooksSection"
import WorkbooksSection from "@/components/WorkbooksSection"
import MellowMastermindSection from "@/components/MellowMastermindSection"
import CoachingSection from "@/components/CoachingSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import WhatThisWorkHoldsSection from "@/components/WhatThisWorkHoldsSection"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import AmbientBackground from "@/components/AmbientBackground"
import ScrollProgressBar from "@/components/ScrollProgressBar"



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
  const calendlyLink = "https://calendly.com/wanda-rogers/30min"

  return (
    <main className="pt-8 relative min-h-screen bg-cream text-ink pb-32 overflow-hidden">
      <AmbientBackground />
      <ScrollProgressBar />
      <div className="relative z-10" />

      <Navbar calendlyLink={calendlyLink} />

      <HeroSection calendlyLink={calendlyLink} />
      <QuizSection revealUp={revealUp} />
      <LeadMagnetSection revealUp={revealUp} />

      <ThisIsForYouSection />

      <WorkbooksSection revealUp={revealUp} />
      <BooksSection revealUp={revealUp} featuredBooks={featuredBooks} />

      <AboutSection revealUp={revealUp} />
      <MellowMastermindSection revealUp={revealUp} />
      <TestimonialsSection />
      <CoachingSection revealUp={revealUp} calendlyLink={calendlyLink} />
      <WhatThisWorkHoldsSection revealUp={revealUp} />
      <Footer />

      <ScrollToTopButton />
    </main>
  )
}