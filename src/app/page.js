"use client"
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Creativity Was Never Your Problem.
          <br />
          Safety Was.
        </h1>

        <p className="text-xl text-neutral-300 mt-8 max-w-3xl mx-auto">
          I help creatives remove the psychological and nervous system
          barriers that block their expression, authority, and income.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="#work"
            className="bg-white text-black px-8 py-4 rounded-xl text-lg font-medium"
          >
            Work With Me
          </a>

          <a
            href="#book"
            className="border border-white px-8 py-4 rounded-xl text-lg"
          >
            Explore the Book
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-neutral-900 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold">
            You Are Not Lazy. You Are Dysregulated.
          </h2>

          <p className="text-neutral-300 mt-8 text-lg leading-relaxed">
            Most creative blocks are not discipline problems.
            They are nervous system conflicts.
            Identity conflicts.
            Safety conflicts.
          </p>

          <p className="text-neutral-400 mt-6">
            When the brain feels safe, creativity returns naturally.
          </p>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-28 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-16">
          The Mellow Mastermind Method
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold">Regulate the Brain</h3>
            <p className="text-neutral-400 mt-4">
              Build internal safety so your creativity can return naturally.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold">Rebuild Identity</h3>
            <p className="text-neutral-400 mt-4">
              Align who you believe you are with the creator you’re becoming.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold">Release Consistent Output</h3>
            <p className="text-neutral-400 mt-4">
              Install systems that make creativity and visibility sustainable.
            </p>
          </div>

        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="bg-neutral-900 py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold">
          Why You're Creatively Blocked
        </h2>

        <p className="text-neutral-300 mt-6 max-w-2xl mx-auto">
          A science-backed, culturally relevant guide for creatives who are
          tired of fighting themselves just to produce.
        </p>

        <div className="mt-10">
          <a
            href="https://www.lulu.com"
            className="bg-white text-black px-8 py-4 rounded-xl text-lg"
          >
            Buy the Book
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="work" className="py-28 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold">
          Freedom Is Built.
        </h2>

        <p className="text-neutral-400 text-lg mt-6">
          This work is not about productivity.
          It's about creative power.
        </p>

        <div className="mt-12">
          <button className="bg-white text-black px-10 py-4 rounded-xl text-lg">
            Apply for Coaching
          </button>
        </div>
      </section>

    </main>
  )
}