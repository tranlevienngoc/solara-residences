"use client";

import React, { useState } from "react";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { IntroStorySection } from "@/components/sections/IntroStorySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { EditorialGallerySection } from "@/components/sections/EditorialGallerySection";
import { ResidenceSelectorSection } from "@/components/sections/ResidenceSelectorSection";
import { HorizontalGallerySection } from "@/components/sections/HorizontalGallerySection";
import { LifestyleAmenitiesSection } from "@/components/sections/LifestyleAmenitiesSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { EnquirySection } from "@/components/sections/EnquirySection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F2EFE8] text-charcoal font-sans selection:bg-charcoal selection:text-warm-ivory">
        {/* Subtle architectural grain texture */}
        <div className="grain-overlay" />

        {/* Minimal Stepped Preloader */}
        <Preloader onComplete={() => setIsLoaded(true)} />

        {/* Desktop Custom Smooth Cursor */}
        <CustomCursor />

        {/* Floating Minimal Navigation */}
        <Navigation />

        {/* Main Architectural Experience */}
        <main className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-95"}`}>
          {/* 00 — Hero Cinematic Introduction */}
          <HeroSection />

          {/* 01 — The Story: Where architecture meets the horizon */}
          <IntroStorySection />

          {/* 02 — Location: A rare coastal address (Da Nang, Vietnam) */}
          <LocationSection />

          {/* Editorial Photographic Storytelling */}
          <EditorialGallerySection />

          {/* 03 — Residences Typology Selector (Garden, Sky, Penthouse) */}
          <ResidenceSelectorSection />

          {/* Horizontal Scrubbed Architectural Gallery */}
          <HorizontalGallerySection />

          {/* Lifestyle & Wellbeing Amenities */}
          <LifestyleAmenitiesSection />

          {/* Architecture Section (Moody Charcoal Section) */}
          <ArchitectureSection />

          {/* Materiality & Provenance Details */}
          <MaterialsSection />

          {/* Fullscreen Monumental Statement */}
          <StatementSection />

          {/* Private Enquiry & Presentation Request */}
          <EnquirySection />
        </main>

        {/* Editorial Brand Colophon & Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
