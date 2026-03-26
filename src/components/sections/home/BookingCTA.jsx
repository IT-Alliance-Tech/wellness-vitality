import React from 'react';
import Button from '@/components/ui/Button';

const BookingCTA = () => {
  return (
    <section id="booking" className="py-16 bg-[#f7f8fc]">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center relative">

        {/* Subtle brand accents */}
        <div className="absolute -top-10 left-10 w-24 h-24 bg-[#ca1254]/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 right-10 w-32 h-32 bg-[#3b3f69]/10 rounded-full blur-2xl" />

        <div className="relative z-10">

          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#ca1254]/10 text-[#ca1254] text-xs font-semibold uppercase tracking-widest mb-6">
            Take the first step
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#3b3f69] leading-tight">
            Ready to reclaim your{' '}
            <span className="text-[#ca1254]">vitality?</span>
          </h2>

          {/* Text */}
          <p className="text-base md:text-lg text-[#3b3f69]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your session with qualified healthcare professionals and experience
            personalised, patient-centred care delivered to you.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary Button */}
            <Button
              href="/booking"
              className="w-full sm:w-auto px-10 py-3 text-sm font-medium bg-[#3b3f69] text-white hover:bg-[#2f325c]"
            >
              Book a Session
            </Button>

            {/* Secondary Button */}
            <Button
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 text-sm font-medium border border-[#3b3f69] text-[#3b3f69] hover:bg-[#3b3f69] hover:text-white transition"
            >
              Talk to our team
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingCTA;