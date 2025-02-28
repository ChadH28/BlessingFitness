"use client";
import SubHero from "@/components/sub-hero";
import Image from "next/image";
import Slider from "react-slick";

const activities = [
  {
    title: "Hout Bay",
    description:
      "This harbour-front emporium offers Hout Bay visitors lovely ocean views, great restaurants and takeaway spots, markets and shops.",
    image: "/images/seal.jpg",
  },
  {
    title: "Atlantis Sandboarding",
    description:
      "Escape to the thrill of Atlantis, Just a 30-minute drive from Cape Town,dive into adventure with sandboarding on colossal dunes reaching up to 35m (114ft). Experience the exciting rush, breath taking views, and the exhilaration of one of the world's premier sandboarding destinations in Cape Town, Atlantis.",
    image: "/images/sandboarding.jpg",
  },
  {
    title: "Shark Cage Diving",
    description:
      "Shark cage diving in Cape Town is an exciting and unique activity that allows you to get close to some of the ocean's most incredible creatures. Located off the coast of Gansbaai, one of the world's great white shark hotspots, you can jump into a steel cage that floats just beneath the waves where you can observe these majestic predators up close.",
    image: "/images/shark.png",
  },
  {
    title: "Quad Biking",
    description:
      "Quad biking in Cape Town is an exhilarating way to explore the natural beauty of this stunning and iconic city. You can traverse through rugged terrains, enjoying breathtaking views of Table Mountain and the Winelands.",
    image: "/images/quats.png",
  },
  {
    title: "Kirstenbosch Gardens",
    description:
      "Kirstenbosch Botanical Garden in Cape Town is an enchanting experience for all travelers. A stunning landscape of 528 hectares of indigenous forests, gardens, and wetlands make this a must-see destination.",
    image: "/images/protea.png",
  },
  {
    title: "Township Tours",
    description:
      "A Township Tour in Cape Town is a must-see experience. You will get to visit vibrant and colorful neighborhoods and see the unique culture of these communities. With such a variety of destinations and experiences, this Township Tour of Cape Town is definitely one you won’t want to miss!",
    image: "/images/township.png",
  },
  {
    title: "Bungee Jumping",
    description:
      "Get an adrenaline rush from the Africa's Highest Bungee jump. Enjoy spectacular views from Bloukrans Bridge, which connects some of South Africa’s most beautiful national parks.",
    image: "/images/Bungee Jumping.png",
  },
  {
    title: "Wine Tasting",
    description:
      "Raise a glass to an incredible day of wine, food, scenery, and history during this small-group, excursion to the Cape Winelands. Explore the unique wineries and stunning landscape of this region.",
    image: "/images/WineTasting.png",
  },
  {
    title: "Hiking",
    description:
      "There are many amazing hiking trails in Cape Town of different lengths and difficulty levels. From easy routes suitable for children to challenging hikes that require some rock climbing skills.",
    image: "/images/Hiking.png",
  },
];

const hiking_trails = [
  {
    title: "Biskop Steps",
    location: "37 Victoria Road, above Clifton 2nd beach, Cape Town",
    distance: "301 stairs",
    time: "",
    level: "Moderate",
    image: "/images/hiking/biskop_steps.png",
  },
  {
    title: "Signal Hill Spine",
    location: "Mountain National Park",
    distance: "5km",
    time: "1hr 24min",
    level: "Easy",
    image: "/images/hiking/Signal Hill Spine 2.png",
  },
  {
    title: "Seapoint Promenade Walk",
    location: "Seapoint, Cape Town, Western Cape",
    distance: "6km",
    time: "1hr",
    level: "Moderate",
    image: "/images/hiking/Seapoint Promenade Walk 1.png",
  },
  {
    title: "East Fort Contour - Chapmans Peak Drive",
    location: "East Fort, Hout Bay Harbour, Cape Town",
    distance: "6.3km",
    time: "",
    level: "Hard",
    image: "/images/hiking/East_Fort_Contour2.png",
  },
  {
    title: "Eagle's Nest via Constantia Nek",
    location: "Mountain National Park",
    distance: "1.8km",
    time: "20 - 25min",
    level: "Moderate",
    image: "/images/hiking/Eagles_Nest1.png",
  },
  {
    title: "Helderberg Farm - Woodies Walk",
    location: "Somerset West, Western Cape",
    distance: "13.4km",
    time: "5hrs 38min",
    level: "Hard",
    image: "/images/hiking/Helderberg_Farm4.png",
  },
  {
    title: "Devil's Peak via Saddle Rock",
    location: "Table Mountain National Park",
    distance: "5.6km",
    time: "5hrs 38min",
    level: "Hard",
    image: "/images/hiking/Devils_Peak_via_Saddle_Rock2.png",
  },
  {
    title: "Baileys Kloof - Muizenberg Window",
    location: "Pecks Valley - Muizenberg",
    distance: "5.6km",
    time: "",
    level: "Hard",
    image: "/images/hiking/Devils_Peak_via_Saddle_Rock2.png",
  },
  {
    title: "Cecilia Forest to Devilliers Dam",
    location: "Table Mountain National Park",
    distance: "7.2km",
    time: "",
    level: "Hard",
    image: "/images/hiking/Cecilia_Forest_to_Devilliers_Dam3.png",
  },
  {
    title: "Cecilia Forest to Devilliers Dam",
    location: "Table Mountain National Park",
    distance: "7.2km",
    time: "",
    level: "Hard",
    image: "/images/hiking/Cecilia_Forest_to_Devilliers_Dam3.png",
  },
  {
    title: "Cecilia Waterfall via Cecilia Forest",
    location: "Table Mountain National Park",
    distance: "4.3km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Cecilia_Waterfall_via_Cecilia_Forest2.png",
  },
  {
    title: "Uitkyk via Du Toitskop and Manganese Trail",
    location: "Mont Rochelle Nature Reserve",
    distance: "9.3km",
    time: "4hrs 7min",
    level: "Hard",
    image: "/images/hiking/Uitkyk_via_Du_Toitskop1.png",
  },
  {
    title: "Jonkershoek Waterfalls Day Hiking Trail",
    location: "Mont Rochelle Nature Reserve",
    distance: "9.3km",
    time: "4hrs 7min",
    level: "Moderate",
    image: "/images/hiking/Jonkershoek_Waterfalls_Day_Hiking_Trail3.png",
  },
  {
    title: "Cape of Good Hope Trail",
    location: "Table Mountain National Park",
    distance: "4.7km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Cape_of_Good_Hope_Trail1.png",
  },
  {
    title: "Cape Point - Lighthouse Keeper's Trail",
    location: "Table Mountain National Park",
    distance: "3.5km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Cape_Point_Lighthouse1.png",
  },
  {
    title: "Paarl Rock - Brittania Loop",
    location: "Paarl Mountain Nature Reserve",
    distance: "9.8km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Paarl_Rock2.png",
  },
  {
    title: "Twelve Apostles and Missing Link Loop",
    location: "Table Mountain National Park",
    distance: "12.4km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Twelve_Apostles_and_Missing_Link_Loop2.png",
  },
  {
    title: "Lion's Head (Sunset / Sunrise / Full Moon Hikes)",
    location: "Table Mountain National Park",
    distance: "4.3km",
    time: "",
    level: "Hard",
    image: "/images/hiking/Lions_Head1.png",
  },
  {
    title: "Elands River Trail",
    location: "Limietberg Nature Reserve",
    distance: "8.5km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Elands_River_Trail3.png",
  },
  {
    title: "Sandy Bay via BOS 400 Shipwreck",
    location: "Table Mountain National Park",
    distance: "9km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Sandy_Bay_via_Shipwreck1.png",
  },
  {
    title: "Woodstock Cave Trail",
    location: "Table Mountain National Park",
    distance: "9km",
    time: "",
    level: "Hard",
    image: "/images/hiking/Woodstock_Cave_Trail1.png",
  },
  {
    title: "Constantia Nek to Kirstenbosch via Contour Path",
    location: "Table Mountain National Park",
    distance: "6km",
    time: "2hrs 6min",
    level: "Moderate",
    image: "/images/hiking/Constantia_Nek_to_Kirstenbosch2.png",
  },
  {
    title: "Constantia Nek to Cecilia Forest via Contour Path",
    location: "Table Mountain National Park",
    distance: "5.5km",
    time: "1hr 44min",
    level: "Moderate",
    image: "/images/hiking/Constantia_Nek_to_Cecilia_Forest3.png",
  },
  {
    title: "Pipe Track from Kloof Nek",
    location: "Table Mountain National Park",
    distance: "5.5km",
    time: "2hrs 50min",
    level: "Moderate",
    image: "/images/hiking/Pipe_Track_from_Kloof_Nek2.png",
  },
  {
    title: "India Venster to Upper Cable Station",
    location: "Table Mountain National Park",
    distance: "",
    time: "2hrs 30min",
    level: "Hard",
    image: "/images/hiking/India_Venster_to_Upper_Cable_Station3.png",
  },
  {
    title: "Platteklip Gorge to Upper Cable Station",
    location: "Table Mountain National Park",
    distance: "",
    time: "2hrs 30min",
    level: "Hard",
    image: "/images/hiking/Platteklip_Gorge_to_Upper_Cable_Station3.png",
  },
  {
    title: "Hermanus Fernkloof Waterfall",
    location: "Fernkloof Nature Reserve",
    distance: "4.2km",
    time: "1hr 29min",
    level: "Moderate",
    image: "/images/hiking/Platteklip_Gorge_to_Upper_Cable_Station3.png",
  },
  {
    title: "Krom River Trail",
    location: "Limietberg Nature Reserve",
    distance: "6.9km",
    time: "",
    level: "Moderate",
    image: "/images/hiking/Jonkershoek_Waterfalls_Day_Hiking_Trail3.png",
  },
  {
    title: "Kloof Nek to Camps Bay via Pipe Track",
    location: "Table Mountain National Park",
    distance: "4km",
    time: "1hr 13min",
    level: "Moderate",
    image: "/images/hiking/Kloof_Nek_to_Camps_Bay1.png",
  },
  {
    title: "Crystal Pools - Steenbras Peak",
    location: "Gordons Bay, Western Cape, South Africa",
    distance: "9.8km",
    time: "4hrs 35min",
    level: "Hard",
    image: "/images/hiking/Crystal_Pools_Steenbras_Peak2.png",
  },
  {
    title: "Bettys Bay Leopard's Kloof Trail",
    location: "Harold Porter Botanical Gardens",
    distance: "2.74km",
    time: "1hr 14min",
    level: "Moderate",
    image: "/images/hiking/Bettys_Bay_Leopards_Kloof_Trail2.png",
  },
];

const galleryImages = [
  { image: "/images/hiking/biskop_steps.png" },
  { image: "/images/hiking/biskop_steps.png" },
  { image: "/images/hiking/biskop_steps.png" },
  { image: "/images/hiking/biskop_steps.png" },
  { image: "/images/hiking/biskop_steps.png" },
];

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
    <main>
      <SubHero
        title={"Find Your Next Adventure!"}
        subtitle={"Unforgettable Tours and Experiences Await"}
        image={"/images/Fitness/Fitness04.jpeg"}
      />
      <div className="adventure-section relative py-16 w-full bg-slate-50">
        <Slider {...settings} className="relative">
          {activities.map((activity, index) => (
            <div key={index} className="h-auto px-6">
              <div className="h-[300px] relative">
                <Image
                  style={{ objectFit: " cover" }}
                  fill
                  src={activity.image}
                  alt={"activity."}
                />
              </div>
              <h3 className="text-red-700 text-lg my-1">{activity.title}</h3>
              <p className="text-[gray]">{activity.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="py-16 bg-green-100 flex flex-col items-center">
        {hiking_trails.map((trail, index) => (
          <div
            key={index}
            className={`py-5 h-auto px-6 w-100 flex gap-10 items-center ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="h-[21.875rem] relative w-[40.625rem]">
              <Image
                className="rounded-3xl"
                style={{ objectFit: " cover" }}
                fill
                src={trail.image}
                alt={"activity."}
              />
            </div>
            <div className="hiking-card-content w-[250px]">
              <p className={`hiking-card-level ${trail.level.toLowerCase()}`}>
                {trail.level}
              </p>
              <h3 className="hiking-card-title font-bold">{trail.title}</h3>
              <p className="hiking-card-location">
                <span>
                  <i class="fa fa-map-marker text-base " aria-hidden="true"></i>
                </span>
                {"  "}
                {trail.location}
              </p>
              <div className="hiking-card-info">
                {trail.distance && (
                  <p className="hiking-card-distance">
                    <span>
                      <i class="fa fa-tree" aria-hidden="true" />
                    </span>
                    {"  "}
                    {trail.distance}
                  </p>
                )}
                {trail.time && (
                  <p className="hiking-card-time flex gap-2 items-center">
                    <span>
                      <i
                        className="fa-solid fa-clock text-base text-black"
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

      <div class="gallery-header hiking-header">
        <h2>Past Adventures</h2>
        <h5>Our Hiking Trail Tales Through the Years</h5>
      </div>

      <div className="hiking gallery"></div>
    </main>
  );
}
