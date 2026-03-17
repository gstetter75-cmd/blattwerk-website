import { KnowledgeCategory } from './types';

export const categories: readonly KnowledgeCategory[] = [
  {
    key: 'legal',
    label_de: 'Rechtliche Lage',
    label_en: 'Legal Situation',
    description_de:
      'Alles rund um die aktuelle Gesetzgebung, das Konsumcannabisgesetz (KCanG) und was du rechtlich wissen musst.',
    description_en:
      'Everything about the current legislation, the Cannabis Act (KCanG) and what you need to know legally.',
    icon: 'Scale',
  },
  {
    key: 'health',
    label_de: 'Gesundheit & Safer Use',
    label_en: 'Health & Safer Use',
    description_de:
      'Tipps für risikoarmen Konsum, Dosierung, verschiedene Konsumformen und psychische Gesundheit.',
    description_en:
      'Tips for low-risk consumption, dosing, different consumption methods and mental health.',
    icon: 'HeartPulse',
  },
  {
    key: 'cannabinoids',
    label_de: 'Cannabinoide',
    label_en: 'Cannabinoids',
    description_de:
      'THC, CBD, CBG und das Endocannabinoid-System – verstehe die Wirkstoffe der Cannabispflanze.',
    description_en:
      'THC, CBD, CBG and the endocannabinoid system – understand the active compounds of the cannabis plant.',
    icon: 'Atom',
  },
  {
    key: 'terpenes',
    label_de: 'Terpene',
    label_en: 'Terpenes',
    description_de:
      'Die aromatischen Verbindungen, die Geschmack, Geruch und Wirkung von Cannabis mitbestimmen.',
    description_en:
      'The aromatic compounds that co-determine the taste, smell and effects of cannabis.',
    icon: 'Droplets',
  },
  {
    key: 'growing',
    label_de: 'Anbau-Grundlagen',
    label_en: 'Growing Basics',
    description_de:
      'Grundlagen des Cannabisanbaus – von der Beleuchtung über die Ernte bis zur Schädlingsbekämpfung.',
    description_en:
      'Fundamentals of cannabis cultivation – from lighting to harvest and pest control.',
    icon: 'Sprout',
  },
  {
    key: 'history',
    label_de: 'Geschichte & Kultur',
    label_en: 'History & Culture',
    description_de:
      'Die jahrtausendealte Geschichte von Cannabis, seine kulturelle Bedeutung und der Weg zur Legalisierung.',
    description_en:
      'The millennia-old history of cannabis, its cultural significance and the road to legalization.',
    icon: 'Landmark',
  },
  {
    key: 'medicine',
    label_de: 'Cannabis & Medizin',
    label_en: 'Cannabis & Medicine',
    description_de:
      'Medizinisches Cannabis in Deutschland – Verschreibung, Anwendungsgebiete und aktueller Forschungsstand.',
    description_en:
      'Medical cannabis in Germany – prescription, areas of application and current research.',
    icon: 'Stethoscope',
  },
] as const;
