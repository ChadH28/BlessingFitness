import Image from "next/image";
import Link from "next/link";

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
        <div className="md:w-1/2">
          <video
            className={`object-${
              cover ? "cover" : "contain"
            } h-[350px] h-inherit max-[1024px]:h-[350px] w-screen`}
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
          className={`image-container min-h-[350px] h-inherit max-[1024px]:h-[350px]  max-[1024px]:w-screen w-1/2 relative ${
            greyscale && "grayscale"
          }`}
        >
          <Image
            src={image ?? "/card-images/football.jpg"}
            alt="FN Rangers descriptive card"
            fill
            style={{ objectFit: "cover" }}
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
              <Link
                className="uppercase bg-[red] hover:bg-red-500 text-xs text-white font-extrabold w-fit rounded-sm px-4 py-2"
                href={buttonlink}
              >
                {buttonlabel ?? "find out"}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
