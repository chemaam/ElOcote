import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Alert, AlertDescription } from '../components/ui/alert';
import Breadcrumbs from '../components/Breadcrumbs';
import { productTabs, businessInfo } from '../data/mock';

const Productos = () => {
  const handleWhatsAppClick = () => {
    const message = 'Hola, me gustaría solicitar una cotización de productos.';
    window.open(`${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Productos' }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6">
            Nuestros productos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Madera para construcción, carpintería, industria y tarimas. Selecciona la categoría para ver los detalles.
          </p>
        </div>

        {/* Tabs de productos */}
        <Tabs defaultValue="construccion" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-gray-100 p-2 rounded-lg mb-8">
            {productTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-[#2A5C2A] data-[state=active]:text-white text-sm md:text-base py-3 rounded-md transition-all duration-200"
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {productTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="space-y-8">
              {/* Intro del tab */}
              <div className="bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] p-6 rounded-lg">
                <p className="text-lg text-gray-700">{tab.intro}</p>
              </div>

              {/* Aviso legal para Tarimas */}
              {tab.legalNotice && (
                <Alert className="border-2 border-amber-500 bg-amber-50">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  <AlertDescription className="text-amber-900 font-medium">
                    {tab.legalNotice}
                  </AlertDescription>
                </Alert>
              )}

              {/* Grid de productos */}
              <div className="grid md:grid-cols-2 gap-6">
                {tab.products.map((product, index) => (
                  <Card key={index} className="border-2 hover:border-[#2A5C2A] transition-colors duration-300 overflow-hidden">
                    <CardContent className="p-6 space-y-4 relative">
                      {/* Imagen de fondo con opacidad */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                        style={{
                          backgroundImage: 'url(https://customer-assets.emergentagent.com/job_72e09283-43db-4641-b5ee-4dc83dfcd7b6/artifacts/wvuxexzc_foto_3_polines_cuadrados.png)'
                        }}
                      />
                      
                      {/* Contenido sobre la imagen */}
                      <div className="relative z-10">
                        <div>
                          <h3 className="text-xl font-bold text-[#d7ba92] mb-3">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {product.description}
                          </p>
                        </div>

                        {/* Usos comunes */}
                        {product.uses && product.uses.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-[#2A5C2A] text-sm mb-2">Usos comunes:</h4>
                            <ul className="space-y-1">
                              {product.uses.map((use, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                                  <span className="text-[#2A5C2A] mt-1">•</span>
                                  <span>{use}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Especificaciones */}
                        {product.specs && (
                          <div className="bg-[#f8f9f8] p-3 rounded-md">
                            <p className="text-sm text-gray-700">{product.specs}</p>
                          </div>
                        )}

                        {/* Aviso de disponibilidad */}
                        {product.availability && (
                          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md">
                            <p className="text-xs text-amber-900 font-medium">{product.availability}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA por tab */}
              <Card className="bg-[#2A5C2A] border-none mt-8">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ¿Interesado en estos productos?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Solicita una cotización personalizada por WhatsApp
                  </p>
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="bg-white text-[#2A5C2A] hover:bg-gray-100"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Cotizar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom CTA general */}
        <div className="mt-20 bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos y con gusto te ayudamos a encontrar la solución ideal para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Contactar por WhatsApp
            </Button>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
                Ir a Contacto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
