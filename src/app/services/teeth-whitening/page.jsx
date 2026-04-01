import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import TeethWhiteningImage from '../../../../public/images/services/teeth-whitening.png';

const benefits = [
  { title: 'Brighter, Whiter Smile', icon: '✨', desc: 'Achieve a noticeably brighter and more confident smile.' },
  { title: 'Up to 6-8 Shades Lighter', icon: '💎', desc: 'Clinically proven whitening that can lighten teeth by 6-8 shades.' },
  { title: 'Safe & Professional', icon: '✔️', desc: 'Treatments performed by trained healthcare professionals.' },
  { title: 'Mobile Service', icon: '🏠', desc: 'Convenient treatment delivered directly to your location.' },
];

const steps = [
  { title: 'Consultation', desc: 'Our clinical team assesses your teeth and discusses your whitening goals.' },
  { title: 'Preparation', desc: 'Gingival protection is applied to ensure a safe and comfortable treatment.' },
  { title: 'Whitening', desc: 'Professional-grade whitening gel is applied and activated using LED technology.' },
  { title: 'The Reveal', desc: 'Experience an immediate, noticeably brighter smile in just one session.' },
];

const suitability = [
  { title: 'Special Occasions', desc: 'Perfect for weddings, anniversaries, or professional photoshoots.' },
  { title: 'Coffee & Tea Drinkers', desc: 'Effective removal of extrinsic stains from daily habits.' },
  { title: 'Confidence Boost', desc: 'For anyone looking to enhance their smile and overall self-esteem.' },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TeethWhiteningPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .tw-page * { box-sizing: border-box; }

        /* ── Eyebrow ── */
        .tw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .tw-eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }

        /* ── Section titles ── */
        .tw-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }

        /* ── About section ── */
        .tw-about-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }

        .tw-about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .tw-about-image-wrap img {
          transition: transform 0.7s ease-in-out !important;
        }
        .tw-about-image-wrap:hover img {
          transform: scale(1.05);
        }
        .tw-stat-pill {
          position: absolute;
          bottom: 28px;
          left: -20px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .tw-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .tw-stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .tw-benefit-tag {
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
        .tw-benefit-tag:hover {
          border-color: rgba(202,18,84,0.35);
          box-shadow: 0 4px 16px rgba(202,18,84,0.1);
        }

        /* ── Stats Banner ── */
        .tw-stats-section {
          padding: 80px 0;
          background: #3b3f69;
          position: relative;
          overflow: hidden;
        }
        .tw-stats-section::after {
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
        .tw-stat-card {
          padding: 40px 32px;
          background: rgba(255,255,255,0.05);
          border-radius: 24px;
          border: 1px solid rgba(202,18,84,0.25);
          text-align: center;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .tw-stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ca1254, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tw-stat-card:hover {
          background: rgba(202,18,84,0.1);
          border-color: rgba(202,18,84,0.5);
          transform: translateY(-4px);
        }
        .tw-stat-card:hover::before {
          opacity: 1;
        }
        .tw-stat-big {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
          margin-bottom: 8px;
        }
        .tw-stat-desc {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 400;
        }

        /* ── Steps Section ── */
        .tw-steps-section {
          padding: 96px 0;
          background: #f5f6fa;
          position: relative;
          overflow: hidden;
        }
        .tw-steps-section::before {
          content: 'WHITENING';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 160px;
          font-weight: 700;
          color: rgba(202,18,84,0.04);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .tw-step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid transparent;
        }
        .tw-step-card:hover {
          box-shadow: 0 20px 48px rgba(202,18,84,0.14);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-4px);
        }
        .tw-step-num-bg {
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
        .tw-step-badge {
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
        .tw-step-connector {
          position: absolute;
          top: 32px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0.25;
          z-index: 1;
        }

        /* ── Suitability cards ── */
        .tw-suit-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .tw-suit-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(202,18,84,0.2) 30%, rgba(202,18,84,0.2) 70%, transparent);
        }
        .tw-suit-card {
          padding: 40px 36px;
          border-radius: 24px;
          background: #fff;
          border: 1.5px solid rgba(202,18,84,0.1);
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .tw-suit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tw-suit-card:hover {
          box-shadow: 0 16px 48px rgba(202,18,84,0.12);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .tw-suit-card:hover::before {
          opacity: 1;
        }
        .tw-suit-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 20px;
        }

        .tw-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 640px) {
          .tw-stat-pill { left: 12px; bottom: 16px; }
          .tw-steps-section::before { font-size: 60px; }
          .tw-stat-big { font-size: 52px; }
        }
      `}</style>

      <div className="tw-page">
        <ServiceHero
          badge="Aesthetic Care"
          heading="Professional Teeth Whitening"
          subtext="Safe and effective clinical teeth whitening for a brighter, more confident smile."
          ctaLabel="Enquire Now"
          ctaHref="/contact"
          secondaryCtaLabel="Book Now"
          secondaryCtaHref="/booking"
        />

        {/* ── About / Image Section ── */}
        <section className="tw-about-section">
          <div className="tw-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

              {/* Image */}
              <div style={{ position: 'relative' }}>
                <div className="tw-about-image-wrap">
                  <Image
                    src={TeethWhiteningImage}
                    alt="Professional Teeth Whitening Results"
                    width={800}
                    height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                <div className="tw-stat-pill">
                  <div className="tw-stat-num">8+</div>
                  <div className="tw-stat-label">Shades whiter in one visit</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="tw-eyebrow" style={{ color: '#ca1254' }}>
                  <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Premium Aesthetic
                  <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="tw-section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Brighter Smile,<br />
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>Better Confidence</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '32px', maxWidth: '440px' }}>
                  Our clinical teeth whitening treatments are designed to provide immediate results while maintaining the highest standards of safety and comfort. We use professional-grade systems that are more effective than over-the-counter alternatives.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {benefits.map((b) => (
                    <div key={b.title} className="tw-benefit-tag">
                      <CheckIcon />
                      <span>{b.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Banner ── */}
        <section className="tw-stats-section">
          <div className="tw-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="tw-eyebrow" style={{ color: 'rgba(202,18,84,0.7)', justifyContent: 'center' }}>
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
                The Whitening Difference
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', color: '#fff', margin: 0 }}>
                Real Results, Instantly
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { num: '8+', label: 'Shades Whiter' },
                { num: '60m', label: 'Treatment Time' },
                { num: '0', label: 'Downtime' },
              ].map((s) => (
                <div key={s.label} className="tw-stat-card">
                  <div className="tw-stat-big">{s.num}</div>
                  <div className="tw-stat-desc">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Steps Section ── */}
        <section className="tw-steps-section">
          <div className="tw-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="tw-eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                The Process
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                The Whitening Experience
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', position: 'relative' }}>
              {steps.map((step, i) => (
                <div key={step.title} style={{ position: 'relative' }}>
                  <div className="tw-step-card">
                    <div className="tw-step-num-bg">{i + 1}</div>
                    <div className="tw-step-badge">{String(i + 1).padStart(2, '0')}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 && <div className="tw-step-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Suitability — Feature Cards ── */}
        <FeatureCards
          heading="The Perfect Smile for You"
          cards={suitability.map((item, i) => ({
            title: item.title,
            description: item.desc,
            icon: [
              <svg key="0" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7m13.16 13.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7m13.16-13.16.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>,
              <svg key="1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /></svg>,
              <svg key="2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
            ][i],
          }))}
          cols={3}
        />

        {/* ── CTA Banner ── */}
        <section style={{ padding: '64px 0', background: '#fff' }}>
          <div className="tw-container">
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
              {/* decorative circle removed */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(59,63,105,0.5)', marginBottom: '8px', fontWeight: 700 }}>
                  Get Started
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: '#3b3f69', marginBottom: '10px', lineHeight: 1.2 }}>
                  Ready to Enhance Your Smile?
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(59,63,105,0.65)', fontWeight: 300 }}>
                  Book online or contact us to begin your whitening journey.
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