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
  { title: 'Convenient On-Site Services', desc: 'No time lost to offsite clinic visits — we come to you.' },
];

const steps = [
  { title: 'Planning', desc: 'We collaborate with your HR team to design a targeted wellness schedule.' },
  { title: 'On-Site Setup', desc: 'Our clinical team arrives and sets up a professional health station at your office.' },
  { title: 'Engagement', desc: 'Employees receive professional health checks and wellness support during work hours.' },
  { title: 'Insight', desc: 'Receive aggregated, confidential reporting to help inform your wellness initiatives.' },
];

const faqs = [
  {
    q: 'How many employees can you screen per day?',
    a: 'On average, we can screen 15-20 employees per dedicated health station, depending on the level of check-up required.'
  },
  {
    q: 'Do you provide digital reports?',
    a: 'Yes, both the employee and employer (aggregated/de-identified) receive professional digital health summaries.'
  },
  {
    q: 'What space do you need on-site?',
    a: 'We only require a standard private meeting room or a quiet office space with table and chairs.'
  }
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
        accentColor="from-[#1a2a3a] via-[#1e3248] to-[#152438]"
      />

      {/* Image & About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-rose" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Optimise Your Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">Empowering a <span className="text-rose">Healthier Workforce</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                We provide tailored healthcare services for workplaces to support employee wellbeing and ensure a healthier work environment. Our on-site model minimizes disruption while maximizing health outcomes for your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 italic text-indigo font-medium text-sm">
                   "A healthier workforce is a more productive workforce."
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo/5 rounded-full blur-3xl" />
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

      {/* Services — Corporate grid */}
      <section className="py-24 bg-gradient-to-b from-[#f4f6f9] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo/[0.03] -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo">Our Workplace Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={s.name} className="group flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#1a2a3a] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:bg-rose transition-colors duration-500 shadow-lg shadow-indigo/20">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo mb-2 group-hover:text-rose transition-colors duration-300">{s.name}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-indigo" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo">Implementation</span>
              <div className="w-8 h-px bg-indigo" />
            </div>
            <h2 className="text-4xl font-bold text-indigo">The Implementation Path</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="w-10 h-2 bg-indigo/10 mb-6 group-hover:bg-rose/50 transition-colors" />
                <h3 className="text-xl font-bold text-indigo mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-indigo to-[#1e1c3f] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Organizational Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-rose/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="font-bold text-white mb-2">{b.title}</div>
                <div className="text-sm text-white/60 font-light leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo">Corporate FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-indigo mb-3 text-lg leading-snug">{faq.q}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
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
