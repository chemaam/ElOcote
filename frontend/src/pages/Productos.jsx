import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';
import { productCategories } from '../data/mock';

const Productos = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Productos' }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Nuestros productos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Madera de pino clasificada por grado y lista para tu proyecto. Desde embalaje industrial hasta mueblería fina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#2A5C2A]">
              <CardContent className="p-0">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#2A5C2A] transition-colors duration-200">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#333333] mb-3">Características principales:</h3>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-600">
                          <span className="text-[#2A5C2A] mt-1.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="font-semibold text-[#333333]">Clases disponibles:</span> {category.classes.join(', ')}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Link to={`/productos/${category.slug}`} className="flex-1">
                      <Button className="w-full bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white">
                        Ver detalles completos
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to="/cotizar">
                      <Button variant="outline" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
                        Cotizar
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">
            ¿No estás seguro qué producto necesitas?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo puede asesorarte para elegir el grado y dimensiones correctas para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white">
                Contactar un asesor
              </Button>
            </Link>
            <Link to="/calidades">
              <Button size="lg" variant="outline" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
                Ver guía de calidades
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
