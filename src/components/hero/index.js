"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/new/bike.jpeg",
    label: "Find your trail",
    position: "62% 42%",
  },
  {
    image: "/images/new/hike.jpeg",
    label: "Move along the coast",
    position: "center center",
  },
  {
    image: "/images/new/box.jpeg",
    label: "Train with a local coach",
    position: "center 45%",
  },
  {
    image: "/images/new/kids.jpeg",
    label: "Get your kids fit and active",
    position: "center center",
  },
];

export default function Hero({
  title,
  subtitle,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const currentSlide = slides[currentIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || isHovered || isFocused) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isFocused, isHovered, isPaused, prefersReducedMotion]);

  return (
    <header
      className="relative isolate min-h-[88svh] overflow-hidden bg-[#17201d]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transform-gpu transition-[opacity,transform] duration-1000 ease-in-out ${
              currentIndex === index
                ? "scale-100 opacity-100"
                : "scale-[1.025] opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101916]/90 via-[#101916]/55 to-[#101916]/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col items-start justify-center px-5 pb-16 pt-28 text-white sm:px-8 md:px-12">
        <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-sun md:text-sm">
          Cape Town, South Africa · Fitness · Local adventures
        </p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.94] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-xl">
          {subtitle}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href="/adventures" className="btn-primary px-7">
            Explore experiences
          </Link>
          <Link
            href="/booking"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/65 bg-white/10 px-7 text-center text-xs font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Book a session
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() =>
              setCurrentIndex(
                (index) => (index - 1 + slides.length) % slides.length
              )
            }
            aria-label="Show previous hero image"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show slide ${index + 1}: ${slide.label}`}
              aria-pressed={currentIndex === index}
              className="inline-flex h-11 w-8 items-center justify-center rounded-full"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-7 bg-sun"
                    : "w-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((index) => (index + 1) % slides.length)
            }
            aria-label="Show next hero image"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          {!prefersReducedMotion && (
            <button
              type="button"
              onClick={() => {
                if (isPaused) {
                  setIsHovered(false);
                  setIsFocused(false);
                }
                setIsPaused((paused) => !paused);
              }}
              aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
              className="ml-1 inline-flex min-h-11 items-center rounded-full border border-white/40 bg-white/10 px-4 text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur-md transition hover:bg-white/20"
            >
              {isPaused ? "Play" : "Pause"}
            </button>
          )}
          <span className="ml-1 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-white/80 sm:ml-3">
            {currentSlide.label}
          </span>
        </div>
      </div>
    </header>
  );
}
