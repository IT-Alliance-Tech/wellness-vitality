import React from 'react';
import Button from '@/components/ui/Button';

const CTA = () => {
  return (
    <section className="bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block italic font-light opacity-90">Ready to prioritize your health?</span>
          <span className="block">Start your vitality journey today.</span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button href="#booking" variant="secondary">
            Get Started
          </Button>
          <a href="#contact" className="text-base font-semibold leading-relaxed text-white">
            Talk to an expert <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
