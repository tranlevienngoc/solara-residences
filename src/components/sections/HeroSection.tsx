"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const titleLettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [activeMood, setActiveMood] = useState<"day" | "dusk">("day");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      // 1. Image scale down from 1.1 -> 1
      if (imageContainerRef.current) {
        tl.fromTo(
          imageContainerRef.current,
          { scale: 1.12, opacity: 0.9 },
          { scale: 1, opacity: 1, duration: 2.2, ease: "power3.out" },
          0
        );
      }

      // 2. Letter-by-letter reveal for SOLARA
      const validLetters = titleLettersRef.current.filter(Boolean);
      if (validLetters.length > 0) {
        tl.fromTo(
          validLetters,
          { yPercent: 120, rotate: 2, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 1.4,
            ease: "power4.out",
          },
          0.3
        );
      }

      // 3. Subtitle & metadata reveal
      if (subtitleRef.current && metaRef.current && scrollIndicatorRef.current) {
        tl.fromTo(
          [metaRef.current, subtitleRef.current, scrollIndicatorRef.current],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power3.out" },
          0.8
        );
      }

      // 4. Scroll parallax effect
      if (heroRef.current && imageContainerRef.current) {
        gsap.to(imageContainerRef.current, {
          yPercent: 16,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Foreground text moves up faster
        gsap.to(".hero-center-content", {
          yPercent: -22,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    // Mouse movement 3D subtle tilt on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !imageContainerRef.current) return;
      const xNorm = (e.clientX / window.innerWidth - 0.5) * 12;
      const yNorm = (e.clientY / window.innerHeight - 0.5) * 12;

      gsap.to(imageContainerRef.current, {
        x: -xNorm,
        y: -yNorm,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const dayImage =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85";
  const duskImage =
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85";

  const letters = ["S", "O", "L", "A", "R", "A"];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 lg:px-16 select-none bg-warm-ivory perspective-1200"
    >
      {/* Background Architectural Canvas with 3D Depth */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-full will-change-transform transition-opacity duration-1000 ease-out"
        data-cursor="view"
      >
        <Image
          src={activeMood === "day" ? dayImage : duskImage}
          alt="Solara Beachfront Contemporary Architecture Da Nang"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-all duration-1000"
        />

        {/* Ambient editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-charcoal/40" />
      </div>

      {/* Top Editorial Bar */}
      <div
        ref={metaRef}
        className="relative z-10 w-full max-w-[1600px] mx-auto flex items-center justify-between text-warm-ivory/90 text-[11px] md:text-xs font-sans tracking-[0.25em] uppercase pt-4"
      >
        <div className="flex items-center space-x-3">
          <span className="w-1.5 h-1.5 rounded-full bg-warm-ivory/80 animate-ping" />
          <span>ĐÀ NẴNG · VIỆT NAM</span>
        </div>

        {/* Ambient Mood Switcher */}
        <div className="flex items-center space-x-1 p-1 rounded-full bg-charcoal/30 backdrop-blur-md border border-warm-ivory/20 shadow-lg">
          <button
            onClick={() => setActiveMood("day")}
            className={`px-3.5 py-1 rounded-full text-[10px] tracking-[0.2em] font-medium transition-all duration-400 ${
              activeMood === "day"
                ? "bg-warm-ivory text-charcoal shadow-sm"
                : "text-warm-ivory/70 hover:text-warm-ivory"
            }`}
          >
            BAN NGÀY
          </button>
          <button
            onClick={() => setActiveMood("dusk")}
            className={`px-3.5 py-1 rounded-full text-[10px] tracking-[0.2em] font-medium transition-all duration-400 ${
              activeMood === "dusk"
                ? "bg-warm-ivory text-charcoal shadow-sm"
                : "text-warm-ivory/70 hover:text-warm-ivory"
            }`}
          >
            HOÀNG HÔN
          </button>
        </div>

        <div className="hidden sm:block text-right">
          <span>16°03&apos;24&quot;B 108°14&apos;45&quot;Đ</span>
        </div>
      </div>

      {/* Center Monumental Typography Composition */}
      <div className="hero-center-content relative z-10 w-full max-w-[1600px] mx-auto my-auto text-center flex flex-col items-center justify-center">
        {/* Staggered Letter Reveal */}
        <div className="flex items-center justify-center overflow-hidden py-2">
          {letters.map((char, index) => (
            <span
              key={index}
              ref={(el) => {
                titleLettersRef.current[index] = el;
              }}
              className="inline-block font-serif text-warm-ivory text-[clamp(68px,14vw,200px)] leading-[0.88] tracking-[0.06em] font-light uppercase drop-shadow-[0_6px_35px_rgba(0,0,0,0.35)] will-change-transform"
            >
              {char}
            </span>
          ))}
        </div>

        <div
          ref={subtitleRef}
          className="flex flex-col md:flex-row items-center justify-center md:space-x-8 mt-2 md:mt-4 text-warm-ivory/90"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.45em] uppercase font-light">
            RESIDENCES
          </span>
          <span className="hidden md:inline-block w-12 h-[1px] bg-warm-ivory/40" />
          <p className="font-serif italic text-lg md:text-2xl lg:text-3xl tracking-wide font-light opacity-95 mt-2 md:mt-0">
            Nơi ánh sáng định hình không gian.
          </p>
        </div>
      </div>

      {/* Bottom Editorial Controls & Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between text-warm-ivory/80 text-xs font-sans tracking-[0.25em] uppercase pb-2"
      >
        <div className="hidden md:block">
          <span className="text-warm-ivory/60">BỘ SƯU TẬP 2026</span>
        </div>

        <a
          href="#story"
          className="flex flex-col items-center group py-2"
          aria-label="Cuộn để khám phá câu chuyện Solara"
        >
          <span className="text-[10px] md:text-[11px] tracking-[0.3em] group-hover:text-warm-ivory transition-colors duration-300">
            CUỘN ĐỂ KHÁM PHÁ
          </span>
          <div className="w-[1px] h-8 bg-warm-ivory/30 mt-3 relative overflow-hidden">
            <div className="w-full h-1/2 bg-warm-ivory absolute top-0 left-0 animate-bounce" />
          </div>
        </a>

        <div className="hidden md:block text-right">
          <span className="text-warm-ivory/60">GIỚI HẠN 28 DINH THỰ</span>
        </div>
      </div>
    </section>
  );
}
