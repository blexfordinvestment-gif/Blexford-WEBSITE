import { Link } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <BarChart2 className="w-8 h-8 text-brand-gold" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-tight">Blexford</span>
              <span className="text-[10px] tracking-wider text-gray-300 uppercase leading-none">Management Consulting</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-5 py-2.5 bg-brand-gold text-brand-blue font-semibold text-sm rounded-none hover:bg-yellow-500 transition-colors"
            >
              Get a Consultation
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-blue border-t border-gray-700">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-gray-200 hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 px-5 py-3 bg-brand-gold text-brand-blue font-semibold text-center rounded-none"
              onClick={() => setIsOpen(false)}
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
