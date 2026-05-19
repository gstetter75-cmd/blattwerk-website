# BlattWerk e.V. — Cannabis Social Club Hildesheim

## Projekt

- **Stack:** Next.js (App Router, static export), Tailwind v4, Framer Motion, next-intl (DE/EN)
- **GitHub:** gstetter75-cmd/blattwerk-website
- **Live:** https://gstetter75-cmd.github.io/blattwerk-website/
- **Hosting:** GitHub Pages (static export via GitHub Actions)

## Befehle

```bash
npm run dev          # Dev-Server (Next.js)
npm run build        # Build (inkl. Image-Optimierung + Sitemap)
npm run test         # Unit-Tests (Vitest)
npm run test:e2e     # E2E-Tests (Playwright)
npm run lint         # ESLint
```

## Architektur

- App Router mit `[locale]` für i18n (DE/EN via next-intl)
- Static Export für GitHub Pages
- Formulare via react-hook-form + zod Validation
- Bilder: Custom optimize-images.mjs Script im Build
- Sitemap: Custom generate-sitemap.mjs Script im Build

## Design

- **Stil:** Hell, warm, natürlich
- **Fonts:** Lora (Headings), Nunito (Body), Fira Code (Mono)
- **Farben:** Warm-White (#FAFAF7), Forest Green (#2D6A4F), Sand-Töne

## Wichtige Regeln

- Der **Verein** steht im Vordergrund — lebendige, aktive Gemeinschaft, nicht abstraktes Infoportal
- Vereinsstatus korrekt halten: gegründet Mai 2025, Anbaulizenz 18.03.2026
- Im Eventbereich **niemals** Veranstaltungen mit Konsum-Bezug listen
- Mischkonsum wird abgelehnt und auf keiner Veranstaltung geduldet
- Keine Features entfernen ohne explizite Genehmigung
