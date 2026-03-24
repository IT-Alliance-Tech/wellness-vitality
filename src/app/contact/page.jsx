import React from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Contact Team</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold !text-white mb-8 leading-[1.1] tracking-tight">
            Have a Question?
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light mb-8">
            Our clinical team is here to help with any enquiries regarding our treatments or mobile services.
          </p>

          <div className="mt-12 w-24 h-1.5 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-[#ca1254] w-1/3 animate-[slide_2s_infinite_linear]" />
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Information & WhatsApp */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-indigo mb-6">Get in Touch</h2>
                <p className="text-gray-500 mb-8 leading-relaxed max-w-md">
                  If you would like to learn more about our services or request further information, please contact our team via the form or reach out through our clinical email.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-indigo/5 flex items-center justify-center text-indigo group-hover:bg-rose group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Our Team</div>
                      <a href="mailto:admin@wellnessvitalityaustralia.com.au" className="text-indigo font-bold hover:text-rose transition-colors">
                        admin@wellnessvitalityaustralia.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link Card */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-indigo/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors" />
                <h3 className="text-xl font-bold text-indigo mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.004 2C6.48 2 2.004 6.474 2.004 11.992c0 1.758.459 3.413 1.264 4.86L2 22l5.305-1.391a9.97 9.97 0 004.699 1.177c5.524 0 10-4.475 10-9.993C22.004 6.474 17.528 2 12.004 2zM12 20.32c-1.577 0-3.11-.412-4.456-1.192l-.32-.187-3.149.826.84-3.072-.204-.325A8.31 8.31 0 013.684 12c0-4.593 3.734-8.327 8.327-8.327 4.593 0 8.327 3.734 8.327 8.327 0 4.594-3.734 8.327-8.338 8.327zM16.14 13.92c-.226-.113-1.341-.662-1.55-.739-.208-.077-.361-.115-.515.115-.152.23-.59.739-.723.893-.133.153-.266.172-.493.058-.226-.113-.956-.352-1.82-1.123-.673-.6-1.128-1.342-1.26-1.57-.13-.227-.015-.35.1-.462.103-.102.226-.266.339-.398.113-.133.15-.228.226-.379.076-.152.038-.285-.019-.399-.057-.113-.515-1.242-.705-1.7-.186-.445-.37-.384-.516-.39l-.438-.008c-.152 0-.401.057-.61.285-.21.227-.801.782-.801 1.905 0 1.123.817 2.21 1.309 2.872.193.26 2.593 3.96 6.282 5.553.877.378 1.562.604 2.097.773.882.28 1.685.24 2.32.145.708-.106 2.176-.889 2.48-1.748.304-.859.304-1.594.214-1.748-.09-.154-.33-.247-.556-.361z" />
                  </svg>
                  WhatsApp Support
                </h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Fast enquire about treatments, mobile availability, or follow-up on your booking via WhatsApp chat.
                </p>
                <Button 
                  href="https://wa.me/yourwhatsappnumber" 
                  variant="primary" 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] border-none shadow-lg shadow-green-500/20"
                >
                  Start Quick Enquiry
                </Button>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-indigo/5 relative">
              <div className="absolute top-0 left-10 w-20 h-2 bg-rose rounded-b-full" />
              <h2 className="text-2xl font-bold text-indigo mb-8">Send an Enquiry</h2>
              <form className="space-y-6 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-indigo/60 uppercase tracking-widest text-[10px]">Your Name</label>
                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-indigo/60 uppercase tracking-widest text-[10px]">Phone Number</label>
                    <input type="tel" placeholder="0400 000 000" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-indigo/60 uppercase tracking-widest text-[10px]">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-indigo/60 uppercase tracking-widest text-[10px]">Your Message</label>
                  <textarea rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all resize-none"></textarea>
                </div>
                <Button variant="primary" className="w-full py-5 text-base font-bold shadow-xl shadow-rose/20">
                  Send My Enquiry
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Disclaimer */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16text-center text-xs text-gray-400 italic font-light">
          Professional clinical nursing team. All enquiries are handled confidentially and in accordance with Australian healthcare privacy standards.
        </div>
      </section>
    </main>
  );
}
