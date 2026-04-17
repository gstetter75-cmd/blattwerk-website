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
    de: { title: 'Cannabis Social Club Hildesheim | BlattWerk e.V.', description: 'BlattWerk e.V. — lizenzierter Cannabis Social Club in Hildesheim. Anbaulizenz erteilt. Mitglied werden ab 21 Jahren. Gemeinschaft & Qualität nach KCanG.' },
    en: { title: 'Cannabis Social Club Hildesheim | BlattWerk e.V.', description: 'BlattWerk e.V. — licensed Cannabis Social Club in Hildesheim. Cultivation license granted. Join from age 21. Community & quality under KCanG.' },
  },
  about: {
    de: { title: 'Über uns — Cannabis Verein Hildesheim | BlattWerk', description: 'Vorstand, Anbaurat, Vereinsregeln und Mission von BlattWerk e.V. — Cannabis Social Club Hildesheim. Gegründet 2025, Anbaulizenz seit März 2026.' },
    en: { title: 'About Us — Cannabis Club Hildesheim | BlattWerk', description: 'Board, growing council, rules and mission of BlattWerk e.V. — Cannabis Social Club Hildesheim. Founded 2025, cultivation license since March 2026.' },
  },
  membership: {
    de: { title: 'Mitglied werden — Cannabis Club Hildesheim | BlattWerk', description: 'Jetzt Mitglied werden bei BlattWerk e.V. in Hildesheim. Ab 21 Jahren, 10 €/Monat. Voraussetzungen, Aufnahmeprozess und häufige Fragen.' },
    en: { title: 'Become a Member — Cannabis Club Hildesheim', description: 'Join BlattWerk e.V. in Hildesheim. From age 21, €10/month. Requirements, admission process and membership FAQs.' },
  },
  strains: {
    de: { title: 'Cannabis-Sortendatenbank | BlattWerk e.V.', description: 'Cannabis-Sorten dokumentiert: Genetik, Terpenprofil, THC/CBD-Werte, Wirkung und Anbauinfos. Indica, Sativa, Hybrid. BlattWerk e.V. Hildesheim.' },
    en: { title: 'Cannabis Strain Database | BlattWerk e.V.', description: 'Cannabis strains documented: genetics, terpene profiles, THC/CBD levels, effects and growing info. Indica, sativa, hybrid. BlattWerk e.V. Hildesheim.' },
  },
  knowledge: {
    de: { title: 'Cannabis-Wissensdatenbank — Recht, Anbau & mehr', description: '40+ fundierte Artikel zu Cannabis: KCanG-Recht, Safer Use, Terpene, Cannabinoide, Indoor-Anbau, Prävention. Evidenzbasiert von BlattWerk e.V. Hildesheim.' },
    en: { title: 'Cannabis Knowledge Base — Law, Growing & More', description: '40+ evidence-based articles on cannabis: KCanG law, safer use, terpenes, cannabinoids, indoor growing, prevention. By BlattWerk e.V. Hildesheim.' },
  },
  prevention: {
    de: { title: 'Suchtprävention & Cannabis — Konzept & Beratung', description: 'Suchtpräventionskonzept von BlattWerk e.V.: Selbsttest, Risikofaktoren, lokale Beratungsstellen in Hildesheim und Warnsignale für problematischen Konsum.' },
    en: { title: 'Addiction Prevention — Concept & Counseling', description: 'Prevention concept by BlattWerk e.V.: self-assessment, risk factors, local counseling in Hildesheim and warning signs for problematic use.' },
  },
  events: {
    de: { title: 'Veranstaltungen & Workshops — CSC Hildesheim', description: 'Workshops, Vorträge und Mitgliederversammlungen bei BlattWerk e.V. in Hildesheim. Safer-Use Workshop, Grow-Einführung und mehr.' },
    en: { title: 'Events & Workshops — CSC Hildesheim', description: 'Workshops, lectures and member assemblies at BlattWerk e.V. in Hildesheim. Safer-use workshop, grow introduction and more.' },
  },
  contact: {
    de: { title: 'Kontakt — BlattWerk e.V. Hildesheim', description: 'Kontaktiere BlattWerk e.V. am Wetzellplatz 2 in Hildesheim. Kontaktformular, Anfahrt, Öffnungszeiten und direkter Draht per E-Mail oder WhatsApp.' },
    en: { title: 'Contact — BlattWerk e.V. Hildesheim', description: 'Contact BlattWerk e.V. at Wetzellplatz 2 in Hildesheim. Contact form, directions, opening hours and direct contact via email or WhatsApp.' },
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
