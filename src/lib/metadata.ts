import type { Metadata } from 'next';

interface PageMeta {
  readonly de: { title: string; description: string };
  readonly en: { title: string; description: string };
  readonly noIndex?: boolean;
}

export function createMetadata(locale: string, meta: PageMeta): Metadata {
  const t = locale === 'en' ? meta.en : meta.de;
  return {
    title: t.title,
    description: t.description,
    ...(meta.noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const PAGE_META = {
  home: {
    de: { title: 'BlattWerk e.V. – Cannabis Social Club Hildesheim', description: 'BlattWerk e.V. ist ein Cannabis Social Club in Hildesheim. Gemeinschaft, Aufklärung und verantwortungsvoller Umgang mit Cannabis im Rahmen des KCanG.' },
    en: { title: 'BlattWerk e.V. – Cannabis Social Club Hildesheim', description: 'BlattWerk e.V. is a Cannabis Social Club in Hildesheim. Community, education and responsible cannabis use under the KCanG.' },
  },
  about: {
    de: { title: 'Über uns', description: 'Erfahre mehr über BlattWerk e.V. – unsere Mission, Werte, den Vorstand und die Vereinsstruktur des Cannabis Social Club Hildesheim.' },
    en: { title: 'About Us', description: 'Learn more about BlattWerk e.V. – our mission, values, the board and the club structure of Cannabis Social Club Hildesheim.' },
  },
  membership: {
    de: { title: 'Mitgliedschaft', description: 'Werde Mitglied bei BlattWerk e.V. – Cannabis Social Club Hildesheim. Voraussetzungen, Aufnahmeprozess, Beiträge und häufige Fragen.' },
    en: { title: 'Membership', description: 'Become a member of BlattWerk e.V. – Cannabis Social Club Hildesheim. Requirements, admission process, fees and FAQs.' },
  },
  strains: {
    de: { title: 'Sortendatenbank', description: '89 Cannabis-Sorten wissenschaftlich dokumentiert. Genetik, Terpenprofil, THC/CBD-Werte und Wirkungsspektrum. BlattWerk e.V. Hildesheim.' },
    en: { title: 'Strain Database', description: '89 cannabis strains scientifically documented. Genetics, terpene profile, THC/CBD levels and effect spectrum. BlattWerk e.V. Hildesheim.' },
  },
  knowledge: {
    de: { title: 'Wissensdatenbank', description: 'Umfassende Wissensdatenbank zu Cannabis: Recht, Medizin, Safer Use, Prävention, Anbau und mehr. 40+ fundierte Artikel von BlattWerk e.V.' },
    en: { title: 'Knowledge Base', description: 'Comprehensive cannabis knowledge base: law, medicine, safer use, prevention, growing and more. 40+ articles by BlattWerk e.V.' },
  },
  events: {
    de: { title: 'Events & Termine', description: 'Workshops, Vorträge, Versammlungen und mehr bei BlattWerk e.V. – Cannabis Social Club Hildesheim.' },
    en: { title: 'Events & Dates', description: 'Workshops, lectures, assemblies and more at BlattWerk e.V. – Cannabis Social Club Hildesheim.' },
  },
  donations: {
    de: { title: 'Spenden', description: 'Unterstütze BlattWerk e.V. mit einer Spende. Hilf uns, verantwortungsvollen Umgang mit Cannabis in Hildesheim zu fördern.' },
    en: { title: 'Donate', description: 'Support BlattWerk e.V. with a donation. Help us promote responsible cannabis use in Hildesheim.' },
  },
  prevention: {
    de: { title: 'Suchtprävention', description: 'Unser Präventionskonzept: Aufklärung, Beratung und verantwortungsvoller Umgang mit Cannabis. BlattWerk e.V. Hildesheim.' },
    en: { title: 'Addiction Prevention', description: 'Our prevention concept: education, counseling and responsible cannabis use. BlattWerk e.V. Hildesheim.' },
  },
  rooms: {
    de: { title: 'Räumlichkeiten', description: 'Unsere Vereinsräume in Hildesheim – Treffpunkt für Mitglieder des BlattWerk e.V.' },
    en: { title: 'Facilities', description: 'Our club premises in Hildesheim – meeting point for members of BlattWerk e.V.' },
  },
  contact: {
    de: { title: 'Kontakt', description: 'Kontaktiere BlattWerk e.V. – Cannabis Social Club Hildesheim. Schreib uns eine Nachricht oder besuche uns vor Ort.' },
    en: { title: 'Contact', description: 'Contact BlattWerk e.V. – Cannabis Social Club Hildesheim. Send us a message or visit us.' },
  },
  blog: {
    de: { title: 'Blog', description: 'Neuigkeiten, Berichte und Einblicke aus dem BlattWerk e.V. – Cannabis Social Club Hildesheim.' },
    en: { title: 'Blog', description: 'News, reports and insights from BlattWerk e.V. – Cannabis Social Club Hildesheim.' },
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
