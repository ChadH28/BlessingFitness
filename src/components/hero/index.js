/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";

export default function Hero({ title, subtitle, image, slider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    <header className="h-[80vh] w-screen relative z-10">
      <div className="overflow-hidden w-[inherit] h-[inherit]">
        <div className="hero-content flex flex-col justify-center items-center absolute h-full w-screen">
          <h1 className="z-10 drop-shadow-xs text-white capitalize w-[70%] text-center lg:mx-auto mx-5 text-2xl lg:text-5xl font-extrabold">
            {title}
          </h1>
          <p className="z-10 drop-shadow-xs text-white capitalize w-[70%] text-center lg:mx-auto mx-5 text-lg lg:text-xl font-extrabold">{subtitle}</p>
        </div>
        <div className="w-[inherit] h-[inherit] relative hero-image">
          {slider ? (
            slider.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-[inherit] h-[inherit] transition-opacity duration-[1000ms] ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  className={`absolute w-full h-full transition-all ease-in-out duration-[4000ms] 
                    ${
                      index === currentIndex
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  src={slide ?? "/hero-images/home.webp"}
                  alt="hero image"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 75vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))
          ) : (
            <img
              className={`absolute w-full h-full`}
              src={image ?? "/hero-images/home.webp"}
              alt="hero image"
              fetchPriority="high"
              sizes="(max-width: 1024px) 75vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
