/* eslint-disable @next/next/no-img-element */

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
      <div className={`relative lg:col-span-5 aspect-[4/3] w-full overflow-hidden rounded-2xl bento-shadow ${greyscale&&"grayscale"}`}>
        <img
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105`}
          src={image??"/card-images/football.jpg"}
          alt="FN Rangers descriptive card"
          fill="true"
          style={{objectFit:"cover"}}
          sizes="(max-width: 1024px) 75vw, 100vw"
        />
      </div>
      <div className={`content-container glass lg:col-span-7 rounded-2xl p-8 md:p-12 flex flex-col gap-6 justify-center ${alt?"lg:text-right":"lg:text-left"}`}>
        <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-[0.95] text-tertiary md:text-4xl">
          {title}
        </h2>
        {pricinglist&&pricinglist.map((pricing,index)=>(
          <p key={index} className="max-w-[65ch] text-base leading-relaxed text-foreground/70 md:text-xl">
            <strong className="text-3xl font-extrabold text-tertiary">{pricing.price}</strong>{" "}
            <span className="text-sm uppercase tracking-wider text-foreground/50">/ {pricing.description}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
