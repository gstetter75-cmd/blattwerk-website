/**
 * Blog/News data for BlattWerk e.V.
 * New posts are added at the top of the array.
 */

export interface BlogPost {
  readonly slug: string;
  readonly date: string;
  readonly title_de: string;
  readonly title_en: string;
  readonly summary_de: string;
  readonly summary_en: string;
  readonly content_de: string;
  readonly content_en: string;
  readonly tags: readonly string[];
  readonly author: string;
}

export const blogPosts: readonly BlogPost[] = [
  {
    slug: 'anbau-gestartet',
    date: '2026-03-25',
    title_de: 'Der Anbau hat begonnen',
    title_en: 'Growing Has Started',
    summary_de: 'Nach Erhalt der Anbaulizenz haben wir mit dem Aufbau unserer Anbau-Infrastruktur begonnen. Die ersten Schritte sind getan.',
    summary_en: 'After receiving our cultivation license, we have started building our growing infrastructure. The first steps are done.',
    content_de: `Es ist offiziell: BlattWerk e.V. baut an. Nach monatelanger Vorbereitung und dem Erhalt der Anbaulizenz am 18. März 2026 sind wir in die aktive Phase gestartet.

In den letzten Tagen haben wir damit begonnen, unsere Anbauräume einzurichten. Beleuchtung, Belüftung, Bewässerung — Schritt für Schritt entsteht die Infrastruktur für unseren gemeinschaftlichen Anbau.

Unsere ersten Sorten stehen fest und wurden sorgfältig ausgewählt. Dabei achten wir auf Vielfalt: Indica, Sativa und Hybrid-Sorten mit unterschiedlichen Terpenprofilen und THC/CBD-Verhältnissen.

Als nächstes stehen die ersten Pflanzungen an. Wir halten euch auf dem Laufenden — hier im Blog und auf Instagram.

Ihr wollt Teil davon sein? Der Beitritt erfolgt über die Hanf-App.`,
    content_en: `It's official: BlattWerk e.V. is growing. After months of preparation and receiving our cultivation license on March 18, 2026, we've entered the active phase.

Over the past few days, we've started setting up our growing rooms. Lighting, ventilation, irrigation — step by step, the infrastructure for our communal cultivation is taking shape.

Our first strains have been selected with care. We focus on variety: Indica, Sativa and hybrid strains with different terpene profiles and THC/CBD ratios.

Next up: the first plantings. We'll keep you posted — here on the blog and on Instagram.

Want to be part of it? Join via the Hanf-App.`,
    tags: ['Anbau', 'Meilenstein', 'Infrastruktur'],
    author: 'Gero Stetter',
  },
  {
    slug: 'anbaulizenz-erteilt',
    date: '2026-03-18',
    title_de: 'Anbaulizenz erteilt — ein Meilenstein für BlattWerk',
    title_en: 'Cultivation License Granted — A Milestone for BlattWerk',
    summary_de: 'Am 18. März 2026 hat BlattWerk e.V. die offizielle Anbaulizenz erhalten. Ein historischer Moment für unseren Verein und für Hildesheim.',
    summary_en: 'On March 18, 2026, BlattWerk e.V. received its official cultivation license. A historic moment for our association and for Hildesheim.',
    content_de: `Heute ist ein Tag, den wir lange herbeigesehnt haben: BlattWerk e.V. hat die offizielle Anbaulizenz erhalten.

Damit sind wir berechtigt, als Anbauvereinigung gemäß dem Konsumcannabisgesetz (KCanG) Cannabis gemeinschaftlich anzubauen und an unsere Mitglieder abzugeben.

Der Weg hierhin war nicht einfach. Von der Vereinsgründung über die Erstellung des Präventionskonzepts, die Suche nach geeigneten Räumlichkeiten bis hin zum Lizenzantrag — jeder Schritt erforderte Sorgfalt, Geduld und die Unterstützung unserer Mitglieder.

Was bedeutet das konkret?
- Wir dürfen offiziell Cannabis anbauen
- Die Abgabe an Mitglieder nach Selbstkostenpreis ist erlaubt
- Alle gesetzlichen Auflagen (Jugendschutz, Prävention, Dokumentation) werden von uns erfüllt

Wir sind stolz auf das, was wir gemeinsam erreicht haben. Jetzt beginnt die eigentliche Arbeit — und wir freuen uns darauf.

Danke an alle Mitglieder und Unterstützer, die diesen Weg mit uns gegangen sind.`,
    content_en: `Today is a day we've been looking forward to for a long time: BlattWerk e.V. has received its official cultivation license.

This authorizes us as a cultivation association under the Cannabis Act (KCanG) to communally grow cannabis and distribute it to our members.

The path here wasn't easy. From founding the association, creating the prevention concept, finding suitable premises to the license application — every step required diligence, patience and the support of our members.

What does this mean in practice?
- We are officially permitted to grow cannabis
- Distribution to members at cost price is allowed
- All legal requirements (youth protection, prevention, documentation) are met by us

We are proud of what we've achieved together. Now the real work begins — and we're looking forward to it.

Thank you to all members and supporters who have walked this path with us.`,
    tags: ['Lizenz', 'Meilenstein', 'KCanG'],
    author: 'Gero Stetter',
  },
  {
    slug: 'vereinsgruendung',
    date: '2025-11-15',
    title_de: 'BlattWerk e.V. gegründet',
    title_en: 'BlattWerk e.V. Founded',
    summary_de: 'BlattWerk e.V. ist offiziell im Vereinsregister Hildesheim eingetragen. Der erste Schritt auf unserem Weg zum Cannabis Social Club.',
    summary_en: 'BlattWerk e.V. is officially registered in the Hildesheim association register. The first step on our journey to becoming a Cannabis Social Club.',
    content_de: `Es ist geschafft: BlattWerk e.V. ist gegründet und im Vereinsregister des Amtsgerichts Hildesheim eingetragen.

Mit der Gründungsversammlung haben wir den Vorstand gewählt, die Satzung verabschiedet und die Weichen für die Zukunft gestellt.

Unser Ziel: Ein Cannabis Social Club in Hildesheim, der auf Gemeinschaft, Transparenz und verantwortungsvollen Umgang setzt. Nicht gewinnorientiert, nicht anonym, sondern offen und ehrlich.

In den nächsten Monaten werden wir den Lizenzantrag vorbereiten, das Präventionskonzept ausarbeiten und geeignete Räumlichkeiten finden.

Wer Interesse hat, Teil dieser Gemeinschaft zu werden: Die Mitgliedschaft steht allen Erwachsenen ab 21 Jahren offen.`,
    content_en: `It's done: BlattWerk e.V. has been founded and registered in the association register of the Hildesheim district court.

At the founding assembly, we elected the board, adopted the statutes and set the course for the future.

Our goal: A Cannabis Social Club in Hildesheim based on community, transparency and responsible use. Not profit-oriented, not anonymous, but open and honest.

In the coming months, we will prepare the license application, develop the prevention concept and find suitable premises.

Anyone interested in becoming part of this community: Membership is open to all adults aged 21 and over.`,
    tags: ['Gründung', 'Meilenstein', 'Verein'],
    author: 'Gero Stetter',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
