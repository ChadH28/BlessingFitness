import Image from "next/image";
import Link from "next/link";

export default function SubHero({
  title,
  subtitle,
  image,
  eyebrow = "Total Blessing · Cape Town",
  buttonlink,
  buttonlabel,
  secondarylink,
  secondarylabel,
}) {
  return (
    <header className="relative isolate flex min-h-[68svh] items-end overflow-hidden bg-[#17201d] pb-14 pt-32 text-white sm:pb-20 md:min-h-[74svh]">
      <Image
        priority
        sizes="100vw"
        fill
        className="object-cover object-center"
        src={image ?? "/images/adventureHome.jpeg"}
        alt=""
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#101916]/85 via-[#101916]/45 to-[#101916]/10"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-sun md:text-sm">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.96] tracking-tight sm:text-5xl md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-xl">
            {subtitle}
          </p>
        )}
        {(buttonlink || secondarylink) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {buttonlink && (
              <Link href={buttonlink} className="btn-primary px-7">
                {buttonlabel ?? "Find out more"}
              </Link>
            )}
            {secondarylink && (
              <Link
                href={secondarylink}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/65 bg-white/10 px-7 text-center text-xs font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:bg-white/20"
              >
                {secondarylabel ?? "Explore"}
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
