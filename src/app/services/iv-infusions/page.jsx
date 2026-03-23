import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const treatments = [
  { name: 'Immune Defence IV', price: '$220–$280', desc: 'High-dose vitamin C, zinc, and immune-supporting nutrients.' },
  { name: 'Energy & Performance IV', price: '$200–$250', desc: 'B-complex vitamins and amino acids for sustained energy.' },
  { name: 'Beauty & Skin Glow IV', price: '$260–$320', desc: 'Glutathione, biotin, and collagen-boosting nutrients.' },
  { name: 'Detox & Liver Support IV', price: '$250–$310', desc: 'Liver-supporting antioxidants and detox nutrients.' },
  { name: 'Hydration & Recovery IV', price: '$180–$230', desc: 'Electrolytes and minerals for rapid rehydration.' },
  { name: 'Athlete Recovery IV', price: '$240–$290', desc: 'Targeted nutrients to accelerate muscle recovery.' },
];

const nutrients = [
  'Vitamin C',
  'B Complex (B1, B2, B3, B5, B6)',
  'Vitamin B12',
  'Magnesium',
  'Zinc',
  'Glutathione',
  'NAD+',
];

const benefits = [
  'Direct Nutrient Delivery',
  'Higher Nutrient Levels',
  'Supports Cellular Energy Production',
  'Fast-Acting Recovery Support',
  'Optimal Hydration',
];

const steps = [
  { 
    title: 'Consultation', 
    desc: 'Initial clinical assessment with our registered nurse to determine suitability and goals.' 
  },
  { 
    title: 'Preparation', 
    desc: 'Custom formulation of your nutrient therapy based on your individual requirements.' 
  },
  { 
    title: 'Administration', 
    desc: 'Professional administration by a qualified nurse in a relaxed environment.' 
  },
  { 
    title: 'Recovery', 
    desc: 'Relax and rehydrate as the nutrients are delivered directly into your bloodstream.' 
  },
];

const faqs = [
  {
    q: 'Is IV therapy painful?',
    a: 'Most patients only feel a small pinch during the initial insertion. The rest of the treatment is generally very comfortable and relaxing.'
  },
  {
    q: 'How long does a session take?',
    a: 'Typically, a session lasts between 30 to 60 minutes, depending on the specific infusion and your individual needs.'
  },
  {
    q: 'How often should I get an infusion?',
    a: 'Frequency depends on your health goals and initial clinical assessment. Some patients benefit from weekly sessions, while others choose once a month for maintenance.'
  }
];

export default function IVInfusionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Intravenous Therapy"
        heading="IV Infusion Therapy"
        subtext="Targeted intravenous nutrient therapies designed to support energy, recovery, and overall wellbeing."
        ctaLabel="Book IV Infusion"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
        accentColor="from-indigo via-[#2d2b55] to-[#1e1c3f]"
      />

      {/* Image & About Section */}
      <section className="py-24 bg-gradient-to-br from-white to-rose/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose/5 rounded-full blur-3xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1">
                <Image 
                  src="/images/services/iv-infusion.png" 
                  alt="IV Infusion Wellness" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-indigo">Premium Care</div>
                  <div className="text-xs text-gray-500">Qualified Nursing</div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-rose" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">About This Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">Fast-Acting Results Through <span className="text-rose">Direct Absorption</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                IV infusion therapy delivers essential vitamins, minerals, and nutrients directly into the bloodstream for optimal absorption. This method supports faster recovery, improved energy levels, and enhanced immune function, bypassing the digestive system for 100% bioavailability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-2xl font-bold text-indigo mb-1">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Absorption</div>
                </div>
                <div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-2xl font-bold text-indigo mb-1">AHPRA</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Registered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrients Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-indigo" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo">Clinical Ingredients</span>
              <div className="w-8 h-px bg-indigo" />
            </div>
            <h2 className="text-4xl font-bold text-indigo">Nutrients Used in Infusions</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {nutrients.map((n) => (
              <div key={n} className="px-8 py-4 bg-indigo-subtle border border-indigo/10 rounded-2xl text-indigo font-bold text-sm hover:bg-rose hover:text-white hover:border-rose transition-all duration-300">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments & Pricing */}
      <section className="py-24 bg-indigo relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-rose" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Treatments & Pricing</span>
              <div className="w-8 h-px bg-rose" />
            </div>
            <h2 className="text-4xl font-bold text-white">Available Infusions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <div key={t.name} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-rose transition-colors duration-300 leading-snug">{t.name}</h3>
                  <span className="text-sm font-bold text-rose bg-rose/5 px-3 py-1 rounded-full whitespace-nowrap ml-3">{t.price}</span>
                </div>
                <p className="text-sm text-white/50 font-light leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-white to-indigo/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-rose" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Process</span>
              <div className="w-8 h-px bg-rose" />
            </div>
            <h2 className="text-4xl font-bold text-indigo">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:border-rose/20 transition-all group shadow-sm hover:shadow-md">
                <div className="text-5xl font-bold text-rose/10 mb-6 group-hover:text-rose/20 transition-colors">0{i + 1}</div>
                <h3 className="text-xl font-bold text-indigo mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-indigo to-[#1e1c3f] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-rose" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Why Choose IV Therapy</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-8">Clinical Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="!text-white/95 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/10 backdrop-blur-sm">
                <div className="text-4xl font-bold text-rose mb-2">30m</div>
                <div className="text-[10px] font-bold !text-white/40 uppercase tracking-widest leading-relaxed">Typical Session</div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/10 backdrop-blur-sm">
                <div className="text-4xl font-bold text-rose mb-2">100%</div>
                <div className="text-[10px] font-bold !text-white/40 uppercase tracking-widest leading-relaxed">Absorption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-indigo mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to Book Your IV Infusion?"
        text="Book your IV infusion through our secure online booking system. Wellness Vitality Australia uses Calendly for all appointment scheduling, with Afterpay available for all services."
        ctaLabel="Book IV Infusion"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
