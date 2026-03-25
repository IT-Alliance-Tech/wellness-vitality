import React from 'react';
import Button from '@/components/ui/Button';

const ServiceBlock = ({ title, description, benefits, image, reverse, ctaText, ctaHref }) => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose/5 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {benefits && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-indigo/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                    {benefit}
                  </li>
                ))}
              </ul>
            )}

            {ctaText && (
              <Button href={ctaHref || '/booking'} variant="primary" className="px-8 py-3.5">
                {ctaText}
              </Button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceBlock;
