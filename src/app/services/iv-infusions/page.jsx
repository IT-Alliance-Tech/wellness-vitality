import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import IvInfusionImage from '../../../../public/images/services/iv-infusion.png';

const treatments = [
  { name: 'Immune Defence IV', price: '$220 – $260', desc: 'High-dose vitamin C, zinc, and immune-supporting nutrients.' },
  { name: 'Energy & Performance IV', price: '$200 – $240', desc: 'B-complex vitamins and amino acids for sustained energy.' },
  { name: 'Beauty & Skin Glow IV', price: '$260 – $320', desc: 'Glutathione, biotin, and collagen-boosting nutrients.' },
  { name: 'Detox & Liver Support IV', price: '$250 – $300', desc: 'Liver-supporting antioxidants and detox nutrients.' },
  { name: 'Hydration & Recovery IV', price: '$180 – $220', desc: 'Electrolytes and minerals for rapid rehydration.' },
  { name: 'Athlete Recovery IV', price: '$220 – $260', desc: 'Targeted nutrients to accelerate muscle recovery.' },
];

const nutrients = [
  { name: 'Vitamin C', desc: 'Supports immune function and antioxidant protection.', accent: 'navy' },
  { name: 'Vitamin D3', desc: 'Essential for bone health and immune regulation.', accent: 'rose' },
  { name: 'Biotin', desc: 'Promotes healthy hair, skin, and metabolic function.', accent: 'navy' },
  { name: 'B Complex', desc: 'Fuels energy production and nervous system support.', accent: 'rose' },
  { name: 'Methylcobalamin', desc: 'Active form of B12 for energy and neurological health.', accent: 'navy' },
  { name: 'Magnesium Sulphate', desc: 'Relaxes muscles, supports sleep and nerve function.', accent: 'rose' },
  { name: 'Zinc', desc: 'Crucial for immune system, wound healing and DNA synthesis.', accent: 'navy' },
  { name: 'Selenium', desc: 'Powerful antioxidant supporting thyroid and metabolic function.', accent: 'rose' },
  { name: 'Taurine', desc: 'Supports cardiovascular health and cellular hydration.', accent: 'navy' },
  { name: 'Arginine', desc: 'Boosts nitric oxide for circulation and recovery.', accent: 'rose' },
  { name: 'Glutamine', desc: 'Gut lining repair and immune system fuel source.', accent: 'navy' },
  { name: 'Lysine', desc: 'Collagen synthesis and antiviral immune defence.', accent: 'rose' },
  { name: 'Ornithine', desc: 'Supports detoxification and growth hormone release.', accent: 'navy' },
  { name: 'Glutathione', desc: 'Master antioxidant for liver detox and skin brightening.', accent: 'rose' },
  { name: 'Coenzyme Q10', desc: 'Vital cellular energy coenzyme powering repair and metabolism.', accent: 'navy' },
  { name: 'Alpha Lipoic Acid', desc: 'Universal antioxidant supporting nerve health and glucose metabolism.', accent: 'rose' },
  { name: 'NAD+', desc: 'Critical coenzyme for cellular energy, anti-aging, and DNA repair.', accent: 'navy' },
];

const midPoint = Math.ceil(nutrients.length / 2);
const row1 = nutrients.slice(0, midPoint);
const row2 = nutrients.slice(midPoint);

const benefits = [
  'Direct nutrient delivery into the bloodstream',
  'Higher absorption than oral supplementation',
  'Supports cellular energy production',
];

const steps = [
  { title: 'Consultation', desc: 'Initial clinical assessment with our registered nurse to determine suitability and goals.' },
  { title: 'Preparation', desc: 'Custom formulation of your nutrient therapy based on your individual requirements.' },
  { title: 'Administration', desc: 'Professional administration by a qualified nurse in a relaxed environment.' },
  { title: 'Recovery', desc: 'Relax as nutrients are delivered directly into your bloodstream.' },
];

const suitability = [
  { group: 'Active Professionals', reason: 'To support energy levels and cognitive function during high-demand periods.' },
  { group: 'Athletes & Fitness Enthusiasts', reason: 'For rapid rehydration and muscle recovery post-exertion.' },
  { group: 'Frequent Travellers', reason: 'To combat jet lag, support the immune system and restore hydration.' },
  { group: 'Overall Wellness Seekers', reason: 'Maintaining optimal nutrient levels for vitality and long-term health.' },
];

// Nutrient SVG icons — clean, clinical
const NutrientIcon = ({ accent }) => (
  <div style={{
    width: 44, height: 44, borderRadius: 13, flexShrink: 0,
    background: accent === 'rose' ? 'rgba(202,18,84,0.1)' : 'rgba(59,63,105,0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke={accent === 'rose' ? '#ca1254' : '#3b3f69'}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  </div>
);

export default function IVInfusionsPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .iv-page * { box-sizing: border-box; }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }
        .container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }

        /* ── About ── */
        .about-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -80px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .about-image-wrap img {
          transition: transform 0.7s ease-in-out !important;
        }
        .about-image-wrap:hover img {
          transform: scale(1.05);
        }
        .about-image-wrap::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
          pointer-events: none;
        }
        .stat-pill {
          position: absolute;
          bottom: 28px; left: -20px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex; align-items: center; gap: 12px;
          z-index: 10;
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px; font-weight: 600; color: #ca1254; line-height: 1;
        }
        .stat-label {
          font-size: 11px; color: #3b3f69; font-weight: 600;
          line-height: 1.4; max-width: 80px;
        }
        .stat-card {
          padding: 20px 24px;
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid #f0f0f5;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover {
          border-color: rgba(202,18,84,0.2);
          box-shadow: 0 4px 20px rgba(202,18,84,0.07);
        }

        /* ── Marquee / Nutrients ── */
        .nutrients-section {
          padding: 96px 0;
          background: #fff;
          overflow: hidden;
          position: relative;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 100s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 100s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
        .nutrient-card {
          flex-shrink: 0;
          width: 300px;
          background: #fff;
          border-radius: 18px;
          border: 1.5px solid #f0f0f5;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .nutrient-card:hover {
          box-shadow: 0 8px 28px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.2);
        }

        /* ── Treatments ── */
        .treatments-section {
          padding: 96px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
          overflow: hidden;
        }
        .treatments-section::before {
          content: 'IV';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 400px; font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .treatment-card {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          border: 1.5px solid #f0f0f5;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
          position: relative; overflow: hidden;
        }
        .treatment-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0; transition: opacity 0.3s;
        }
        .treatment-card:hover {
          box-shadow: 0 20px 56px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-4px);
        }
        .treatment-card:hover::before { opacity: 1; }

        /* ── Steps ── */
        .steps-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 30px;
          border: 1.5px solid #f0f0f5;
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .step-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-4px);
        }
        .step-bg-num {
          position: absolute; bottom: -10px; right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px; font-weight: 700; line-height: 1;
          color: #ca1254; opacity: 0.05;
          pointer-events: none; user-select: none;
        }
        .step-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 10px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff; font-size: 12px; font-weight: 700;
          margin-bottom: 20px;
        }

        /* ── Benefits Dark ── */
        .benefits-section {
          padding: 96px 0;
          background: #3b3f69;
          position: relative; overflow: hidden;
        }
        .benefits-section::before {
          content: '';
          position: absolute; top: -100px; right: -100px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.16) 0%, transparent 65%);
          pointer-events: none;
        }
        .benefits-section::after {
          content: '';
          position: absolute; bottom: -80px; left: -80px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .benefit-row {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .benefit-row:last-child { border-bottom: none; }
        .benefit-check {
          width: 34px; height: 34px; border-radius: 10px;
          background: rgba(202,18,84,0.18);
          border: 1.5px solid rgba(202,18,84,0.3);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .stat-block {
          aspect-ratio: 1;
          background: rgba(255,255,255,0.05);
          border-radius: 24px;
          border: 1.5px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 24px;
          transition: background 0.3s, border-color 0.3s;
        }
        .stat-block:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(202,18,84,0.35);
        }

        /* ── Suitability ── */
        .suitability-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
        }
        .suit-card {
          padding: 36px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f0f0f5;
          transition: all 0.3s;
          position: relative; overflow: hidden;
        }
        .suit-card::before {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #ca1254, #e84d8a);
          opacity: 0; transition: opacity 0.3s;
        }
        .suit-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.18);
          transform: translateY(-2px);
        }
        .suit-card:hover::before { opacity: 1; }
      `}</style>

      <div className="iv-page">
        <ServiceHero
          badge="Intravenous Therapy"
          heading="IV Infusion Therapy"
          subtext="IV infusions deliver vitamins and nutrients directly into the bloodstream to support recovery, energy and immune health."
          ctaLabel="Book IV Infusion"
          ctaHref="/booking"
          secondaryCtaLabel="Enquire Now"
          secondaryCtaHref="/contact"
        />

        {/* ── About / Image ── */}
        <section className="about-section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
              {/* Image */}
              <div style={{ position: 'relative' }}>
                <div className="about-image-wrap">
                  <Image
                    src={IvInfusionImage}
                    alt="IV Infusion Wellness"
                    width={800} height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                <div className="stat-pill">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Bioavailability guaranteed</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  About This Service
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Fast-Acting Results Through{' '}
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>Direct Absorption</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '32px', maxWidth: '440px' }}>
                  IV infusion therapy bypasses the digestive system entirely, delivering essential vitamins, minerals, and nutrients directly into the bloodstream for 100% bioavailability and faster results.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="stat-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: '#3b3f69', lineHeight: 1, marginBottom: '6px' }}>100%</div>
                    <div style={{ fontSize: '10px', color: 'rgba(59,63,105,0.5)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600 }}>Absorption</div>
                  </div>
                  <div className="stat-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: '#ca1254', lineHeight: 1, marginBottom: '6px' }}>AHPRA</div>
                    <div style={{ fontSize: '10px', color: 'rgba(202,18,84,0.5)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600 }}>Registered Nurses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nutrients Marquee ── */}
        <section className="nutrients-section">
          <div className="divider" />
          <div style={{ paddingTop: '96px' }}>
            <div className="container" style={{ marginBottom: '48px' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="eyebrow" style={{ color: '#3b3f69', justifyContent: 'center' }}>
                  <span className="eyebrow-line" style={{ background: '#3b3f69', opacity: 0.3 }} />
                  Clinical Formulations
                  <span className="eyebrow-line" style={{ background: '#3b3f69', opacity: 0.3 }} />
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: '0 0 12px' }}>
                  Nutrients Used in Infusions
                </h2>
                <p style={{ fontSize: '15px', color: '#9ca3af', fontWeight: 300, maxWidth: '520px', margin: '0 auto' }}>
                  Pharmaceutical-grade vitamins, minerals, and amino acids in every formulation.
                </p>
              </div>
            </div>

            {/* Marquee rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, white 8%, white 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, white 8%, white 92%, transparent)' }}>
              {/* Row 1 — left */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div className="marquee-left" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
                  {[...row1, ...row1, ...row1, ...row1].map((n, idx) => (
                    <div key={`r1-${idx}`} className="nutrient-card">
                      <NutrientIcon accent={n.accent} />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#3b3f69', marginBottom: '4px' }}>{n.name}</div>
                        <div style={{ fontSize: '12.5px', color: '#9ca3af', fontWeight: 300, lineHeight: '1.55' }}>{n.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Row 2 — right */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div className="marquee-right" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
                  {[...row2, ...row2, ...row2, ...row2].map((n, idx) => (
                    <div key={`r2-${idx}`} className="nutrient-card">
                      <NutrientIcon accent={n.accent} />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#3b3f69', marginBottom: '4px' }}>{n.name}</div>
                        <div style={{ fontSize: '12.5px', color: '#9ca3af', fontWeight: 300, lineHeight: '1.55' }}>{n.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badge */}
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '999px', background: '#fff', border: '1.5px solid #f0f0f5', fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#3b3f69', boxShadow: '0 2px 12px rgba(59,63,105,0.07)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Highest Clinical Standards
              </div>
            </div>
          </div>
        </section>

        {/* ── Treatments & Pricing ── */}
        <section className="treatments-section">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                Treatments & Pricing
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                IV Infusion Treatments
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {treatments.map((t) => (
                <div key={t.name} className="treatment-card">
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', lineHeight: '1.35' }}>{t.name}</h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0 }}>{t.desc}</p>
                  </div>
                  <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(59,63,105,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Pricing</span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#ca1254', background: 'rgba(202,18,84,0.07)', padding: '6px 14px', borderRadius: '999px' }}>{t.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section className="steps-section">
          <div className="divider" />
          <div className="container" style={{ paddingTop: '96px' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                The Process
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                How It Works
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {steps.map((step, i) => (
                <div key={step.title} className="step-card">
                  <div className="step-bg-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step-badge">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clinical Benefits ── */}
        <section className="benefits-section">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
                  Why Choose IV Therapy
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', color: '#fff', margin: '0 0 32px' }}>
                  Clinical Benefits
                </h2>
                <div>
                  {benefits.map((b) => (
                    <div key={b} className="benefit-row">
                      <div className="benefit-check">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { val: '30m', label: 'Typical Session' },
                  { val: '100%', label: 'Absorption Rate' },
                  { val: 'AHPRA', label: 'Registered Nurses' },
                  { val: '17+', label: 'Nutrients Available' },
                ].map((s) => (
                  <div key={s.val} className="stat-block">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 600, color: '#ca1254', lineHeight: 1, marginBottom: '10px' }}>{s.val}</div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.2em', lineHeight: '1.5' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Suitability — Feature Cards ── */}
        <FeatureCards
          heading="Is IV Therapy for You?"
          cards={suitability.map((item) => ({
            title: item.group,
            description: item.reason,
            icon: (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            ),
          }))}
          cols={4}
        />

        <section className="py-14 sm:py-16 bg-white">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

            <div className="bg-[#3b3f69] rounded-xl sm:rounded-2xl px-6 sm:px-10 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
                  Ready to Book Your IV Infusion?
                </h2>

                <p className="text-sm sm:text-base text-white/80 max-w-xl">
                  Book your IV infusion through our secure booking system. Calendly booking. Afterpay payment.
                </p>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                {/* Primary */}
                <a
                  href="/booking"
                  className="
            w-full sm:w-auto
            px-6 py-3
            rounded-md
            bg-[#ca1254]
            text-white
            font-semibold
            text-sm
            text-center
            hover:opacity-90
            transition
          "
                >
                  Book IV Infusion
                </a>

                {/* Secondary */}
                <a
                  href="/contact"
                  className="
            w-full sm:w-auto
            px-6 py-3
            rounded-md
            bg-white
            text-[#3b3f69]
            font-semibold
            text-sm
            text-center
            hover:opacity-90
            transition
          "
                >
                  Enquire Now
                </a>

              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}