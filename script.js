// Variables globales
let isMenuOpen = false
let activeSection = "home"

// Elementos del DOM
const menuToggle = document.querySelector(".menu-toggle")
const mobileNav = document.querySelector(".mobile-nav")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const navLinks = document.querySelectorAll(".nav-link")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
const allNavLinks = [...navLinks, ...mobileNavLinks]

// Función para alternar el menú móvil
function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen
  if (isMenuOpen) {
    mobileNav.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  } else {
    mobileNav.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  }
}

// Función para cerrar el menú móvil
function closeMobileMenu() {
  if (isMenuOpen) {
    isMenuOpen = false
    mobileNav.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  }
}

// Función para hacer scroll suave a una sección
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
  closeMobileMenu()
}

// Función para actualizar la sección activa
function updateActiveSection() {
  const sections = ["home", "about", "projects", "contact"]
  const scrollPosition = window.scrollY + 150

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop - 100
      if (scrollPosition >= offsetTop) {
        if (activeSection !== section) {
          activeSection = section
          allNavLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.dataset.section === section) {
              link.classList.add("active")
            }
          })
        }
        break
      }
    }
  }

  if (window.scrollY < 100 && activeSection !== "home") {
    activeSection = "home"
    allNavLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.dataset.section === "home") {
        link.classList.add("active")
      }
    })
  }
}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de Lucide icons (ahora sí funciona)
  lucide.createIcons()

  // Botón menú móvil
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu)
  }

  // Links de navegación
  allNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const section = this.dataset.section
      if (section) scrollToSection(section)
    })
  })

  // Botones de acción extra (hero)
  const actionButtons = document.querySelectorAll("[data-section]")
  actionButtons.forEach((button) => {
    if (
      !button.classList.contains("nav-link") &&
      !button.classList.contains("mobile-nav-link")
    ) {
      button.addEventListener("click", function () {
        const section = this.dataset.section
        if (section) scrollToSection(section)
      })
    }
  })

  // Scroll activo
  window.addEventListener("scroll", updateActiveSection)

  // Botones de proyectos con data-url
  const projectButtons = document.querySelectorAll('button[data-url]')
  projectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url")
      window.open(url, "_blank")
    })
  })

  // Animaciones de tarjetas
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(
    ".about-card, .project-card, .contact-card"
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })

  // Iniciar sección activa
  updateActiveSection()
})

// Resize: cerrar menú si es desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && isMenuOpen) {
    closeMobileMenu()
  }
})



