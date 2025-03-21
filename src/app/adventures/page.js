"use client";
import SubHero from "@/components/sub-hero";
import { activities, galleryImages, hiking_trails } from "@/data/pageData";
import Slider from "react-slick";

// export const metadata = {
//   title: "Cape Town Adventure Tours with Personal Guides | Explore Stellenbosch & Kirstenbosch",
//   description:
//     "Embark on an unforgettable adventure in Cape Town with expert-guided tours. From Stellenbosch wine estates to exhilarating quad biking in Kirstenbosch, experience the best of South Africa's top destinations.",
//   openGraph: {
//     title: "Cape Town Adventure Tours with Personal Guides | Explore Stellenbosch & Kirstenbosch",
//     description:
//       "Embark on an unforgettable adventure in Cape Town with expert-guided tours. From Stellenbosch wine estates to exhilarating quad biking in Kirstenbosch, experience the best of South Africa's top destinations.",
//     url: "https://totalblessingfitnessandtraveltours.co.za/adventures",
//     images: [
//       {
//         url: "/images/logo3.png",
//         width: 1200,
//         height: 630,
//         alt: "Cape Town Adventure Tours",
//       },
//     ],
//   },
// };

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute z-10 w-2 h-16 right-0 top-1/2 translate-y-1/2 cursor-pointer bg-red-700"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute z-10 w-2 h-16 top-1/2 translate-y-1/2 cursor-pointer bg-red-700"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Adventures() {
  var settings = {
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <main className="overflow-hidden">
      <SubHero
        title={"Find Your Next Adventure!"}
        subtitle={"Unforgettable Tours and Experiences Await"}
        image={"/images/hiking/Constantia_Nek_to_Kirstenbosch2.png"}
      />
      <div className="adventure-section relative py-16 w-full flex flex-col gap-8 bg-slate-50">
        <Slider {...settings} className="relative">
          {activities.map((activity, index) => (
            <a
              aria-label="booking enquiry"
              href={`https://wa.me/27787589451?text=Booking%20enquiry%20for%20${activity.title}`}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="h-auto px-6"
            >
              <div className="h-[300px] relative">
                <img
                  style={{ objectFit: " cover" }}
                  fill
                  src={activity.image}
                  alt={`activity - ${activity.title}`}
                />
              </div>
              <h3 className="text-[#df2828] text-lg my-1">{activity.title}</h3>
              <p className="text-[gray]">{activity.description}</p>
            </a>
          ))}
        </Slider>
        <span className="bg-[#df2828] px-5 py-2 mx-auto w-fit text-center text-white uppercase rounded-md text-sm">
          click on activity and Book via whatsapp
        </span>
      </div>
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
                fill
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
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
