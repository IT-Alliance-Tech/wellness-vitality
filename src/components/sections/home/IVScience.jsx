import React from 'react';
import Button from '@/components/ui/Button';

const points = [
  {
    title: 'Direct Nutrient Delivery',
    description: 'IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Higher Nutrient Levels',
    description: 'Intravenous delivery can achieve higher circulating nutrient concentrations compared with oral supplementation.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" />
      </svg>
    )
  },
  {
    title: 'Supports Cellular Energy Production',
    description: 'Many IV nutrients support mitochondrial function and cellular metabolism.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5" />
      </svg>
    )
  }
];

const IVScience = () => {
  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative group order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src="/iv_science.png"
                alt="Science of IV Therapy"
                className="w-full h-full object-cover"
              />

              {/* BADGE */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg px-4 py-3 shadow-md flex items-center gap-3 w-[85%] border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[rgb(202,18,84)]/10 flex items-center justify-center text-[rgb(202,18,84)] text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-lg font-bold text-[rgb(59,63,105)]">100%</div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">
                    Direct Absorption
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">

            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[rgb(202,18,84)]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[rgb(202,18,84)]">
                The Results
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(59,63,105)] mb-5 leading-snug">
              Why <span className="text-[rgb(202,18,84)]">IV Therapy</span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              IV therapy delivers vitamins, minerals and nutrients directly into the bloodstream, allowing higher nutrient availability compared with oral supplements.
            </p>

            {/* Points */}
            <div className="space-y-6 mb-8">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4">

                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgb(59,63,105)]/5 flex items-center justify-center text-[rgb(202,18,84)]">
                    {point.icon}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[rgb(59,63,105)] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Button */}
            <Button
              href="/booking"
              className="px-6 py-2.5 bg-[rgb(202,18,84)] text-white text-sm rounded-none"
            >
              Book a Session Now
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IVScience;