import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCase from './components/FeaturedCase'
import About from './components/About'
import Experience from './components/Experience'
import Process from './components/Process'
import Education from './components/Education'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CaseStudy from './components/CaseStudy'
import LanguageProvider from './i18n/LanguageProvider'
import { useLanguage } from './i18n/useLanguage'
import './App.css'

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Mateo Liendo. {t.footer.rights}</p>
      </div>
    </footer>
  )
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = location.hash.replace('#', '')
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.pathname, location.hash])

  return null
}

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCase />
      <About />
      <Experience />
      <Process />
      <Education />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/fobibike"
            element={
              <main>
                <CaseStudy />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
