export default function FreeDownloadsPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="rounded-[2rem] border border-black/10 bg-surface p-8 md:p-12 shadow-xl text-center">
          <p className="text-[11px] tracking-[0.28em] uppercase text-ink/50">
            Mellow Mastermind
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-ink">
            Your 15-Minute Creative Reset is ready.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            Download your free guide below, then take the next step with the book and
            the Mellow Mastermind Discord Community.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/downloads/the-15-minute-creative-reset.pdf"
              download
              className="rounded-full bg-brandPurple text-white px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Download Your Guide
            </a>

            <a
              href="https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/paperback/product-kvddgn4.html?page=1&pageSize=4"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-brandPurple text-brandPurple px-8 py-3.5 text-sm font-semibold hover:bg-brandPurple hover:text-white transition"
            >
              Get the Book
            </a>

            <a
              href="https://discord.gg/c37KhByYUb"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-brandBlue text-brandBlue px-8 py-3.5 text-sm font-semibold hover:bg-brandBlue hover:text-white transition"
            >
              Join the Mellow Mastermind Discord Community
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}