import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, X } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import './Projects.css'

type ProjectMeta = {
  images: string[]
  tags: string[]
  filters: string[]
  featured?: boolean
  estimated?: boolean
  demo?: string
  code?: string
}

const projectMeta: ProjectMeta[] = [
  {
    images: [
      '/projects/fobibike-1.png',
      '/projects/fobibike-2.png',
      '/projects/fobibike-3.png',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'IA / Groq'],
    filters: ['PHP', 'Dashboard', 'Cliente real'],
    featured: true,
    demo: 'https://mat0222.github.io/fobibike/',
    code: 'https://github.com/mat0222/fobibike',
  },
  {
    images: [
      '/projects/matchear-1.png',
      '/projects/matchear-2.png',
      '/projects/matchear-3.png',
    ],
    tags: ['React', 'Firebase', 'Tailwind', 'Reservas'],
    filters: ['React', 'Firebase'],
    featured: true,
    estimated: true,
    demo: 'https://matchear.netlify.app',
    code: 'https://github.com/mat0222/matchear',
  },
  {
    images: [
      '/projects/ferrohogar-1.jpg',
      '/projects/ferrohogar-2.png',
      '/projects/ferrohogar-3.png',
    ],
    tags: ['React', 'E-commerce', 'Admin'],
    filters: ['React', 'Dashboard'],
    featured: true,
    demo: 'https://mat0222.github.io/ferrohogar/',
    code: 'https://github.com/mat0222/ferrohogar',
  },
  {
    images: [
      '/projects/mobihouse-1.png',
      '/projects/mobihouse-2.png',
      '/projects/mobihouse-3.png',
    ],
    tags: ['React', 'Tailwind', 'Leaflet'],
    filters: ['React'],
    estimated: true,
    demo: 'https://mat0222.github.io/mobihouse/',
    code: 'https://github.com/mat0222/mobihouse',
  },
  {
    images: [
      '/projects/ironcore-1.jpg',
      '/projects/ironcore-2.png',
      '/projects/ironcore-3.png',
    ],
    tags: ['React', 'Landing', 'Dashboard'],
    filters: ['React', 'Dashboard', 'Landing'],
    demo: 'https://mat0222.github.io/ironcore/',
    code: 'https://github.com/mat0222/ironcore',
  },
  {
    images: [
      '/projects/fenix-1.png',
      '/projects/fenix-2.png',
      '/projects/fenix-3.png',
    ],
    tags: ['Landing', 'UI', 'Netlify'],
    filters: ['Landing'],
    estimated: true,
    demo: 'https://fenixclub.netlify.app/',
    code: 'https://github.com/mat0222/fenix',
  },
]

const FILTERS = ['React', 'PHP', 'Firebase', 'Dashboard', 'Landing', 'Cliente real'] as const

type LightboxState = { project: number; image: number }

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<string>('all')
  const [activeImages, setActiveImages] = useState<number[]>(() =>
    projectMeta.map(() => 0),
  )
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const projects = useMemo(
    () =>
      t.projects.items.map((item, index) => ({
        ...item,
        ...projectMeta[index],
        index,
      })),
    [t.projects.items],
  )

  const visible = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.filters.includes(filter))
  }, [filter, projects])

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
    items.forEach((item) => item.classList.remove('project-case--visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-case--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [visible, t.projects.items])

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
          <span className="projects__count">{String(visible.length).padStart(2, '0')}</span>
        </header>
        <hr className="section-divider" />

        <div className="projects__filters" role="toolbar" aria-label={t.projects.title}>
          <button
            type="button"
            className={`projects__filter ${filter === 'all' ? 'projects__filter--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t.projects.filterAll}
          </button>
          {FILTERS.map((name) => (
            <button
              key={name}
              type="button"
              className={`projects__filter ${filter === name ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="projects__empty">{t.projects.emptyFilter}</p>
        ) : (
          <div className="projects__list" ref={listRef}>
            {visible.map((project) => {
              const number = String(project.index + 1).padStart(2, '0')
              const reversed = project.index % 2 === 1
              const active = activeImages[project.index] ?? 0
              const compact = !project.featured && filter === 'all'

              return (
                <article
                  key={project.title}
                  className={`project-case ${reversed ? 'project-case--reverse' : ''} ${
                    compact ? 'project-case--compact' : ''
                  } ${project.featured ? 'project-case--featured' : ''}`}
                >
                  <div className="project-case__gallery">
                    <button
                      type="button"
                      className="project-case__media"
                      onClick={() => openLightbox(project.index)}
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
                          onClick={() => setActive(project.index, imageIndex)}
                          onDoubleClick={() => openLightbox(project.index, imageIndex)}
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
                      {project.featured && (
                        <span className="project-case__featured">{t.projects.featured}</span>
                      )}
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
                        <span>
                          {t.projects.impact}
                          {project.estimated
                            ? ` · ${t.projects.estimated}`
                            : project.filters.includes('Cliente real')
                              ? ` · ${t.projects.production}`
                              : ''}
                        </span>
                        <p>{project.impact}</p>
                      </div>
                    </div>

                    <div className="project-case__actions">
                      <a
                        href={project.demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.viewProject}
                        <ArrowUpRight size={16} />
                      </a>
                      <a
                        href={project.code}
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code2 size={16} />
                        {t.projects.viewCode}
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
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
