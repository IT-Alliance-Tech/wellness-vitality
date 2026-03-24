"use client";

import React from "react";
import Button from "@/components/ui/Button";

const ivPacks = [
  {
    title: "Immune Defence IV",
    description:
      "A high-dose blend of Vitamin C, Zinc, and Antioxidants to support your immune system's natural function.",
    features: ["Immune Support", "Antioxidant Rich", "Recovery Support"],
    accent: "rose",
  },
  {
    title: "Energy & Performance IV",
    description:
      "Formulated with B-Complex vitamins and key amino acids to combat fatigue and enhance physical performance.",
    features: ["Energy Boost", "Metabolic Support", "B-Complex Focus"],
    accent: "indigo",
  },
  {
    title: "Beauty & Skin Glow IV",
    description:
      "Enriched with Glutathione and Vitamin C to promote skin health, collagen production, and a natural radiance.",
    features: ["Skin Hydration", "Collagen Support", "Glutathione Boost"],
    accent: "rose",
  },
];

const IVTherapy = () => {
  return (
    <section
      id="iv-therapy"
      className="py-10 md:py-16 bg-white relative overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-medium text-[rgb(59,63,105)] mb-6">
            IV Infusion Therapy
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            IV therapy delivers vitamins, minerals and nutrients directly into
            the bloodstream, allowing higher nutrient availability compared with
            oral supplements.
          </p>

          <div className="mt-8 h-1 w-20 bg-[rgb(202,18,84)] mx-auto" />
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

          {ivPacks.map((pack) => (
            <div
              key={pack.title}
              className="bg-white p-4 sm:p-8 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition duration-300 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-sm sm:text-2xl font-medium text-[rgb(59,63,105)] mb-2 sm:mb-6">
                {pack.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-8">
                {pack.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-10 flex-grow">
                {pack.features.map((feature, i) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-normal text-[rgb(59,63,105)]/80 ${i > 1 ? "hidden sm:flex" : ""
                      }`}
                  >
                    <span className="w-1.5 h-1.5 bg-[rgb(202,18,84)]"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 🔥 WIDER OUTLINE BUTTON */}
              <Button
                href="/services/iv-infusions"
                variant="ghost"
                className={`w-full px-6 sm:px-8 py-3 sm:py-5 text-xs sm:text-base !rounded-none font-medium border tracking-wide transition-all duration-300 ${pack.accent === "rose"
                  ? "border-[rgb(202,18,84)] text-[rgb(202,18,84)] hover:bg-[rgb(202,18,84)] hover:text-white"
                  : "border-[rgb(59,63,105)] text-[rgb(59,63,105)] hover:bg-[rgb(59,63,105)] hover:text-white"
                  }`}
              >
                Explore
              </Button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IVTherapy;