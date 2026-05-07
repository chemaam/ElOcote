import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight, Phone } from 'lucide-react';
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`rounded-full p-1.5 transition-all duration-500 ${
                isScrolled ? 'bg-transparent' : 'bg-white/90 shadow-lg shadow-black/10'
              }`}>
                <img
                  src="https://raw.githubusercontent.com/chemaam/ElOcote/refs/heads/main/frontend/src/media/Logo.png"
                  alt="Maderas El Ocote"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? isScrolled
                        ? 'text-wood-900 bg-wood-100'
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-wood-700 hover:text-wood-900 hover:bg-wood-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${businessInfo.phone}`}
                className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-wood-900 hover:bg-wood-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                {businessInfo.phone}
              </a>
              <Button
                size="sm"
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-5 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Link to="/cotizar">
                <Button
                  size="sm"
                  className={`rounded-full px-5 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-wood-900 hover:bg-wood-800 text-white'
                      : 'bg-white text-wood-900 hover:bg-wood-100'
                  }`}
                >
                  Cotizar
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-wood-900 hover:bg-wood-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-wood-900/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="flex justify-end p-5">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full text-wood-900 hover:bg-wood-100 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-6 py-4">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-wood-900 bg-wood-100 font-semibold'
                        : 'text-wood-600 hover:text-wood-900 hover:bg-wood-50'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile CTA */}
            <div className="p-6 space-y-3 border-t border-wood-200">
              <Button
                onClick={() => { handleWhatsAppClick(); setIsMobileMenuOpen(false); }}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl py-6 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </Button>
              <Link to="/cotizar" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-wood-900 hover:bg-wood-800 text-white rounded-xl py-6 text-base">
                  Solicitar cotización
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
