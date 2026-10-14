"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_PANELS } from "@/lib/data";

export function HorizontalGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
            const slideIndex = Math.min(
              GALLERY_PANELS.length,
              Math.floor(self.progress * GALLERY_PANELS.length) + 1
            );
            setCurrentSlide(slideIndex);
          },
        },
      });

      // Subtle scale effect on panel images as they scroll
      const images = track.querySelectorAll(".panel-img");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#EAE6DD] text-charcoal overflow-hidden py-16 md:py-0 md:h-screen md:flex md:flex-col md:justify-between select-none"
      data-cursor="drag"
    >
      {/* Top Header Information */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-14 pb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 font-medium">
            SPATIAL JOURNEY
          </span>
          <span className="w-12 h-[1px] bg-charcoal/20" />
          <span className="font-serif text-lg italic text-charcoal/80 hidden sm:inline-block">
            Architectural Perspectives
          </span>
        </div>

        <div className="text-xs font-sans tracking-[0.2em] text-charcoal/60 uppercase">
          <span className="font-semibold text-charcoal">0{currentSlide}</span> / 0
          {GALLERY_PANELS.length}
        </div>
      </div>

      {/* Horizontal Sliding Track */}
      <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar px-6 md:px-12 lg:px-16 py-6 md:py-0">
        <div
          ref={trackRef}
          className="flex space-x-8 md:space-x-14 will-change-transform items-center w-max"
        >
          {GALLERY_PANELS.map((panel) => (
            <div
              key={panel.id}
              className="w-[82vw] sm:w-[68vw] md:w-[56vw] lg:w-[48vw] shrink-0 flex flex-col space-y-4 group"
            >
              <div className="relative w-full h-[48vh] sm:h-[54vh] md:h-[58vh] max-h-[640px] overflow-hidden bg-charcoal/10 shadow-md">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  sizes="(max-width: 768px) 82vw, 50vw"
                  className="panel-img object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Corner Index Tag */}
                <div className="absolute top-4 left-4 z-10 bg-warm-ivory/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-sans tracking-[0.25em] uppercase text-charcoal border border-charcoal/10">
                  {panel.number} · {panel.tag}
                </div>
              </div>

              {/* Panel Details */}
              <div className="flex items-baseline justify-between pt-1">
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-light tracking-wide">
                  {panel.title}
                </h3>
                <span className="text-[11px] font-sans tracking-[0.2em] text-charcoal/50 uppercase">
                  {panel.number}
                </span>
              </div>
              <p className="font-serif italic text-sm md:text-base text-charcoal/70 line-clamp-2 max-w-lg">
                {panel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Progress Bar & Instruction */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-8 md:pb-12 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4 w-full md:w-80">
          <div className="w-full h-[2px] bg-charcoal/15 relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-charcoal transition-all duration-100 ease-out"
              style={{ width: `${(1 / GALLERY_PANELS.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center space-x-6 text-[11px] font-sans tracking-[0.2em] uppercase text-charcoal/50">
          <span className="hidden sm:inline-block">SCROLL OR DRAG TO EXPLORE</span>
          <span className="text-charcoal/70 font-medium">SOLARA DA NANG</span>
        </div>
      </div>
    </section>
  );
}
