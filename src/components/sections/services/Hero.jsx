import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-[#3b3f69]">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Our Expertise</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Clinical & Wellness Services
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
          Experience elite healthcare delivered with a personal touch. From clinical assessments to restorative therapies, our services are designed to enhance your vitality.
        </p>
        <div className="mt-12 w-24 h-1.5 bg-[#ca1254] mx-auto rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
