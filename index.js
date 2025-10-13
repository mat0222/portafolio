// Translations
const translations = {
  es: {
    typing: ["Desarrollador Web", "Creador de Experiencias Web", "Solucionador de Problemas"],
    projects: [
      {
        title: "FobiBike - Sistema de Administración de Productos",
        description:
          "Plataforma web para gestionar stock y productos, ideal para optimizar la administración del negocio.",
        images: [
          "imagenes/fobibike1.png",
        ],
        tags: ["Html", "Css", "JavaScript", "Php", "MySQL"],
        features: [
          "Sistema de autenticación seguro",
          "Control de inventario en tiempo real",
          "Panel de administración para gestionar productos",
          "Panel intuitivo para el personal",
        ],
        technologies: [
          "Html",
          "Css",
          "JavaScript",
          "Php",
          "MySql",
        ],
      },
      {
        title: "Football Manager Web",
        description:
          "Aplicación interactiva que permite agregar, editar y administrar jugadores, con panel de control y estadísticas dinámicas.",
        images: [
          "imagenes/futbol1.png",
          "imagenes/futbol2.png",
          "imagenes/futbol3.png",
          "imagenes/futbol4.png",
          "imagenes/futbol5.png",
        ],
        tags: ["Html", "Css", "JavaScript", "Php", "MySQL"],
        features: [
          "Inicio de sesión y autenticación segura",
          "Gestión de datos de jugadores en tiempo real",
          "Panel de control para organización del equipo",
          "Interfaz interactiva y adaptable",
        ],
         technologies: [
          "Html",
          "Css",
          "JavaScript",
          "Php",
          "MySql",
        ],
      },
      {
        title: "Funko Pop E-Commerce Simulation",
        description: "Tienda online con catálogo dinámico, carrito de compras y sistema de pagos interactivo.",
        images: [
          "imagenes/funko1.png",
          "imagenes/funko2.png",
          "imagenes/funko3.png",
          "imagenes/funko4.png",
        ],
        tags: ["HTML", "CSS", "JavaScript"],
        features: [
          "Diseño Interactivo",
          "Simulacion de Carrito de Compras",
          "Integración de Pasarela de Pago (Simulada)",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
        ],
      },
      {
        title: "Info-Play",
        description:
          "Página informativa con líneas de tiempo interactivas y cuadros explicativos que muestran la evolución de Sony en el mundo gamer.",
        images: [
          "imagenes/ps1.png",
          "imagenes/ps2.png",
          "imagenes/ps3.png",
        ],
        tags: ["Html", "Css", "JavaScript", "Python"],
        features: [
          "Sistema de autenticación seguro",
          "Generador interactivo de cuadros explicativos",
          "Línea de tiempo dinámica y visualizaciones",
        ],
        technologies: [
          "Html",
          "Css",
          "JavaScript",
          "Python",
        ],
      },
      {
        title: "Casla-Info",
        description:
          "Portal dedicado a la historia, estadio, jugadores y vías de contacto, diseñado para brindar información clara y atractiva a los hinchas del cuervo",
        images: [
          "imagenes/casla1.png",
          "imagenes/casla2.png",
          "imagenes/casla3.png",
          "imagenes/casla4.png",
        ],
        tags: ["Html", "Css", "JavaScript"],
        features: [
          "Web Informativa",
          "Secciones interactivas de historia, estadio y contactos",
          "Galería de jugadores",
          "Diseño responsivo",
          "Animaciones con JavaScript",
        ],
          technologies: [
          "Html",
          "Css",
          "JavaScript",
        ],
      }
    ],
  },
  en: {
    typing: ["Developer Web", "Web Experience Creator", "Problem Solver"],
    projects: [
  {
    title: "FobiBike - Product Management System",
    description:
      "Web platform designed to manage stock and products, ideal for optimizing business administration.",
    images: [
      "imagenes/fobibike1.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Secure authentication system",
      "Real-time inventory control",
      "Admin panel for product management",
      "User-friendly dashboard for staff",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
  },
  {
    title: "Football Manager Web",
    description:
      "Interactive application that allows adding, editing, and managing players with a control panel and dynamic statistics.",
    images: [
      "imagenes/futbol1.png",
      "imagenes/futbol2.png",
      "imagenes/futbol3.png",
      "imagenes/futbol4.png",
      "imagenes/futbol5.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Secure login and authentication",
      "Real-time player data management",
      "Control panel for team organization",
      "Interactive and responsive interface",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
  },
  {
    title: "Funko Pop E-Commerce Simulation",
    description:
      "Online store with a dynamic catalog, shopping cart, and interactive payment simulation system.",
    images: [
      "imagenes/funko1.png",
      "imagenes/funko2.png",
      "imagenes/funko3.png",
      "imagenes/funko4.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive design",
      "Shopping cart simulation",
      "Simulated payment gateway integration",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    title: "Info-Play",
    description:
      "Informative website with interactive timelines and explanatory charts showing Sony's evolution in the gaming world.",
    images: [
      "imagenes/ps1.png",
      "imagenes/ps2.png",
      "imagenes/ps3.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    features: [
      "Secure authentication system",
      "Interactive chart generator",
      "Dynamic timeline and visualizations",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
    ],
  },
  {
    title: "Casla-Info",
    description:
      "Portal dedicated to the history, stadium, players, and contact information, designed to provide clear and engaging content for fans of the club.",
    images: [
      "imagenes/casla1.png",
      "imagenes/casla2.png",
      "imagenes/casla3.png",
      "imagenes/casla4.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    features: [
      "Informative website",
      "Interactive sections for history, stadium, and contacts",
      "Player gallery",
      "Responsive design",
      "JavaScript animations",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
      }
    ],
  },
}

// Current language
let currentLang = "es"

// Navigation
const nav = document.getElementById("nav")
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const navLinks = document.querySelectorAll(".nav-link")

// Scroll effect for navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Typing effect
const typingText = document.getElementById("typingText")
let typingIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect() {
  const currentText = translations[currentLang].typing[typingIndex]

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    typingIndex = (typingIndex + 1) % translations[currentLang].typing.length
    typeSpeed = 500
  }

  setTimeout(typeEffect, typeSpeed)
}

typeEffect()

// Language toggle
const languageToggle = document.getElementById("languageToggle")

languageToggle.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es"
  languageToggle.querySelector(".lang-text").textContent = currentLang.toUpperCase()
  updateLanguage()
})

function updateLanguage() {
  // Update all elements with data-es and data-en attributes
  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    const text = element.getAttribute(`data-${currentLang}`)
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.placeholder = text
    } else if (element.tagName === "BUTTON") {
      element.textContent = text
    } else {
      element.textContent = text
    }
  })

  // Update projects
  renderProjects()

  // Reset typing effect
  typingIndex = 0
  charIndex = 0
  isDeleting = false
}

// Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid")
  const projects = translations[currentLang].projects

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
    <div class="project-card" onclick="openProjectModal(${index})">
      <div class="project-carousel" data-project="${index}">
        <div class="carousel-images">
          ${project.images
            .map(
              (img, imgIndex) => `
            <img src="${img}" alt="${project.title} - Image ${imgIndex + 1}" class="project-image ${imgIndex === 0 ? "active" : ""}" loading="lazy">
          `,
            )
            .join("")}
        </div>
        <button class="carousel-btn carousel-prev" onclick="event.stopPropagation(); changeCarouselImage(${index}, -1)">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-btn carousel-next" onclick="event.stopPropagation(); changeCarouselImage(${index}, 1)">
          <i class="fas fa-chevron-right"></i>
        </button>
        <div class="carousel-indicators">
          ${project.images
            .map(
              (_, imgIndex) => `
            <span class="indicator ${imgIndex === 0 ? "active" : ""}" onclick="event.stopPropagation(); setCarouselImage(${index}, ${imgIndex})"></span>
          `,
            )
            .join("")}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

// Modal
const modal = document.getElementById("projectModal")
const modalOverlay = document.getElementById("modalOverlay")
const modalClose = document.getElementById("modalClose")
const modalBody = document.getElementById("modalBody")

function openProjectModal(index) {
  const project = translations[currentLang].projects[index]

  modalBody.innerHTML = `
    <div class="modal-carousel">
      <div class="modal-carousel-images">
        ${project.images
          .map(
            (img, imgIndex) => `
          <img src="${img}" alt="${project.title} - Image ${imgIndex + 1}" class="modal-image ${imgIndex === 0 ? "active" : ""}">
        `,
          )
          .join("")}
      </div>
      <button class="carousel-btn carousel-prev" onclick="changeModalImage(-1)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-btn carousel-next" onclick="changeModalImage(1)">
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="carousel-indicators modal-indicators">
        ${project.images
          .map(
            (_, imgIndex) => `
          <span class="indicator ${imgIndex === 0 ? "active" : ""}" onclick="setModalImage(${imgIndex})"></span>
        `,
          )
          .join("")}
      </div>
    </div>
    
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-description">${project.description}</p>
    
    <div class="modal-section">
      <h3>${currentLang === "es" ? "Características Principales" : "Key Features"}</h3>
      <ul>
        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </div>
    
    <div class="modal-section">
      <h3>${currentLang === "es" ? "Tecnologías Utilizadas" : "Technologies Used"}</h3>
      <ul>
        ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
    </div>
    
    
  `

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProjectModal() {
  modal.classList.remove("active")
  document.body.style.overflow = ""
}

modalClose.addEventListener("click", closeProjectModal)
modalOverlay.addEventListener("click", closeProjectModal)

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeProjectModal()
  }
})

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

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
  observer.observe(section)
})

// Animate skill bars when visible
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress")
      progressBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      })
      skillObserver.unobserve(entry.target)
    }
  })
}, observerOptions)

const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  skillObserver.observe(skillsSection)
}

// Carousel navigation functions
function changeCarouselImage(projectIndex, direction) {
  const carousel = document.querySelector(`.project-carousel[data-project="${projectIndex}"]`)
  const images = carousel.querySelectorAll(".project-image")
  const indicators = carousel.querySelectorAll(".indicator")

  const currentIndex = Array.from(images).findIndex((img) => img.classList.contains("active"))
  let newIndex = currentIndex + direction

  if (newIndex < 0) newIndex = images.length - 1
  if (newIndex >= images.length) newIndex = 0

  images[currentIndex].classList.remove("active")
  indicators[currentIndex].classList.remove("active")

  images[newIndex].classList.add("active")
  indicators[newIndex].classList.add("active")
}

function setCarouselImage(projectIndex, imageIndex) {
  const carousel = document.querySelector(`.project-carousel[data-project="${projectIndex}"]`)
  const images = carousel.querySelectorAll(".project-image")
  const indicators = carousel.querySelectorAll(".indicator")

  images.forEach((img) => img.classList.remove("active"))
  indicators.forEach((ind) => ind.classList.remove("active"))

  images[imageIndex].classList.add("active")
  indicators[imageIndex].classList.add("active")
}

// Modal carousel navigation functions
function changeModalImage(direction) {
  const images = document.querySelectorAll(".modal-carousel-images .modal-image")
  const indicators = document.querySelectorAll(".modal-indicators .indicator")

  const currentIndex = Array.from(images).findIndex((img) => img.classList.contains("active"))
  let newIndex = currentIndex + direction

  if (newIndex < 0) newIndex = images.length - 1
  if (newIndex >= images.length) newIndex = 0

  images[currentIndex].classList.remove("active")
  indicators[currentIndex].classList.remove("active")

  images[newIndex].classList.add("active")
  indicators[newIndex].classList.add("active")
}

function setModalImage(imageIndex) {
  const images = document.querySelectorAll(".modal-carousel-images .modal-image")
  const indicators = document.querySelectorAll(".modal-indicators .indicator")

  images.forEach((img) => img.classList.remove("active"))
  indicators.forEach((ind) => ind.classList.remove("active"))

  images[imageIndex].classList.add("active")
  indicators[imageIndex].classList.add("active")
}

// Initialize
renderProjects()


