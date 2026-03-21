"use client";

import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-rose py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          
          {/* Left Side: Content */}
          <div className="lg:max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-light">
              Our latest product launches, interesting reads, exclusive interviews and more — delivered straight to your inbox every month.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow min-w-0 sm:min-w-[350px]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-10 py-4 rounded-xl bg-white text-rose font-bold hover:bg-white/90 active:scale-95 transition-all shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
