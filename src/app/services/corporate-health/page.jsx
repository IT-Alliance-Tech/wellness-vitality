'use client';

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

const corporateBenefits = [
  { title: 'Seamless Integration', desc: 'Minimal disruption to your workplace operations with efficient on-site setup.' },
  { title: 'Professional Reporting', desc: 'Receive aggregated health insights to inform your organization wellness strategy.' },
  { title: 'Employee Engagement', desc: 'Boost morale and productivity by showing a genuine commitment to staff health.' },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CorporateHealthPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .ch-page * { box-sizing: border-box; }

        /* ── Eyebrow ── */
        .ch-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .ch-eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }

        /* ── Section titles ── */
        .ch-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }

        /* ── About section ── */
        .ch-about-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .ch-about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .ch-stat-pill {
          position: absolute;
          bottom: 28px;
          right: -20px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .ch-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .ch-stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .ch-benefit-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid rgba(202,18,84,0.12);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: #3b3f69;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ch-benefit-tag:hover {
          border-color: rgba(202,18,84,0.35);
          box-shadow: 0 4px 16px rgba(202,18,84,0.1);
        }

        /* ── Services Banner (navy) ── */
        .ch-services-section {
          padding: 80px 0;
          background: #3b3f69;
          position: relative;
          overflow: hidden;
        }
        .ch-services-section::after {
          content: '✦';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 400px;
          color: rgba(255,255,255,0.015);
          pointer-events: none;
          line-height: 1;
        }
        .ch-service-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          border: 1.5px solid transparent;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
          position: relative;
          overflow: hidden;
        }
        .ch-service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ca1254, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ch-service-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-3px);
        }
        .ch-service-card:hover::before {
          opacity: 1;
        }
        .ch-service-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
          letter-spacing: 0.03em;
        }

        /* ── Steps Section ── */
        .ch-steps-section {
          padding: 96px 0;
          background: #f5f6fa;
          position: relative;
          overflow: hidden;
        }
        .ch-steps-section::before {
          content: 'CORPORATE';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 140px;
          font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .ch-step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid transparent;
        }
        .ch-step-card:hover {
          box-shadow: 0 20px 48px rgba(202,18,84,0.14);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-4px);
        }
        .ch-step-num-bg {
          position: absolute;
          top: -10px;
          right: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 96px;
          font-weight: 700;
          line-height: 1;
          color: #ca1254;
          opacity: 0.06;
          pointer-events: none;
          user-select: none;
        }
        .ch-step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 0.03em;
        }
        .ch-step-connector {
          position: absolute;
          top: 32px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0.25;
          z-index: 1;
        }

        /* ── Org Benefits ── */
        .ch-benefits-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .ch-benefits-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .ch-benefit-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
          border: 1.5px solid #f0f0f5;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
        }
        .ch-benefit-card:hover {
          box-shadow: 0 16px 40px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-3px);
        }
        .ch-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        /* ── Partner cards ── */
        .ch-partner-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .ch-partner-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .ch-partner-card {
          padding: 40px 36px;
          border-radius: 24px;
          background: #fff;
          border: 1.5px solid rgba(202,18,84,0.1);
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .ch-partner-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ch-partner-card:hover {
          box-shadow: 0 16px 48px rgba(202,18,84,0.12);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .ch-partner-card:hover::before {
          opacity: 1;
        }
        .ch-partner-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .ch-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 640px) {
          .ch-stat-pill { right: 12px; bottom: 16px; }
          .ch-steps-section::before { font-size: 60px; }
        }
      `}</style>

      <div className="ch-page">
        <ServiceHero
          badge="Workplace Health"
          heading="Corporate & Workplace Health Services"
          subtext="Professional healthcare services designed for organisations and workplaces."
          ctaLabel="Enquire Now"
          ctaHref="/contact"
        />

        {/* ── About / Image Section ── */}
        <section className="ch-about-section">
          <div className="ch-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

              {/* Text */}
              <div>
                <div className="ch-eyebrow" style={{ color: '#ca1254' }}>
                  <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Optimise Your Team
                  <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="ch-section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Empowering a<br />
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>Healthier Workforce</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '32px', maxWidth: '440px' }}>
                  We provide tailored healthcare services for workplaces to support employee wellbeing and ensure a healthier work environment. Our on-site model minimizes disruption while maximizing health outcomes for your organization.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {benefits.slice(0, 4).map((b) => (
                    <div key={b.title} className="ch-benefit-tag">
                      <CheckIcon />
                      <span>{b.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div style={{ position: 'relative' }}>
                <div className="ch-about-image-wrap">
                  <Image
                    src="/images/services/corporate-health.png"
                    alt="Corporate Workplace Health"
                    width={800}
                    height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', transition: 'transform 0.7s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div className="ch-stat-pill">
                  <div className="ch-stat-num">4+</div>
                  <div className="ch-stat-label">On-site services available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Banner ── */}
        <section className="ch-services-section">
          <div className="ch-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="ch-eyebrow" style={{ color: 'rgba(202,18,84,0.7)', justifyContent: 'center' }}>
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
                What We Offer
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
              </div>
              <h2 className="ch-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', color: '#fff', margin: 0 }}>
                Our Workplace Solutions
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {services.map((s, i) => (
                <div key={s.name} className="ch-service-card">
                  <div className="ch-service-badge">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '8px' }}>{s.name}</h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Steps Section ── */}
        <section className="ch-steps-section">
          <div className="ch-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="ch-eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                Implementation
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="ch-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                The Implementation Path
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', position: 'relative' }}>
              {steps.map((step, i) => (
                <div key={step.title} style={{ position: 'relative' }}>
                  <div className="ch-step-card">
                    <div className="ch-step-num-bg">{i + 1}</div>
                    <div className="ch-step-badge">{String(i + 1).padStart(2, '0')}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 && <div className="ch-step-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Org Benefits ── */}
        <section className="ch-benefits-section">
          <div className="ch-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="ch-eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                Why It Matters
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="ch-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                Organisational Benefits
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {benefits.map((b) => (
                <div key={b.title} className="ch-benefit-card">
                  <div className="ch-benefit-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#3b3f69', marginBottom: '8px' }}>{b.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner Section ── */}
        <section className="ch-partner-section">
          <div className="ch-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="ch-eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                Corporate Standards
                <span className="ch-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="ch-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                Why Partner With Us?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {corporateBenefits.map((item, i) => {
                const icons = [
                  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>,
                  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>,
                  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>,
                ];
                return (
                  <div key={item.title} className="ch-partner-card">
                    <div className="ch-partner-icon">{icons[i]}</div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.7', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section style={{ padding: '64px 0', background: '#fff' }}>
          <div className="ch-container">
            <div style={{
              borderRadius: '28px',
              background: '#f5f6fa',
              border: '1.5px solid #eaebf0',
              padding: '56px 64px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(59,63,105,0.5)', marginBottom: '8px', fontWeight: 700 }}>
                  Get Started
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: '#3b3f69', marginBottom: '10px', lineHeight: 1.2 }}>
                  Empower Your Workforce
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(59,63,105,0.65)', fontWeight: 300 }}>
                  Get in touch for a demonstration or book your first on-site day online.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                <a href="/booking" style={{
                  padding: '14px 28px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #ca1254, #e84d8a)',
                  color: '#fff', fontWeight: 600, fontSize: '14px',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(202,18,84,0.3)',
                  transition: 'opacity 0.2s',
                }}>
                  Book Now
                </a>
                <a href="/contact" style={{
                  padding: '14px 28px', borderRadius: '10px',
                  background: '#fff', color: '#3b3f69',
                  fontWeight: 600, fontSize: '14px',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  border: '1.5px solid rgba(59,63,105,0.15)',
                  transition: 'opacity 0.2s',
                }}>
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