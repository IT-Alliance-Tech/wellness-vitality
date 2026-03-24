import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section
      className="relative pt-24 pb-6 overflow-hidden"
      style={{ backgroundColor: 'rgb(59, 63, 105)' }}
    >

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-16 pt-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 font-bold">
              <svg className="w-3 h-3" style={{ color: '#ca1254' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white">
                Mobile Healthcare & IV Wellness
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 !text-white italic">
              Welcome to Wellness &{' '}
              <span style={{ color: '#ca1254' }} className="not-italic">
                Vitality Australia
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-medium">
              Professional mobile healthcare and IV wellness services delivered by AHPRA-registered nurses.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                href="/booking"
                variant="primary"
                className="px-8 py-4 text-base flex items-center gap-2 shadow-xl"
                style={{ boxShadow: '0 10px 30px rgba(202,18,84,0.2)' }}
              >
                Book Treatment
              </Button>

              <Button
                href="/services"
                variant="outlineWhite"
                className="px-8 py-4 text-base flex items-center gap-2"
              >
                Our Services
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/10">
              {[
                'REGISTERED NURSES',
                'TGA APPROVED PRODUCTS',
                'MOBILE HEALTHCARE'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: '#ca1254' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[10px] font-bold text-white/30 tracking-[0.2em]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-[10%] bottom-[10%] w-[40%] h-[90%] hidden lg:flex items-end justify-end pointer-events-none z-0">
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