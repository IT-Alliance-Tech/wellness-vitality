import React from 'react';
import Button from '@/components/ui/Button';

const CTA = () => {
  return (
    <section className="bg-blue-600">
      <div className="py-12 sm:py-16 lg:flex lg:items-center lg:justify-between w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block italic font-light opacity-90">Ready to prioritise your health?</span>
          <span className="block">Start your vitality journey today.</span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button href="#booking" variant="secondary">
            Get Started
          </Button>
          <a href="#contact" className="text-base font-semibold leading-relaxed text-white">
            Talk to an expert <span aria-hidden="true">â†’</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
