import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const benefits = [
  { title: 'Brighter, Whiter Smile', icon: '✦', desc: 'Achieve a noticeably brighter and more confident smile.' },
  { title: 'Up to 6–8 Shades Lighter', icon: '◈', desc: 'Clinically proven whitening that can lighten teeth by 6–8 shades.' },
  { title: 'Safe & Professional', icon: '✓', desc: 'Treatments performed by trained healthcare professionals.' },
  { title: 'Mobile Service', icon: '⌖', desc: 'Convenient treatment delivered directly to your location.' },
];

const steps = [
  { title: 'Consultation', desc: 'Our clinical team assesses your teeth and discusses your whitening goals.' },
  { title: 'Preparation', desc: 'Gingival protection is applied to ensure a safe and comfortable treatment.' },
  { title: 'Whitening', desc: 'Professional-grade whitening gel is applied and activated using LED technology.' },
  { title: 'The Reveal', desc: 'Experience an immediate, noticeably brighter smile in just one session.' },
];

const faqs = [
  {
    q: 'How long do the results last?',
    a: 'Results can last between 6 to 12 months, depending on your lifestyle, diet, and oral hygiene habits.'
  },
  {
    q: 'Will it cause tooth sensitivity?',
    a: 'We use professional-grade formulations designed to minimise sensitivity while providing maximum whitening results.'
  },
  {
    q: 'Can I eat immediately after the treatment?',
    a: 'We recommend avoiding dark-coloured foods and drinks (like coffee, tea, or red wine) for the first 24-48 hours.'
  }
];

export default function TeethWhiteningPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Aesthetic Care"
        heading="Professional Teeth Whitening"
        subtext="Safe and effective clinical teeth whitening for a brighter, more confident smile."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
        secondaryCtaLabel="Book Now"
        secondaryCtaHref="/booking"
        accentColor="from-[#2d5a5a] via-[#204a4a] to-[#153636]"
      />

      {/* Image & About Section */}
      <section className="py-24 bg-gradient-to-br from-white to-rose/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl -skew-x-1 border border-teal-50">
                <Image 
                  src="/images/services/teeth-whitening.png" 
                  alt="Professional Teeth Whitening Results" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-rose" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Premium Aesthetic</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">Brighter Smile, <span className="text-rose">Better Confidence</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                Our clinical teeth whitening treatments are designed to provide immediate results while maintaining the highest standards of safety and comfort. We use professional-grade systems that are more effective than over-the-counter alternatives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((b) => (
                  <div key={b.title} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-teal-100 shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-rose flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-indigo leading-tight">{b.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section — visual focused */}
      <section className="py-24 bg-gradient-to-br from-indigo to-[#1e1c3f] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-12">The Whitening Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
              <div className="text-5xl font-bold text-rose mb-4">8+</div>
              <div className="text-sm text-white/60 uppercase tracking-widest font-light">Shades Whiter</div>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
              <div className="text-5xl font-bold text-rose mb-4">60m</div>
              <div className="text-sm text-white/60 uppercase tracking-widest font-light">Treatment Time</div>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
               <div className="text-5xl font-bold text-rose mb-4">0</div>
               <div className="text-sm text-white/60 uppercase tracking-widest font-light">Downtime</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience (Process) */}
      <section className="py-24 bg-gradient-to-br from-white to-indigo/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo">The Whitening Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center group">
                 <div className="w-20 h-20 rounded-[2.5rem] bg-indigo/5 text-indigo flex items-center justify-center text-3xl font-bold mx-auto mb-8 group-hover:bg-rose group-hover:text-white transition-all duration-500 shadow-sm">
                   0{i + 1}
                 </div>
                 <h3 className="text-xl font-bold text-indigo mb-4">{step.title}</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-indigo mb-3 text-lg">{faq.q}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to Enhance Your Smile?"
        text="Enhance your smile with our premium teeth whitening service. Book online or contact us for an enquiry."
        ctaLabel="Book Now"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
