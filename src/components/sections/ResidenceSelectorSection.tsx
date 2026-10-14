"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RESIDENCES_DATA } from "@/lib/data";
import { Residence } from "@/lib/types";
import { MagneticButton } from "../ui/MagneticButton";

export function ResidenceSelectorSection() {
  const [selectedResidence, setSelectedResidence] = useState<Residence>(RESIDENCES_DATA[0]);
  const [activeModalResidence, setActiveModalResidence] = useState<Residence | null>(null);

  return (
    <section
      id="residences"
      className="relative w-full bg-[#F2EFE8] py-28 md:py-40 lg:py-48 px-6 md:px-12 lg:px-16 text-charcoal border-t border-charcoal/10"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 font-medium">
            02 — RESIDENCES
          </span>
          <span className="w-16 h-[1px] bg-charcoal/20" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24">
          <h2 className="font-serif text-[clamp(44px,7vw,112px)] leading-[0.95] font-light text-charcoal">
            Spaces
            <span className="block italic text-charcoal/85">to live slowly.</span>
          </h2>
          <p className="mt-6 lg:mt-0 font-serif italic text-lg md:text-2xl text-charcoal/70 max-w-md">
            Three distinct architectural typologies tailored for solitude, horizon contemplation, and effortless coastal entertaining.
          </p>
        </div>

        {/* Typology Navigation Tabs / Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Residence List & Detailed Specs */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="space-y-4">
              {RESIDENCES_DATA.map((res, idx) => {
                const isActive = selectedResidence.id === res.id;
                return (
                  <div
                    key={res.id}
                    onClick={() => setSelectedResidence(res)}
                    onMouseEnter={() => setSelectedResidence(res)}
                    className={`group cursor-pointer p-6 transition-all duration-400 border-b ${
                      isActive
                        ? "border-charcoal bg-charcoal/5"
                        : "border-charcoal/15 hover:border-charcoal/40"
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-sans tracking-[0.25em] text-charcoal/40 uppercase">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-sans tracking-[0.2em] text-charcoal/60 uppercase">
                        {res.area}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <h3
                        className={`font-serif text-2xl md:text-3xl lg:text-4xl transition-all duration-300 ${
                          isActive
                            ? "text-charcoal translate-x-2 font-normal"
                            : "text-charcoal/60 group-hover:text-charcoal group-hover:translate-x-1"
                        }`}
                      >
                        {res.name}
                      </h3>
                      <span
                        className={`text-xl transition-transform duration-300 ${
                          isActive
                            ? "translate-x-1 text-charcoal"
                            : "text-charcoal/20 group-hover:translate-x-1 group-hover:text-charcoal"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-sans tracking-[0.18em] text-charcoal/50 uppercase">
                      {res.bedrooms} · {res.category}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Active Residence Features Breakdown */}
            <div className="pt-6 p-6 rounded-none bg-stone/10 border border-charcoal/10 flex flex-col space-y-6">
              <div>
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-charcoal/50 block mb-2">
                  ARCHITECTURAL FEATURES
                </span>
                <ul className="space-y-2">
                  {selectedResidence.features.map((feat) => (
                    <li
                      key={feat}
                      className="text-xs font-sans tracking-wide text-charcoal/80 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal/60" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-serif italic text-base text-charcoal/75 leading-relaxed">
                {selectedResidence.description}
              </p>

              <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-charcoal/50 block">
                    INVESTMENT
                  </span>
                  <span className="font-serif text-lg font-normal text-charcoal">
                    {selectedResidence.priceStarting}
                  </span>
                </div>

                <MagneticButton
                  onClick={() => setActiveModalResidence(selectedResidence)}
                  dataCursor="explore"
                >
                  <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-charcoal text-warm-ivory text-[10px] font-sans tracking-[0.22em] uppercase font-medium hover:bg-charcoal/85 transition-colors">
                    <span>EXPLORE RESIDENCE</span>
                    <span>→</span>
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column: Monumental Architectural Presentation Visual */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div
              className="relative w-full h-[55vh] md:h-[70vh] min-h-[460px] overflow-hidden bg-charcoal/10 shadow-sm"
              data-cursor="view"
            >
              <Image
                key={selectedResidence.image}
                src={selectedResidence.image}
                alt={selectedResidence.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-all duration-700 ease-out hover:scale-105"
              />

              {/* Floating Typology Badge */}
              <div className="absolute top-6 left-6 z-10 bg-warm-ivory/90 backdrop-blur-md px-4 py-2 border border-charcoal/10 text-[10px] font-sans tracking-[0.22em] uppercase text-charcoal">
                {selectedResidence.floorplanTag}
              </div>

              {/* Quick specs pill */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-center bg-charcoal/80 backdrop-blur-md text-warm-ivory px-5 py-3 text-xs font-sans tracking-[0.2em] uppercase">
                <span>{selectedResidence.name}</span>
                <span>{selectedResidence.area}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-charcoal/60 font-sans tracking-wide">
              <span>NATURAL LIGHTING OPTIMIZATION: 94% COEFFICIENT</span>
              <span className="italic font-serif">Acoustic Glazing &amp; Teak Joinery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Residence Detail Modal / Blueprint Spec View */}
      {activeModalResidence && (
        <div
          className="fixed inset-0 z-[9990] flex items-center justify-center p-4 md:p-10 bg-charcoal/70 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveModalResidence(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#F2EFE8] border border-charcoal/20 shadow-2xl p-8 md:p-12 text-charcoal max-h-[90vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalResidence(null)}
              aria-label="Close residence modal"
              className="absolute top-6 right-6 p-2 text-charcoal/60 hover:text-charcoal text-2xl font-light focus:outline-none"
            >
              ✕
            </button>

            <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 block mb-2">
              ARCHITECTURAL SPECIFICATION
            </span>
            <h3 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
              {activeModalResidence.name}
            </h3>
            <p className="mt-1 text-sm font-sans tracking-[0.2em] text-charcoal/60 uppercase">
              {activeModalResidence.category} · {activeModalResidence.area}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-charcoal/5">
                <Image
                  src={activeModalResidence.image}
                  alt={activeModalResidence.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-charcoal/5">
                <Image
                  src={activeModalResidence.secondaryImage}
                  alt={`${activeModalResidence.name} Interior`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 border-t border-charcoal/15 pt-6">
              <h4 className="font-serif text-xl text-charcoal font-normal">
                Residence Narrative &amp; Finishes
              </h4>
              <p className="font-serif italic text-base md:text-lg text-charcoal/80 leading-relaxed">
                {activeModalResidence.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-sans tracking-[0.18em] uppercase text-charcoal/70">
                <div className="p-3 bg-stone/20">
                  <span className="text-[10px] text-charcoal/40 block">BEDROOMS</span>
                  <span className="font-medium text-charcoal">{activeModalResidence.bedrooms}</span>
                </div>
                <div className="p-3 bg-stone/20">
                  <span className="text-[10px] text-charcoal/40 block">INTERNAL AREA</span>
                  <span className="font-medium text-charcoal">{activeModalResidence.area}</span>
                </div>
                <div className="p-3 bg-stone/20">
                  <span className="text-[10px] text-charcoal/40 block">CEILING HEIGHT</span>
                  <span className="font-medium text-charcoal">3.20 METERS</span>
                </div>
                <div className="p-3 bg-stone/20">
                  <span className="text-[10px] text-charcoal/40 block">STARTING AT</span>
                  <span className="font-medium text-charcoal">{activeModalResidence.priceStarting}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="#enquiry"
                onClick={() => setActiveModalResidence(null)}
                className="px-8 py-3 rounded-full bg-charcoal text-warm-ivory text-xs font-sans tracking-[0.25em] uppercase font-medium hover:bg-charcoal/85 transition-colors"
              >
                REQUEST FLOORPLAN DOSSIER
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
