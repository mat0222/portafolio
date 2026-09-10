import { Download, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import './Contact.css'

function LinkedInIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18c-4.51 2-5-2-7-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const contacts = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mateo-liendo02/',
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: 'mateoliendo022@gmail.com',
    href: 'mailto:mateoliendo022@gmail.com',
    icon: <Mail size={36} strokeWidth={1.5} />,
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mat0222',
    icon: <GitHubIcon />,
    external: true,
  },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <hr className="section-divider" />

        <p className="contact__available">{t.contact.available}</p>

        <div className="contact__links">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact__item"
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="contact__ctas">
          <a href="mailto:mateoliendo022@gmail.com" className="btn btn-primary">
            <Mail size={16} />
            {t.contact.writeMe}
          </a>
          <a
            href="https://wa.me/5493573414204"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            {t.contact.whatsapp}
          </a>
          <a href="/Mateo-Liendo-CV.pdf" className="btn btn-secondary" download>
            <Download size={16} />
            {t.contact.downloadCv}
          </a>
        </div>

        <p className="contact__note">{t.contact.note}</p>
      </div>
    </section>
  )
}
