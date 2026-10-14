"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax on sunset background
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -10, scale: 1 },
          {
            yPercent: 12,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Line-by-line reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { yPercent: 120, rotate: 1 },
        {
          yPercent: 0,
          rotate: 0,
          stagger: 0.18,
          duration: 1.4,
          ease: "power4.out",
        }
      );

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.6"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-between py-16 md:py-24 px-6 md:px-12 lg:px-16 text-warm-ivory select-none bg-charcoal"
      data-cursor="view"
    >
      {/* Background Ocean Horizon Visual */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2600&q=85"
          alt="Da Nang Coastal Sun Shimmering Over Waters"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic dark gradients for legibility */}
        <div className="absolute inset-0 bg-charcoal/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/50" />
      </div>

      {/* Top Subtle Brand Marker */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex items-center justify-between text-xs font-sans tracking-[0.25em] uppercase text-warm-ivory/70">
        <span>COASTAL CONTINUUM</span>
        <span>DA NANG</span>
      </div>

      {/* Center Monumental Editorial Statement */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto my-auto text-center flex flex-col items-center justify-center">
        <h2 className="font-serif text-[clamp(54px,12.5vw,190px)] leading-[0.88] tracking-[-0.02em] font-light text-warm-ivory uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <span className="block overflow-hidden py-1">
            <span ref={line1Ref} className="block will-change-transform">
              THE SEA
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span
              ref={line2Ref}
              className="block italic font-light will-change-transform text-warm-ivory/90"
            >
              BECOMES
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span ref={line3Ref} className="block will-change-transform">
              HOME.
            </span>
          </span>
        </h2>

        <p
          ref={subtextRef}
          className="mt-6 md:mt-8 font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-warm-ivory/80 font-light"
        >
          AN ARCHITECTURAL ODE TO SHORELINE TRANQUILITY
        </p>
      </div>

      {/* Bottom Coordinates */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex items-center justify-between text-[11px] font-sans tracking-[0.25em] uppercase text-warm-ivory/60">
        <span>SOLARA RESIDENCES</span>
        <span>LIMITED RELEASE</span>
      </div>
    </section>
  );
}
