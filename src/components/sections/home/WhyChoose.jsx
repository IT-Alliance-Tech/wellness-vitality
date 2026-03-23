import React from 'react';
import Button from '@/components/ui/Button';

const reasons = [
  {
    title: 'AHPRA-Registered Professionals',
    description: 'Every nurse meets strict Australian healthcare registration standards — no exceptions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Personalised Clinical Care',
    description: 'Full clinical assessment conducted before every single treatment to ensure safety and suitability.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Mobile Healthcare Services',
    description: 'We come to your home, workplace, or facility — on your schedule, wherever you feel most comfortable.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Aged Care & NDIS Support',
    description: 'Specialised nursing support tailored for aged care residents and NDIS participants.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 bg-indigo-subtle relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6 font-bold">
               <div className="w-8 h-px bg-indigo" />
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">
              Why Choose <span className="text-rose">Wellness Vitality Australia</span>
            </h2>
            
            <p className="text-base text-gray-600 mb-12 leading-relaxed max-w-xl font-medium">
              At Wellness Vitality Australia, your health and safety are our highest priorities. All services are delivered by fully qualified, AHPRA-registered Registered Nurses, ensuring every treatment meets strict Australian healthcare standards.
            </p>

            <p className="text-sm text-gray-500 mb-12 leading-relaxed max-w-xl">
              With strong clinical experience and a focus on personalised care, we provide professional services including IV infusions, blood collection, teeth whitening, and wellness checks for aged care and NDIS clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex flex-col gap-4">
                  <div className="w-10 h-10 bg-indigo/5 rounded-lg flex items-center justify-center text-indigo">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-indigo mb-2">{reason.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/booking" variant="primary" className="px-8 py-3.5 group">
               Book an Appointment 
               <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
               <img 
                 src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800" 
                 alt="Healthcare Team" 
                 className="w-full h-full object-cover"
               />
               
               {/* Floating Overlay Badge */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-[10px] text-white/80 uppercase font-bold tracking-widest leading-tight">AHPRA-Registered Nurses</div>
                  </div>
               </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
