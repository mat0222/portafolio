import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext } from './context'
import { translations, type Language } from './translations'

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((current) => (current === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
