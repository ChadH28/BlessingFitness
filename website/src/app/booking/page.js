import PriceCard from "@/components/price-card";
import SubHero from "@/components/sub-hero";
import TableCard from "@/components/timetable-card";
import Image from "next/image";
import Link from "next/link";

export default function Booking() {
  const pricelist = {
    ladies_only: [
      {
        price: "R650",
        description: "per month",
      },
      {
        price: "R200",
        description: "per dropin",
      },
    ],
    group: [
      {
        price: "R1,200",
        description: "per month",
      },
      {
        price: "R1,000",
        description: "per monthly student",
      },
      {
        price: "R200",
        description: "per dropin student",
      },
      {
        price: "R220",
        description: "per dropin",
      },
    ],
    sessions: [
      {
        price: "R4,000",
        description: "10 x 45 mins",
      },
      {
        price: "R3,500",
        description: "10 x 30 mins",
      },
      {
        price: "R450",
        description: "Assessment fee",
      },
      // {
      //   price: "R250",
      //   description: "30 mins",
      // },
    ],
    one_on: [
      {
        price: "R5,000",
        description: "10 sessions",
      },
      {
        price: "R550",
        description: "1 hour",
      },
      {
        price: "R450",
        description: "45 mins",
      },
      {
        price: "R400",
        description: "30 mins",
      },
    ],
    three_on: [
      {
        price: "R1,050",
        description: "1 hour",
      },
    ],
    two_on: [
      {
        price: "R7,000",
        description: "10 sessions",
      },
      {
        price: "R750",
        description: "1 hour",
      },
    ],
  };
  return (
    <main>
      <SubHero
        title={"Reserve Your Fitness Journey"}
        subtitle={"Book Your Classes and Training Sessions Today"}
        image={"/images/BLACKANDWHITE.jpeg"}
      />

      {/* promotion section */}
      <div className="flex justify-center w-full h-auto">
        <div className="bg-black text-white sm:w-full lg:w-[500px] m-8 p-8 flex flex-col gap-2">
          <h2 className="text-3xl">SPECIAL PACKAGE</h2>
          <div className="text-xl leading-relaxed ">
            <div className="flex flex-col gap-4">
              <p>
                5X private sessions including a 1 month membership for groups{" "}
                <strong>for only R3,200</strong>
              </p>
              <p>
                Every member that pays 3 months upfront (R1,000 x 3 ) will get
                R200 dicount each month
              </p>
              <p>
                Every student that pays 3 months upfront (R950 x 3 ) will get
                R50 dicount each month
              </p>
            </div>
          </div>
          {/* <Link
            className="bg-white text-black uppercase p-4 w-fit text-xs"
            // href="https://calendly.com/mteroblessing/30min?month=2024-02"
            href="https://wa.link/2fyjg5"
            target="_blank"
          >
            Book Here
          </Link> */}
        </div>
      </div>

      {/* table */}
      <div className="px-10 w-full h-auto">
        <PriceCard
          image={"/images/Fitness/Fitness15.jpeg"}
          title={"Ladies only Saturday session"}
          pricinglist={pricelist.ladies_only}
          alt
        />
        <PriceCard
          image={"/images/Fitness/03Fitness.jpeg"}
          title={"Group Sessions"}
          pricinglist={pricelist.group}
        />
        <PriceCard
          image={"/images/Fitness/Fitness03.jpeg"}
          title={"Private Session"}
          pricinglist={pricelist.sessions}
          alt
        />
        <PriceCard
          image={"/images/Fitness/Fitness08.jpeg"}
          title={"1 ON 1"}
          pricinglist={pricelist.one_on}
        />
        <PriceCard
          image={"/images/Fitness/2Fitness.jpeg"}
          title={"2 ON 1"}
          pricinglist={pricelist.two_on}
          alt
        />
        <PriceCard
          image={"/images/Fitness/Fitness03.jpeg"}
          title={"3 ON 1"}
          pricinglist={pricelist.three_on}
        />
      </div>

      <div
        id="schedule"
        class="
        anchor_adj
        relative flex items-center justify-center h-1/2
      bg-fixed bg-center bg-cover custom-img
      "
      >
        <div class="table-heading flex flex-col items-center gap-2 p-10 justify-center w-100 text-[#a94442] font-semibold">
          <h2>TIME TABLE</h2>
          <h4>(Bootcamp classes time table)</h4>
          <h5>Note: Classes are to be held at The Ring Reloaded Boxing Gym</h5>
          <p>
            24h bookings are essential for group classes, limited space
            available
          </p>
        </div>
      </div>

      <div class="timetable-container relative my-12">
        <TableCard
          day={"MONDAY"}
          workout={"HIIT"}
          workout_desc={"(High-Intensity Interval Training)"}
          time_am={"07:30 - 08:30am"}
          image={"/images/Fitness/03Fitness.jpeg"}
        />
        <TableCard
          day={"TUESDAY"}
          workout={"BOXING"}
          time_am={"07:30 - 08:30am"}
          image={"/images/Fitness/RESIZED/01Fitness.jpg"}
        />

        <TableCard
          day={"WEDNESDAY"}
          workout={"FULL BODY CONDITIONING"}
          time_am={"07:30 - 08:30am"}
          time_pm={"18:30 - 19:30pm"}
          image={"/images/Fitness/2Fitness.jpeg"}
        />

        <TableCard
          day={"THURSDAY"}
          workout={"STRENGTH TRAINING"}
          time_am={"07:30 - 08:30am"}
          image={"/images/Fitness/Fitness03.jpeg"}
        />

        <TableCard
          day={"FRIDAY"}
          workout={"BOXING"}
          time_am={"07:30 - 08:30am"}
          time_pm={"18:30 - 19:30pm"}
          image={"/images/Fitness/02Fitness.jpeg"}
        />

        <TableCard
          day={"SATURDAY"}
          workout={"LADIES ONLY BOXERCISE & RESISTANCE TRAINING"}
          time_am={"10:00 - 11:00am"}
          time_pm={"13:00 - 14:00pm"}
          image={"/images/Fitness/Fitness16.jpeg"}
        />
      </div>
    </main>
  );
}
