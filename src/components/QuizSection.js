"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Reveal from "./Reveal"

const ARCHETYPES = {
  Overthinker: {
    emoji: "🌀",
    color: "brandPurple",
    tint: "lavenderTint",
    tagline: "Your brain never stops processing.",
    description:
      "You can see every angle of a project before you start, which means you rarely start. The creative block isn't a lack of ideas. It's a traffic jam of too many. You need less information and more permission to move before you're ready.",
    resource: "The Overthinking Workbook",
    workbookHref: "/workbooks",
  },
  Perfectionist: {
    emoji: "🎯",
    color: "brandBlue",
    tint: "blueTint",
    tagline: "Your standards are impossibly high.",
    description:
      "The work never feels ready because you're holding it up against a version that doesn't exist yet. The real block is the gap between your vision and your willingness to let the process be messy. Progress requires releasing the final version from your imagination.",
    resource: "The Perfectionist's Permission Slip",
    workbookHref: "/workbooks",
  },
  Distracted: {
    emoji: "🌊",
    color: "brandBlue",
    tint: "blueTint",
    tagline: "You're not unfocused. You're over-committed.",
    description:
      "Life keeps interrupting your creative time, and you've started to wonder if that's on purpose. The block isn't focus. It's boundaries: permission to prioritize your own work without explaining yourself to anyone.",
    resource: "The Focus Fix",
    workbookHref: "/workbooks",
  },
  "Idea Hopper": {
    emoji: "⚡",
    color: "brandOrange",
    tint: "peachTint",
    tagline: "You're the most creative person in every room.",
    description:
      "You have more ideas than most people have in a lifetime. The block is commitment: staying long enough to finish something, even when something new and shiny is already calling. Your greatest asset becomes your biggest saboteur.",
    resource: "The Idea Graveyard",
    workbookHref: "/workbooks",
  },
  Burnout: {
    emoji: "🌱",
    color: "brandPurple",
    tint: "lavenderTint",
    tagline: "You used to have energy for this.",
    description:
      "Now even thinking about creating feels like lifting something too heavy. This isn't laziness. It's depletion. It requires a different kind of work than pushing harder. Recovery is not a detour from creativity. It is the work.",
    resource: "The Burnout Recovery Guide",
    workbookHref: "/workbooks",
  },
}

const QUESTIONS = [
  {
    question: "When you sit down to create, what usually happens first?",
    answers: [
      { text: "I spiral into \"what if it's not good enough?\"", archetype: "Perfectionist" },
      { text: "I overthink the method before I even start", archetype: "Overthinker" },
      { text: "Something else grabs my attention", archetype: "Distracted" },
      { text: "A brand new idea shows up and I chase it", archetype: "Idea Hopper" },
      { text: "I stare at the page and feel completely empty", archetype: "Burnout" },
    ],
  },
  {
    question: "How do you feel about your unfinished projects?",
    answers: [
      { text: "They haunt me; I keep going back to fix them", archetype: "Perfectionist" },
      { text: "I have a whole graveyard of them", archetype: "Idea Hopper" },
      { text: "I'm not sure why I stopped. Life just happened.", archetype: "Distracted" },
      { text: "I analyzed them to death until I lost interest", archetype: "Overthinker" },
      { text: "Even thinking about them drains me", archetype: "Burnout" },
    ],
  },
  {
    question: "What does \"being blocked\" feel like for you?",
    answers: [
      { text: "A wall. I can't move forward until it's perfect.", archetype: "Perfectionist" },
      { text: "A fog. I can't find the thread I was pulling.", archetype: "Distracted" },
      { text: "An endless loop. I think but never make.", archetype: "Overthinker" },
      { text: "A total shutdown. My body just refuses.", archetype: "Burnout" },
      { text: "A distraction. I'd rather start something fresh.", archetype: "Idea Hopper" },
    ],
  },
  {
    question: "What do people closest to you say about your creativity?",
    answers: [
      { text: "\"You're too hard on yourself\"", archetype: "Perfectionist" },
      { text: "\"You always have a million ideas\"", archetype: "Idea Hopper" },
      { text: "\"You need to focus\"", archetype: "Distracted" },
      { text: "\"You need to rest\"", archetype: "Burnout" },
      { text: "\"You overthink everything\"", archetype: "Overthinker" },
    ],
  },
  {
    question: "The last time you felt truly creative, what made it work?",
    answers: [
      { text: "It was spontaneous. No pressure, no stakes.", archetype: "Perfectionist" },
      { text: "I had accountability or a clear deadline", archetype: "Distracted" },
      { text: "I was rested and had uninterrupted space", archetype: "Burnout" },
      { text: "I had a clear direction to follow", archetype: "Overthinker" },
      { text: "It was a completely new idea that excited me", archetype: "Idea Hopper" },
    ],
  },
]

function tally(answers) {
  const counts = {}
  for (const a of answers) {
    counts[a] = (counts[a] || 0) + 1
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
}

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.2, ease: "easeIn" } },
}

export default function QuizSection({ revealUp }) {
  const [step, setStep] = useState(0) // 0-4 = questions, 5 = results
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [archetype, setArchetype] = useState(null)

  // Email capture state
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [formErrors, setFormErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formMessage, setFormMessage] = useState("")

  const currentQ = QUESTIONS[step]
  const progress = step >= 5 ? 100 : Math.round((step / QUESTIONS.length) * 100)

  function handleAnswer(answer) {
    setSelected(answer.archetype)
    setTimeout(() => {
      const newAnswers = [...answers, answer.archetype]
      setAnswers(newAnswers)
      setSelected(null)
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1)
      } else {
        const result = tally(newAnswers)
        setArchetype(result)
        setStep(5)
      }
    }, 320)
  }

  function restart() {
    setStep(0)
    setAnswers([])
    setSelected(null)
    setArchetype(null)
    setFirstName("")
    setEmail("")
    setFormErrors({})
    setSubmitting(false)
    setSubmitted(false)
    setFormMessage("")
  }

  async function handleEmailSubmit(e) {
    e.preventDefault()
    const errs = {}
    if (!firstName.trim()) errs.firstName = "First name is required."
    if (!email.trim()) errs.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address."
    if (Object.keys(errs).length) { setFormErrors(errs); return }
    setFormErrors({})
    setSubmitting(true)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setFormErrors(data?.errors || {})
        setFormMessage(data?.message || "Something went wrong. Please try again.")
        setSubmitting(false)
        return
      }
      setSubmitted(true)
    } catch {
      setFormMessage("Something went wrong. Please try again.")
      setSubmitting(false)
    }
  }

  const info = archetype ? ARCHETYPES[archetype] : null

  return (
    <motion.section
      id="quiz"
      className="border-t border-black/10 bg-lavenderTint"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">
              60-Second Quiz
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-ink">
              What's your creative archetype?
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl mx-auto">
              Five questions. Honest answers. A diagnosis that actually fits.
            </p>
          </div>
        </Reveal>

        {/* Progress bar */}
        {step < 5 && (
          <div className="mb-8">
            <div className="flex justify-between text-xs text-ink/40 mb-2">
              <span>Question {step + 1} of {QUESTIONS.length}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-black/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-brandPurple transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step < 5 ? (
            <motion.div
              key={step}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-10 shadow-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-ink leading-snug mb-7">
                  {currentQ.question}
                </h3>
                <div className="space-y-3">
                  {currentQ.answers.map((answer) => (
                    <button
                      key={answer.archetype}
                      onClick={() => handleAnswer(answer)}
                      disabled={selected !== null}
                      className={`w-full text-left rounded-[1.25rem] border px-5 py-4 text-sm leading-relaxed transition-all duration-200
                        ${selected === answer.archetype
                          ? "border-brandPurple bg-lavenderTint text-brandPurple font-semibold scale-[0.99]"
                          : "border-black/10 bg-[#FCFAF7] text-ink hover:border-brandPurple/40 hover:bg-lavenderTint/60 hover:shadow-sm"
                        }
                        disabled:cursor-not-allowed`}
                    >
                      {answer.text}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Result card */}
              <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-10 shadow-xl">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{info.emoji}</div>
                  <p className="text-[11px] tracking-[0.28em] uppercase text-ink/40 mb-2">
                    Your archetype
                  </p>
                  <h3 className="text-3xl md:text-4xl font-semibold text-ink">
                    The {archetype}
                  </h3>
                  <p className="mt-3 text-lg font-medium text-muted">
                    {info.tagline}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/10 bg-[#FCFAF7] p-6 mb-8">
                  <p className="text-muted leading-relaxed">
                    {info.description}
                  </p>
                </div>

                {/* Email capture */}
                {!submitted ? (
                  <div>
                    <h4 className="text-lg font-semibold text-ink mb-2">
                      Want your full breakdown + a custom resource?
                    </h4>
                    <p className="text-sm text-muted mb-5 leading-relaxed">
                      I'll send you a personalized guide built specifically for the{" "}
                      <strong>{archetype}</strong>, including <em>{info.resource}</em> and
                      next steps tailored to how you actually work.
                    </p>

                    <form onSubmit={handleEmailSubmit} className="space-y-3" noValidate>
                      <div>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          className={`w-full rounded-2xl border bg-white px-4 py-3 text-ink outline-none transition text-sm ${
                            formErrors.firstName
                              ? "border-red-400"
                              : "border-black/10 focus:border-brandPurple/40"
                          }`}
                        />
                        {formErrors.firstName && (
                          <p className="mt-1 text-xs text-red-600">{formErrors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className={`w-full rounded-2xl border bg-white px-4 py-3 text-ink outline-none transition text-sm ${
                            formErrors.email
                              ? "border-red-400"
                              : "border-black/10 focus:border-brandPurple/40"
                          }`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
                        )}
                      </div>

                      {formMessage && (
                        <p className="text-sm text-red-600">{formMessage}</p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-full bg-brandPurple text-white px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending…" : `Send me my ${archetype} guide →`}
                      </button>

                      <p className="text-xs text-center text-ink/40">
                        No spam. Just the resource built for your archetype.
                      </p>
                    </form>
                  </div>
                ) : (
                  <div className="rounded-[1.5rem] bg-lavenderTint border border-brandPurple/20 p-6 text-center">
                    <p className="text-2xl mb-2">✅</p>
                    <p className="font-semibold text-ink">You&apos;re in, {firstName}.</p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Check your inbox for your personalized {archetype} guide.
                    </p>
                    {info?.workbookHref && (
                      <a
                        href={info.workbookHref}
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brandPurple text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                      >
                        Get {info.resource} →
                      </a>
                    )}
                  </div>
                )}

                <div className="mt-6 text-center">
                  <button
                    onClick={restart}
                    className="text-sm text-ink/40 hover:text-ink transition underline underline-offset-2"
                  >
                    Retake the quiz
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
