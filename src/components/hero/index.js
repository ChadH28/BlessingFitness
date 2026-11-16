"use client";
import { useState, useEffect } from "react";

export default function Hero({ title, subtitle, image, slider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slider?.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slider?.length]);

  return (
    <header className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {slider && slider.length > 0 ? (
          slider.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide ?? "/hero-images/home.webp"}
                alt="Hero image"
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))
        ) : (
          <div className="absolute inset-0">
            <img
              src={image ?? "/hero-images/home.webp"}
              alt="Hero image"
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center">
        <h1 className="w-[70%] text-2xl font-extrabold capitalize text-white drop-shadow lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 w-[70%] text-lg font-extrabold capitalize text-white drop-shadow lg:text-xl">
          {subtitle}
        </p>
      </div>
    </header>
  );
}