'use client';

import React, { useState } from 'react';

/**
 * YooliEmbed Component
 *
 * Integrates the Yooli booking widget inside a premium container
 * with a branded loading state and responsive styling.
 * Only shown when the user selects Teleconsultation.
 *
 * @param {string} url - The Yooli booking iframe URL
 */
const YooliEmbed = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full min-h-[700px] md:min-h-[850px] rounded-[24px] md:rounded-[40px] overflow-hidden bg-white border border-[#ca1254]/10 shadow-2xl shadow-indigo/5 group transition-all duration-500">

      {/* Background Pink Glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#ca1254]/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#ca1254]/10 transition-colors duration-1000" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3b3f69]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-all duration-500">
          <div className="relative mb-8">
            <div className="w-16 h-16 border-2 border-[#3b3f69]/10 border-t-[#ca1254] rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#3b3f69]/5 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-[#3b3f69] font-bold text-lg tracking-tight">Initializing Secure Booking</h3>
            <p className="text-gray-400 text-sm font-light animate-pulse">Connecting to our scheduling system...</p>
          </div>
          <div className="mt-12 w-full max-w-sm px-8 space-y-4 opacity-20">
            <div className="h-6 bg-gray-100 rounded-full w-3/4 mx-auto" />
            <div className="h-4 bg-gray-100 rounded-full w-1/2 mx-auto" />
            <div className="grid grid-cols-5 gap-2 mt-8">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Yooli iframe */}
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
        className={`relative z-10 w-full min-h-[700px] md:min-h-[850px] transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        title="Wellness Vitality Booking — Yooli"
        loading="lazy"
        allow="camera; microphone"
      />
    </div>
  );
};

export default YooliEmbed;
