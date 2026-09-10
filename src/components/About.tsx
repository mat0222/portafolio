import { useLanguage } from '../i18n/useLanguage'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <hr className="section-divider" />
        <p style={{ color: 'var(--text-muted)', maxWidth: '48rem', fontSize: '1.05rem' }}>
          {t.about.text}
        </p>
      </div>
    </section>
  )
}
