import Image from "next/image";

function TableCard({ day, workout, workout_desc, time_am, time_pm, image }) {
  return (
    <div class="timetable relative rounded-xl flex justify-center items-center flex-col text-center overflow-hidden w-100">
      <div className="cover overflow-hidden flex justify-center items-center">
        <img
          className="timetable-image left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-120 h-100 scale-150 opacity-15"
          loading="lazy"
          fill
          style={{ objectFit: "cover" }}
          src={image}
          alt="Image 3"
        />
      </div>
      <div
        className="relative flex justify-center items-center flex-col
    w-[inherit] h-[inherit] px-4 gap-1
    "
      >
        <h2 className="pb-1 text-[#df2828]">{day}</h2>
        <h5 className="mt-2">{workout}</h5>
        <p className="text-[#565656]">{workout_desc}</p>
        <span className="text-[#565656] text-sm">{time_am}</span>
        <span className="text-[#565656] text-sm">{time_pm}</span>
        <a
          aria-label="booking enquiry"
          className="bg-[#df2828] mt-2 px-5 py-2 text-white uppercase rounded-md text-sm"
          href={`https://wa.me/27787589451?text=Booking%20enquiry%20for%20${workout.toLowerCase()}%20on%20${
            day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book via whatsapp
        </a>
      </div>
    </div>
  );
}

export default TableCard;
