import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { testimonials, businessInfo } from '../data/mock';

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d7ba92] leading-tight">
                  Madera de calidad. Respuesta rápida.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Soluciones en madera para construcción, carpintería e industria.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Cotizar por WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white w-full sm:w-auto"
                >
                  Ver Productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800"
                  alt="Maderas El Ocote"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-[#2A5C2A]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#2A5C2A] mb-4">Misión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ofrecer madera de calidad para construcción, carpintería e industria, brindando soluciones confiables, atención cercana y tiempos de respuesta eficientes que se adapten a las necesidades de cada cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#2A5C2A]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#2A5C2A] mb-4">Visión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Consolidarnos como una empresa maderera de referencia en el mercado, reconocida por la calidad de nuestros productos, la flexibilidad en nuestras soluciones y la confianza que generamos con cada cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores Grid */}
      <section className="py-20 bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d7ba92]">
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Calidad y respuesta',
                description: 'Atención cercana y tiempos eficientes.'
              },
              {
                title: 'Flexibilidad',
                description: 'Medidas y soluciones según la necesidad.'
              },
              {
                title: 'Cobertura',
                description: 'Entregas locales/zonales bajo coordinación.'
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-[#2A5C2A] transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#2A5C2A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#d7ba92] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Anchor para scroll desde hero */}
      <div id="productos"></div>

      {/* Quick Products Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d7ba92] mb-4">
              Nuestras categorías
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones en madera para diferentes aplicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Construcción', desc: 'Puntales, tablas, vigas, tablones y triplay' },
              { name: 'Carpintería', desc: 'Madera selecta estufada, cepillado y MDF' },
              { name: 'Industria', desc: 'Tablas selecta y segunda, pisos de plataformas' },
              { name: 'Tarimas y Huacales', desc: 'Madera para tarimas, barrote y tableta' }
            ].map((cat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#2A5C2A]">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="text-lg font-bold text-[#d7ba92] group-hover:text-[#2A5C2A] transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/productos">
              <Button size="lg" className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white">
                Ver todos los productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d7ba92] mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 hover:border-[#2A5C2A] transition-colors duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#C48F3A] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-[#d7ba92]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    <p className="text-sm text-[#2A5C2A]">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A5C2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contáctanos hoy y recibe atención personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-[#2A5C2A] hover:bg-gray-100 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Cotizar por WhatsApp
            </Button>
            <Link to="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2A5C2A] w-full sm:w-auto"
              >
                Ir a Contacto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
