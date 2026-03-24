import React from 'react';
import Button from '@/components/ui/Button';

const points = [
  {
    title: 'Direct Nutrient Delivery',
    description: 'IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Higher Nutrient Levels',
    description: 'Intravenous delivery can achieve higher circulating nutrient concentrations compared with oral supplementation.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" />
      </svg>
    )
  },
  {
    title: 'Supports Cellular Energy Production',
    description: 'Many IV nutrients support mitochondrial function and cellular metabolism.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5" />
      </svg>
    )
  }
];

const IVScience = () => {
  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img
                src="/iv_science.png"
                alt="Science of IV Therapy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* BADGE */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-xl flex items-center gap-4 w-[85%] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[rgb(202,18,84)]/10 flex items-center justify-center text-[rgb(202,18,84)]">
                  ✓
                </div>
                <div>
                  <div className="text-2xl font-bold text-[rgb(59,63,105)]">100%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                    Direct Absorption
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">

            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[rgb(202,18,84)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[rgb(202,18,84)]">
                The Results
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(59,63,105)] mb-8 leading-tight">
              Why <span className="text-[rgb(202,18,84)]">IV Therapy</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              IV therapy delivers vitamins, minerals and nutrients directly into the bloodstream, allowing higher nutrient availability compared with oral supplements.
            </p>

            {/* Points */}
            <div className="space-y-10 mb-12">
              {points.map((point) => (
                <div key={point.title} className="flex gap-6 group">

                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgb(59,63,105)]/5 flex items-center justify-center text-[rgb(202,18,84)]">
                    {point.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[rgb(59,63,105)] mb-2 group-hover:text-[rgb(202,18,84)] transition">
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
              className="px-10 py-4 bg-[rgb(202,18,84)] text-white rounded-xl"
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