"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cursorMode, setCursorMode] = useState<"default" | "view" | "drag" | "explore">("default");

  useEffect(() => {
    // Only enable on desktop devices with a fine pointer (mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || window.innerWidth < 1024) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Detect hover target attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "view") {
          setCursorMode("view");
          setCursorText("VIEW");
          setIsHovered(true);
        } else if (type === "drag") {
          setCursorMode("drag");
          setCursorText("DRAG");
          setIsHovered(true);
        } else if (type === "explore") {
          setCursorMode("explore");
          setCursorText("EXPLORE");
          setIsHovered(true);
        } else {
          setCursorMode("default");
          setCursorText("");
          setIsHovered(true);
        }
      } else if (target.closest("button, a, input, select, textarea")) {
        setCursorMode("default");
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorMode("default");
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth physics loop
    const render = () => {
      const ease = 0.16;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  const isExpanded = isHovered && cursorText !== "";
  const isButtonHover = isHovered && cursorText === "";

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: "translate3d(-100px, -100px, 0)",
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
          isExpanded
            ? "w-20 h-20 bg-warm-ivory text-charcoal shadow-2xl backdrop-blur-md border border-charcoal/10"
            : isButtonHover
            ? "w-10 h-10 bg-charcoal/20 border border-charcoal/40 backdrop-blur-[2px]"
            : "w-3 h-3 bg-charcoal"
        }`}
      >
        {isExpanded && (
          <span
            ref={textRef}
            className="text-[10px] font-sans font-semibold tracking-[0.25em] select-none uppercase pl-[0.25em]"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
