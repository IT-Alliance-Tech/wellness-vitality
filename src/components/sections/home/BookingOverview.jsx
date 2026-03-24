import React from 'react';
import Button from '@/components/ui/Button';

const features = [
  { title: 'Real-time availability' },
  { title: 'Instant confirmation' },
  { title: 'Afterpay accepted' }
];

const BookingOverview = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

          {/* LEFT */}
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 lg:w-1/2 flex flex-col justify-center relative">

            {/* Side line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[rgb(202,18,84)]" />

            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[rgb(202,18,84)]">
                Self-Service Booking
              </span>
              <div className="w-10 h-px bg-[rgb(202,18,84)]/40" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[rgb(59,63,105)] mb-4 md:mb-6">
              Simple Online <span className="text-[rgb(202,18,84)]">Booking</span>
            </h2>

            <p className="text-sm md:text-lg text-gray-600 mb-8 md:mb-10">
              Book your treatment through our secure online booking system.
              We use Calendly for scheduling, with Afterpay available.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-8 md:mb-12">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[rgb(59,63,105)]/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[rgb(202,18,84)] rounded-full" />
                  </div>
                  <span className="text-sm md:text-base text-[rgb(59,63,105)] font-medium">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <Button
              href="/booking"
              className="px-6 md:px-10 py-3 md:py-4 bg-[rgb(202,18,84)] text-white rounded-xl w-full sm:w-auto"
            >
              Book Appointment
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-auto">

            <img
              src="/booking_overview.png"
              alt="Booking"
              className="w-full h-full object-cover"
            />

            {/* Overlay (brand color only) */}
            <div className="absolute inset-0 bg-[rgb(59,63,105)]/10" />

            {/* FLOATING CARD */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-6 sm:left-auto sm:w-[280px] bg-white p-4 sm:p-6 rounded-xl shadow-xl">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[rgb(202,18,84)]/10 rounded-full flex items-center justify-center text-[rgb(202,18,84)]">
                  ✓
                </div>

                <div>
                  <div className="text-sm font-bold text-[rgb(59,63,105)]">
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