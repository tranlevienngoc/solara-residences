"use client";

import React, { useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { AmbientSound } from "./AmbientSound";

const NAV_LINKS = [
  { label: "RESIDENCES", href: "#residences" },
  { label: "LOCATION", href: "#location" },
  { label: "LIFESTYLE", href: "#lifestyle" },
  { label: "ARCHITECTURE", href: "#architecture" },
  { label: "MATERIALS", href: "#materials" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled away from top
      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navigation on scroll down, show on scroll up
      if (currentScrollY > 200 && currentScrollY > lastScrollY && !isMobileMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out px-6 md:px-12 lg:px-16 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? "py-4 bg-[#F2EFE8]/85 backdrop-blur-md border-b border-charcoal/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            : "py-7 md:py-9 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            aria-label="Solara Residences Da Nang"
            className="group flex flex-col items-start select-none"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.22em] font-light text-charcoal uppercase transition-opacity duration-300 group-hover:opacity-70">
              SOLARA
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.35em] text-charcoal/60 uppercase font-sans -mt-0.5">
              RESIDENCES
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10 text-[12px] uppercase font-sans tracking-[0.2em] font-medium text-charcoal/80">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-charcoal/80 hover:text-charcoal transition-colors duration-300 hover-line"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA & Ambient Soundscape */}
          <div className="hidden lg:flex items-center space-x-5">
            <AmbientSound />

            <MagneticButton href="#enquiry" dataCursor="explore">
              <span className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-charcoal/30 text-charcoal text-[11px] font-sans tracking-[0.22em] uppercase font-medium hover:bg-charcoal hover:text-warm-ivory transition-all duration-400 ease-out shadow-sm">
                ENQUIRE
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-3 -mr-3 text-charcoal flex flex-col justify-center items-center w-11 h-11 space-y-1.5 focus:outline-none"
          >
            <span
              className={`w-6 h-[1.5px] bg-charcoal transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-charcoal transition-opacity duration-200 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-charcoal transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F2EFE8] flex flex-col justify-between px-8 py-24 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-7 mt-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-charcoal/40 font-sans">
            Menu Navigation
          </span>
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl sm:text-4xl text-charcoal hover:italic transition-all duration-300 flex items-center justify-between border-b border-charcoal/10 pb-4"
              style={{
                transitionDelay: `${idx * 60}ms`,
              }}
            >
              <span>{link.label}</span>
              <span className="text-xs font-sans font-light text-charcoal/40">
                0{idx + 1}
              </span>
            </a>
          ))}

          <a
            href="#enquiry"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 w-full py-4 text-center rounded-full bg-charcoal text-warm-ivory text-xs font-sans tracking-[0.25em] uppercase font-medium"
          >
            REQUEST PRESENTATION
          </a>
        </div>

        {/* Mobile menu footer info */}
        <div className="pt-8 border-t border-charcoal/10 flex flex-col space-y-2 text-xs text-charcoal/60 font-sans tracking-wide">
          <div className="flex justify-between">
            <span>DA NANG, VIETNAM</span>
            <span>+84 (0) 236 888 999</span>
          </div>
          <p className="text-[11px] text-charcoal/40 pt-1">
            © 2026 Solara Residences. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
