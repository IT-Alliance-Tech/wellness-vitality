"use client";

import React from 'react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Hero Section - Matching About Us/Services style */}
      <section className="relative pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] !text-white">
              Patient Policies
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold !text-white mb-6 leading-[1.15] tracking-tight">
            Refund <span className="text-[#ca1254] font-semibold">Policy</span>
          </h1>

          <p className="text-lg !text-white w-full max-w-2xl mx-auto leading-relaxed font-light">
            Wellness Vitality Australia is committed to professional clinical care and transparent patient interactions.
          </p>

          {/* Animated Divider */}
          <div className="mt-10 w-20 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-[#ca1254] w-1/3 animate-[slide_2s_infinite_linear]" />
          </div>
        </div>
      </section>

      {/* Simplified Content Area */}
      <section className="py-16">
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-8">
          
          <div className="space-y-12 text-gray-700">
            
            {/* Deposits */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-[#3b3f69] mb-4 border-b border-gray-100 pb-2">Deposits</h2>
              <p className="leading-relaxed">
                A deposit is required to secure all IV infusion appointments. This confirms your booking, reserves clinical time, and covers preparation of equipment and consumables.
              </p>
            </div>

            {/* Refunds & Cancellations */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-[#3b3f69] mb-6 border-b border-gray-100 pb-2">Refunds & Cancellations</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#ca1254] mb-2">More than 24 hours’ notice</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Deposit is fully refundable or can be transferred to a future booking.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#ca1254] mb-2">Less than 24 hours’ notice</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500">
                    <li>Deposit is non-refundable due to preparation, scheduling, and loss of appointment availability.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#ca1254] mb-2">Same-day cancellation or non-attendance (no-show)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    <li>Deposit is forfeited.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Medical Suitability & Others */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
              <div>
                <h3 className="text-lg font-bold font-serif text-[#3b3f69] mb-3">Medical Suitability</h3>
                <p className="text-sm leading-relaxed">
                  If, upon clinical assessment, you are deemed unsuitable for treatment, your deposit will be fully refunded (or can be credited toward another service).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-[#3b3f69] mb-3">Rescheduling</h3>
                <p className="text-sm leading-relaxed">
                  You may reschedule once with at least 24 hours’ notice with no penalty. Additional changes may incur a fee.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-[#3b3f69] mb-3">Late Arrivals</h3>
                <p className="text-sm leading-relaxed">
                  If you arrive late, your appointment may be shortened or cancelled, and your deposit may be forfeited.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-[#3b3f69] mb-3">Mobile Appointments</h3>
                <p className="text-sm leading-relaxed">
                  For home visits, deposits also cover travel time and scheduling, and the same cancellation terms apply.
                </p>
              </div>
            </div>

            {/* Processing Info */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mt-8">
              <h3 className="text-lg font-bold font-serif text-[#3b3f69] mb-3">How Refunds Are Processed</h3>
              <p className="text-sm font-light leading-relaxed">
                Refunds (if applicable) will be processed via the original payment method within <span className="font-bold">3–5 business days</span>.
              </p>
            </div>

            {/* Backlink */}
            <div className="text-center pt-12">
              <Link href="/contact" className="text-[#ca1254] font-bold hover:underline decoration-2 underline-offset-4">
                Questions? Contact Our Team
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
