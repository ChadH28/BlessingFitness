import Link from "next/link";
import PriceCard from "@/components/price-card";
import SubHero from "@/components/sub-hero";
import TableCard from "@/components/timetable-card";
import { pricelist } from "@/data/pageData";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Cape Town Personal Training & Class Booking | Total Blessing",
  description:
    "Explore personal training, group fitness and weekly class options in Cape Town. Enquire directly with Total Blessing on WhatsApp.",
  openGraph: {
    title: "Cape Town Personal Training & Class Booking | Total Blessing",
    description:
      "Explore personal training, group fitness and weekly class options in Cape Town. Enquire directly with Total Blessing on WhatsApp.",
    url: "https://totalblessingfitnessandtraveltours.co.za/booking",
    images: [
      {
        url: "/images/Fitness/Fitness15.jpeg",
        width: 1200,
        height: 630,
        alt: "Total Blessing fitness training",
      },
    ],
  },
};

const packages = [
  {
    title: "Ladies-only Saturday",
    image: "/images/Fitness/Fitness15.jpeg",
    imageAlt: "Ladies fitness session",
    description: "Saturday group training options.",
    pricinglist: pricelist.ladies_only,
  },
  {
    title: "Group sessions",
    image: "/images/Fitness/03Fitness.jpeg",
    imageAlt: "Group fitness training",
    description: "Group membership and drop-in options.",
    pricinglist: pricelist.group,
  },
  {
    title: "Private sessions",
    image: "/images/Fitness/Fitness03.jpeg",
    imageAlt: "Personal training session",
    description: "Private training packages and assessment.",
    pricinglist: pricelist.sessions,
  },
  {
    title: "One-on-one",
    image: "/images/Fitness/Fitness08.jpeg",
    imageAlt: "One-on-one fitness coaching",
    description: "Individual sessions and multi-session options.",
    pricinglist: pricelist.one_on,
  },
  {
    title: "Two-on-one",
    image: "/images/Fitness/2Fitness.jpeg",
    imageAlt: "Two-person fitness coaching",
    description: "Train with a partner.",
    pricinglist: pricelist.two_on,
  },
  {
    title: "Three-on-one",
    image: "/images/Fitness/Fitness03.jpeg",
    imageAlt: "Small-group personal training",
    description: "A small-group private session.",
    pricinglist: pricelist.three_on,
  },
];

const offersLink = createWhatsAppLink(
  "Hi Total Blessing, could you please share the current prepaid package offers and terms?"
);

export default function Booking() {
  return (
    <main className="mesh-light">
      <SubHero
        title="Make your next move."
        subtitle="Choose a training option or class, then message us with your preferred day and any questions."
        image="/images/Fitness/Fitness04.jpeg"
        eyebrow="Training in Cape Town"
        buttonlink="#packages"
        buttonlabel="View options"
        secondarylink="#schedule"
        secondarylabel="See class times"
      />

      <section
        aria-labelledby="how-to-book"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-4 rounded-3xl border border-foreground/10 bg-paper p-6 sm:grid-cols-3 sm:p-8">
          {[
            ["01", "Choose", "Pick a session or class that suits you."],
            ["02", "Enquire", "Send your preferred day and group size on WhatsApp."],
            ["03", "Coordinate", "We’ll follow up to discuss the details."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex gap-4">
              <span className="text-sm font-black text-tertiary">{number}</span>
              <div>
                <h2
                  id={number === "01" ? "how-to-book" : undefined}
                  className="font-black uppercase tracking-wide"
                >
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="packages"
        aria-labelledby="packages-title"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 sm:px-8 md:pb-28"
      >
        <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
              Fitness options
            </p>
            <h2
              id="packages-title"
              className="mt-3 text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
            >
              Choose how you train.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            Prices are shown as listed. Ask us about the option, session format
            or details that fit your needs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <PriceCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[#17201d] px-5 py-12 text-white sm:px-8 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
              Prepaid packages
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase leading-tight md:text-3xl">
              Ask about the current package offers.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
              The listed offers include five private sessions with a one-month
              group membership for R3,200. The page also lists discounts for
              members and students paying three months upfront. Message us to
              confirm the terms that apply to you.
            </p>
          </div>
          <a
            href={offersLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Ask about offers
          </a>
        </div>
      </section>

      <section
        id="schedule"
        aria-labelledby="schedule-title"
        className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
                Weekly timetable
              </p>
              <h2
                id="schedule-title"
                className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
              >
                Find a class that fits.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
              Class times are listed below. Enquire on WhatsApp to discuss a
              session before you visit.
            </p>
          </div>

          <div className="timetable-container">
            <TableCard
              day="Monday"
              workout="HIIT"
              workout_desc="High-Intensity Interval Training"
              time_am="07:30 - 08:30am"
              image="/images/Fitness/03Fitness.jpeg"
            />
            <TableCard
              day="Tuesday"
              workout="Boxing"
              time_am="07:30 - 08:30am"
              image="/images/Fitness/RESIZED/01Fitness.jpg"
            />
            <TableCard
              day="Wednesday"
              workout="Full body conditioning"
              time_am="07:30 - 08:30am"
              time_pm="18:30 - 19:30pm"
              image="/images/Fitness/2Fitness.jpeg"
            />
            <TableCard
              day="Thursday"
              workout="Strength training"
              time_am="07:30 - 08:30am"
              image="/images/Fitness/Fitness03.jpeg"
            />
            <TableCard
              day="Friday"
              workout="Boxing"
              time_am="07:30 - 08:30am"
              time_pm="18:30 - 19:30pm"
              image="/images/Fitness/02Fitness.jpeg"
            />
            <TableCard
              day="Saturday"
              workout="Ladies-only Boxercise & resistance training"
              time_am="10:00 - 11:00am"
              time_pm="13:00 - 14:00pm"
              image="/images/Fitness/Fitness16.jpeg"
            />
          </div>

          <p className="mt-5 text-xs leading-relaxed text-foreground/55">
            Times and availability are confirmed directly with the team; this
            timetable is not a live booking calendar.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-sun p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="text-2xl font-black uppercase leading-tight md:text-4xl">
              Not sure which option fits?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/70">
              Tell us your goals and preferred schedule. We’ll help you explore
              the available training options.
            </p>
          </div>
          <Link href="/fitness" className="btn-secondary shrink-0">
            Explore fitness
          </Link>
        </div>
      </section>
    </main>
  );
}
