"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STORY_ITEMS = [
  {
    id: "morning-light",
    title: "ÁNH NẮNG BAN MAI",
    subtitle: "HÌNH 02.1 — HÀNG CỘT ĐÁ VÔI",
    quote: "Ánh nắng ban mai xuyên qua hệ lam chắn nắng, vẽ nên vũ điệu hình học biến chuyển kỳ ảo theo thời gian trong ngày.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    isLarge: true,
  },
  {
    id: "private-terraces",
    title: "BAN CÔNG BIỆT LẬP",
    subtitle: "HÌNH 02.2 — RANH GIỚI VÔ TẬN",
    quote: "Hiên nghỉ sâu rộng lộng gió đại dương, mở rộng không gian sống hướng thẳng về chân trời bao la của biển Đông.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    isLarge: false,
  },
  {
    id: "tropical-landscapes",
    title: "CẢNH QUAN NHIỆT ĐỚI",
    subtitle: "HÌNH 02.3 — HÒA QUYỆN SINH THÁI",
    quote: "Những khoảnh vườn duyên hải xanh mát tạo nên vi khí hậu thanh bình, xoa dịu mọi giác quan sau ngày dài bận rộn.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    isLarge: false,
  },
  {
    id: "the-sea-beyond",
    title: "ĐẠI DƯƠNG VÔ CỰC",
    subtitle: "HÌNH 02.4 — SỰ LIỀN MẠCH VĨNH CỬU",
    quote: "Phòng khách ngập tràn ánh sáng với vách kính cách âm chạm sàn, xóa nhòa mọi khoảng cách với mặt biển khơi.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=2000&q=85",
    isLarge: true,
  },
];

export function EditorialGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el) => {
        if (!el) return;
        const innerImg = el.querySelector(".parallax-inner");

        // Reveal clip-path
        gsap.fromTo(
          el,
          { clipPath: "inset(10% 0% 10% 0%)", opacity: 0.4 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );

        // Inner parallax
        if (innerImg) {
          gsap.fromTo(
            innerImg,
            { yPercent: -10, scale: 1.08 },
            {
              yPercent: 10,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F2EFE8] py-28 md:py-40 lg:py-48 px-6 md:px-12 lg:px-16 text-charcoal overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 pb-8 border-b border-charcoal/15">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 font-medium block mb-3">
              GÓC NHÌN NGHỆ THUẬT
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal">
              Bản giao hưởng của <span className="italic">ánh sáng &amp; đá tự nhiên.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-serif italic text-lg md:text-xl text-charcoal/60 max-w-sm">
            Những khoảnh khắc nhiếp ảnh ghi lại bầu không khí xúc cảm và nét tĩnh lặng tinh khôi tại Solara.
          </p>
        </div>

        {/* Pair 1: Large Left, Smaller Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-28 md:mb-44">
          {/* Large Left (70vw equivalent on desktop) */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div
              ref={(el) => {
                itemsRef.current[0] = el;
              }}
              className="relative w-full h-[55vh] md:h-[75vh] min-h-[400px] overflow-hidden bg-charcoal/10"
              data-cursor="view"
            >
              <div className="parallax-inner absolute -inset-[12%] w-[124%] h-[124%]">
                <Image
                  src={STORY_ITEMS[0].image}
                  alt={STORY_ITEMS[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 68vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-charcoal">
                {STORY_ITEMS[0].title}
              </h3>
              <span className="text-[11px] font-sans tracking-[0.25em] text-charcoal/50 uppercase">
                {STORY_ITEMS[0].subtitle}
              </span>
            </div>
            <p className="font-serif italic text-base md:text-lg text-charcoal/70 max-w-lg">
              &ldquo;{STORY_ITEMS[0].quote}&rdquo;
            </p>
          </div>

          {/* Small Right */}
          <div className="lg:col-span-4 lg:pt-24 flex flex-col space-y-4">
            <div
              ref={(el) => {
                itemsRef.current[1] = el;
              }}
              className="relative w-full h-[45vh] md:h-[55vh] min-h-[340px] overflow-hidden bg-charcoal/10"
              data-cursor="view"
            >
              <div className="parallax-inner absolute -inset-[12%] w-[124%] h-[124%]">
                <Image
                  src={STORY_ITEMS[1].image}
                  alt={STORY_ITEMS[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <h3 className="font-serif text-xl md:text-2xl tracking-wide uppercase text-charcoal">
                {STORY_ITEMS[1].title}
              </h3>
              <span className="text-[10px] font-sans tracking-[0.25em] text-charcoal/50 uppercase">
                02 / 04
              </span>
            </div>
            <p className="font-serif italic text-sm md:text-base text-charcoal/70">
              {STORY_ITEMS[1].quote}
            </p>
          </div>
        </div>

        {/* Pair 2: Inverted (Small Left, Large Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Small Left */}
          <div className="lg:col-span-4 lg:pb-24 order-2 lg:order-1 flex flex-col space-y-4">
            <div
              ref={(el) => {
                itemsRef.current[2] = el;
              }}
              className="relative w-full h-[45vh] md:h-[55vh] min-h-[340px] overflow-hidden bg-charcoal/10"
              data-cursor="view"
            >
              <div className="parallax-inner absolute -inset-[12%] w-[124%] h-[124%]">
                <Image
                  src={STORY_ITEMS[2].image}
                  alt={STORY_ITEMS[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <h3 className="font-serif text-xl md:text-2xl tracking-wide uppercase text-charcoal">
                {STORY_ITEMS[2].title}
              </h3>
              <span className="text-[10px] font-sans tracking-[0.25em] text-charcoal/50 uppercase">
                03 / 04
              </span>
            </div>
            <p className="font-serif italic text-sm md:text-base text-charcoal/70">
              {STORY_ITEMS[2].quote}
            </p>
          </div>

          {/* Large Right */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col space-y-4">
            <div
              ref={(el) => {
                itemsRef.current[3] = el;
              }}
              className="relative w-full h-[55vh] md:h-[75vh] min-h-[400px] overflow-hidden bg-charcoal/10"
              data-cursor="view"
            >
              <div className="parallax-inner absolute -inset-[12%] w-[124%] h-[124%]">
                <Image
                  src={STORY_ITEMS[3].image}
                  alt={STORY_ITEMS[3].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 68vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-charcoal">
                {STORY_ITEMS[3].title}
              </h3>
              <span className="text-[11px] font-sans tracking-[0.25em] text-charcoal/50 uppercase">
                {STORY_ITEMS[3].subtitle}
              </span>
            </div>
            <p className="font-serif italic text-base md:text-lg text-charcoal/70 max-w-lg">
              &ldquo;{STORY_ITEMS[3].quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
