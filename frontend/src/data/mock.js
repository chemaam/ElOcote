// Mock data para Maderas El Ocote

export const businessInfo = {
  name: 'Maderas "El Ocote"',
  phone: '+52 871 393 7770',
  whatsapp: 'https://wa.me/528713937770',
  email: 'ventaso@maderaselocote.com',
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

// Nueva estructura de productos con TABS
export const productTabs = [
  {
    id: 'construccion',
    name: 'Construcción',
    intro: 'Soluciones en madera para obra y procesos constructivos.',
    products: [
      {
        title: 'Puntales de madera',
        description: 'Elementos de soporte temporal utilizados en obra para apuntalamientos estructurales, nivelación y soporte durante el colado de losas y estructuras.',
        uses: ['Apuntalamiento', 'Soporte de cimbras', 'Refuerzo temporal en obra']
      },
      {
        title: 'Tablas',
        description: 'Madera aserrada para múltiples aplicaciones de construcción: ideal para cimbras, cerramientos temporales y trabajos generales de obra.',
        uses: ['Cimbra tradicional', 'Cerramientos', 'Obra negra']
      },
      {
        title: 'Vigas',
        description: 'Piezas de mayor sección diseñadas para soportar cargas estructurales en procesos constructivos y de montaje.',
        uses: ['Soporte estructural', 'Marcos y refuerzos', 'Apoyos de carga']
      },
      {
        title: 'Tablones',
        description: 'Madera robusta y resistente para superficies de trabajo y aplicaciones que requieren mayor durabilidad.',
        uses: ['Andamios', 'Plataformas', 'Pisos provisionales de obra']
      },
      {
        title: 'Triplay',
        description: 'Tablero de capas de madera prensadas para construcción, cimbra y acabados funcionales.',
        uses: ['Cimbra', 'Cubiertas temporales', 'Protección de superficies'],
        specs: 'Medidas: 18 mm y 19 mm'
      }
    ]
  },
  {
    id: 'carpinteria',
    name: 'Carpintería',
    intro: 'Materiales y servicios para trabajos de precisión.',
    products: [
      {
        title: 'Madera selecta estufada',
        description: 'Madera seca en estufa, seleccionada para estabilidad, menor humedad y mejor desempeño en carpintería.',
        uses: ['Muebles', 'Puertas', 'Trabajos finos'],
        availability: 'Sujeto a disponibilidad. Consultar existencias.'
      },
      {
        title: 'Servicio de cepillado',
        description: 'Maquinado para superficies lisas y medidas uniformes.',
        uses: []
      },
      {
        title: 'Cortes longitudinales y transversales',
        description: 'Dimensionado a la medida del proyecto.',
        uses: []
      },
      {
        title: 'MDF',
        description: 'Tablero de fibra de densidad media para mobiliario, interiores y aplicaciones decorativas.',
        uses: [],
        specs: 'Medidas: 2.5 mm, 3 mm, 6 mm, 9 mm y 12 mm'
      }
    ]
  },
  {
    id: 'industria',
    name: 'Industria',
    intro: 'Madera para aplicaciones industriales y de alto desgaste.',
    products: [
      {
        title: 'Tablas de pino clase selecta',
        description: 'Para usos donde se requiere mejor acabado y resistencia.',
        uses: []
      },
      {
        title: 'Tablas de pino de segunda',
        description: 'Opción funcional y económica donde la estética no es prioritaria.',
        uses: []
      },
      {
        title: 'Pisos de plataformas y remolques',
        description: 'Madera para pisos de plataformas de carga, cajas secas y remolques.',
        uses: []
      },
      {
        title: 'Fabricación de cajas para camionetas de estacas',
        description: 'Para construcción y rehabilitación de cajas de carga.',
        uses: []
      }
    ]
  },
  {
    id: 'tarimas',
    name: 'Tarimas y Huacales',
    intro: 'Soluciones de empaque y transporte.',
    legalNotice: 'No contamos con sello HT para exportación.',
    products: [
      {
        title: 'Madera para tarimas',
        description: 'Material para fabricación de tarimas según medidas/necesidades.',
        uses: []
      },
      {
        title: 'Barrote',
        description: 'Elemento estructural para soporte en tarimas, huacales y embalajes.',
        uses: []
      },
      {
        title: 'Tableta',
        description: 'Madera delgada usada como cubierta superior en tarimas y embalajes.',
        uses: []
      },
      {
        title: 'Tarimas armadas',
        description: 'Tarimas listas para logística y almacenamiento.',
        uses: []
      }
    ]
  }
];

export const services = [
  {
    id: 1,
    title: 'Cortes a medida',
    description: 'Dimensionado preciso de madera según las especificaciones de tu proyecto.',
    icon: 'scissors'
  },
  {
    id: 2,
    title: 'Cepillado',
    description: 'Maquinado para superficies lisas y medidas uniformes, ideal para trabajos de carpintería.',
    icon: 'package'
  },
  {
    id: 3,
    title: 'Cortes longitudinales y transversales',
    description: 'Servicio de corte en diferentes direcciones para adaptarnos a tus necesidades.',
    icon: 'scissors'
  },
  {
    id: 4,
    title: 'Surtido y preparación de pedido',
    description: 'Organizamos y preparamos tu pedido de manera eficiente para facilitar tu operación.',
    icon: 'clipboard-check'
  },
  {
    id: 5,
    title: 'Entrega bajo coordinación',
    description: 'Coordinamos la entrega de tu pedido en Torreón, Gómez Palacio, Lerdo y zonas cercanas.',
    icon: 'truck'
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
    answer: 'El pedido mínimo varía según el producto y disponibilidad. Contáctanos por WhatsApp para conocer los detalles de tu pedido específico.'
  },
  {
    id: 2,
    question: '¿Cuánto tiempo tardan las entregas?',
    answer: 'Los tiempos de entrega dependen de la disponibilidad y el volumen del pedido. Generalmente entregamos en 3-5 días hábiles en la zona de La Laguna. Te confirmamos el plazo al momento de cotizar.'
  },
  {
    id: 3,
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencia bancaria, depósito en efectivo y cheques. Para clientes frecuentes ofrecemos facilidades de pago.'
  },
  {
    id: 4,
    question: '¿Emiten factura?',
    answer: 'Sí, emitimos factura electrónica (CFDI) para todas las ventas. Solo necesitamos tus datos fiscales al momento del pedido.'
  },
  {
    id: 5,
    question: '¿Hacen cortes especiales?',
    answer: 'Sí, ofrecemos servicio de cortes a medida, cepillado y cortes longitudinales y transversales según tus especificaciones.'
  },
  {
    id: 6,
    question: '¿Entregan fuera de Torreón?',
    answer: 'Realizamos entregas coordinadas en Torreón, Gómez Palacio, Lerdo y zonas cercanas. Para otras ubicaciones, consúltanos.'
  },
  {
    id: 7,
    question: '¿Tienen madera con tratamiento térmico (HT)?',
    answer: 'No contamos con sello HT para exportación. Nuestra madera es ideal para uso nacional en construcción, carpintería e industria.'
  }
];
