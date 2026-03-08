export default function FreeDownloadsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-white/50 tracking-widest text-xs uppercase">
            Free Music
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            Get free songs from Wanda Rogers
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Enter your name and email below to unlock free music, stay connected,
            and get updates on new releases, books, tools, and everything I’m
            building through Wanda Rogers and Mellow Mastermind.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10">
            <p className="text-white/50 tracking-widest text-xs uppercase">
              Instant Access
            </p>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
              Sign up to unlock your downloads
            </h2>

            <p className="mt-4 text-white/65 leading-relaxed">
              Once you enter your email, you’ll be redirected to your downloads.
              You’ll also be the first to hear about new music, new books, free
              tools, and future Mellow Mastermind updates.
            </p>

            <div className="mt-8">
              <div className="ml-embedded" data-form="cI8cLy"></div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10">
            <p className="text-white/50 tracking-widest text-xs uppercase">
              What You’re Joining
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight">
              More than downloads
            </h2>

            <div className="mt-6 space-y-5 text-white/65 leading-relaxed">
              <div className="border border-white/10 rounded-2xl p-5 bg-black/20">
                <p className="text-white font-medium">Music</p>
                <p className="mt-2 text-sm">
                  Free songs, future releases, and updates from my creative world.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-black/20">
                <p className="text-white font-medium">Books & Tools</p>
                <p className="mt-2 text-sm">
                  Creative resources, workbooks, and practical tools to help you
                  move through blocks and create with more clarity.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-black/20">
                <p className="text-white font-medium">Mellow Mastermind</p>
                <p className="mt-2 text-sm">
                  Community updates, creative support, and the deeper ecosystem
                  I’m building for artists, thinkers, and multi-passionate creators.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center border border-white/15 px-6 py-3 rounded-2xl text-sm text-white/80 hover:text-white hover:border-white/30 transition"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </main>
  )
}