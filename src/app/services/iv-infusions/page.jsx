import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const treatments = [
  { name: 'Immune Defence IV', price: '$220 - $260', desc: 'High-dose vitamin C, zinc, and immune-supporting nutrients.' },
  { name: 'Energy & Performance IV', price: '$200 - $240', desc: 'B-complex vitamins and amino acids for sustained energy.' },
  { name: 'Beauty & Skin Glow IV', price: '$260 - $320', desc: 'Glutathione, biotin, and collagen-boosting nutrients.' },
  { name: 'Detox & Liver Support IV', price: '$250 - $300', desc: 'Liver-supporting antioxidants and detox nutrients.' },
  { name: 'Hydration & Recovery IV', price: '$180 - $220', desc: 'Electrolytes and minerals for rapid rehydration.' },
  { name: 'Athlete Recovery IV', price: '$220 - $260', desc: 'Targeted nutrients to accelerate muscle recovery.' },
];

const nutrients = [
  { name: 'Vitamin C', desc: 'Supports immune function and antioxidant protection.', icon: 'ðŸ›¡ï¸', color: 'blue' },
  { name: 'Vitamin D3', desc: 'Essential for bone health and immune regulation.', icon: 'â˜€ï¸', color: 'amber' },
  { name: 'Biotin', desc: 'Promotes healthy hair, skin, and metabolic function.', icon: 'âœ¨', color: 'emerald' },
  { name: 'B Complex', desc: 'Fuels energy production and nervous system support.', icon: 'âš¡', color: 'purple' },
  { name: 'Methylcobalamin', desc: 'Active form of B12 for energy and neurological health.', icon: 'ðŸ§ ', color: 'blue' },
  { name: 'Magnesium Sulphate', desc: 'Relaxes muscles, supports sleep and nerve function.', icon: 'ðŸŒ¿', color: 'emerald' },
  { name: 'Zinc', desc: 'Crucial for immune system, wound healing and DNA synthesis.', icon: 'ðŸ”‹', color: 'amber' },
  { name: 'Selenium', desc: 'Powerful antioxidant supporting thyroid and metabolic function.', icon: 'ðŸ›¡ï¸', color: 'blue' },
  { name: 'Taurine', desc: 'Supports cardiovascular health and cellular hydration.', icon: 'â¤ï¸', color: 'rose' },
  { name: 'Arginine', desc: 'Boosts nitric oxide for circulation and recovery.', icon: 'ðŸ©¸', color: 'blue' },
  { name: 'Glutamine', desc: 'Gut lining repair and immune system fuel source.', icon: 'ðŸ§¬', color: 'emerald' },
  { name: 'Lysine', desc: 'Collagen synthesis and antiviral immune defence.', icon: 'ðŸ’ª', color: 'blue' },
  { name: 'Ornithine', desc: 'Supports detoxification and growth hormone release.', icon: 'ðŸ”„', color: 'purple' },
  { name: 'Glutathione', desc: 'Master antioxidant for liver detox and skin brightening.', icon: 'âœ¨', color: 'amber' },
  { name: 'Coenzyme Q10', desc: 'Vital cellular energy coenzyme powering repair and metabolism.', icon: 'ðŸ”‹', color: 'emerald' },
  { name: 'Alpha Lipoic Acid', desc: 'Universal antioxidant supporting nerve health and glucose metabolism.', icon: 'âš¡', color: 'blue' },
  { name: 'NAD+', desc: 'Critical coenzyme for cellular energy, anti-aging, and DNA repair.', icon: 'ðŸ§¬', color: 'purple' },
];

const midPoint = Math.ceil(nutrients.length / 2);
const row1 = nutrients.slice(0, midPoint);
const row2 = nutrients.slice(midPoint);

const iconColors = {
  blue: 'bg-[#3b3f69] text-white',
  amber: 'bg-[#ca1254] text-white',
  emerald: 'bg-[#3b3f69] text-white',
  purple: 'bg-[#ca1254] text-white',
  rose: 'bg-[#ca1254] text-white',
};

const benefits = [
  'Direct nutrient delivery',
  'Higher nutrient absorption',
  'Supports cellular energy production',
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

const suitability = [
  { group: 'Active Professionals', reason: 'To support energy levels and cognitive function during high-demand periods.' },
  { group: 'Athletes & Fitness Enthusiasts', reason: 'For rapid rehydration and muscle recovery post-exertion.' },
  { group: 'Frequent Travellers', reason: 'To combat jet lag, support the immune system and restore hydration.' },
  { group: 'Overall Wellness Seekers', reason: 'Maintaining optimal nutrient levels for vitality and long-term health.' },
];

export default function IVInfusionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Intravenous Therapy"
        heading="IV Infusion Therapy"
        subtext="IV infusions deliver vitamins and nutrients directly into the bloodstream to support recovery, energy and immune health."
        ctaLabel="Book IV Infusion"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />

      {/* Image & About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1">
                <Image
                  src="/images/services/iv-infusion.png"
                  alt="IV Infusion Wellness"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#3b3f69] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#3b3f69]">Premium Care</div>
                  <div className="text-xs text-gray-500">Qualified Nursing</div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">About This Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] mb-8 leading-tight">Fast-Acting Results Through <span className="text-[#ca1254]">Direct Absorption</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                IV infusion therapy delivers essential vitamins, minerals, and nutrients directly into the bloodstream for optimal absorption. This method supports faster recovery, improved energy levels, and enhanced immune function, bypassing the digestive system for 100% bioavailability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-[#3b3f69] mb-1">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Absorption</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-[#3b3f69] mb-1">AHPRA</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Registered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrients Section (Infinite Marquee) */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] mb-4">
              Nutrients Used in Infusions
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We use only pharmaceutical-grade vitamins, minerals, and amino acids in our clinical formulations for maximum efficacy.
            </p>
          </div>

          <div className="relative flex flex-col gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-6">
              {[...row1, ...row1, ...row1, ...row1, ...row1].map((n, idx) => (
                <div key={`${n.name}-${idx}`} className="flex-shrink-0 w-80 bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl ${iconColors[n.color] || 'bg-gray-50 text-gray-500'}`}>
                    {n.icon}
                  </div>
                  <div>
                    <h3 className="text-[#3b3f69] font-bold text-lg mb-1">{n.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] gap-6">
              {[...row2, ...row2, ...row2, ...row2, ...row2].map((n, idx) => (
                <div key={`${n.name}-${idx}`} className="flex-shrink-0 w-80 bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl ${iconColors[n.color] || 'bg-gray-50 text-gray-500'}`}>
                    {n.icon}
                  </div>
                  <div>
                    <h3 className="text-[#3b3f69] font-bold text-lg mb-1">{n.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-100 text-[#3b3f69] text-[10px] font-bold tracking-[0.3em] uppercase shadow-sm">
              <svg className="w-4 h-4 text-[#ca1254]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Highest Clinical Standards
            </div>
          </div>
        </div>
      </section>

      {/* Treatments & Pricing */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#ca1254]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Treatments & Pricing</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] tracking-tight">IV Infusion Treatments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <div key={t.name} className="group bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#ca1254]/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h3 className="text-lg font-bold text-[#3b3f69] group-hover:text-[#ca1254] transition-colors duration-300 leading-snug">{t.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">{t.desc}</p>
                </div>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3b3f69]/40 uppercase tracking-widest">Pricing</span>
                  <span className="text-lg font-bold text-[#ca1254] bg-[#ca1254]/5 px-4 py-1.5 rounded-full whitespace-nowrap">{t.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#ca1254]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Process</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-[#ca1254]/20 transition-all group shadow-sm hover:shadow-md">
                <div className="text-5xl font-bold text-[#3b3f69]/10 mb-6 group-hover:text-[#3b3f69]/20 transition-colors">0{i + 1}</div>
                <h3 className="text-xl font-bold text-[#3b3f69] mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#3b3f69] text-white overflow-hidden relative">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Why Choose IV Therapy</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-8">Clinical Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#ca1254]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                <div className="text-4xl font-bold text-[#ca1254] mb-2">30m</div>
                <div className="text-[10px] font-bold text-white uppercase tracking-widest leading-relaxed">Typical Session</div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                <div className="text-4xl font-bold text-[#ca1254] mb-2">100%</div>
                <div className="text-[10px] font-bold text-white uppercase tracking-widest leading-relaxed">Absorption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#ca1254]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Ideal For</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">Is IV Therapy for You?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suitability.map((item) => (
              <div key={item.group} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo/10 transition-all">
                <h3 className="font-bold text-[#3b3f69] mb-3 text-lg flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                  {item.group}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to Book Your IV Infusion?"
        text="Book your IV infusion through our secure booking system. Calendly booking. Afterpay payment."
        ctaLabel="Book IV Infusion"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
