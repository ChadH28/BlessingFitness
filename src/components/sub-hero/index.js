"use client";
import Image from "next/image";

export default function SubHero({ title, subtitle, image }) {
  return (
    <header className="relative mt-20 flex h-[70vh] w-full items-center justify-center overflow-hidden">
      <Image
        priority
        sizes="100vw"
        fill
        className="object-cover"
        src={image ?? "/hero-images/home.jpg"}
        alt="Total Blessing sub-hero"
      />
      <div className="relative z-10 flex flex-col items-center px-6 text-center uppercase">
        <h1 className="text-2xl font-extrabold text-white drop-shadow md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base text-white md:text-xl">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
