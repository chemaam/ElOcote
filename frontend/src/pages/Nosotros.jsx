import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Target, TrendingUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import { businessInfo } from '../data/mock';

const Nosotros = () => {
  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Nosotros' }]} />

        {/* Hero */}
        <div className="mb-22">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6">
            Maderas El Ocote
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-[#40210d] leading-relaxed">
                Somos una empresa maderera ubicada en Torreón, Coahuila, dedicada a ofrecer soluciones en madera para construcción, carpintería e industria.
              </p>
              <p className="text-lg text-[#40210d] leading-relaxed">
                Nuestro compromiso es brindar productos de calidad, atención cercana y tiempos de respuesta eficientes que se adapten a las necesidades de cada cliente.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Maderas El Ocote"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#2A5C2A]/20 hover:border-[#2A5C2A] transition-colors duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2A5C2A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#2A5C2A] mb-4 text-center">Misión</h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  Ofrecer madera de calidad para construcción, carpintería e industria, brindando soluciones confiables, atención cercana y tiempos de respuesta eficientes que se adapten a las necesidades de cada cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#2A5C2A]/20 hover:border-[#2A5C2A] transition-colors duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2A5C2A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#2A5C2A] mb-4 text-center">Visión</h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  Consolidarnos como una empresa maderera de referencia en el mercado, reconocida por la calidad de nuestros productos, la flexibilidad en nuestras soluciones y la confianza que generamos con cada cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-12 text-center">
            Nuestros valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Calidad',
                description: 'Productos que cumplen con las expectativas de nuestros clientes'
              },
              {
                icon: Users,
                title: 'Trato cercano',
                description: 'Atención personalizada y asesoría en cada proyecto'
              },
              {
                icon: Target,
                title: 'Cumplimiento',
                description: 'Respetamos tiempos y compromisos establecidos'
              },
              {
                icon: TrendingUp,
                title: 'Flexibilidad',
                description: 'Nos adaptamos a las necesidades específicas de cada cliente'
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#2A5C2A]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2A5C2A] to-[#1e4a1e] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#d7ba92] group-hover:text-[#2A5C2A] transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-[#40210d] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cobertura */}
        <section className="mb-20 bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#d7ba92] mb-6">
              Área de cobertura
            </h2>
            <p className="text-lg text-[#40210d] mb-8 leading-relaxed">
              Realizamos entregas coordinadas en Torreón, Gómez Palacio, Lerdo y zonas cercanas de La Laguna.
            </p>
            <div className="bg-white p-6 rounded-lg inline-block">
              <p className="text-gray-700">
                <span className="font-semibold text-[#2A5C2A]">Ubicación:</span><br />
                {businessInfo.address.full}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2A5C2A] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Estamos listos para ser tu proveedor de madera de confianza
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

export default Nosotros;
