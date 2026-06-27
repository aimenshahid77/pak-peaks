"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Tours", href: "#tours" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/40 backdrop-blur-sm shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-5 md:px-12 xl:px-16">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur-md">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M3 19 9 8l4 6 3-4 5 9H3Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </span>
          <span>
            <span className="block text-sm font-black uppercase leading-none tracking-normal text-white">
              Pak Peaks
            </span>
            <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.24em] text-white/45">
              Travels & Tours
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex list-none items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[11px] font-medium text-white/66 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-sky-100"
            aria-label="Search trips"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="m14.2 14.2 2.3 2.3M8.8 15.2a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
          <Link href="#" className="text-[11px] font-bold text-white">
            Plan Your Trip
          </Link>
        </div>

        <button
          className="flex flex-col gap-[5px] lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {[0, 1, 2].map((line) => (
            <span
              key={line}
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${line === 0 && mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                } ${line === 1 && mobileOpen ? "opacity-0" : ""} ${line === 2 && mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
            />
          ))}
        </button>
      </div>

      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-8 border border-white/10 bg-black/86 px-5 py-5 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex list-none flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-white/72 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
