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

const faqs = [
  {
    q: 'Do I need a pathology request form?',
    a: 'Yes, you must have a valid pathology request form from your GP or specialist for us to perform the collection.'
  },
  {
    q: 'How long until I get my results?',
    a: 'Results are typically sent directly to your referring doctor within 24-48 hours, though some tests may take longer.'
  },
  {
    q: 'Is there an extra fee for home collection?',
    a: 'We offer professional mobile collection services; please contact us for current pricing and availability in your area.'
  }
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
        accentColor="from-[#5a2d3b] via-[#4a2030] to-[#361520]"
      />

      {/* Image & About Section */}
      <section className="py-24 bg-gradient-to-br from-white to-rose/5 overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-rose" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Professional Pathology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">Accurate Testing, <span className="text-rose">Home Convenience</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                Our blood collection services are designed to provide a convenient and comfortable experience for patients who prefer testing outside of clinical environments. We handle every sample with clinical precision and transport it immediately to accredited laboratories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-rose flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-indigo">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose/5 rounded-full blur-3xl" />
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
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo">Services Included</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-indigo/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-rose group-hover:text-white transition-colors duration-500 text-indigo">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                 </div>
                 <h3 className="text-lg font-bold text-indigo mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-white to-indigo/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-rose" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Process</span>
              <div className="w-8 h-px bg-rose" />
            </div>
            <h2 className="text-4xl font-bold text-indigo">Simple Four-Step Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                <div className="text-4xl font-bold text-rose/20 font-mono mb-4 group-hover:text-rose transition-colors">{item.step}</div>
                <h3 className="text-lg font-bold text-indigo mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo">Pathology FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-indigo mb-3 text-lg">{faq.q}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
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
