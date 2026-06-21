import InfoCard from "@/components/info-card";
import ClientSlider from "@/components/slider";
import SubHero from "@/components/sub-hero";
import { galleryImages } from "@/data/pageData";

export const metadata = {
  title:
    "Personal Training & Adventure Tours in Cape Town | Total Blessing Fitness",
  description:
    "Join Total Blessing in Cape Town for expert personal training, group fitness, and epic travel adventures. Get fit, explore, and live fully!",
  openGraph: {
    title:
      "Personal Training & Adventure Tours in Cape Town | Total Blessing Fitness",
    description:
      "Join Total Blessing in Cape Town for expert personal training, group fitness, and epic travel adventures. Get fit, explore, and live fully!",
    url: "https://totalblessingfitnessandtraveltours.co.za/about",
    images: [
      {
        url: "/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "About Total Blessing Fitness & Travel Tours",
      },
    ],
  },
};

export default function About() {
  return (
    <main>
      <SubHero
        title={"Discover Our Story while getting Fit and Having Fun!"}
        subtitle={
          "Transform Your Health with Workouts You'll Love and Elevate Your Fitness!"
        }
        image={"/images/Fitness/Fitness04.jpeg"}
      />

      <InfoCard
        content={`Total Blessing Fitness & Tour Travel is a Cape Town based company that specializes in providing fitness and tour travel services. We offer a wide range of services, from personal training and group fitness classes to guided tours and travel packages. Our team of experienced professionals is dedicated to helping you reach your fitness and travel goals. We strive to provide the best possible experience for our clients, ensuring that they have a safe and enjoyable journey. We believe in creating lasting memories and providing an unforgettable experience. Our goal is to make sure that you have the best possible experience when you travel with us. `}
        image={"/images/rem-bg/biskop_steps-removebg-preview.png"}
        alt
        // animate
      />

      <InfoCard
        title={"About blessing"}
        content={`Meet Blessing Mutero, founder of Total Blessing Fitness and Travel Tours, a passionate boxer, fitness trainer, and wellness coach. Combining his love for health, adventure, and travel, he creates personalized fitness programs and immersive travel experiences. From boxing workouts to scenic hikes and wellness retreats, Blessing curates transformative journeys that energize the body and mind. Join him in exploring the world while prioritizing your health—every trip can be a total blessing!`}
        video={"/video/VID-20250311-WA0001.mp4"}
        cover
        // animate
      />

      <InfoCard
        title={"FITNESS"}
        content={
          "Our classes are professional and of the highest quality, providing the ideal environment for you to reach your fitness goals."
        }
        image={"/images/Fitness/2Fitness.jpeg"}
        buttonlabel={"Get fit"}
        buttonlink={"/fitness"}
        background={"#F5F5F5"}
        textc={"#00000"}
        alt
        animate
      />

      <InfoCard
        title={"TRAVEL & TOURS"}
        content={
          "Our Scheduled Public Tours operate several days a week, offering you a variety of epic day trips. So, dont be left out of Cape Town’s best local cultural, nature, dining and drinking hotspots"
        }
        image={"/images/adventures/tablemountain.jpg"}
        buttonlabel={"Explore more"}
        buttonlink={"/adventures"}
        background={"#2C2C2C"}
        textc={"#fff"}
        animate
      />

      <InfoCard
        title={"JOIN THE FITNESS TRIBE"}
        content={
          "Join the ultimate workout experience with Boxfit, designed to challenge your body and mind. Our high-intensity classes incorporate cardio, strength, and boxing drills, all led by a supportive and empowering community. Say goodbye to boring workouts and hello to lasting results."
        }
        image={"/images/hiking/Platteklip_Gorge_to_Upper_Cable_Station1.png"}
        buttonlabel={"Sign up now and join the tribe"}
        buttonlink={"/booking"}
        background={"#F5F5F5"}
        textc={"#00000"}
        animate
        alt
      />

      <InfoCard
        title={"Discover Fitness and Travel Adventures on Our YouTube Channel"}
        content={
          "Explore fitness, travel, and adventure with our exclusive YouTube channel. Get inspired by workouts, destinations, and behind-the-scenes moments from our journey to health and discovery."
        }
        image={"/images/Fitness/Fitness08.jpeg"}
        buttonlabel={"Subscribe"}
        buttonlink={"https://www.youtube.com/@total.blessing"}
        background={"#2C2C2C"}
        textc={"#fff"}
        animate
      />

      <section className="py-16 md:py-24 w-full bg-white border-y border-gray-100">
        <div className="flex flex-col items-center justify-center gap-4 pb-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center uppercase text-gray-900">
            Seek an <span className="text-[#dc2626]">adventure</span> with us
          </h2>
          <a
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#dc2626] px-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#b91c1c] shadow-sm"
            href="/adventures"
          >
            Explore More
          </a>
        </div>
        <ClientSlider list={galleryImages} images />
      </section>
    </main>
  );
}
