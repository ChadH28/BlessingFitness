"use client";
import { navdata } from "@/data/navdata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navigation() {
  const router = useRouter();

  useEffect(() => {
    const mobile_icon = document.getElementById("mobile-icon");
    const mobile_menu = document.getElementById("mobile-menu");
    const hamburger_icon = document.querySelector("#mobile-icon i");

    function openCloseMenu() {
      mobile_menu.classList.toggle("block");
      mobile_menu.classList.toggle("active");
    }

    function changeIcon(icon) {
      icon.classList.toggle("fa-xmark");
    }

    mobile_icon.addEventListener("click", openCloseMenu);
  }, []);

  return (
    <nav
      className="fixed
          z-50 shadow-lg
          w-full
    "
    >
      <div
        className="
          flex 
          items-center
          max-[1024px]:justify-between
          max-[1024px]:px-4
          max-[1024px]:flex-wrap
          w-full
          px-[50px]
          gap-3
          bg-background
      "
      >
        <Link href={"/"} className="logo-container my-[-10px]">
          <Image
            width={80}
            height={80}
            alt="fn rangers logo"
            src={"/logo/FN-Rangers.png"}
          />
        </Link>

        <ul
          className="hidden md:flex 
           pt-4
              md:justify-between 
              md:pt-0
              gap-6
        "
        >
          {navdata
            .filter((item) => item.type == "link")
            .map((links, index) =>
              links?.sublinks ? (
                <li key={index} className="relative group">
                  <Link
                    className={`max-[1024px]:text-sm max-[1024px]:font-normal text-xs font-bold
                    transition-all
                    hover: text-tertiary
                    ${
                      router.pathname === links.url
                        ? "text-tertiary font-extrabold"
                        : "text-text"
                    }`}
                    aria-label={`${links.label}`}
                    href={"#"}
                  >
                    {links.label}
                  </Link>
                  <ul className="absolute bg-black w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                    {links.sublinks.map((sublink, key) => (
                      <li
                        key={key}
                        className="text-sm hover:bg-tertiary px-3 capitalize leading-8"
                      >
                        <Link href={sublink.url}>{sublink.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    className={`max-[1024px]:text-sm max-[1024px]:font-normal text-xs font-bold
                      transition-all
                      hover: text-tertiary
                      ${
                        router.pathname === links.url
                          ? "text-tertiary font-extrabold"
                          : "text-text"
                      }`}
                    aria-label={`${links.label}`}
                    href={links.url}
                  >
                    {links.label}
                  </Link>
                </li>
              )
            )}
        </ul>

        <ul className="button-container flex max-[1024px]:justify-start max-[1024px]:mt-4 justify-end">
          {navdata
            .filter((item) => item.type == "button")
            .map((links, index) => (
              <li key={index}>
                <Link
                  className={
                    "registerbtn rounded-full transition-colors flex items-center justify-center text-xs font-bold h-auto px-[30px] py-1"
                  }
                  style={{
                    background:
                      router.pathname === links.url
                        ? "var(--primarycolorgradient)"
                        : "var(--tertiary)",
                    color:
                      router.pathname === links.url
                        ? "var(--text)"
                        : "var(--foreground)",
                  }}
                  aria-label={`${links.label}`}
                  href={links.url}
                >
                  {links.label}
                </Link>
              </li>
            ))}
        </ul>

        <button id="mobile-icon" className="md:hidden">
          <i onclick="changeIcon(this)" className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className="md:hidden flex justify-center mt-3 w-full">
        <div id="mobile-menu" className="mobile-menu absolute top-23 w-full">
          <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <a href="https://google.com" className="block pl-7">
                Home
              </a>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <a href="#" className="block pl-7">
                News
              </a>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
              <a href="#" className="block pl-11">
                Services{" "}
                <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i>
              </a>

              <ul className="bg-white z-10 text-gray-800 w-full">
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <a className="block pl-16" href="#">
                    Webdesign
                  </a>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <a className="block pl-16" href="#">
                    Digital marketing
                  </a>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <a className="block pl-16" href="#">
                    SEO
                  </a>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <a className="block pl-16" href="#">
                    Ad campaigns
                  </a>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <a className="block pl-16" href="#">
                    UX Design
                  </a>
                </li>
              </ul>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <a href="#" className="block pl-7">
                About
              </a>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <a href="#" className="block pl-7">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
