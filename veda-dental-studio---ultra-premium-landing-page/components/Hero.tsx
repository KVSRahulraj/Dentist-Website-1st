import React from "react";
import { MessageCircle, Calendar } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
          alt="Veda Dental Studio"
          className="w-full h-full object-cover object-right lg:object-center transition-transform duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div className="text-white max-w-xl animate-[fadeInLeft_1s_ease-out]">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/20 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.3em]">Excellence in Dentistry</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              World Class<br />
              <span className="text-blue-500 italic font-normal">Dental Care.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-light">
              Experience the pinnacle of oral care in Hyderabad. Where precision meets the warmth of hospitality.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-10 py-5 rounded-full font-bold flex items-center space-x-3 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20">
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <a 
                href="https://wa.me/919876543210" 
                className="bg-slate-900/50 hover:bg-white/10 backdrop-blur-md border border-slate-700 text-white px-10 py-5 rounded-full font-bold flex items-center space-x-3 transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
            
            <div className="mt-16 flex items-center space-x-12 opacity-80">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Booking (Glass Card) */}
          <div className="hidden md:block animate-[fadeInRight_1.2s_ease-out]">
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl space-y-8 max-w-md ml-auto border border-white/20">
              <div className="relative z-10">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Fast-Track Booking</h3>
                  <div className="h-1 w-12 bg-blue-500 mt-3 rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-blue-200 text-[10px] font-bold uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all duration-300 font-medium" 
                      placeholder="Your Full Name" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-blue-200 text-[10px] font-bold uppercase tracking-widest ml-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all duration-300 font-medium" 
                      placeholder="+91 " 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-blue-200 text-[10px] font-bold uppercase tracking-widest ml-1">Desired Service</label>
                    <div className="relative">
                      <select className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 appearance-none cursor-pointer transition-all duration-300 font-medium">
                        <option className="bg-slate-900 text-white">Smile Makeover</option>
                        <option className="bg-slate-900 text-white">Painless Root Canal</option>
                        <option className="bg-slate-900 text-white">Invisible Aligners</option>
                        <option className="bg-slate-900 text-white">General Checkup</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-200">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-500 text-white font-bold py-5 rounded-2xl hover:bg-white hover:text-blue-600 active:bg-blue-50 transition-all duration-500 mt-6 shadow-lg shadow-blue-500/20 uppercase tracking-widest text-sm">
                    Submit Request
                  </button>
                  
                  <p className="text-white/40 text-[9px] text-center mt-6 uppercase tracking-[0.4em] font-medium italic">
                    Trusted by Hyderabad Top Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;