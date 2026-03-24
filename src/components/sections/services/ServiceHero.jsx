import React from 'react';
import Button from '@/components/ui/Button';

const ServiceHero = ({
  badge,
  heading,
  subtext,
  ctaLabel = 'Book Now',
  ctaHref = '/booking',
  secondaryCtaLabel = 'Enquire Now',
  secondaryCtaHref = '/contact',
  accentColor = 'from-indigo via-[#2d2b55] to-[#1e1c3f]',
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#3b3f69] overflow-hidden">
      {/* Decorative blurs removed for strict brand compliance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16relative z-10 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">{badge}</span>
          </div>
        )}

        <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {heading}
        </h1>

        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-10">
          {subtext}
        </p>

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
  );
};

export default ServiceHero;
