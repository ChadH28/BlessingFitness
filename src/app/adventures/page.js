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
    <main className="overflow-hidden">
      <SubHero
        title={"Find Your Next Adventure!"}
        subtitle={"Unforgettable Tours and Experiences Await"}
        image={"/images/hiking/Constantia_Nek_to_Kirstenbosch2.png"}
      />
      <AdventureSlider list={activities} />

      <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center justify-center gap-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-900">
            {`Adventurer's Quest:`} Trails that Tell a Story
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            Reach New Heights with Our Ultimate Hiking Guide
          </p>
        </div>

        <div className="space-y-16">
          {hiking_trails.map((trail, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg aspect-[4/3]">
                  <img
                    className="w-full h-full object-cover absolute inset-0"
                    src={trail.image}
                    alt={`${trail.title}-imagery`}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <p className={`text-sm font-bold uppercase tracking-wider ${
                  trail.level.toLowerCase() === "easy" ? "text-green-600" :
                  trail.level.toLowerCase() === "moderate" ? "text-orange-600" :
                  "text-red-600"
                }`}>
                  {trail.level}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-pre-line">
                  {trail.title}
                </h3>
                <p className="flex items-center gap-2 text-gray-500">
                  <i className="fa fa-map-marker text-base" aria-hidden="true" />
                  {trail.location}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  {trail.distance && (
                    <p className="flex items-center gap-2">
                      <i className="fa fa-tree" aria-hidden="true" />
                      {trail.distance}
                    </p>
                  )}
                  {trail.time && (
                    <p className="flex items-center gap-2">
                      <i className="fa-solid fa-clock" aria-hidden="true" />
                      {trail.time}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 w-full bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center justify-center gap-3 pb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-900">
              Past Adventures
            </h2>
            <p className="text-lg text-gray-500 max-w-xl">
              Our Hiking Trail Tales Through the Years
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="w-80 h-80 overflow-hidden relative zoomImg"
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