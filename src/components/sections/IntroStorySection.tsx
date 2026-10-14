"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function IntroStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Line-by-line reveal animation on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        [headingLine1Ref.current, headingLine2Ref.current],
        { yPercent: 110, rotate: 1 },
        {
          yPercent: 0,
          rotate: 0,
          stagger: 0.16,
          duration: 1.4,
          ease: "power4.out",
        }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );

      // Mask reveal for architectural image
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.6,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Parallax effect on image inside wrapper
      if (imageInnerRef.current) {
        gsap.fromTo(
          imageInnerRef.current,
          { yPercent: -8, scale: 1.08 },
          {
            yPercent: 8,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative w-full bg-[#F2EFE8] py-28 md:py-44 lg:py-52 px-6 md:px-12 lg:px-16 text-charcoal overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Index Label */}
        <div className="flex items-center space-x-4 mb-10 md:mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 font-medium">
            01 — CÂU CHUYỆN
          </span>
          <span className="w-16 h-[1px] bg-charcoal/20" />
        </div>

        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(42px,6.8vw,110px)] font-light leading-[0.96] tracking-[-0.02em] text-charcoal">
              <span className="block overflow-hidden py-1">
                <span ref={headingLine1Ref} className="block will-change-transform">
                  Nơi kiến trúc
                </span>
              </span>
              <span className="block overflow-hidden py-1">
                <span
                  ref={headingLine2Ref}
                  className="block italic font-light will-change-transform text-charcoal/90"
                >
                  giao hòa cùng chân trời.
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-6">
            <p
              ref={textRef}
              className="font-serif text-lg md:text-2xl text-charcoal/80 font-light leading-[1.6] tracking-wide"
            >
              Solara Residences được khởi tạo như một chốn tĩnh dưỡng yên bình giữa nhịp sống đô thị và biển xanh bao la — một bộ sưu tập không gian sống đương đại được định hình bởi ánh sáng tự nhiên, thảm thực vật nhiệt đới và nhịp điệu êm đềm của đại dương.
            </p>

            <div className="mt-8 pt-8 border-t border-charcoal/15 flex items-center justify-between text-[11px] font-sans tracking-[0.25em] text-charcoal/50 uppercase">
              <span>TRIẾT LÝ KIẾN TRÚC</span>
              <span>BỜ BIỂN ĐÀ NẴNG</span>
            </div>
          </div>
        </div>

        {/* Cinematic Architectural Reveal Image */}
        <div className="mt-20 md:mt-32 w-full">
          <div
            ref={imageWrapperRef}
            className="relative w-full h-[55vh] md:h-[75vh] min-h-[420px] max-h-[850px] overflow-hidden bg-charcoal/10"
            data-cursor="view"
          >
            <div ref={imageInnerRef} className="absolute -inset-[10%] w-[120%] h-[120%]">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
                alt="Kiến trúc Solara giao hòa cùng thiên nhiên duyên hải Đà Nẵng"
                fill
                sizes="(max-width: 1200px) 100vw, 1600px"
                className="object-cover object-center"
              />
            </div>

            {/* Subtle corner badge */}
            <div className="absolute bottom-6 right-6 z-10 hidden sm:block bg-[#F2EFE8]/90 backdrop-blur-md px-4 py-2 text-[10px] tracking-[0.2em] font-sans uppercase text-charcoal border border-charcoal/10">
              HÌNH 01.1 — ĐỐI THOẠI CÙNG ÁNH SÁNG
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-charcoal/60 font-sans tracking-wide">
            <p className="italic font-serif text-sm">
              &ldquo;Ánh sáng không đơn thuần là sự chiếu rọi; đó là chất liệu kiến trúc cốt lõi của Solara.&rdquo;
            </p>
            <span className="text-[11px] tracking-[0.2em] uppercase font-mono mt-1 sm:mt-0">
              HƯỚNG ĐÓN NẮNG: 122° ĐÔNG / BÌNH MINH VEN BIỂN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
