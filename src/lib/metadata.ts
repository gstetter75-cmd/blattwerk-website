import type { Metadata } from 'next';
import { BASE_URL } from './config';

interface PageMeta {
  readonly de: { title: string; description: string };
  readonly en: { title: string; description: string };
  readonly noIndex?: boolean;
}

export function createAlternates(locale: string, path: string) {
  const altLocale = locale === 'de' ? 'en' : 'de';
  const fullPath = path ? `/${path}` : '';
  return {
    canonical: `${BASE_URL}/${locale}${fullPath}/`,
    languages: {
      [altLocale]: `${BASE_URL}/${altLocale}${fullPath}/`,
      'x-default': `${BASE_URL}/de${fullPath}/`,
    },
  };
}

export function createMetadata(locale: string, meta: PageMeta, path = ''): Metadata {
  const t = locale === 'en' ? meta.en : meta.de;
  return {
    title: t.title,
    description: t.description,
    alternates: createAlternates(locale, path),
    ...(meta.noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const PAGE_META = {
  home: {
    de: { title: 'BlattWerk e.V. – Cannabis Social Club Hildesheim | Lizenzierte Anbauvereinigung', description: 'BlattWerk e.V. ist der lizenzierte Cannabis Social Club in Hildesheim. Anbaulizenz erteilt, aktiver Anbau. Mitglied werden ab 21 Jahren. Gemeinschaft, Aufklärung & Qualität nach KCanG.' },
    en: { title: 'BlattWerk e.V. – Cannabis Social Club Hildesheim | Licensed Cultivation Club', description: 'BlattWerk e.V. is the licensed Cannabis Social Club in Hildesheim. Cultivation license granted, active growing. Join from age 21. Community, education & quality under KCanG.' },
  },
  about: {
    de: { title: 'Über BlattWerk e.V. – Cannabis Verein Hildesheim | Vorstand & Mission', description: 'Lerne BlattWerk e.V. kennen: Vorstand, Anbaurat, Vereinsregeln und unsere Mission als Cannabis Social Club in Hildesheim. Gegründet 2025, Anbaulizenz seit März 2026.' },
    en: { title: 'About BlattWerk e.V. – Cannabis Club Hildesheim | Board & Mission', description: 'Meet BlattWerk e.V.: board, growing council, club rules and our mission as Cannabis Social Club in Hildesheim. Founded 2025, cultivation license since March 2026.' },
  },
  membership: {
    de: { title: 'Mitglied werden – Cannabis Social Club Hildesheim', description: 'Jetzt Mitglied werden bei BlattWerk e.V. in Hildesheim. Ab 21 Jahren, 5 €/Monat. Voraussetzungen, Aufnahmeprozess über die Hanf-App und häufige Fragen zur Mitgliedschaft.' },
    en: { title: 'Become a Member – Cannabis Social Club Hildesheim', description: 'Join BlattWerk e.V. in Hildesheim. From age 21, €5/month. Requirements, admission process via Hanf-App and membership FAQs.' },
  },
  strains: {
    de: { title: 'Cannabis-Sortendatenbank – 50 Sorten mit THC, CBD & Terpenprofil', description: '50 Cannabis-Sorten wissenschaftlich dokumentiert: Genetik, Terpenprofil, THC/CBD-Werte, Wirkung und Anbauinfos. Filtern nach Indica, Sativa, Hybrid. BlattWerk e.V. Hildesheim.' },
    en: { title: 'Cannabis Strain Database – 50 Strains with THC, CBD & Terpene Profiles', description: '50 cannabis strains scientifically documented: genetics, terpene profiles, THC/CBD levels, effects and growing info. Filter by indica, sativa, hybrid. BlattWerk e.V. Hildesheim.' },
  },
  knowledge: {
    de: { title: 'Cannabis-Wissensdatenbank – 40+ Artikel zu Recht, Gesundheit & Anbau', description: '40+ fundierte Artikel zu Cannabis: KCanG-Recht, Safer Use, Terpene, Cannabinoide, Indoor-Anbau, Prävention & Jugendschutz. Evidenzbasiert von BlattWerk e.V. Hildesheim.' },
    en: { title: 'Cannabis Knowledge Base – 40+ Articles on Law, Health & Growing', description: '40+ evidence-based articles on cannabis: KCanG law, safer use, terpenes, cannabinoids, indoor growing, prevention & youth protection. By BlattWerk e.V. Hildesheim.' },
  },
  prevention: {
    de: { title: 'Suchtprävention & Cannabis – Konzept, Selbsttest & Beratung', description: 'Suchtpräventionskonzept von BlattWerk e.V.: Selbsteinschätzungstest, Risikofaktoren, lokale Beratungsstellen in Hildesheim und Warnsignale für problematischen Konsum.' },
    en: { title: 'Addiction Prevention & Cannabis – Concept, Self-Test & Counseling', description: 'Addiction prevention concept by BlattWerk e.V.: self-assessment test, risk factors, local counseling in Hildesheim and warning signs for problematic use.' },
  },
  events: {
    de: { title: 'Veranstaltungen & Workshops – Cannabis Social Club Hildesheim', description: 'Workshops, Vorträge und Mitgliederversammlungen bei BlattWerk e.V. in Hildesheim. Safer-Use Workshop, Grow-Einführung und mehr.' },
    en: { title: 'Events & Workshops – Cannabis Social Club Hildesheim', description: 'Workshops, lectures and member assemblies at BlattWerk e.V. in Hildesheim. Safer-use workshop, grow introduction and more.' },
  },
  contact: {
    de: { title: 'Kontakt – BlattWerk e.V. | Wetzellplatz 2, Hildesheim', description: 'Kontaktiere BlattWerk e.V. am Wetzellplatz 2 in Hildesheim. Kontaktformular, Anfahrt, Öffnungszeiten und direkter Draht per E-Mail oder WhatsApp.' },
    en: { title: 'Contact – BlattWerk e.V. | Wetzellplatz 2, Hildesheim', description: 'Contact BlattWerk e.V. at Wetzellplatz 2 in Hildesheim. Contact form, directions, opening hours and direct contact via email or WhatsApp.' },
  },
  privacy: {
    de: { title: 'Datenschutzerklärung', description: 'Datenschutzerklärung von BlattWerk e.V. – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.' },
    en: { title: 'Privacy Policy', description: 'Privacy policy of BlattWerk e.V. – Information on the processing of personal data in accordance with GDPR.' },
    noIndex: true,
  },
  impressum: {
    de: { title: 'Impressum', description: 'Impressum von BlattWerk e.V. – Angaben gemäß § 5 TMG. Cannabis Social Club Hildesheim.' },
    en: { title: 'Legal Notice', description: 'Legal notice of BlattWerk e.V. – Information according to § 5 TMG. Cannabis Social Club Hildesheim.' },
    noIndex: true,
  },
} as const;
