# Wahhaj Malik — Portfolio

A minimal React + Tailwind portfolio, ready for **GitHub Pages** deploy.

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
1. Push this repo to GitHub (ideally as `wahhajmalik.github.io`).
2. Ensure GitHub Pages is using **GitHub Actions**.
3. The workflow at `.github/workflows/pages.yml` builds with Vite and deploys to Pages.
   It also copies `index.html` to `404.html` so SPA routes work.

## Notes
- Update details in `src/App.jsx` (the `DATA` object).
- Your resume PDF lives in `/public/WahhajMalik_resume.pdf` and is linked from the header/buttons.
