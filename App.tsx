import StickyMobileCTA from "./components/StickyMobileCTA";

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import AIAssistant from './components/AIAssistant';
import { BUSINESS_INFO } from './constants';
// Fixed: Added Truck to the list of imported icons from lucide-react
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, Mail, Truck } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <About />
        
        <Services />
        
        <Reviews />

        {/* Location & Contact Section */}
        <section id="contact" className="py-24 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Ready to move your freight?</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="flex gap-5">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                      <p className="text-slate-600 leading-relaxed">{BUSINESS_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Direct Line</h4>
                      <p className="text-slate-600">{BUSINESS_INFO.phone}</p>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-600 font-bold mt-2 inline-block">Click to Call Now</a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                      <p className="text-slate-600">{BUSINESS_INFO.hours.weekdays}</p>
                      <p className="text-slate-600">{BUSINESS_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Simulated Map Embed */}
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-64 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover brightness-50"
                    alt="Map placeholder"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <MapPin className="w-12 h-12 mb-4 animate-bounce" />
                    <h5 className="text-xl font-bold mb-2">Find us at Olokonla Bus Stop</h5>
                    <p className="text-sm text-slate-200">KM 33, Lekki-Epe Expressway, Lagos</p>
                    <a 
                      href="https://www.google.com/maps/search/KM+33,+Plot+59,+Lekki-Epe+Expressway,+Olokonla+Bus+Stop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <Truck className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold tracking-tight">SWIFTWHEEL</span>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Your premier logistics partner in Lagos. We move freight, deliver construction materials, and handle your sensitive cargo with care and speed.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: BUSINESS_INFO.socials.instagram },
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:info@swiftwheel.com" },
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Our Services</a></li>
                <li><a href="#reviews" className="hover:text-blue-500 transition-colors">Customer Reviews</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Our Services</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#" className="hover:text-blue-500 transition-colors">General Freight</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Perishable Deliveries</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Sand & Granite Supply</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Truck Hire Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Office Details</h4>
              <div className="space-y-4 text-slate-400">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  {BUSINESS_INFO.address}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  {BUSINESS_INFO.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  8:00 AM - 6:00 PM (Mon-Sat)
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="mt-2">Designed for excellence in Lagos, Nigeria.</p>
          </div>
        </div>
      </footer>

      <AIAssistant />
      <StickyMobileCTA />
    </div>
  );
};

export default App;

