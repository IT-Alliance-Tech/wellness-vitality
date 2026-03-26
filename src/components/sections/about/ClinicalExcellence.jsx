import React from 'react';

const ClinicalExcellence = () => {
  const standards = [
    {
      title: 'Qualified & Registered Nurses',
      description: 'All services are delivered by AHPRA-registered nurses meet strict registration standards.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Clinical Experience',
      description: 'Our team has strong clinical experience across various professional healthcare settings.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Professional Standards',
      description: 'We maintain strict adherence to Australian healthcare standards and protocols.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-14 bg-white overflow-hidden">
      {/* Subtle decorative accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-indigo" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo">Clinical Standards</span>
            <div className="w-8 h-px bg-indigo" />
          </div>
          <h2 className="text-4xl font-bold text-indigo mb-6">Clinical Standards</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            At Wellness Vitality Australia, your health and safety are our highest priorities. All services are delivered by fully qualified, AHPRA-registered Registered Nurses, ensuring every treatment meets strict Australian healthcare standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {standards.map((standard, index) => (
            <div 
              key={standard.title} 
              className={`group p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100/50 reveal-up`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo/5 flex items-center justify-center text-rose mb-8 group-hover:bg-rose group-hover:text-white transition-colors duration-500">
                {standard.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo mb-4 group-hover:text-rose transition-colors duration-300">
                {standard.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalExcellence;
