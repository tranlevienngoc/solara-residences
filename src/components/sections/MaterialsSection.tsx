"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MATERIALS_DATA } from "@/lib/data";
import { MaterialItem } from "@/lib/types";

export function MaterialsSection() {
  const [activeMaterial, setActiveMaterial] = useState<MaterialItem>(MATERIALS_DATA[0]);

  return (
    <section
      id="materials"
      className="relative w-full bg-[#F2EFE8] py-28 md:py-44 lg:py-52 px-6 md:px-12 lg:px-16 text-charcoal border-t border-charcoal/10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 font-medium">
                04 — MATERIALITY
              </span>
              <span className="w-16 h-[1px] bg-charcoal/20" />
            </div>
            <h2 className="font-serif text-[clamp(44px,7.5vw,115px)] leading-[0.95] font-light text-charcoal">
              Materials
              <span className="block italic text-charcoal/85">that age beautifully.</span>
            </h2>
          </div>

          <p className="mt-6 lg:mt-0 font-serif italic text-lg md:text-2xl text-charcoal/70 max-w-md">
            Selected for their tactile resonance and quiet ability to develop a graceful patina over generations of coastal exposure.
          </p>
        </div>

        {/* Interactive Material Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Material Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {MATERIALS_DATA.map((mat, idx) => {
              const isActive = activeMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat)}
                  onMouseEnter={() => setActiveMaterial(mat)}
                  className={`group cursor-pointer p-6 transition-all duration-300 border-b relative overflow-hidden ${
                    isActive
                      ? "border-charcoal bg-charcoal/5 translate-x-2"
                      : "border-charcoal/15 hover:border-charcoal/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-sans tracking-[0.25em] text-charcoal/40 uppercase">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-sans tracking-[0.2em] text-charcoal/60 uppercase">
                      {mat.origin}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-2xl md:text-3xl mt-2 transition-all duration-300 ${
                      isActive ? "text-charcoal font-normal" : "text-charcoal/60 group-hover:text-charcoal"
                    }`}
                  >
                    {mat.name}
                  </h3>

                  <div
                    className={`mt-3 overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-serif italic text-sm text-charcoal/75">
                      {mat.description}
                    </p>
                    <span className="text-[10px] font-sans tracking-[0.2em] text-charcoal/50 uppercase block mt-2">
                      FINISH: {mat.finish}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Macro Photography Display with Light Sheen */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div
              className="relative w-full h-[55vh] md:h-[68vh] min-h-[440px] overflow-hidden bg-charcoal/10 shadow-lg group"
              data-cursor="view"
            >
              <Image
                key={activeMaterial.image}
                src={activeMaterial.image}
                alt={activeMaterial.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105"
              />

              {/* Shimmer light sweep across the stone texture */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -skew-x-12 translate-x-[-150%] group-hover:translate-x-[200%] transition-transform duration-1000" />

              {/* Provenance Badge */}
              <div className="absolute top-6 left-6 z-10 bg-warm-ivory/90 backdrop-blur-md px-4 py-2 border border-charcoal/10 text-[10px] font-sans tracking-[0.22em] uppercase text-charcoal shadow-sm">
                MACRO DETAIL · {activeMaterial.name}
              </div>

              {/* Texture specs */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-center bg-charcoal/85 backdrop-blur-md text-warm-ivory px-5 py-3 text-xs font-sans tracking-[0.2em] uppercase shadow-md">
                <span>ORIGIN: {activeMaterial.origin}</span>
                <span>{activeMaterial.finish}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-charcoal/60 font-sans tracking-wide">
              <span>UNPOLISHED &amp; POROUS FINISHES</span>
              <span className="italic font-serif">Low Embodied Carbon Extraction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
