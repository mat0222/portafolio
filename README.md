# Mateo Liendo — Portfolio

Portfolio personal de desarrollador web full stack, enfocado en performance, arquitectura limpia y experiencia de usuario.

**Repositorio:** [github.com/mat0222/portafolio](https://github.com/mat0222/portafolio)

---

## Stack

| Tecnología | Uso |
|---|---|
| React 19 | UI |
| TypeScript | Tipado estático |
| Vite 7 | Build y dev server |
| Lucide React | Iconografía |
| CSS Modules / CSS propio | Estilos por sección |

Sin frameworks de UI pesados: diseño custom con variables CSS y tipografía Manrope.

---

## Secciones

- **Hero** — Presentación y CTA a proyectos
- **Sobre mí** — Perfil profesional
- **Experiencia** — NexoSync y casos destacados (p. ej. FobiBike)
- **Tecnologías** — Frontend, backend, bases de datos y DevOps
- **Proyectos** — Casos reales (problema → solución → impacto) con galería y lightbox
- **Contacto** — LinkedIn, email y GitHub

Incluye **i18n ES / EN** con cambio de idioma desde la navbar.

---

## Requisitos

- Node.js 18+ (recomendado LTS)
- npm

---

## Cómo ejecutar

```bash
# Clonar
git clone https://github.com/mat0222/portafolio.git
cd portafolio

# Instalar dependencias
npm install

# Desarrollo (HMR)
npm run dev

# Build de producción
npm run build

# Previsualizar el build
npm run preview

# Lint
npm run lint
```

---

## Estructura

```
src/
├── components/     # Hero, About, Experience, Technologies, Projects, Contact, Navbar
├── i18n/           # Traducciones ES/EN y LanguageProvider
├── App.tsx
├── main.tsx
└── index.css       # Tokens de color, tipografía y utilidades globales
public/
├── favicon.svg
└── projects/       # Assets de proyectos
```

---

## Personalización rápida

| Qué | Dónde |
|---|---|
| Textos ES/EN | `src/i18n/translations.ts` |
| Proyectos y enlaces | `src/components/Projects.tsx` + traducciones |
| Colores / tema | `src/index.css` (`--accent`, `--bg`, etc.) |
| Meta título / SEO | `index.html` |
| Favicon | `public/favicon.svg` |

---

## Licencia

Uso personal. El código del portfolio es de Mateo Liendo.
