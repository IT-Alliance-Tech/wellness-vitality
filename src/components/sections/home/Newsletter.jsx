"use client";

import React from 'react';

const Newsletter = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-16z-10">
        <div className="relative bg-indigo rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden">
          
          {/* Inner Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-12 z-10">
            
            {/* Left Side: Content */}
            <div className="lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-sm">
                 Stay Updated
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Join our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose to-pink-400">Wellness Community</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed font-light">
                Receive the latest health insights, exclusive mobile clinic schedules, and expert wellness tips delivered straight to your inbox each month.
              </p>
            </div>

            {/* Right Side: Form */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-grow min-w-0 sm:min-w-[350px]">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-indigo/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-6 py-4 rounded-xl bg-white text-indigo placeholder:text-indigo/50 focus:outline-none focus:ring-4 focus:ring-rose/30 transition-all font-medium shadow-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-rose text-white font-bold hover:bg-[#d9265f] hover:shadow-[0_8px_20px_rgba(203,21,78,0.4)] hover:-translate-y-0.5 active:scale-95 transition-colors w-full sm:w-auto flex justify-center items-center gap-2"
                >
                  Subscribe
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
              <p className="mt-4 text-xs text-white/50 text-center sm:text-left">
                We care about your data. Read our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
