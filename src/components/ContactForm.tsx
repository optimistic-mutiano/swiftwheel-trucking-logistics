
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h3>
        <p className="text-slate-600 text-lg mb-8">
          Thank you for reaching out to Swiftwheel. Our dispatch team will call you shortly to confirm your booking.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">Get a Logistics Quote</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
          <input
            type="tel"
            required
            placeholder="080 000 0000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em] bg-[right_1rem_center] bg-no-repeat">
          <option>General Freight</option>
          <option>Perishable Goods</option>
          <option>Construction Materials (Sand/Granite)</option>
          <option>Truck Hiring</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Inquiry Details</label>
        <textarea
          rows={4}
          placeholder="Tell us about your cargo, pickup location, and destination..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
        ></textarea>
      </div>
      <button
        disabled={isSubmitting}
        className={`w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-blue-500/30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
      </button>
      <p className="mt-6 text-center text-slate-500 text-sm">
        By submitting, you agree to be contacted by our logistics team.
      </p>
    </form>
  );
};

export default ContactForm;
