import InfoCard from "@/components/info-card";
import SubHero from "@/components/sub-hero";
import VideoPlayer from "@/components/video-player";
import Link from "next/link";

export default function Fitness() {
  return (
    <main className="overflow-hidden">
      <SubHero
        title={"WORKOUT PROGRAMMES TAILORED TO YOUR FITTING"}
        subtitle={
          "We Know Exactly what is needed to get you to your Full potential"
        }
        image={"/images/Fitness/4Fitness.jpeg"}
      />

      <div className="adventure-section relative py-12 w-full bg-slate-50">
        <div className="item cta-label flex flex-col items-center justify-center gap-3 pb-10 w-full">
          <h2 className="max-[1024px]:text-2xl text-4xl font-bold text-center uppercase">
            <span style={{ color: "red" }}>GET FIT</span> with us
          </h2>
          <p className="text-xl text-pretty text-[grey] text-center w-2/3">
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
          <Link
            className="
            bg-[#df2828] mt-2 px-5 py-2 text-white uppercase rounded-md text-sm
            "
            href="/booking"
          >
            Find out more
          </Link>
        </div>
      </div>

      <InfoCard
        title={"Box Fit Group Classes"}
        content={`Whether you are looking to lose weight, tone up, stretch it out, hone your boxing skills, or release extra energy, the variety of classes offered at Total Blessing will help you get strong and fit in an energy-fuelled, motivating, and friendly environment where you will find yourself being pushed to your limits in every class, during every session.`}
        image={"/images/Fitness/04Fitness.jpeg"}
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
      <InfoCard
        title={"Let's Get Fit!"}
        content={`For those who like Workouts, progressive learning and earned rewards. Ready to give you exciting and challenging training programmes, train those who are interested in improving boxing skills or those seeking physical fitness in general. Goals are from losing weight to building strong physique to test one's courage and intellect in battle. Passionate and Committed to our Clients.`}
        image={"/images/new/WhatsApp Image 2025-03-11 at 16.45.43.jpeg"}
        background={"#000"}
        textc={"#fff"}
      />

      <div className="adventure-section relative py-14 w-full">
        <div className="item cta-label flex flex-col items-center justify-center gap-3 pb-10 w-full">
          <h2 className="max-[1024px]:text-2xl text-4xl font-bold text-center uppercase">
            It&apos;s time to <span style={{ color: "red" }}>GET FIT</span> and
            <br />
            have a great time doing it!
          </h2>
          <Link
            className="
            bg-[#df2828] block h-fit w-fit px-5 py-2 text-white uppercase rounded-sm text-sm
            "
            href="booking#schedule"
          >
            Boxfit bootcamp group classes time table
          </Link>
        </div>
      </div>

      <div className="flex gap-5 p-6 md:px-12 md:py-0 flex-col md:flex-row justify-center w-100 items-center">
        <div className="md:w-1/2 text-[grey] flex flex-col gap-2 text-xl">
          <p>
            4-WEEK BOXFIT BOOTCAMP <br />
            Group classes:
          </p>
          <p>
            Join our 4-Week Boxfit Bootcamp Group Classes and feel the
            challenge, conquer it, and experience body and energy transformation
            through an amazing fitness journey. Our classes are professional and
            of the highest quality, providing the ideal environment for you to
            reach your fitness goals. Whether you are looking to lose weight,
            build a strong physique, or test your courage and intellect in
            battle, our passionate and committed team is{" "}
            <span style={{ color: "red" }}> here to help you</span> reach your
            goals.
          </p>
        </div>
        <div className="md:w-1/2">
          <VideoPlayer
            video={"/video/WhatsApp Video 2025-03-10 at 22.37.28.mp4"}
          />
        </div>
      </div>
    </main>
  );
}
