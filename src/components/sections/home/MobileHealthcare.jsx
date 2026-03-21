import React from 'react';
import Button from '@/components/ui/Button';

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Patient Preference',
    stat: '80%',
    description: 'Of patients prefer healthcare services delivered at home for ultimate comfort.',
    color: 'rose'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Efficiency',
    stat: 'Reduce',
    description: 'Clinic visits and waiting times significantly with our on-demand mobile care.',
    color: 'indigo'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Total Access',
    stat: 'Global',
    description: 'Available at homes, workplaces, and care facilities across Australia.',
    color: 'rose'
  }
];

const MobileHealthcare = () => {
  return (
    <section className="py-20 bg-indigo relative overflow-hidden">
      {/* Background Accents - Toned down for better text visibility */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.01] -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose/5 rounded-full blur-[100px] -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Side by Side (Reduced Gap & Enhanced Visibility) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 gap-8">
           <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-[1px] bg-rose" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose">Clinical Service</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-[0.95]">
                <span className="block text-white brightness-125">Healthcare That</span>
                <span className="text-rose">Comes To You</span>
              </h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed max-w-xl">
                Wellness Vitality Australia provides premium healthcare services delivered at your home, workplace, or facility for ultimate clinical comfort and convenience.
              </p>
           </div>
           
           <div className="flex-shrink-0 lg:mb-2">
              <Button href="/booking" variant="primary" className="px-12 py-5 text-lg shadow-xl shadow-rose/20">
                 Book a Home Visit
              </Button>
           </div>
        </div>

        {/* The Pillars Grid - Tighter Gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {pillars.map((pillar) => (
             <div key={pillar.title} className="bg-white p-8 rounded-3xl shadow-2xl border border-white/5 hover:scale-[1.02] transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${pillar.color === 'rose' ? 'bg-rose/10 text-rose' : 'bg-indigo/10 text-indigo'}`}>
                   {pillar.icon}
                </div>
                
                <div className="flex items-baseline gap-2 mb-3">
                   <span className={`text-4xl font-black tracking-tighter ${pillar.color === 'rose' ? 'text-rose' : 'text-indigo'}`}>{pillar.stat}</span>
                   <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{pillar.title}</span>
                </div>

                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                   {pillar.description}
                </p>
             </div>
           ))}
        </div>

        {/* Minimal Footer */}
        <div className="text-center">
           <p className="text-[9px] font-bold text-white/10 uppercase tracking-[0.6em]">
              Professional Australian Nursing Care
           </p>
        </div>

      </div>
    </section>
  );
};

export default MobileHealthcare;
