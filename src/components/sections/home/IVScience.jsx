import React from 'react';
import Button from '@/components/ui/Button';

const points = [
  {
    title: 'Direct Nutrient Delivery',
    description: 'IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Higher Nutrient Levels',
    description: 'Intravenous delivery can achieve higher circulating nutrient concentrations compared with oral supplementation.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    title: 'Supports Cellular Energy Production',
    description: 'Many IV nutrients support mitochondrial function and cellular metabolism.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

const IVScience = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Image with Badge */}
          <div className="relative group order-2 lg:order-1">
             <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="/iv_science.png" 
                  alt="Science of IV Therapy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* 100% Badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl flex items-center gap-4 w-[85%] border border-gray-100">
                   <div className="w-12 h-12 rounded-full bg-indigo/5 flex items-center justify-center text-rose">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                   </div>
                   <div>
                      <div className="text-2xl font-bold text-indigo leading-none">100%</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Direct Absorption</div>
                   </div>
                </div>
             </div>
             
             {/* Decorative bloom */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo/5 rounded-full blur-3xl" />
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-indigo" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo">The Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">
              Why <span className="italic font-light text-rose">IV Therapy</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              IV therapy delivers vitamins, minerals and nutrients directly into the bloodstream, allowing higher nutrient availability compared with oral supplements.
            </p>
            
            <div className="space-y-10 mb-12">
              {points.map((point) => (
                <div key={point.title} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo/5 flex items-center justify-center text-rose group-hover:bg-rose group-hover:text-white transition-all duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo mb-2 transition-colors duration-300 group-hover:text-rose">{point.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/booking" variant="primary" className="px-10 py-4">
              Book a Session Now
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IVScience;
