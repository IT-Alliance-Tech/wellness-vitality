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
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16relative z-10 text-center">
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
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16text-center">
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
