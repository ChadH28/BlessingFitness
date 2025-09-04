import Hero from "@/components/hero";
import InfoCard from "@/components/info-card";
import { highlights, slides } from "@/data/pageData";
import ClientSlider from "@/components/slider";

export const metadata = {
  title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
  description:
    "Discover fitness, wellness retreats & adventure in Cape Town. Total Blessing blends expert workouts with unforgettable guided travel experiences.",
  openGraph: {
    title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
    description:
      "Discover fitness, wellness retreats & adventure in Cape Town. Total Blessing blends expert workouts with unforgettable guided travel experiences.",
    url: "https://totalblessingfitnessandtraveltours.co.za/",
    images: [
      {
        url: "/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Total Blessing Fitness & Travel Tours",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero
        title={"WHERE FITNESS MEETS ADVENTURE"}
        subtitle={"Join the Blessing fitness and travel tours community today"}
        slider={slides}
      />

      <div className="flex flex-col items-center gap-2 p-10 text-balance justify-center text-center w-100 text-[white] font-semibold bg-[#000]">
        <p>Closest Gym</p>
        <a
          target="_blank"
          href="https://www.google.com/maps/dir/-33.91039,18.50459/277+Main+Rd,+Sea+Point,+Cape+Town,+8060/@-33.9151888,18.3681501,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dcc673aef9ff6e5:0xfdae4c917b53c398!2m2!1d18.3940621!2d-33.9111697?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
        >
          <h2 className="max-[1024px]:text-2xl text-4xl font-bold uppercase ">
            <i className="fa-solid  fa-location-pin" aria-hidden="true" /> Ring
            Reloaded boxing gym, Seapoint
          </h2>
        </a>
        <a className="uppercase underline" href="/booking">
          See my booking options
        </a>
      </div>

      <InfoCard
        title={"Meet the team behind the adventure"}
        alt
        content={"Discover Our Passion for Fitness and Exploration"}
        buttonlink={"/about"}
        buttonlabel={"Get to know our journey"}
        image={"/images/rem-bg/about-removebg-preview.png"}
      />

      <InfoCard
        title={"Find Exciting Journeys and highlights \n Cape Town awaits you"}
        content={`From Stellenbosch’s vineyards and Hout Bay’s harbor to Camps Bay’s iconic beach set against the backdrop of Table Mountain. Experience South Africa’s culture, nature, and history in one unforgettable journey.`}
        buttonlink={"/adventures"}
        buttonlabel={"Explore More"}
        image={"/images/adventureHome.jpeg"}
        animate
      />

      <InfoCard
        title={"Start Your Fitness Adventure"}
        alt
        content={"Book your next workout today and unlock new levels."}
        buttonlink={"/booking"}
        buttonlabel={"Book Now"}
        image={"/images/hiking/India_Venster_to_Upper_Cable_Station3.png"}
      />

      <ClientSlider list={highlights} />

      <InfoCard
        title={"Unleash Your Potential with Our Programs"}
        content={`Join classes Monday to Saturday at the time that suits you. From boxing and cardio to personalized workouts, your coach will guide you every step of the way.`}
        buttonlink={"/fitness"}
        buttonlabel={"Get Fit"}
        image={"/images/Fitness/Fitness05.jpeg"}
        animate
      />

      <InfoCard
        title={"Join our online boxercise classes!"}
        content={`High-energy online Boxercise from Cape Town. Warm-up, boxing drills, bodyweight exercises, and cool-down, no equipment needed. Suitable for all fitness levels. Train with us on Zoom!`}
        video={"/video/WhatsApp Video 2025-03-11 at 17.23.45.mp4"}
        buttonlink={
          "https://wa.me/27787589451?text=Online%20boxercise%20class%20enquiry"
        }
        buttonlabel={"Enquire via whatsapp"}
        external
        alt
      />
    </main>
  );
}
