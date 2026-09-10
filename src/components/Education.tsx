import { Award, GraduationCap } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import './Education.css'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="educacion" className="section education">
      <div className="container">
        <h2 className="section-title">{t.education.title}</h2>
        <hr className="section-divider" />

        <div className="education__grid">
          <div className="education__block">
            <h3 className="education__heading">
              <GraduationCap size={20} strokeWidth={1.75} aria-hidden />
              {t.education.studiesTitle}
            </h3>
            <ul className="education__list">
              {t.education.studies.map((item) => (
                <li key={item.title} className="education__item">
                  <div className="education__item-top">
                    <h4>{item.title}</h4>
                    <span className="education__status">{item.status}</span>
                  </div>
                  <p className="education__institution">{item.institution}</p>
                  <p className="education__detail">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="education__block">
            <h3 className="education__heading">
              <Award size={20} strokeWidth={1.75} aria-hidden />
              {t.education.certsTitle}
            </h3>
            <ul className="education__list">
              {t.education.certs.map((item) => (
                <li key={item.title} className="education__item education__item--cert">
                  <div className="education__item-top">
                    <h4>{item.title}</h4>
                    <span className="education__issuer">{item.issuer}</span>
                  </div>
                  <p className="education__detail">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
