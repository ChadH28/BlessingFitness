import InfoCard from "@/components/info-card";
import ClientSlider from "@/components/slider";
import SubHero from "@/components/sub-hero";
import { galleryImages } from "@/data/pageData";

export const metadata = {
  title: "Expert Personal Training & Travel Adventures in Cape Town | About Us",
  description:
    "Discover Total Blessing Fitness & Travel Tours – your destination for expert personal training, group fitness, and guided travel experiences in Cape Town. Join us for a healthier, more adventurous lifestyle.",
  openGraph: {
    title:
      "Expert Personal Training & Travel Adventures in Cape Town | About Us",
    description:
      "Discover Total Blessing Fitness & Travel Tours – your destination for expert personal training, group fitness, and guided travel experiences in Cape Town. Join us for a healthier, more adventurous lifestyle.",
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
        content={`Total Blessing Fitness & Tour Travel is a Cape Town based company that specializes in providing fitness and tour travel services. We offer a wide range of services, from personal training and group fitness classes to guided tours and travel packages. Our team of experienced professionals is dedicated to helping you reach your fitness and travel goals. We strive to provide the best possible experience for our clients, ensuring that they have a safe and enjoyable journey. We believe in creating lasting memories and providing an unforgettable experience. Our goal is to make sure that you have the best possible experience when you travel with us. 💪`}
        image={"/images/rem-bg/biskop_steps-removebg-preview.png"}
        alt
        // animate
      />

      <InfoCard
        title={"About blessing"}
        content={`Meet Blessing Mutero, founder of Total Blessing Fitness and Travel Tours, a passionate boxer, fitness trainer, and wellness coach. Combining his love for health, adventure, and travel, he creates personalized fitness programs and immersive travel experiences. From boxing workouts to scenic hikes and wellness retreats, Blessing curates transformative journeys that energize the body and mind. Join him in exploring the world while prioritizing your health—every trip can be a total blessing! 🏃‍➡️`}
        video={"/video/VID-20250311-WA0001.mp4"}
        cover
        // animate
      />

      <InfoCard
        title={"FITNESS"}
        content={
          "Our classes are professional and of the highest quality, providing the ideal environment for you to reach your fitness goals. So, dont be left out of Cape Town’s best local cultural, nature, dining and drinking hotspots. 🧘"
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
          "Our Scheduled Public Tours operate several days a week, offering you a variety of epic day trips. 🪂"
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
          "Join the ultimate workout experience with Boxfit, designed to challenge your body and mind. Our high-intensity classes incorporate cardio, strength, and boxing drills, all led by a supportive and empowering community. Say goodbye to boring workouts and hello to lasting results. 🧗‍♂️"
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
          "Dive into a world of exhilarating fitness routines and breathtaking travel destinations with our exclusive YouTube channel. Whether youre looking to stay fit, explore new places, or simply find inspiration, our videos offer something for everyone. Join us as we take you on a behind the scenes look of the team and on a journey of health, adventure, and discovery. 🏋️"
        }
        image={"/images/Fitness/3Fitness.jpeg"}
        buttonlabel={"Subscribe"}
        buttonlink={"https://www.youtube.com/@total.blessing"}
        background={"#2C2C2C"}
        textc={"#fff"}
        animate
      />

      <div className="adventure-section relative py-16 w-full bg-slate-50">
        <div
          data-aos="fade-up"
          className="item cta-label flex flex-col items-center justify-center gap-3 pb-10 w-full"
        >
          <h2 className="max-[1024px]:text-2xl text-4xl font-bold text-center uppercase">
            Seek an <span style={{ color: "red" }}>adventure</span> with us
          </h2>
          <a
            className="uppercase block bg-[red] hover:bg-red-500 text-xs text-white font-extrabold w-fit rounded-sm px-4 py-2"
            href="/adventures"
          >
            Explore More
          </a>
        </div>
        <ClientSlider list={galleryImages} images />
      </div>
    </main>
  );
}
