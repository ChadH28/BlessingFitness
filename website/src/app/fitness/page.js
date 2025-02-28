import InfoCard from "@/components/info-card";
import SubHero from "@/components/sub-hero";
import Link from "next/link";

export default function Fitness() {
  return (
    <main>
      <SubHero
        title={"WORKOUT PROGRAMMES TAILORED TO YOUR FITTING"}
        subtitle={
          "We Know Exactly what is needed to get you to your Full potential"
        }
        image={"/images/BLACKANDWHITE.jpeg"}
      />

      <div className="flex flex-col gap-4 md:flex-row justify-center w-100 items-center p-8  md:p-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl mb-2">
            <span style={{ color: "red" }}>GET FIT</span> WITH US!
          </h2>
          <p className="text-xl text-pretty text-[grey] md:w-full w-[90%]">
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
        </div>
        <div className="md:w-1/2 md:flex md:justify-center">
          <div className="left_align">
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
      </div>

      <InfoCard
        title={"Box Fit Group Classes"}
        content={`Whether you are looking to lose weight, tone up, stretch it out, hone your boxing skills, or release extra energy, the variety of classes offered at Total Blessing will help you get strong and fit in an energy-fuelled, motivating, and friendly environment where you will find yourself being pushed to your limits in every class, during every session.`}
        image={"/images/Fitness/04Fitness.jpeg"}
        background={"#000"}
      />
      <InfoCard
        alt
        title={"Junior Boxing"}
        content={`We offer junior boxing for children (boys and girls) between the ages of 4 and 15 as you can never be too young to discover the benefits that comes with boxing training.\n\nThe classes are split according to ages and include cardio and boxing, and will assist in developing your child’s focus, self-control, concentration and discipline.`}
        image={"/images/Fitness/Fitness03.jpeg"}
        background={"#000"}
      />
      <InfoCard
        title={"Let's Get Fit!"}
        content={`For those who like Workouts, progressive learning and earned rewards. Ready to give you exciting and challenging training programmes, train those who are interested in improving boxing skills or those seeking physical fitness in general. Goals are from losing weight to building strong physique to test one's courage and intellect in battle. Passionate and Committed to our Clients.`}
        image={"/images/Fitness/Fitness04.jpeg"}
        background={"#000"}
      />

      <div className="flex gap-5 p-6 md:p-12 flex-col md:flex-row justify-center w-100 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl mb-5">
            It&apos;s time to <span style={{ color: "red" }}>GET FIT</span>
            <br />
            and have a great time doing it!
          </h2>
          <div className="left_align">
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
      </div>
    </main>
  );
}
