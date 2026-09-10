# Personal Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## How to update the content

Almost everything on the site (name, bio, education, work experience, projects, skills,
social links, email) lives in a single file:

```
content/site-data.ts
```

Edit the values there — no other file needs to change. Every placeholder value is
marked with a `// PLACEHOLDER` comment.

### Files to replace

| File | Purpose |
| --- | --- |
| `public/resume.pdf` | The file downloaded by the "Resume" button. Replace with your real resume, keeping the filename `resume.pdf`. |
| `public/og-image.png` | Social-share preview image (1200×630), shown when the site link is shared on LinkedIn/Twitter/Slack/etc. |
| `src/app/favicon.ico` | Browser tab icon. |

### Sections

Each section of the page is its own component under `src/components/sections/`
(Hero, About, Education, Experience, Projects, Skills, Contact). `src/app/page.tsx`
just stacks them in order — reorder sections there if you want a different layout.

## Tech stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first config — design tokens/colors live in `src/app/globals.css`)
- No other runtime dependencies — the contact "form" is a `mailto:` link and the
  resume button is a plain `<a download>`, so there's no backend, API keys, or
  third-party service to maintain.
