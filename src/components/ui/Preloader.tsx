"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const archRingRef = useRef<SVGCircleElement>(null);
  const crosshairRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // Stepped luxury counter sequence
    const sequence = [0, 18, 37, 54, 76, 92, 100];
    let stepIndex = 0;

    // SVG stroke entrance animation
    if (archRingRef.current) {
      gsap.fromTo(
        archRingRef.current,
        { strokeDashoffset: 120 },
        { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" }
      );
    }
    if (crosshairRef.current) {
      gsap.fromTo(
        crosshairRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.4)" }
      );
    }

    const interval = setInterval(() => {
      stepIndex += 1;
      if (stepIndex < sequence.length) {
        setCount(sequence[stepIndex]);
      } else {
        clearInterval(interval);
        triggerExit();
      }
    }, 280);

    const triggerExit = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
          if (onComplete) onComplete();
        },
      });

      // 1. Center logo & counter gently dissolve and scale slightly
      tl.to(centerContentRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.inOut",
      });

      // 2. Dual architectural curtain split: Left sweeps left, Right sweeps right
      tl.to(
        [leftCurtainRef.current, rightCurtainRef.current],
        {
          xPercent: (i) => (i === 0 ? -100 : 100),
          duration: 1.3,
          stagger: 0.05,
          ease: "expo.inOut",
        },
        "-=0.3"
      );
    };

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isFinished) return null;

  const formattedCount = count < 10 ? `0${count}` : `${count}`;

  return (
    <div
      className="fixed inset-0 z-[10000] pointer-events-auto flex overflow-hidden select-none"
      aria-live="polite"
      aria-label="Đang chuẩn bị không gian Solara Residences"
    >
      {/* Left Architectural Curtain Panel */}
      <div
        ref={leftCurtainRef}
        className="w-1/2 h-full bg-[#F2EFE8] border-r border-charcoal/10 relative flex flex-col justify-between p-8 md:p-14"
      >
        <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-charcoal/50">
          ĐÀ NẴNG · VIỆT NAM
        </span>
        <div className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-charcoal/40">
          16°03&apos;24&quot;B 108°14&apos;45&quot;Đ
        </div>
      </div>

      {/* Right Architectural Curtain Panel */}
      <div
        ref={rightCurtainRef}
        className="w-1/2 h-full bg-[#F2EFE8] border-l border-charcoal/10 relative flex flex-col justify-between p-8 md:p-14 items-end"
      >
        <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-charcoal/50">
          BỘ SƯU TẬP 2026
        </span>
        <div className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-charcoal/40">
          GIỚI HẠN 28 DINH THỰ
        </div>
      </div>

      {/* Floating Center Identity & Counter */}
      <div
        ref={centerContentRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Animated Architectural Crosshair Emblem */}
        <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-charcoal">
            <circle
              ref={archRingRef}
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="4 4"
              className="opacity-40 animate-spin"
              style={{ animationDuration: "24s" }}
            />
            <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="0.8" className="opacity-60" />
            <g ref={crosshairRef}>
              <line x1="32" y1="6" x2="32" y2="58" stroke="currentColor" strokeWidth="0.8" className="opacity-50" />
              <line x1="6" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="0.8" className="opacity-50" />
            </g>
          </svg>
        </div>

        {/* Monogram / Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.2em] font-light text-charcoal uppercase pl-[0.2em]">
          SOLARA
        </h1>
        <span className="text-xs tracking-[0.4em] uppercase text-charcoal/60 mt-3 font-sans font-light">
          RESIDENCES
        </span>

        {/* Rolling Counter */}
        <div className="mt-12 flex items-baseline gap-2">
          <span className="font-serif text-4xl sm:text-6xl font-light text-charcoal tabular-nums">
            {formattedCount}
          </span>
          <span className="text-xs font-sans tracking-[0.25em] text-charcoal/40">/ 100</span>
        </div>

        <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal/50 font-sans mt-6">
          Nơi ánh sáng định hình không gian.
        </p>
      </div>
    </div>
  );
}
