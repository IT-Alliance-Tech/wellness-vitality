import React from 'react';
import Button from '@/components/ui/Button';

const ivPacks = [
  {
    title: 'Immune Defence IV',
    description: 'A high-dose blend of Vitamin C, Zinc, and Antioxidants to support your immune system\'s natural function.',
    features: ['Immune Support', 'Antioxidant Rich', 'Recovery Support'],
    accent: 'rose'
  },
  {
    title: 'Energy & Performance IV',
    description: 'Formulated with B-Complex vitamins and key amino acids to combat fatigue and enhance physical performance.',
    features: ['Energy Boost', 'Metabolic Support', 'B-Complex Focus'],
    accent: 'indigo'
  },
  {
    title: 'Beauty & Skin Glow IV',
    description: 'Enriched with Glutathione and Vitamin C to promote skin health, collagen production, and a natural radiance.',
    features: ['Skin Hydration', 'Collagen Support', 'Glutathione Boost'],
    accent: 'rose'
  }
];

const IVTherapy = () => {
  return (
    <section id="iv-therapy" className="py-24 bg-indigo relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold !text-white mb-6">IV Infusion Therapy</h2>
          <p className="text-lg text-white/80 w-full px-4 sm:px-6 lg:px-12 xl:px-16leading-relaxed">
            IV therapy delivers vitamins, minerals and nutrients directly into the bloodstream, allowing higher nutrient availability compared with oral supplements.
          </p>
          <div className="mt-8 h-1 w-20 bg-rose mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ivPacks.map((pack) => (
            <div key={pack.title} className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
               <h3 className="text-2xl font-bold text-indigo mb-6">{pack.title}</h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-8">
                 {pack.description}
               </p>
               
               <ul className="space-y-4 mb-10 flex-grow">
                 {pack.features.map((feature) => (
                   <li key={feature} className="flex items-center gap-3 text-sm font-medium text-indigo/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                      {feature}
                   </li>
                 ))}
               </ul>

                <Button href="/services/iv-infusions" variant={pack.accent === 'rose' ? 'primary' : 'secondary'} className="w-full py-4 text-base rounded-2xl font-bold">
                  Explore IV Infusions
                </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IVTherapy;
