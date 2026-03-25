import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const services = [
  'Comprehensive wellness checks',
  'Vital signs monitoring',
  'Cardiovascular risk screening',
  'Diabetes risk screening',
  'Weight and metabolic assessments',
];

const benefits = [
  { title: 'Early Detection', desc: 'Identify health risks before they become serious concerns.' },
  { title: 'Ongoing Monitoring', desc: 'Continuous clinical oversight and personalised care.' },
  { title: 'Personalised Approach', desc: 'Care plans tailored to individual health needs and goals.' },
  { title: 'Improved Outcomes', desc: 'Better long-term health results through preventative management.' },
];

const steps = [
  { title: 'Booking', desc: 'Schedule a convenient time for your assessment at home or your facility.' },
  { title: 'Clinical Review', desc: 'A thorough review of your medical history and current health status.' },
  { title: 'Testing', desc: 'Conducting vital signs, screenings, and metabolic assessments.' },
  { title: 'Report', desc: 'Receive a detailed health report and recommendations for further care.' },
];

const assessmentsMatter = [
  { title: 'Early Intervention', desc: 'Identify potential health issues before they escalate into serious complications.' },
  { title: 'Personalised Care', desc: 'Create a tailored health roadmap based on your unique clinical profile.' },
  { title: 'PEACE OF MIND', desc: 'Consistent clinical monitoring provides confidence for you and your family.' },
];

export default function HealthAssessmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Clinical Assessment"
        heading="Health Assessments"
        subtext="Comprehensive wellness checks for aged care residents and NDIS participants."
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
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">About This Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] mb-8 leading-tight">Proactive Care for <span className="text-[#ca1254]">Long-Term Health</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                Our health assessments are designed to support ongoing monitoring and preventative care for aged care and NDIS clients, ensuring early detection and better health management. We bring professional clinical oversight directly to you.
              </p>
              <div className="space-y-4">
                {benefits.slice(0, 2).map((b) => (
                  <div key={b.title} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#3b3f69] flex items-center justify-center flex-shrink-0 text-white">
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#3b3f69]">{b.title}</div>
                      <div className="text-xs text-gray-500">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl -skew-y-1 border border-gray-100">
                <Image 
                   src="/images/services/health-assessment.png" 
                  alt="Health Assessment" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#3b3f69]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3b3f69]">Services Included</span>
              </div>
              <h2 className="text-4xl font-bold text-[#3b3f69] mb-8">What's Included</h2>
              <ul className="space-y-4">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#3b3f69]/20 transition-all">
                    <div className="w-8 h-8 rounded-full bg-[#3b3f69] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#3b3f69] text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 mb-8 relative z-10">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Why It Matters</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Key Benefits</h3>
              <div className="space-y-6 relative z-10">
                {benefits.map((b) => (
                  <div key={b.title}>
                    <div className="font-bold text-[#ca1254] mb-1">{b.title}</div>
                    <div className="text-sm text-white/90 font-light leading-relaxed">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#ca1254]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Our Method</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">The Assessment Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="p-8 bg-white border border-gray-100 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#3b3f69] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[#3b3f69]">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
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
              <div className="w-8 h-px bg-indigo" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3b3f69]">Proactive Health</span>
              <div className="w-8 h-px bg-indigo" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">Why Assessments Matter</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assessmentsMatter.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo/20 transition-all text-center">
                <h3 className="font-bold text-[#3b3f69] mb-3 text-lg uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Arrange a Health Assessment"
        text="Contact us to arrange a health assessment or book directly online."
        ctaLabel="Book Now"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
