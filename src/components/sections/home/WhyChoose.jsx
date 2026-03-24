"use client";

import React from 'react';
import Link from 'next/link';

const cards = [
  {
    title: 'AHPRA-Registered Professionals',
    description: 'Every nurse meets strict Australian healthcare registration standards.',
    image: '/about1.png',
    link: '/about/ahpra',
  },
  {
    title: 'Personalised Clinical Care',
    description: 'Every treatment is tailored based on a full clinical assessment.',
    image: '/about2.png',
    link: '/about/personalised-care',
  },
  {
    title: 'Mobile Healthcare',
    description: 'We bring healthcare to your home, workplace or care facility.',
    image: '/about3.png',
    link: '/about/mobile-healthcare',
  },
  {
    title: 'Aged Care & NDIS Support',
    description: 'Dedicated care for aged care residents and NDIS participants.',
    image: '/about4.png',
    link: '/about/ndis-care',
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-5xl font-bold mb-4 md:mb-6"
            style={{ color: 'rgb(59,63,105)' }}
          >
            What We Do
          </h2>

          <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
            Professional healthcare and wellness services delivered by AHPRA-registered nurses,
            focused on personalised care, safety, and convenience.
          </p>
        </div>

        {/* 🔥 RESPONSIVE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

          {cards.map((card, index) => (
            <Link key={index} href={card.link} className="group block">

              {/* CARD */}
              <div className="relative rounded-lg md:rounded-xl overflow-hidden">

                {/* IMAGE */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[160px] md:h-[260px] lg:h-[320px] object-cover transition duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 z-20 flex flex-col justify-between p-3 md:p-6 opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{ backgroundColor: 'rgb(202,18,84)' }}
                >
                  <div>
                    <h3 className="text-white text-sm md:text-lg font-bold mb-2 md:mb-3">
                      {card.title}
                    </h3>

                    <p className="text-white text-xs md:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <span className="border border-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white inline-flex items-center gap-2">
                      Learn More →
                    </span>
                  </div>
                </div>

              </div>

              {/* TITLE BELOW */}
              <div className="mt-2 md:mt-4 text-center group-hover:hidden transition duration-200">
                <h3
                  className="text-sm md:text-lg font-semibold"
                  style={{ color: 'rgb(59,63,105)' }}
                >
                  {card.title}
                </h3>

                <div
                  className="mt-1 md:mt-2 h-[2px] w-8 md:w-12 mx-auto"
                  style={{ backgroundColor: 'rgb(59,63,105)' }}
                />
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;