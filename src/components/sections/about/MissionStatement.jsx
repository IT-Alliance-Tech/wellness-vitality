import React from 'react';

const MissionStatement = () => {
  return (
    <section className="py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="bg-indigo rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl reveal-up delay-200">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
              Our Compass
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold !text-white mb-8 leading-tight">
              Our Mission
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-12">
              To provide <span className="text-rose font-medium">safe, professional and accessible</span> healthcare services that support overall wellbeing for individuals, aged care clients and NDIS participants.
            </p>
            
            <p className="text-lg text-white/70 italic mb-12">
              Patient-Centred Care: Every treatment is uniquely tailored to individual patient needs and requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { label: 'Safe', value: 'Clinical Grade' },
                { label: 'Professional', value: 'AHPRA Nurses' },
                { label: 'Accessible', value: 'Mobile First' }
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
