import React from 'react';
import { Link } from 'react-router-dom';
import { Saw, ClipboardCheck, Wind, Package, Truck, UserCheck, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import { services } from '../data/mock';

const iconMap = {
  saw: Saw,
  'clipboard-check': ClipboardCheck,
  wind: Wind,
  package: Package,
  truck: Truck,
  'user-check': UserCheck
};

const Servicios = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Servicios' }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Nuestros servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Del aserradero a tu proyecto. Servicios integrales de aserrío, clasificación, secado y logística.
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
                  <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#2A5C2A] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">
            Del aserradero a tu proyecto
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#2A5C2A]/20 transform -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  { step: 1, title: 'Recepción de pedido', description: 'Revisamos tus especificaciones y confirmamos disponibilidad', time: 'Día 0' },
                  { step: 2, title: 'Aserrío y clasificación', description: 'Cortamos y clasificamos la madera según tu grado requerido', time: 'Días 1-2' },
                  { step: 3, title: 'Secado (si aplica)', description: 'Secado al aire o estufa según especificaciones', time: 'Variable' },
                  { step: 4, title: 'Preparación y carga', description: 'Enfajillado, tratamiento (si aplica) y preparación para envío', time: 'Día final' },
                  { step: 5, title: 'Entrega', description: 'Transporte a tu ubicación en La Laguna o región norte', time: '3-5 días hábiles' }
                ].map((item, idx) => (
                  <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-8">
                    {/* Odd items (left side on desktop) */}
                    {idx % 2 === 0 && (
                      <>
                        <div className="md:text-right">
                          <Card className="border-2 border-[#2A5C2A]/20">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3 md:justify-end mb-2">
                                <Clock className="w-5 h-5 text-[#C48F3A]" />
                                <span className="text-sm font-semibold text-[#C48F3A]">{item.time}</span>
                              </div>
                              <h3 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h3>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                          <div className="w-12 h-12 bg-[#2A5C2A] rounded-full flex items-center justify-center shadow-lg z-10">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Even items (right side on desktop) */}
                    {idx % 2 !== 0 && (
                      <>
                        <div className="hidden md:flex items-center justify-center">
                          <div className="w-12 h-12 bg-[#2A5C2A] rounded-full flex items-center justify-center shadow-lg z-10">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                        </div>
                        <div>
                          <Card className="border-2 border-[#2A5C2A]/20">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3 mb-2">
                                <Clock className="w-5 h-5 text-[#C48F3A]" />
                                <span className="text-sm font-semibold text-[#C48F3A]">{item.time}</span>
                              </div>
                              <h3 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h3>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    )}

                    {/* Mobile step indicator */}
                    <div className="md:hidden flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-[#2A5C2A] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] rounded-2xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <MapPin className="w-12 h-12 text-[#2A5C2A] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-[#333333] mb-6">
                Cobertura y logística
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Entregamos en Torreón, Gómez Palacio, Lerdo, San Pedro y toda La Laguna. 
                También realizamos envíos al norte de México con logística confiable.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-2 border-[#2A5C2A]/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#333333] mb-2">Pedido mínimo</h3>
                    <p className="text-gray-600 text-sm">Varía según producto. Típicamente 500 pies-tabla para tarimas y embalaje.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-[#2A5C2A]/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#333333] mb-2">Tiempo de entrega</h3>
                    <p className="text-gray-600 text-sm">3-5 días hábiles en La Laguna. Variable para pedidos especiales.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2A5C2A] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos para discutir tus necesidades y recibir asesoría personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cotizar">
              <Button size="lg" className="bg-white text-[#2A5C2A] hover:bg-gray-100 w-full sm:w-auto">
                Solicitar cotización
              </Button>
            </Link>
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
