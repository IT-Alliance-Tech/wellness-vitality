"use client";

import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 md:py-20 relative">

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
                className="flex flex-col sm:flex-row items-center gap-3"
                onSubmit={(e) => e.preventDefault()}
              >

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:min-w-[240px] px-4 py-3 rounded-lg border border-gray-300 bg-white text-[rgb(59,63,105)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(202,18,84)] text-sm transition"
                  required
                />

                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-[rgb(202,18,84)] text-white font-semibold hover:shadow-lg hover:-translate-y-[1px] transition text-sm"
                >
                  Subscribe
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;