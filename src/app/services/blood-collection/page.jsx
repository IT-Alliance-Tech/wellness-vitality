import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const steps = [
  { step: '01', title: 'Request Service', desc: 'Book online or call us with your pathology request details.' },
  { step: '02', title: 'Confirm Booking', desc: 'Secure a convenient time for our mobile nurse to visit.' },
  { step: '03', title: 'Home Visit', desc: 'Professional blood collection in the comfort of your home.' },
  { step: '04', title: 'Laboratory', desc: 'Samples are safely transported directly to the pathology lab.' },
];

const benefits = [
  'Reduced need for clinic visits',
  'Ideal for mobility-limited patients',
  'Comfortable and convenient',
  'Professional and safe process',
];

const locations = [
  { title: 'Home Blood Collection', desc: 'Comfortable collection in your own residence.' },
  { title: 'Workplace Testing', desc: 'Convenient services for employees on-site.' },
  { title: 'Aged Care Services', desc: 'Dedicated collection for aged care residents.' },
  { title: 'NDIS Support Support', desc: 'Accessible pathology for NDIS participants.' },
];

const advantages = [
  { title: 'Home Comfort', desc: 'Eliminate the stress of travel and waiting rooms by having our nurse visit you.' },
  { title: 'Mobility Support', desc: 'Ideal for those with limited mobility or recovering from surgery.' },
  { title: 'Workplace Efficiency', desc: 'Minimal disruption to your workday with on-site collection for employees.' },
  { title: 'Aged Care Specialisation', desc: 'Gentle and professional collection tailored for elderly patients.' },
];

export default function BloodCollectionPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Pathology Services"
        heading="Blood Collection Services"
        subtext="Convenient and professional blood collection delivered to your location."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
        secondaryCtaLabel="Book Now"
        secondaryCtaHref="/booking"
      />

      {/* Image & About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Professional Pathology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] mb-8 leading-tight">Accurate Testing, <span className="text-[#ca1254]">Home Convenience</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                Our blood collection services are designed to provide a convenient and comfortable experience for patients who prefer testing outside of clinical environments. We handle every sample with clinical precision and transport it immediately to accredited laboratories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-[#ca1254] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-[#3b3f69]">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl skew-x-1 border border-gray-100">
                <Image 
                  src="/images/services/blood-collection.png" 
                  alt="Professional Blood Collection" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations/Types */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3b3f69]">Services Included</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-[#3b3f69]/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-500 text-[#3b3f69]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                 </div>
                 <h3 className="text-lg font-bold text-[#3b3f69] mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#ca1254]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Process</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">Simple Four-Step Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                <div className="text-4xl font-bold text-[#ca1254]/20 font-mono mb-4 group-hover:text-[#ca1254] transition-colors">{item.step}</div>
                <h3 className="text-lg font-bold text-[#3b3f69] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Mobile Advantages</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">Why Choose Mobile Collection?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[#ca1254]/20 transition-all">
                <h3 className="font-bold text-[#3b3f69] mb-3 text-lg flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Book a Blood Collection Service"
        text="Book a convenient blood collection service today or enquire with our team."
        ctaLabel="Book Now"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
