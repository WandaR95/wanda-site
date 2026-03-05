"use client"
export default function Home() {
  const calendlyLink = "https://calendly.com/wanda-rogers/30min"

  const products = [
    // Paperbacks (2)
    {
      title: "The First to Make It This Far — Paperback",
      format: "Paperback",
      link: "https://www.lulu.com/shop/wanda-rogers/the-first-to-make-it-this-far/paperback/product-yvkv7yd.html?page=1&pageSize=4",
    },
    {
      title: "Why You're Creatively Blocked — Paperback",
      format: "Paperback",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/paperback/product-kvddgn4.html?page=1&pageSize=4",
    },

    // eBooks (8)
    {
      title: "The First to Make It This Far — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/the-first-to-make-it-this-far/ebook/product-je6eed5.html?page=1&pageSize=4",
    },
    {
      title: "Why You're Creatively Blocked — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked/ebook/product-578yy4r.html?page=1&pageSize=4",
    },
    {
      title: "Perfectionist Workbook — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-perfectionist-workbook/ebook/product-zmrjwj6.html?page=1&pageSize=4",
    },
    {
      title: "Idea Hopper Workbook — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-idea-hopper-workbook/ebook/product-2mr7e7m.html?page=1&pageSize=4",
    },
    {
      title: "Overthinker Workbook — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-overthinker-workbook/ebook/product-m2zr56j.html?page=1&pageSize=4",
    },
    {
      title: "Distracted Workbook — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-distracted-workbook/ebook/product-659ej9m.html?page=1&pageSize=4",
    },
    {
      title: "Burnout Workbook — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-burnout-workbook/ebook/product-84y8j47.html?page=1&pageSize=4",
    },
    {
      title: "Comprehensive Companion Workbook — eBook",
      format: "eBook",
      link: "https://www.lulu.com/shop/wanda-rogers/why-youre-creatively-blocked-comprehensive-companion-workbook/ebook/product-7k8n854.html?page=1&pageSize=4",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-wide">
            Wanda Rogers <span className="text-white/50">•</span>{" "}
            <span className="text-white/70">Mellow Mastermind</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a className="hover:text-white" href="#method">Method</a>
            <a className="hover:text-white" href="#shop">Shop</a>
            <a className="hover:text-white" href="#work">Coaching</a>
          </nav>

          <a
            href={calendlyLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Book on Calendly
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28 text-center">
        <p className="text-white/70 tracking-widest text-xs uppercase">
          Expert Creativity Coach • Identity • Nervous System • Execution
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Creativity Was Never Your Problem.
          <br />
          Safety Was.
        </h1>

        <p className="text-xl text-white/70 mt-8 max-w-3xl mx-auto leading-relaxed">
          I help ambitious creatives regulate their nervous system, reclaim their voice,
          and build authority that feels like freedom — not performance.
        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-medium hover:opacity-90"
          >
            Apply / Book a Call
          </a>

          <a
            href="#shop"
            className="border border-white/30 hover:border-white px-8 py-4 rounded-2xl text-lg text-white/90"
          >
            Explore the Shop
          </a>
        </div>

        <div className="mt-12 text-white/50 text-sm">
          A luxury approach to creativity: calm, clear, consistent.
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-neutral-950 py-20 px-6 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold">Trust the truth.</h2>
            <p className="text-white/60 mt-4">
              Your “block” is usually protection.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4 text-white/70 leading-relaxed">
            <p>
              Most people try to “push through” creative resistance.
              But if your nervous system feels unsafe, your brain will choose survival over expression —
              every time.
            </p>
            <p>
              My work blends creative psychology, identity coaching, and practical systems so your output
              becomes inevitable… without you betraying yourself to get there.
            </p>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold">The Mellow Mastermind Method</h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Clarity → Regulation → Identity → Output → Income
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Regulate the Brain",
              desc:
                "We create internal safety so your creativity can return naturally—without forcing yourself.",
            },
            {
              title: "Rebuild Identity",
              desc:
                "We align who you believe you are with the creator you’re becoming, so your actions match your vision.",
            },
            {
              title: "Release Consistent Output",
              desc:
                "We install a system that makes execution sustainable, so you can create, publish, and sell with ease.",
            },
          ].map((m) => (
            <div key={m.title} className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="text-white/60 mt-4 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="bg-neutral-950 py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-4xl font-semibold">Shop</h2>
              <p className="text-white/60 mt-3 max-w-2xl">
                Digital and paperback resources for creatives who want freedom, structure, and self-trust.
                Fulfilled via Lulu.
              </p>
            </div>
            <div className="text-white/50 text-sm">
              2 Paperbacks • 8 eBooks
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-white/25 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase text-white/60">
                    {p.format}
                  </span>
                  <span className="text-white/40 group-hover:text-white/70 transition">
                    View →
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  Designed to move you from stuck → clear → consistent.
                </p>
                <div className="mt-8 inline-flex rounded-2xl bg-white text-black px-5 py-2 text-sm font-medium group-hover:opacity-90">
                  Buy on Lulu
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING */}
      <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Freedom Is Built.
          </h2>

          <p className="text-white/70 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            This isn’t about “doing more.” It’s about becoming the kind of creator who can hold their own power—
            calmly, consistently, and without abandoning authenticity.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-medium hover:opacity-90"
            >
              Apply / Book a Call
            </a>

            <a
              href="#method"
              className="border border-white/30 hover:border-white px-10 py-4 rounded-2xl text-lg text-white/90"
            >
              See the Method
            </a>
          </div>

          <p className="text-white/45 text-sm mt-8">
            If the link opens blank, paste your Calendly URL into <code>calendlyLink</code> at the top of this file.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-14 border-t border-white/10 text-center text-white/50 text-sm">
        Wanda Rogers © {new Date().getFullYear()} • Creativity • Freedom • Trust
      </footer>
    </main>
  )
}