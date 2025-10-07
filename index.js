// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(26, 26, 26, 0.98)"
  } else {
    navbar.style.background = "rgba(26, 26, 26, 0.95)"
  }
})

// Service cards interaction
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.dataset.service
    showServiceDetails(service)
  })
})

function showServiceDetails(service) {
  const services = {
    frontend: {
      title: "Desarrollo Frontend",
      icon: "fas fa-laptop-code",
      description:
        "Creación de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías como React, Vue.js y Angular.",
      features: [
        "Interfaces responsivas y adaptables",
        "Optimización para todos los dispositivos",
        "Animaciones y transiciones suaves",
        "Integración con APIs REST",
        "Código limpio y mantenible",
      ],
    },
    backend: {
      title: "Desarrollo Backend",
      icon: "fas fa-server",
      description:
        "Desarrollo de APIs robustas y escalables con Node.js, Python y bases de datos como MongoDB y PostgreSQL.",
      features: [
        "APIs RESTful y GraphQL",
        "Bases de datos relacionales y NoSQL",
        "Autenticación y autorización",
        "Arquitectura escalable",
        "Documentación completa",
      ],
    },
    fullstack: {
      title: "Desarrollo Full Stack",
      icon: "fas fa-layer-group",
      description: "Soluciones completas que combinan frontend y backend para crear aplicaciones web integrales.",
      features: [
        "Aplicaciones web completas",
        "Integración frontend-backend",
        "Gestión de estado global",
        "Deployment y DevOps",
        "Monitoreo y analytics",
      ],
    },
    responsive: {
      title: "Diseño Responsive",
      icon: "fas fa-mobile-alt",
      description:
        "Sitios web que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta pantallas de escritorio.",
      features: [
        "Mobile-first approach",
        "Breakpoints optimizados",
        "Imágenes adaptativas",
        "Touch-friendly interfaces",
        "Cross-browser compatibility",
      ],
    },
    optimization: {
      title: "Optimización Web",
      icon: "fas fa-rocket",
      description: "Mejora del rendimiento, SEO y velocidad de carga para una experiencia de usuario excepcional.",
      features: [
        "Optimización de velocidad",
        "SEO técnico avanzado",
        "Compresión de assets",
        "Lazy loading implementado",
        "Core Web Vitals mejorados",
      ],
    },
    maintenance: {
      title: "Mantenimiento",
      icon: "fas fa-tools",
      description:
        "Soporte continuo, actualizaciones de seguridad y mejoras para mantener tu sitio web funcionando perfectamente.",
      features: [
        "Actualizaciones de seguridad",
        "Backup automático",
        "Monitoreo 24/7",
        "Soporte técnico",
        "Mejoras continuas",
      ],
    },
  }

  const serviceInfo = services[service]
  if (serviceInfo) {
    showModal(serviceInfo)
  }
}

function showModal(serviceInfo) {
  const modal = document.getElementById("serviceModal")
  const modalTitle = document.getElementById("modalTitle")
  const modalIcon = document.getElementById("modalIcon")
  const modalDescription = document.getElementById("modalDescription")
  const modalFeatures = document.getElementById("modalFeatures")

  // Configurar contenido del modal
  modalTitle.textContent = serviceInfo.title
  modalIcon.className = serviceInfo.icon
  modalDescription.textContent = serviceInfo.description

  // Limpiar y agregar características
  modalFeatures.innerHTML = ""
  serviceInfo.features.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    modalFeatures.appendChild(li)
  })

  // Mostrar modal
  modal.style.display = "block"
  document.body.style.overflow = "hidden" // Prevenir scroll del body
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("serviceModal")
  const closeBtn = document.querySelector(".close-btn")

  // Cerrar modal al hacer clic en X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // Cerrar modal con tecla Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })
})

// Contact cards interaction
document.querySelectorAll(".contact-card").forEach((card) => {
  card.addEventListener("click", () => {
    const contact = card.dataset.contact
    handleContactClick(contact)
  })
})

document.querySelectorAll(".demo-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevenir que se active el evento del card padre
    const projectCard = btn.closest(".project-card");
    const projectTitle = projectCard.querySelector("h3").textContent;
    handleDemoClick(projectTitle, btn);
  });
});


function handleContactClick(contact) {
  const contacts = {
    gmail: () => window.open("mailto:mateoliendo022@gmail.com?subject=Contacto%20desde%20tu%20portafolio", "_blank"),
    linkedin: () => window.open("https://www.linkedin.com/in/mateo-liendo02", "_blank"),
    github: () => window.open("https://github.com/mat0222", "_blank"),
    cv: () => {
      window.open("curriculum.html", "_blank");
    },
    whatsapp: () => window.open("https://wa.me/5493573414204?text=Hola%20Mateo,%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo", "_blank"),
    services: () => {
      window.open("servicio.html", "_blank");
    },
  }

  if (contacts[contact]) {
    contacts[contact]()
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections for scroll animations
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".floating-shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1
    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
  })
})

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const mainTitle = document.querySelector(".main-title")
  const subtitle = document.querySelector(".subtitle")

  setTimeout(() => {
    typeWriter(mainTitle, "LIENDO MATEO", 150)
  }, 1000)

  setTimeout(() => {
    typeWriter(subtitle, "DESARROLLADOR WEB", 150)
  }, 3000)
})

// Add active class to navigation based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

function handleDemoClick(projectTitle, btn) {
  // Diccionario de proyectos con demos disponibles
  const demos = {
    "FobiBike - Sistema de Administración de Productos": "https://mat0222.github.io/bicicleteria/",
    "Football Manager Web": "https://mat0222.github.io/Futmania/",
    "Funko Pop E-Commerce Simulation": "https://mat0222.github.io/funko-shop/",
    "Info-Play": "https://mat0222.github.io/info-play/",
    "Casla-Info": "https://mat0222.github.io/casla-info/",
    // Agregá más títulos con URLs según quieras
  };

  const demoUrl = demos[projectTitle];
  if (demoUrl) {
    window.open(demoUrl, "_blank");
  } else {
    // Mostrar mensaje temporal si no hay demo disponible
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-clock"></i> Próximamente';
    btn.style.background = "linear-gradient(45deg, #95a5a6, #7f8c8d)";

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = "linear-gradient(45deg, #f1c40f, #e67e22)";
    }, 2000);
  }
}