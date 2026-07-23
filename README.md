# Vaishnavi Bhagwat — Portfolio

A modern, responsive, and dark-mode-ready personal portfolio website built with **React (Vite)** and **Tailwind CSS**. It includes a sticky navigation bar, scroll-reveal animations, project details modals, and a one-click resume PDF generator powered by `react-pdf`.

## Features

- **Responsive single-page layout** — Hero, About, Education, Experience, Projects, Research, Certifications, Skills, Contact/Footer.
- **Dark mode toggle** — persisted in `localStorage`.
- **Sticky navbar with smooth scroll** — highlights the active section as you scroll.
- **Timeline layout** for Education and Experience.
- **Project cards** with tech-stack badges and expandable detail modals.
- **Resume PDF download** — generates a clean one-page resume from the same data used on the site.
- **SEO meta tags** and a custom favicon.
- **Deploy-ready configs** for both **Vercel** and **Netlify** included.

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion (scroll animations)
- Lucide React (icons)
- react-pdf (resume generation)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The static files are output to the `dist` directory.

### Preview the production build

```bash
npm run build
npm run preview
```

## Project Structure

```
vaishnavi-portfolio/
├── index.html
├── netlify.toml
├── vercel.json
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── profile.js          # all portfolio content
    ├── hooks/
    │   └── useTheme.js         # dark mode logic
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Education.jsx
        ├── Experience.jsx
        ├── Timeline.jsx
        ├── Projects.jsx
        ├── Research.jsx
        ├── Certifications.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── ResumeDownload.jsx  # resume button
        ├── ResumePDF.jsx       # react-pdf layout
        ├── ScrollReveal.jsx
        ├── SectionTitle.jsx
        └── ThemeToggle.jsx
```

## Pre-deployment Check

Before pushing, make sure the production build succeeds locally:

```bash
npm run build
```

The output is written to `dist/`. If this passes with no errors, the Vercel build will work the same way.

## Deployment

### 1. Push to GitHub (exact commands)

Make sure [Git](https://git-scm.com/downloads) is installed, then run these commands from the project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

If you prefer SSH, use `git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git` for the remote URL.

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New Project → Import Git Repository**.
3. Select your GitHub repository.
4. Vercel will auto-detect Vite. The settings in `vercel.json` already configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**.

The `vercel.json` `rewrites` rule ensures SPA routes (refreshing on `/certifications`, etc.) do not 404.

### Deploy to Netlify

1. Push the project to a Git repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repo and use the following settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. The `netlify.toml` already configures these values.

### Deploy static files manually

After running `npm run build`, upload the contents of the `dist` folder to any static host.

## Customization

All content is centralized in `src/data/profile.js`. Update that file to change:

- Personal info, contact links, social URLs
- Education and Experience
- Projects, certifications, research, and skills

The resume PDF will automatically reflect those changes.

## Notes

- The contact form currently uses a `mailto:` link so it works without a backend. To use a form endpoint like Formspree, replace the `handleSubmit` function in `src/components/Contact.jsx` with your own POST request.
- Update the `linkedin` and `github` URLs in `src/data/profile.js` to your real profiles.
