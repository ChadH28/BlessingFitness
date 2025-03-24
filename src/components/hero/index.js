"use client";
import { useState, useEffect } from "react";

export default function Hero({ title, image, slider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 4000); // Change every 4s

    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    <header className="h-[40vh] lg:h-[70vh] w-screen relative z-10">
      <div className="flex max-[1024px]:flex-col overflow-hidden h-[40vh] lg:h-[70vh]">
        <div className="hero-content flex flex-col justify-center items-center absolute h-full w-screen">
          <h1 className="z-10 text-white mx-[50px] max-[1024px]:mx-[20px] max-[1024px]:text-2xl text-5xl">
            {title}
          </h1>
        </div>

        <div className="overflow-hidden w-screen h-full relative">
          {slider ? (
            slider.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  className={`absolute inset-0 object-cover w-screen h-[inherit] transition-all ease-in-out duration-[4000ms] 
                    ${
                      index === currentIndex
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  src={slide ?? "/hero-images/home.jpg"}
                  alt="hero image"
                  fill='true'
                  priority="true"
                />
              </div>
            ))
          ) : (
            <img
              src={image ?? "/hero-images/home.jpg"}
              alt="hero image"
              fill='true'
              priority='true'
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
