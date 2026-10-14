"use client";

import React from "react";
import { MagneticButton } from "./MagneticButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#EAE6DD] text-charcoal pt-24 pb-14 px-6 md:px-12 lg:px-16 border-t border-charcoal/15 select-none">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-charcoal/15 items-start">
          {/* Brand Colophon */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-[0.06em] text-charcoal uppercase">
              SOLARA
            </h3>
            <span className="text-xs font-sans tracking-[0.35em] text-charcoal/60 uppercase block">
              RESIDENCES · ĐÀ NẴNG, VIỆT NAM
            </span>
            <p className="font-serif italic text-base md:text-lg text-charcoal/70 max-w-md pt-2">
              Bộ sưu tập 28 dinh thự biển độc bản được định hình bởi ánh sáng, đường chân trời duyên hải và kỷ luật kiến trúc trường tồn theo năm tháng.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-sans tracking-[0.25em] text-charcoal/40 uppercase block">
              DANH MỤC
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-[0.2em] uppercase text-charcoal/80">
              <li>
                <a href="#hero" className="hover:text-charcoal hover-line">
                  Tổng Quan
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-charcoal hover-line">
                  Câu Chuyện
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-charcoal hover-line">
                  Vị Trí
                </a>
              </li>
              <li>
                <a href="#residences" className="hover:text-charcoal hover-line">
                  Dinh Thự
                </a>
              </li>
              <li>
                <a href="#lifestyle" className="hover:text-charcoal hover-line">
                  Phong Cách Sống
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-charcoal hover-line">
                  Kiến Trúc
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-charcoal hover-line">
                  Chất Liệu
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-charcoal hover-line">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Press */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-sans tracking-[0.25em] text-charcoal/40 uppercase block">
              MẠNG XÃ HỘI &amp; TƯ LIỆU
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-[0.2em] uppercase text-charcoal/80">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal hover-line"
                >
                  Phim Kiến Trúc
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top magnetic trigger */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between h-full pt-2">
            <MagneticButton onClick={scrollToTop} dataCursor="explore">
              <button
                type="button"
                aria-label="Cuộn lên đầu trang"
                className="w-16 h-16 rounded-full border border-charcoal/20 flex flex-col items-center justify-center text-charcoal hover:bg-charcoal hover:text-warm-ivory transition-all duration-400"
              >
                <span className="text-sm">↑</span>
                <span className="text-[8px] font-sans tracking-[0.2em] uppercase mt-0.5">
                  LÊN ĐẦU
                </span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Colophon & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans tracking-[0.2em] text-charcoal/50 uppercase gap-4">
          <p>© 2026 SOLARA RESIDENCES. ĐÃ ĐĂNG KÝ BẢN QUYỀN.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-charcoal">
              CHÍNH SÁCH BẢO MẬT
            </a>
            <span>·</span>
            <a href="#terms" className="hover:text-charcoal">
              ĐIỀU KHOẢN PHÁP LÝ
            </a>
            <span>·</span>
            <a href="#disclaimer" className="hover:text-charcoal">
              TƯ LIỆU THIẾT KẾ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
