import { ArrowRight, TrendingUp, Building2, Landmark, Droplets, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "management-consulting",
      title: "Management Consulting",
      desc: "We work alongside leadership to formulate robust strategies, optimize organizational structures, and drive operational efficiency. Our approach combines industry expertise with data-driven insights to solve complex challenges.",
      icon: <TrendingUp className="w-10 h-10" />,
      features: ["Strategic Planning", "Operational Efficiency", "Change Management", "Performance Improvement"]
    },
    {
      id: "real-estate",
      title: "Real Estate Development",
      desc: "Our real estate practice spans the entire development lifecycle. We identify lucrative opportunities, manage complex projects, and deliver sustainable assets that maximize returns.",
      icon: <Building2 className="w-10 h-10" />,
      features: ["Project Feasibility", "Asset Management", "Commercial Development", "Property Acquisition"]
    },
    {
      id: "financial-advisory",
      title: "Financial Advisory",
      desc: "We provide comprehensive corporate finance services to support growth, structuring, and transaction execution for our global clientele.",
      icon: <Landmark className="w-10 h-10" />,
      features: ["M&A Advisory", "Capital Raising", "Risk Management", "Valuation Services"]
    },
    {
      id: "epc",
      title: "EPC (Engineering, Procurement, Construction)",
      desc: "Delivering turnkey engineering solutions on time and within budget. Our EPC capabilities ensure high-quality execution of large-scale infrastructure and industrial projects.",
      icon: <HardHat className="w-10 h-10" />,
      features: ["Project Management", "Supply Chain & Procurement", "Quality Assurance", "Construction Execution"]
    },
    {
      id: "petroleum-trading",
      title: "Petroleum Trading",
      desc: "A premier partner in the global energy market, trading a diverse portfolio of crude and refined petroleum products with unmatched reliability.",
      icon: <Droplets className="w-10 h-10" />,
      features: ["Crude Oil Supply", "Refined Product Distribution", "Logistics Optimization", "Market Analysis"]
    }
  ];

  return (
    <div className="bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-brand-blue py-20 lg:py-28 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive consulting, engineering, and trading solutions to power your enterprise towards sustainable growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-brand-gold mb-6">{service.icon}</div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-2 mb-8 border-t border-gray-100 pt-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              {service.id === 'petroleum-trading' ? (
                <Link to="/products" className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-gold transition-colors">
                  View Petroleum Products <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              ) : (
                <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-gold transition-colors">
                  Request Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-20 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Ready to work with us?</h2>
        <Link to="/contact" className="inline-block px-8 py-4 bg-brand-gold text-brand-blue font-semibold hover:bg-yellow-500 transition-colors">
          Get in Touch Today
        </Link>
      </div>
    </div>
  );
}
