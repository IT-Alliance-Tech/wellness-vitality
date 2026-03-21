import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const services = [
  {
    title: 'IV Infusion Therapy',
    description: 'Optimal nutrient absorption directly into the bloodstream for immunity and energy.',
    image: '/service_iv.png',
    accent: 'rose'
  },
  {
    title: 'Health Assessments',
    description: 'Comprehensive clinical assessments and reports delivered at your location.',
    image: '/service_assess.png',
    accent: 'indigo'
  },
  {
    title: 'Preventative Health',
    description: 'Proactive wellness planning and lifestyle strategies to keep illness at bay.',
    image: '/service_preventative.png',
    accent: 'indigo'
  },
  {
    title: 'Aged Care & NDIS',
    description: 'Specialised in-home nursing support for aged care and NDIS participants.',
    image: '/service_aged.png',
    accent: 'rose'
  },
  {
    title: 'Blood Collection',
    description: 'Professional pathology and blood draws at your home or workplace.',
    image: '/service_blood.png',
    accent: 'indigo'
  },
  {
    title: 'Corporate Health',
    description: 'Onsite wellness programmes and screenings for your team\'s productivity.',
    image: '/service_corporate.png',
    accent: 'indigo'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo mb-4">Our Elite Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the pinnacle of personalised healthcare with our comprehensive at-home services, delivered with expertise and empathy.
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
