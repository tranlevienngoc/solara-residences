"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AMENITIES_DATA } from "@/lib/data";
import { Amenity } from "@/lib/types";

export function LifestyleAmenitiesSection() {
  const [activeAmenity, setActiveAmenity] = useState<Amenity>(AMENITIES_DATA[0]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const floatingImageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;
    let lastX = 0;
    let velocityX = 0;
    let tilt = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      velocityX = e.clientX - lastX;
      lastX = e.clientX;
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      // Calculate tilt based on mouse velocity
      const targetTilt = Math.max(-12, Math.min(12, velocityX * 0.35));
      tilt += (targetTilt - tilt) * 0.1;
      velocityX *= 0.85;

      if (floatingImageRef.current) {
        floatingImageRef.current.style.transform = `translate3d(${currentX + 35}px, ${
          currentY - 140
        }px, 0) rotate(${tilt}deg)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

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
                TIỆN ÍCH &amp; NGHỈ DƯỠNG
              </span>
              <span className="w-16 h-[1px] bg-charcoal/20" />
            </div>
            <h2 className="font-serif text-[clamp(44px,7.5vw,115px)] leading-[0.95] font-light text-charcoal">
              Kiến tạo
              <span className="block italic text-charcoal/85">cho sức khỏe &amp; an yên.</span>
            </h2>
          </div>

          <p className="mt-6 lg:mt-0 font-serif italic text-lg md:text-2xl text-charcoal/70 max-w-md">
            Hệ tiện ích đặc quyền được kiến tạo để chăm sóc thân - tâm - trí và gắn kết trọn vẹn với thiên nhiên miền biển.
          </p>
        </div>

        {/* Big Typography Amenity List with Group Dimming & Dual-Layer Roll */}
        <div className="flex flex-col border-t border-charcoal/15 group/list">
          {AMENITIES_DATA.map((amenity) => {
            const isCurrent = activeAmenity.id === amenity.id;
            return (
              <div
                key={amenity.id}
                onMouseEnter={() => {
                  setActiveAmenity(amenity);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                className={`group relative py-7 md:py-10 border-b border-charcoal/15 cursor-pointer transition-opacity duration-400 ${
                  isHovered && !isCurrent ? "opacity-25" : "opacity-100"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-baseline space-x-6 md:space-x-12">
                    <span className="text-xs md:text-sm font-sans tracking-[0.25em] text-charcoal/40 uppercase group-hover:text-charcoal transition-colors">
                      {amenity.number}
                    </span>

                    {/* Dual Layer Rolling Text Effect */}
                    <div className="overflow-hidden">
                      <h3 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light text-charcoal tracking-wide uppercase transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:italic">
                        {amenity.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <span className="text-xs font-sans tracking-[0.2em] uppercase text-charcoal/60 hidden sm:inline-block">
                      {amenity.subtitle}
                    </span>
                    <span className="text-xl md:text-2xl text-charcoal/30 group-hover:text-charcoal group-hover:translate-x-2 transition-all">
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

      {/* Desktop Floating Image Follower with Dynamic Velocity Tilt */}
      <div
        ref={floatingImageRef}
        className={`fixed top-0 left-0 w-80 lg:w-96 h-56 lg:h-64 pointer-events-none z-30 overflow-hidden shadow-2xl transition-opacity duration-300 ease-out hidden md:block bg-charcoal/10 will-change-transform ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          transform: "translate3d(-200px, -200px, 0)",
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
        <div className="absolute bottom-3 left-3 right-3 bg-warm-ivory/95 backdrop-blur-md px-3.5 py-2 text-[10px] font-sans tracking-[0.2em] uppercase text-charcoal flex justify-between shadow-sm">
          <span className="font-medium">{activeAmenity.title}</span>
          <span className="text-charcoal/60">{activeAmenity.subtitle}</span>
        </div>
      </div>
    </section>
  );
}
