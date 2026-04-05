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
    intro_de: `Seit dem 1. April 2024 ist Cannabis in Deutschland unter bestimmten Bedingungen legal. Das Konsumcannabisgesetz (KCanG) regelt, was erlaubt ist und was nicht — vom Eigenanbau über den Besitz bis zur Abgabe über Anbauvereinigungen.

Für Mitglieder eines Cannabis Social Clubs wie BlattWerk e.V. ist es besonders wichtig, die eigenen Rechte und Pflichten zu kennen. Wie viel darfst du besitzen? Wo darfst du konsumieren? Was passiert bei einer Verkehrskontrolle? Und welche Regeln gelten speziell für Anbauvereinigungen?

Unsere Rechts-Artikel basieren auf dem aktuellen Stand des KCanG und der jeweiligen Landesgesetzgebung in Niedersachsen. Sie werden regelmäßig aktualisiert, wenn sich die Rechtslage ändert. Wichtig: Diese Artikel ersetzen keine Rechtsberatung — bei konkreten rechtlichen Fragen empfehlen wir einen auf Cannabisrecht spezialisierten Anwalt.

Die wichtigsten Eckpunkte im Überblick: Erwachsene ab 18 Jahren dürfen bis zu 25 Gramm Cannabis im öffentlichen Raum und bis zu 50 Gramm in der eigenen Wohnung besitzen. Der Eigenanbau ist mit maximal drei weiblichen Pflanzen pro Person erlaubt. Cannabis Social Clubs dürfen an volljährige Mitglieder maximal 25 Gramm pro Tag und 50 Gramm pro Monat abgeben. Der THC-Grenzwert im Straßenverkehr liegt bei 3,5 ng/ml im Blutserum.`,
    intro_en: `Since April 1, 2024, cannabis has been legal in Germany under certain conditions. The Cannabis Consumption Act (KCanG) regulates what is permitted and what is not — from home growing to possession to distribution through cultivation associations.

For members of a Cannabis Social Club like BlattWerk e.V., it is particularly important to know your rights and obligations. How much can you possess? Where can you consume? What happens during a traffic stop? And which rules apply specifically to cultivation associations?

Our legal articles are based on the current state of the KCanG and the respective state legislation in Lower Saxony. They are regularly updated when the legal situation changes. Important: These articles do not replace legal advice — for specific legal questions, we recommend a lawyer specializing in cannabis law.

The key points at a glance: Adults aged 18 and over may possess up to 25 grams of cannabis in public spaces and up to 50 grams at home. Home growing is permitted with a maximum of three female plants per person. Cannabis Social Clubs may distribute up to 25 grams per day and 50 grams per month to adult members. The THC limit for driving is 3.5 ng/ml in blood serum.`,
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
    intro_de: `Terpene sind aromatische Verbindungen, die in vielen Pflanzen vorkommen — nicht nur in Cannabis. Sie sind verantwortlich für den charakteristischen Geruch und Geschmack jeder Cannabissorte und beeinflussen die Wirkung maßgeblich mit. Wer Cannabis bewusst konsumiert, kommt an Terpenen nicht vorbei.

Die Cannabispflanze produziert über 200 verschiedene Terpene, von denen etwa 20–30 in relevanten Konzentrationen vorkommen. Die wichtigsten sind Myrcen (erdig, beruhigend), Limonen (zitrusartig, stimmungsaufhellend), Caryophyllen (pfeffrig, entzündungshemmend), Pinene (kiefernartig, konzentrationsfördernd) und Linalool (blumig, entspannend).

Der sogenannte Entourage-Effekt beschreibt das Zusammenspiel von Terpenen mit Cannabinoiden wie THC und CBD. Forschungsergebnisse deuten darauf hin, dass Terpene die Wirkung von Cannabinoiden verstärken, abschwächen oder modulieren können. Eine Sorte mit viel Myrcen wirkt typischerweise sedierender, während eine Sorte mit viel Limonen eher aufmunternd wirkt — selbst bei ähnlichem THC-Gehalt.

In unserer Sortendatenbank findest du das vollständige Terpenprofil jeder Sorte. So kannst du gezielt Sorten auswählen, deren Wirkungsprofil zu deinen Erwartungen passt — nicht nur nach THC-Gehalt, sondern nach dem gesamten chemischen Profil.`,
    intro_en: `Terpenes are aromatic compounds found in many plants — not just cannabis. They are responsible for the characteristic smell and taste of each cannabis strain and significantly influence the effects. Anyone who consumes cannabis consciously cannot ignore terpenes.

The cannabis plant produces over 200 different terpenes, of which about 20–30 occur in relevant concentrations. The most important are myrcene (earthy, calming), limonene (citrusy, mood-lifting), caryophyllene (peppery, anti-inflammatory), pinene (piney, concentration-enhancing), and linalool (floral, relaxing).

The so-called entourage effect describes the interplay between terpenes and cannabinoids such as THC and CBD. Research suggests that terpenes can enhance, weaken, or modulate the effects of cannabinoids. A strain with a lot of myrcene typically has a more sedating effect, while a strain with a lot of limonene tends to be more uplifting — even with similar THC content.

In our strain database, you can find the complete terpene profile of each strain. This allows you to specifically select strains whose effect profile matches your expectations — not just by THC content, but by the entire chemical profile.`,
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
  {
    key: 'prevention',
    label_de: 'Prävention & Jugendschutz',
    label_en: 'Prevention & Youth Protection',
    description_de:
      'Jugendschutz, Früherkennung von Problemkonsum, Selbstcheck und Hilfsangebote – für einen verantwortungsvollen Umgang.',
    description_en:
      'Youth protection, early detection of problematic use, self-check and support services – for responsible use.',
    icon: 'ShieldAlert',
  },
] as const;
