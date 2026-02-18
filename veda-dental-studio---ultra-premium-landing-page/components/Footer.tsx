
import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter, MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold shadow-md">V</div>
              <span className="text-2xl font-serif font-bold text-white">Veda <span className="text-gold italic font-normal">Studio</span></span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Hyderabad's most advanced dental facility specializing in pain-free family care and ultra-premium cosmetic transformations.
            </p>
            <div className="flex space-x-4 pt-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/5 hover:bg-gold text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-1">
            <h5 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold"></span>
            </h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-2 transition-all"></span>
                Painless Root Canal
              </a></li>
              <li><a href="#" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-2 transition-all"></span>
                Invisalign Aligners
              </a></li>
              <li><a href="#" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-2 transition-all"></span>
                Hollywood Smile
              </a></li>
              <li><a href="#" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-2 transition-all"></span>
                Pediatric Dentistry
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-1">
            <h5 className="text-lg font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold"></span>
            </h5>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Banjara Hills, Road No. 12,<br />Hyderabad, TS 500034
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-white/60 text-sm">
                  +91 98765 43210
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-white/60 text-sm">
                  contact@vedadental.in
                </p>
              </div>
            </div>
          </div>

          {/* Location Map Placeholder */}
          <div className="col-span-1 lg:col-span-1">
            <h5 className="text-lg font-bold mb-8 relative inline-block">
              Locate Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold"></span>
            </h5>
            <div className="w-full h-48 bg-white/5 rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400')] bg-cover opacity-20 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10">
                <MapPin className="w-8 h-8 text-gold animate-bounce" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/80">View on Google Maps</span>
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-3 text-white/40 text-xs uppercase tracking-widest">
              <Clock className="w-4 h-4" />
              <span>Open: Mon-Sun (9am - 9pm)</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center space-y-6 md:space-y-0 text-white/40 text-xs">
          <p>© 2024 Veda Dental Studio. Crafted for Excellence.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Patient Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
