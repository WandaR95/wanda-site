"use client"

import { useState } from "react"

export default function LeadMagnetForm() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const [formMessage, setFormMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!firstName.trim()) {
      nextErrors.firstName = "First name is required."
    }

    if (!email.trim()) {
      nextErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address."
    }

    return nextErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setFormMessage("")
      return
    }

    setErrors({})
    setFormMessage("")
    setSubmitting(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrors(data?.errors || {})
        setFormMessage(data?.message || "Something went wrong. Please try again.")
        setSubmitting(false)
        return
      }

      window.location.href = "/free-downloads"
    } catch (error) {
      setFormMessage("Something went wrong. Please try again.")
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-ink outline-none transition ${errors.firstName
              ? "border-red-500"
              : "border-black/10 focus:border-brandPurple/40"
            }`}
        />
        {errors.firstName ? (
          <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
        ) : null}
      </div>

      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-ink outline-none transition ${errors.email
              ? "border-red-500"
              : "border-black/10 focus:border-brandPurple/40"
            }`}
        />
        {errors.email ? (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        ) : null}
      </div>

      <p className="text-sm text-muted">
        You can unsubscribe anytime. Helpful updates only! No noise.
      </p>

      {formMessage ? (
        <p className="text-sm text-red-600">{formMessage}</p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3 text-sm">

        <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700">
          Creative clarity exercises
        </span>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
          Early access to new music
        </span>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
          Tools to unblock your creativity
        </span>

      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-2xl bg-brandPurple px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Get Your Creative Clarity Guide!"}
      </button>
    </form>
  )
}