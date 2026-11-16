import Image from "next/image";
import Link from "next/link";
import SubHero from "@/components/sub-hero";
import { createWhatsAppLink } from "@/lib/whatsapp";

const pageUrl =
  "https://totalblessingfitnessandtraveltours.co.za/fitness/outdoor-training";
const businessId = "https://totalblessingfitnessandtraveltours.co.za/#localbusiness";
const biskopStepsId = `${pageUrl}#biskop-steps`;

export const metadata = {
  title: "Cape Town Running Classes & Biskop Steps",
  description:
    "Cape Town running classes, Biskop Steps stair training and outdoor fitness. Enquire about Atlantic Seaboard sessions and wellness retreats in South Africa.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    title: "Cape Town Running Classes & Biskop Steps Training",
    description:
      "Outdoor fitness training in Clifton, coastal running and wellness experiences with Total Blessing in Cape Town.",
    url: pageUrl,
    siteName: "Total Blessing Fitness & Travel Tours",
    images: [
      {
        url: "/images/hiking/biskop_steps.png",
        width: 1280,
        height: 1280,
        alt: "Biskop Steps stair workout in Clifton, Cape Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Town Running Classes & Biskop Steps Training",
    description:
      "Outdoor fitness training in Clifton, coastal running and wellness experiences with Total Blessing.",
    images: ["/images/hiking/biskop_steps.png"],
  },
};

const sessions = [
  {
    id: "biskop-steps",
    eyebrow: "Clifton · 301 stairs · Moderate trail",
    title: "Biskop Steps fitness workout",
    description:
      "Take your workout outdoors with stair climbs and conditioning at Biskop Steps, above Clifton’s 2nd Beach. The listed trail is 301 stairs and rated moderate.",
    image: "/images/hiking/biskop_steps.png",
    imageAlt: "Biskop Steps stairway above Clifton in Cape Town",
    message:
      "Hi Total Blessing, I'd like to enquire about Biskop Steps training in Clifton.",
  },
  {
    id: "running-classes",
    eyebrow: "Group running · Atlantic Seaboard",
    title: "Cape Town running classes",
    description:
      "Build time on your feet with group running and coastal endurance sessions. Ask about the current route, meeting point and class format before you join.",
    image: "/images/adventureHome.jpeg",
    imageAlt: "Two people walking along a coastal Cape Town road",
    message:
      "Hi Total Blessing, I'd like to enquire about Cape Town running classes and coastal routes.",
  },
  {
    id: "wellness-outdoors",
    eyebrow: "Outdoor wellness · South Africa",
    title: "Retreat-style fitness",
    description:
      "Looking for a wellness retreat in South Africa with movement and time outdoors? Enquire about retreat-style fitness experiences and the details currently available.",
    image: "/images/hiking/cape-mountain-valley.jpeg",
    imageAlt: "A mountain valley seen from a Cape trail",
    message:
      "Hi Total Blessing, I'd like to ask about outdoor fitness or wellness retreat experiences.",
  },
];

const questions = [
  {
    question: "Are the running classes suitable for beginners?",
    answer:
      "The available route, pace and group format can vary. Share your running experience and current fitness level in your enquiry so the team can help you choose an appropriate session.",
  },
  {
    question: "Where do Biskop Steps sessions meet?",
    answer:
      "Biskop Steps is above Clifton’s 2nd Beach, at 37 Victoria Road, Cape Town. Confirm the exact meeting point and current session details with the team before setting out.",
  },
  {
    question: "Where do the coastal runs take place?",
    answer:
      "Routes and meeting points are confirmed when you enquire. Ask about Clifton, Camps Bay or Sea Point, and the team can share which Atlantic Seaboard option is available.",
  },
  {
    question: "What should I bring?",
    answer:
      "Wear comfortable running or training shoes and bring water. For outdoor sessions, check the weather and ask the team if you are unsure what to bring for a particular route.",
  },
  {
    question: "What are the schedule and session prices?",
    answer:
      "This page does not show a live schedule or outdoor-session pricing. Message Total Blessing on WhatsApp to ask about current dates, group size, format and cost before booking.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ExercisePlan",
      "@id": `${pageUrl}#biskop-steps-exercise-plan`,
      name: "Biskop Steps Training Sessions",
      description:
        "Outdoor stair-climbing and fitness sessions at Biskop Steps above Clifton's 2nd Beach in Cape Town.",
      exerciseType: "Stair climbing and outdoor conditioning",
      mentions: { "@id": biskopStepsId },
      creator: { "@id": businessId },
      url: `${pageUrl}#biskop-steps`,
    },
    {
      "@type": "ExercisePlan",
      "@id": `${pageUrl}#cape-town-running-plan`,
      name: "Cape Town Group Running Classes",
      description:
        "Group running and coastal endurance training enquiries for routes around Cape Town's Atlantic Seaboard.",
      exerciseType: "Group running and outdoor endurance training",
      creator: { "@id": businessId },
      url: `${pageUrl}#running-classes`,
    },
    {
      "@type": "SportsActivityLocation",
      "@id": biskopStepsId,
      name: "Biskop Steps",
      description:
        "A 301-step stair route above Clifton's 2nd Beach, listed as moderate.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "37 Victoria Road, above Clifton 2nd Beach",
        addressLocality: "Cape Town",
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
      url: `${pageUrl}#biskop-steps`,
    },
    {
      "@type": "TouristTrip",
      "@id": `${pageUrl}#cape-town-outdoor-fitness-trip`,
      name: "Cape Town Outdoor Fitness Experiences",
      description:
        "Outdoor fitness experiences featuring Biskop Steps training and coastal running enquiries on Cape Town's Atlantic Seaboard. Dates, routes and availability are confirmed directly.",
      touristType: "Active travelers and Cape Town locals",
      provider: { "@id": businessId },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@id": biskopStepsId },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Place",
              name: "Cape Town Atlantic Seaboard coastal routes",
            },
          },
        ],
      },
      url: pageUrl,
    },
  ],
};

function SessionCard({ session }) {
  return (
    <article
      id={session.id}
      className="group scroll-mt-24 overflow-hidden rounded-3xl border border-foreground/10 bg-paper shadow-[0_16px_44px_rgba(23,32,29,0.07)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-foreground/10">
        <Image
          src={session.image}
          alt={session.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#17201d]/75 px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-lg">
          {session.eyebrow}
        </span>
      </div>
      <div className="flex h-full flex-col p-5 sm:p-6">
        <h3 className="text-xl font-black uppercase leading-tight tracking-tight md:text-2xl">
          {session.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">
          {session.description}
        </p>
        <a
          href={createWhatsAppLink(session.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-5 w-full"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function OutdoorTraining() {
  const enquiryLink = createWhatsAppLink(
    "Hi Total Blessing, I'm interested in outdoor training. Please share current running classes, Biskop Steps sessions, dates, meeting points and prices."
  );
  const safeStructuredData = JSON.stringify(structuredData).replace(
    /</g,
    "\\u003c"
  );

  return (
    <main className="mesh-light pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStructuredData }}
      />

      <SubHero
        title="Cape Town running classes & Biskop Steps training."
        subtitle="Outdoor fitness training in Clifton, coastal runs and movement-led wellness experiences on the Atlantic Seaboard."
        image="/images/hiking/biskop_steps.png"
        eyebrow="Signature outdoor sessions"
        buttonlink="#signature-sessions"
        buttonlabel="Explore sessions"
        secondarylink="#faqs"
        secondarylabel="Read FAQs"
      />

      <section
        aria-label="Outdoor training highlights"
        className="border-b border-foreground/10 bg-paper"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-foreground/10 px-5 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {[
            "Biskop Steps · Clifton",
            "Coastal running · Cape Town",
            "Enquire for current sessions",
          ].map((item) => (
            <p
              key={item}
              className="py-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-foreground/70 sm:px-4"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section
        id="signature-sessions"
        aria-labelledby="signature-sessions-title"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
              Outside is the new training floor
            </p>
            <h2
              id="signature-sessions-title"
              className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
            >
              Signature outdoor sessions.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            From a stair workout in Clifton to a coastal run, explore fitness
            tours in Cape Town and ask about wellness-retreat options in South
            Africa. Message us to confirm what is currently available.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </section>

      <section className="bg-[#17201d] px-5 py-16 text-white sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
              Atlantic Seaboard personal training
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl">
              Find a route that moves you.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Tell us which session interests you, your experience level and
              the days that work for you. We’ll confirm the meeting point,
              format, schedule and price directly—this is an enquiry, not a
              live booking calendar.
            </p>
          </div>
          <a
            href={enquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-7 text-center text-xs font-extrabold uppercase tracking-[0.1em] text-foreground transition hover:bg-white"
          >
            Ask about sessions
          </a>
        </div>
      </section>

      <section
        id="faqs"
        aria-labelledby="faq-title"
        className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
          Before you head out
        </p>
        <h2
          id="faq-title"
          className="mt-3 text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
        >
          Outdoor training FAQs.
        </h2>
        <div className="mt-8 divide-y divide-foreground/15 border-y border-foreground/15">
          {questions.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-extrabold marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary md:text-lg">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-xl text-tertiary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-3 pr-7 text-sm leading-relaxed text-foreground/65 md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 md:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl bg-sun p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground/65">
              Ready to get outside?
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase leading-tight md:text-4xl">
              Start with a simple enquiry.
            </h2>
          </div>
          <Link href="/fitness" className="btn-secondary shrink-0">
            Back to fitness
          </Link>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-foreground/10 bg-paper p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(23,32,29,0.08)] md:hidden">
        <a
          href={enquiryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full"
        >
          Enquire about outdoor sessions
        </a>
      </div>
    </main>
  );
}
