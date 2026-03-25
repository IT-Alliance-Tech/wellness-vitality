import React from 'react';

const AboutIntro = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 reveal-left delay-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">
              Professional Healthcare <br />
              <span className="italic font-light text-rose/90">at your fingertips</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Our services are delivered with clinical precision and a focus on personalised care. Whether you require an IV infusion to boost your energy or a comprehensive health assessment, our team is dedicated to your wellbeing.
              </p>
              <p>
                Services are available in clinic or delivered to your home, workplace, aged care facility or NDIS residence, ensuring you receive the care you need where you feel most comfortable.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group reveal-right">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="/hero_healthcare.png" 
                alt="Professional Healthcare" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-indigo/10 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            
            {/* Decorative bloom */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo/5 rounded-full blur-3xl -z-10" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
