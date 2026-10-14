"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stepped luxury counter: 0 -> 23 -> 48 -> 72 -> 100
    const sequence = [0, 23, 48, 72, 100];
    let stepIndex = 0;

    const interval = setInterval(() => {
      stepIndex += 1;
      if (stepIndex < sequence.length) {
        setCount(sequence[stepIndex]);
      } else {
        clearInterval(interval);
        triggerExit();
      }
    }, 380);

    const triggerExit = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
          if (onComplete) onComplete();
        },
      });

      // 1. Fade out the text & counter gently
      tl.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.inOut",
      });

      // 2. Architectural curtain lifts up with quiet luxury easing
      tl.to(
        curtainRef.current,
        {
          yPercent: -100,
          duration: 1.1,
          ease: "power4.inOut",
        },
        "-=0.2"
      );
    };

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isFinished) return null;

  const formattedCount = count < 10 ? `0${count}` : `${count}`;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] pointer-events-auto"
      aria-live="polite"
      aria-label="Loading Solara Residences"
    >
      <div
        ref={curtainRef}
        className="w-full h-full bg-[#F2EFE8] text-charcoal flex flex-col items-center justify-between p-8 md:p-14 relative"
      >
        {/* Top subtle brand mark */}
        <div className="w-full flex justify-between items-center text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-charcoal/60">
          <span>DA NANG</span>
          <span>VIETNAM</span>
        </div>

        {/* Center monumental typography */}
        <div ref={contentRef} className="flex flex-col items-center text-center my-auto">
          {/* Subtle architectural emblem */}
          <div className="mb-6 opacity-60">
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="animate-pulse"
            >
              <circle cx="20" cy="20" r="18" strokeDasharray="1 3" />
              <circle cx="20" cy="20" r="11" />
              <line x1="20" y1="2" x2="20" y2="38" />
              <line x1="2" y1="20" x2="38" y2="20" />
            </svg>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.18em] font-light text-charcoal uppercase pl-[0.18em]">
            SOLARA
          </h1>
          <span className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-charcoal/70 mt-3 font-sans">
            RESIDENCES
          </span>

          {/* Stepped counter */}
          <div className="mt-12 flex items-baseline gap-2">
            <span className="font-serif text-4xl md:text-5xl font-light text-charcoal tabular-nums">
              {formattedCount}
            </span>
            <span className="text-xs font-sans tracking-[0.2em] text-charcoal/50">/ 100</span>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="w-full text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal/50 font-sans">
            A place shaped by light.
          </p>
        </div>
      </div>
    </div>
  );
}
