import Image from "next/image";
import Link from "next/link";

function TableCard({ day, workout, workout_desc, time_am, time_pm, image }) {
  return (
    <div class="timetable relative rounded-xl flex justify-center items-center flex-col text-center overflow-hidden w-100">
      <Image
        className="timetable-image absolute w-100 h-100 opacity-15"
        loading="lazy"
        fill
        style={{ objectFit: "cover" }}
        src={image}
        alt="Image 3"
      />
      <div
        className="relative flex justify-center items-center flex-col
    w-[inherit] h-[inherit] px-4 gap-1
    "
      >
        <h2 className="pb-1 text-[#a94442]">{day}</h2>
        <h5 className="mt-2">{workout}</h5>
        <p className="text-[#565656]">{workout_desc}</p>
        <span className="text-[#565656] text-sm">{time_am}</span>
        <span className="text-[#565656] text-sm">{time_pm}</span>
        <Link
          className="bg-[#df2828] mt-2 px-5 py-2 text-white uppercase rounded-md text-sm"
          href="https://calendly.com/mteroblessing/30min?month=2024-02"
          target="_blank"
        >
          Book
        </Link>
      </div>
    </div>
  );
}

export default TableCard;
