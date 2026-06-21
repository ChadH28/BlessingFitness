/* eslint-disable @next/next/no-img-element */

function TableCard({ day, workout, workout_desc, time_am, time_pm, image }) {
  return (
    <div className="timetable relative flex justify-center items-center flex-col text-center overflow-hidden min-w-full lg:min-w-96">
      <div className="cover overflow-hidden flex justify-center items-center">
        <img
          className="timetable-image left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-120 h-100 scale-150 opacity-10"
          loading="lazy"
          style={{ objectFit: "cover" }}
          src={image}
          alt={workout}
        />
      </div>
      <div className="relative flex justify-center items-center flex-col w-full h-full px-6 py-8 gap-2">
        <h2 className="pb-2 text-[#dc2626] font-black uppercase tracking-wider text-lg">{day}</h2>
        <h5 className="font-bold text-gray-800 uppercase">{workout}</h5>
        <p className="text-gray-500 text-sm">{workout_desc}</p>
        <span className="text-gray-400 text-sm">{time_am}</span>
        <span className="text-gray-400 text-sm">{time_pm}</span>
        <a
          aria-label="booking enquiry"
          className="bg-[#dc2626] mt-3 px-5 py-2.5 text-white font-bold uppercase rounded-lg text-xs tracking-wider transition-all duration-200 hover:bg-[#b91c1c] shadow-sm"
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
