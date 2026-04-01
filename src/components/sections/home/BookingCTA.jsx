import React from 'react';
import Button from '@/components/ui/Button';

const BookingCTA = () => {
  return (
    <section id="booking" className="py-14 bg-[#3b3f69] relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center relative">

        {/* Subtle brand accents */}
        <div className="absolute -top-10 left-10 w-32 h-32 bg-[#ca1254]/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10">

          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Take the first step
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
            Ready to reclaim your{' '}
            <span className="text-[#ca1254]">vitality?</span>
          </h2>

          {/* Text */}
          <p className="text-base md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Book your session with qualified healthcare professionals and experience
            personalised, patient-centred care delivered to you.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* Primary Button */}
            <Button
              href="/booking"
              className="w-full sm:w-auto px-10 py-4 text-base font-bold bg-[#ca1254] text-white !rounded-none hover:bg-[#a8103f] shadow-[0_10px_30px_rgba(202,18,84,0.3)] transition-all duration-300 font-serif"
            >
              Book a Session
            </Button>

            {/* Secondary Button */}
            <Button
              href="/contact"
              variant="outlineWhite"
              className="w-full sm:w-auto px-10 py-4 text-base font-bold !rounded-none transition-all duration-300 font-serif"
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