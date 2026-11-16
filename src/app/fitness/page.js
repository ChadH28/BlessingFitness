import Image from "next/image";
import Link from "next/link";
import SubHero from "@/components/sub-hero";
import VideoPlayer from "@/components/video-player";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Boxing & Fitness Classes in Cape Town | Total Blessing",
  description:
    "Explore boxing, strength training, group classes and personal training with Total Blessing in Cape Town.",
  openGraph: {
    title: "Boxing & Fitness Classes in Cape Town | Total Blessing",
    description:
      "Explore boxing, strength training, group classes and personal training with Total Blessing in Cape Town.",
    url: "https://totalblessingfitnessandtraveltours.co.za/fitness",
    images: [
      {
        url: "/images/Fitness/4Fitness.jpeg",
        width: 1200,
        height: 630,
        alt: "Total Blessing fitness training in Cape Town",
      },
    ],
  },
};

const programs = [
  {
    title: "Boxfit group classes",
    description:
      "Build fitness through boxing drills, cardio and strength work in an energetic group environment.",
    image: "/images/Fitness/boxfit-coaching.jpeg",
    alt: "A coach holding pads for a client during boxing training",
    href: "/booking#schedule",
    action: "View class times",
  },
  {
    title: "Personal training",
    description:
      "Work toward your fitness goals with one-on-one or small-group coaching.",
    image: "/images/Fitness/personal-training.jpeg",
    alt: "A woman performing a strength exercise in the gym",
    href: "/booking#packages",
    action: "Explore session options",
  },
  {
    title: "Junior boxing",
    description:
      "Boxing and cardio classes for children aged 4–15, with sessions arranged by age group.",
    image: "/images/new/WhatsApp Image 2025-03-11 at 16.43.36.jpeg",
    alt: "Junior boxing training",
    href: createWhatsAppLink(
      "Hi Total Blessing, I'd like to enquire about Junior Boxing for my child."
    ),
    action: "Ask about junior boxing",
    external: true,
  },
];

export default function Fitness() {
  return (
    <main className="mesh-light">
      <SubHero
        title="Find your strength."
        subtitle="Boxing, group fitness and personal training to help you move with confidence."
        image="/images/Fitness/4Fitness.jpeg"
        eyebrow="Train with Total Blessing"
        buttonlink="/booking#schedule"
        buttonlabel="View class times"
        secondarylink="/booking#packages"
        secondarylabel="Explore packages"
      />

      <section className="relative z-10 mx-auto -mt-5 max-w-7xl px-5 sm:px-8 md:-mt-8">
        <Link
          href="/fitness/outdoor-training"
          className="group grid overflow-hidden rounded-3xl bg-[#17201d] text-white shadow-xl md:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[19rem]">
            <Image
              src="/images/hiking/biskop_steps.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sun">
              New · Signature outdoor sessions
            </p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-tight md:text-4xl">
              Running classes & Biskop Steps training
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
              Take your workout to the Atlantic Seaboard with coastal runs and
              stair training in Clifton.
            </p>
            <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em]">
              Explore outdoor training <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </section>

      <section
        aria-labelledby="programs-title"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
              Training for every stage
            </p>
            <h2
              id="programs-title"
              className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
            >
              Choose your way to train.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            Explore the options, then message us with your goals and preferred
            schedule.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => {
            const Action = program.external ? "a" : Link;
            const linkProps = program.external
              ? { href: program.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: program.href };

            return (
              <article
                key={program.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-paper shadow-[0_16px_44px_rgba(23,32,29,0.07)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-foreground/10">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src={program.image}
                    alt={program.alt}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-black uppercase leading-tight md:text-2xl">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">
                    {program.description}
                  </p>
                  <Action
                    {...linkProps}
                    className="btn-primary mt-5 w-full"
                  >
                    {program.action}
                  </Action>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#17201d] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
              Group energy
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl">
              Step into Boxfit.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Join boxing drills, bodyweight exercises and conditioning in a
              supportive, high-energy class. Enquire about the weekly
              timetable and the option that fits your experience.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/booking#schedule" className="btn-primary">
                See the timetable
              </Link>
              <Link
                href="/booking#packages"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
              >
                View prices
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-white/5">
            <VideoPlayer
              video="/video/WhatsApp Video 2025-03-12 at 14.16.57.mp4"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-sun p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground/65">
              Your next step
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase leading-tight md:text-4xl">
              Find a session that works for you.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/70">
              Browse the training options and send an enquiry directly to the
              team.
            </p>
          </div>
          <Link href="/booking" className="btn-secondary shrink-0">
            Booking options
          </Link>
        </div>
      </section>
    </main>
  );
}
