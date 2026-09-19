# Japan Ambition Training Center

Frontend for Japan Ambition Training Center — a Japanese language institute in
Khilkhet, Dhaka. Built with Next.js (App Router), Tailwind CSS, Ant Design and
Framer Motion.

## Requirements

- Node.js 20+
- npm

## Running the site

Everything runs on **port 2002**.

```bash
npm install

# development (hot reload)
npm run dev          # http://localhost:2002

# production
npm run build
npm start            # http://localhost:2002
```

To run production on a different port, override it directly:

```bash
npx next start -p 3000
```

Lint with `npm run lint`.

### Deploying behind a process manager

`npm start` runs `next start -p 2002`. With PM2, for example:

```bash
npm run build
pm2 start npm --name jatc -- start
```

Put Nginx (or similar) in front to terminate TLS and proxy to `127.0.0.1:2002`.

## Project layout

```
src/app/
├── layout.js              # fonts, metadata, providers, global chrome
├── providers.jsx          # Ant Design SSR registry + brand theme tokens
├── globals.css            # design tokens, button/card/heading primitives
├── page.js                # home page composition
├── data/                  # notices, blog posts, JLPT question banks
└── components/
    ├── motion/            # Reveal, Stagger, CountUp — animation primitives
    ├── ui/                # PageHero, SectionHeading, BackToTop, …
    ├── Header/            # navigation data, desktop menu, mobile drawer, search
    └── …                  # page sections
```

### Conventions

- **Navigation** lives in `src/app/components/Header/navigation.js`. Add a page
  there and it appears in the desktop menu, the mobile drawer and the search
  overlay at once.
- **Animations** use the primitives in `components/motion/`. They all respect
  `prefers-reduced-motion`.
- **Brand colours** are Tailwind tokens (`brand`, `ink`, `sun`, `sky`) defined in
  `tailwind.config.js` and mirrored into Ant Design via `providers.jsx`.
- **Images** in `public/` are compressed to max 2400px wide. Keep new uploads
  under ~500 KB — the source photos were originally 5–14 MB each.

## Known gaps

- The contact form and newsletter have no backend. The contact form opens the
  visitor's mail client; the newsletter only acknowledges locally.
- Student results and ID verification read from demo objects in
  `components/Student/`, not a real API.
- Blog posts are placeholder content in `src/app/data/blogPosts.js`.
