export const metadata = {
  title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
  description:
    "Discover fitness, wellness retreats & adventure in Cape Town. Total Blessing blends expert workouts with unforgettable guided travel experiences.",
  openGraph: {
    title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
    description:
      "Discover fitness, wellness retreats & adventure in Cape Town. Total Blessing blends expert workouts with unforgettable guided travel experiences.",
    url: "https://totalblessingfitnessandtraveltours.co.za/",
    images: [
      {
        url: "/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Total Blessing Fitness & Travel Tours",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fb]">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col justify-center py-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
              Total Blessing
            </p>
            <h1 className="mt-6 text-[12vw] leading-[0.9] font-black uppercase tracking-[-0.04em] text-[#1e2026] sm:text-[9vw] lg:text-[6vw]">
              WHERE FITNESS
              <br />
              MEETS ADVENTURE
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500">
              A sharp, editorial movement system for athletes who demand structure and style. Train with purpose, travel with soul.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/fitness"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#dc2626] px-7 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#b91c1c] hover:shadow-lg hover:shadow-red-500/25"
              >
                Book a workout
              </a>
              <a
                href="/adventures"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-7 text-sm font-bold uppercase tracking-wider text-gray-700 transition-all duration-300 hover:border-[#dc2626] hover:text-[#dc2626]"
              >
                Explore tours
              </a>
            </div>
          </div>
          <div className="relative lg:py-20">
            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <img
                src="/images/Fitness/4Fitness.jpeg"
                alt="Fit travel movement"
                className="h-[400px] w-full object-cover lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#dc2626]/20 hover:shadow-lg hover:shadow-red-500/5">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
              <svg className="h-6 w-6 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
              Fitness
            </p>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.03em] text-gray-900">
              Power Rituals
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Strength, conditioning, and precision coaching in one uncompromising format.
            </p>
          </article>
          <article className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#dc2626]/20 hover:shadow-lg hover:shadow-red-500/5">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
              <svg className="h-6 w-6 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
              Adventure
            </p>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.03em] text-gray-900">
              Raw Journeys
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Urban and wilderness explorations shaped by high-contrast style and relentless energy.
            </p>
          </article>
          <article className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#dc2626]/20 hover:shadow-lg hover:shadow-red-500/5">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
              <svg className="h-6 w-6 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
              Ritual
            </p>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.03em] text-gray-900">
              Daily Edge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Minimal distractions, maximal focus, and a lifestyle that moves as fast as you do.
            </p>
          </article>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white border-y border-gray-100">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-4">
            <a href="/fitness" className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/Fitness/2Fitness.jpeg" alt="Fitness programmes" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Fitness</p>
                <h3 className="mt-1 text-xl font-black uppercase text-white">Programs</h3>
              </div>
            </a>

            <a href="/booking" className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/Fitness/Fitness15.jpeg" alt="Booking packages" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Booking</p>
                <h3 className="mt-1 text-xl font-black uppercase text-white">Packages</h3>
              </div>
            </a>

            <a href="/adventures" className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/adventureHome.jpeg" alt="Adventures" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Adventures</p>
                <h3 className="mt-1 text-xl font-black uppercase text-white">Trips</h3>
              </div>
            </a>

            <a href="/about" className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/rem-bg/biskop_steps-removebg-preview.png" alt="About Total Blessing" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">About</p>
                <h3 className="mt-1 text-xl font-black uppercase text-white">Our Story</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
              The experience
            </p>
            <h2 className="mt-5 text-3xl md:text-5xl leading-[0.95] font-black uppercase tracking-[-0.04em] text-gray-900">
              Designed to feel like a luxury drop, not a busy flyer.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500">
              Every page is built around stark rhythm, hard edges, and a brutal sense of clarity. This is Total Blessing: training, travel, and style fused into one editorial statement.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
            <img
              src="/images/adventureHome.jpeg"
              alt="Adventure editorial photography"
              className="h-full w-full object-cover min-h-[300px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}