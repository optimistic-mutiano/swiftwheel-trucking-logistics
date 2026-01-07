
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Client Feedback</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Trusted by Businesses Across Lagos</h3>
            <p className="text-slate-600 text-lg">
              We take pride in our 5.0 Google rating. Our customers' satisfaction is the engine that drives our fleet.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <span className="text-2xl font-bold text-slate-900">5.0</span>
            <span className="text-slate-500 font-medium">Google Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-slate-50 p-10 rounded-3xl relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100" />
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.author}</h4>
                  <p className="text-slate-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
