import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Check, X } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import { woodGrades } from '../data/mock';

const Calidades = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Calidades' }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6">
            Guía de calidades de madera
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Clasificación por grado de madera de pino. Entiende las diferencias entre 2&M, #3, #4 y #5 para elegir correctamente.
          </p>
        </div>

        {/* Grades Detailed Cards */}
        <div className="space-y-8 mb-20">
          {woodGrades.map((grade, index) => (
            <Card key={index} className="border-2 hover:border-[#2A5C2A] transition-all duration-300 shadow-lg">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Grade Badge */}
                  <div className="bg-gradient-to-br from-[#2A5C2A] to-[#1e4a1e] p-8 flex flex-col items-center justify-center text-white">
                    <div className="text-5xl font-bold mb-2">{grade.grade}</div>
                    <div className="text-sm opacity-90">{grade.name}</div>
                    <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-xs font-semibold">
                      {grade.quality}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8 space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {grade.description}
                    </p>

                    <div>
                      <h3 className="font-bold text-[#d7ba92] mb-3">Características:</h3>
                      <ul className="space-y-2">
                        {grade.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-[#2A5C2A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#d7ba92] mb-3">Ideal para:</h3>
                      <div className="flex flex-wrap gap-2">
                        {grade.idealFor.map((use, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-[#f8f9f8] border border-[#2A5C2A]/20 rounded-full text-sm text-gray-700"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        <span className="font-semibold text-[#d7ba92]">Rango de precio:</span> {grade.price}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-8 text-center">
            Comparación rápida
          </h2>
          <Card className="shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#2A5C2A] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Característica</th>
                      <th className="px-6 py-4 text-center font-semibold">2&M</th>
                      <th className="px-6 py-4 text-center font-semibold">#3</th>
                      <th className="px-6 py-4 text-center font-semibold">#4</th>
                      <th className="px-6 py-4 text-center font-semibold">#5</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-700">Tamaño de nudos</td>
                      <td className="px-6 py-4 text-center">Mínimos</td>
                      <td className="px-6 py-4 text-center">Medianos</td>
                      <td className="px-6 py-4 text-center">Grandes</td>
                      <td className="px-6 py-4 text-center">Muy grandes</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-700">Apariencia</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-700">Resistencia estructural</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-700">Precio relativo</td>
                      <td className="px-6 py-4 text-center">$$$</td>
                      <td className="px-6 py-4 text-center">$$</td>
                      <td className="px-6 py-4 text-center">$</td>
                      <td className="px-6 py-4 text-center">$</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-700">Mejor uso</td>
                      <td className="px-6 py-4 text-center text-sm">Muebles</td>
                      <td className="px-6 py-4 text-center text-sm">Construcción</td>
                      <td className="px-6 py-4 text-center text-sm">Tarimas</td>
                      <td className="px-6 py-4 text-center text-sm">Temporal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white">
              <Download className="w-5 h-5 mr-2" />
              Descargar guía completa (PDF)
            </Button>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-4">
            ¿Aún no sabes qué clase elegir?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo puede asesorarte para seleccionar el grado correcto según tu aplicación y presupuesto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white w-full sm:w-auto">
                Hablar con un asesor
              </Button>
            </Link>
            <Link to="/productos">
              <Button size="lg" variant="outline" className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white w-full sm:w-auto">
                Ver productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calidades;
