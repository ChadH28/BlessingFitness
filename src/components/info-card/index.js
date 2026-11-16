/* eslint-disable @next/next/no_img_element */
export default function InfoCard({
  image,
  alt,
  title,
  content,
  buttonlink,
  buttonlabel,
  greyscale,
  background,
  textc,
  video,
  external,
  cover,
  animate,
}) {
  const flipped = Boolean(alt);
  return (
    <div className={`flex ${flipped ? "flex-row-reverse" : "flex-row"} max-[1024px]:flex-col`}>
      {video ? (
        <div className={`lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bento-shadow ${!cover && "bg-black"}`}>
          <video
            className={`object-${cover ? "cover" : "contain"} lg:h-[21.875rem] h-inherit h-96 w-screen`}
            controls
            playsInline
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:min-h-[25rem] lg:w-1/2">
          <img
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105 ${greyscale ? "grayscale" : ""}`}
            src={image ?? ""}
            alt={alt ? "Total Blessing" : title}
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <div
        style={{ background: background || "#ffffff", color: textc || "#171717" }}
        className={`content-container glass lg:col-span-7 rounded-2xl p-8 md:p-12 ${
          background ? `bg-[${background}]` : "bg-white"
        } flex flex-col gap-6 justify-center`}
      >
        <h2
          data-aos={animate && (alt ? "fade-right" : "fade-left")}
          data-aos-delay="100"
          className={`whitespace-pre-line text-3xl font-extrabold uppercase tracking-tight leading-[0.95] ${textc ? `text-[${textc}]` : "text-foreground"} md:text-4xl lg:text-5xl`}
        >
          {title}
        </h2>
        <p
          data-aos={animate && (alt ? "fade-right" : "fade-left")}
          data-aos-delay="200"
          className={`max-w-[65ch] text-pretty text-base leading-relaxed ${textc ? `text-[${textc}]` : "text-foreground/70"} md:text-xl`}
        >
          {content}
        </p>
        {buttonlink && (
          <div data-aos={animate && (alt ? "fade-right" : "fade-left")} data-aos-delay="300">
            <a
              className="btn-primary inline-block rounded-full bg-tertiary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
              href={buttonlink}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {buttonlabel ?? "Find out more"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}