"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ArchitectureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal clip-path for architecture image
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: "inset(12% 0% 12% 0%)", opacity: 0.5 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Quote text fade and rise
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="relative w-full bg-[#22221F] text-[#F2EFE8] py-28 md:py-44 lg:py-52 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-warm-ivory/50 font-medium">
            04 — KIẾN TRÚC ĐƯƠNG ĐẠI
          </span>
          <span className="w-16 h-[1px] bg-warm-ivory/20" />
        </div>

        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-32">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(44px,7.5vw,115px)] leading-[0.95] font-light text-warm-ivory">
              Sinh ra
              <span className="block italic text-warm-ivory/85">để thuộc về nơi này.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            <p className="font-serif text-lg md:text-2xl text-warm-ivory/80 font-light leading-[1.6]">
              Kiến trúc đương đại được làm mềm mại bởi cảnh quan nhiệt đới, vật liệu tự nhiên
              và những ô cửa rộng lớn xóa nhòa ranh giới giữa không gian bên trong và thế giới bên ngoài.
            </p>
          </div>
        </div>

        {/* Large Monumental Architecture Visual */}
        <div className="w-full mb-20 md:mb-32">
          <div
            ref={imageWrapperRef}
            className="relative w-full h-[60vh] md:h-[80vh] min-h-[460px] overflow-hidden bg-charcoal/40"
            data-cursor="view"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2400&q=85"
              alt="Kiến Trúc Điêu Khắc Đá Tự Nhiên Solara Đà Nẵng"
              fill
              sizes="(max-width: 1200px) 100vw, 1600px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans tracking-[0.2em] text-warm-ivory/80 uppercase">
              <span>NGHIÊN CỨU ĐỔ BÓNG &amp; ÁNH SÁNG</span>
              <span>NGHỆ NHÂN BÊ TÔNG &amp; ĐÁ TRAVERTINE</span>
            </div>
          </div>
        </div>

        {/* Architectural Quote Section */}
        <div className="max-w-4xl mx-auto text-center py-10 md:py-16 border-y border-warm-ivory/15">
          <blockquote
            ref={quoteRef}
            className="font-serif italic text-2xl md:text-4xl lg:text-5xl font-light text-warm-ivory leading-[1.25] block"
          >
            &ldquo;Kiến trúc cần mang lại cảm giác tất yếu — như thể nó vốn dĩ luôn thuộc về mảnh đất này.&rdquo;
          </blockquote>
          <span className="mt-6 block text-[11px] font-sans tracking-[0.3em] uppercase text-warm-ivory/50">
            TRIẾT LÝ THIẾT KẾ CỐT LÕI
          </span>
        </div>

        {/* Architectural Pillars / Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 md:mt-24 pt-8 text-warm-ivory/80">
          <div className="space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] text-warm-ivory/40 uppercase block">
              TRỤ CỘT 01
            </span>
            <h4 className="font-serif text-2xl text-warm-ivory font-light">Che Chắn Vi Khí Hậu</h4>
            <p className="font-serif italic text-sm text-warm-ivory/60 leading-relaxed">
              Hệ mái console vươn xa và lam chắn nắng đá vôi thẳng đứng giúp giảm thiểu bức xạ nhiệt mặt trời nhưng vẫn giữ trọn tầm nhìn biển khoáng đạt.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] text-warm-ivory/40 uppercase block">
              TRỤ CỘT 02
            </span>
            <h4 className="font-serif text-2xl text-warm-ivory font-light">Đối Lưu Gió Tự Nhiên</h4>
            <p className="font-serif italic text-sm text-warm-ivory/60 leading-relaxed">
              Mỗi dinh thự sở hữu thiết kế mở đa hướng đón trọn luồng gió biển đối lưu, giảm thiểu tối đa nhu cầu sử dụng điều hòa nhân tạo.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] text-warm-ivory/40 uppercase block">
              TRỤ CỘT 03
            </span>
            <h4 className="font-serif text-2xl text-warm-ivory font-light">Độ Bền Vững Nguyên Khối</h4>
            <p className="font-serif italic text-sm text-warm-ivory/60 leading-relaxed">
              Được kiến tạo từ các khoáng thạch tự nhiên và hợp kim chống ăn mòn muối biển, bền bỉ qua năm tháng và phong sương miền duyên hải.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
