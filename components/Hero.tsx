
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Logistics fleet"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-1.5 rounded-full text-white font-medium text-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>Google Rated 5.0 Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Reliable Logistics for <span className="text-blue-500 underline decoration-blue-500/50 underline-offset-8">Lagos Professionals</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Fast, secure, and professional trucking solutions across Lagos State. Specialized in freight, perishables, and construction material delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
  {/* WhatsApp */}
  <a
    href="https://wa.me/2347063514453"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-blue-500/40"
  >
    💬 Book a Truck on WhatsApp
  </a>

  {/* Call */}
  <a
    href="tel:+2347063514453"
    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all"
  >
    📞 Call Now
  </a>

  {/* Services */}
  <a
    href="#services"
    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-bold transition-all"
  >
    Our Services
  </a>
</div>


          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Reliability Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Lagos</p>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Wide Coverage</p>
            </div>
            <div className="hidden md:block">
              <p className="text-3xl font-bold text-white">24/6</p>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
