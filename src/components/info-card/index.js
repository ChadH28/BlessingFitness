/* eslint-disable @next/next/no-img-element */
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
  const defaultBg = background || "#ffffff";

  return (
    <div
      className={`flex flex-col ${
        alt ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {video ? (
        <div className={`lg:w-1/2 w-full ${!cover && "bg-gray-100"}`}>
          <video
            className={`object-${cover ? "cover" : "contain"} h-80 lg:h-[350px] w-full`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative overflow-hidden lg:min-h-[400px] min-h-80 lg:w-1/2 w-full bg-gray-100">
          <img
            className={`absolute inset-0 w-full h-full object-cover ${
              greyscale && "grayscale"
            }`}
            src={image ?? ""}
            alt="BFT descriptive card"
            sizes="(max-width: 1024px) 100vw, 50vw"
            fetchPriority="low"
          />
        </div>
      )}

      <div
        style={{
          background: defaultBg,
          color: textc || "#1e2026",
        }}
        className="content-container w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col gap-5 justify-center"
      >
        {title && (
          <h2
            data-aos={animate && (alt ? "fade-right" : "fade-left")}
            className={`whitespace-pre-line uppercase font-extrabold text-2xl md:text-4xl ${
              textc ? "" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
        )}
        <p
          data-aos={animate && (alt ? "fade-right" : "fade-left")}
          className={`text-base leading-relaxed max-[1024px]:text-lg ${
            textc ? "" : "text-gray-500"
          }`}
          style={{ whiteSpace: "preserve-breaks" }}
        >
          {content}
        </p>
        {buttonlink && (
          <div data-aos={animate && (alt ? "fade-right" : "fade-left")}>
            <a
              className="inline-flex items-center justify-center h-10 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#dc2626] hover:bg-[#b91c1c] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              href={buttonlink}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {buttonlabel ?? "Find out"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
