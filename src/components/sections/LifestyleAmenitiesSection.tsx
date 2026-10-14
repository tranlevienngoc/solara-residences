"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AMENITIES_DATA } from "@/lib/data";
import { Amenity } from "@/lib/types";

export function LifestyleAmenitiesSection() {
  const [activeAmenity, setActiveAmenity] = useState<Amenity>(AMENITIES_DATA[0]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const floatingImageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let targetX = mousePos.x;
    let targetY = mousePos.y;
    let currentX = mousePos.x;
    let currentY = mousePos.y;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (floatingImageRef.current) {
        floatingImageRef.current.style.transform = `translate3d(${currentX + 30}px, ${
          currentY - 140
        }px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [mousePos]);

  return (
    <section
      id="lifestyle"
      ref={sectionRef}
      className="relative w-full bg-[#F2EFE8] py-28 md:py-44 lg:py-52 px-6 md:px-12 lg:px-16 text-charcoal border-t border-charcoal/10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-28">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 font-medium">
                SANCTUARY &amp; WELLBEING
              </span>
              <span className="w-16 h-[1px] bg-charcoal/20" />
            </div>
            <h2 className="font-serif text-[clamp(44px,7.5vw,115px)] leading-[0.95] font-light text-charcoal">
              Designed
              <span className="block italic text-charcoal/85">around wellbeing.</span>
            </h2>
          </div>

          <p className="mt-6 lg:mt-0 font-serif italic text-lg md:text-2xl text-charcoal/70 max-w-md">
            Holistic amenities conceived to nurture the body, quiet the mind, and connect residents with coastal nature.
          </p>
        </div>

        {/* Big Typography Amenity List */}
        <div className="flex flex-col border-t border-charcoal/15">
          {AMENITIES_DATA.map((amenity, index) => {
            const isCurrent = activeAmenity.id === amenity.id;
            return (
              <div
                key={amenity.id}
                onMouseEnter={() => {
                  setActiveAmenity(amenity);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative py-7 md:py-10 border-b border-charcoal/15 cursor-pointer transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-baseline space-x-6 md:space-x-12">
                    <span className="text-xs md:text-sm font-sans tracking-[0.25em] text-charcoal/40 uppercase group-hover:text-charcoal transition-colors">
                      {amenity.number}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light text-charcoal tracking-wide uppercase transition-all duration-400 group-hover:italic group-hover:translate-x-3">
                      {amenity.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-6">
                    <span className="text-xs font-sans tracking-[0.2em] uppercase text-charcoal/60 hidden sm:inline-block">
                      {amenity.subtitle}
                    </span>
                    <span className="text-xl md:text-2xl text-charcoal/30 group-hover:text-charcoal group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                </div>

                {/* Mobile Inline Preview */}
                <div
                  className={`mt-4 overflow-hidden transition-all duration-500 md:hidden ${
                    isCurrent ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="relative w-full h-48 rounded-none overflow-hidden my-3">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-serif italic text-sm text-charcoal/70">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Floating Image Follower on Hover */}
      <div
        ref={floatingImageRef}
        className={`fixed top-0 left-0 w-80 lg:w-96 h-56 lg:h-64 pointer-events-none z-30 overflow-hidden shadow-2xl transition-opacity duration-300 ease-out hidden md:block bg-charcoal/10 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          transform: "translate3d(-200px, -200px, 0)",
          willChange: "transform",
        }}
      >
        <Image
          key={activeAmenity.image}
          src={activeAmenity.image}
          alt={activeAmenity.title}
          fill
          sizes="400px"
          className="object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 right-3 bg-warm-ivory/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-sans tracking-[0.2em] uppercase text-charcoal flex justify-between">
          <span>{activeAmenity.title}</span>
          <span>{activeAmenity.subtitle}</span>
        </div>
      </div>
    </section>
  );
}
