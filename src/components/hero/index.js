import Image from "next/image";
import Link from "next/link";

export default function Hero({
  title,
  subtitle,
  image = "/images/hiking/Helderberg_Farm1.png",
  imageAlt = "A hiker taking in the Cape mountain landscape",
}) {
  return (
    <header className="relative isolate min-h-[88svh] overflow-hidden bg-[#17201d]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_42%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#101916]/90 via-[#101916]/55 to-[#101916]/10"
      />
      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col items-start justify-center px-5 pb-16 pt-28 text-white sm:px-8 md:px-12">
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
      </div>
    </header>
  );
}
