import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields.');
      }

      await addDoc(collection(db, 'leads'), {
        ...formData,
        source: 'website_contact',
        status: 'new',
        createdAt: serverTimestamp(),
      });
      
      // Trigger Google Ads tracking conversion
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'conversion', {'send_to': 'AW-XXXXX/contactFormLead'});
      }
      
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'An error occurred while submitting your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Let's Work Together</h1>
          <p className="text-lg text-gray-600">
            Reach out to our experts to discuss how Blexford Management Consulting can help achieve your strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-brand-blue text-white p-10 lg:p-16 flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Corporate Headquarters</h3>
              <p className="text-gray-300">Visit us or get in touch through our official channels.</p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-300 mt-1">8, Dr Udo Wogu Street, <br /> Chevy View Estate, Lekki</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-300 mt-1">+2348145571283</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-300 mt-1">info@blexfordconsulting.com</p>
                  <p className="text-gray-300">Sales@blexfordconsulting.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Business Hours</h4>
                  <p className="text-gray-300 mt-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-none">
                <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. A member of our team will get back to you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-4 text-green-700 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {error && <div className="p-4 bg-red-50 text-red-700 text-sm">{error}</div>}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white transition-colors"
                    placeholder="+234..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-blue text-white font-semibold hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit Message'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
