/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";


import { useEffect, useState } from "react";
import { navdata } from "@/data/navdata";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled ? "glass border-b border-white/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:flex-nowrap max-[1024px]:px-4 max-[1024px]:flex-wrap">
        {/* Logo */}
        <a href="/" className="logo-container transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105">
          <img
            width={72}
            height={72}
            alt="Total Blessing Fitness"
            src="/images/logo3.png"
          />
        </a>

        <div className="flex gap-8">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {navdata.map((links, index) => (
              <li key={index}>
                <a
                  className={`group relative text-xs font-semibold uppercase tracking-wide transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary ${
                    currentPath.includes(links.url)
                      ? "text-tertiary font-extrabold"
                      : "text-foreground/80"
                  }
                  ${
                    links.type == "button"
                      ? "bg-tertiary px-3 py-2 text-white hover:text-white rounded-md"
                      : ""
                  }
                  `}
                  href={links.url}
                >
                  {links.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media Links */}
          <div className="hidden md:flex gap-5">
            <a href="https://wa.link/2fyjg5" target="_blank">
              <i
                className="fa-brands hover:text-black  text-tertiary fa-whatsapp"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.instagram.com/total.blessing/?hl=en"
              target="_blank"
            >
              <i
                className="fa-brands hover:text-black text-tertiary fa-instagram"
                aria-hidden="true"
              />
            </a>
            <a href="https://www.facebook.com/muteroblessing/" target="_blank">
              <i
                className="fa-brands hover:text-black text-tertiary fa-facebook"
                aria-hidden="true"
              />
            </a>
            <a href="https://www.youtube.com/@total.blessing" target="_blank">
              <i
                className="fa-brands hover:text-black text-tertiary fa-youtube"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`flex items-center justify-center rounded-full p-2 text-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden rotate-${
            isMobileMenuOpen ? "180" : "0"
          }`}
        >
          🥊
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full border-b border-foreground/5 bg-background/95 px-6 py-8 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-5">
              {navdata.map((links, index) => (
                <li key={index}>
                  <a
                    className={`block text-lg font-bold uppercase tracking-wide transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary ${
                      currentPath.includes(links.url)
                        ? "text-tertiary font-extrabold"
                      : "text-foreground/80"
                    }`}
                    href={links.url}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {links.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Media Links */}
            <div className="mt-8 flex gap-6 border-t border-foreground/5 pt-6">
              <a href="https://wa.link/2fyjg5" target="_blank">
                <i
                  className="text-foreground/60 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary hover:scale-110 fa-brands text-xl fa-whatsapp"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.instagram.com/total.blessing/?hl=en"
                target="_blank"
              >
                <i
                  className="text-foreground/60 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary hover:scale-110 fa-brands text-xl fa-instagram"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.facebook.com/muteroblessing/"
                target="_blank"
              >
                <i
                  className="text-foreground/60 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary hover:scale-110 fa-brands text-xl fa-facebook"
                  aria-hidden="true"
                />
              </a>
              <a href="https://www.youtube.com/@total.blessing" target="_blank">
                <i
                  className="text-foreground/60 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary hover:scale-110 fa-brands text-xl fa-youtube"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
