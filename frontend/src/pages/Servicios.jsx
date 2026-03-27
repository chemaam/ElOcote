import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, ClipboardCheck, Package, Truck, MessageCircle, ArrowRight, Ruler } from 'lucide-react';
import { Button } from '../components/ui/button';
import { services, businessInfo } from '../data/mock';
import serviciosImage from '../media/servicios.png';

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

const iconMap = {
  scissors: Scissors,
  'clipboard-check': ClipboardCheck,
  package: Package,
  truck: Truck
};

const Servicios = () => {
  const sectionRef = useScrollReveal();

  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviciosImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-900/80 to-wood-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-4 animate-fade-in">Servicios</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Más que solo <span className="text-wood-300">madera</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
              Servicios de corte, preparación y entrega para facilitar tu operación.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Ruler;
              return (
                <div
                  key={service.id}
                  className="scroll-hidden group p-8 sm:p-10 rounded-2xl border border-wood-200/60 hover:border-wood-300 bg-white hover:bg-wood-50/50 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-wood-100 flex items-center justify-center mb-6 group-hover:bg-wood-300 group-hover:scale-110 transition-all duration-500">
                    <IconComponent className="w-7 h-7 text-wood-900" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-wood-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-wood-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-wood-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${serviciosImage})` }} />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center scroll-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
            Contáctanos y con gusto te ayudamos con tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-8 py-6 text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Cotizar por WhatsApp
            </Button>
            <Link to="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-wood-900 rounded-full px-8 py-6 text-base transition-all duration-300 w-full sm:w-auto"
              >
                Contactar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
