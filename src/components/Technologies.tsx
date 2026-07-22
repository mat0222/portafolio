import {
  Atom,
  Wind,
  GitBranch,
  Container,
  Server,
  Code,
  Braces,
  FileCode,
  Palette,
  Terminal,
  Smartphone,
  Database,
  Zap,
  Flame,
  Send,
  Globe,
  Cloud,
  type LucideIcon,
} from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import './Technologies.css'

type TechItem = { name: string; icon: LucideIcon }

const columns: TechItem[][] = [
  [
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Palette },
    { name: 'JavaScript', icon: Braces },
    { name: 'TypeScript', icon: FileCode },
    { name: 'React', icon: Atom },
    { name: 'Tailwind CSS', icon: Wind },
  ],
  [
    { name: 'Node.js', icon: Server },
    { name: 'PHP', icon: Globe },
    { name: 'Kotlin', icon: Smartphone },
    { name: 'Visual Basic', icon: Terminal },
  ],
  [
    { name: 'PostgreSQL', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'SQL Server', icon: Database },
    { name: 'Supabase', icon: Zap },
    { name: 'Firebase', icon: Flame },
  ],
  [
    { name: 'Docker', icon: Container },
    { name: 'Git', icon: GitBranch },
    { name: 'Postman', icon: Send },
    { name: 'Apache', icon: Server },
    { name: 'AWS', icon: Cloud },
  ],
]

export default function Technologies() {
  const { t } = useLanguage()

  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2 className="section-title">{t.tech.title}</h2>
        <hr className="section-divider" />

        <div className="tech__grid">
          {columns.map((items, index) => (
            <div key={t.tech.columns[index]} className="tech__column">
              <h3 className="tech__column-title">{t.tech.columns[index]}</h3>
              <ul className="tech__list">
                {items.map((item) => (
                  <li key={item.name} className="tech__item">
                    <item.icon size={18} strokeWidth={1.75} aria-hidden />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
