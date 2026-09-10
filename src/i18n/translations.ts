export type Language = 'es' | 'en'

const es = {
  nav: {
    links: [
      { href: '#sobre-mi', label: 'Sobre Mí' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#educacion', label: 'Educación' },
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
    text: 'Soy desarrollador full stack con una base fuerte en arquitectura de computadoras y una curiosidad constante por la infraestructura cloud. Disfruto convertir problemas de negocio en productos digitales medibles: desde la UI hasta el despliegue. Hoy combino formación académica (ISVdR y UBP) con certificaciones oficiales en AWS y PostgreSQL para construir soluciones web eficientes, mantenibles y orientadas a performance.',
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
  education: {
    title: 'Educación y Certificaciones',
    studiesTitle: 'Formación académica',
    certsTitle: 'Certificaciones',
    studies: [
      {
        title: 'Tecnicatura Superior en Desarrollo de Software',
        institution: 'Instituto Superior Villa del Rosario (ISVdR)',
        status: 'Completada',
        detail:
          'Formación técnica en desarrollo de software, bases de datos, programación y arquitectura de aplicaciones.',
      },
      {
        title: 'Licenciatura en Informática',
        institution: 'Universidad Blas Pascal (UBP)',
        status: 'En curso',
        detail:
          'Profundización en sistemas, ingeniería de software e infraestructura tecnológica aplicada a productos digitales.',
      },
    ],
    certs: [
      {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        detail:
          'Fundamentos de cloud computing, servicios core de AWS, seguridad, pricing y arquitectura en la nube.',
      },
      {
        title: 'PostgreSQL',
        issuer: 'Certificación oficial',
        detail:
          'Modelado, consultas, performance y buenas prácticas de administración sobre PostgreSQL en entornos reales.',
      },
    ],
  },
  tech: {
    title: 'Tecnologías',
    columns: ['Frontend', 'Backend y Lenguajes', 'Bases de Datos', 'DevOps y Herramientas'],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Productos reales: del problema a la solución y su impacto medible.',
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
        title: 'Fénix',
        problem:
          'El boliche no tenía una presencia digital a la altura de la fiesta: sin una web clara para mostrar el line-up, las novedades ni un camino directo a comprar tickets.',
        solution:
          'Landing de alto impacto con estética nightlife (cyan y magenta), hero inmersivo, navegación a Nosotros, Experiencia, Line-up, Novedades y Contacto, más CTAs de tickets.',
        impact:
          'Propuesta del club entendible en menos de 5 segundos y ruta directa a tickets/line-up, con carga optimizada orientada a Core Web Vitals > 90.',
      },
      {
        title: 'MobiHouse',
        problem:
          'Buscar y comparar propiedades era lento y confuso: sin filtros claros, sin mapa útil y con poca transparencia sobre el estado de cada inmueble.',
        solution:
          'Plataforma inmobiliaria con landing de alto impacto, catálogo filtrable, favoritos y mapa interactivo (Leaflet) con pins y listado sincronizado.',
        impact:
          'Exploración con filtros + mapa en una sola vista: reducción estimada del ~60% en el tiempo para encontrar una propiedad relevante vs. listados sin contexto geográfico.',
      },
      {
        title: 'Fobi Bike',
        problem:
          'El negocio manejaba inventario y ventas de forma dispersa, sin métricas claras ni una forma rápida de consultar stock o registrar operaciones.',
        solution:
          'Dashboard de gestión con inventario (1400+ productos), control de ingresos, descuento automático de stock y asistente IA (Groq) por chat.',
        impact:
          'Gestión unificada de 1.400+ productos, stock descontado al confirmar venta y consultas de inventario/ventas en lenguaje natural en segundos.',
      },
      {
        title: 'Matchear',
        problem:
          'Reservar canchas y organizar torneos dependía de mensajes y planillas: horarios poco claros, poca conversión y fricción para confirmar turnos.',
        solution:
          'Plataforma de reservas con selección de día/horario, resumen de pago, seña y flujo de torneos con pasos guiados para armar el evento.',
        impact:
          'Reserva completa en menos de 2 minutos (día + horario + seña) y armado de torneos en 4 pasos guiados, sin planillas ni ida y vuelta por WhatsApp.',
      },
      {
        title: 'Ironcore Gym',
        problem:
          'El gimnasio no tenía una web moderna ni un panel para operar socios, pagos y asistencias: la inscripción y el control diario dependían de procesos manuales.',
        solution:
          'Sitio dark con planes (Básico, Full, Premium), CTAs de inscripción y un dashboard admin con KPIs, gráficos, ocupación por turnos y últimas inscripciones.',
        impact:
          'Panel con KPIs en tiempo real (socios activos, ingresos del mes, asistencias del día y pagos pendientes) y 3 planes comerciales listos para conversión.',
      },
      {
        title: 'FerroHogar',
        problem:
          'Una ferretería necesitaba vender online y administrar catálogo, pedidos y stock sin una tienda ni un backoffice claros.',
        solution:
          'E-commerce completo: home, catálogo con filtros, carrito y un panel admin con ventas, alertas de stock, pedidos y estadísticas.',
        impact:
          'Catálogo de 40+ productos con filtros avanzados y admin con métricas diarias/mensuales, alertas de stock bajo y seguimiento de pedidos en un solo panel.',
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
      { href: '#educacion', label: 'Education' },
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
    text: 'I am a full-stack developer with a strong foundation in computer architecture and a constant curiosity for cloud infrastructure. I enjoy turning business problems into measurable digital products—from UI to deployment. Today I combine academic training (ISVdR and UBP) with official AWS and PostgreSQL certifications to build efficient, maintainable, performance-oriented web solutions.',
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
  education: {
    title: 'Education & Certifications',
    studiesTitle: 'Academic background',
    certsTitle: 'Certifications',
    studies: [
      {
        title: 'Advanced Technical Degree in Software Development',
        institution: 'Instituto Superior Villa del Rosario (ISVdR)',
        status: 'Completed',
        detail:
          'Technical training in software development, databases, programming and application architecture.',
      },
      {
        title: 'Bachelor’s Degree in Computer Science',
        institution: 'Universidad Blas Pascal (UBP)',
        status: 'In progress',
        detail:
          'Deeper focus on systems, software engineering and technology infrastructure applied to digital products.',
      },
    ],
    certs: [
      {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        detail:
          'Cloud computing fundamentals, core AWS services, security, pricing and cloud architecture basics.',
      },
      {
        title: 'PostgreSQL',
        issuer: 'Official certification',
        detail:
          'Modeling, querying, performance and administration best practices for PostgreSQL in real environments.',
      },
    ],
  },
  tech: {
    title: 'Technologies',
    columns: ['Frontend', 'Backend & Languages', 'Databases', 'DevOps & Tools'],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Real products: from the problem to the solution and measurable impact.',
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
        title: 'Fénix',
        problem:
          'The club lacked a digital presence that matched the night: no clear site to show the line-up, news, or a direct path to buy tickets.',
        solution:
          'High-impact nightlife landing with cyan/magenta aesthetics, an immersive hero, navigation to About, Experience, Line-up, News and Contact, plus ticket CTAs.',
        impact:
          'Club pitch understood in under 5 seconds with a direct path to tickets/line-up, and load optimized for Core Web Vitals > 90.',
      },
      {
        title: 'MobiHouse',
        problem:
          'Finding and comparing properties was slow and confusing: weak filters, no useful map and little clarity on each listing’s status.',
        solution:
          'Real-estate platform with a high-impact landing, filterable catalog, favorites and an interactive Leaflet map with synced pins and sidebar.',
        impact:
          'Filter + map discovery in one view: ~60% estimated reduction in time to find a relevant property vs. listings without geographic context.',
      },
      {
        title: 'Fobi Bike',
        problem:
          'The shop tracked inventory and sales in scattered tools, without clear metrics or a fast way to check stock or register operations.',
        solution:
          'Management dashboard with inventory (1400+ products), income control, automatic stock deduction and a Groq-powered AI chat assistant.',
        impact:
          'Unified management of 1,400+ products, stock deducted on sale confirmation, and inventory/sales queries in natural language within seconds.',
      },
      {
        title: 'Matchear',
        problem:
          'Booking courts and organizing tournaments relied on chats and spreadsheets: unclear slots, low conversion and friction to confirm turns.',
        solution:
          'Booking platform with day/time selection, payment summary, deposit flow and a guided tournament setup with clear steps.',
        impact:
          'Full booking in under 2 minutes (day + slot + deposit) and tournament setup in 4 guided steps—no spreadsheets or WhatsApp back-and-forth.',
      },
      {
        title: 'Ironcore Gym',
        problem:
          'The gym lacked a modern website and an ops panel for members, payments and attendance: sign-ups and daily control relied on manual processes.',
        solution:
          'Dark-themed site with membership plans (Basic, Full, Premium), enrollment CTAs and an admin dashboard with KPIs, charts, shift occupancy and latest sign-ups.',
        impact:
          'Real-time KPI panel (active members, monthly revenue, daily attendance and pending payments) plus 3 commercial plans ready for conversion.',
      },
      {
        title: 'FerroHogar',
        problem:
          'A hardware store needed to sell online and manage catalog, orders and stock without a clear storefront or backoffice.',
        solution:
          'Full e-commerce: home, filterable catalog, cart and an admin panel with sales, stock alerts, orders and analytics.',
        impact:
          '40+ product catalog with advanced filters and an admin with daily/monthly metrics, low-stock alerts and order tracking in one panel.',
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
