import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Download, Languages, Search } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import './CommandPalette.css'

type CommandItem = {
  id: string
  group: 'navigate' | 'actions'
  label: string
  hint?: string
  run: () => void
}

export default function CommandPalette() {
  const { t, toggle, lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const isMac =
    typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

  const items = useMemo<CommandItem[]>(() => {
    const navItems = t.nav.links.map((link) => ({
      id: link.href,
      group: 'navigate' as const,
      label: link.label,
      hint: link.href,
      run: () => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
      },
    }))

    const actions: CommandItem[] = [
      {
        id: 'lang',
        group: 'actions',
        label: t.nav.switchLang,
        hint: lang === 'es' ? 'EN' : 'ES',
        run: toggle,
      },
      {
        id: 'cv',
        group: 'actions',
        label: t.nav.downloadCv,
        hint: 'PDF',
        run: () => {
          const a = document.createElement('a')
          a.href = '/Mateo-Liendo-CV.pdf'
          a.download = 'Mateo-Liendo-CV.pdf'
          a.click()
        },
      },
      {
        id: 'contact',
        group: 'actions',
        label: t.hero.ctaContact,
        hint: 'mailto',
        run: () => {
          window.location.href = 'mailto:mateoliendo022@gmail.com'
        },
      },
    ]

    return [...navItems, ...actions]
  }, [t, toggle, lang])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.hint ?? '').toLowerCase().includes(q),
    )
  }, [items, query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!open) {
      setQuery('')
      setActive(0)
      return
    }
    const id = window.setTimeout(() => inputRef.current?.focus(), 10)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(id)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  const runItem = (item: CommandItem) => {
    setOpen(false)
    item.run()
  }

  const onInputKey = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter' && filtered[active]) {
      e.preventDefault()
      runItem(filtered[active])
    }
  }

  return (
    <>
      <button
        type="button"
        className="command-trigger"
        onClick={() => setOpen(true)}
        aria-label={t.command.placeholder}
        title={isMac ? t.command.hintMac : t.command.hint}
      >
        <Search size={14} />
        <span>{isMac ? t.command.hintMac : t.command.hint}</span>
      </button>

      {open && (
        <div className="command" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="command__panel" onClick={(e) => e.stopPropagation()}>
            <div className="command__input-wrap">
              <Search size={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder={t.command.placeholder}
                aria-label={t.command.placeholder}
              />
            </div>

            <div className="command__list">
              {filtered.length === 0 && (
                <p className="command__empty">{t.command.empty}</p>
              )}

              {(['navigate', 'actions'] as const).map((group) => {
                const groupItems = filtered.filter((i) => i.group === group)
                if (groupItems.length === 0) return null
                return (
                  <div key={group} className="command__group">
                    <p className="command__group-title">{t.command.groups[group]}</p>
                    {groupItems.map((item) => {
                      const flatIndex = filtered.indexOf(item)
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`command__item ${
                            flatIndex === active ? 'command__item--active' : ''
                          }`}
                          onMouseEnter={() => setActive(flatIndex)}
                          onClick={() => runItem(item)}
                        >
                          <span className="command__item-label">
                            {item.group === 'actions' && item.id === 'lang' ? (
                              <Languages size={15} />
                            ) : null}
                            {item.group === 'actions' && item.id === 'cv' ? (
                              <Download size={15} />
                            ) : null}
                            {item.label}
                          </span>
                          {item.hint && <span className="command__item-hint">{item.hint}</span>}
                        </button>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
