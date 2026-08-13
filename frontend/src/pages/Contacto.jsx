import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { businessInfo } from '../data/mock';
import contactoImage from '../media/Contacto.png';
import { toast } from 'sonner';

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

const Contacto = () => {
  const sectionRef = useScrollReveal();

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

    let message = `*CONTACTO DESDE EL SITIO WEB*\n\n`;
    message += `*Nombre:* ${formData.nombre}\n`;
    if (formData.email) message += `*Email:* ${formData.email}\n`;
    message += `*Teléfono:* ${formData.telefono}\n`;
    if (formData.asunto) message += `*Asunto:* ${formData.asunto}\n`;
    message += `\n*Mensaje:*\n${formData.mensaje}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${businessInfo.whatsapp}?text=${encodedMessage}`, '_blank');

    toast.success('¡Redirigiendo a WhatsApp!');

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Maderas El Ocote - Torreón</title>
        <meta
          name="description"
          content="Contáctanos en Torreón, Coahuila. Teléfono, WhatsApp, correo y ubicación de Maderas El Ocote."
        />
        <link rel="canonical" href="https://www.maderaselocote.com/contacto" />
      </Helmet>
      <div ref={sectionRef} className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactoImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-900/80 to-wood-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-4 animate-fade-in">Contacto</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Hablemos de tu <span className="text-wood-300">proyecto</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 scroll-hidden">
              <div className="p-8 sm:p-10 rounded-2xl border border-wood-200/60 bg-white">
                <h2 className="text-2xl font-heading font-bold text-wood-900 mb-8">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nombre" className="text-wood-900 font-medium">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        placeholder="Juan Pérez"
                        className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-wood-900 font-medium">Teléfono / WhatsApp *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        placeholder="871 123 4567"
                        className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-wood-900 font-medium">Correo electrónico (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="asunto" className="text-wood-900 font-medium">Asunto (opcional)</Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => handleChange('asunto', e.target.value)}
                      placeholder="Ej: Cotización para tarimas"
                      className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-wood-900 font-medium">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="mt-2 min-h-40 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl py-6 text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-sm text-wood-400 text-center">
                    Al enviar, serás redirigido a WhatsApp con tu mensaje pre-llenado
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6 scroll-hidden" style={{ animationDelay: '150ms' }}>
              <div className="p-8 rounded-2xl bg-wood-900 text-white">
                <h3 className="text-lg font-heading font-bold text-white mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-wood-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/90 text-sm mb-1">Dirección</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{businessInfo.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-wood-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/90 text-sm mb-1">Teléfono</h4>
                      <button onClick={handlePhoneClick} className="text-sm text-white/60 hover:text-white transition-colors">
                        {businessInfo.phone}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-wood-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/90 text-sm mb-1">Correo</h4>
                      <button onClick={handleEmailClick} className="text-sm text-white/60 hover:text-white transition-colors">
                        {businessInfo.email}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-wood-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/90 text-sm mb-1">Horario</h4>
                      <div className="text-sm text-white/60 space-y-1">
                        <p>{businessInfo.schedule.weekdays}</p>
                        <p>{businessInfo.schedule.saturday}</p>
                        <p className="text-white/40">{businessInfo.schedule.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl py-6"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-wood-200/60 bg-wood-50">
                <h3 className="font-heading font-semibold text-wood-900 mb-3">¿Prefieres cotizar directamente?</h3>
                <Link to="/cotizar">
                  <Button variant="outline" className="w-full rounded-xl border-wood-300 text-wood-900 hover:bg-wood-900 hover:text-white transition-all duration-300">
                    Ir al cotizador
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 sm:py-32 bg-wood-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-3">Ubicación</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-wood-900">
              Encuéntranos
            </h2>
          </div>

          <div className="scroll-hidden rounded-2xl overflow-hidden border border-wood-200/60 shadow-sm">
            <div className="aspect-[21/9] bg-wood-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-103.3802081!3d25.6023222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb9653445f25%3A0x7fffbc4ef2be098a!2sMaderas%20el%20ocote!5e0!3m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Maderas El Ocote"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-wood-900 mb-1">Maderas El Ocote</h3>
                  <p className="text-sm text-wood-600">{businessInfo.address.full}</p>
                </div>
                <Button
                  onClick={handleMapClick}
                  variant="outline"
                  className="rounded-full border-wood-300 text-wood-900 hover:bg-wood-900 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Contacto;
