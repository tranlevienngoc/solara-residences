"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || window.innerWidth < 1024) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Instant pinpoint dot positioning
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "view") {
          setCursorText("XEM");
          setIsHovered(true);
        } else if (type === "drag") {
          setCursorText("KÉO");
          setIsHovered(true);
        } else if (type === "explore") {
          setCursorText("KHÁM PHÁ");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(true);
        }
      } else if (target.closest("button, a, input, select, textarea")) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Spring physics render loop for the outer ring
    const render = () => {
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  const isTextMode = isHovered && cursorText !== "";
  const isButtonMode = isHovered && cursorText === "";

  return (
    <>
      {/* 1. Fast Inner Pinpoint Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isVisible && !isTextMode ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
        aria-hidden="true"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-charcoal" />
      </div>

      {/* 2. Fluid Trailing Ring with Vietnamese Action Labels */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
            isTextMode
              ? "w-24 h-24 bg-warm-ivory text-charcoal shadow-2xl border border-charcoal/15 backdrop-blur-md scale-100"
              : isButtonMode
              ? "w-11 h-11 border border-charcoal/35 bg-charcoal/5 backdrop-blur-[1px] scale-110"
              : "w-8 h-8 border border-charcoal/25 bg-transparent scale-90"
          }`}
        >
          {isTextMode && (
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] select-none uppercase text-charcoal px-2 text-center">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
