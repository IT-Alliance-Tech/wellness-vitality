"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  HeartPulse,
  Briefcase,
  ShieldAlert,
  GraduationCap,
  Activity,
  Stethoscope,
  Syringe,
  Users,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import CprImage from "../../../public/cprimage.png";
import EmergencyImage from "../../../public/firstaid.png";
import WorkplaceImage from "../../../public/corporate.png";

const BRAND_NAVY = "#3b3f69";
const BRAND_CRIMSON = "#ca1254";

const sections = [
  {
    title: "CPR & First Aid Training",
    label: "01",
    image: CprImage,
    items: [
      {
        title: "HLTAID009 – Provide CPR",
        desc: "Essential CPR skills including compressions, rescue breathing and AED use.",
        icon: HeartPulse,
      },
      {
        title: "HLTAID011 – Provide First Aid",
        desc: "Comprehensive first aid training covering injuries and medical emergencies.",
        icon: Activity,
      },
      {
        title: "HLTAID012 – Education & Care",
        desc: "First aid tailored for childcare and school environments.",
        icon: GraduationCap,
      },
    ],
  },
  {
    title: "Emergency Response Training",
    label: "02",
    image: EmergencyImage,
    items: [
      {
        title: "Anaphylaxis & Asthma",
        desc: "Recognition and management of allergic and respiratory emergencies.",
        icon: ShieldAlert,
      },
      {
        title: "RAMOAP (NSW Teachers)",
        desc: "Medical emergency response training for school environments.",
        icon: Users,
      },
      {
        title: "Clinical Awareness",
        desc: "Identify stroke, heart attack, diabetes and other conditions.",
        icon: Stethoscope,
      },
    ],
  },
  {
    title: "Workplace & Support Services",
    label: "03",
    image: WorkplaceImage,
    items: [
      {
        title: "Drug & Alcohol Testing",
        desc: "On-site testing services for workplace safety.",
        icon: Syringe,
      },
      {
        title: "Event Medical Support",
        desc: "Qualified medics for events and on-site care.",
        icon: Briefcase,
      },
    ],
  },
];

const TrainingPage = () => {
  return (
    <div className="bg-[#f5f4f0] text-[#3b3f69] overflow-x-hidden min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-32 md:pt-30 pb-16 md:pb-24 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Accredited Programmes</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold !text-white mb-8 leading-[1.2] tracking-tight">
            Training &amp; <br className="hidden md:block" />
            <span className="text-[#ca1254]">Services</span>
          </h1>

          <p className="text-xl text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light">
            Professional programmes designed for individuals, workplaces, and community environments, built around saving lives.
          </p>

          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#ca1254] hover:bg-[#a30f44] text-white px-8 md:px-12 py-3.5 md:py-4 rounded font-medium transition shadow-lg shadow-rose/10">
              Get in Touch <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── TRAINING SECTIONS ── */}
      <div id="programmes" className="w-full flex flex-col pb-16">
        {sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          const bgClass = !isEven ? 'bg-[#ca1254]/[0.04]' : '';
          return (
            <section key={idx} className={`w-full py-20 md:py-32 ${bgClass}`}>
              <div className={`w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative aspect-square md:aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(59,63,105,0.08)] border border-[#3b3f69]/10">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(59,63,105,0.05)] to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -z-10 w-48 h-48 rounded-full bg-[#ca1254]/10 blur-3xl ${isEven ? '-bottom-10 -left-10' : '-bottom-10 -right-10'}`} />
                  <div className={`absolute -z-10 w-48 h-48 rounded-full bg-[#3b3f69]/5 blur-3xl ${isEven ? '-top-10 -right-10' : '-top-10 -left-10'}`} />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-end gap-4 mb-10 relative">
                    <div className="text-[120px] font-bold text-[#3b3f69]/[0.03] leading-none absolute -top-16 -left-6 tracking-tighter select-none">{section.label}</div>
                    <div className="relative z-10">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[#ca1254] font-semibold mb-4">Category {section.label}</div>
                      <h2 className="text-3xl md:text-5xl font-bold text-[#3b3f69] leading-[1.15]">{section.title}</h2>
                      <div className="w-16 h-1 bg-[#ca1254] mt-8" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                            <Icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">{item.title}</h3>
                            <p className="text-[14px] text-gray-500 leading-relaxed font-light">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-[#3b3f69]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#3b3f69]/10 bg-[#f5f4f0] px-8 py-10 md:px-14 md:py-16 shadow-lg">

            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#ca1254]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#3b3f69]/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <p className="text-[#ca1254] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                  Custom Training
                </p>
                <h3 className="text-3xl md:text-5xl font-bold text-[#3b3f69] mb-6 leading-[1.15]">
                  Tailored Solutions <br className="hidden md:block" />
                  for Your <span className="text-[#ca1254]">Organisation</span>
                </h3>
                <p className="text-[#3b3f69]/70 text-sm md:text-lg mb-8 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                  We design flexible training programmes based on your organisation’s
                  needs, environment, and compliance requirements.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-[#ca1254] text-white px-10 py-4 rounded font-semibold hover:bg-[#a30f44] transition-all hover:shadow-lg hover:shadow-[#ca1254]/20 hover:-translate-y-0.5">
                  Get in Touch <ArrowRight size={18} />
                </a>
              </div>

              <div className="w-full lg:w-auto min-w-[300px]">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#3b3f69]/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ca1254]/5 rounded-bl-full blur-xl pointer-events-none" />
                  <h4 className="text-[13px] font-bold text-[#3b3f69] uppercase tracking-wider mb-6 pb-4 border-b border-[#3b3f69]/10">
                    What We Offer
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Flexible formats (online & in-person)',
                      'Industry-specific programmes',
                      'Workplace safety compliance',
                      'Scalable team training solutions'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] font-light text-[#3b3f69]/80 group">
                        <span className="text-[#ca1254] group-hover:scale-125 transition-transform">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrainingPage;