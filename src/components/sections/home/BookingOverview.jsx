import React from 'react';
import Button from '@/components/ui/Button';

const features = [
  { title: 'Real-time availability' },
  { title: 'Instant confirmation' },
  { title: 'Afterpay accepted' }
];

const BookingOverview = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

          {/* LEFT */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center relative">

            {/* Side line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(202,18,84)]" />

            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(202,18,84)]">
                Self-Service Booking
              </span>
              <div className="w-8 h-px bg-[rgb(202,18,84)]/40" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(59,63,105)] mb-4">
              Simple Online <span className="text-[rgb(202,18,84)]">Booking</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 mb-8">
              Book your treatment through our secure online booking system.
              We use Calendly for scheduling, with Afterpay available.
            </p>

            {/* FEATURES */}
            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[rgb(59,63,105)]/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[rgb(202,18,84)] rounded-full" />
                  </div>
                  <span className="text-sm text-[rgb(59,63,105)] font-medium">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

           <a
  href="/booking"
  className="
    inline-flex items-center justify-center
    px-7 py-2.5
    text-[rgb(202,18,84)]
    text-sm font-medium tracking-wide
    border-2 border-[rgb(202,18,84)]
    bg-transparent
    rounded-none
    transition-all duration-300
    hover:bg-[rgb(202,18,84)]
    hover:text-white
  "
>
  Book Appointment
</a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 relative h-[240px] sm:h-[320px] lg:h-auto">

            <img
              src="/booking_overview.png"
              alt="Booking"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgb(59,63,105)]/10" />

            {/* FLOATING CARD */}
            <div className="absolute bottom-4 right-4 w-[240px] bg-white p-4 rounded-lg shadow-lg">

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[rgb(202,18,84)]/10 rounded-full flex items-center justify-center text-[rgb(202,18,84)] text-sm">
                  ✓
                </div>

                <div>
                  <div className="text-sm font-semibold text-[rgb(59,63,105)]">
                    Verified Care
                  </div>
                  <div className="text-xs text-gray-500">
                    5.0 Rating
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingOverview;