export default function FreeDownloadsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-white/50 tracking-widest text-xs uppercase">
          Free Downloads
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          Your music downloads
        </h1>

        <p className="mt-6 text-white/70 text-lg leading-relaxed">
          Thanks for being here. Enjoy these downloads and stay connected for more
          music, books, tools, and creative resources.
        </p>

        <div className="mt-12 space-y-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-xl font-semibold">Mars</h2>
            <a
              href="/music/some-experience-necessary/mars.mp3"
              download
              className="inline-flex mt-4 rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium"
            >
              Download MP3
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-xl font-semibold">Mic Check</h2>
            <a
              href="/music/im-not-a-rapper/mic-check.mp3"
              download
              className="inline-flex mt-4 rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium"
            >
              Download MP3
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}