import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Alert, AlertDescription } from '../components/ui/alert';
import { productTabs, businessInfo } from '../data/mock';
import productosImage from '../media/Productos.png';

const useScrollReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('scroll-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.scroll-hidden');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Productos = () => {
  const sectionRef = useScrollReveal();

  const handleWhatsAppClick = () => {
    const message = 'Hola, me gustaría solicitar una cotización de productos.';
    window.open(`${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Productos de madera | Maderas El Ocote - Torreón</title>
        <meta
          name="description"
          content="Catálogo de madera de pino para construcción, carpintería, industria, tarimas y huacales: triplay, MDF, vigas, tablones y cortes a medida en Torreón, Coahuila."
        />
        <link rel="canonical" href="https://www.maderaselocote.com/productos" />
      </Helmet>
      <div ref={sectionRef} className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productosImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-900/80 to-wood-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-4 animate-fade-in">Catálogo</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Nuestros <span className="text-wood-300">productos</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
              Madera para construcción, carpintería, industria y tarimas. Selecciona la categoría para ver los detalles.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs de productos */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Tabs defaultValue="construccion" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-wood-50 p-2 rounded-xl mb-12">
              {productTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-wood-900 data-[state=active]:text-white text-sm md:text-base py-3.5 rounded-lg transition-all duration-300 font-medium text-wood-600"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {productTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-8">
                {/* Intro del tab */}
                <div className="bg-wood-50 p-6 rounded-xl border border-wood-200/60">
                  <p className="text-lg text-wood-700">{tab.intro}</p>
                </div>

                {/* Aviso legal para Tarimas */}
                {tab.legalNotice && (
                  <Alert className="border border-amber-300 bg-amber-50 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    <AlertDescription className="text-amber-900 font-medium">
                      {tab.legalNotice}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Grid de productos */}
                <div className="grid md:grid-cols-2 gap-6">
                  {tab.products.map((product, index) => (
                    <div
                      key={index}
                      className="group p-7 rounded-2xl border border-wood-200/60 hover:border-wood-300 bg-white hover:bg-wood-50/50 transition-all duration-500 space-y-4"
                    >
                      <h3 className="text-xl font-heading font-bold text-wood-900">
                        {product.title}
                      </h3>
                      <p className="text-wood-600 leading-relaxed">
                        {product.description}
                      </p>

                      {product.uses && product.uses.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-wood-900 text-sm mb-2">Usos comunes:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.uses.map((use, idx) => (
                              <span key={idx} className="text-xs px-3 py-1.5 rounded-full bg-wood-100 text-wood-700 font-medium">
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.specs && (
                        <div className="bg-wood-50 p-3 rounded-lg border border-wood-200/60">
                          <p className="text-sm text-wood-700">{product.specs}</p>
                        </div>
                      )}

                      {product.availability && (
                        <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                          <p className="text-xs text-amber-900 font-medium">{product.availability}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA por tab */}
                <div className="relative rounded-2xl overflow-hidden p-10 text-center">
                  <div className="absolute inset-0 bg-wood-900" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                      ¿Interesado en estos productos?
                    </h3>
                    <p className="text-white/60 mb-6">
                      Solicita una cotización personalizada por WhatsApp
                    </p>
                    <Button
                      size="lg"
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-8 py-6 text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Cotizar por WhatsApp
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Bottom CTA */}
          <div className="mt-20 scroll-hidden">
            <div className="relative rounded-2xl overflow-hidden p-12 text-center">
              <div className="absolute inset-0 bg-wood-50" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-wood-900 mb-4">
                  ¿No encuentras lo que buscas?
                </h2>
                <p className="text-lg text-wood-600 mb-8 max-w-2xl mx-auto">
                  Contáctanos y con gusto te ayudamos a encontrar la solución ideal para tu proyecto
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-8 py-6 text-base shadow-lg shadow-green-500/25 transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Contactar por WhatsApp
                  </Button>
                  <Link to="/contacto">
                    <Button size="lg" variant="outline" className="rounded-full border-wood-300 text-wood-900 hover:bg-wood-900 hover:text-white px-8 py-6 text-base transition-all duration-300 w-full sm:w-auto">
                      Ir a Contacto
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Productos;
