/* eslint-disable @next/next/no-img-element */
import AdventureSlider from "@/components/adventure-slider";
import SubHero from "@/components/sub-hero";
import { activities, galleryImages, hiking_trails } from "@/data/pageData";

export const metadata = {
  title:
    "Guided Cape Town Tours: Stellenbosch, Cape Town National Park & Kirstenbosch Adventures",
  description:
    "Discover Cape Town with personal guides. Wine taste in Stellenbosch, ride quads in Kirstenbosch & explore SA's scenic gems on epic day tours.",
  openGraph: {
    title:
      "Guided Cape Town Tours: Stellenbosch, Cape Town National Park & Kirstenbosch Adventures",
    description:
      "Discover Cape Town with personal guides. Wine taste in Stellenbosch, ride quads in Kirstenbosch & explore SA's scenic gems on epic day tours.",
    url: "https://totalblessingfitnessandtraveltours.co.za/adventures",
    images: [
      {
        url: "/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Cape Town Adventure Tours",
      },
    ],
  },
};

export default function Adventures() {
  return (
    <main className="mesh-light overflow-hidden">
      <SubHero
        title={"Find Your Next Adventure!"}
        subtitle={"Unforgettable Tours and Experiences Await"}
        image={"/images/hiking/Constantia_Nek_to_Kirstenbosch2.png"}
      />
      <AdventureSlider list={activities} />

      <div className="py-16 flex flex-col items-center">
        <div
          data-aos="fade-up"
          className="adventure-section relative py-2 w-full"
        >
          <div className="item cta-label flex flex-col items-center justify-center gap-4 w-full">
            <h2 className="max-[1024px]:text-2xl text-4xl font-bold text-center uppercase">
              Adventurer’s Quest: Trails that Tell a Story
            </h2>
            <p className="text-xl text-pretty text-[grey] text-center w-[60%]">
              Reach New Heights with Our Ultimate Hiking Guide
            </p>
          </div>
        </div>

        {hiking_trails.map((trail, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`py-5 h-auto px-6 lg:px-16 w-full flex flex-col gap-10 items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bento-shadow lg:w-[40.625rem]">
              <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105"
                loading="lazy"
                fill="true"
                src={trail.image}
                alt={`${trail.title}-imagery`}
              />
            </div>
            <div className="rounded-2xl bg-white/80 p-6 backdrop-blur-md">
              <p className={`hiking-card-level ${trail.level.toLowerCase()}`}>
                {trail.level}
              </p>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight leading-[0.95] whitespace-pre-line font-bold">
                {trail.title}
              </h3>
              <p className="flex items-center gap-2 text-sm text-foreground/60">
                <span>
                  <i
                    className="fa fa-map-marker text-base "
                    aria-hidden="true"
                  />
                </span>
                {"  "}
                {trail.location}
              </p>
              <div className="flex flex-col gap-2 text-sm text-foreground/60">
                {trail.distance && (
                  <p className="hiking-card-distance">
                    <span>
                      <i className="fa fa-tree" aria-hidden="true" />
                    </span>
                    {"  "}
                    {trail.distance}
                  </p>
                )}
                {trail.time && (
                  <p className="hiking-card-time flex gap-2 items-center">
                    <span>
                      <i
                        className="fa-solid fa-clock text-base"
                        aria-hidden="true"
                      />
                    </span>
                    {trail.time}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mesh-dark-section relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center gap-6 pb-10 text-center"
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-[0.95] text-foreground md:text-5xl">
            Past Adventures
          </h2>
          <p className="text-xl text-pretty text-[grey] text-center w-[60%]">
            Our Hiking Trail Tales Through the Years
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`aspect-square overflow-hidden rounded-2xl bento-shadow ${index===0?'col-span-2 row-span-2':''}`}
            >
              <img
                className="object-cover w-[inherit] h-[inherit] absolute"
                src={item.image}
                alt={`Masonry image ${index + 1}`}
                fill="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}
