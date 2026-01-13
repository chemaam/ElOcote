import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Calculator } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { productCategories, testimonials, businessInfo } from '../data/mock';

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight">
                  Calidad de pino, tiempos confiables.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Serramos, clasificamos y entregamos madera de pino en Torreón, Coahuila y la región norte de México.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cotizar">
                  <Button size="lg" className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white w-full sm:w-auto">
                    Cotizar ahora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white w-full sm:w-auto"
                >
                  Escríbenos por WhatsApp
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {[
                  { icon: Check, text: 'Procedencia legal' },
                  { icon: Check, text: 'Prácticas sostenibles' },
                  { icon: Check, text: 'Libre de plagas' },
                  { icon: Check, text: 'Entrega confiable' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-[#2A5C2A] flex items-center justify-center flex-shrink-0">
                      <badge.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800"
                  alt="Aserradero El Ocote"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-[#C48F3A] font-bold text-3xl">15+</p>
                <p className="text-gray-600 text-sm">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Nuestros productos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Madera de pino clasificada por grado para cada aplicación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#2A5C2A]">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#2A5C2A] transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {category.shortDescription}
                    </p>
                    <ul className="space-y-2">
                      {category.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#2A5C2A] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/productos/${category.slug}`} className="block">
                      <Button variant="ghost" className="w-full text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white group-hover:bg-[#2A5C2A] group-hover:text-white transition-colors duration-200">
                        Ver detalles
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/productos">
              <Button size="lg" variant="outline" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
                Ver todos los productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2A5C2A] rounded-full mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Calcula tus pies-tabla
            </h2>
            <p className="text-gray-600">
              Usa nuestra calculadora para estimar la cantidad de madera que necesitas
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="bg-[#f8f9f8] p-6 rounded-lg">
                <p className="text-center text-gray-600 mb-2">
                  <span className="font-semibold text-[#2A5C2A]">Fórmula:</span>
                </p>
                <p className="text-center text-lg font-mono text-[#333333] mb-4">
                  (Grosor × Ancho × Largo) ÷ 12
                </p>
                <p className="text-center text-sm text-gray-500">
                  Grosor y ancho en pulgadas, largo en pies
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link to="/cotizar">
                  <Button size="lg" className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white">
                    Usar calculadora completa
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
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
                    <p className="font-semibold text-[#333333]">{testimonial.name}</p>
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
            Contáctanos hoy y recibe una cotización personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cotizar">
              <Button size="lg" className="bg-white text-[#2A5C2A] hover:bg-gray-100 w-full sm:w-auto">
                Solicitar cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white hover:bg-white hover:text-[#2A5C2A] w-full sm:w-auto"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
