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

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10 lg:py-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            width={64}
            height={64}
            className="w-14 lg:w-16"
            alt="Total Blessing Fitness Logo"
            src="/images/logo3.png"
          />
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navdata.map((links, index) => (
              <li key={index}>
                <a
                  className={`text-xs font-semibold uppercase tracking-wider transition-all duration-200 px-3 py-2 rounded-lg ${
                    currentPath.includes(links.url)
                      ? "text-[#dc2626] bg-red-50 font-bold"
                      : "text-gray-600 hover:text-[#dc2626] hover:bg-gray-50"
                  }
                  ${
                    links.type == "button"
                      ? "bg-[#dc2626] text-white hover:bg-[#b91c1c] hover:text-white shadow-sm"
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
          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-gray-200">
            <a
              href="https://wa.link/2fyjg5"
              target="_blank"
              className="text-gray-500 hover:text-[#dc2626] transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/total.blessing/?hl=en"
              target="_blank"
              className="text-gray-500 hover:text-[#dc2626] transition-colors"
            >
              <i className="fa-brands fa-instagram text-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/muteroblessing/"
              target="_blank"
              className="text-gray-500 hover:text-[#dc2626] transition-colors"
            >
              <i className="fa-brands fa-facebook text-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@total.blessing"
              target="_blank"
              className="text-gray-500 hover:text-[#dc2626] transition-colors"
            >
              <i className="fa-brands fa-youtube text-lg" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-6">
            <ul className="flex flex-col gap-2">
              {navdata.map((links, index) => (
                <li key={index}>
                  <a
                    className={`block text-sm font-bold uppercase tracking-wider transition-all hover:text-[#dc2626] px-3 py-2 rounded-lg ${
                      currentPath.includes(links.url)
                        ? "text-[#dc2626] bg-red-50"
                        : "text-gray-700"
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
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <a href="https://wa.link/2fyjg5" target="_blank" className="text-gray-500 hover:text-[#dc2626] transition-colors">
                <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/total.blessing/?hl=en"
                target="_blank"
                className="text-gray-500 hover:text-[#dc2626] transition-colors"
              >
                <i className="fa-brands fa-instagram text-xl" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/muteroblessing/"
                target="_blank"
                className="text-gray-500 hover:text-[#dc2626] transition-colors"
              >
                <i className="fa-brands fa-facebook text-xl" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/@total.blessing" target="_blank" className="text-gray-500 hover:text-[#dc2626] transition-colors">
                <i className="fa-brands fa-youtube text-xl" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
