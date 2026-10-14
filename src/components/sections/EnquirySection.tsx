"use client";

import React, { useState } from "react";
import { MagneticButton } from "../ui/MagneticButton";

export function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    residenceType: "Sky Residence",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please provide your full name";
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Please provide your telephone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate luxury API presentation request dispatch
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section
      id="enquiry"
      className="relative w-full bg-[#F2EFE8] py-28 md:py-44 lg:py-52 px-6 md:px-12 lg:px-16 text-charcoal border-t border-charcoal/10"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading & Private Advisory Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal/50 font-medium">
                  05 — PRIVATE ADVISORY
                </span>
                <span className="w-16 h-[1px] bg-charcoal/20" />
              </div>

              <h2 className="font-serif text-[clamp(44px,7vw,110px)] leading-[0.95] font-light text-charcoal">
                Find your
                <span className="block italic text-charcoal/85">place at Solara.</span>
              </h2>

              <p className="mt-8 font-serif italic text-lg md:text-2xl text-charcoal/75 leading-relaxed max-w-md">
                We invite discerning collectors and prospective residents to request a private architectural presentation and floorplan dossier.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-charcoal/15 text-xs font-sans tracking-wide text-charcoal/70">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-1">
                  SALES GALLERY &amp; RESIDENCE LOUNGE
                </span>
                <p className="text-sm font-light text-charcoal">
                  Vo Nguyen Giap Coastal Promenade, My Khe Beach, Da Nang, Vietnam
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-1">
                    DIRECT PRIVATE LINE
                  </span>
                  <a
                    href="tel:+84236888999"
                    className="text-sm font-light text-charcoal hover:underline"
                  >
                    +84 (0) 236 888 999
                  </a>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal/40 block mb-1">
                    EMAIL ADVISORY
                  </span>
                  <a
                    href="mailto:advisory@solara-residences.com"
                    className="text-sm font-light text-charcoal hover:underline"
                  >
                    advisory@solara-residences.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Underline Minimalist Editorial Form */}
          <div className="lg:col-span-7 bg-[#EAE6DD]/40 p-8 md:p-14 border border-charcoal/10">
            {status === "success" ? (
              <div className="py-16 md:py-24 text-center space-y-6">
                <div className="w-12 h-12 rounded-full border border-charcoal/30 flex items-center justify-center mx-auto text-charcoal">
                  ✓
                </div>
                <h3 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
                  Thank you.
                </h3>
                <p className="font-serif italic text-lg md:text-2xl text-charcoal/75 max-w-md mx-auto leading-relaxed">
                  Our private sales team will contact you shortly to coordinate your bespoke presentation.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        residenceType: "Sky Residence",
                        message: "",
                      });
                    }}
                    className="text-xs font-sans tracking-[0.25em] uppercase text-charcoal/60 hover:text-charcoal underline"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-sans tracking-[0.25em] uppercase text-charcoal/50"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Lord / Lady / Dr. / Mr. / Ms."
                    className="editorial-input"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-700/80 font-sans tracking-wide block pt-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-sans tracking-[0.25em] uppercase text-charcoal/50"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="name@domain.com"
                    className="editorial-input"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-700/80 font-sans tracking-wide block pt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Telephone */}
                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="block text-[11px] font-sans tracking-[0.25em] uppercase text-charcoal/50"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="+84 / +1 / +44 ..."
                    className="editorial-input"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-700/80 font-sans tracking-wide block pt-1">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Residence Type Selection */}
                <div className="space-y-1">
                  <label
                    htmlFor="residenceType"
                    className="block text-[11px] font-sans tracking-[0.25em] uppercase text-charcoal/50"
                  >
                    Residence Preference
                  </label>
                  <select
                    id="residenceType"
                    value={formData.residenceType}
                    onChange={(e) =>
                      setFormData({ ...formData, residenceType: e.target.value })
                    }
                    className="editorial-input bg-transparent cursor-pointer"
                  >
                    <option value="Garden Residence">Garden Residence (2 BR · 110–135 m²)</option>
                    <option value="Sky Residence">Sky Residence (3 BR · 145–180 m²)</option>
                    <option value="Penthouse">Penthouse (3–4 BR · 210–280 m²)</option>
                    <option value="Full Floor Collection">Full Floor Private Collection</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-sans tracking-[0.25em] uppercase text-charcoal/50"
                  >
                    Bespoke Inquiries / Notes
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Preferred appointment schedule, timeline, or special requirements..."
                    className="editorial-input resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-6">
                  <MagneticButton dataCursor="explore">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto px-10 py-4 rounded-full bg-charcoal text-warm-ivory text-xs font-sans tracking-[0.25em] uppercase font-medium hover:bg-charcoal/85 transition-all duration-300 disabled:opacity-50"
                    >
                      {status === "loading"
                        ? "COORDINATING PRESENTATION..."
                        : "REQUEST PRIVATE PRESENTATION →"}
                    </button>
                  </MagneticButton>
                </div>

                <p className="text-[10px] text-charcoal/50 font-sans tracking-wide pt-2">
                  All correspondence remains strictly confidential under private estate nondisclosure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
