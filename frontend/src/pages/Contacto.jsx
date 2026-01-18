import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Breadcrumbs from '../components/Breadcrumbs';
import { businessInfo, faqs } from '../data/mock';
import { toast } from 'sonner';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${businessInfo.email}`;
  };

  const handleMapClick = () => {
    window.open(businessInfo.mapUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.telefono || !formData.mensaje) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    // Build WhatsApp message
    let message = `*CONTACTO DESDE EL SITIO WEB*\n\n`;
    message += `*Nombre:* ${formData.nombre}\n`;
    if (formData.email) message += `*Email:* ${formData.email}\n`;
    message += `*Teléfono:* ${formData.telefono}\n`;
    if (formData.asunto) message += `*Asunto:* ${formData.asunto}\n`;
    message += `\n*Mensaje:*\n${formData.mensaje}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${businessInfo.whatsapp}?text=${encodedMessage}`, '_blank');

    toast.success('¡Redirigiendo a WhatsApp!');

    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Contacto' }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-[#40210d] max-w-3xl leading-relaxed">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#d7ba92] mb-6">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        placeholder="Juan Pérez"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono / WhatsApp *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        placeholder="871 123 4567"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Correo electrónico (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="asunto">Asunto (opcional)</Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => handleChange('asunto', e.target.value)}
                      placeholder="Ej: Cotización para tarimas"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="mt-2 min-h-40"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar, serás redirigido a WhatsApp con tu mensaje pre-llenado
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-2 border-[#260801]">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#d7ba92] mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#260801] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#d7ba92] mb-1">Dirección</h4>
                      <p className="text-sm text-[#40210d] leading-relaxed">
                        {businessInfo.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#260801] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#d7ba92] mb-1">Teléfono</h4>
                      <button
                        onClick={handlePhoneClick}
                        className="text-sm text-[#260801] hover:underline"
                      >
                        {businessInfo.phone}
                      </button>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#260801] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#d7ba92] mb-1">Correo</h4>
                      <button
                        onClick={handleEmailClick}
                        className="text-sm text-[#260801] hover:underline"
                      >
                        {businessInfo.email}
                      </button>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#260801] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#d7ba92] mb-2">Horario</h4>
                      <div className="text-sm text-[#40210d] space-y-1">
                        <p>{businessInfo.schedule.weekdays}</p>
                        <p>{businessInfo.schedule.saturday}</p>
                        <p>{businessInfo.schedule.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#d7ba92] mb-4">¿Prefieres cotizar directamente?</h3>
                <Link to="/cotizar">
                  <Button variant="outline" size="lg" className="w-full border-[#260801] text-[#260801] hover:bg-[#260801] hover:text-white">
                    Ir al cotizador
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-8">Ubicación</h2>
          <Card className="shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[21/9] bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1234567890!2d-103.4!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDPCsDI0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Maderas El Ocote"
                />
              </div>
              <div className="p-6 bg-[#f8f9f8]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#d7ba92] mb-1">Maderas El Ocote</h3>
                    <p className="text-sm text-[#40210d]">{businessInfo.address.full}</p>
                  </div>
                  <Button
                    onClick={handleMapClick}
                    variant="outline"
                    className="border-[#260801] text-[#260801] hover:bg-[#260801] hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-[#d7ba92] mb-8 text-center">Preguntas frecuentes</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="border-2 border-gray-100 rounded-lg px-6 hover:border-[#260801] transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#d7ba92] hover:text-[#260801] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#40210d] pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-[#40210d] mb-6">¿No encuentras lo que buscas?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Preguntar por WhatsApp
                </Button>
                <Button
                  onClick={handlePhoneClick}
                  size="lg"
                  variant="outline"
                  className="border-[#260801] text-[#260801] hover:bg-[#260801] hover:text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
