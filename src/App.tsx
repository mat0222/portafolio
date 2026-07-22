import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
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

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Technologies />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
