import { useLanguage } from '../i18n/useLanguage'
import './Process.css'

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="section">
      <div className="container">
        <h2 className="section-title">{t.process.title}</h2>
        <p className="process__subtitle">{t.process.subtitle}</p>
        <hr className="section-divider" />

        <ol className="process__grid">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="process__step">
              <span className="process__num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
