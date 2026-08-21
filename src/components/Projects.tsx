import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, X } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import './Projects.css'

type ProjectMeta = {
  images: string[]
  tags: string[]
  demo?: string
  code?: string
}

const projectMeta: ProjectMeta[] = [
  {
    images: [
      '/projects/fenix-1.png',
      '/projects/fenix-2.png',
      '/projects/fenix-3.png',
    ],
    tags: ['Landing', 'Eventos', 'UI', 'Netlify'],
    demo: 'https://fenixclub.netlify.app/',
    code: 'https://github.com/mat0222/fenix',
  },
  {
    images: [
      '/projects/mobihouse-1.png',
      '/projects/mobihouse-2.png',
      '/projects/mobihouse-3.png',
    ],
    tags: ['React', 'Tailwind', 'Leaflet', 'Maps'],
    demo: 'https://mat0222.github.io/mobihouse/',
    code: 'https://github.com/mat0222/mobihouse',
  },
  {
    images: [
      '/projects/fobibike-1.png',
      '/projects/fobibike-2.png',
      '/projects/fobibike-3.png',
    ],
    tags: ['React', 'Dashboard', 'IA / Groq', 'Inventario'],
    demo: 'https://mat0222.github.io/fobibike/',
    code: 'https://github.com/mat0222/fobibike',
  },
  {
    images: [
      '/projects/matchear-1.png',
      '/projects/matchear-2.png',
      '/projects/matchear-3.png',
    ],
    tags: ['React', 'Reservas', 'UX', 'Torneos'],
    demo: 'matchear.netlify.app',
    code: 'https://github.com/mat0222/matchear',
  },
]

type LightboxState = { project: number; image: number }

export default function Projects() {
  const { t } = useLanguage()
  const [activeImages, setActiveImages] = useState<number[]>(() =>
    projectMeta.map(() => 0),
  )
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lightbox) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null)
        return
      }

      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return

      const delta = e.key === 'ArrowLeft' ? -1 : 1
      setLightbox((current) => {
        if (!current) return current
        const total = projectMeta[current.project].images.length
        const next = (current.image + delta + total) % total
        setActiveImages((prev) => {
          const copy = [...prev]
          copy[current.project] = next
          return copy
        })
        return { ...current, image: next }
      })
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  useEffect(() => {
    const root = listRef.current
    if (!root) return

    const items = root.querySelectorAll('.project-case')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-case--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [t.projects.items])

  const projects = t.projects.items.map((item, index) => ({
    ...item,
    ...projectMeta[index],
  }))

  const setActive = (projectIndex: number, imageIndex: number) => {
    setActiveImages((prev) => {
      const next = [...prev]
      next[projectIndex] = imageIndex
      return next
    })
  }

  const openLightbox = (projectIndex: number, imageIndex?: number) => {
    setLightbox({
      project: projectIndex,
      image: imageIndex ?? activeImages[projectIndex] ?? 0,
    })
  }

  const stepLightbox = (delta: number) => {
    setLightbox((current) => {
      if (!current) return current
      const total = projectMeta[current.project].images.length
      const next = (current.image + delta + total) % total
      setActive(current.project, next)
      return { ...current, image: next }
    })
  }

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <header className="projects__header">
          <div>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="projects__subtitle">{t.projects.subtitle}</p>
          </div>
          <span className="projects__count">{String(projects.length).padStart(2, '0')}</span>
        </header>
        <hr className="section-divider" />

        <div className="projects__list" ref={listRef}>
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, '0')
            const reversed = index % 2 === 1
            const active = activeImages[index] ?? 0

            return (
              <article
                key={project.title}
                className={`project-case ${reversed ? 'project-case--reverse' : ''}`}
              >
                <div className="project-case__gallery">
                  <button
                    type="button"
                    className="project-case__media"
                    onClick={() => openLightbox(index)}
                    aria-label={`${t.projects.viewImage} ${project.title}`}
                  >
                    <img
                      src={project.images[active]}
                      alt={`${t.projects.previewOf} ${project.title}`}
                      loading="lazy"
                    />
                    <span className="project-case__media-glow" aria-hidden />
                    <span className="project-case__media-hint">
                      {t.projects.zoom} · {active + 1}/{project.images.length}
                    </span>
                  </button>

                  <div className="project-case__thumbs" role="group" aria-label={t.projects.gallery}>
                    {project.images.map((src, imageIndex) => (
                      <button
                        key={src}
                        type="button"
                        className={`project-case__thumb ${
                          imageIndex === active ? 'project-case__thumb--active' : ''
                        }`}
                        onClick={() => setActive(index, imageIndex)}
                        onDoubleClick={() => openLightbox(index, imageIndex)}
                        aria-label={`${t.projects.previewOf} ${project.title} ${imageIndex + 1}`}
                        aria-pressed={imageIndex === active}
                      >
                        <img src={src} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="project-case__content">
                  <div className="project-case__meta">
                    <span className="project-case__index">{number}</span>
                    <ul className="project-case__tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="project-case__title">{project.title}</h3>

                  <div className="project-case__story">
                    <div className="project-case__step project-case__step--problem">
                      <span>{t.projects.problem}</span>
                      <p>{project.problem}</p>
                    </div>
                    <div className="project-case__step project-case__step--solution">
                      <span>{t.projects.solution}</span>
                      <p>{project.solution}</p>
                    </div>
                    <div className="project-case__step project-case__step--impact">
                      <span>{t.projects.impact}</span>
                      <p>{project.impact}</p>
                    </div>
                  </div>

                  <div className="project-case__actions">
                    <a
                      href={project.demo}
                      className="btn btn-primary"
                      {...(project.demo?.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {t.projects.viewProject}
                      <ArrowUpRight size={16} />
                    </a>
                    <a href={project.code} className="btn btn-secondary">
                      <Code2 size={16} />
                      {t.projects.viewCode}
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.projects.imageOf} ${projects[lightbox.project].title}`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label={t.projects.closeImage}
            onClick={() => setLightbox(null)}
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label={t.projects.prevImage}
            onClick={(e) => {
              e.stopPropagation()
              stepLightbox(-1)
            }}
          >
            <ArrowLeft size={22} />
          </button>

          <figure className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[lightbox.project].images[lightbox.image]}
              alt={`${t.projects.previewOf} ${projects[lightbox.project].title}`}
            />
            <figcaption>
              {projects[lightbox.project].title} · {lightbox.image + 1}/
              {projects[lightbox.project].images.length}
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label={t.projects.nextImage}
            onClick={(e) => {
              e.stopPropagation()
              stepLightbox(1)
            }}
          >
            <ArrowRight size={22} />
          </button>
        </div>
      )}
    </section>
  )
}
