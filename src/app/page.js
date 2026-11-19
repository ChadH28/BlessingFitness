import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";

export const metadata = {
  title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
  description:
    "Discover fitness, wellness and guided adventure in Cape Town. Train with Total Blessing and explore the Cape with a local team.",
  openGraph: {
    title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
    description:
      "Discover fitness, wellness and guided adventure in Cape Town. Train with Total Blessing and explore the Cape with a local team.",
    url: "https://totalblessingfitnessandtraveltours.co.za/",
    images: [
      {
        url: "/images/hiking/Helderberg_Farm1.png",
        width: 1200,
        height: 630,
        alt: "A hiker exploring the Cape mountain landscape",
      },
    ],
  },
};

const pathways = [
  {
    eyebrow: "Move with purpose",
    title: "Train",
    description:
      "Boxing, group classes and personal training shaped around your goals.",
    image: "/images/Fitness/Fitness05.jpeg",
    href: "/fitness",
    action: "Explore fitness",
    imagePosition: "center",
  },
  {
    eyebrow: "See the Cape",
    title: "Explore",
    description:
      "Discover local trails, outdoor experiences and Cape Town highlights.",
    image: "/images/new/explore.jpeg",
    href: "/adventures",
    action: "Explore adventures",
    imagePosition: "center",
  },
];

const moments = [
  {
    image: "/images/hiking/Helderberg_Farm1.png",
    alt: "A hiker standing on a rocky Cape mountain trail",
    label: "Outdoor exploration",
  },
  {
    image: "/images/Fitness/personal-training.jpeg",
    alt: "A client practicing strength training in the gym",
    label: "Strength in motion",
  },
  {
    image: "/images/adventureHome.jpeg",
    alt: "A coastal walk overlooking the Cape shoreline",
    label: "Cape Town, on foot",
  },
];

export default function Home() {
  return (
    <main className="mesh-light">
      <Hero
        title="Move with purpose. Explore further."
        subtitle="Train with a local coach, then discover more of the Cape through fitness, guided adventures and time outdoors."
      />

      <section
        aria-label="What Total Blessing offers"
        className="border-b border-foreground/10 bg-paper"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-foreground/10 px-5 py-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 md:py-7">
          {[
            "Cape Town based",
            "Fitness coaching",
            "Guided local adventures",
          ].map((item) => (
            <p
              key={item}
              className="py-3 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-foreground/75 sm:px-4 sm:py-2"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="pathways-title"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
              Two ways to begin
            </p>
            <h2
              id="pathways-title"
              className="mt-3 max-w-2xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
            >
              Find your kind of{" "}
              <span className="text-ocean">adventure.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            Build strength in the studio or take your energy out into the
            landscapes around Cape Town.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pathways.map((pathway) => (
            <Link
              key={pathway.title}
              href={pathway.href}
              className="group relative isolate flex min-h-[26rem] items-end overflow-hidden rounded-3xl bg-[#17201d] text-white shadow-xl sm:min-h-[32rem]"
            >
              <Image
                src={pathway.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`-z-10 object-cover transition-transform duration-700 group-hover:scale-105 ${pathway.imagePosition === "center" ? "object-center" : ""}`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101916]/90 via-[#101916]/15 to-transparent"
              />
              <div className="w-full p-6 sm:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
                  {pathway.eyebrow}
                </p>
                <h3 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                  {pathway.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                  {pathway.description}
                </p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em]">
                  {pathway.action}
                  <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mesh-dark-section px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
                A local point of view
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl">
                Real training.{" "}
                <span className="text-gradient">Real Cape Town.</span>
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex min-h-11 w-fit items-center text-xs font-extrabold uppercase tracking-[0.12em] text-white/80 transition hover:text-sun"
            >
              Meet the team <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moments.map((moment, index) => (
              <figure
                key={moment.image}
                className={`group relative overflow-hidden rounded-2xl bg-white/10 ${
                  index === 0 ? "aspect-[4/5]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-16 text-sm font-bold text-white">
                  {moment.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/55">
            A glimpse of the training and Cape experiences we share. Follow
            along on{" "}
            <a
              href="https://www.instagram.com/total.blessing/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:text-sun"
            >
              Instagram
            </a>{" "}
            for more moments from the community.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl bg-sun p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:p-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground/65">
              Start with a conversation
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl">
              Ready to make a move?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75 md:text-base">
              Tell us what you’re interested in and we’ll help you choose the
              right next step.
            </p>
          </div>
          <Link
            href="/booking"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-foreground px-7 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-tertiary"
          >
            View booking options
          </Link>
        </div>
      </section>
    </main>
  );
}
