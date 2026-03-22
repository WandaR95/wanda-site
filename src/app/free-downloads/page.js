export default function FreeDownloadsPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl text-center">
          <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
            You&apos;re In
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
            Your free download is ready.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            Thanks for joining. You can grab your free track below, and keep an
            eye on your inbox for more music, books, and creative insights.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/music/some-experience-necessary/mars.mp3"
              download
              className="rounded-full bg-brandPurple text-white px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Download Free Track
            </a>
          </div>

          <div className="mt-6">
            <a
              href="/#music"
              className="text-sm text-brandBlue hover:opacity-80 transition"
            >
              Or go back and keep listening →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}