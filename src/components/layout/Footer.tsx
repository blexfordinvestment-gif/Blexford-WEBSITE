import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, BarChart2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <BarChart2 className="w-8 h-8 text-brand-gold" />
              <div className="flex flex-col text-white">
                <span className="font-serif font-bold text-xl leading-tight">Blexford</span>
                <span className="text-[10px] tracking-wider text-gray-400 uppercase leading-none">Management Consulting</span>
              </div>
            </Link>
            <p className="text-sm mt-4 text-gray-400">
              Driving business improvement, operations, and strategic goals across consulting, real estate, and petroleum trading.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-serif font-semibold text-lg">Services</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/services" className="hover:text-brand-gold transition-colors">Management Consulting</Link>
              <Link to="/services" className="hover:text-brand-gold transition-colors">Real Estate Development</Link>
              <Link to="/services" className="hover:text-brand-gold transition-colors">Financial Advisory</Link>
              <Link to="/services" className="hover:text-brand-gold transition-colors">EPC</Link>
              <Link to="/products" className="hover:text-brand-gold transition-colors">Petroleum Trading</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-serif font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
              <Link to="/blog" className="hover:text-brand-gold transition-colors">Industry Insights</Link>
              <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-serif font-semibold text-lg">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <p className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-white"><MapPin className="w-4 h-4 text-brand-gold" /> Headquarters</span>
                8, Dr Udo Wogu Street, <br /> Chevy View Estate, Lekki, Nigeria
              </p>
              <p className="flex items-center gap-2 mt-2">
                <Phone className="w-4 h-4 text-brand-gold" />
                +2348145571283
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold" />
                info@blexfordconsulting.com
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold" />
                Sales@blexfordconsulting.com
              </p>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Blexford Management Consulting Services. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
