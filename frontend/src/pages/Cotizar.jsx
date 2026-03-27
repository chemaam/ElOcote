import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { businessInfo } from '../data/mock';
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

const Cotizar = () => {
  const sectionRef = useScrollReveal();

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
    if (!formData.nombre || !formData.telefono || !formData.mensaje) {
      toast.error('Por favor completa tu nombre, teléfono y describe lo que necesitas');
      return;
    }

    let message = `*SOLICITUD DE COTIZACIÓN*\n\n`;
    message += `*Nombre:* ${formData.nombre}\n`;
    if (formData.empresa) message += `*Empresa:* ${formData.empresa}\n`;
    message += `*Teléfono:* ${formData.telefono}\n`;
    if (formData.ciudad) message += `*Ciudad:* ${formData.ciudad}\n`;
    message += `\n*Detalles del pedido:*\n${formData.mensaje}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${businessInfo.whatsapp}?text=${encodedMessage}`, '_blank');

    toast.success('¡Redirigiendo a WhatsApp!');

    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      ciudad: '',
      mensaje: ''
    });
  };

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-900/80 to-wood-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-4 animate-fade-in">Cotización</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Solicita tu <span className="text-wood-300">cotización</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
              Completa el formulario y te contactaremos por WhatsApp para atender tu solicitud.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2 scroll-hidden">
              <div className="p-8 sm:p-10 rounded-2xl border border-wood-200/60 bg-white">
                <h2 className="text-2xl font-heading font-bold text-wood-900 mb-8">Información de contacto</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nombre" className="text-wood-900 font-medium">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        placeholder="Juan Pérez"
                        className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="empresa" className="text-wood-900 font-medium">Empresa (opcional)</Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange('empresa', e.target.value)}
                        placeholder="Mi Empresa SA"
                        className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telefono" className="text-wood-900 font-medium">Teléfono / WhatsApp *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        placeholder="871 123 4567"
                        className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ciudad" className="text-wood-900 font-medium">Ciudad</Label>
                      <Input
                        id="ciudad"
                        value={formData.ciudad}
                        onChange={(e) => handleChange('ciudad', e.target.value)}
                        placeholder="Torreón, Coahuila"
                        className="mt-2 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-wood-900 font-medium">¿Qué necesitas? *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      placeholder="Describe el tipo de producto, cantidades aproximadas, medidas si las conoces, y cualquier otra información relevante..."
                      className="mt-2 min-h-40 rounded-xl border-wood-200 focus:border-wood-300 focus:ring-wood-300"
                    />
                    <p className="text-sm text-wood-400 mt-2">
                      Ejemplo: "Necesito 50 puntales de 4x4 pulgadas por 10 pies de largo"
                    </p>
                  </div>

                  <Button
                    onClick={handleWhatsAppSubmit}
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl py-6 text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-sm text-center text-wood-400">
                    Te responderemos lo antes posible con tu cotización personalizada
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="scroll-hidden" style={{ animationDelay: '150ms' }}>
              <div className="sticky top-24 space-y-6">
                <div className="p-8 rounded-2xl bg-wood-900 text-white">
                  <h3 className="font-heading font-bold text-white mb-5">¿Qué información incluir?</h3>
                  <ul className="space-y-3">
                    {[
                      'Tipo de producto o categoría',
                      'Medidas (si las conoces)',
                      'Cantidad aproximada',
                      'Uso o aplicación del material',
                      'Fecha estimada de entrega',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-wood-300 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-wood-200/60 bg-wood-50">
                  <h3 className="font-heading font-semibold text-wood-900 mb-4">Horario de atención</h3>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-wood-300 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-wood-600 space-y-1">
                      <p>{businessInfo.schedule.weekdays}</p>
                      <p>{businessInfo.schedule.saturday}</p>
                      <p className="text-wood-400">{businessInfo.schedule.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-wood-200/60 bg-wood-50">
                  <h3 className="font-heading font-semibold text-wood-900 mb-4">También puedes</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="flex items-center space-x-3 text-sm text-wood-700 hover:text-wood-900 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-wood-300" />
                      <span>{businessInfo.phone}</span>
                    </a>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="flex items-center space-x-3 text-sm text-wood-700 hover:text-wood-900 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-wood-300" />
                      <span>{businessInfo.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cotizar;
