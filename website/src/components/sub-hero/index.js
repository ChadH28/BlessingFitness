"use client";
import Image from "next/image";

export default function SubHero({ title, image }) {
  return (
    <header className="h-[50vh] w-screen relative">
      <div className="flex max-[1024px]:flex-col overflow-hidden h-[50vh]">
        <div className="hero-content flex flex-col justify-center items-center absolute h-full w-screen">
          <h1 className="z-10 text-white mx-[50px] max-[1024px]:mx-[20px]  max-[1024px]:text-2xl text-5xl">
            {title}
          </h1>
        </div>
        <div className="overflow-hidden w-screen h-full relative">
          <Image
            src={image ?? "/hero-images/home.jpg"}
            alt="hero image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </header>
  );
}
