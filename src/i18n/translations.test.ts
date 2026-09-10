import { describe, expect, it } from 'vitest'
import { translations } from './translations'

describe('portfolio i18n', () => {
  it('keeps ES and EN project counts aligned', () => {
    expect(translations.es.projects.items).toHaveLength(translations.en.projects.items.length)
  })

  it('features FobiBike as the hiring anchor', () => {
    expect(translations.es.featured.title.toLowerCase()).toContain('fobibike')
    expect(translations.en.featured.title.toLowerCase()).toContain('fobibike')
  })

  it('exposes a case study narrative', () => {
    expect(translations.es.caseStudy.sections.length).toBeGreaterThanOrEqual(4)
  })
})
