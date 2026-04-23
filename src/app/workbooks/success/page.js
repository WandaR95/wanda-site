"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SuccessContent() {
  const params = useSearchParams()
  const sessionId = params.get("session_id")

  return (
    <main className="min-h-screen bg-cream text-ink flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full text-center">
        <div className="rounded-[2rem] border border-black/10 bg-surface p-10 shadow-xl">
          <div className="text-4xl mb-4">✓</div>
          <h1 className="text-3xl font-semibold leading-tight">
            Your workbook is on its way.
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Check your email for your download link. If you don&apos;t see it
            within a few minutes, check your spam folder.
          </p>
          {sessionId && (
            <p className="mt-3 text-xs text-ink/30 font-mono break-all">
              Order: {sessionId.slice(-12)}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/workbooks"
              className="rounded-full bg-brandPurple text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Browse more workbooks
            </Link>
            <Link
              href="/"
              className="text-sm text-muted hover:text-ink transition"
            >
              Back to wandarogers.com
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function WorkbookSuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  )
}
