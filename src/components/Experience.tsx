import { useLanguage } from '../i18n/useLanguage'
import './Experience.css'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <hr className="section-divider" />

        <article className="experience__item">
          <h3 className="experience__role">{t.experience.role}</h3>
          <p className="experience__summary">{t.experience.summary}</p>
          <ul className="experience__list">
            {t.experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
