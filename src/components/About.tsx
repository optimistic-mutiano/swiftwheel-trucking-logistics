
import React from 'react';
import { ShieldCheck, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200"
                alt="Trucking logistics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <h3 className="text-4xl font-bold mb-2">Lagos</h3>
              <p className="font-medium text-blue-100">Expertise in local terrain and logistics routes.</p>
            </div>
          </div>

          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">About Swiftwheel</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              A Dynamic Logistics Powerhouse in the Heart of Lagos
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Based in Olokonla, Sangotedo, Ajah, Swiftwheel Trucking & Logistics Service provides reliable and efficient transportation solutions across Lagos State. We specialize in the movement of general freight, time-sensitive perishables, and construction materials.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                  title: "Unmatched Reliability",
                  desc: "We prioritize safety and efficiency for every single load."
                },
                {
                  icon: <MapPin className="w-6 h-6 text-blue-600" />,
                  title: "Local Excellence",
                  desc: "Strategic base in Sangotedo for fast access to Lekki-Ajah corridor."
                },
                {
                  icon: <Clock className="w-6 h-6 text-blue-600" />,
                  title: "Timely Delivery",
                  desc: "Specialized in time-sensitive goods that can't afford delays."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
