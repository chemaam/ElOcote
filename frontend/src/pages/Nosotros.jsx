import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Leaf, TrendingUp, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import { businessInfo } from '../data/mock';

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Nosotros' }]} />

        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Sobre Maderas El Ocote
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos un aserradero establecido en Torreón, Coahuila, con más de 15 años de experiencia sirviendo a la industria de La Laguna y el norte de México.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nos especializamos en el aserrío, clasificación y distribución de madera de pino para embalaje, tarimas, construcción y mueblería. Nuestro compromiso es entregar calidad consistente con tiempos confiables.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabajamos con procedencia legal y prácticas sostenibles, asegurando que cada pieza cumple con los estándares de la industria y las expectativas de nuestros clientes.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Aserradero El Ocote"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">
            Nuestros valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Calidad',
                description: 'Clasificación precisa y consistente en cada pedido'
              },
              {
                icon: Users,
                title: 'Servicio',
                description: 'Asesoría personalizada y atención a tus necesidades'
              },
              {
                icon: Leaf,
                title: 'Sostenibilidad',
                description: 'Manejo responsable y procedencia legal certificada'
              },
              {
                icon: TrendingUp,
                title: 'Confiabilidad',
                description: 'Tiempos de entrega cumplidos y logística eficiente'
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#2A5C2A]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2A5C2A] to-[#1e4a1e] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#2A5C2A] transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20 bg-gradient-to-br from-[#2A5C2A] to-[#1e4a1e] rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '15+', label: 'Años de experiencia' },
              { number: '500+', label: 'Clientes satisfechos' },
              { number: '4', label: 'Categorías de productos' },
              { number: '100%', label: 'Procedencia legal' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[#C48F3A] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Map */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">
            Nuestra cobertura
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#2A5C2A] mx-auto mb-4" />
                <p className="text-gray-600">
                  [Mapa de ubicación - placeholder]
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  La Laguna y norte de México
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ubicados estratégicamente en Torreón, Coahuila, servimos a toda la Comarca Lagunera y tenemos capacidad de envío a toda la región norte del país.
                </p>
              </div>

              <div className="bg-[#f8f9f8] p-6 rounded-lg space-y-4">
                <h4 className="font-semibold text-[#333333]">Zonas de entrega principal:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#2A5C2A] rounded-full"></span>
                    <span>Torreón, Coahuila</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#2A5C2A] rounded-full"></span>
                    <span>Gómez Palacio, Durango</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#2A5C2A] rounded-full"></span>
                    <span>Lerdo, Durango</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#2A5C2A] rounded-full"></span>
                    <span>San Pedro, Coahuila</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#2A5C2A] rounded-full"></span>
                    <span>Región norte de México</span>
                  </li>
                </ul>
              </div>

              <Card className="border-2 border-[#2A5C2A]/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#2A5C2A] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-2">
                        ¿Envíos fuera de la zona?
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Contáctanos para consultar disponibilidad y costos de envío a otras ubicaciones.
                      </p>
                      <Link to="/contacto">
                        <Button size="sm" variant="outline" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
                          Contactar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">
              Certificaciones y cumplimiento
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Procedencia Legal',
                  description: 'Toda nuestra madera proviene de fuentes legales y sustentables certificadas.'
                },
                {
                  title: 'NIMF-15 / ISPM-15',
                  description: 'Tratamiento térmico certificado para tarimas de exportación internacional.'
                },
                {
                  title: 'Control de Plagas',
                  description: 'Procesos de secado controlado que garantizan madera libre de plagas.'
                }
              ].map((cert, index) => (
                <Card key={index} className="border-2 border-[#2A5C2A]/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#2A5C2A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[#333333] mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
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

export default Nosotros;
