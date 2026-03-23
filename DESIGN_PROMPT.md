# Blattwerk — Design Prompt: Future Nature

Du bist ein erstklassiger UI/UX Designer und Frontend-Entwickler.
Redesigne die Blattwerk Cannabis Club Website komplett neu nach den folgenden Spezifikationen.
Halte dich exakt an die Phasen-Reihenfolge. Beginne nichts aus Phase 2+, bevor Phase 1 abgeschlossen ist.

---

## Vision: "Future Nature"

Organische Formen treffen auf Tech-Ästhetik. Die Seite soll beim ersten Besuch sofort
**Exklusivität** ausstrahlen — wie ein Premium-Mitgliederclub, nicht wie ein normaler Verein.
Denk Highend-Parfüm trifft Botanik trifft Silicon Valley.

Kein Cannabis-Klischee. Kein grünes Blatt-Logo. Subtil, edel, modern.

---

## Tech Stack (beibehalten)

- Next.js 14 App Router
- TypeScript
- Tailwind CSS (komplett neue Design-Tokens)
- next-intl (DE/EN Internationalisierung)
- Lucide React Icons
- **NEU:** Framer Motion, shadcn/ui, next-themes

---

## Phase 1 — Foundation

### 1.1 shadcn/ui initialisieren

```bash
npx shadcn@latest init
```

- Style: `default`
- Base color: `neutral`
- CSS variables: `yes`
- Danach alle Design-Tokens überschreiben (siehe 1.2)
- shadcn gibt Accessibility und Basis-Komponenten gratis:
  Dialog, Select, Checkbox, Sheet, Toast, Skeleton

### 1.2 Tailwind Config — Neue Design-Tokens

Ersetze ALLE bestehenden Custom-Colors vollständig:

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      // Dark Mode Palette
      'void':        '#070d0a',   // tiefstes Background
      'surface':     '#0e1a13',   // Karten, Panels
      'elevated':    '#152019',   // Hover, Dropdowns
      'border-dim':  'rgba(255,255,255,0.08)',

      // Akzente
      'emerald-glow': '#22c55e',  // Primary Accent
      'emerald-soft': '#86efac',  // Gradient-Ende
      'gold':         '#f59e0b',  // Gold-Akzente, Headlines
      'gold-soft':    '#fde68a',

      // Text
      'ink':         '#f0faf4',   // fast Weiß, warm
      'ink-muted':   '#6b9e7a',   // gedämpftes Grün-Grau
      'ink-faint':   '#3a5a44',   // sehr schwach

      // Light Mode Palette
      'paper':       '#fafaf7',
      'paper-soft':  '#f0f5f1',
      'forest-deep': '#15803d',
      'forest-text': '#0a0f0d',
      'forest-muted':'#4a7a5a',
    },
    borderRadius: {
      'sm':   '6px',
      'md':   '12px',
      'lg':   '20px',
      'xl':   '32px',
      'full': '9999px',
    },
    boxShadow: {
      'glow-sm':   '0 0 12px rgba(34,197,94,0.2)',
      'glow-md':   '0 0 24px rgba(34,197,94,0.25), 0 8px 32px rgba(0,0,0,0.4)',
      'glow-gold': '0 0 12px rgba(245,158,11,0.2)',
      'card':      '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
    },
    fontFamily: {
      heading: ['Fraunces', 'Georgia', 'serif'],
      body:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      mono:    ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      'display': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      'hero':    ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
    },
  },
}
```

### 1.3 CSS Custom Properties (Dark/Light Mode)

```css
/* globals.css */
:root {
  --bg:          #fafaf7;
  --bg-surface:  #f0f5f1;
  --bg-elevated: #e8f0ea;
  --text:        #0a0f0d;
  --text-muted:  #4a7a5a;
  --accent:      #15803d;
  --accent-soft: #86efac;
  --gold:        #d97706;
  --border:      rgba(0,0,0,0.1);
  --glass:       rgba(0,0,0,0.03);
}

.dark {
  --bg:          #070d0a;
  --bg-surface:  #0e1a13;
  --bg-elevated: #152019;
  --text:        #f0faf4;
  --text-muted:  #6b9e7a;
  --accent:      #22c55e;
  --accent-soft: #86efac;
  --gold:        #f59e0b;
  --border:      rgba(255,255,255,0.08);
  --glass:       rgba(255,255,255,0.04);
}
```

### 1.4 Fonts via next/font

```ts
// src/app/fonts.ts
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

export const heading = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  axes: ['opsz'],
});

export const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
```

### 1.5 Framer Motion — Animations-System

```ts
// src/lib/animations.ts
import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, x: 32, transition: { duration: 0.25 } },
};

export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 0 0px rgba(34,197,94,0)' },
  hover: { y: -4, boxShadow: '0 8px 30px rgba(34,197,94,0.15)',
    transition: { duration: 0.2, ease: 'easeOut' } },
};

// Vereinfachte Varianten für prefers-reduced-motion
export const reducedFadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};
```

**Verwendungsregeln:**
- Alle Listen (Strain Cards, Filter-Items, Blog-Posts): `staggerContainer` + `fadeUp`
- Hero-Headline: `fadeUp` mit `delay: 0.1`
- Hero-Subtext: `fadeUp` mit `delay: 0.25`
- Hero-CTA: `fadeUp` mit `delay: 0.4`
- Modals/Sheets: `scaleIn`
- Mobile Sidebar: `slideInRight`
- Blob-Hintergrund: CSS keyframes (nicht Framer — GPU-performanter)

**prefers-reduced-motion (PFLICHT):**

```tsx
// In jeder Komponente mit Animationen:
import { useReducedMotion } from 'framer-motion';

const prefersReduced = useReducedMotion();
const variants = prefersReduced ? reducedFadeIn : fadeUp;
```

```css
/* globals.css — Blob-Animation deaktivieren */
@media (prefers-reduced-motion: reduce) {
  .blob-animation { animation: none; }
}
```

### 1.6 Page Transitions

```tsx
// src/app/[locale]/layout.tsx
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { fadeIn } from '@/lib/animations';

export default function LocaleLayout({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} variants={fadeIn}
        initial="hidden" animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.2 } }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### 1.7 next-themes (Dark/Light Toggle)

```bash
npm install next-themes
```

```tsx
// ThemeProvider in root layout
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>
```

### 1.8 Z-Index System

```ts
// src/lib/z-index.ts
export const Z = {
  base:     0,
  elevated: 10,    // Sticky Elemente
  dropdown: 100,   // Menüs, Tooltips
  overlay:  200,   // Mobile Sidebar-Backdrop
  modal:    300,   // Dialoge, Sheets
  toast:    400,   // Notifications
  cookie:   500,   // Cookie Banner — immer oben
} as const;
```

---

## Phase 2 — Shell

### 2.1 Navigation / Header

**Verhalten:**
- Transparent beim Seitenanfang
- Frosted Glass beim Scrollen: `backdrop-blur-xl bg-void/80 border-b border-[var(--border)]`
- Smooth Transition mit `transition-all duration-300`

**Dark Mode Toggle:**
- Moon/Sun Icon (Lucide)
- Smooth morphing transition mit Framer Motion
- `useTheme()` von next-themes

**Logo:**
- "Blattwerk" in Fraunces, italic
- Kleines abstraktes Blatt-Shape als SVG (kein Klischee-Cannabis-Blatt)
- Gradient: emerald-glow → emerald-soft

**Mobile Navigation:**
- Hamburger → X (animiert mit Framer Motion)
- Full-Screen Overlay: `bg-void/95 backdrop-blur-xl`
- Menüpunkte: staggered fadeUp, große Typografie
- shadcn Sheet Komponente als Basis

### 2.2 Footer

- Minimalistische 3-Spalten-Struktur
- Dark: `bg-surface border-t border-[var(--border)]`
- Rechtliche Links prominent (wichtig: Cannabis-Kontext)
- Keine Social-Media-Icons wenn nicht vorhanden

### 2.3 404-Seite

- Passt zum Premium-Design (kein Standard-Next.js 404)
- Große "404" in Fraunces, italic, gold
- Kurzer Text, ein CTA zurück zur Startseite
- Subtile Blob-Animation im Hintergrund

---

## Phase 3 — Startseite (Hero)

### 3.1 Hero Section

**Layout:** Asymmetrisch, kein zentriertes Grid.

```
[Linke Seite 60%]              [Rechte Seite 40%]
Blattwerk                      ┌─────────────────┐
Der Verein für                 │  Glass-Card      │
informierten                   │  ─────────────   │
Cannabisgenuss.                │  47  Mitglieder  │
                               │  89  Sorten      │
[CTA Button]                   │  2024 Gegründet  │
                               └─────────────────┘
```

**Typografie:**
- h1: `font-heading text-display italic` — kein Bold
- Subtext: `font-body text-xl text-ink-muted leading-relaxed`

**Hintergrund-Blob:**
```css
.hero-blob {
  position: absolute;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  animation: blob-drift 12s ease-in-out infinite alternate;
}

@keyframes blob-drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(60px, -40px) scale(1.08); }
}
```

**Glass-Stats-Card:**
```tsx
<div className="backdrop-blur-xl bg-[var(--glass)] border border-[var(--border)]
                rounded-xl p-6 shadow-card">
  {stats.map(stat => <StatRow key={stat.label} {...stat} />)}
</div>
```

**CTA-Button (Primary):**
```tsx
<button className="bg-gradient-to-r from-emerald-glow to-emerald-soft
                   text-void font-semibold px-8 py-4 rounded-md
                   shadow-glow-sm hover:shadow-glow-md
                   transition-all duration-300 hover:-translate-y-0.5">
  Mitglied werden
</button>
```

**Animations-Sequenz:**
1. Blob: sofort, CSS keyframes
2. h1: `fadeUp`, delay 0.1s
3. Subtext: `fadeUp`, delay 0.25s
4. CTA: `fadeUp`, delay 0.4s
5. Stats-Card: `scaleIn`, delay 0.3s

### 3.2 Cookie Banner (DSGVO)

```tsx
// src/components/CookieBanner.tsx
// AnimatePresence → von unten einblenden
// Nur 2 Buttons: Akzeptieren / Ablehnen
// Dark: Glass-Card, Light: Paper-Card
// Z-Index: 500 (immer oben)
// State in localStorage persistieren
```

---

## Phase 4 — Sortendatenbank

### 4.1 StrainCard (neu)

**Design:**
- Glassmorphism-Karte: `backdrop-blur-sm bg-[var(--glass)] border border-[var(--border)]`
- Farbiger Top-Border: Indica (indigo), Sativa (gold), Hybrid (emerald)
- THC-Wert: `font-mono text-lg font-semibold text-ink`
- Framer Motion: `cardHover` Variante (lift + glow)

```tsx
<motion.article
  variants={cardHover}
  initial="rest"
  whileHover="hover"
  className="rounded-lg border-t-4 ...">
```

### 4.2 StrainCardSkeleton

```tsx
// Gleiche Dimensions wie StrainCard
// animate-pulse auf allen Platzhaltern
// Dark: bg-elevated, Light: bg-paper-soft
// 6 Skeletons im Grid während Laden
// AnimatePresence: Skeleton → Cards mit fadeIn
```

### 4.3 Filter-Sidebar

- Desktop: Sticky Glass-Panel
- Mobile: shadcn `Sheet` von unten (Bottom Sheet statt Overlay)
- Custom Checkboxen: emerald-glow, animierter Checkmark
- Active Filters: dismissible Tags mit `×` Button

### 4.4 StrainDetail

- Hero-Bereich: Großer Name in Fraunces, Typ-Badge glassmorphism
- THC/CBD: Prominente Anzeige in JetBrains Mono, groß
- Terpene: Radial-Chart oder animierte Balken (CSS, kein Chart-Library)
- "Ähnliche Sorten": Horizontaler Scroll auf Mobile

---

## Phase 5 — Restliche Seiten

### Mitgliedschaft

- Formular-Design: shadcn Form-Komponenten, custom gestylt
- Inline-Fehler: rot animiert einblenden (Framer Motion)
- Erfolg-State: Lottie-Animation oder großes Checkmark mit scaleIn
- Formular-Felder: Focus-Ring in emerald-glow

### Blog / Events / Wissensdatenbank

- Card-Grid: staggerContainer + fadeUp
- Datum: JetBrains Mono, ink-muted
- Tags: Glass-Chips

---

## Phase 6 — Polish

### Exklusivität — Konkrete Techniken

Diese Regeln gelten für ALLE Seiten:

```
1. Textgrößen mutig skalieren — Hero h1 minimum 5rem
2. Maximal 2 Farben pro Sektion sichtbar (Disziplin!)
3. Animationen langsamer als intuitiv: 0.5–0.8s fühlt premium
4. Feine 1px Borders mit Opacity statt volle Farbe
5. Body-Text line-height: 1.75 minimum
6. Headlines NICHT bold — medium/semibold wirkt edler
7. Maximal 1 CTA pro Sektion
8. Bilder/Illustrationen: immer mit viel Luft drumherum
```

### Illustrations-Strategie

Da keine Fotos vorhanden:
- Abstrakte SVG-Blob-Formen als Hintergrund-Dekor (sehr subtil)
- Animierter SVG-Blob als Hero-Accent (CSS clip-path animation)
- Lottie für leere States und Erfolgs-Animationen
- Alle Icons: Lucide React (bereits vorhanden)
- Kein Cannabis-Blatt-Klischee

### Mobile-First Regeln

```
- Glassmorphism nur ab md: breakpoint (Performance)
- Blob-Animation nur ab lg: breakpoint (GPU-intensiv)
- Framer Motion auf Mobile: nur fadeIn, kein y-Versatz
- stagger: maximal 3 Elemente auf Mobile
- Touch-Targets: minimum 44×44px
- Bottom Sheet statt Overlay für Filter
```

### Accessibility & Focus States

```css
/* Sichtbarer Focus-Ring für Keyboard-Navigation */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}
```

- Alle interaktiven Elemente: `focus-visible` Styles
- Kontrast-Verhältnis: minimum 4.5:1 für Body-Text
- ARIA-Labels für Icon-Buttons

### Favicon & PWA-Basics

```
- Favicon: SVG, dark/light-aware (prefers-color-scheme)
- Abstraktes Blatt-Shape, kein Klischee
- public/manifest.json: App-Name, Theme-Color (#070d0a dark / #fafaf7 light)
- OG-Image: 1200×630px im Design-Stil (für Social Sharing)
```

### Lighthouse-Ziele

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

---

## Was NICHT geändert wird

- Routing-Struktur (`/de`, `/en`, alle Seiten-Paths)
- Geschäftslogik (Filter-Algorithmen, Strain-Daten, Formulare)
- next-intl Translations und Routing
- Netlify Deployment Config (`netlify.toml`)
- TypeScript-Typen der Strain-Daten

---

## Packages installieren (Phase 1 — einmalig)

```bash
npm install framer-motion next-themes
npx shadcn@latest init
npx shadcn@latest add button dialog sheet skeleton toast checkbox select
```

---

*Beginne mit Phase 1. Bestätige nach jeder Phase bevor du zur nächsten gehst.*
