document.addEventListener("DOMContentLoaded", () => {
  const planCards = document.querySelectorAll(".plan-card")
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".section")

  // Hide all sections first
  sections.forEach((section) => section.classList.remove("active"))

  // Show inicio section by default
  const inicioSection = document.getElementById("inicio")
  if (inicioSection) {
    inicioSection.classList.add("active")
  }

  // Set inicio nav link as active
  navLinks.forEach((nav) => nav.classList.remove("active"))
  const inicioLink = document.querySelector('a[href="#inicio"]')
  if (inicioLink) {
    inicioLink.classList.add("active")
  }

  // Navigation functionality
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all nav links
      navLinks.forEach((nav) => nav.classList.remove("active"))

      // Add active class to clicked nav link
      link.classList.add("active")

      // Hide all sections
      sections.forEach((section) => section.classList.remove("active"))

      // Show target section
      const targetId = link.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)
      if (targetSection) {
        targetSection.classList.add("active")
      }

      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  })

  // Add click animation to plan cards
  planCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Remove active class from all cards
      planCards.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked card
      this.classList.add("active")

      // Add pulse effect
      this.style.transform = "scale(0.98)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    })

    // Add hover sound effect (optional)
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    })
  })

  // Animate features on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const features = entry.target.querySelectorAll(".feature-item")
        features.forEach((feature, index) => {
          setTimeout(() => {
            feature.style.opacity = "1"
            feature.style.transform = "translateX(0)"
          }, index * 50)
        })
      }
    })
  }, observerOptions)

  // Initially hide features for animation
  planCards.forEach((card) => {
    const features = card.querySelectorAll(".feature-item")
    features.forEach((feature) => {
      feature.style.opacity = "0"
      feature.style.transform = "translateX(-20px)"
      feature.style.transition = "all 0.3s ease"
    })
    observer.observe(card)
  })

  // Add floating animation to hero title
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    let mouseX = 0
    let mouseY = 0
    let titleX = 0
    let titleY = 0

    document.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.01
      mouseY = (e.clientY - window.innerHeight / 2) * 0.01
    })

    function animateTitle() {
      titleX += (mouseX - titleX) * 0.1
      titleY += (mouseY - titleY) * 0.1

      heroTitle.style.transform = `translate(${titleX}px, ${titleY}px)`
      requestAnimationFrame(animateTitle)
    }

    animateTitle()
  }

  // Add plan selection functionality
  let selectedPlan = null

  planCards.forEach((card, index) => {
    card.addEventListener("click", function () {
      selectedPlan = ["deluxe", "extra", "essential"][index]

      // Show selection feedback
      const planTitle = this.querySelector(".plan-title").textContent
      showNotification(`Has seleccionado el plan ${planTitle}`)
    })
  })

  function showNotification(message) {
    // Create notification element
    const notification = document.createElement("div")
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      color: #111827;
      padding: 15px 25px;
      border-radius: 8px;
      font-weight: 600;
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
    `

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  window.goToSubscriptions = () => {
    // Remove active class from all nav links
    navLinks.forEach((nav) => nav.classList.remove("active"))

    // Add active class to subscriptions nav link
    const subscriptionsLink = document.querySelector('a[href="#suscripciones"]')
    if (subscriptionsLink) {
      subscriptionsLink.classList.add("active")
    }

    // Hide all sections
    sections.forEach((section) => section.classList.remove("active"))

    // Show subscriptions section
    const subscriptionsSection = document.getElementById("suscripciones")
    if (subscriptionsSection) {
      subscriptionsSection.classList.add("active")
    }

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Show notification
    showNotification("¡Revisa nuestros planes de suscripción!")
  }
})

// Add some interactive particles
function createParticles() {
  const particlesContainer = document.createElement("div")
  particlesContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  `

  document.body.appendChild(particlesContainer)

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(251, 191, 36, 0.3);
      border-radius: 50%;
      animation: float ${5 + Math.random() * 10}s infinite linear;
    `

    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 10 + "s"

    particlesContainer.appendChild(particle)
  }

  // Add CSS animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
  `
  document.head.appendChild(style)
}

// Initialize particles
createParticles()


