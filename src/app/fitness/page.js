import InfoCard from "@/components/info-card";
import SubHero from "@/components/sub-hero";
import VideoPlayer from "@/components/video-player";

export const metadata = {
  title: "Boxing & Fitness Classes in Cape Town | Total Blessing",
  description:
    "Get fit with boxing and strength training in Cape Town. Total Blessing offers fun, high-impact workouts led by passionate personal trainers.",
  openGraph: {
    title: "Boxing & Fitness Classes in Cape Town | Total Blessing",
    description:
      "Get fit with boxing and strength training in Cape Town. Total Blessing offers fun, high-impact workouts led by passionate personal trainers.",
    url: "https://totalblessingfitnessandtraveltours.co.za/fitness",
    images: [
      {
        url: "/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Total Blessing Fitness Programmes",
      },
    ],
  },
};

export default function Fitness() {
  return (
    <main className="bg-[#f8f9fb]">
      <SubHero
        title={"WORKOUT PROGRAMMES TAILORED TO YOUR FITTING"}
        subtitle={
          "We Know Exactly what is needed to get you to your Full potential"
        }
        image={"/images/Fitness/4Fitness.jpeg"}
      />

      <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            <span className="text-[#dc2626]">GET FIT</span> with us
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            The best investment is in self, and we compensate long-term
            self-investment by giving you
            <b className="mx-1 text-[#dc2626]">
              20% OFF
            </b>{" "}
            when you pay{" "}
            <b className="mx-1 text-[#dc2626]">
              3 MONTHS
            </b>{" "}
            in advance.
          </p>
          <a
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#dc2626] px-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#b91c1c] shadow-sm"
            href="/booking"
          >
            Find out more
          </a>
        </div>
      </section>

      <InfoCard
        title={"Let's Get Fit!"}
        content={`For those who like workouts, progressive learning and earned rewards. Ready to give you exciting and challenging training programmes, train those who are interested in improving boxing skills or those seeking physical fitness in general. Goals are from losing weight to building strong physique to test one's courage and intellect in battle. Passionate and Committed to our Clients.`}
        image={"/images/new/WhatsApp Image 2025-03-11 at 16.45.43.jpeg"}
        background={"#000"}
        textc={"#fff"}
        alt
      />

      <InfoCard
        title={"Box Fit Group Classes"}
        content={`Whether you are looking to lose weight, tone up, stretch it out, hone your boxing skills, or release extra energy, the variety of classes offered at Total Blessing will help you get strong and fit in an energy-fuelled, motivating, and friendly environment where you will find yourself being pushed to your limits in every class, during every session.`}
        video={"/video/WhatsApp Video 2025-03-12 at 14.16.57.mp4"}
        cover
        background={"#000"}
        textc={"#fff"}
      />

      <InfoCard
        alt
        title={"Junior Boxing"}
        content={`We offer junior boxing for children (boys and girls) between the ages of 4 and 15 as you can never be too young to discover the benefits that comes with boxing training.\n\nThe classes are split according to ages and include cardio and boxing, and will assist in developing your child's focus, self-control, concentration and discipline.`}
        image={"/images/new/WhatsApp Image 2025-03-11 at 16.43.36.jpeg"}
        background={"#000"}
        textc={"#fff"}
      />

      <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            {`It's time to`} <span className="text-[#dc2626]">GET FIT</span> and
            <br />
            have a great time doing it!
          </h2>
          <a
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#dc2626] px-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#b91c1c] shadow-sm"
            href="booking#schedule"
          >
            Boxfit bootcamp group classes time table
          </a>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 text-gray-500 flex flex-col gap-4 text-base">
            <p className="font-bold text-gray-900">
              4-WEEK BOXFIT BOOTCAMP <br />
              Group classes:
            </p>
            <p className="leading-relaxed">
              Join Total Blessings 4-Week Boxfit Bootcamp and push your limits in
              a high-energy, transformative fitness journey. As a passionate
              boxer, trainer, and wellness coach, Blessing leads professional,
              top-quality classes designed to help you lose weight, build
              strength, and boost endurance.
              <br />
              <br />
              Whether you want to sculpt your physique, enhance your mental
              toughness, or embrace the challenge of boxing, our dedicated team is{" "}
              <span className="font-bold text-[#dc2626]"> here to help you</span> every step
              of the way. Step into the ring, conquer your goals, and experience
              the power of Boxfit! 🥊
            </p>
          </div>
          <div className="md:w-1/2">
            <VideoPlayer
              video={"/video/WhatsApp Video 2025-03-10 at 22.37.28.mp4"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}