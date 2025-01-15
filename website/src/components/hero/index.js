"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero({ title, image, slider }) {
  const slides = [
    "/images/Fitness/Fitness07.jpeg",
    "/images/Fitness/3Fitness.jpeg",
    "/images/adventures/IMG_0307.jpeg",
    "/images/home3.jpeg",
    "/images/bessingBlac.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Slide duration: 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [slides.length]);

  return (
    <header className="h-[70vh] w-screen relative">
      <div className="flex max-[1024px]:flex-col overflow-hidden h-[70vh]">
        <div className="hero-content flex flex-col justify-center items-center absolute h-full w-screen">
          <h1 className="z-10 text-white mx-[50px] max-[1024px]:mx-[20px]  max-[1024px]:text-2xl text-5xl">
            {title}
          </h1>
        </div>
        <div className="overflow-hidden w-screen h-full relative">
          {slider ? (
            slides.map((slide, index) => (
              <div
                key={index}
                className={`hero-image absolute inset-0 flex items-center justify-center transition-opacity transition-scale duration-700 ease-in-out w-screen h-[inherit] ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide ?? "/hero-images/home.jpg"}
                  alt="hero image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))
          ) : (
            <Image
              src={image ?? "/hero-images/home.jpg"}
              alt="hero image"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
