/* eslint-disable @next/next/no-img-element */

function TableCard({day,workout,workout_desc,time_am,time_pm,image}){
  return(
    <div className="timetable relative flex min-w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-white/80 p-6 text-center backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-xl lg:min-w-96">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full scale-150 opacity-15"
          loading="lazy"
          fill="true"
          style={{objectFit:"cover"}}
          src={image}
          alt="Image 3"
        />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-2 px-4 py-8">
        <div className="mb-2 h-px w-12 bg-tertiary/50" />
        <h2 className="pb-2 text-2xl font-extrabold uppercase tracking-wider text-tertiary">{day}</h2>
        <h5 className="mt-2 text-lg font-bold uppercase text-foreground">{workout}</h5>
        <p className="text-sm leading-relaxed text-foreground/60">{workout_desc}</p>
        <span className="text-sm font-semibold text-foreground/70">{time_am}</span>
        {time_pm && <span className="text-sm font-semibold text-foreground/70">{time_pm}</span>}
        <a
          aria-label="booking enquiry"
          className="btn-primary mt-4 inline-block rounded-full bg-tertiary px-6 py-2 text-xs font-bold uppercase tracking-wider text-white"
          href={`https://wa.me/27787589451?text=Booking%20enquiry%20for%20${workout.toLowerCase()}%20on%20${
            day.charAt(0).toUpperCase()+day.slice(1).toLowerCase()
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
