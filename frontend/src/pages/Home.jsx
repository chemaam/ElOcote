import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, TreePine, Truck, Shield, Ruler, Package, Hammer, Scissors, Layers, Check } from 'lucide-react';
import heroImage from '../media/Inicio.png';
import { Button } from '../components/ui/button';
import { businessInfo } from '../data/mock';

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

const Home = () => {
  const sectionRef = useScrollReveal();
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            ref={parallaxRef}
            src={heroImage}
            alt=""
            className="w-full h-[120%] object-cover -top-[10%] absolute will-change-transform"
            style={{ willChange: 'transform' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-900/80 to-wood-900/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
              <TreePine className="w-4 h-4 text-wood-300" />
              <span className="text-sm text-wood-200 font-medium">Maderería en Torreón · Carr. a San Pedro</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Madera de{' '}
              <span className="text-wood-300">calidad</span>
              .{' '}
              <br className="hidden sm:block" />
              Respuesta{' '}
              <span className="text-wood-300">rápida</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
              Soluciones en madera para construcción, carpintería e industria. Atención personalizada y entregas en la Comarca Lagunera.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-8 py-6 text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Cotizar por WhatsApp
              </Button>
              <Link to="/productos">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-wood-900 rounded-full px-8 py-6 text-base transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
                >
                  Ver productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-6 bg-wood-900 border-b border-wood-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            {[
              'Madera de pino certificada',
              'Torreón · Gómez Palacio · Lerdo',
              'Cortes a medida',
              'Llámanos: (871) 393-7770',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-wood-300/80 text-sm">
                <Check className="w-3.5 h-3.5 text-wood-300/70 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 scroll-hidden">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-3">Por qué elegirnos</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-wood-900 leading-tight">
              Tu proyecto merece la mejor madera
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: 'Calidad garantizada',
                description: 'Madera de pino seleccionada, con estándares de calidad para cada tipo de aplicación.',
              },
              {
                icon: Ruler,
                title: 'Cortes a tu medida',
                description: 'Servicio de dimensionado, cepillado y cortes especiales según tu proyecto.',
              },
              {
                icon: Truck,
                title: 'Entrega coordinada',
                description: 'Entregas en Torreón, Gómez Palacio, Lerdo y zonas cercanas de la Comarca Lagunera.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="scroll-hidden group relative p-8 sm:p-10 rounded-2xl border border-wood-200/60 hover:border-wood-300 bg-white hover:bg-wood-50/50 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-wood-100 flex items-center justify-center mb-6 group-hover:bg-wood-300 group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-wood-900" />
                </div>
                <h3 className="text-xl font-heading font-bold text-wood-900 mb-3">{item.title}</h3>
                <p className="text-wood-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 sm:py-32 bg-wood-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="scroll-hidden">
              <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-3">Catálogo</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-wood-900 leading-tight">
                Nuestras categorías
              </h2>
            </div>
            <Link to="/productos" className="scroll-hidden">
              <Button variant="outline" className="rounded-full border-wood-300 text-wood-900 hover:bg-wood-900 hover:text-white transition-all duration-300">
                Ver todo el catálogo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Construcción', desc: 'Puntales, tablas, vigas, tablones y triplay para obra.', icon: Hammer, color: 'from-amber-500/10 to-orange-500/10' },
              { name: 'Carpintería', desc: 'Madera selecta estufada, cepillado, MDF y cortes finos.', icon: Ruler, color: 'from-emerald-500/10 to-teal-500/10' },
              { name: 'Industria', desc: 'Tablas selecta y segunda, pisos de plataformas y cajas.', icon: Package, color: 'from-blue-500/10 to-indigo-500/10' },
              { name: 'Tarimas y Huacales', desc: 'Madera para tarimas, barrote, tableta y tarimas armadas.', icon: TreePine, color: 'from-wood-300/20 to-wood-200/20' },
            ].map((cat, index) => (
              <Link
                to="/productos"
                key={index}
                className={`scroll-hidden group relative p-7 rounded-2xl border border-wood-200/60 hover:border-wood-300 bg-gradient-to-br ${cat.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-white/80 flex items-center justify-center mb-5 shadow-sm">
                  <cat.icon className="w-5 h-5 text-wood-900" />
                </div>
                <h3 className="text-lg font-heading font-bold text-wood-900 mb-2 group-hover:text-wood-800 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-wood-600 leading-relaxed">{cat.desc}</p>
                <ArrowRight className="w-5 h-5 text-wood-400 group-hover:text-wood-900 group-hover:translate-x-1 transition-all duration-300 mt-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="scroll-hidden relative p-10 sm:p-12 rounded-2xl bg-wood-900 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-wood-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="relative">
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

      {/* Services Quick Preview */}
      <section className="py-24 sm:py-32 bg-wood-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-hidden">
            <p className="text-sm font-semibold text-wood-300 uppercase tracking-widest mb-3">Servicios</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-wood-900 leading-tight">
              Más que solo madera
            </h2>
            <p className="text-wood-600 mt-4 text-lg">
              Complementamos tu pedido con servicios de valor agregado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Cortes a medida', Icon: Scissors },
              { title: 'Cepillado', Icon: Layers },
              { title: 'Cortes especiales', Icon: Ruler },
              { title: 'Preparación de pedido', Icon: Package },
              { title: 'Entrega coordinada', Icon: Truck },
            ].map((service, index) => (
              <Link
                to="/servicios"
                key={index}
                className="scroll-hidden text-center p-6 rounded-2xl border border-wood-200/60 bg-white hover:border-wood-300 hover:bg-wood-50/50 hover:shadow-md cursor-pointer transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-wood-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-wood-300 transition-colors duration-300">
                  <service.Icon className="w-5 h-5 text-wood-900" />
                </div>
                <p className="text-sm font-semibold text-wood-900">{service.title}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 scroll-hidden">
            <Link to="/servicios">
              <Button variant="outline" className="rounded-full border-wood-300 text-wood-900 hover:bg-wood-900 hover:text-white transition-all duration-300">
                Conocer todos los servicios
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-wood-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${heroImage})` }} />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="scroll-hidden">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
              Contáctanos hoy y recibe atención personalizada para tu pedido de madera
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
                  Ir a Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
