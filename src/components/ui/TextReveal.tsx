"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  duration?: number;
  stagger?: number;
  by?: "words" | "lines";
}

export function TextReveal({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
  duration = 1.2,
  stagger = 0.04,
  by = "words",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal-unit");

    const anim = gsap.fromTo(
      targets,
      {
        yPercent: 120,
        opacity: 0,
        rotate: 1.5,
      },
      {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, [delay, duration, stagger]);

  if (by === "lines") {
    const lines = children.split("\n");
    return (
      // @ts-expect-error dynamic component
      <Component ref={containerRef} className={`overflow-hidden ${className}`}>
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden py-1">
            <span className="reveal-unit block will-change-transform">{line}</span>
          </span>
        ))}
      </Component>
    );
  }

  const words = children.split(" ");

  return (
    // @ts-expect-error dynamic component
    <Component ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top py-0.5">
          <span className="reveal-unit inline-block will-change-transform">{word}</span>
        </span>
      ))}
    </Component>
  );
}
