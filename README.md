# 👨🏻‍💻 Portfolio de Nahuel Soria Parodi

<div align="center">
<a href="https://portfolionahuelsoriaparodi.netlify.app/"></a>
</div>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-FF3E00?logo=astro&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)

</div>

Portfolio personal de **Nahuel Soria Parodi**, Desarrollador FullStack con más de 4 años de experiencia en React, TypeScript, Next.js y Laravel. El sitio muestra experiencia profesional, proyectos destacados y formas de contacto.

🔗 **Demo:** [Portfolio Nahuel Soria Parodi](https://portfolionahuelsoriaparodi.netlify.app//)

## 📋 Contenido

- Hero con disponibilidad laboral y enlaces de contacto
- Experiencia laboral con timeline
- Proyectos destacados con stack tecnológico
- Sección "Sobre mí" con stats y skills agrupadas por categoría
- Soporte de dark mode

## 🚀 Stack

- [Astro](https://astro.build) — framework principal
- [Tailwind CSS](https://tailwindcss.com) — estilos
- TypeScript

## 📁 Estructura del proyecto

```
src/
├── components/   # Componentes Astro (Hero, Projects, ContactForm, toggles, etc.)
├── data/         # Contenido por idioma (es/, en/), site.ts (datos personales) e index.ts (acceso tipado)
├── i18n/         # Textos de la interfaz y helpers de idioma
├── layouts/      # Layout base: SEO, hreflang, Open Graph, tema claro/oscuro
├── pages/        # [...lang].astro (home es/en) y [...lang]/projects/[slug].astro
└── styles/       # global.css (Tailwind 4 + animaciones)
```

- Los textos de experiencia, proyectos y skills se editan en `src/data/{es,en}/*.json`.
- Datos personales (email, redes, URL del sitio) en `src/data/site.ts`.
- **Casos de estudio:** agregá `problem`, `decision` y/o `result` a un proyecto en ambos idiomas y se genera automáticamente `/projects/<slug>` (y `/en/projects/<slug>`). Sin esos campos no se crea la página.
- **Capturas:** completá `media` (`{ src, alt }`) de cada proyecto.
- **Tema:** claro/oscuro con toggle; respeta `prefers-color-scheme` y guarda la elección en `localStorage`.
- **Formulario de contacto:** usa Netlify Forms (se detecta en el deploy; activá las notificaciones en el panel de Netlify).
- **Analítica (opcional):** definí `PUBLIC_PLAUSIBLE_DOMAIN` para cargar Plausible; las descargas de CV se registran como evento `CV Download`.
- **Imagen social:** `npm run og` regenera `public/og-image.png`.

## 🧑‍💻 Desarrollo local

```bash
npm install
npm run dev
```

El sitio quedará disponible en `http://localhost:4321`.

## 📦 Build

```bash
npm run build
npm run preview
```

## 📬 Contacto

- LinkedIn: [linkedin.com/in/nahuelsoriaparodi](https://linkedin.com/in/nahuelsoriaparodi)
- GitHub: [github.com/Nahuewe](https://github.com/Nahuewe)
- Email: nahuelsoriap@gmail.com
