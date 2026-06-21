/* eslint-disable @next/next/no-img-element */
"use client";

export default function SubHero({ title, subtitle, image }) {
  return (
    <header className="relative mt-20 h-[40vh] min-h-[320px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          priority="true"
          src={image ?? "/hero-images/home.jpg"}
          alt="hero image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto drop-shadow-sm">
          {title}
        </h1>
        <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
