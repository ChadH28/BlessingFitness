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
    <main className="mesh-light">
      <SubHero
        title={"WORKOUT PROGRAMMES TAILORED TO YOUR FITTING"}
        subtitle={
          "We Know Exactly what is needed to get you to your Full potential"
        }
        image={"/images/Fitness/4Fitness.jpeg"}
      />

      <section className="mesh-dark-section relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center gap-6 text-center"
          >
          <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-[0.95] text-foreground md:text-5xl">
            <span className="text-tertiary">GET FIT</span> with us
          </h2>
          <p className="max-w-[65ch] text-pretty text-base leading-relaxed text-foreground/70 md:text-xl">
            The best investment is in self, and we compensate long-term
            self-investment by giving you
            <b className="mx-1" style={{ color: "red" }}>
              20% OFF
            </b>{" "}
            when pay{" "}
            <b className="mx-1" style={{ color: "red" }}>
              3 MONTHS
            </b>{" "}
            in advance.
          </p>
          <a
            className="
            btn-primary inline-block rounded-full bg-tertiary px-8 py-3 text-xs font-bold uppercase tracking-wider text-white
            "
            href="/booking"
          >
            Find out more
          </a>
        </div>
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
        content={`We offer junior boxing for children (boys and girls) between the ages of 4 and 15 as you can never be too young to discover the benefits that comes with boxing training.\n\nThe classes are split according to ages and include cardio and boxing, and will assist in developing your child’s focus, self-control, concentration and discipline.`}
        image={"/images/new/WhatsApp Image 2025-03-11 at 16.43.36.jpeg"}
        background={"#000"}
        textc={"#fff"}
      />

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center gap-6 text-center"
          >
          <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-[0.95] text-foreground md:text-5xl">
            It&apos;s time to <span className="text-tertiary">GET FIT</span> and
            <br />
            have a great time doing it!
          </h2>
          <a
            className="
            btn-primary block h-fit w-fit rounded-full bg-tertiary px-8 py-3 text-xs font-bold uppercase tracking-wider text-white
            "
            href="booking#schedule"
          >
            Boxfit bootcamp group classes time table
          </a>
        </div>
      </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div
              data-aos="fade-right"
              className="flex flex-col gap-4 text-foreground/70"
            >
              <p>
                4-WEEK BOXFIT BOOTCAMP | Group classes:
              </p>
              <p>
                Join Total Blessings 4-Week Boxfit Bootcamp and push your limits in
                a high-energy, transformative fitness journey. As a passionate
                boxer, trainer, and wellness coach, Blessing leads professional,
                top-quality classes designed to help you lose weight, build
                strength, and boost endurance.
                <br />
                <br />
                Whether you want to sculpt your physique, enhance your mental
                toughness, or embrace the challenge of boxing, our dedicated team is{" "}
                <span className="text-tertiary"> here to help you</span> every step
                of the way. Step into the ring, conquer your goals, and experience
                the power of Boxfit! 🥊
              </p>
            </div>
            <div className="md:col-span-1">
              <VideoPlayer
                video={"/video/WhatsApp Video 2025-03-10 at 22.37.28.mp4"}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
