import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#d7ba92] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://raw.githubusercontent.com/chemaam/ElOcote/refs/heads/main/frontend/src/media/Logo.png"
                alt="Maderas El Ocote"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-[#40210d] text-sm mb-4">
              Calidad de pino, tiempos confiables. Madereria en Torreón, Coahuila.
            </p>
            <div className="flex space-x-4">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#40210d] hover:text-[#C48F3A] transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#40210d] hover:text-[#C48F3A] transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#40210d] hover:text-[#C48F3A] transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos" className="text-[#40210d] hover:text-[#C48F3A] text-sm transition-colors duration-200">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-[#40210d] hover:text-[#C48F3A] text-sm transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-[#40210d] hover:text-[#C48F3A] text-sm transition-colors duration-200">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-[#40210d] hover:text-[#C48F3A] text-sm transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C48F3A] flex-shrink-0 mt-0.5" />
                <span className="text-[#40210d] text-sm">{businessInfo.address.full}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C48F3A] flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-[#40210d] hover:text-[#C48F3A] text-sm transition-colors duration-200">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C48F3A] flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-[#40210d] hover:text-[#C48F3A] text-sm transition-colors duration-200">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#C48F3A] flex-shrink-0 mt-0.5" />
                <div className="text-[#40210d] text-sm">
                  <p>{businessInfo.schedule.weekdays}</p>
                  <p className="mt-1">{businessInfo.schedule.saturday}</p>
                  <p className="mt-1">{businessInfo.schedule.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-[#C48F3A] font-semibold text-sm">Calidad</p>
              <p className="text-gray-500 text-xs mt-1">Productos confiables</p>
            </div>
            <div>
              <p className="text-[#C48F3A] font-semibold text-sm">Atención cercana</p>
              <p className="text-gray-500 text-xs mt-1">Servicio personalizado</p>
            </div>
            <div>
              <p className="text-[#C48F3A] font-semibold text-sm">Entrega coordinada</p>
              <p className="text-gray-500 text-xs mt-1">La Laguna y región</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Maderas El Ocote. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
