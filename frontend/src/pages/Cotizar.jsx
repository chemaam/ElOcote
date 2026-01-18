import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import Breadcrumbs from '../components/Breadcrumbs';
import { businessInfo } from '../data/mock';
import { toast } from 'sonner';

const Cotizar = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    ciudad: '',
    mensaje: ''
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleWhatsAppSubmit = () => {
    // Validate form
    if (!formData.nombre || !formData.telefono || !formData.mensaje) {
      toast.error('Por favor completa tu nombre, teléfono y describe lo que necesitas');
      return;
    }

    // Build WhatsApp message
    let message = `*SOLICITUD DE COTIZACIÓN*\n\n`;
    message += `*Nombre:* ${formData.nombre}\n`;
    if (formData.empresa) message += `*Empresa:* ${formData.empresa}\n`;
    message += `*Teléfono:* ${formData.telefono}\n`;
    if (formData.ciudad) message += `*Ciudad:* ${formData.ciudad}\n`;
    message += `\n*Detalles del pedido:*\n${formData.mensaje}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${businessInfo.whatsapp}?text=${encodedMessage}`, '_blank');
    
    toast.success('¡Redirigiendo a WhatsApp!');
    
    // Reset form
    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      ciudad: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Cotizar' }]} />

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6">
            Solicitar cotización
          </h1>
          <p className="text-xl text-[#40210d] max-w-3xl leading-relaxed">
            Completa el formulario y te contactaremos por WhatsApp para atender tu solicitud.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#d7ba92] mb-6">Información de contacto</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        placeholder="Juan Pérez"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="empresa">Empresa (opcional)</Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange('empresa', e.target.value)}
                        placeholder="Mi Empresa SA"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telefono">Teléfono / WhatsApp *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        placeholder="871 123 4567"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ciudad">Ciudad</Label>
                      <Input
                        id="ciudad"
                        value={formData.ciudad}
                        onChange={(e) => handleChange('ciudad', e.target.value)}
                        placeholder="Torreón, Coahuila"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensaje">¿Qué necesitas? *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      placeholder="Describe el tipo de producto, cantidades aproximadas, medidas si las conoces, y cualquier otra información relevante..."
                      className="mt-2 min-h-40"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Ejemplo: "Necesito 50 puntales de 4x4 pulgadas por 10 pies de largo" o "Requiero MDF de 12mm para un proyecto de muebles"
                    </p>
                  </div>

                  <Button
                    onClick={handleWhatsAppSubmit}
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-sm text-center text-gray-500">
                    Te responderemos lo antes posible con tu cotización personalizada
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="shadow-lg sticky top-24 border-2 border-[#2A5C2A]">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-[#d7ba92] mb-3">¿Qué información incluir?</h3>
                  <ul className="space-y-2 text-sm text-[#40210d]">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#2A5C2A] mt-0.5">•</span>
                      <span>Tipo de producto o categoría</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#2A5C2A] mt-0.5">•</span>
                      <span>Medidas (si las conoces)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#2A5C2A] mt-0.5">•</span>
                      <span>Cantidad aproximada</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#2A5C2A] mt-0.5">•</span>
                      <span>Uso o aplicación del material</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#2A5C2A] mt-0.5">•</span>
                      <span>Fecha estimada de entrega</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-[#d7ba92] mb-3">Horario de atención</h3>
                  <div className="text-sm text-[#40210d] space-y-1">
                    <p>{businessInfo.schedule.weekdays}</p>
                    <p>{businessInfo.schedule.saturday}</p>
                    <p>{businessInfo.schedule.sunday}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-[#d7ba92] mb-3">También puedes</h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="flex items-center space-x-2 text-sm text-[#2A5C2A] hover:underline"
                    >
                      <span>📞</span>
                      <span>Llamar: {businessInfo.phone}</span>
                    </a>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="flex items-center space-x-2 text-sm text-[#2A5C2A] hover:underline"
                    >
                      <span>✉️</span>
                      <span>Email: {businessInfo.email}</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizar;
