import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-indigo overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rose/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 font-bold">
               <svg className="w-3 h-3 text-rose" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
               </svg>
               <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white">Mobile Healthcare & IV Wellness</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 !text-white italic">
              Mobile Healthcare & <span className="text-rose not-italic">IV Wellness</span> Services
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-medium">
              Professional IV infusions, wellness checks, and clinical services delivered by qualified registered nurses.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="/booking" variant="primary" className="px-8 py-4 text-base flex items-center gap-2 shadow-xl shadow-rose/20">
                Book IV Infusion
              </Button>
              <Button href="/contact" variant="outlineWhite" className="px-8 py-4 text-base flex items-center gap-2">
                Enquire Now
              </Button>
            </div>

            {/* Benefit Bar */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/10">
               {[
                 'REGISTERED NURSES',
                 'TGA APPROVED',
                 'MOBILE HEALTHCARE'
               ].map((benefit) => (
                 <div key={benefit} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[10px] font-bold text-white/30 tracking-[0.2em]">{benefit}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT IMAGE - Circular Container */}
          <div className="relative hidden lg:flex justify-center items-center h-full">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Large Decorative Circle */}
              <div className="absolute inset-0 bg-white/5 rounded-full shadow-2xl overflow-hidden border-8 border-white/5 scale-110">
                <img
                  src="/hero_woman_cutout.png"
                  alt="Healthcare Professional"
                  className="w-full h-full object-cover scale-150 origin-top"
                />
              </div>

              {/* Accent Circle */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose/20 rounded-full blur-3xl" />
            </div>

            {/* Accent Bar */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-2 h-32 bg-rose rounded-full z-30" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;