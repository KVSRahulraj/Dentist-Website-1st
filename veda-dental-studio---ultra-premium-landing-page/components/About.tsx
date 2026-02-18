
import React from 'react';
import { Award, UserCheck, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Portrait Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gold rounded-[4rem] rotate-3 transform transition-transform duration-700 group-hover:rotate-6"></div>
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Aryan Veda - Founder of Veda Dental Studio" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-navy p-10 rounded-[2.5rem] shadow-2xl text-white border-2 border-gold transform transition-all duration-500 hover:scale-110">
              <div className="text-5xl font-serif font-bold text-gold mb-1">15+</div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-white/70">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Founder's Story</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">Crafting Smiles With <span className="text-gold italic font-normal">Passion & Precision</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded by Dr. Aryan Veda, Veda Dental Studio was born from a vision to redefine the patient experience. We moved away from the sterile, cold clinical vibe to create a "Dental Sanctuary" in Hyderabad.
              </p>
              <div className="bg-slate-50 border-l-4 border-gold p-8 rounded-2xl italic text-navy text-lg leading-relaxed shadow-sm">
                "We don't just restore teeth; we restore confidence. My team and I are dedicated to bringing the world's most advanced dental technologies to our city, delivered with heartfelt Indian hospitality."
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-gold shadow-lg">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-navy text-lg">MDS Specialist</h5>
                  <p className="text-sm text-slate-500">Gold Medalist Surgeon</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-gold shadow-lg">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-navy text-lg">VIP Choice</h5>
                  <p className="text-sm text-slate-500">Trusted by 50,000+ Families</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <button className="bg-navy text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-gold transition-all transform hover:scale-105">
                Our Full Philosophy
              </button>
              <a href="#" className="text-navy font-bold underline decoration-gold underline-offset-8 hover:text-gold transition-all uppercase tracking-widest text-xs">
                View Credentials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
