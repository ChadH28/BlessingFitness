import Hero from "@/components/hero";
import InfoCard from "@/components/info-card";
import { highlights, slides } from "@/data/pageData";
import ClientSlider from "@/components/slider";

export const metadata = {
  title: "Total Blessing Fitness and Travel Tours Website",
  description: "Cape Town's Fitness and Touring Hub. Discover the best fitness classes and travel adventures with Total Blessing Fitness and Travel  Tours.",
  openGraph: {
    title: "Total Blessing Fitness and Travel Tours Website",
    description: "Cape Town's Fitness and Touring Hub. Discover the best fitness classes and travel adventures with Total Blessing Fitness and Travel  Tours.",
    url: "totalblessingfitnessandtraveltours.co.za/",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Us",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero title={"WHERE FITNESS MEETS ADVENTURE"} slider={slides} />

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
        content={`From the Stellenbosch vineyards, Hout Bays harbor to
                      the Camps Bays iconic beach, all while taking in
                      Table Mountains breathtaking views. Its a
                      journey through South African culture, nature, and history
                      in one.`}
        buttonlink={"/adventures"}
        buttonlabel={"Explore More"}
        image={"/images/adventureHome.jpeg"}
        animate
      />

      <InfoCard
        title={"Start Your Fitness Adventure"}
        alt
        content={"Book Your Next Session Today"}
        buttonlink={"/booking"}
        buttonlabel={"Book Now"}
        image={"/images/rem-bg/hom-resize-removebg-preview.png"}
      />

      <ClientSlider list={highlights} />

      <InfoCard
        title={"Unleash Your Potential with Our Programs"}
        content={`From Monday to Saturday, we have classes you can join in
                      your desired day and time that better suits you. From
                      boxing to cardio and any fitness needs you want
                      exclusively, let your personal coach guide you through it.`}
        buttonlink={"/fitness"}
        buttonlabel={"Get Fit"}
        image={"/images/Fitness/Fitness05.jpeg"}
        animate
      />

      <InfoCard
        title={"Join our online boxercise classes!"}
        content={`Join our Cape Town-based online boxercise classes for a
              high-energy workout combining boxing techniques and fitness
              training. Each session includes a warm-up, boxing drills,
              bodyweight exercises, and a cool-down for recovery. Suitable for
              all fitness levels, our virtual classes on Zoom require no special
              equipment—train from home and get fit with us!`}
        video={"/video/WhatsApp Video 2025-03-11 at 17.23.45.mp4"}
        buttonlink={
          "https://wa.me/27787589451?text=Online%20boxercise%20class%20enquiry"
        }
        buttonlabel={"Enquire here via whatsapp"}
        external
        alt
      />
    </main>
  );
}
