"use client";

import React, { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  dataCursor?: string;
  href?: string;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.35,
  dataCursor = "explore",
  href,
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;
    buttonRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = "translate3d(0px, 0px, 0)";
    buttonRef.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
  };

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transition = "transform 0.1s ease-out";
  };

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      data-cursor={dataCursor}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} role={onClick ? "button" : undefined} aria-label={ariaLabel}>
      {content}
    </div>
  );
}
