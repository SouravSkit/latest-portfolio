# Sourav Kumar — Portfolio

A polished single-page portfolio built with **React + Vite**, generated from the CV in `Sk_CV.pdf`.

## Features

- Hero with typewriter role, animated stats and a code-card visual
- About, Experience timeline, Projects grid, Skills, Achievements, Certifications, Education and Contact sections
- Dark / light theme toggle (persisted in localStorage, no flash on load)
- Scroll-reveal animations, scrollspy navbar, mobile menu, back-to-top button
- Responsive down to small phones; respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev      # development server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data.js              # All CV content (edit this to update the site)
  App.jsx              # Section composition + theme state
  index.css            # Global styles, themes, animations
  components/          # Navbar, Hero, About, Experience, Projects,
                       # Skills, Certifications, Achievements, Education,
                       # Contact, Footer, BackToTop, Reveal, SectionTitle
```

> Note: the "Kushals Fashion & Jewellery" job bullets in the original PDF were
> unreadable (custom font encoding), so `src/data.js` contains conservative
> placeholders for that role — replace them with your actual responsibilities.
