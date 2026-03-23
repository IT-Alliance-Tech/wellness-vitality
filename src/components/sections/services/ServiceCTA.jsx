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
    <section className="py-20 bg-gradient-to-br from-indigo via-[#2d2b55] to-[#1e1c3f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold !text-white mb-4">{heading}</h2>
        {text && <p className="text-white/80 text-lg font-light mb-10 max-w-2xl mx-auto">{text}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={ctaHref} variant="primary" className="px-8 py-3.5 text-base">
            {ctaLabel}
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
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-4">{heading}</h2>
        {text && <p className="text-gray-600 text-lg font-light mb-10 max-w-2xl mx-auto">{text}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={ctaHref} variant="primary" className="px-8 py-3.5 text-base">
            {ctaLabel}
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
