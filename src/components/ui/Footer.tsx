"use client";

import React from "react";
import { MagneticButton } from "./MagneticButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#EAE6DD] text-charcoal pt-24 pb-14 px-6 md:px-12 lg:px-16 border-t border-charcoal/15 select-none">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-charcoal/15 items-start">
          {/* Brand Colophon */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-[0.06em] text-charcoal uppercase">
              SOLARA
            </h3>
            <span className="text-xs font-sans tracking-[0.35em] text-charcoal/60 uppercase block">
              RESIDENCES · DA NANG, VIETNAM
            </span>
            <p className="font-serif italic text-base md:text-lg text-charcoal/70 max-w-md pt-2">
              A collection of 28 contemporary beachfront residences shaped by light, maritime horizons and timeless architectural discipline.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-sans tracking-[0.25em] text-charcoal/40 uppercase block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-[0.2em] uppercase text-charcoal/80">
              <li>
                <a href="#hero" className="hover:text-charcoal hover-line">
                  Overview
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-charcoal hover-line">
                  The Story
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-charcoal hover-line">
                  Location
                </a>
              </li>
              <li>
                <a href="#residences" className="hover:text-charcoal hover-line">
                  Residences
                </a>
              </li>
              <li>
                <a href="#lifestyle" className="hover:text-charcoal hover-line">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-charcoal hover-line">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-charcoal hover-line">
                  Materials
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-charcoal hover-line">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Press */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-sans tracking-[0.25em] text-charcoal/40 uppercase block">
              SOCIAL &amp; ARCHIVE
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-[0.2em] uppercase text-charcoal/80">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  Architectural Film
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top magnetic trigger */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between h-full pt-2">
            <MagneticButton onClick={scrollToTop} dataCursor="explore">
              <button
                type="button"
                aria-label="Scroll back to top"
                className="w-16 h-16 rounded-full border border-charcoal/20 flex flex-col items-center justify-center text-charcoal hover:bg-charcoal hover:text-warm-ivory transition-all duration-400"
              >
                <span className="text-sm">↑</span>
                <span className="text-[8px] font-sans tracking-[0.2em] uppercase mt-0.5">
                  TOP
                </span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Colophon & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans tracking-[0.2em] text-charcoal/50 uppercase gap-4">
          <p>© 2026 SOLARA RESIDENCES. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-charcoal">
              PRIVACY POLICY
            </a>
            <span>·</span>
            <a href="#terms" className="hover:text-charcoal">
              LEGAL TERMS
            </a>
            <span>·</span>
            <a href="#disclaimer" className="hover:text-charcoal">
              DISCLAIMER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
