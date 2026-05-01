import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Flame, Ship, Fuel } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: "Nigerian Light Crude Oil",
      desc: "High-quality, low-sulfur crude oil known for producing high yields of premium refined products.",
      icon: <Droplets className="w-8 h-8" />
    },
    {
      title: "Natural Gas (LNG & PNG)",
      desc: "Liquefied and Piped Natural Gas solutions providing clean, efficient energy for industrial and commercial sectors.",
      icon: <Flame className="w-8 h-8" />
    },
    {
      title: "Refined Products: PMS",
      desc: "Premium Motor Spirit (Gasoline) meeting precise specifications for modern automotive engines.",
      icon: <Fuel className="w-8 h-8" />
    },
    {
      title: "Refined Products: AGO / EN590",
      desc: "Automotive Gas Oil (Diesel) configured for heavy-duty machinery and logistics, achieving EN590 standards.",
      icon: <Fuel className="w-8 h-8" />
    },
    {
      title: "Jet Fuel A1",
      desc: "Aviation fuel strictly refined and handled to meet the exacting standards of the global aviation industry.",
      icon: <Flame className="w-8 h-8" />
    },
    {
      title: "Marine Fuels",
      desc: "Bunker fuels compliant with the latest maritime environmental regulations for global shipping fleets.",
      icon: <Ship className="w-8 h-8" />
    },
    {
      title: "Refined Gas (LPG)",
      desc: "Liquefied Petroleum Gas utilized broadly across residential, commercial, and industrial applications.",
      icon: <Flame className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-blue py-20 lg:py-28 text-white px-4 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4 block">Petroleum Trading</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Products</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Blexford Management Consulting is a trusted provider of high-grade crude and refined petroleum products, securing global energy supply chains.
          </p>
        </div>
      </div>

      <div className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="border border-gray-200 p-8 hover:border-brand-gold hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded bg-gray-50 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                {product.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 border border-gray-200 p-10 flex flex-col items-center text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Inquire About Trading</h3>
          <p className="text-gray-600 max-w-2xl mb-8">
            Our trading desk ensures reliable supply, logistics management, and competitive pricing for bulk buyers across the globe. Contact us for detailed specifications and trading procedures.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-brand-blue text-white font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors">
            Contact Trading Desk <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
