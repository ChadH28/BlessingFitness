import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Story | Total Blessing Fitness & Travel Tours",
  description:
    "Meet Blessing Mutero and learn how Total Blessing brings fitness, community and Cape Town exploration together.",
  openGraph: {
    title: "Our Story | Total Blessing Fitness & Travel Tours",
    description:
      "Meet Blessing Mutero and learn how Total Blessing brings fitness, community and Cape Town exploration together.",
    url: "https://totalblessingfitnessandtraveltours.co.za/about",
    images: [
      {
        url: "/images/about.jpeg",
        width: 1200,
        height: 630,
        alt: "Two boxing partners sharing a moment after training",
      },
    ],
  },
};

const principles = [
  {
    number: "01",
    title: "Start where you are",
    description:
      "From group classes to personal coaching, find a way to move that supports your goals.",
  },
  {
    number: "02",
    title: "Find your people",
    description:
      "Training is easier to return to when it is shared with a welcoming community.",
  },
  {
    number: "03",
    title: "Take it outside",
    description:
      "Cape Town is part of the experience—from its mountain trails to its coastline.",
  },
];

const moments = [
  {
    image: "/images/Home-image.jpeg",
    alt: "Boxers training together in the ring",
    className: "aspect-[4/5]",
  },
  {
    image: "/images/workout-home.jpeg",
    alt: "A Total Blessing workout in the gym",
    className: "aspect-[4/5] md:mt-12",
  },
  {
    image: "/images/adventureHome.jpeg",
    alt: "Walkers exploring the Cape Town coastline",
    className: "aspect-[4/5]",
  },
];

export default function About() {
  return (
    <main className="mesh-light">
      <header className="relative overflow-hidden bg-[#17201d] text-white">
        <div className="mx-auto grid min-h-[72svh] max-w-7xl grid-cols-1 items-stretch md:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10 flex flex-col items-start justify-center px-5 pb-10 pt-32 sm:px-8 md:py-24 md:pl-10 md:pr-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sun">
              Our story · Cape Town
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-black uppercase leading-[0.94] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Made for movement.
              <span className="mt-1 block text-gradient">Rooted in the Cape.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Total Blessing brings fitness and Cape Town exploration together
              through boxing, personal training, local hikes and guided
              experiences.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/fitness" className="btn-primary">
                Find your training
              </Link>
              <Link
                href="/adventures"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
              >
                Explore the Cape
              </Link>
            </div>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden md:my-8 md:mr-5 md:rounded-[2rem]">
            <Image
              src="/images/about.jpeg"
              alt="Two boxing partners sharing a moment after training"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#101916]/50 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[#17201d]/20"
            />
            <p className="absolute bottom-5 left-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/85 md:bottom-7 md:left-7">
              Stronger together
            </p>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="founder-title"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16 md:py-28"
      >
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2rem] border-l-2 border-t-2 border-tertiary sm:-left-5 sm:-top-5" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#17201d]">
            <Image
              src="/images/BLACKANDWHITE.jpeg"
              alt="A boxing coach guiding an athlete during training"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-4 right-4 rounded-full bg-sun px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-foreground shadow-lg sm:right-8">
            The person behind the purpose
          </p>
        </div>

        <div className="pt-4 md:pt-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
            Meet the founder
          </p>
          <h2
            id="founder-title"
            className="mt-4 text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
          >
            Blessing Mutero
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/75 md:text-lg">
            A passionate boxer, fitness trainer and wellness coach, Blessing
            built Total Blessing around the things that move him: helping
            people grow stronger, bringing people together and exploring the
            places he calls home.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/65 md:text-base">
            That spirit shapes every part of the experience—whether you are
            stepping into a boxing class, working toward a personal fitness
            goal or discovering a new trail around Cape Town.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/booking" className="btn-primary">
              Start a conversation
            </Link>
            <a
              href="https://www.youtube.com/@total.blessing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Watch our videos
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#17201d] px-5 py-20 text-white sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
              What guides us
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl">
              Good energy goes further.
            </h2>
          </div>

          <div className="grid gap-0 border-t border-white/15 md:grid-cols-3 md:divide-x md:divide-white/15">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-b border-white/15 py-6 md:border-b-0 md:px-7 md:py-8 first:md:pl-0 last:md:pr-0"
              >
                <p className="text-xs font-extrabold tracking-[0.16em] text-sun">
                  {principle.number}
                </p>
                <h3 className="mt-5 text-xl font-black uppercase tracking-tight md:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="choose-path-title"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
              Two ways to experience Total Blessing
            </p>
            <h2
              id="choose-path-title"
              className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
            >
              Choose your next move.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            Find the right starting point, then get in touch to talk through the
            details.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/fitness"
            className="group relative isolate flex min-h-[24rem] items-end overflow-hidden rounded-[2rem] bg-[#17201d] text-white sm:min-h-[30rem]"
          >
            <Image
              src="/images/Fitness/4Fitness.jpeg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101916]/90 via-[#101916]/20 to-transparent"
            />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sun">
                Build strength
              </p>
              <h3 className="mt-2 text-3xl font-black uppercase md:text-4xl">
                Fitness
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                Explore boxing, group classes and personal training.
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em]">
                See training options <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>

          <Link
            href="/adventures"
            className="group relative isolate flex min-h-[24rem] items-end overflow-hidden rounded-[2rem] bg-[#17201d] text-white sm:min-h-[30rem]"
          >
            <Image
              src="/images/hiking/Helderberg_Farm1.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101916]/90 via-[#101916]/20 to-transparent"
            />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sun">
                Find a new view
              </p>
              <h3 className="mt-2 text-3xl font-black uppercase md:text-4xl">
                Adventures
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                Discover Cape Town’s trails, coast and outdoor experiences.
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em]">
                Explore the Cape <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="moments-title"
        className="bg-paper px-5 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between gap-5 md:mb-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
                From the gym to the trail
              </p>
              <h2
                id="moments-title"
                className="mt-3 text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
              >
                A few moments along the way.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {moments.map((moment) => (
              <figure
                key={moment.image}
                className={`relative overflow-hidden rounded-2xl bg-foreground/10 ${moment.className}`}
              >
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-sun p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground/65">
              Your story can start here
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl">
              Come move with us.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75 md:text-base">
              Tell us what you’re looking for and we’ll help you find the right
              next step.
            </p>
          </div>
          <Link href="/booking" className="btn-secondary shrink-0">
            Explore booking options
          </Link>
        </div>
      </section>
    </main>
  );
}
