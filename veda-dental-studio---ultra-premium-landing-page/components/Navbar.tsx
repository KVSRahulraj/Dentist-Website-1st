
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold shadow-md">V</div>
          <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
            Veda <span className="text-gold font-normal italic">Dental Studio</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? 'text-navy hover:text-gold' : 'text-white/90 hover:text-gold'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="flex items-center space-x-2 bg-gold hover:bg-gold/90 text-white px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-md text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-navy' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-navy' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-navy z-[-1] transition-all duration-500 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center space-y-8`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-serif tracking-widest hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="tel:+919876543210"
          className="flex items-center space-x-3 bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
