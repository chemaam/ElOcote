import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, ArrowUpRight } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <img
                src="https://raw.githubusercontent.com/chemaam/ElOcote/refs/heads/main/frontend/src/media/Logo.png"
                alt="Maderas El Ocote"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Calidad de pino, tiempos confiables. Tu madereria de confianza en Torreón, Coahuila.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61583987974298"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">Navegación</h3>
            <ul className="space-y-3">
              {[
                { name: 'Productos', path: '/productos' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Nosotros', path: '/nosotros' },
                { name: 'Contacto', path: '/contacto' },
                { name: 'Cotizar', path: '/cotizar' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-wood-300 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">{businessInfo.address.full}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-wood-300 flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-wood-300 flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">Horario</h3>
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-wood-300 flex-shrink-0 mt-0.5" />
              <div className="text-white/60 text-sm space-y-1.5">
                <p>{businessInfo.schedule.weekdays}</p>
                <p>{businessInfo.schedule.saturday}</p>
                <p className="text-white/40">{businessInfo.schedule.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © {currentYear} Maderas El Ocote. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <span className="text-white/30 text-xs">Torreón, Coahuila, México</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
