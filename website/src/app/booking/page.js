import PriceCard from "@/components/price-card";
import SubHero from "@/components/sub-hero";
import TableCard from "@/components/timetable-card";
import { pricelist } from "@/data/pageData";

export const metadata = {
  title: "Booking a Private Fitness Trainer",
  description:
    "Check out a package that best suits you, book your Personal Fitness Trainer for Solo Training, Couple Training or Group Training",
  openGraph: {
    title: "Booking a Private Fitness Trainer",
    description:
      "Check out a package that best suits you, book your Personal Fitness Trainer for Solo Training, Couple Training or Group Training",
    url: "totalblessingfitnessandtraveltours.co.za/booking",
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

export default function Booking() {
  return (
    <main>
      <SubHero
        title={"Reserve Your Fitness Journey"}
        subtitle={"Book Your Classes and Training Sessions Today"}
        image={"/images/new/WhatsApp Image 2025-03-11 at 16.48.00.jpeg"}
      />

      {/* promotion section */}
      <div className="flex justify-center w-full h-auto">
        <div
          data-aos={"fade-up"}
          className="bg-black text-white sm:w-full lg:w-[500px] m-8 p-8 flex flex-col gap-2"
        >
          <h2 className="text-3xl">SPECIAL PACKAGE</h2>
          <div className="text-xl leading-relaxed ">
            <div className="flex flex-col gap-4">
              <p>
                5X private sessions including a 1 month membership for groups{" "}
                <strong>for only R3,200</strong>
              </p>
              <p>
                Every member that pays 3 months upfront (R1,000 x 3) will get
                R200 discount each month
              </p>
              <p>
                Every student that pays 3 months upfront (R950 x 3) will get R50
                discount each month
              </p>
            </div>
          </div>
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
        className="
        anchor_adj
        relative flex items-center justify-center h-1/2
      bg-fixed bg-center bg-cover custom-img
      "
      >
        <div className="table-heading flex flex-col items-center gap-2 p-10 justify-center w-100 text-[white] font-semibold">
          <h2 className="max-[1024px]:text-2xl text-4xl font-bold text-center uppercase">
            Bootcamp Class Timetable – Get Fit at The Ring Reloaded boxing gym!
          </h2>
          <p>Limited Spots Available – Book 24 Hours in Advance!</p>
          <p>
            High-Energy Group Workouts • Expert Coaching • Results-Driven
            Training
          </p>
        </div>
      </div>

      <div className="timetable-container relative my-12">
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
