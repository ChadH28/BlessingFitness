import AdventureSlider from "@/components/adventure-slider";
import SubHero from "@/components/sub-hero";
import { activities, galleryImages, hiking_trails } from "@/data/pageData";

export const metadata = {
  title:
    "Cape Town Adventure Tours with Personal Guides | Explore Stellenbosch & Kirstenbosch",
  description:
    "Embark on an unforgettable adventure in Cape Town with expert-guided tours. From Stellenbosch wine estates to exhilarating quad biking in Kirstenbosch, experience the best of South Africa's top destinations.",
  openGraph: {
    title:
      "Cape Town Adventure Tours with Personal Guides | Explore Stellenbosch & Kirstenbosch",
    description:
      "Embark on an unforgettable adventure in Cape Town with expert-guided tours. From Stellenbosch wine estates to exhilarating quad biking in Kirstenbosch, experience the best of South Africa's top destinations.",
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
            className={`py-5 h-auto px-6 lg:px-16 w-full flex flex-col gap-10 items-center ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="h-[21.875rem] relative w-full lg:w-[40.625rem]">
              <img
                className="rounded-3xl w-[inherit] h-[inherit] absolute"
                style={{ objectFit: "cover" }}
                fill='true'
                src={trail.image}
                alt={`${trail.title}-imagery`}
              />
            </div>
            <div className="hiking-card-content w-[250px] text-[gray] font-light">
              <p className={`hiking-card-level ${trail.level.toLowerCase()}`}>
                {trail.level}
              </p>
              <h3 className="hiking-card-title whitespace-pre-line font-bold">
                {trail.title}
              </h3>
              <p className="hiking-card-location">
                <span>
                  <i
                    className="fa fa-map-marker text-base "
                    aria-hidden="true"
                  />
                </span>
                {"  "}
                {trail.location}
              </p>
              <div className="hiking-card-info">
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

      <div className="adventure-section relative py-12 w-full bg-slate-50">
        <div
          data-aos="fade-up"
          className="item cta-label flex flex-col items-center justify-center gap-3 pb-10 w-full"
        >
          <h2 className="max-[1024px]:text-2xl text-4xl font-bold text-center uppercase">
            Past Adventures
          </h2>
          <p className="text-xl text-pretty text-[grey] text-center w-[60%]">
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
                fill='true'
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
