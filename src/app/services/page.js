import React from 'react';
import Hero from '@/components/sections/services/Hero';
import BookingCTA from '@/components/sections/home/BookingCTA';
import Button from '@/components/ui/Button';
import FeatureCards from '@/components/ui/FeatureCards';

const whyChooseCards = [
  {
    title: 'AHPRA Registered',
    description: 'Every service is delivered by fully qualified, AHPRA-registered nurses.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Delivery',
    description: 'Sydney-wide mobile healthcare — we come to your home, office, or facility.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Fast & Convenient',
    description: 'Easy online booking with same-day availability for most services.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Clinically Safe',
    description: 'Strict adherence to Australian healthcare standards and clinical protocols.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const services = [
  {
    title: 'Health Assessments',
    description: 'Comprehensive wellness checks and preventative health screening for aged care and NDIS clients.',
    slug: 'health-assessments',
    image: '/images/services/health-assessment.png',
    accent: 'indigo'
  },
  {
    title: 'Preventative Health & Wellness',
    description: 'Vitamin injections, nutrition guidance and lifestyle health consultations.',
    slug: 'preventative-health',
    image: '/images/services/preventative-health.png',
    accent: 'indigo'
  },
  {
    title: 'Aged Care & NDIS Nursing',
    description: 'Professional nursing services supporting ongoing healthcare needs.',
    slug: 'aged-care-ndis',
    image: '/images/services/aged-care.png',
    accent: 'rose'
  },
  {
    title: 'IV Infusions',
    description: 'Targeted intravenous nutrient therapies designed to support energy, recovery and immune health.',
    slug: 'iv-infusions',
    image: '/images/services/iv-infusion.png',
    accent: 'rose'
  },
  {
    title: 'Blood Collection',
    description: 'Convenient blood testing services available at home or care facilities.',
    slug: 'blood-collection',
    image: '/images/services/blood-collection.png',
    accent: 'indigo'
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional teeth whitening treatments delivered by qualified healthcare professionals.',
    slug: 'teeth-whitening',
    image: '/images/services/teeth-whitening.png',
    accent: 'rose'
  },
  {
    title: 'Corporate Health Services',
    description: 'Workplace health checks and corporate IV hydration services.',
    slug: 'corporate-health',
    image: '/images/services/corporate-health.png',
    accent: 'indigo'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <FeatureCards
        heading="Why Choose Wellness Vitality"
        cards={whyChooseCards}
        cols={4}
      />
      
      <section className="py-16 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div 
                key={service.slug}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden relative border-b border-gray-50">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${service.accent === 'rose' ? 'text-[#ca1254]' : 'text-[#3b3f69]'}`}>
                    Professional Care
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className={`text-xl font-bold mb-4 transition-colors ${service.accent === 'rose' ? 'text-[#3b3f69] group-hover:text-[#ca1254]' : 'text-[#3b3f69] group-hover:text-[#3b3f69]'}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow font-light">
                    {service.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-50 mt-auto">
                    <Button 
                      href={`/services/${service.slug}`} 
                      variant="outline" 
                      className="w-full text-xs font-bold py-3 uppercase tracking-widest"
                    >
                      View Service Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
