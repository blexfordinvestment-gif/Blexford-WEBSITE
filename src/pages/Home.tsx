import { ArrowRight, TrendingUp, Anchor, LayoutDashboard } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Strategic Excellence for <span className="text-brand-gold">Global Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Blexford Management Consulting offers expert advisory in management, real estate, financial services, EPC, and premier petroleum trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-brand-gold text-brand-blue font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border border-gray-500 text-white font-semibold flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600">Comprehensive solutions designed to optimize your operations and achieve strategic milestones.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<TrendingUp className="w-8 h-8" />}
              title="Management Consulting"
              desc="Transforming business operations with strategic insights and operational excellence."
            />
            <ServiceCard 
              icon={<LayoutDashboard className="w-8 h-8" />}
              title="Real Estate Development"
              desc="Innovative property development strategies maximizing ROI and community value."
            />
            <ServiceCard 
              icon={<Anchor className="w-8 h-8" />}
              title="Petroleum Trading"
              desc="Reliable supply of Crude Oil, LNG, PMS, Jet Fuel, and other refined products."
            />
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Connect with our experts today for a bespoke consultation. Let us partner with you to engineer the growth, efficiency, and sustainability of your enterprise.
            </p>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold" /> Targeted Strategies
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold" /> Scalable Operations
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold" /> Global Energy Access
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full max-w-md bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">Request a Consultation</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" placeholder="Tell us about your project..." />
              </div>
              <button type="button" className="w-full py-4 bg-brand-blue text-white font-semibold hover:bg-gray-800 transition-colors mt-2">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-brand-gold">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 border border-white/10 relative">
              <div className="text-brand-gold text-4xl font-serif absolute top-6 left-6 opacity-30">"</div>
              <p className="text-gray-300 text-lg mb-6 relative z-10 pt-4">
                Blexford's strategic insights completely optimized our internal workflows. Their professionalism and deep understanding of resource management are unmatched.
              </p>
              <div>
                <h4 className="font-semibold">Michael E.</h4>
                <p className="text-sm text-gray-400">Operations Director, EnergyCorp</p>
              </div>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 relative">
              <div className="text-brand-gold text-4xl font-serif absolute top-6 left-6 opacity-30">"</div>
              <p className="text-gray-300 text-lg mb-6 relative z-10 pt-4">
                Our petroleum trading logistics have seen a 30% efficiency increase since partnering with Blexford. They supply exactly what is needed, on time.
              </p>
              <div>
                <h4 className="font-semibold">Sarah T.</h4>
                <p className="text-sm text-gray-400">Procurement Manager, Global Freight</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="group border border-gray-200 p-8 hover:border-brand-gold transition-colors duration-300 bg-white">
      <div className="w-16 h-16 bg-gray-50 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
      <Link to="/services" className="text-brand-blue font-semibold flex items-center gap-2 group-hover:text-brand-gold transition-colors">
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
