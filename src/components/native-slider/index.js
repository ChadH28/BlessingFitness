"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function NativeSlider({
  list,
  images = false,
  adventure = false,
  autoplay = true,
  autoplaySpeed = 2500,
}) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const slideCount = list.length;

  const scrollToSlide = useCallback(
    (index) => {
      if (!containerRef.current) return;
      const slides = containerRef.current.querySelectorAll("[data-slide]");
      const slide = slides[index];
      if (slide) {
        slide.scrollIntoView({ behavior: "smooth", inline: "start" });
        setCurrentIndex(index);
      }
    },
    []
  );

  // Autoplay loop
  useEffect(() => {
    if (!autoplay || slideCount === 0) return;
    timerRef.current = setInterval(() => {
      const next = (currentIndex + 1) % slideCount;
      scrollToSlide(next);
    }, autoplaySpeed);
    return () => clearInterval(timerRef.current);
  }, [autoplay, autoplaySpeed, currentIndex, slideCount, scrollToSlide]);

  // Sync currentIndex with scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const handleScroll = () => {
      const slides = container.querySelectorAll("[data-slide]");
      if (slides.length === 0) return;
      const slideWidth = slides[0].offsetWidth;
      if (slideWidth > 0) {
        const index = Math.round(container.scrollLeft / slideWidth);
        setCurrentIndex(Math.min(Math.max(index, 0), slides.length - 1));
      }
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [slideCount]);

  const renderSlide = (item, index) => {
    const base = `snap-center shrink-0 w-full md:w-[33.33%] flex-none p-2 no-scrollbar`;

    if (adventure) {
      return (
        <a
          key={index}
          data-slide={index}
          aria-label={`Booking enquiry for ${item.title}`}
          href={`https://wa.me/27787589451?text=Booking%20enquiry%20for%20${encodeURIComponent(
            item.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} block`}
        >
          <div className="h-80 w-full relative overflow-hidden rounded-2xl">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
              src={item.image}
              alt={`Activity - ${item.title}`}
              loading="lazy"
            />
          </div>
          <h3 className="text-[#df2828] text-lg my-1 text-center">
            {item.title}
          </h3>
          <p className="text-[gray] text-center text-sm px-2">
            {item.description}
          </p>
        </a>
      );
    }

    if (images) {
      return (
        <div key={index} data-slide={index} className={`${base} h-auto`}>
          <div className="h-[21.875rem] w-full relative overflow-hidden rounded-2xl">
            <Image
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              src={item.image}
              alt={item.title ?? `Activity ${index + 1}`}
              loading="lazy"
            />
          </div>
        </div>
      );
    }

    return (
      <div key={index} data-slide={index} className={`${base} flex items-center justify-center`}>
        <p className="uppercase text-center mx-auto text-[grey] font-extrabold text-2xl relative">
          {item.text}
        </p>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto scroll-snap-x snap-mandatory no-scrollbar"
      role="region"
      aria-label="Carousel"
    >
      {list.map(renderSlide)}
    </div>
  );
}