"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function Navigation() {
  useEffect(() => {
    // grab everything we need
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    // add event listeners
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);

  return (
    <nav className="bg-gray-100 w-full fixed z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="w-[100px] h-[auto] relative">
              <Link href="/">
                <Image
                  src="/images/logo3.png"
                  alt="Total Blessing Fitness and Travel Tours Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* hamburger */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
