# Notes & Code

A content-first website built with **Astro**, deployed to GitHub Pages. It shares notes,
data-analysis experiments, and interactive code  everything is static and runs in the browser.

Features: Markdown / MDX notes & docs, in-browser Python data analysis (Pyodide), a photo gallery,
and a light/dark theme.

## Tech stack

- **Astro** (`output: 'static'`, static `dist/`)
- **@astrojs/mdx**  notes & docs written in Markdown
- **Pyodide**  runs Python (numpy / matplotlib) in the browser, no server
- GitHub Actions builds and deploys to GitHub Pages

## Project structure

```
src/
  layouts/Base.astro        # page shell (header / nav / footer / theme)
  components/
    Nav.astro               # navigation + theme toggle
    Footer.astro
    PyodideRunner.astro     # interactive Python runner
    PhotoGallery.astro      # photo gallery + lightbox
  pages/
    index.astro             # home (hero + features + latest notes + Python demo)
    about.astro             # about this site
    analysis/index.astro    # data analysis (Pyodide examples)
    photos.astro            # photos
    notes/                  # notes (.mdx)
    docs/                   # docs (.mdx)
    404.astro
  styles/global.css         # theme (light/dark, accents, cards, hero)
public/favicon.svg
```

## Local preview

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Adding content

- **Notes**: create `xxx.mdx` in `src/pages/notes/` with `title` / `date` frontmatter; it appears on the home and /notes pages automatically.
- **Docs**: create `xxx.mdx` in `src/pages/docs/`.
- **Photos**: drop images (jpg / png / webp) into `src/assets/photos/`; they build into the gallery automatically.
- **Analysis**: create a page under `src/pages/analysis/` and use `<PyodideRunner code={...} />`.

## Deployment

Pushing to `main` triggers Actions: `npm ci`  `npm run build`  upload `dist/`  publish to GitHub Pages.
