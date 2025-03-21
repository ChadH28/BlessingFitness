import Image from "next/image";

export default function PriceCard({
  image,
  alt,
  title,
  greyscale,
  pricinglist,
}) {
  return (
    <div
      className={`flex ${
        alt ? "flex-row-reverse" : "flex-row"
      } max-[1024px]:flex-col`}
    >
      <div
        className={`image-container overflow-hidden h-[21.875rem] max-[1024px]:h-[21.875rem]  max-[1024px]:w-screen w-1/2 relative ${
          greyscale && "grayscale"
        }`}
      >
        <img
          className={`image-container relative ${greyscale && "grayscale"}`}
          src={image ?? "/card-images/football.jpg"}
          alt="FN Rangers descriptive card"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 75vw, 100vw"
        />
      </div>
      <div
        className={`content-container max-[1024px]:w-screen w-1/2 max-[1024px]:p-[20px] px-10 py-5 flex flex-col gap-5 justify-center ${
          alt ? "text-right" : "text-left"
        }`}
      >
        <h2 className="uppercase font-extrabold text-red-800 max-[1024px]:text-2xl text-3xl">
          {title}
        </h2>
        {pricinglist &&
          pricinglist.map((pricing, index) => (
            <p key={index} className="max-[1024px]:text-sm text-l">
              <strong className="text-3xl text-red-800">{pricing.price}</strong>{" "}
              / {pricing.description}
            </p>
          ))}
      </div>
    </div>
  );
}
