"use client";

import React from "react";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section
      className="relative pt-29 pb-20 overflow-hidden"
      style={{ backgroundColor: "rgb(59, 63, 105)" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 pt-8 pb-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-semibold" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <svg
                className="w-3 h-3"
                style={{ color: "rgb(202,18,84)" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>

              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                Mobile Healthcare & IV Wellness
              </span>
            </div>

            {/* HEADING */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6"
              style={{ color: "#FFFFFF" }}
            >
              Welcome to Wellness &{" "}
              <span
                className="italic"
                style={{ color: "rgb(202,18,84)" }}
              >
                Vitality Australia
              </span>
            </h1>

            {/* PARAGRAPH */}
            <p 
              className="text-[16px] sm:text-[17px] md:text-[18px] mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              Professional mobile healthcare and IV wellness services delivered by AHPRA-registered nurses.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">

              <Button
                href="/booking"
                variant="primary"
                className="px-6 py-3 text-[15px] flex items-center gap-2"
                style={{ boxShadow: "0 10px 30px rgba(202,18,84,0.25)" }}
              >
                Book Treatment
              </Button>

              <Button
                href="/services"
                variant="outlineWhite"
                className="px-6 py-3 text-[15px] flex items-center gap-2"
              >
                Our Services
              </Button>

            </div>

            {/* BENEFITS */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-white/10">

              {[
                "REGISTERED NURSES",
                "TGA APPROVED PRODUCTS",
                "MOBILE HEALTHCARE",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "rgb(202,18,84)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="text-[11px] font-semibold text-white/70 tracking-[0.15em]">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-[8%] bottom-0 w-[38%] h-[85%] hidden lg:flex items-end justify-end pointer-events-none">
        <img
          src="/herowomen.png"
          alt="Healthcare Professionals"
          className="w-full h-auto max-h-full object-contain object-bottom object-right"
        />
      </div>
    </section>
  );
};

export default Hero;