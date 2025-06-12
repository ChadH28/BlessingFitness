/* eslint-disable @next/next/no-img-element */
"use client";

export default function SubHero({ title, subtitle, image }) {
  return (
    <header className="h-[50vh] w-screen relative mt-20">
      <div className="relative flex max-[1024px]:flex-col overflow-hidden h-[inherit]">
        <div className="uppercase hero-content flex flex-col justify-center items-center absolute h-full w-screen">
          <h1 className="drop-shadow-xs z-10 text-white mx-14 max-[1024px]:mx-5  max-[1024px]:text-2xl text-5xl font-[800] text-center">
            {title}
          </h1>
          <p className="z-10 text-white mx-[50px] max-[1024px]:mx-5  max-[1024px]:text-l text-xl font-[400] text-center">
            {subtitle}
          </p>
        </div>
        <span className="overflow-hidden subhero relative w-screen h-[inherit]">
          <img
            className="w-screen h-[inherit]
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute scale-125
            "
            priority="true"
            src={image ?? "/hero-images/home.jpg"}
            alt="hero image"
            fill="true"
            style={{ objectFit: "cover" }}
          />
        </span>
      </div>
    </header>
  );
}
