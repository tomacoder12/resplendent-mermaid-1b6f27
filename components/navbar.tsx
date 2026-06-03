"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import clsx from "clsx";
import { routes } from "@/constants";

export default function Navbar() {
  const [mounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) {
    return <>loading....</>;
  }

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 z-50 w-full transition-colors duration-300",
          scrolled ? "bg-[#282828]" : "bg-[#282828]/50",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
          {/* Logo */}
          <div className="text-2xl font-semibold tracking-wide">
            <Link href={routes.HOME}>Etoric</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-md font-medium uppercase tracking-wider">
            {/* Locations Dropdown */}
            <Link href={routes.EXPERIENCE}>Experience</Link>
            <Link href={routes.REAL_ESTATE}>Real Estate</Link>
          </div>

          {/* Mobile Hamburger */}
          <Button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden bg-transparent hover:bg-transparent cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span
                className={clsx(
                  "block h-[2px] w-6 bg-white transition-transform",
                  open && "rotate-45 translate-y-2",
                )}
              />
              <span
                className={clsx(
                  "block h-[2px] w-6 bg-white transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={clsx(
                  "block h-[2px] w-6 bg-white transition-transform",
                  open && "-rotate-45 -translate-y-2",
                )}
              />
            </div>
          </Button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "md:hidden fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center space-y-8 text-lg uppercase tracking-widest text-white"
        >
          {[
            { name: "Experience", link: routes.EXPERIENCE },
            { name: "Real Estate", link: routes.REAL_ESTATE },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setOpen(false)}
              className="hover:opacity-70 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Auth */}
        </div>
      </div>
    </>
  );
}
