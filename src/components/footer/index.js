import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Our story", href: "/about" },
  { label: "Fitness", href: "/fitness" },
  { label: "Outdoor training", href: "/fitness/outdoor-training" },
  { label: "Adventures", href: "/adventures" },
  { label: "Booking options", href: "/booking" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-paper px-5 py-14 text-foreground sm:px-8 md:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-foreground/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Total Blessing home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/logo3.png"
                alt=""
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
              <span className="max-w-[13rem] text-xs font-extrabold uppercase leading-relaxed tracking-[0.12em]">
                Total Blessing Fitness & Travel Tours
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/65">
              Fitness coaching and guided Cape Town experiences, led by a local
              team.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-tertiary">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition hover:text-tertiary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-tertiary">
              Find us
            </h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.google.com/?q=Ring+Reloaded+boxing+gym,+277+Main+Rd,+Sea+Point,+Cape+Town"
              className="mt-4 block text-sm leading-relaxed text-foreground/70 transition hover:text-tertiary"
            >
              Ring Reloaded Boxing Gym
              <br />
              277 Main Rd, Sea Point
              <br />
              Cape Town, 8060
            </a>
            <a
              href="tel:+27787589451"
              className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-foreground transition hover:text-tertiary"
            >
              +27 78 758 9451
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Total Blessing Fitness & Travel Tours.
            All rights reserved.
          </p>
          <a
            href="https://wa.me/27787589451"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-bold uppercase tracking-[0.12em] text-tertiary transition hover:text-foreground"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
