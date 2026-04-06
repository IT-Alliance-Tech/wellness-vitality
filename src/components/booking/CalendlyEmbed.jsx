'use client';

import React, { useState } from 'react';

/**
 * CalendlyEmbed Component
 *
 * Integrates the Calendly booking widget inside a premium container
 * with a branded loading state and responsive styling.
 * Shown when the user selects Teleconsultation.
 *
 * @param {string} url - The Calendly booking URL (e.g. https://calendly.com/your-org/consultation)
 */
const CalendlyEmbed = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '700px',
      borderRadius: '24px',
      overflow: 'hidden',
      background: '#fff',
      border: '1px solid rgba(202,18,84,0.1)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
    }}>

      {/* Loading State */}
      {isLoading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <div style={{
              width: 56,
              height: 56,
              border: '3px solid rgba(59,63,105,0.08)',
              borderTop: '3px solid #ca1254',
              borderRadius: '50%',
              animation: 'spin 0.9s linear infinite',
            }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#3b3f69', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 6px' }}>
              Loading Booking Calendar
            </h3>
            <p style={{ color: '#9999b0', fontSize: '0.85rem', margin: 0 }}>
              Connecting to Calendly…
            </p>
          </div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Calendly iframe */}
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          minHeight: '700px',
          transition: 'opacity 0.8s ease',
          opacity: isLoading ? 0 : 1,
        }}
        title="Wellness Vitality Booking — Calendly"
        loading="lazy"
        allow="camera; microphone"
      />
    </div>
  );
};

export default CalendlyEmbed;
