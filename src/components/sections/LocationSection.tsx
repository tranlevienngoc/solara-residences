"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LOCATION_DISTANCES } from "@/lib/data";

export function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle image scale and parallax on scroll
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1, yPercent: -5 },
          {
            scale: 1.1,
            yPercent: 8,
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

      // Content fade in
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
            },
          }
        );
      }

      // Animate distance numbers count-up
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = LOCATION_DISTANCES[index].value;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetValue,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
          onUpdate: () => {
            const formatted = Math.floor(obj.val);
            el.innerText = formatted < 10 ? `0${formatted}` : `${formatted}`;
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="location"
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden flex flex-col justify-between py-16 md:py-24 px-6 md:px-12 lg:px-16 text-warm-ivory select-none bg-charcoal"
    >
      {/* Background Aerial Coastal Da Nang Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        data-cursor="view"
      >
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2600&q=85"
          alt="Da Nang Coastal Beach Aerial View"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic dark gradients for legibility */}
        <div className="absolute inset-0 bg-charcoal/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/60" />
      </div>

      {/* Top Header */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex items-center justify-between text-xs font-sans tracking-[0.25em] uppercase text-warm-ivory/80">
        <div className="flex items-center space-x-3">
          <span>02 — LOCATION</span>
          <span className="w-10 h-[1px] bg-warm-ivory/30" />
        </div>
        <span>DA NANG · VIETNAM</span>
      </div>

      {/* Center Monumental Editorial Statement */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1600px] mx-auto my-auto text-left"
      >
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm font-sans tracking-[0.35em] uppercase text-warm-ivory/70 block mb-4">
            SANCTUARY BY THE SHORE
          </span>
          <h2 className="font-serif text-[clamp(44px,7.5vw,115px)] leading-[0.95] font-light tracking-[-0.02em] text-warm-ivory">
            A rare
            <span className="block italic font-light text-warm-ivory/90">
              coastal address.
            </span>
          </h2>
          <p className="mt-6 md:mt-8 font-serif text-xl md:text-2xl lg:text-3xl text-warm-ivory/80 font-light tracking-wide max-w-xl">
            &ldquo;Minutes from the city, steps from the sea.&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom Location Indicators */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto pt-6 border-t border-warm-ivory/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {LOCATION_DISTANCES.map((item, idx) => (
            <div key={item.label} className="flex flex-col space-y-1">
              <div className="flex items-baseline space-x-2">
                <span
                  ref={(el) => {
                    numbersRef.current[idx] = el;
                  }}
                  className="font-serif text-3xl md:text-5xl font-light text-warm-ivory tabular-nums"
                >
                  00
                </span>
                <span className="font-sans text-xs tracking-[0.2em] text-warm-ivory/60 uppercase">
                  {item.unit}
                </span>
              </div>
              <span className="text-[11px] md:text-xs font-sans tracking-[0.2em] text-warm-ivory font-medium uppercase">
                {item.label}
              </span>
              <span className="text-[11px] text-warm-ivory/50 font-sans tracking-normal hidden sm:block">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
