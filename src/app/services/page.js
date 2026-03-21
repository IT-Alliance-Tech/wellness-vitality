import React from 'react';
import Hero from '@/components/sections/services/Hero';
import ServiceBlock from '@/components/sections/services/ServiceBlock';
import BookingCTA from '@/components/sections/home/BookingCTA';

const services = [
  {
    title: 'Health Assessments',
    description: 'Comprehensive clinical evaluations tailored for individuals, ensuring proactive health management and detailed insights into your current wellbeing.',
    benefits: ['General Check-ups', 'Chronic Care Plans', 'Pathology Reviews', 'Vital Statistics'],
    image: '/service_assess.png',
    reverse: false
  },
  {
    title: 'Preventative Health & Wellness',
    description: 'Our preventative health strategies focus on long-term wellness, combining clinical expertise with lifestyle planning to prevent illness before it starts.',
    benefits: ['Lifestyle Coaching', 'Nutritional Guidance', 'Stress Management', 'Immune Optimization'],
    image: '/service_preventative.png',
    reverse: true
  },
  {
    title: 'Aged Care & NDIS Nursing Services',
    description: 'Compassionate, professional nursing care specifically designed for NDIS participants and those in aged care, providing comfort and dignity at home.',
    benefits: ['Wound Management', 'Medication Support', 'Post-Op Recovery', 'Mobility Assistance'],
    image: '/service_aged.png',
    reverse: false
  },
  {
    title: 'IV Infusion Therapy',
    description: 'Experience clinical-grade vitamin and nutrient delivery designed for maximum absorption and immediate results in hydration, immunity, and energy.',
    benefits: ['Immune Support', 'NAD+ Therapy', 'Skin Rejuvenation', 'Rapid Hydration'],
    image: '/service_iv.png',
    reverse: true,
    ctaText: 'View IV Infusions',
    ctaHref: '/iv-infusions'
  },
  {
    title: 'Blood Collection',
    description: 'Professional pathology and blood draw services conducted in the privacy and comfort of your own home or workplace by certified phlebotomists.',
    benefits: ['Home Phlebotomy', 'Workplace Screening', 'Accurate Handling', 'Fast Results'],
    image: '/service_blood.png',
    reverse: false
  },
  {
    title: 'Professional Teeth Whitening',
    description: 'Safe, professional-grade cosmetic teeth whitening treatments delivered in your home, ensuring a brighter, more confident smile with clinical precision.',
    benefits: ['Instant Results', 'Clinical Grade', 'Zero Sensitivity', 'Home Comfort'],
    image: '/service_teeth.png',
    reverse: true
  },
  {
    title: 'Corporate & Workplace Health Services',
    description: 'Customised health and wellness programmes designed to boost productivity and employee wellbeing through onsite clinical screenings and proactive care.',
    benefits: ['Flu Vaccinations', 'Health Screenings', 'Ergonomic Review', 'Wellness Seminars'],
    image: '/service_corporate.png',
    reverse: false
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {services.map((service, index) => (
        <ServiceBlock 
          key={service.title}
          {...service}
        />
      ))}

      <BookingCTA />
    </main>
  );
}
