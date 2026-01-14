import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#2A5C2A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#333333] font-bold text-lg leading-tight">Maderas</span>
              <span className="text-[#2A5C2A] font-bold text-lg leading-tight">El Ocote</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#2A5C2A]'
                    : 'text-[#333333] hover:text-[#2A5C2A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppClick}
              className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Link to="/cotizar">
              <Button
                size="sm"
                className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white transition-colors duration-200"
              >
                Cotizar ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#333333] hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#2A5C2A]'
                    : 'text-[#333333]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-full border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Link to="/cotizar" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white">
                  Cotizar ahora
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
