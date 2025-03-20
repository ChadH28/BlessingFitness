"use client";

import { useState } from "react";
import { navdata } from "@/data/navdata";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed z-50 shadow-lg w-full bg-background">
      <div className="flex items-center justify-between px-[50px] py-[20px] md:flex-nowrap max-[1024px]:px-4 max-[1024px]:flex-wrap">
        {/* Logo */}
        <Link href="/" className="logo-container">
          <Image
            width={80}
            height={80}
            alt="FN Rangers Logo"
            src="/images/logo3.png"
          />
        </Link>

        <div className="flex gap-8">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {navdata.map((links, index) => (
              <li key={index}>
                <Link
                  className={`text-xs font-semibold uppercase transition-all hover:text-tertiary ${
                    pathname === links.url
                      ? "text-tertiary font-extrabold"
                      : "text-text"
                  }`}
                  href={links.url}
                >
                  {links.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Links */}
          <div className="hidden md:flex gap-4">
            <Link href="https://wa.link/2fyjg5" target="_blank">
              <i
                className="fa-brands hover:text-black  text-tertiary fa-whatsapp"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://www.instagram.com/total.blessing/?hl=en"
              target="_blank"
            >
              <i
                className="fa-brands hover:text-black text-tertiary fa-instagram"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://www.facebook.com/muteroblessing/"
              target="_blank"
            >
              <i
                className="fa-brands hover:text-black text-tertiary fa-facebook"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@total.blessing"
              target="_blank"
            >
              <i
                className="fa-brands hover:text-black text-tertiary fa-youtube"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <i
            className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}
          />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background w-full flex flex-col items-start py-6">
            <ul className="flex flex-col gap-4">
              {navdata.map((links, index) => (
                <li key={index}>
                  <Link
                    className={`text-sm font-bold uppercase transition-all hover:text-tertiary ${
                      pathname === links.url
                        ? "text-tertiary font-extrabold"
                        : "text-text"
                    }`}
                    href={links.url}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {links.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Social Media Links */}
            <div className="flex gap-4 mt-4">
              <Link href="https://wa.link/2fyjg5" target="_blank">
                <i
                  className="fa-brands text-tertiary fa-whatsapp"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="https://www.instagram.com/total.blessing/?hl=en"
                target="_blank"
              >
                <i
                  className="fa-brands text-tertiary fa-instagram"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="https://www.facebook.com/muteroblessing/"
                target="_blank"
              >
                <i
                  className="fa-brands text-tertiary fa-facebook"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@total.blessing"
                target="_blank"
              >
                <i
                  className="fa-brands text-tertiary fa-youtube"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
