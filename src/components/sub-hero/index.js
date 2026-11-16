/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function SubHero({ title, subtitle, image }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <header className="relative mt-20 flex h-[70vh] w-screen items-center justify-center overflow-hidden grain-overlay">
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
            className={`h-full w-full scale-105 object-cover transition-all duration-[4000ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${loaded ? 'scale-100' : 'scale-110'}`}
            loading="lazy"
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
