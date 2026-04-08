"use client";

import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <section className="py-10 md:py-14 relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl border border-[rgb(59,63,105)]/20 bg-[rgb(59,63,105)]/5 backdrop-blur-sm px-6 py-6 md:px-8 md:py-7 shadow-[0_10px_30px_rgba(59,63,105,0.15)]">

          {/* subtle glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[rgb(202,18,84)]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[rgb(59,63,105)]/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* LEFT */}
            <div className="text-center lg:text-left max-w-xl">

              <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgb(59,63,105)]/60 mb-2">
                Stay Updated
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[rgb(59,63,105)] leading-snug">
                Join our Wellness Community
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Monthly health insights & wellness tips.
              </p>

            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-auto">

              <form
                className="flex flex-col items-center sm:items-start gap-2"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full sm:min-w-[240px] px-4 py-3 border border-gray-300 bg-white text-[rgb(59,63,105)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(202,18,84)] text-sm transition disabled:opacity-70"
                    required
                  />

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-6 py-3 bg-[rgb(202,18,84)] text-white font-bold hover:shadow-lg hover:-translate-y-[1px] transition text-sm flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    {status !== 'loading' && (
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
                
                {message && (
                  <p className={`text-sm mt-1 w-full text-center sm:text-left ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                    {message}
                  </p>
                )}
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;