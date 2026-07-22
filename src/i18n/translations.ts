export type Language = 'es' | 'en'

const es = {
  nav: {
    links: [
      { href: '#sobre-mi', label: 'Sobre Mí' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#tecnologias', label: 'Tecnologías' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#contacto', label: 'Contacto' },
    ],
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLang: 'Switch to English',
  },
  hero: {
    titleA: 'Desarrollador Web Full Stack',
    titleB: 'Especializado en Performance',
    text: 'Construyo soluciones web escalables con foco en optimización, arquitectura limpia y una experiencia de usuario fluida en cada interacción.',
    cta: 'Ver Proyectos',
  },
  about: {
    title: 'Sobre Mí',
    text: 'Apasionado por resolver problemas técnicos complejos y crear aplicaciones web de alta calidad. Me especializo en transformar requisitos de negocio en productos digitales eficientes, mantenibles y centrados en el usuario, con un enfoque constante en performance y buenas prácticas de ingeniería.',
  },
  experience: {
    title: 'Experiencia',
    role: 'Fundador de NexoSync (Emprendimiento Web)',
    summary:
      'Liderazgo técnico y producto en un emprendimiento enfocado en soluciones web modernas, desde la arquitectura hasta el despliegue en producción.',
    bullets: [
      'Diseño e implementación de aplicaciones web con React, TypeScript y arquitectura orientada a performance.',
      'Gestión de infraestructura en Vercel: despliegues continuos, dominios y optimización de entornos de producción.',
      'Mejora de visibilidad online mediante SEO técnico, métricas Core Web Vitals y buenas prácticas de accesibilidad.',
      'Caso de éxito en digitalización: Diseño y desarrollo integral de la plataforma web para FobiBike, automatizando su gestión de catálogo y mejorando la experiencia de compra de sus clientes.',
    ],
  },
  tech: {
    title: 'Tecnologías',
    columns: ['Frontend', 'Backend y Lenguajes', 'Bases de Datos', 'DevOps y Herramientas'],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Tres productos reales: del problema a la solución y su impacto.',
    problem: 'Problema',
    solution: 'Solución',
    impact: 'Impacto',
    viewProject: 'Ver Proyecto',
    viewCode: 'Ver Código',
    zoom: 'Ampliar',
    viewImage: 'Ver imagen de',
    previewOf: 'Vista previa de',
    imageOf: 'Imagen de',
    closeImage: 'Cerrar imagen',
    prevImage: 'Imagen anterior',
    nextImage: 'Imagen siguiente',
    gallery: 'Galería',
    items: [
      {
        title: 'MobiHouse',
        problem:
          'Buscar y comparar propiedades era lento y confuso: sin filtros claros, sin mapa útil y con poca transparencia sobre el estado de cada inmueble.',
        solution:
          'Plataforma inmobiliaria con landing de alto impacto, catálogo filtrable, favoritos y mapa interactivo (Leaflet) con pins y listado sincronizado.',
        impact:
          'Exploración de propiedades en minutos: búsqueda por tipo, ubicación y habitaciones, más visualización geográfica para decidir más rápido.',
      },
      {
        title: 'Fobi Bike',
        problem:
          'El negocio manejaba inventario y ventas de forma dispersa, sin métricas claras ni una forma rápida de consultar stock o registrar operaciones.',
        solution:
          'Dashboard de gestión con inventario (1400+ productos), control de ingresos, descuento automático de stock y asistente IA (Groq) por chat.',
        impact:
          'Operación digitalizada de punta a punta: stock y ventas en un solo lugar, KPIs diarios/mensuales y consultas en lenguaje natural.',
      },
      {
        title: 'Matchear',
        problem:
          'Reservar canchas y organizar torneos dependía de mensajes y planillas: horarios poco claros, poca conversión y fricción para confirmar turnos.',
        solution:
          'Plataforma de reservas con selección de día/horario, resumen de pago, seña y flujo de torneos con pasos guiados para armar el evento.',
        impact:
          'Reservas en minutos con precios visibles y disponibilidad clara; los torneos pasan de idea a fixture sin procesos manuales.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    note: '¡Abierto a nuevas oportunidades! Conéctate conmigo a través de estas plataformas.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
}

export type Translations = typeof es

const en: Translations = {
  nav: {
    links: [
      { href: '#sobre-mi', label: 'About Me' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#tecnologias', label: 'Technologies' },
      { href: '#proyectos', label: 'Projects' },
      { href: '#contacto', label: 'Contact' },
    ],
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLang: 'Cambiar a español',
  },
  hero: {
    titleA: 'Full Stack Web Developer',
    titleB: 'Performance Specialist',
    text: 'I build scalable web solutions focused on optimization, clean architecture and a smooth user experience in every interaction.',
    cta: 'View Projects',
  },
  about: {
    title: 'About Me',
    text: 'Passionate about solving complex technical problems and building high-quality web applications. I specialize in turning business requirements into efficient, maintainable, user-centered digital products, with a constant focus on performance and engineering best practices.',
  },
  experience: {
    title: 'Experience',
    role: 'Founder of NexoSync (Web Startup)',
    summary:
      'Technical and product leadership at a startup focused on modern web solutions, from architecture to production deployment.',
    bullets: [
      'Design and implementation of web applications with React, TypeScript and performance-oriented architecture.',
      'Infrastructure management on Vercel: continuous deployments, domains and production environment optimization.',
      'Improved online visibility through technical SEO, Core Web Vitals metrics and accessibility best practices.',
      'Digitalization success story: end-to-end design and development of the FobiBike web platform, automating catalog management and improving the customer shopping experience.',
    ],
  },
  tech: {
    title: 'Technologies',
    columns: ['Frontend', 'Backend & Languages', 'Databases', 'DevOps & Tools'],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Three real products: from the problem to the solution and its impact.',
    problem: 'Problem',
    solution: 'Solution',
    impact: 'Impact',
    viewProject: 'View Project',
    viewCode: 'View Code',
    zoom: 'Enlarge',
    viewImage: 'View image of',
    previewOf: 'Preview of',
    imageOf: 'Image of',
    closeImage: 'Close image',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    gallery: 'Gallery',
    items: [
      {
        title: 'MobiHouse',
        problem:
          'Finding and comparing properties was slow and confusing: weak filters, no useful map and little clarity on each listing’s status.',
        solution:
          'Real-estate platform with a high-impact landing, filterable catalog, favorites and an interactive Leaflet map with synced pins and sidebar.',
        impact:
          'Property discovery in minutes: search by type, location and rooms, plus geographic context to decide faster.',
      },
      {
        title: 'Fobi Bike',
        problem:
          'The shop tracked inventory and sales in scattered tools, without clear metrics or a fast way to check stock or register operations.',
        solution:
          'Management dashboard with inventory (1400+ products), income control, automatic stock deduction and a Groq-powered AI chat assistant.',
        impact:
          'End-to-end digital operations: stock and sales in one place, daily/monthly KPIs and natural-language queries.',
      },
      {
        title: 'Matchear',
        problem:
          'Booking courts and organizing tournaments relied on chats and spreadsheets: unclear slots, low conversion and friction to confirm turns.',
        solution:
          'Booking platform with day/time selection, payment summary, deposit flow and a guided tournament setup with clear steps.',
        impact:
          'Reservations in minutes with visible prices and availability; tournaments go from idea to fixture without manual processes.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    note: 'Open to new opportunities! Connect with me through these platforms.',
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export const translations: Record<Language, Translations> = { es, en }
