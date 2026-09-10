import { useLanguage } from '../i18n/useLanguage'
import './Experience.css'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <hr className="section-divider" />

        <div className="experience__layout">
          <div className="experience__roles">
            {t.experience.items.map((item) => (
              <article key={item.role} className="experience__item">
                <div className="experience__item-top">
                  <h3 className="experience__role">{item.role}</h3>
                  <span className="experience__period">{item.period}</span>
                </div>
                <p className="experience__location">{item.location}</p>
                <p className="experience__summary">{item.summary}</p>
                <ul className="experience__list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="experience__milestones">
            <h3 className="experience__milestones-title">{t.experience.milestonesTitle}</h3>
            <ol className="experience__timeline">
              {t.experience.milestones.map((m) => (
                <li key={`${m.year}-${m.label}`}>
                  <span className="experience__timeline-year">{m.year}</span>
                  <span className="experience__timeline-label">{m.label}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}
