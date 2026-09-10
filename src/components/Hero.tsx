import { useLanguage } from '../i18n/useLanguage'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__badge reveal">{t.nav.available}</p>
          <h1 className="hero__title reveal reveal-delay-1">
            {t.hero.titleA}
            <span className="hero__title-sep"> | </span>
            {t.hero.titleB}
          </h1>
          <p className="hero__text reveal reveal-delay-2">{t.hero.text}</p>
          <div className="hero__actions reveal reveal-delay-3">
            <a href="#proyectos" className="btn btn-primary">
              {t.hero.cta}
            </a>
            <a href="/Mateo-Liendo-CV.pdf" className="btn btn-secondary" download>
              {t.hero.ctaCv}
            </a>
            <a href="#contacto" className="btn btn-secondary">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="hero__media reveal reveal-delay-1">
          <img
            src="/sobre-mi.png"
            alt="Mateo Liendo"
            className="hero__photo"
            width={480}
            height={480}
          />
        </div>
      </div>
    </section>
  )
}
