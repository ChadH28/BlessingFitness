import PriceCard from "@/components/price-card";
import SubHero from "@/components/sub-hero";
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
        price: "R1,000",
        description: "per month",
      },
      {
        price: "R850",
        description: "per monthly student",
      },
      {
        price: "R150",
        description: "per dropin",
      },
    ],
    private: [
      {
        price: "R2,000",
        description: "10 sessions",
      },
      {
        price: "R450",
        description: "1 hour",
      },
      {
        price: "R350",
        description: "45 mins",
      },
      {
        price: "R250",
        description: "30 mins",
      },
    ],
    one_on: [
      {
        price: "R4,000",
        description: "10 sessions",
      },
    ],
    three_on: [
      {
        price: "R7,000",
        description: "10 sessions",
      },
      {
        price: "R750",
        description: "1 hour",
      },
    ],
    two_on: [
      {
        price: "R6,000",
        description: "10 sessions",
      },
      {
        price: "R650",
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
        <div className="bg-black text-white p-5 flex flex-col gap-2">
          <h2 className="text-3xl">SPECIAL PROMOTION</h2>
          <div className="text-xl leading-relaxed ">
            <p>
              Pay three months upfront and get three months of boxfit bootcamp
              by coach Blessing
            </p>
            <p>
              Use code <strong>TOTALBLESSING20</strong> for only R2700. (Pay
              R2700 for 3 months)
            </p>
          </div>
          <Link
            className="bg-white text-black uppercase p-4 w-fit text-xs"
            // href="https://calendly.com/mteroblessing/30min?month=2024-02"
            href="https://wa.link/2fyjg5"
            target="_blank"
          >
            Book Here
          </Link>
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
          pricinglist={pricelist.private}
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

      <div id="schedule" class="anchor_adj">
        <div class="table-heading">
          <h2>TIME TABLE</h2>
          <h4>(Bootcamp classes time table)</h4>
          <h5>Note: Classes are to be held at The Ring Reloaded Boxing Gym</h5>
          <p>
            24h bookings are essential for group classes, limited space
            available
          </p>
        </div>
      </div>
      <div class="timetable-container">
        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/03Fitness.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">MONDAY</h2>
          <h5>HIIT</h5>
          (High-Intensity Interval Training
          <span>07:30 - 08:30am</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>
        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/RESIZED/01Fitness.jpg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">TUESDAY</h2>
          <h5>BOXING</h5>
          <span>07:30 - 08:30am</span>

          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/boxing"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/2Fitness.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">WEDNESDAY</h2>
          <h5>FULL BODY CONDITIONING</h5>
          <span>07:30 - 08:30am</span>
          <span>18:30 - 19:30pm</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/Fitness03.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">THURSDAY</h2>
          <h5>STRENGTH TRAINING</h5>
          <span>07:30am - 08:30am</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/02Fitness.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">FRIDAY</h2>
          <h5>BOXING</h5>
          <span>07:30 - 08:30am</span>
          <span>18:30 - 19:30pm</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/Fitness16.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">SATURDAY</h2>
          <h5>LADIES ONLY BOXERCISE & RESISTANCE TRAINING</h5>
          <span>8:00 - 09:00am</span>
          <span>13:00 - 14:00pm</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>
      </div>
    </main>
  );
}
