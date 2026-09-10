export type Language = 'es' | 'en'

const es = {
  nav: {
    links: [
      { href: '/#sobre-mi', label: 'Sobre Mí' },
      { href: '/#experiencia', label: 'Experiencia' },
      { href: '/#proceso', label: 'Cómo trabajo' },
      { href: '/#educacion', label: 'Educación' },
      { href: '/#proyectos', label: 'Proyectos' },
      { href: '/#contacto', label: 'Contacto' },
    ],
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLang: 'Switch to English',
    downloadCv: 'Descargar CV',
    available: 'Disponible para oportunidades',
  },
  hero: {
    titleA: 'Desarrollador Web (React / PHP)',
    titleB: 'Sistemas en producción para comercios',
    text: 'Diseño y entrego sitios y paneles que se usan de verdad: inventario, reservas y e-commerce. Busco un rol junior / SSR con impacto en producto.',
    seeking: 'Busco rol junior · Córdoba / remoto AR',
    cta: 'Ver caso FobiBike',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    ctaContact: 'Contactar',
  },
  about: {
    title: 'Sobre Mí',
    text: 'Soy desarrollador web de Córdoba, Argentina. Técnico en Desarrollo de Software (ISVdR) y estudiante de Licenciatura en Sistemas de Información (UBP). Me enfoco en convertir un requerimiento de negocio en una interfaz simple de operar en el día a día. Stack principal: React, TypeScript, PHP, MySQL y Firebase. Español nativo. Inglés A2 (Cambridge KET, 2020) — estudiando hacia B1 para roles bilingües.',
  },
  featured: {
    id: 'caso-fobibike',
    eyebrow: 'Caso destacado · Cliente real',
    title: 'FobiBike — inventario y ventas en mostrador',
    problemLabel: 'Problema',
    problem:
      'La bicicletería consultaba stock y ventas de forma manual y dispersa: lento en mostrador y sin métricas claras.',
    solutionLabel: 'Solución',
    solution:
      'Sistema a medida (PHP, MySQL, JavaScript) con CRUD, filtros cruzados, panel de ingresos y asistente IA (Groq) para consultar stock e ingresos en lenguaje natural.',
    impactLabel: 'En producción',
    kpis: [
      { value: '1.400+', label: 'Productos gestionados' },
      { value: 'Stock auto', label: 'Descuento al confirmar venta' },
      { value: 'IA', label: 'Consultas en lenguaje natural' },
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Groq'],
    ctaDemo: 'Abrir demo',
    ctaCode: 'Ver código',
    ctaCase: 'Case study completo',
    note: 'En uso para consultas de stock en mostrador.',
  },
  process: {
    title: 'Cómo trabajo',
    subtitle: 'Proceso simple para reducir riesgo en entregas freelance y roles junior.',
    steps: [
      {
        title: 'Discovery',
        text: 'Escucho el problema del negocio (mostrador, reservas, ventas) y qué tiene que ser simple de operar.',
      },
      {
        title: 'Alcance',
        text: 'Defino MVP, pantallas y datos. Evito scope creep: primero lo que desbloquea el día a día.',
      },
      {
        title: 'Entrega',
        text: 'UI usable + validaciones. Itero con el cliente sobre flujos reales, no mockups eternos.',
      },
      {
        title: 'Deploy',
        text: 'Publico en Vercel/Netlify/GitHub Pages, dominio y SEO básico. Dejo el sistema listo para usarse.',
      },
    ],
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        role: 'Desarrollador Web — NexoSync (Freelance)',
        period: 'Ago 2025 – Actualidad',
        location: 'Córdoba, Argentina',
        summary:
          'Desarrollo sitios y sistemas a medida para comercios locales con React, TypeScript, PHP y MySQL.',
        bullets: [
          'Cliente real FobiBike: inventario con CRUD y búsqueda por categoría, tipo, proveedor y disponibilidad para mostrador.',
          'Publico y mantengo sitios en producción (Vercel/Netlify): deploys, dominio y SEO básico.',
          'Tomo requerimientos, defino alcance y entrego interfaces simples de operar en el día a día.',
        ],
      },
    ],
    milestonesTitle: 'Línea de tiempo',
    milestones: [
      { year: '2023–2025', label: 'Técnico en Desarrollo de Software — ISVdR' },
      { year: 'Ago 2025', label: 'Inicio freelance en NexoSync' },
      { year: '2025', label: 'Curso de React — CoderHouse' },
      { year: '2026', label: 'Licenciatura en Sistemas (UBP) + prep. AWS' },
    ],
  },
  education: {
    title: 'Educación y Formación',
    studiesTitle: 'Formación académica',
    certsTitle: 'Cursos y certificaciones',
    studies: [
      {
        title: 'Licenciatura en Sistemas de Información',
        institution: 'Universidad Blas Pascal (UBP)',
        status: 'En curso',
        detail: 'Córdoba, Argentina · 2026 – En curso. Sistemas, ingeniería de software e infraestructura aplicada.',
      },
      {
        title: 'Técnico en Desarrollo de Software',
        institution: 'Instituto Superior Villa del Rosario (ISVdR)',
        status: 'Completada',
        detail: 'Villa del Rosario, Córdoba · 2023 – 2025. Desarrollo de software, bases de datos y programación.',
      },
    ],
    certs: [
      {
        title: 'Curso de React',
        issuer: 'CoderHouse · 2025',
        detail: 'Fundamentos y práctica de React para interfaces modernas y componentes reutilizables.',
      },
      {
        title: 'Preparación AWS Cloud Practitioner',
        issuer: 'Udemy · 2026',
        detail: 'Curso de preparación hacia la certificación AWS Cloud Practitioner (cloud fundamentals).',
      },
      {
        title: 'Cambridge English KET',
        issuer: 'Cambridge · 2020',
        detail: 'Inglés A2 certificado. En camino a B1 para roles bilingües.',
      },
    ],
  },
  tech: {
    title: 'Tecnologías',
    columns: ['Frontend', 'Backend', 'Datos', 'Herramientas'],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Productos reales y personales: del problema a la solución y su impacto.',
    problem: 'Problema',
    solution: 'Solución',
    impact: 'Impacto',
    estimated: 'estimado',
    production: 'en producción',
    featured: 'Destacado',
    filterAll: 'Todos',
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
    emptyFilter: 'No hay proyectos con ese filtro.',
    items: [
      {
        title: 'Fobi Bike',
        problem:
          'El negocio manejaba inventario y ventas de forma dispersa, sin métricas claras ni una forma rápida de consultar stock en mostrador.',
        solution:
          'Sistema de inventario y ventas (cliente real) con CRUD, filtros cruzados, panel de métricas y asistente en lenguaje natural (Groq).',
        impact:
          'Gestión unificada de 1.400+ productos, stock descontado al confirmar venta y consultas de inventario/ventas en segundos.',
      },
      {
        title: 'Matchear',
        problem:
          'Reservar canchas dependía de WhatsApp o llamadas: horarios poco claros y fricción para confirmar turnos.',
        solution:
          'App web (React + Firebase) para ver disponibilidad, reservar turnos y administrar la cancha en un flujo único usuario/admin.',
        impact:
          'Reserva completa en menos de 2 minutos (día + horario + seña), reemplazando idas y vueltas por chat (estimado).',
      },
      {
        title: 'FerroHogar',
        problem:
          'Una ferretería necesitaba vender online y administrar catálogo, pedidos y stock sin tienda ni backoffice claros.',
        solution:
          'E-commerce con home, catálogo filtrable, carrito y panel admin con ventas, alertas de stock y pedidos.',
        impact:
          'Catálogo de 40+ productos con filtros avanzados y métricas diarias/mensuales en un solo panel admin.',
      },
      {
        title: 'MobiHouse',
        problem:
          'Buscar y comparar propiedades era lento: sin filtros claros ni mapa útil.',
        solution:
          'Plataforma inmobiliaria con catálogo filtrable, favoritos y mapa interactivo (Leaflet) sincronizado.',
        impact:
          'Exploración filtros + mapa en una vista: ~60% menos tiempo para hallar una propiedad relevante vs. listados planos (estimado).',
      },
      {
        title: 'Ironcore Gym',
        problem:
          'El gimnasio no tenía web moderna ni panel para socios, pagos y asistencias.',
        solution:
          'Landing dark con planes (Básico, Full, Premium) y dashboard admin con KPIs, gráficos y ocupación por turnos.',
        impact:
          '3 planes comerciales listos para conversión y KPIs de socios, ingresos y asistencias en una sola pantalla.',
      },
      {
        title: 'Fénix',
        problem:
          'El boliche no tenía una web clara para line-up, novedades ni compra de tickets.',
        solution:
          'Landing nightlife de alto impacto con hero inmersivo, secciones de experiencia/line-up y CTAs a tickets.',
        impact:
          'Propuesta entendible en menos de 5 segundos y ruta directa a tickets/line-up (estimado de lectura).',
      },
    ],
  },
  caseStudy: {
    back: 'Volver al portfolio',
    title: 'Case study — FobiBike',
    subtitle: 'Sistema de inventario y ventas para bicicletería (cliente real).',
    sections: [
      {
        title: 'Contexto',
        body: 'FobiBike necesitaba dejar de depender de consultas manuales de stock en mostrador. El objetivo: un panel simple para buscar productos, registrar ventas y ver ingresos.',
      },
      {
        title: 'Arquitectura',
        body: 'Backend en PHP con MySQL para persistencia de productos, ventas y stock. Frontend con JavaScript para filtros y flujos de mostrador. Evolución posterior: métricas e integración con asistente Groq para consultas en lenguaje natural.',
      },
      {
        title: 'Modelo de datos (resumen)',
        body: 'Productos (código, categoría, tipo, proveedor, precios, stock) · Ventas (fecha, ítems, pago, total) · Movimientos de stock al confirmar venta. Filtros cruzados por categoría, tipo, proveedor y disponibilidad.',
      },
      {
        title: 'Trade-offs',
        body: 'Elegí PHP + MySQL por velocidad de entrega para un comercio local y hosting simple. React no era necesario para el MVP de mostrador; se priorizó usabilidad y tiempo a producción. La capa de IA se agregó después, sin reescribir el núcleo.',
      },
      {
        title: 'Resultado',
        body: 'Sistema en uso para consultas de stock y registro de ventas. 1.400+ productos cargados, descuento automático de stock y panel de ingresos. Demo y código públicos para revisión técnica.',
      },
    ],
    videoTitle: 'Walkthrough (60–90s)',
    videoPlaceholder:
      'Próximamente: Loom con stock → venta → métricas → chat Groq. Mientras tanto, abrí la demo.',
    ctaDemo: 'Abrir demo en vivo',
    ctaCode: 'GitHub',
  },
  contact: {
    title: 'Contacto',
    note: 'Abierto a rol junior / SSR y proyectos freelance. Escribime por email, WhatsApp o LinkedIn.',
    writeMe: 'Email',
    whatsapp: 'WhatsApp',
    downloadCv: 'Descargar CV (PDF)',
    available: 'Disponible para oportunidades',
  },
  command: {
    placeholder: 'Buscar sección, acción…',
    hint: 'Ctrl K',
    hintMac: '⌘ K',
    empty: 'Sin resultados',
    copyEmail: 'Copiar email',
    openFobi: 'Abrir demo FobiBike',
    copied: 'Email copiado',
    groups: {
      navigate: 'Navegar',
      actions: 'Acciones',
    },
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
}

export type Translations = typeof es

const en: Translations = {
  nav: {
    links: [
      { href: '/#sobre-mi', label: 'About Me' },
      { href: '/#experiencia', label: 'Experience' },
      { href: '/#proceso', label: 'How I work' },
      { href: '/#educacion', label: 'Education' },
      { href: '/#proyectos', label: 'Projects' },
      { href: '/#contacto', label: 'Contact' },
    ],
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLang: 'Cambiar a español',
    downloadCv: 'Download CV',
    available: 'Open to opportunities',
  },
  hero: {
    titleA: 'Web Developer (React / PHP)',
    titleB: 'Production systems for local businesses',
    text: 'I design and ship sites and dashboards that get used for real: inventory, bookings and e-commerce. Looking for a junior / SSR role with product impact.',
    seeking: 'Open to junior roles · Córdoba / remote AR',
    cta: 'See FobiBike case',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    ctaContact: 'Contact',
  },
  about: {
    title: 'About Me',
    text: 'I’m a web developer from Córdoba, Argentina. Software Development Technician (ISVdR) and Information Systems student (UBP). I turn business requirements into interfaces that are simple to operate day to day. Main stack: React, TypeScript, PHP, MySQL and Firebase. Native Spanish. English A2 (Cambridge KET, 2020) — studying toward B1 for bilingual roles.',
  },
  featured: {
    id: 'caso-fobibike',
    eyebrow: 'Featured case · Real client',
    title: 'FobiBike — counter inventory & sales',
    problemLabel: 'Problem',
    problem:
      'The bike shop checked stock and sales manually across scattered tools: slow at the counter and no clear metrics.',
    solutionLabel: 'Solution',
    solution:
      'Custom system (PHP, MySQL, JavaScript) with CRUD, cross filters, income panel and a Groq AI assistant for natural-language stock/sales queries.',
    impactLabel: 'In production',
    kpis: [
      { value: '1,400+', label: 'Products managed' },
      { value: 'Auto stock', label: 'Deducted on sale confirm' },
      { value: 'AI', label: 'Natural-language queries' },
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Groq'],
    ctaDemo: 'Open demo',
    ctaCode: 'View code',
    ctaCase: 'Full case study',
    note: 'Used for counter stock lookups in production.',
  },
  process: {
    title: 'How I work',
    subtitle: 'A simple process to reduce delivery risk for freelance and junior roles.',
    steps: [
      {
        title: 'Discovery',
        text: 'I listen to the business problem (counter, bookings, sales) and what must stay simple to operate.',
      },
      {
        title: 'Scope',
        text: 'I define MVP, screens and data. Avoid scope creep: ship what unblocks day-to-day first.',
      },
      {
        title: 'Delivery',
        text: 'Usable UI + validations. Iterate with the client on real flows, not endless mockups.',
      },
      {
        title: 'Deploy',
        text: 'Ship on Vercel/Netlify/GitHub Pages, domain and basic SEO. Leave the system ready to use.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Web Developer — NexoSync (Freelance)',
        period: 'Aug 2025 – Present',
        location: 'Córdoba, Argentina',
        summary:
          'I build custom sites and systems for local businesses with React, TypeScript, PHP and MySQL.',
        bullets: [
          'Real client FobiBike: inventory with CRUD and search by category, type, supplier and availability for the counter.',
          'Ship and maintain production sites (Vercel/Netlify): deploys, domains and basic SEO.',
          'Gather requirements, define scope and deliver interfaces that are simple to operate day to day.',
        ],
      },
    ],
    milestonesTitle: 'Timeline',
    milestones: [
      { year: '2023–2025', label: 'Software Development Technician — ISVdR' },
      { year: 'Aug 2025', label: 'Started freelance at NexoSync' },
      { year: '2025', label: 'React course — CoderHouse' },
      { year: '2026', label: 'Information Systems degree (UBP) + AWS prep' },
    ],
  },
  education: {
    title: 'Education & Training',
    studiesTitle: 'Academic background',
    certsTitle: 'Courses & certifications',
    studies: [
      {
        title: 'Bachelor’s in Information Systems',
        institution: 'Universidad Blas Pascal (UBP)',
        status: 'In progress',
        detail: 'Córdoba, Argentina · 2026 – Present. Systems, software engineering and applied infrastructure.',
      },
      {
        title: 'Software Development Technician',
        institution: 'Instituto Superior Villa del Rosario (ISVdR)',
        status: 'Completed',
        detail: 'Villa del Rosario, Córdoba · 2023 – 2025. Software development, databases and programming.',
      },
    ],
    certs: [
      {
        title: 'React Course',
        issuer: 'CoderHouse · 2025',
        detail: 'React fundamentals and practice for modern UIs and reusable components.',
      },
      {
        title: 'AWS Cloud Practitioner Prep',
        issuer: 'Udemy · 2026',
        detail: 'Preparation course toward the AWS Cloud Practitioner certification (cloud fundamentals).',
      },
      {
        title: 'Cambridge English KET',
        issuer: 'Cambridge · 2020',
        detail: 'English A2 certified. Working toward B1 for bilingual roles.',
      },
    ],
  },
  tech: {
    title: 'Technologies',
    columns: ['Frontend', 'Backend', 'Data', 'Tools'],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Real and personal products: from the problem to the solution and its impact.',
    problem: 'Problem',
    solution: 'Solution',
    impact: 'Impact',
    estimated: 'estimated',
    production: 'in production',
    featured: 'Featured',
    filterAll: 'All',
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
    emptyFilter: 'No projects match that filter.',
    items: [
      {
        title: 'Fobi Bike',
        problem:
          'The shop tracked inventory and sales in scattered tools, without clear metrics or a fast way to check stock at the counter.',
        solution:
          'Inventory and sales system (real client) with CRUD, cross filters, metrics panel and a natural-language assistant (Groq).',
        impact:
          'Unified management of 1,400+ products, stock deducted on sale confirmation, and inventory/sales queries in seconds.',
      },
      {
        title: 'Matchear',
        problem:
          'Booking courts relied on WhatsApp or calls: unclear slots and friction confirming turns.',
        solution:
          'Web app (React + Firebase) to view availability, book slots and manage the court in one user/admin flow.',
        impact:
          'Full booking in under 2 minutes (day + slot + deposit), replacing chat back-and-forth (estimated).',
      },
      {
        title: 'FerroHogar',
        problem:
          'A hardware store needed to sell online and manage catalog, orders and stock without a clear storefront or backoffice.',
        solution:
          'E-commerce with home, filterable catalog, cart and an admin panel with sales, stock alerts and orders.',
        impact:
          '40+ product catalog with advanced filters and daily/monthly metrics in one admin panel.',
      },
      {
        title: 'MobiHouse',
        problem:
          'Finding and comparing properties was slow: weak filters and no useful map.',
        solution:
          'Real-estate platform with filterable catalog, favorites and a synced interactive Leaflet map.',
        impact:
          'Filter + map discovery in one view: ~60% less time to find a relevant property vs. flat listings (estimated).',
      },
      {
        title: 'Ironcore Gym',
        problem:
          'The gym lacked a modern website and a panel for members, payments and attendance.',
        solution:
          'Dark landing with plans (Basic, Full, Premium) and an admin dashboard with KPIs, charts and shift occupancy.',
        impact:
          '3 commercial plans ready for conversion and member/revenue/attendance KPIs on one screen.',
      },
      {
        title: 'Fénix',
        problem:
          'The club lacked a clear site for line-up, news and ticket purchase.',
        solution:
          'High-impact nightlife landing with immersive hero, experience/line-up sections and ticket CTAs.',
        impact:
          'Pitch understood in under 5 seconds with a direct path to tickets/line-up (estimated reading time).',
      },
    ],
  },
  caseStudy: {
    back: 'Back to portfolio',
    title: 'Case study — FobiBike',
    subtitle: 'Inventory and sales system for a bike shop (real client).',
    sections: [
      {
        title: 'Context',
        body: 'FobiBike needed to stop relying on manual stock checks at the counter. Goal: a simple panel to search products, register sales and see income.',
      },
      {
        title: 'Architecture',
        body: 'PHP backend with MySQL for products, sales and stock. JavaScript frontend for filters and counter flows. Later evolution: metrics and Groq assistant for natural-language queries.',
      },
      {
        title: 'Data model (summary)',
        body: 'Products (SKU, category, type, supplier, prices, stock) · Sales (date, items, payment, total) · Stock movements on sale confirm. Cross filters by category, type, supplier and availability.',
      },
      {
        title: 'Trade-offs',
        body: 'I chose PHP + MySQL for fast delivery to a local business and simple hosting. React wasn’t required for the counter MVP; usability and time-to-production came first. AI was added later without rewriting the core.',
      },
      {
        title: 'Outcome',
        body: 'System used for stock lookups and sales entry. 1,400+ products loaded, automatic stock deduction and income panel. Public demo and code for technical review.',
      },
    ],
    videoTitle: 'Walkthrough (60–90s)',
    videoPlaceholder:
      'Coming soon: Loom covering stock → sale → metrics → Groq chat. Meanwhile, open the live demo.',
    ctaDemo: 'Open live demo',
    ctaCode: 'GitHub',
  },
  contact: {
    title: 'Contact',
    note: 'Open to junior / SSR roles and freelance. Reach me by email, WhatsApp or LinkedIn.',
    writeMe: 'Email',
    whatsapp: 'WhatsApp',
    downloadCv: 'Download CV (PDF)',
    available: 'Open to opportunities',
  },
  command: {
    placeholder: 'Search section, action…',
    hint: 'Ctrl K',
    hintMac: '⌘ K',
    empty: 'No results',
    copyEmail: 'Copy email',
    openFobi: 'Open FobiBike demo',
    copied: 'Email copied',
    groups: {
      navigate: 'Navigate',
      actions: 'Actions',
    },
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export const translations: Record<Language, Translations> = { es, en }
