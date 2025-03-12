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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000); // Keep duration consistent

    return () => clearInterval(interval);
  }, [slides.length]); // Remove unnecessary dependencies

  return (
    <header className="h-[70vh] w-screen relative z-10">
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
                className={`hero-image absolute inset-0 flex items-center justify-center w-screen h-[inherit] transition-transform duration-1000 ${
                  index === currentIndex ? "opacity-100 " : "opacity-0 "
                }`}
              >
                <Image
                  src={slide ?? "/hero-images/home.jpg"}
                  alt="hero image"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))
          ) : (
            <Image
              src={image ?? "/hero-images/home.jpg"}
              alt="hero image"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
