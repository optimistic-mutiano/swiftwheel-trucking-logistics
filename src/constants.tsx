
import React from 'react';
import { Truck, Package, HardHat, Timer, ShieldCheck, MapPin, Star } from 'lucide-react';
import { BusinessInfo, Service, Testimonial } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Swiftwheel Trucking & Logistics Service",
  address: "KM 33, Plot 59, Lekki–Epe Expressway, Olokonla Bus Stop, Lekki Ajah, Sangotedo 106104, Lagos",
  phone: "0706 351 4453",
  hours: {
    weekdays: "Monday–Saturday: 8:00 AM – 6:00 PM",
    sunday: "Sunday: Closed",
  },
  rating: 5.0,
  socials: {
    instagram: "https://instagram.com/swiftwheel_logistics",
  },
};

export const SERVICES: Service[] = [
  {
    id: 'general-freight',
    title: 'General Freight Transportation',
    description: 'Reliable movement of diverse goods across Lagos State with safety and efficiency as our priority.',
    icon: 'Package',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'perishable-goods',
    title: 'Perishable & Time-Sensitive Goods',
    description: 'Fast-track delivery for temperature-sensitive items ensuring freshness and timely arrival.',
    icon: 'Timer',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'construction-materials',
    title: 'Sand & Granite Supply',
    description: 'Dedicated fleet for delivering high-quality construction materials directly to your site.',
    icon: 'HardHat',
    image: 'https://images.unsplash.com/photo-1530124560676-586cad320bb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'truck-hiring',
    title: 'Truck Hiring Services',
    description: 'Flexible truck-hire solutions tailored to construction needs and large-scale logistics operations.',
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Emeka Nwosu",
    content: "Swiftwheel has been our primary logistics partner for 2 years. Their professionalism is unmatched in Lagos. Reliable and always on time!",
    rating: 5
  },
  {
    id: 2,
    author: "Bisi Adeyemi",
    content: "Needed sand for my project in Ajah urgently. They delivered within 4 hours. Highly recommend their construction material services.",
    rating: 5
  },
  {
    id: 3,
    author: "Kolawole J.",
    content: "The best logistics service in the Lekki-Ajah axis. Excellent communication and very careful with fragile goods.",
    rating: 5
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Package: <Package className="w-8 h-8 text-blue-600" />,
  Timer: <Timer className="w-8 h-8 text-blue-600" />,
  HardHat: <HardHat className="w-8 h-8 text-blue-600" />,
  Truck: <Truck className="w-8 h-8 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  MapPin: <MapPin className="w-8 h-8 text-blue-600" />,
  Star: <Star className="w-8 h-8 text-yellow-400 fill-current" />
};
