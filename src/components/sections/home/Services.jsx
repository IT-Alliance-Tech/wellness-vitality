"use client";

import React from "react";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "IV Infusions",
    description:
      "Targeted intravenous nutrient therapies designed to support energy, recovery and immune health.",
    image: "/images/services/iv-infusion.png",
  },
  {
    title: "Health Assessments",
    description:
      "Comprehensive wellness checks and preventative health screening for aged care and NDIS clients.",
    image: "/images/services/health-assessment.png",
  },
  {
    title: "Preventative Health & Wellness",
    description:
      "Vitamin injections, nutrition guidance and lifestyle health consultations.",
    image: "/images/services/preventative-health.png",
  },
  {
    title: "Aged Care & NDIS Nursing",
    description:
      "Professional nursing services supporting ongoing healthcare needs.",
    image: "/images/services/aged-care.png",
  },
  {
    title: "Blood Collection",
    description:
      "Convenient blood testing services available at home or care facilities.",
    image: "/images/services/blood-collection.png",
  },
  {
    title: "Corporate Health Services",
    description:
      "Workplace health checks and corporate IV hydration services.",
    image: "/images/services/corporate-health.png",
  },
];

const Services = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#3b3f69] mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl md:mx-auto text-sm md:text-lg leading-relaxed">
            In-clinic or at-home state-of-the-art lab tests, scans, procedures, vaccines. This is all delivered with radical empathy, clinical excellence and absolutely no judgement.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[160px] sm:h-[200px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* TITLE */}
              <div className="absolute bottom-0 w-full bg-white/95 p-3 text-center">
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-[#3b3f69] leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">
                  {service.description}
                </p>

                <a href="/booking">
                  <button className="bg-[#ca1254] text-white px-4 py-2 text-xs sm:text-sm hover:bg-[#a30f44] transition">
                    Book Now →
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-8 md:mt-12">
          <Button href="/services" className="px-8 md:px-10 py-3">
            View All Services
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Services;