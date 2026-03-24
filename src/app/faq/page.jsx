import React from 'react';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo via-[#2d2b55] to-[#1e1c3f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose/8 rounded-full blur-[120px] -translate-x-1/3" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo/30 rounded-full blur-[100px]" />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Help Center</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold !text-white mb-8 leading-[1.1] tracking-tight">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light mb-8">
            Find answers to common questions about our mobile healthcare and IV wellness services.
          </p>

          <div className="mt-12 w-24 h-1.5 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-rose w-1/3 animate-[slide_2s_infinite_linear]" />
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 text-center text-gray-500">
          FAQ content coming soon.
        </div>
      </section>
    </main>
  );
}
