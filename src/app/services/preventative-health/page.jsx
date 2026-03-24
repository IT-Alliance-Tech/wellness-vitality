import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const vitaminServices = [
  'B12 injections',
  'Vitamin D injections',
  'Amino acid injections',
  'Anti-fatigue injections',
];

const lifestyleServices = [
  'Nutrition guidance',
  'Supplement advice',
  'Lifestyle consultations',
  'Health optimisation programmes',
];

const benefits = [
  'Improved energy levels',
  'Supports immune function',
  'Promotes long-term wellbeing',
  'Personalised health support',
];

const steps = [
  { title: 'Initial Consultation', desc: 'Discuss your health goals and lifestyle to identify key areas for improvement.' },
  { title: 'Nutrient Review', desc: 'Clinical assessment of your vitamin and nutrient requirements.' },
  { title: 'Personalised Plan', desc: 'Creation of a tailored vitamin therapy and lifestyle programme.' },
  { title: 'Ongoing Support', desc: 'Regular check-ins and adjustments to keep you on your wellness path.' },
];

const faqs = [
  {
    q: 'Do I need a prescription for vitamin injections?',
    a: 'Suitability is determined through a clinical assessment by our registered healthcare professionals.'
  },
  {
    q: 'How quickly will I feel the effects?',
    a: 'Many patients report an improvement in energy levels within 24-48 hours, though results vary based on individual health status.'
  },
  {
    q: 'Are these services safe?',
    a: 'Yes, all our treatments are administered by qualified healthcare professionals following strict clinical protocols.'
  }
];

export default function PreventativeHealthPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Preventative Care"
        heading="Preventative Health & Wellness"
        subtext="Supporting long-term health through vitamin therapies and lifestyle guidance."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
        secondaryCtaLabel="Book Now"
        secondaryCtaHref="/booking"
      />

      {/* Image & About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl skew-x-1 border border-gray-100">
                <Image 
                  src="/images/services/preventative-health.png" 
                  alt="Wellness and Vitamin Support" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Our Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] mb-8 leading-tight">Empowering Your <span className="text-[#ca1254]">Best Self</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                Our preventative health services focus on improving overall wellbeing through targeted vitamin support and professional lifestyle guidance. We believe in a proactive approach to health that starts from within.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 text-[#3b3f69] font-medium bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <svg className="w-5 h-5 text-[#ca1254]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#3b3f69]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3b3f69]">Services Included</span>
              <div className="w-8 h-px bg-[#3b3f69]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">Wellness Support</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#3b3f69] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ca1254]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#ca1254]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                Vitamin & Nutrient Support
              </h3>
              <ul className="space-y-3">
                {vitaminServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ca1254] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#3b3f69] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3b3f69]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#3b3f69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                Lifestyle Support
              </h3>
              <ul className="space-y-3">
                {lifestyleServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b3f69] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3b3f69]">Your Path to Wellness</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-[#ca1254]/5 select-none">{i + 1}</div>
                <h3 className="text-xl font-bold text-[#3b3f69] mb-4 relative z-10">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3b3f69]">Questions & Answers</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#3b3f69] mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Start Your Wellness Journey"
        text="Get in touch to start your wellness journey or book your initial consultation."
        ctaLabel="Book Now"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
