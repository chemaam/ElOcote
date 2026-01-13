// Mock data para Maderas El Ocote

export const businessInfo = {
  name: 'Maderas "El Ocote"',
  phone: '+52 871 393 7770',
  whatsapp: 'https://wa.me/528713937770',
  email: 'contacto@elocote.mx',
  address: {
    street: 'Calle Carr. a San Pedro 773',
    neighborhood: 'Ejido Ana',
    city: 'Torreón',
    state: 'Coahuila',
    zip: '27018',
    country: 'México',
    region: 'Comarca Lagunera',
    full: 'Calle Carr. a San Pedro 773, Ejido Ana, 27018 Torreón, Coah., México'
  },
  mapUrl: 'https://www.google.com/maps/place/Calle+Carr.+a+San+Pedro+773,+Ejido+Ana,+27018+Torre%C3%B3n,+Coah.,+M%C3%A9xico',
  schedule: {
    weekdays: 'Lun–Vie 8:00–18:00',
    saturday: 'Sáb 9:00–14:00',
    sunday: 'Dom cerrado'
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#'
  }
};

export const productCategories = [
  {
    id: 'empaque-embalajes',
    name: 'Madera para empaque y embalajes',
    slug: 'empaque-embalajes',
    shortDescription: 'Cortes consistentes, humedad controlada, ideal para embalaje industrial.',
    description: 'Madera de pino para cajas, embalaje industrial y protección de mercancía.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    features: [
      'Cortes consistentes y precisos',
      'Humedad controlada para mayor durabilidad',
      'Ideal para embalaje industrial',
      'Disponible en múltiples dimensiones'
    ],
    classes: ['2&M', '#3', '#4', '#5'],
    applications: ['Cajas de madera', 'Embalaje industrial', 'Protección de mercancía', 'Contenedores'],
    dimensions: {
      thickness: ['7/8"', '6/4"', '1.5"'],
      width: ['4"', '6"', '8"', '10"', '12"'],
      length: ['2-20 pies']
    },
    conditions: ['Verde', 'Seca al aire', 'Estufada', 'Enfajillada']
  },
  {
    id: 'tarima',
    name: 'Madera para tarima',
    slug: 'tarima',
    shortDescription: 'Cumple NIMF-15, dimensiones estándar, alta disponibilidad.',
    description: 'Madera especializada para pallets y tarimas, cumple con normativas de exportación.',
    image: 'https://images.unsplash.com/photo-1565174066-4f83c8c4854b?w=800',
    features: [
      'Cumple normativa NIMF-15/ISPM-15',
      'Dimensiones estándar para tarimas',
      'Alta disponibilidad en stock',
      'Preparada para exportación'
    ],
    classes: ['#3', '#4', '#5'],
    applications: ['Tarimas para exportación', 'Pallets industriales', 'Bases para carga', 'Embalaje pesado'],
    dimensions: {
      thickness: ['3/4"', '7/8"', '1"'],
      width: ['3.5"', '5.5"', '7.25"'],
      length: ['40-48 pulgadas (estándar)']
    },
    conditions: ['Verde', 'Seca al aire', 'Tratamiento térmico (HT)']
  },
  {
    id: 'construccion',
    name: 'Madera para construcción',
    slug: 'construccion',
    shortDescription: 'Vigas y tablas estructurales en grados adecuados.',
    description: 'Madera estructural para encofrados, bastidores, techumbres y obra civil.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    features: [
      'Grados estructurales certificados',
      'Resistencia para aplicaciones de construcción',
      'Vigas y tablas disponibles',
      'Cumple especificaciones técnicas'
    ],
    classes: ['2&M', '#3'],
    applications: ['Encofrados', 'Bastidores', 'Techumbres ligeras', 'Obra civil ligera', 'Estructuras temporales'],
    dimensions: {
      thickness: ['1.5"', '2"', '3"'],
      width: ['4"', '6"', '8"', '10"', '12"'],
      length: ['8-20 pies']
    },
    conditions: ['Verde', 'Seca al aire', 'Estufada']
  },
  {
    id: 'muebleria',
    name: 'Madera para mueblería',
    slug: 'muebleria',
    shortDescription: 'Selección con mejor apariencia, control de nudos, acabado fino.',
    description: 'Madera seleccionada para muebles, carpintería fina e interiores.',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800',
    features: [
      'Mejor apariencia y vetas',
      'Control estricto de nudos',
      'Acabado fino y suave',
      'Ideal para trabajo detallado'
    ],
    classes: ['2&M', '#3'],
    applications: ['Muebles', 'Carpintería fina', 'Interiores', 'Decoración', 'Ebanistería'],
    dimensions: {
      thickness: ['3/4"', '1"', '1.5"', '2"'],
      width: ['4"', '6"', '8"', '10"', '12"'],
      length: ['6-16 pies']
    },
    conditions: ['Seca al aire', 'Estufada (recomendado)']
  }
];

export const woodGrades = [
  {
    grade: '2&M',
    name: '2 y mejor (2&M)',
    quality: 'Premium',
    description: 'La más alta calidad. Nudos pequeños y limitados, excelente apariencia.',
    characteristics: [
      'Nudos pequeños (máximo 1/2")',
      'Mínimas imperfecciones',
      'Excelente para acabados visibles',
      'Vetas uniformes y atractivas'
    ],
    idealFor: ['Mueblería fina', 'Acabados interiores', 'Proyectos visibles', 'Carpintería de alta calidad'],
    price: 'Premium'
  },
  {
    grade: '#3',
    name: 'Grado #3',
    quality: 'Estándar Alto',
    description: 'Buena calidad con nudos controlados. Balance entre apariencia y costo.',
    characteristics: [
      'Nudos medianos permitidos',
      'Buena resistencia estructural',
      'Apariencia aceptable',
      'Versátil para múltiples usos'
    ],
    idealFor: ['Construcción ligera', 'Muebles estándar', 'Tarimas de calidad', 'Embalaje premium'],
    price: 'Medio-alto'
  },
  {
    grade: '#4',
    name: 'Grado #4',
    quality: 'Estándar',
    description: 'Calidad económica. Nudos más grandes, ideal para aplicaciones estructurales no visibles.',
    characteristics: [
      'Nudos grandes permitidos',
      'Algunas imperfecciones visuales',
      'Buena resistencia básica',
      'Económico y funcional'
    ],
    idealFor: ['Tarimas industriales', 'Embalaje estándar', 'Encofrados', 'Usos no visibles'],
    price: 'Económico'
  },
  {
    grade: '#5',
    name: 'Grado #5',
    quality: 'Económico',
    description: 'Calidad de utilidad. Para aplicaciones donde la apariencia no es importante.',
    characteristics: [
      'Nudos grandes y múltiples',
      'Imperfecciones visuales',
      'Funcionalidad básica',
      'Máxima economía'
    ],
    idealFor: ['Tarimas de un solo uso', 'Embalaje económico', 'Bases y soportes', 'Aplicaciones temporales'],
    price: 'Muy económico'
  }
];

export const services = [
  {
    id: 1,
    title: 'Aserrío y cortes a medida',
    description: 'Cortamos madera de pino según tus especificaciones exactas con equipos modernos y precisos.',
    icon: 'scissors'
  },
  {
    id: 2,
    title: 'Clasificación por grado',
    description: 'Clasificamos cada pieza según estándares de la industria (2&M, #3, #4, #5) para garantizar calidad consistente.',
    icon: 'clipboard-check'
  },
  {
    id: 3,
    title: 'Secado al aire y estufa',
    description: 'Ofrecemos madera verde, secada al aire o en estufa según las necesidades de tu proyecto.',
    icon: 'wind'
  },
  {
    id: 4,
    title: 'Preparación para tarimas',
    description: 'Cortes especializados y tratamiento térmico NIMF-15 para tarimas de exportación.',
    icon: 'package'
  },
  {
    id: 5,
    title: 'Carga y despacho',
    description: 'Logística confiable en Torreón, Gómez Palacio, Lerdo, San Pedro y alrededores en La Laguna.',
    icon: 'truck'
  },
  {
    id: 6,
    title: 'Asesoría técnica',
    description: 'Te ayudamos a seleccionar el grado, dimensiones y estado ideal para tu aplicación específica.',
    icon: 'user-check'
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: 'como-calcular-pies-tabla',
    title: 'Cómo calcular pies-tabla de madera',
    excerpt: 'Aprende a calcular con precisión la cantidad de madera que necesitas para tu proyecto usando la fórmula de pies-tabla.',
    date: '2025-01-15',
    category: 'Guías',
    readTime: '5 min',
    content: `<h2>¿Qué son los pies-tabla?</h2>
    <p>El pie-tabla (board foot) es la unidad de medida estándar para madera dimensionada en México y Norteamérica. Un pie-tabla equivale a una pieza de 1 pulgada de grosor × 12 pulgadas de ancho × 12 pulgadas de largo (o 1 pie).</p>
    
    <h2>Fórmula básica</h2>
    <p>Para calcular pies-tabla de una pieza de madera:</p>
    <p><strong>(Grosor en pulgadas × Ancho en pulgadas × Largo en pies) ÷ 12 = Pies-tabla</strong></p>
    
    <h3>Ejemplo práctico</h3>
    <p>Si tienes una tabla de 2" de grosor × 6" de ancho × 10 pies de largo:</p>
    <p>(2 × 6 × 10) ÷ 12 = 120 ÷ 12 = <strong>10 pies-tabla</strong></p>
    
    <h2>Calculando para múltiples piezas</h2>
    <p>Si necesitas 50 piezas de la medida anterior:</p>
    <p>10 pies-tabla × 50 piezas = <strong>500 pies-tabla totales</strong></p>
    
    <h2>Usa nuestra calculadora</h2>
    <p>Para mayor facilidad, usa nuestra <a href="/cotizar">calculadora de pies-tabla</a> en la página de cotización.</p>`
  },
  {
    id: 2,
    slug: 'elegir-clase-adecuada',
    title: 'Cómo elegir la clase de madera adecuada',
    excerpt: 'Guía completa para seleccionar el grado correcto de madera de pino según tu aplicación: 2&M, #3, #4 o #5.',
    date: '2025-01-10',
    category: 'Guías',
    readTime: '7 min',
    content: `<h2>Entendiendo las clases de madera</h2>
    <p>La clasificación de madera se basa en la presencia y tamaño de nudos, vetas, y otras características que afectan tanto la apariencia como la resistencia.</p>
    
    <h2>Grado 2&M (2 y Mejor)</h2>
    <p><strong>Cuándo usar:</strong> Muebles finos, acabados visibles, carpintería de alta calidad</p>
    <p><strong>Características:</strong> Nudos mínimos y pequeños, excelente apariencia, vetas uniformes</p>
    
    <h2>Grado #3</h2>
    <p><strong>Cuándo usar:</strong> Muebles estándar, construcción ligera, tarimas de calidad</p>
    <p><strong>Características:</strong> Balance entre apariencia y costo, nudos medianos aceptables</p>
    
    <h2>Grado #4</h2>
    <p><strong>Cuándo usar:</strong> Tarimas industriales, embalaje, encofrados</p>
    <p><strong>Características:</strong> Económico, nudos grandes permitidos, funcional</p>
    
    <h2>Grado #5</h2>
    <p><strong>Cuándo usar:</strong> Tarimas de un solo uso, aplicaciones temporales</p>
    <p><strong>Características:</strong> Máxima economía, apariencia no prioritaria</p>`
  },
  {
    id: 3,
    slug: 'secado-vs-verde',
    title: 'Madera seca vs verde: qué conviene y cuándo',
    excerpt: 'Diferencias entre madera verde, secada al aire y estufada. Aprende cuál elegir según tu proyecto.',
    date: '2025-01-05',
    category: 'Técnico',
    readTime: '6 min',
    content: `<h2>Madera Verde</h2>
    <p><strong>Contenido de humedad:</strong> 40-100%</p>
    <p><strong>Ventajas:</strong> Más económica, disponibilidad inmediata, más fácil de trabajar inicialmente</p>
    <p><strong>Desventajas:</strong> Se encoge al secar, puede agrietarse o deformarse, no recomendada para muebles</p>
    <p><strong>Ideal para:</strong> Tarimas de un solo uso, encofrados temporales, aplicaciones donde el movimiento no es crítico</p>
    
    <h2>Madera Secada al Aire</h2>
    <p><strong>Contenido de humedad:</strong> 12-20%</p>
    <p><strong>Ventajas:</strong> Más estable que verde, precio moderado, menor riesgo de deformación</p>
    <p><strong>Tiempo de secado:</strong> Varios meses dependiendo del grosor</p>
    <p><strong>Ideal para:</strong> Construcción, tarimas de exportación, embalaje de mediano plazo</p>
    
    <h2>Madera Estufada</h2>
    <p><strong>Contenido de humedad:</strong> 6-12%</p>
    <p><strong>Ventajas:</strong> Máxima estabilidad, libre de plagas, lista para acabados finos</p>
    <p><strong>Desventajas:</strong> Mayor costo, requiere almacenamiento controlado</p>
    <p><strong>Ideal para:</strong> Mueblería, carpintería fina, interiores, proyectos de alta calidad</p>`
  },
  {
    id: 4,
    slug: 'pino-tarimas-buenas-practicas',
    title: 'Pino para tarimas y buenas prácticas de almacenamiento',
    excerpt: 'Recomendaciones para maximizar la vida útil de tus tarimas de pino y mejores prácticas de almacenamiento.',
    date: '2025-01-01',
    category: 'Técnico',
    readTime: '8 min',
    content: `<h2>¿Por qué pino para tarimas?</h2>
    <p>El pino es ideal para tarimas por su relación resistencia-peso, disponibilidad y costo. Correctamente tratado, ofrece excelente durabilidad.</p>
    
    <h2>Normativa NIMF-15</h2>
    <p>Para tarimas de exportación, la madera debe cumplir con NIMF-15/ISPM-15:</p>
    <ul>
      <li>Tratamiento térmico (HT) a 56°C por 30 minutos</li>
      <li>Marca oficial visible</li>
      <li>Elimina riesgo de plagas</li>
    </ul>
    
    <h2>Buenas prácticas de almacenamiento</h2>
    <h3>1. Ubicación</h3>
    <p>Almacena en área cubierta, ventilada y elevada del suelo</p>
    
    <h3>2. Apilado correcto</h3>
    <ul>
      <li>Usa separadores entre capas (listones)</li>
      <li>Mantén espacios de 2-3 cm para circulación de aire</li>
      <li>Apila máximo 2 metros de altura</li>
    </ul>
    
    <h3>3. Protección</h3>
    <ul>
      <li>Evita contacto directo con humedad</li>
      <li>Protege de lluvia directa</li>
      <li>Mantén alejado de fuentes de calor</li>
    </ul>
    
    <h3>4. Rotación de inventario</h3>
    <p>Sistema FIFO (First In, First Out) para usar primero las tarimas más antiguas</p>`
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Ing. Roberto Martínez',
    position: 'Gerente de Operaciones',
    company: 'Empaques Industriales del Norte',
    content: 'Excelente calidad y tiempos de entrega confiables. Llevamos 3 años trabajando con El Ocote y siempre cumplen.',
    rating: 5
  },
  {
    id: 2,
    name: 'María Elena Sánchez',
    position: 'Directora de Compras',
    company: 'Tarimas y Embalajes La Laguna',
    content: 'La madera cumple perfectamente con NIMF-15. Nuestros clientes de exportación están muy satisfechos.',
    rating: 5
  },
  {
    id: 3,
    name: 'Carlos Mendoza',
    position: 'Propietario',
    company: 'Mueblería Mendoza',
    content: 'Para muebles finos, su grado 2&M es insuperable. La clasificación es precisa y consistente.',
    rating: 5
  }
];

export const faqs = [
  {
    id: 1,
    question: '¿Cuál es el pedido mínimo?',
    answer: 'El pedido mínimo varía según el producto y disponibilidad. Para tarimas y embalaje típicamente es de 500 pies-tabla. Contáctanos para pedidos especiales.'
  },
  {
    id: 2,
    question: '¿Cuánto tiempo tardan las entregas?',
    answer: 'En La Laguna (Torreón, Gómez Palacio, Lerdo) entregamos en 3-5 días hábiles. Para pedidos especiales o fuera de la región, el plazo puede variar según disponibilidad y especificaciones.'
  },
  {
    id: 3,
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencia bancaria, depósito en efectivo y cheques de empresa. Para clientes frecuentes ofrecemos crédito con referencias comerciales.'
  },
  {
    id: 4,
    question: '¿Emiten factura?',
    answer: 'Sí, emitimos factura electrónica (CFDI) para todas las ventas. Solo necesitamos tus datos fiscales al momento del pedido.'
  },
  {
    id: 5,
    question: '¿La madera está certificada?',
    answer: 'Nuestra madera proviene de fuentes legales y sustentables. Ofrecemos tratamiento térmico certificado NIMF-15 para exportación.'
  },
  {
    id: 6,
    question: '¿Hacen cortes especiales?',
    answer: 'Sí, ofrecemos aserrío a medida según tus especificaciones. Los cortes especiales pueden tener un tiempo de entrega mayor.'
  },
  {
    id: 7,
    question: '¿Entregan fuera de La Laguna?',
    answer: 'Sí, realizamos entregas en todo el norte de México. El costo y tiempo de entrega dependen de la ubicación y volumen del pedido.'
  },
  {
    id: 8,
    question: '¿Cómo sé qué grado necesito?',
    answer: 'Depende de tu aplicación. Para muebles finos: 2&M o #3. Para construcción: #3. Para tarimas: #3, #4 o #5. Ofrecemos asesoría gratuita para ayudarte a elegir.'
  }
];
