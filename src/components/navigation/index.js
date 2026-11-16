"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navdata } from "@/data/navdata";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const isCurrentPage = (url) =>
    pathname === url || (url !== "/" && pathname?.startsWith(`${url}/`));

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-paper shadow-sm backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Total Blessing Fitness and Travel Tours home"
          className="shrink-0 rounded-full"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo3.png"
            alt=""
            width={60}
            height={60}
            priority
            className="h-14 w-14 object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navdata.map((link) => {
              const active = isCurrentPage(link.url);
              return (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full text-xs font-extrabold uppercase tracking-[0.12em] transition-colors hover:text-tertiary ${
                      link.type === "button"
                        ? "btn-primary px-5 text-white hover:text-white"
                        : active
                          ? "text-tertiary"
                          : "text-foreground/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-foreground md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {open ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-foreground/10 bg-paper px-5 pb-6 pt-3 shadow-xl md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navdata.map((link) => {
              const active = isCurrentPage(link.url);
              return (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-sm font-extrabold uppercase tracking-[0.12em] ${
                      active
                        ? "bg-tertiary/10 text-tertiary"
                        : "text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
