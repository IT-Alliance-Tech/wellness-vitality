import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const services = [
  'Medication administration',
  'Wound care and dressings',
  'Catheter care',
  'Continence assessments',
  'Pressure injury prevention',
  'Chronic disease monitoring',
  'Post-hospital care',
];

const benefits = [
  { title: 'Professional Clinical Support', desc: 'AHPRA-registered nurses providing expert nursing care.' },
  { title: 'Improved Quality of Care', desc: 'Evidence-based care tailored to individual health needs.' },
  { title: 'Reduced Hospital Visits', desc: 'Proactive management to minimise unnecessary hospitalisations.' },
  { title: 'Ongoing Health Management', desc: 'Consistent monitoring and support for long-term health.' },
];

const steps = [
  { title: 'Initial Inquiry', desc: 'Contact us to discuss your specific nursing requirements.' },
  { title: 'Clinical Assessment', desc: 'Our head nurse will conduct a thorough assessment of care needs.' },
  { title: 'Care Planning', desc: 'Development of a tailored clinical care plan in coordination with your health team.' },
  { title: 'Dedicated Care', desc: 'Consistent, professional nursing support delivered at your location.' },
];

const careBenefits = [
  { title: 'Dignified Care', desc: 'Focusing on independence and dignity in every clinical interaction.' },
  { title: 'Collaborative Approach', desc: 'Working closely with GPs and specialists to ensure care continuity.' },
  { title: 'Community Focused', desc: 'Building trusted relationships with residents and families.' },
];

export default function AgedCareNDISPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Aged Care & NDIS"
        heading="Aged Care & NDIS Nursing Services"
        subtext="Professional nursing care tailored to support ongoing healthcare needs."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
        secondaryCtaLabel="Book Now"
        secondaryCtaHref="/booking"
      />

      {/* Image & About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-2 border border-gray-100">
                <Image 
                  src="/images/services/aged-care.png" 
                  alt="Compassionate Nursing Care" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Trusted Care</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] mb-8 leading-tight">Professional Support with a <span className="text-[#ca1254]">Personal Touch</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                We provide reliable and compassionate nursing services for aged care residents and NDIS participants, supporting daily healthcare needs and long-term care management. Our focus is on maintaining dignity and improving quality of life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-[#3b3f69] mb-1">24/7</div>
                  <div className="text-xs text-[#3b3f69]/60 uppercase tracking-widest">Support Potential</div>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-[#ca1254] mb-1">100%</div>
                  <div className="text-xs text-[#ca1254]/60 uppercase tracking-widest">AHPRA Nurses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Benefits */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Services */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#3b3f69]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3b3f69]">Services Included</span>
              </div>
              <h2 className="text-3xl font-bold text-[#3b3f69] mb-8">Clinical Nursing Services</h2>
              <div className="grid grid-cols-1 gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#3b3f69]/30 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-[#3b3f69]/10 text-[#3b3f69] flex items-center justify-center flex-shrink-0 group-hover:bg-[#3b3f69] group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Why Choose Us</span>
              </div>
              <h2 className="text-3xl font-bold text-[#3b3f69] mb-8">The Benefits of Our Care</h2>
              <div className="space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#ca1254]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-6 h-6 text-[#ca1254]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[#3b3f69] mb-2 text-lg">{b.title}</div>
                        <div className="text-sm text-gray-500 font-light leading-relaxed">{b.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#3b3f69] text-white overflow-hidden relative">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Care Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="text-5xl font-black text-[#ca1254]/20 mb-6 group-hover:text-[#ca1254]/40 transition-colors tracking-tighter">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#ca1254]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Why Choose Wellness Vitality</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">Dedicated to Clinical Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careBenefits.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
                <h3 className="font-bold text-[#3b3f69] mb-4 text-xl">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Personalised Nursing Support"
        text="Contact us for personalised nursing support or book a consultation online."
        ctaLabel="Book Now"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
