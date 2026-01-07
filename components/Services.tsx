
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Comprehensive Logistics Solutions</h3>
          <p className="text-slate-600 text-lg">
            Whether it's building a skyscraper or moving delicate goods, our fleet and team are equipped to handle your most demanding logistics challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl shadow-lg">
                  {ICON_MAP[service.icon]}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                >
                  Request Service
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
