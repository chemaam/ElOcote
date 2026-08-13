import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Target, TrendingUp, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { businessInfo } from '../data/mock';
import nosotrosImage from '../media/Nosotros.jpg';

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

const Nosotros = () => {
  const sectionRef = useScrollReveal();

  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Nosotros | Maderas El Ocote - Torreón</title>
        <meta
          name="description"
          content="Somos una empresa maderera ubicada en Torreón, Coahuila, dedicada a ofrecer soluciones en madera para construcción, carpintería e industria."
        />
        <link rel="canonical" href="https://www.maderaselocote.com/nosotros" />
      </Helmet>
      <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section - Full screen like Home */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={nosotrosImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-900/80 to-wood-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-4 animate-fade-in">Sobre nosotros</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Maderas{' '}
              <span className="text-wood-300">El Ocote</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
              Somos una empresa maderera ubicada en Torreón, Coahuila, dedicada a ofrecer soluciones en madera para construcción, carpintería e industria.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center scroll-hidden">
            <p className="text-lg sm:text-xl text-wood-600 leading-relaxed">
              Nuestro compromiso es brindar productos de calidad, atención cercana y tiempos de respuesta eficientes que se adapten a las necesidades de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 sm:py-32 bg-wood-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="scroll-hidden relative p-10 sm:p-12 rounded-2xl bg-wood-900 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-wood-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-wood-300" />
                </div>
                <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-4">Misión</p>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 leading-snug">
                  Madera de calidad con atención cercana
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Ofrecer madera de calidad para construcción, carpintería e industria, brindando soluciones confiables, atención cercana y tiempos de respuesta eficientes que se adapten a las necesidades de cada cliente.
                </p>
              </div>
            </div>

            <div className="scroll-hidden relative p-10 sm:p-12 rounded-2xl bg-gradient-to-br from-wood-100 to-wood-50 border border-wood-200 overflow-hidden" style={{ animationDelay: '150ms' }}>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-wood-200/50 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-wood-900/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-wood-900" />
                </div>
                <p className="text-sm font-semibold text-wood-400 uppercase tracking-widest mb-4">Visión</p>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-wood-900 mb-4 leading-snug">
                  Referencia en el mercado maderero
                </h3>
                <p className="text-wood-600 leading-relaxed">
                  Consolidarnos como una empresa maderera de referencia en el mercado, reconocida por la calidad de nuestros productos, la flexibilidad en nuestras soluciones y la confianza que generamos con cada cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-hidden">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-3">Lo que nos define</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-wood-900 leading-tight">
              Nuestros valores
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Calidad',
                description: 'Productos que cumplen con las expectativas de nuestros clientes'
              },
              {
                icon: Users,
                title: 'Trato cercano',
                description: 'Atención personalizada y asesoría en cada proyecto'
              },
              {
                icon: Target,
                title: 'Cumplimiento',
                description: 'Respetamos tiempos y compromisos establecidos'
              },
              {
                icon: TrendingUp,
                title: 'Flexibilidad',
                description: 'Nos adaptamos a las necesidades específicas de cada cliente'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="scroll-hidden group p-8 rounded-2xl border border-wood-200/60 hover:border-wood-300 bg-white hover:bg-wood-50/50 text-center transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-wood-100 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-wood-300 group-hover:scale-110 transition-all duration-500">
                  <value.icon className="w-7 h-7 text-wood-900" />
                </div>
                <h3 className="text-lg font-heading font-bold text-wood-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-wood-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-24 sm:py-32 bg-wood-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center scroll-hidden">
            <div className="w-14 h-14 bg-wood-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-7 h-7 text-wood-900" />
            </div>
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-3">Cobertura</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-wood-900 mb-6">
              Área de entrega
            </h2>
            <p className="text-lg text-wood-600 mb-8 leading-relaxed">
              Realizamos entregas coordinadas en Torreón, Gómez Palacio, Lerdo y zonas cercanas de La Laguna.
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-wood-200 shadow-sm">
              <MapPin className="w-5 h-5 text-wood-300 flex-shrink-0" />
              <p className="text-wood-700 text-sm">
                {businessInfo.address.full}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-wood-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${nosotrosImage})` }} />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center scroll-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
            Estamos listos para ser tu proveedor de madera de confianza
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
    </>
  );
};

export default Nosotros;
