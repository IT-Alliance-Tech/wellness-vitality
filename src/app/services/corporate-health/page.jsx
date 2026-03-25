import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';

const services = [
  { name: 'Workplace Health Checks', desc: 'Comprehensive health assessments for employees.' },
  { name: 'Corporate IV Hydration', desc: 'IV wellness sessions to keep teams energised and performing.' },
  { name: 'Drug & Alcohol Screening', desc: 'Professional and confidential workplace screening.' },
  { name: 'Workplace Blood Testing', desc: 'On-site blood collection and testing services.' },
];

const benefits = [
  { title: 'Promotes Employee Wellbeing', desc: 'Healthy employees are more engaged and satisfied.' },
  { title: 'Improves Productivity', desc: 'Preventative health supports better performance at work.' },
  { title: 'Supports Workplace Safety', desc: 'Reduce risk and liability through professional health services.' },
  { title: 'Convenient On-Site Services', desc: 'No time lost to offsite clinic visits â€” we come to you.' },
];

const steps = [
  { title: 'Planning', desc: 'We collaborate with your HR team to design a targeted wellness schedule.' },
  { title: 'On-Site Setup', desc: 'Our clinical team arrives and sets up a professional health station at your office.' },
  { title: 'Engagement', desc: 'Employees receive professional health checks and wellness support during work hours.' },
  { title: 'Insight', desc: 'Receive aggregated, confidential reporting to help inform your wellness initiatives.' },
];

const corporateBenefits = [
  { title: 'Seamless Integration', desc: 'Minimal disruption to your workplace operations with efficient on-site setup.' },
  { title: 'Professional Reporting', desc: 'Receive aggregated health insights to inform your organization wellness strategy.' },
  { title: 'Employee Engagement', desc: 'Boost morale and productivity by showing a genuine commitment to staff health.' },
];

export default function CorporateHealthPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        badge="Workplace Health"
        heading="Corporate & Workplace Health Services"
        subtext="Professional healthcare services designed for organisations and workplaces."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
      />

      {/* Image & About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-[#ca1254]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Optimise Your Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3f69] mb-8 leading-tight">Empowering a <span className="text-[#ca1254]">Healthier Workforce</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                We provide tailored healthcare services for workplaces to support employee wellbeing and ensure a healthier work environment. Our on-site model minimizes disruption while maximizing health outcomes for your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 italic text-[#3b3f69] font-medium text-sm">
                   "A healthier workforce is a more productive workforce."
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                <Image 
                  src="/images/services/corporate-health.png" 
                  alt="Corporate Workplace Health" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services â€” Corporate grid */}
      <section className="py-20 bg-[#3b3f69] relative overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Our Workplace Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={s.name} className="group flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#3b3f69] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:bg-[#ca1254] transition-colors duration-500 shadow-lg shadow-[#3b3f69]/20">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3b3f69] mb-2 group-hover:text-[#ca1254] transition-colors duration-300">{s.name}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Process Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#3b3f69]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3b3f69]">Implementation</span>
              <div className="w-8 h-px bg-[#3b3f69]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">The Implementation Path</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-10 h-2 bg-[#ca1254] mb-6" />
                <h3 className="text-xl font-bold text-[#3b3f69] mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white text-[#3b3f69] overflow-hidden border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Organizational Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#ca1254] flex items-center justify-center mx-auto mb-6 shadow-md shadow-[#ca1254]/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="font-bold text-[#3b3f69] mb-2">{b.title}</div>
                <div className="text-sm text-gray-500 font-light leading-relaxed">{b.desc}</div>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">Corporate Standards</span>
              <div className="w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-4xl font-bold text-[#3b3f69]">Why Partner With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateBenefits.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-rose/10 transition-all text-center">
                <h3 className="font-bold text-[#3b3f69] mb-4 text-xl">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Empower Your Workforce"
        text="Get in touch for a demonstration or book your first on-site day online."
        ctaLabel="Book Now"
        ctaHref="/booking"
        secondaryCtaLabel="Enquire Now"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
