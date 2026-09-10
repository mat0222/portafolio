import { useLanguage } from '../i18n/useLanguage'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1 className="hero__title reveal">
            {t.hero.titleA}
            <span className="hero__title-sep"> | </span>
            {t.hero.titleB}
          </h1>
          <p className="hero__text reveal reveal-delay-1">{t.hero.text}</p>
          <a href="#proyectos" className="btn btn-primary reveal reveal-delay-2">
            {t.hero.cta}
          </a>
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
