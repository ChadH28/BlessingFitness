import Image from "next/image";
import Link from "next/link";

export default function InfoCard({
  image,
  title,
  content,
  buttonlink,
  buttonlabel,
}) {
  return (
    <div className={`relative`}>
      <div
        className={`image-container h-[400px] max-[1024px]:h-[350px]  w-100 relative ${
          greyscale && "grayscale"
        }`}
      >
        <img
          src={image ?? "/card-images/football.jpg"}
          alt="FN Rangers descriptive card"
          fill='true'
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 75vw, 100vw"
        />
      </div>
      <div className="content-container w-100 max-[1024px]:p-[20px] p-16 flex flex-col gap-5 justify-center">
        <h2 className="whitespace-pre-line uppercase font-extrabold text-tertiary max-[1024px]:text-2xl text-4xl">
          {title}
        </h2>
        <p
          className="max-[1024px]:text-sm text-base"
          style={{ whiteSpace: "preserve-breaks" }}
        >
          {content}
        </p>
        {buttonlink && (
          <a
            className="uppercase bg-[red] hover:bg-red-500 text-xs text-white font-extrabold w-fit px-4 py-2"
            href={buttonlink}
          >
            {buttonlabel ?? "find out"}
          </a>
        )}
      </div>
    </div>
  );
}
