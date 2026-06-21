export const metadata = {
  title: "Cape Town Personal Trainer | One-on-One & Group Fitness",
  description:
    "Achieve your fitness goals with expert training in Cape Town. Book solo, couple, or group sessions with a certified personal trainer today.",
  openGraph: {
    title: "Cape Town Personal Trainer | One-on-One & Group Fitness",
    description:
      "Achieve your fitness goals with expert training in Cape Town. Book solo, couple, or group sessions with a certified personal trainer today.",
    url: "https://totalblessingfitnessandtraveltours.co.za/booking",
    images: [
      {
        url: "/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Personal Fitness Trainer Booking",
      },
    ],
  },
};

const packages = [
  {
    title: "5-Session Private Package",
    description: "Five private sessions plus one month membership.",
    price: "R3,200",
  },
  {
    title: "3-Month Member Discount",
    description: "Pay upfront and claim a premium saving.",
    price: "Up to R200 off",
  },
  {
    title: "Student Advance Rate",
    description: "Save while you build strength and confidence.",
    price: "R50 off",
  },
];

const schedule = [
  { day: "MONDAY", workout: "HIIT", time: "07:30 - 08:30" },
  { day: "TUESDAY", workout: "BOXING", time: "07:30 - 08:30" },
  { day: "WEDNESDAY", workout: "FULL BODY CONDITIONING", time: "07:30 - 08:30" },
  { day: "THURSDAY", workout: "STRENGTH TRAINING", time: "07:30 - 08:30" },
  { day: "FRIDAY", workout: "BOXING", time: "07:30 - 08:30" },
  { day: "SATURDAY", workout: "LADIES ONLY BOXERCISE", time: "10:00 - 14:00" },
];

export default function Booking() {
  return (
    <main className="min-h-screen bg-[#f8f9fb]">
      <section className="mx-auto min-h-[100dvh] max-w-[1400px] px-6 md:px-10 py-12 lg:py-20 pt-28">
        <header className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
              Booking
            </p>
            <h1 className="mt-5 text-[12vw] leading-[0.9] font-black uppercase tracking-[-0.04em] text-[#1e2026] sm:text-[9vw] lg:text-[6vw]">
              RESERVE THE
              <br />
              RITUAL
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500">
              Choose the package that matches your intent and move with elite precision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/fitness"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#dc2626] px-7 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#b91c1c] hover:shadow-lg hover:shadow-red-500/25"
              >
                View training
              </a>
              <a
                href="#schedule"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-7 text-sm font-bold uppercase tracking-wider text-gray-700 transition-all duration-300 hover:border-[#dc2626] hover:text-[#dc2626]"
              >
                See the timetable
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
            <img
              src="/images/new/WhatsApp Image 2025-03-11 at 16.48.00.jpeg"
              alt="Booking session preview"
              className="h-[400px] w-full object-cover lg:h-[560px]"
            />
          </div>
        </header>

        <section className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Packages
          </h3>
          <ul className="mt-4 space-y-3">
            {packages.map((item) => (
              <li key={item.title} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#dc2626]/20 hover:shadow-md">
                <div className="min-w-0">
                  <p className="text-sm font-black uppercase text-gray-900 truncate">{item.title}</p>
                  <p className="text-sm text-gray-500 mt-1 truncate">{item.description}</p>
                </div>
                <p className="ml-4 text-sm font-black uppercase text-[#dc2626] whitespace-nowrap">{item.price}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#dc2626]/20 hover:shadow-lg">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                <svg className="h-5 w-5 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Package
              </p>
              <h2 className="mt-3 text-xl font-black uppercase tracking-[-0.03em] text-gray-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.15em] text-[#dc2626]">
                {item.price}
              </p>
            </article>
          ))}
        </section>

        <section id="schedule" className="mt-16 grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
              Timetable
            </p>
            <h2 className="mt-5 text-3xl md:text-5xl leading-[0.95] font-black uppercase tracking-[-0.04em] text-gray-900">
              Train with structure, not chaos.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500">
              Our schedule is designed for impact: consistent, sharp sessions that build momentum every week.
            </p>
          </div>
          <div className="grid gap-3">
            {schedule.map((item) => (
              <article key={item.day} className="rounded-xl border-l-4 border-[#dc2626] bg-white border border-gray-200 p-5 transition-all duration-200 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {item.day}
                </p>
                <h3 className="mt-2 text-lg font-black uppercase tracking-[-0.02em] text-gray-900">
                  {item.workout}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.time}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}