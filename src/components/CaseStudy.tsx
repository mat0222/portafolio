import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import './CaseStudy.css'

export default function CaseStudy() {
  const { t } = useLanguage()
  const c = t.caseStudy

  return (
    <section className="case section">
      <div className="container case__inner">
        <Link to="/" className="case__back">
          <ArrowLeft size={16} />
          {c.back}
        </Link>

        <header className="case__header">
          <h1>{c.title}</h1>
          <p>{c.subtitle}</p>
        </header>

        <div className="case__hero-media">
          <img src="/projects/fobibike-1.png" alt="FobiBike" />
          <img src="/projects/fobibike-2.png" alt="FobiBike AI" />
          <img src="/projects/fobibike-3.png" alt="FobiBike inventario" />
        </div>

        <div className="case__sections">
          {c.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <div className="case__video">
          <h2>{c.videoTitle}</h2>
          <div className="case__video-box">
            <p>{c.videoPlaceholder}</p>
          </div>
        </div>

        <div className="case__actions">
          <a
            href="https://mat0222.github.io/fobibike/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.ctaDemo}
            <ArrowUpRight size={16} />
          </a>
          <a
            href="https://github.com/mat0222/fobibike"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={16} />
            {c.ctaCode}
          </a>
        </div>
      </div>
    </section>
  )
}
