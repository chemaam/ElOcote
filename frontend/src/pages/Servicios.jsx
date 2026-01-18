import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, ClipboardCheck, Package, Truck, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import { services, businessInfo } from '../data/mock';

const iconMap = {
  scissors: Scissors,
  'clipboard-check': ClipboardCheck,
  package: Package,
  truck: Truck
};

const Servicios = () => {
  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Servicios' }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6">
            Nuestros servicios
          </h1>
          <p className="text-xl text-[#40210d] max-w-3xl leading-relaxed">
            Servicios de corte, preparación y entrega para facilitar tu operación.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#2A5C2A]">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2A5C2A] to-[#1e4a1e] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#d7ba92] group-hover:text-[#2A5C2A] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#40210d] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <section className="bg-[#2A5C2A] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos y con gusto te ayudamos con tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-[#2A5C2A] hover:bg-gray-100 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Cotizar por WhatsApp
            </Button>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2A5C2A] w-full sm:w-auto">
                Contactar
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicios;
