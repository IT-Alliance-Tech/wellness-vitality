"use client";

import React, { useEffect, useRef } from "react";
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

const BRAND_NAVY = "#3b3f69";
const BRAND_CRIMSON = "#ca1254";

const sections = [
  {
    title: "CPR & First Aid Training",
    label: "01",
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

const styles = `


  .training-root {
    background: #f5f4f0;
    color: ${BRAND_NAVY};
    overflow-x: hidden;
  }



  /* ── CONTENT ── */
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ── SECTION ── */
  .training-section {
    padding: 80px 0;
    border-bottom: 1px solid rgba(59,63,105,0.1);
  }

  .section-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 48px;
  }

  .section-label {
    
    font-size: 80px;
    font-weight: 300;
    color: rgba(59,63,105,0.07);
    line-height: 1;
    letter-spacing: -0.03em;
    position: absolute;
    margin-top: -20px;
  }

  .section-title-wrap {
    position: relative;
    padding-left: 0;
  }

  .section-eyebrow {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${BRAND_CRIMSON};
    font-weight: 500;
    margin-bottom: 10px;
  }

  .section-title {
    
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 600;
    color: ${BRAND_NAVY};
    line-height: 1.1;
  }

  .section-line {
    width: 48px;
    height: 2px;
    background: ${BRAND_CRIMSON};
    margin-top: 16px;
  }

  /* ── CARDS ── */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .card {
    position: relative;
    background: #fff;
    padding: 36px 32px 44px 36px;
    border-radius: 16px;
    border: 1px solid rgba(59,63,105,0.09);
    border-left: 4px solid ${BRAND_CRIMSON};
    overflow: hidden;
    cursor: pointer;
    transition: border-left-color 0.3s, transform 0.25s, box-shadow 0.35s;
    box-shadow: 0 2px 12px rgba(59,63,105,0.05);
  }

  .card:hover {
    border-left-color: ${BRAND_CRIMSON};
  }

  .card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(202,18,84,0.06) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.35s;
  }

  .card::before {
    content: none;
  }

  .card:hover {
    background: #fff;
    border-color: rgba(202,18,84,0.25);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(59,63,105,0.12);
  }

  

  .card-number {
    position: absolute;
    top: 20px;
    right: 24px;
    
    font-size: 13px;
    font-weight: 400;
    color: rgba(59,63,105,0.18);
    letter-spacing: 0.05em;
    transition: color 0.3s;
  }

  .card:hover .card-number {
    color: rgba(255,255,255,0.15);
  }

  .card-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(202,18,84,0.07);
    border: 1px solid rgba(202,18,84,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: background 0.3s, border-color 0.3s;
  }

  .card:hover .card-icon-wrap {
    background: rgba(202,18,84,0.12);
    border-color: rgba(202,18,84,0.25);
  }

  .card-icon {
    color: ${BRAND_CRIMSON};
  }

  .card-title {
    
    font-size: 15px;
    font-weight: 500;
    color: ${BRAND_NAVY};
    margin-bottom: 10px;
    transition: color 0.3s;
    line-height: 1.4;
  }

  .card:hover .card-title {
    color: ${BRAND_CRIMSON};
  }

  .card-desc {
    font-size: 13px;
    line-height: 1.75;
    color: #8b90aa;
    font-weight: 300;
    transition: color 0.3s;
  }

  .card:hover .card-desc {
    color: #6b7094;
  }

  .card:hover .card-number {
    color: rgba(59,63,105,0.25);
  }

  .card-arrow {
    position: absolute;
    bottom: 20px;
    right: 24px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(202,18,84,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    color: ${BRAND_CRIMSON};
    transform: scale(0.7);
    transition: opacity 0.3s, transform 0.3s;
  }

  .card:hover .card-arrow {
    opacity: 1;
    transform: scale(1);
  }

  /* ── CTA ── */
  .cta-section {
    padding: 120px 32px;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: #fff;
    border-top: 1px solid rgba(59,63,105,0.05);
  }

  .cta-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(202,18,84,0.03) 0%, transparent 70%);
  }

  .cta-pattern {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 20px,
      rgba(202,18,84,0.02) 20px,
      rgba(202,18,84,0.02) 40px
    );
  }

  .cta-content {
    position: relative;
    z-index: 1;
  }

  .cta-label {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${BRAND_CRIMSON};
    margin-bottom: 20px;
    font-weight: 500;
    opacity: 0.8;
  }

  .cta-title {
    
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 300;
    color: ${BRAND_NAVY};
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
  }

  .cta-title em {
    font-style: italic;
    color: ${BRAND_CRIMSON};
  }

  .cta-sub {
    font-size: 15px;
    color: #8b90aa;
    max-width: 480px;
    margin: 0 auto 48px;
    line-height: 1.8;
    font-weight: 300;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 1024px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 640px) {
    .content-wrapper { padding: 0 16px; }
    .training-section { padding: 48px 0; }
    .hero-stats { gap: 24px; bottom: 60px; }
    .section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
    .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .card { padding: 24px 16px 28px; border-radius: 12px; }
    .card-icon-wrap { width: 36px; height: 36px; margin-bottom: 16px; border-radius: 8px; }
    .card-icon { width: 16px; height: 16px; }
    .card-title { font-size: 13px; margin-bottom: 6px; }
    .card-desc { font-size: 11px; line-height: 1.5; }
    .card-number { top: 12px; right: 12px; font-size: 10px; }
    .scroll-cue { display: none; }
    .hero-stat-num { font-size: 28px; }
  }
`;

const TrainingPage = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="training-root">

        {/* ── HERO ── */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Accredited Programs</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold !text-white mb-8 leading-[1.2] tracking-tight">
              Training &amp; <br className="hidden md:block" />
              <span className="text-[#ca1254]">Services</span>
            </h1>

            <p className="text-xl text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light">
              Professional programs designed for individuals, workplaces, and community environments — built around saving lives.
            </p>

            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
              <a href="/contact" className="inline-flex items-center gap-2 bg-[#ca1254] hover:bg-[#a30f44] text-white px-8 md:px-12 py-3.5 md:py-4 rounded font-medium transition shadow-lg shadow-rose/10">
                Get in Touch <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ── TRAINING SECTIONS ── */}
        <div className="content-wrapper" id="programs">
          {sections.map((section, idx) => (
            <section key={idx} className="training-section">
              <div className="section-header">
                <div className="section-title-wrap">
                  <div className="section-label">{section.label}</div>
                  <div className="section-eyebrow">Category {section.label}</div>
                  <h2 className="section-title">{section.title}</h2>
                  <div className="section-line" />
                </div>
              </div>

              <div className="cards-grid">
                {section.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="card">
                      <div className="card-number">{String(i + 1).padStart(2, '0')}</div>
                      <div className="card-icon-wrap">
                        <Icon size={20} className="card-icon" />
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.desc}</p>
                      {/* <div className="card-arrow">
                                                <ArrowRight size={14} />
                                            </div> */}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* ── CTA ── */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            <div className="relative overflow-hidden rounded-2xl border border-[#3b3f69]/20 bg-[#3b3f69]/5 backdrop-blur-sm px-8 py-10 md:px-12 md:py-14 shadow-[0_20px_50px_rgba(59,63,105,0.15)]">

              {/* Subtle glows (matching Newsletter style) */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#ca1254]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#3b3f69]/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* LEFT CONTENT */}
                <div className="max-w-xl text-center lg:text-left">
                  <p className="text-[#ca1254] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                    Custom Training
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#3b3f69] mb-6 leading-[1.15]">
                    Tailored Solutions <br className="hidden md:block" />
                    for Your <span className="text-[#ca1254]">Organisation</span>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
                    We design flexible training programs based on your organisation’s
                    needs, environment, and compliance requirements.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-[#ca1254] text-white px-10 py-4 rounded font-semibold hover:bg-[#a30f44] transition-all hover:shadow-lg hover:-translate-y-0.5">
                    Get in Touch <ArrowRight size={18} />
                  </a>
                </div>

                {/* RIGHT CONTENT (What We Offer) */}
                <div className="w-full lg:w-auto min-w-[300px]">
                  <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-xl p-8 shadow-sm">
                    <h4 className="text-sm font-bold text-[#3b3f69] uppercase tracking-wider mb-6 pb-2 border-b border-[#3b3f69]/10">
                      What We Offer
                    </h4>
                    <ul className="space-y-4">
                      {[
                        'Flexible training formats (online + in-person)',
                        'Industry-specific programs',
                        'Workplace safety compliance',
                        'Scalable team training solutions'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#3b3f69]/80 group">
                          <span className="text-[#ca1254] group-hover:scale-125 transition-transform">•</span>
                          <span className="font-medium">{item}</span>
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
    </>
  );
};

export default TrainingPage;