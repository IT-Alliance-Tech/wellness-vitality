import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const services = [
  {
    title: 'IV Infusions',
    description: 'Targeted intravenous nutrient therapies designed to support energy, recovery and immune health.',
    image: '/images/services/iv-infusion.png',
    accent: 'rose'
  },
  {
    title: 'Health Assessments',
    description: 'Comprehensive wellness checks and preventative health screening for aged care and NDIS clients.',
    image: '/images/services/health-assessment.png',
    accent: 'indigo'
  },
  {
    title: 'Preventative Health & Wellness',
    description: 'Vitamin injections, nutrition guidance and lifestyle health consultations.',
    image: '/images/services/preventative-health.png',
    accent: 'indigo'
  },
  {
    title: 'Aged Care & NDIS Nursing',
    description: 'Professional nursing services supporting ongoing healthcare needs.',
    image: '/images/services/aged-care.png',
    accent: 'rose'
  },
  {
    title: 'Blood Collection',
    description: 'Convenient blood testing services available at home or care facilities.',
    image: '/images/services/blood-collection.png',
    accent: 'indigo'
  },
  {
    title: 'Corporate Health Services',
    description: 'Workplace health checks and corporate IV hydration services.',
    image: '/images/services/corporate-health.png',
    accent: 'indigo'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 font-bold">
            <div className="w-8 h-px bg-indigo" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo">Our Expertise</span>
            <div className="w-8 h-px bg-indigo" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-6">Our Clinical & <span className="text-rose">Wellness Services</span></h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We provide a wide range of healthcare and wellness services delivered by qualified registered nurses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              accentColor={service.accent === 'rose' ? 'pink' : 'indigo'}
            />
          ))}
        </div>

        <div className="text-center">
          <Button href="/services" variant="primary" className="px-10">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
