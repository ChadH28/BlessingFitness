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
  return (
    <div
      className={`flex ${
        alt ? "flex-row-reverse" : "flex-row"
      } max-[1024px]:flex-col h-fit`}
    >
      {video ? (
        <div className="w-1/2 max-[1024px]:w-screen">
          <video
            className={`object-${
              cover ? "cover" : "contain"
            } h-[21.875rem] h-inherit max-[1024px]:h-[21.875rem] w-screen`}
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div
          className={`relative image-container overflow-hidden min-h-[21.875rem] w-1/2 max-[1024px]:w-screen`}
        >
          <img
            className={`
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute scale-[1.3]
            object-cover h-[inherit] w-auto ${greyscale && "grayscale"}`}
            src={image ?? "/card-images/football.jpg"}
            alt="FN Rangers descriptive card"
            sizes="(max-width: 1024px) 75vw, 100vw"
          />
        </div>
      )}

      <div
        style={{
          background: background,
          color: textc,
        }}
        className={`${
          background ? `bg-[${background}]` : `bg-white`
        }  content-container max-[1024px]:w-screen w-1/2 max-[1024px]:p-[20px] p-16 flex flex-col gap-5 justify-center`}
      >
        <h2
          data-aos={animate && (alt ? "fade-right" : "fade-left")}
          className={`whitespace-pre-line ${
            textc ? `text-[${textc}]` : null
          }  uppercase font-extrabold max-[1024px]:text-2xl text-4xl`}
        >
          {title}
        </h2>
        <p
          data-aos={animate && (alt ? "fade-right" : "fade-left")}
          className={`max-[1024px]:text-xl ${
            textc ? `text-[${textc}]` : `text-[grey]`
          } text-pretty text-base`}
          style={{ whiteSpace: "preserve-breaks" }}
        >
          {content}
        </p>
        {buttonlink && (
          <div data-aos={animate && (alt ? "fade-right" : "fade-left")}>
            {external ? (
              <a
                className="uppercase bg-[red] hover:bg-red-500 text-xs text-white font-extrabold w-fit rounded-sm px-4 py-2"
                href={buttonlink}
                target={external ? "_blank" : "_self"}
              >
                {buttonlabel ?? "find out"}
              </a>
            ) : (
              <a
                className="uppercase bg-[red] hover:bg-red-500 text-xs text-white font-extrabold w-fit rounded-sm px-4 py-2"
                href={buttonlink}
              >
                {buttonlabel ?? "find out"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
