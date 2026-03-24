import React from 'react';
import Button from '@/components/ui/Button';

const BookingCTA = () => {
  return (
    <section id="booking" className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16text-center relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 left-10 w-20 h-20 bg-rose/5 rounded-full blur-xl" />
        <div className="absolute -bottom-10 right-10 w-32 h-32 bg-indigo/5 rounded-full blur-2xl" />
        
        <div className="relative z-10">
           <div className="inline-block px-4 py-1 rounded-full bg-rose/10 text-rose text-xs font-bold uppercase tracking-widest mb-6">Take the first step</div>
           <h2 className="text-4xl md:text-6xl font-bold mb-8 text-indigo leading-tight">
             Ready to reclaim your <span className="text-rose">vitality?</span>
           </h2>
           <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
             Join 50,000+ others who trust Wellness & Vitality for their healthcare journey. Book a session today and experience care that puts you first.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button href="/booking" variant="primary" className="w-full sm:w-auto px-12 py-4 text-base">
                Book a Session Now
              </Button>
              <Button href="/contact" variant="ghost" className="flex items-center gap-2">
                 Talk to our experts
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                 </svg>
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
