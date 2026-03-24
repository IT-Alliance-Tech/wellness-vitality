import React from 'react';
import Button from '@/components/ui/Button';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo via-[#2d2b55] to-[#1e1c3f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose/8 rounded-full blur-[120px] -translate-x-1/3" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo/30 rounded-full blur-[100px]" />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Secure Booking</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold !text-white mb-8 leading-[1.1] tracking-tight">
            Book Your <br className="hidden md:block" />
            <span className="text-rose">IV Infusion</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light mb-8">
            Schedule your treatment through our secure online booking system. Wellness Vitality Australia uses Calendly for all appointment scheduling.
          </p>

          <div className="mt-12 w-24 h-1.5 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-rose w-1/3 animate-[slide_2s_infinite_linear]" />
          </div>
        </div>
      </section>

      {/* Booking Integration Section */}
      <section className="py-24 bg-gradient-to-br from-white to-indigo/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column: Info & Payment */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-indigo/5">
                <h2 className="text-2xl font-bold text-indigo mb-6">Booking Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo/5 flex items-center justify-center text-indigo flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-indigo">Instant Confirmation</div>
                      <div className="text-xs text-gray-400 font-light mt-1">Receive immediate details via email and SMS.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo/5 flex items-center justify-center text-indigo flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-indigo">Service Locations</div>
                      <div className="text-xs text-gray-400 font-light mt-1">Home, Workplace, Aged Care & NDIS Residences.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Afterpay Section */}
              <div className="bg-gradient-to-br from-[#B2FCE1] to-[#D1FFF0] p-8 rounded-[2rem] border border-[#A0EFD5] shadow-lg shadow-green-200/50 group">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                     <svg className="w-5 h-5 text-[#000000]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 9.5l-3 3-1.5-1.5L10.5 11l1.5 1.5 3-3 1.5 1.5z" />
                     </svg>
                   </div>
                   <span className="font-black text-xs uppercase tracking-widest text-black/40">Payments</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-2">Book now. Pay later.</h3>
                <p className="text-xs text-black/60 leading-relaxed font-medium mb-6">
                  Experience professional wellness now and spread the cost over 4 interest-free fortnightly payments.
                </p>
                <div className="flex items-center gap-2">
                   <div className="px-3 py-1 bg-black text-[#B2FCE1] text-[10px] font-black rounded-md uppercase tracking-tighter italic">Afterpay</div>
                   <div className="text-[10px] font-bold text-black/20 uppercase tracking-[0.2em]">Available Online</div>
                </div>
              </div>
            </div>

            {/* Right Column: Calendly Placeholder/Widget */}
            <div className="lg:col-span-2 bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-indigo/5 min-h-[600px] overflow-hidden relative flex items-center justify-center p-12 text-center group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo/5 rounded-full blur-3xl group-hover:bg-rose/5 transition-colors" />
               <div className="relative z-10 max-w-md">
                 <div className="w-20 h-20 bg-indigo/5 rounded-3xl flex items-center justify-center text-indigo mx-auto mb-8 animate-pulse">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <h2 className="text-2xl font-bold text-indigo mb-4">Select Your Time</h2>
                 <p className="text-gray-500 text-sm leading-relaxed mb-8">
                   Our interactive booking widget is loading. Here you will be able to select your desired treatment and nurse availability instantly.
                 </p>
                 <div className="py-4 px-8 bg-gray-50 rounded-full border border-gray-100 text-xs font-bold text-indigo/40 tracking-widest uppercase">
                   Secure Calendly Integration
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16text-center flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-sm text-gray-500 font-medium">Need help with your booking?</p>
          <div className="flex gap-4">
            <Button href="/contact" variant="outline" className="px-6 py-2.5 text-xs">Send Enquiry</Button>
            <Button href="/services" variant="outline" className="px-6 py-2.5 text-xs">View Services</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
