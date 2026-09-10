import { ArrowUpRight, Code2, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import './FeaturedCase.css'

export default function FeaturedCase() {
  const { t } = useLanguage()
  const f = t.featured

  return (
    <section id={f.id} className="section featured">
      <div className="container">
        <div className="featured__panel">
          <div className="featured__media">
            <img
              src="/projects/fobibike-3.png"
              alt={f.title}
              loading="lazy"
            />
          </div>

          <div className="featured__content">
            <p className="featured__eyebrow">{f.eyebrow}</p>
            <h2 className="featured__title">{f.title}</h2>
            <p className="featured__note">{f.note}</p>

            <div className="featured__story">
              <div>
                <span>{f.problemLabel}</span>
                <p>{f.problem}</p>
              </div>
              <div>
                <span>{f.solutionLabel}</span>
                <p>{f.solution}</p>
              </div>
            </div>

            <p className="featured__impact-label">{f.impactLabel}</p>
            <ul className="featured__kpis">
              {f.kpis.map((kpi) => (
                <li key={kpi.label}>
                  <strong>{kpi.value}</strong>
                  <span>{kpi.label}</span>
                </li>
              ))}
            </ul>

            <ul className="featured__stack">
              {f.stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="featured__actions">
              <a
                href="https://mat0222.github.io/fobibike/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {f.ctaDemo}
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/mat0222/fobibike"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={16} />
                {f.ctaCode}
              </a>
              <Link to="/fobibike" className="btn btn-secondary">
                <FileText size={16} />
                {f.ctaCase}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
