import Image from "next/image";
import Link from "next/link";
import SubHero from "@/components/sub-hero";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { activities, galleryImages, hiking_trails } from "@/data/pageData";

export const metadata = {
  title:
    "Guided Cape Town Tours: Stellenbosch, Cape Point & Kirstenbosch Adventures",
  description:
    "Explore Cape Town through local outdoor, cultural and nature experiences with Total Blessing Fitness and Travel Tours.",
  openGraph: {
    title:
      "Guided Cape Town Tours: Stellenbosch, Cape Point & Kirstenbosch Adventures",
    description:
      "Explore Cape Town through local outdoor, cultural and nature experiences with Total Blessing Fitness and Travel Tours.",
    url: "https://totalblessingfitnessandtraveltours.co.za/adventures",
    images: [
      {
        url: "/images/hiking/Constantia_Nek_to_Kirstenbosch2.png",
        width: 1200,
        height: 630,
        alt: "A hiking trail in the Cape landscape",
      },
    ],
  },
};

export default function Adventures() {
  return (
    <main className="mesh-light">
      <SubHero
        title="Find your next adventure."
        subtitle="Discover Cape Town’s trails, coast, culture and outdoor experiences with a local team."
        image="/images/hiking/Constantia_Nek_to_Kirstenbosch2.png"
        eyebrow="Explore the Cape"
        buttonlink="#experiences"
        buttonlabel="Explore experiences"
        secondarylink="#hiking"
        secondarylabel="Browse hiking trails"
      />

      <section
        id="experiences"
        aria-labelledby="experiences-title"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
              Outside starts here
            </p>
            <h2
              id="experiences-title"
              className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
            >
              Make room for a new view.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            Choose an experience to ask about details, dates and arrangements
            directly with the team.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-paper shadow-[0_16px_44px_rgba(23,32,29,0.07)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/10">
                <Image
                  src={activity.image}
                  alt={`${activity.title} experience`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-black uppercase leading-tight tracking-tight md:text-2xl">
                  {activity.title}
                </h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-foreground/65">
                  {activity.description}
                </p>
                <a
                  href={createWhatsAppLink(
                    `Hi Total Blessing, I'm interested in the ${activity.title} experience. Could you please share more details?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-5 w-full"
                >
                  Ask about this experience
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="hiking"
        aria-labelledby="hiking-title"
        className="bg-[#17201d] px-5 py-20 text-white sm:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
                Trail notes
              </p>
              <h2
                id="hiking-title"
                className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
              >
                Find your trail.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/65 md:text-base">
              Compare the listed locations, distances and difficulty levels.
              Trail conditions can change, so enquire before planning your
              outing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hiking_trails.map((trail, index) => (
              <article
                key={`${trail.title}-${trail.location}-${index}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white/10">
                  <Image
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src={trail.image}
                    alt={`${trail.title.replace(/\n/g, " ")} trail`}
                  />
                </div>
                <div className="p-5">
                  <p
                    className={`text-xs font-extrabold uppercase tracking-[0.14em] ${trail.level.toLowerCase() === "easy" ? "text-emerald-300" : trail.level.toLowerCase() === "moderate" ? "text-sun" : "text-rose-300"}`}
                  >
                    {trail.level} trail
                  </p>
                  <h3 className="mt-2 whitespace-pre-line text-lg font-black uppercase leading-tight">
                    {trail.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {trail.location}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-white/80">
                    {trail.distance && <span>{trail.distance}</span>}
                    {trail.time && <span>{trail.time}</span>}
                  </div>
                  <a
                    href={createWhatsAppLink(
                      `Hi Total Blessing, I'm interested in hiking ${trail.title.replace(/\n/g, " ")}. Could you please share more details?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-sun hover:text-white"
                  >
                    Enquire about this trail{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="gallery-title"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tertiary">
              Out there together
            </p>
            <h2
              id="gallery-title"
              className="mt-3 text-3xl font-black uppercase leading-[0.98] tracking-tight md:text-5xl"
            >
              Past adventures.
            </h2>
          </div>
          <Link href="/booking" className="btn-primary w-fit">
            Plan your next move
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <figure
              key={`${item.image}-${index}`}
              className={`relative aspect-square overflow-hidden rounded-2xl bg-foreground/10 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                src={item.image}
                alt="Cape Town outdoor experience with Total Blessing"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
