
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              SWIFTWHEEL
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-slate-900' : 'text-white'}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold text-slate-800 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
