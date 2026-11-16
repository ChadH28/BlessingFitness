import Image from "next/image";
import { createWhatsAppLink } from "@/lib/whatsapp";

function TableCard({ day, workout, workout_desc, time_am, time_pm, image }) {
  const times = [time_am, time_pm].filter(Boolean);
  const enquiryLink = createWhatsAppLink(
    `Hi Total Blessing, I'd like to enquire about ${workout} on ${day}${times.length ? ` at ${times.join(" or ")}` : ""}.`
  );

  return (
    <article className="timetable group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl bg-[#17201d] p-5 text-white shadow-lg sm:p-6">
      {image && (
        <Image
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
          alt=""
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101916]/95 via-[#101916]/70 to-[#101916]/20"
      />
      <div className="relative">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sun">
          {day}
        </p>
        <h3 className="mt-2 text-2xl font-black uppercase leading-tight">
          {workout}
        </h3>
        {workout_desc && (
          <p className="mt-1 text-sm leading-relaxed text-white/75">
            {workout_desc}
          </p>
        )}
        <ul className="mt-4 space-y-1">
          {times.map((time) => (
            <li
              key={time}
              className="flex items-center gap-2 text-sm font-semibold text-white/90"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sun" />
              {time}
            </li>
          ))}
        </ul>
        <a
          aria-label={`Enquire about ${workout} on ${day}`}
          className="btn-primary mt-5 w-full sm:w-auto"
          href={enquiryLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default TableCard;
