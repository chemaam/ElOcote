import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Download, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';
import { productCategories, businessInfo } from '../data/mock';

const ProductoDetalle = () => {
  const { slug } = useParams();
  const product = productCategories.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d7ba92] mb-4">Producto no encontrado</h1>
          <Link to="/productos">
            <Button className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white">
              Ver todos los productos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppQuote = () => {
    const message = `Hola, me interesa obtener una cotización para: ${product.name}`;
    window.open(`${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs
          items={[
            { label: 'Productos', path: '/productos' },
            { label: product.name }
          ]}
        />

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/cotizar">
                <Button size="lg" className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white w-full sm:w-auto">
                  Solicitar cotización
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppQuote}
                className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white w-full sm:w-auto"
              >
                WhatsApp
              </Button>
            </div>

            <div className="bg-[#f8f9f8] p-6 rounded-lg">
              <h3 className="font-semibold text-[#d7ba92] mb-4">Características principales:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#2A5C2A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Applications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-8">Aplicaciones</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.applications.map((application, idx) => (
              <Card key={idx} className="border-2 hover:border-[#2A5C2A] transition-colors duration-200">
                <CardContent className="p-6">
                  <p className="text-center font-medium text-gray-700">{application}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Grades */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-8">Clases disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.classes.map((grade, idx) => (
              <Card key={idx} className="border-2 border-[#2A5C2A] bg-gradient-to-br from-white to-[#f8f9f8]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#2A5C2A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{grade}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    <Link to="/calidades" className="text-[#2A5C2A] hover:underline">
                      Ver detalles de esta clase
                    </Link>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/calidades">
              <Button variant="outline" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
                Ver guía completa de calidades
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Dimensions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-8">Dimensiones estándar</h2>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-[#2A5C2A] mb-4">Grosor</h3>
                  <ul className="space-y-2">
                    {product.dimensions.thickness.map((dim, idx) => (
                      <li key={idx} className="text-gray-700">• {dim}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2A5C2A] mb-4">Ancho</h3>
                  <ul className="space-y-2">
                    {product.dimensions.width.map((dim, idx) => (
                      <li key={idx} className="text-gray-700">• {dim}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2A5C2A] mb-4">Largo</h3>
                  <ul className="space-y-2">
                    {product.dimensions.length.map((dim, idx) => (
                      <li key={idx} className="text-gray-700">• {dim}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold text-[#d7ba92]">Nota:</span> Dimensiones personalizadas disponibles bajo pedido. Tiempos de entrega pueden variar.
                </p>
                <Button variant="outline" size="sm" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar tabla de medidas (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conditions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-8">Estados disponibles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.conditions.map((condition, idx) => (
              <Card key={idx} className="border-2 hover:border-[#2A5C2A] transition-colors duration-200">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-gray-700">{condition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 bg-[#f8f9f8] p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#d7ba92]">Recomendación:</span> Para mueblería y carpintería fina, recomendamos madera estufada. Para construcción y tarimas, madera seca al aire o verde según tu aplicación.
            </p>
            <Link to="/blog/secado-vs-verde" className="text-[#2A5C2A] hover:underline text-sm mt-2 inline-block">
              Leer más: Madera seca vs verde →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2A5C2A] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para ordenar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicita tu cotización personalizada hoy mismo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cotizar">
              <Button size="lg" className="bg-white text-[#2A5C2A] hover:bg-gray-100 w-full sm:w-auto">
                Ir a cotizador
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppQuote}
              className="border-2 border-white text-white hover:bg-white hover:text-[#2A5C2A] w-full sm:w-auto"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductoDetalle;
