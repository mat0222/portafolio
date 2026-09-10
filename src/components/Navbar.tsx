import { useEffect, useState } from 'react'
import { Download, Menu, X, Languages } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import CommandPalette from './CommandPalette'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, toggle, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__brand" onClick={() => setOpen(false)}>
          Mateo Liendo <span>| Portfolio</span>
        </a>

        <nav className="navbar__links" aria-label="Navegación principal">
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <CommandPalette />

          <a
            href="/Mateo-Liendo-CV.pdf"
            className="navbar__cv"
            download
            title={t.nav.downloadCv}
          >
            <Download size={14} />
            <span>CV</span>
          </a>

          <button
            type="button"
            className="navbar__lang"
            onClick={toggle}
            aria-label={t.nav.switchLang}
            title={t.nav.switchLang}
          >
            <Languages size={15} />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            className="navbar__toggle"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {t.nav.links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="/Mateo-Liendo-CV.pdf"
          className="navbar__mobile-cv"
          download
          onClick={() => setOpen(false)}
        >
          {t.nav.downloadCv}
        </a>
      </div>
    </header>
  )
}
