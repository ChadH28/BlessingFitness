import PriceCard from "@/components/price-card";
import SubHero from "@/components/sub-hero";
import TableCard from "@/components/timetable-card";
import { pricelist } from "@/data/pageData";

export const metadata = {
  title: "Cape Town Personal Trainer | One-on-One & Group Fitness",
  description: "Achieve your fitness goals with expert training in Cape Town. Book solo, couple, or group sessions with a certified personal trainer today",
  openGraph: {
    title: "Cape Town Personal Trainer | One-on-One & Group Fitness",
    description: "Achieve your fitness goals with expert training in Cape Town. Book solo, couple, or group sessions with a certified personal trainer today.",
    url: "https://totalblessingfitnessandtraveltours.co.za/booking",
    images: [
      {
        url: "https://totalblessingfitnessandtraveltours.co.za/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Personal Fitness Trainer Booking",
      },
    ],
  },
};

export default function Booking() {
  return (
    <main className="mesh-light">
      <SubHero
        title={"Reserve Your Fitness Journey"}
        subtitle={"Book Your Classes and Training Sessions Today"}
        image={"/images/new/WhatsApp Image 2025-03-11 at 16.48.00.jpeg"}
      />
      <section className="mesh-dark-section relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div data-aos="fade-up" className="glass-dark overflow-hidden rounded-3xl p-8 text-white md:max-w-2xl">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-[0.95]">SPECIAL PACKAGE</h2>
            <div className="text-xl leading-relaxed ">
              <div className="flex flex-col gap-4">
                <p>5X private sessions including a 1 month membership for groups <strong>for only R3,200</strong></p>
                <p>Every member that pays 3 months upfront (R1,000 x 3) will get R200 discount from the initial R1,200 each month</p>
                <p>Every student that pays 3 months upfront (R950 x 3) will get R50 discount from the initial R1,000 each month</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12">
            <PriceCard image={"/images/Fitness/Fitness15.jpeg"} title={"Ladies only Saturday session"} pricinglist={pricelist.ladies_only} alt />
            <PriceCard image={"/images/Fitness/03Fitness.jpeg"} title={"Group Sessions"} pricinglist={pricelist.group} />
            <PriceCard image={"/images/Fitness/Fitness03.jpeg"} title={"Private Session"} pricinglist={pricelist.sessions} alt />
            <PriceCard image={"/images/Fitness/Fitness08.jpeg"} title={"1 ON 1"} pricinglist={pricelist.one_on} />
            <PriceCard image={"/images/Fitness/2Fitness.jpeg"} title={"2 ON 1"} pricinglist={pricelist.two_on} alt />
            <PriceCard image={"/images/Fitness/Fitness03.jpeg"} title={"3 ON 1"} pricinglist={pricelist.three_on} />
          </div>
          <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="glass-dark overflow-hidden rounded-3xl p-8 text-center md:p-16">
                <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight leading-[0.95] text-white md:text-5xl">Bootcamp Class Timetable – Get Fit at The Ring Reloaded boxing gym!</h2>
                <p className="text-white/70">Limited Spots Available – Book 24 Hours in Advance!</p>
                <p className="text-white/70">High-Energy Group Workouts • Expert Coaching • Results-Driven Training</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="timetable-container relative my-12">
            <TableCard day={"MONDAY"} workout={"HIIT"} workout_desc={"(High-Intensity Interval Training)"} time_am={"07:30 - 08:30am"} image={"/images/Fitness/03Fitness.jpeg"} />
            <TableCard day={"TUESDAY"} workout={"BOXING"} time_am={"07:30 - 08:30am"} image={"/images/Fitness/RESIZED/01Fitness.jpg"} />
            <TableCard day={"WEDNESDAY"} workout={"FULL BODY CONDITIONING"} time_am={"07:30 - 08:30am"} time_pm={"18:30 - 19:30pm"} image={"/images/Fitness/2Fitness.jpeg"} />
            <TableCard day={"THURSDAY"} workout={"STRENGTH TRAINING"} time_am={"07:30 - 08:30am"} image={"/images/Fitness/Fitness03.jpeg"} />
            <TableCard day={"FRIDAY"} workout={"BOXING"} time_am={"07:30 - 08:30am"} time_pm={"18:30 - 19:30pm"} image={"/images/Fitness/02Fitness.jpeg"} />
            <TableCard day={"SATURDAY"} workout={"LADIES ONLY BOXERCISE & RESISTANCE TRAINING"} time_am={"10:00 - 11:00am"} time_pm={"13:00 - 14:00pm"} image={"/images/Fitness/Fitness16.jpeg"} />
          </div>
        </div>
      </section>
    </main>
  );
}