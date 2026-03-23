import React from 'react';
import Button from '@/components/ui/Button';

const features = [
  {
    title: 'Real-time availability',
    icon: (
      <svg className="w-5 h-5 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Instant confirmation',
    icon: (
      <svg className="w-5 h-5 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: 'Afterpay accepted',
    icon: (
      <svg className="w-5 h-5 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

const BookingOverview = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Content */}
          <div className="p-12 lg:p-20 lg:w-1/2 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-rose" />
            
            <div className="flex items-center gap-2 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose">Self-Service Booking</span>
                <div className="w-12 h-px bg-rose/30" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-6 leading-tight">
              Simple Online <span className="text-rose italic font-light">Booking</span>.
            </h2>
            
            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
              Book your treatment through our secure online booking system. Wellness Vitality Australia uses Calendly for all appointment scheduling, with Afterpay available for all services.
            </p>
            
            <div className="space-y-5 mb-12">
               {features.map((feature) => (
                 <div key={feature.title} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-indigo/5 flex items-center justify-center transition-colors">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{feature.title}</span>
                 </div>
               ))}
            </div>

            <div>
              <Button href="/booking" variant="primary" className="px-10 py-4 shadow-lg shadow-rose/20 w-full sm:w-auto">
                 Book Appointment
              </Button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
             <img 
               src="/booking_overview.png" 
               alt="Premium Clinical Wellness Check-in" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-indigo/10 mix-blend-multiply" />
             
             {/* Floating UI Element - Verified Care Badge */}
             <div className="absolute bottom-10 right-10 left-10 sm:left-auto bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 max-w-sm">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                   </div>
                   <div>
                     <div className="text-sm font-bold text-indigo">Verified Clinical Care</div>
                     <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg key={star} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1 font-medium">5.0 Rating</span>
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
