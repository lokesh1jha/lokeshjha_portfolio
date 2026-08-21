# Lokesh Jha - Co-Founder & CEO, GetCollab

A modern, bold, mobile-first portfolio for **Lokesh Jha**, Co-Founder & CEO of [GetCollab](https://www.getcollab.in) - a global creator marketplace connecting brands with creators.

![Stack](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Highlights

- **Single-page founder landing**: Hero, Stats, About, GetCollab band, Background, Journey, Contact
- **Brand identity**: GetCollab brand blue `#27beff`, warm off-white background, premium light/dark themes
- **Bold typography**: Fluid display sizes with CalSans headings + Inter body
- **Mobile-first**: Sticky glass nav, full-screen mobile menu, 44px+ touch targets, floating stat chips
- **Animations**: Framer Motion scroll reveals, floating badges, gradient accents
- **Contact form**: Zod-validated form wired to the existing `/api/contact` route (Nodemailer)
- **SEO**: Structured data (Person schema), meta tags, sitemap, manifest

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, server components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + shadcn-style UI primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Analytics**: Vercel Analytics
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

## 📝 Customizing Content

Almost all site copy lives in one file:

- `config/founder.ts`: hero, stats, about, GetCollab band, background skills, journey timeline, contact details
- `config/site.ts`: name, description, keywords, links
- `config/socials.ts`: social links

Swap `public/profile-img.jpg` for your photo and `public/logo.png` for your GetCollab logo (used as favicon).

## 📧 Email Setup

The contact form posts to `app/api/contact/route.ts`, which sends mail via Nodemailer. Configure `EMAIL_USER`, `EMAIL_PASS` (and optional `EMAIL_HOST`/`EMAIL_PORT`/`EMAIL_SECURE`/`EMAIL_SERVICE`) in `.env.local`. See `EMAIL_SETUP.md` for details.

## 📄 License

[MIT](./LICENSE)
