import React from 'react';
import Button from '@/components/ui/Button';

const ServiceCTA = ({
  heading,
  text,
  ctaLabel = 'Book Now',
  ctaHref = '/booking',
  secondaryCtaLabel = 'Enquire Now',
  secondaryCtaHref = '/contact',
  dark = true,
}) => {
  return dark ? (
    <section className="py-20 bg-[#3b3f69] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold !text-white mb-4">{heading}</h2>
        {text && <p className="text-white text-lg font-light mb-10 max-w-2xl mx-auto">{text}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={ctaHref} variant="primary" className="px-8 py-3.5 text-base flex items-center justify-center gap-3 group/cta">
            {ctaLabel}
            <svg className="w-5 h-5 transition-transform group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          {secondaryCtaLabel && (
            <Button href={secondaryCtaHref} variant="outlineWhite" className="px-8 py-3.5 text-base">
              {secondaryCtaLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  ) : (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-4">{heading}</h2>
        {text && <p className="text-gray-600 text-lg font-light mb-10 max-w-2xl mx-auto">{text}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={ctaHref} variant="primary" className="px-8 py-3.5 text-base flex items-center justify-center gap-3 group/cta">
            {ctaLabel}
            <svg className="w-5 h-5 transition-transform group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          {secondaryCtaLabel && (
            <Button href={secondaryCtaHref} variant="outline" className="px-8 py-3.5 text-base">
              {secondaryCtaLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
