"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navdata } from "@/data/navdata";
import Image from "next/image";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass border-b border-white/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/" aria-label="Total Blessing home" className="hover:scale-105 transition-transform">
          <Image src="/images/logo3.png" alt="Total Blessing Fitness" width={72} height={72} priority />
        </a>

        <div className="flex gap-8">
          <ul className="hidden gap-6 md:flex">
            {navdata.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className={`group relative text-xs font-semibold uppercase tracking-wide transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary ${
                    pathname?.includes(link.url) ? "text-tertiary font-extrabold" : "text-foreground/80"
                  } ${link.type === "button" ? "rounded-md bg-tertiary px-3 py-2 text-white hover:text-white" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden gap-5 md:flex">
            <a href="https://wa.link/2fyjg5" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-tertiary fa-whatsapp hover:text-black" aria-label="WhatsApp" />
            </a>
            <a href="https://www.instagram.com/total.blessing/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-tertiary fa-instagram hover:text-black" aria-label="Instagram" />
            </a>
            <a href="https://www.facebook.com/muteroblessing/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-tertiary fa-facebook hover:text-black" aria-label="Facebook" />
            </a>
            <a href="https://www.youtube.com/@total.blessing" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-tertiary fa-youtube hover:text-black" aria-label="YouTube" />
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex items-center justify-center rounded-full p-2 text-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden"
        >
          🥊
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-full w-full border-b border-foreground/5 bg-background/95 px-6 py-8 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {navdata.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-bold uppercase tracking-wide transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary ${
                    pathname?.includes(link.url) ? "text-tertiary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-6 border-t border-foreground/5 pt-6">
            <a href="https://wa.link/2fyjg5" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-foreground/60 fa-whatsapp hover:text-tertiary hover:scale-110" aria-label="WhatsApp" />
            </a>
            <a href="https://www.instagram.com/total.blessing/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-foreground/60 fa-instagram hover:text-tertiary hover:scale-110" aria-label="Instagram" />
            </a>
            <a href="https://www.facebook.com/muteroblessing/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-foreground/60 fa-facebook hover:text-tertiary hover:scale-110" aria-label="Facebook" />
            </a>
            <a href="https://www.youtube.com/@total.blessing" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands text-foreground/60 fa-youtube hover:text-tertiary hover:scale-110" aria-label="YouTube" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}