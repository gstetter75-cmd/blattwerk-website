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
    slug: 'indoor-anbau-erste-wochen',
    date: '2026-04-05',
    title_de: 'Indoor-Anbau: Unsere ersten Wochen',
    title_en: 'Indoor Growing: Our First Weeks',
    summary_de: 'Die Anbauräume stehen, die ersten Pflanzen wachsen. Ein ehrlicher Blick auf die Anfangsphase unseres gemeinschaftlichen Anbaus — was funktioniert, was nicht.',
    summary_en: 'The grow rooms are set up, the first plants are growing. An honest look at the initial phase of our communal cultivation — what works, what doesn\'t.',
    content_de: `Seit dem Erhalt unserer Anbaulizenz im März sind einige Wochen vergangen. Zeit für ein erstes, ehrliches Update aus den Anbauräumen.

Die Infrastruktur steht. Beleuchtung, Belüftung, Bewässerung, Klimasteuerung — alles installiert und in Betrieb. Das klingt einfacher, als es war. Allein die Planung der Lüftungssysteme hat uns mehr Zeit gekostet als erwartet. Geruchsfilter, Luftumwälzung, Temperatur- und Feuchtigkeitskontrolle — das muss alles zusammenspielen, bevor auch nur eine Pflanze in die Erde kommt.

Unsere ersten Sorten stehen in der Vegetationsphase. Wir haben bewusst mit robusten, anfängerfreundlichen Sorten begonnen — Sorten, die Fehler verzeihen und nicht sofort eingehen, wenn ein Parameter mal nicht stimmt. Northern Lights und Blue Dream waren unsere Startauswahl, beide bekannt für Widerstandsfähigkeit und zuverlässiges Wachstum.

Was gut läuft: Die LED-Beleuchtung liefert gleichmäßige PPFD-Werte, die Pflanzen wachsen sichtbar. Die Temperatur halten wir tagsüber bei 24–26°C, nachts bei 18–20°C. Die relative Luftfeuchtigkeit liegt bei 60–70% in der Vegetationsphase — genau im Zielbereich.

Was uns überrascht hat: Der Stromverbrauch. Trotz energieeffizienter LED-Technik ist der Energiebedarf für Beleuchtung, Klimatisierung und Belüftung erheblich. Das haben wir in der Kalkulation zwar berücksichtigt, aber die realen Zahlen liegen am oberen Ende unserer Schätzung.

Was wir noch lernen: Nährstoffmanagement. Die richtige Dosierung von Stickstoff, Phosphor und Kalium in jeder Wachstumsphase ist eine Wissenschaft für sich. Wir dokumentieren alles akribisch — pH-Wert, EC-Wert, Blattfarbe, Wuchshöhe — um für die nächsten Durchgänge besser vorbereitet zu sein.

Der Anbaurat trifft sich wöchentlich, um den Fortschritt zu besprechen und Anpassungen vorzunehmen. Transparenz gegenüber unseren Mitgliedern ist uns wichtig: Wir werden regelmäßig über den Stand berichten — auch dann, wenn mal etwas nicht nach Plan läuft.

Die nächsten Schritte: Sobald die Pflanzen groß genug sind, beginnt die Blütephase. Dann ändert sich das Lichtregime von 18/6 auf 12/12 Stunden. Bis zur ersten Ernte rechnen wir mit weiteren 8–12 Wochen. Danach folgt Trocknung, Fermentierung und Qualitätsprüfung, bevor irgendetwas an Mitglieder abgegeben wird.

Wir halten euch auf dem Laufenden.`,
    content_en: `A few weeks have passed since receiving our cultivation license in March. Time for a first, honest update from the grow rooms.

The infrastructure is in place. Lighting, ventilation, irrigation, climate control — all installed and operational. That sounds simpler than it was. The ventilation system planning alone cost us more time than expected. Odor filters, air circulation, temperature and humidity control — everything has to work together before a single plant goes into the soil.

Our first strains are in the vegetative phase. We deliberately started with robust, beginner-friendly strains — varieties that forgive mistakes and don't immediately die if a parameter is slightly off. Northern Lights and Blue Dream were our starting selection, both known for resilience and reliable growth.

What's going well: The LED lighting delivers consistent PPFD values, plants are visibly growing. We maintain daytime temperatures at 24–26°C, nighttime at 18–20°C. Relative humidity sits at 60–70% during vegetation — right on target.

What surprised us: The electricity consumption. Despite energy-efficient LED technology, the energy demand for lighting, climate control and ventilation is substantial. We accounted for this in our budget, but the real numbers are at the upper end of our estimates.

What we're still learning: Nutrient management. The right dosing of nitrogen, phosphorus and potassium at each growth stage is a science in itself. We document everything meticulously — pH value, EC value, leaf color, plant height — to be better prepared for the next cycles.

The growing council meets weekly to discuss progress and make adjustments. Transparency toward our members is important to us: we will report regularly on the status — even when things don't go according to plan.

Next steps: Once the plants are large enough, the flowering phase begins. Then the light regime changes from 18/6 to 12/12 hours. We expect another 8–12 weeks until the first harvest. Then comes drying, curing and quality testing before anything is distributed to members.

We'll keep you posted.`,
    tags: ['Anbau', 'Update', 'Indoor', 'Grow'],
    author: 'Gero Stetter',
  },
  {
    slug: 'unser-weg-zur-lizenz',
    date: '2026-04-01',
    title_de: 'Unser Weg zur Anbaulizenz — 10 Monate, die sich gelohnt haben',
    title_en: 'Our Path to the Cultivation License — 10 Months That Were Worth It',
    summary_de: 'Von der Vereinsgründung im Mai 2025 bis zur Anbaulizenz im März 2026: Was wir gelernt haben, welche Fehler wir gemacht haben und was wir anders machen würden.',
    summary_en: 'From founding the association in May 2025 to the cultivation license in March 2026: What we learned, what mistakes we made and what we would do differently.',
    content_de: `Zehn Monate. So lange hat es gedauert, von der ersten Idee bis zur offiziellen Anbaulizenz. Klingt machbar? War es auch — aber es war deutlich mehr Arbeit, als die meisten sich vorstellen.

Alles begann im Mai 2025. Zu fünft saßen wir zusammen und haben beschlossen: Wir gründen einen Cannabis Social Club in Hildesheim. Das KCanG war seit April 2024 in Kraft, die ersten Lizenzen wurden bundesweit erteilt, und wir wollten nicht nur zuschauen.

Die Vereinsgründung war der einfachste Teil. Satzung schreiben, Gründungsversammlung abhalten, Notar, Vereinsregister — das ist bürokratisch, aber überschaubar. Im September 2025 waren wir offiziell im Vereinsregister eingetragen. Was wir unterschätzt haben: Die Satzung muss KCanG-konform sein. Unsere erste Version hatte Lücken bei den Dokumentationspflichten. Die Nachbesserung hat zwei Wochen gekostet. Unser Rat: Lasst die Satzung von Anfang an von einem spezialisierten Anwalt prüfen.

Parallel haben wir das Suchtpräventionskonzept erarbeitet. Das KCanG verlangt ein konkretes, umsetzbares Konzept — keine Kopie aus dem Internet. Wir haben lokale Beratungsstellen in Hildesheim eingebunden, einen Selbsteinschätzungstest entwickelt und interne Ansprechpersonen benannt. Das Konzept war am Ende 15 Seiten lang und hat den Genehmigungsprozess nachweislich beschleunigt, weil die Behörde gesehen hat, dass wir es ernst meinen.

Die Räumlichkeiten waren der größte Engpass. Vermieter, die an einen Cannabis Social Club vermieten? Nicht einfach zu finden. Wir haben über 20 Anfragen gestellt, bevor wir am Wetzellplatz 2 fündig wurden. Die Anforderungen sind streng: Zugangskontrollen, keine Einsehbarkeit von außen, Sicherheitskonzept, Lüftungssystem mit Aktivkohlefiltern. Der Umbau hat mehr gekostet und länger gedauert als geplant.

Den Lizenzantrag haben wir im November 2025 eingereicht. Vereinsregisterauszug, Satzung, Suchtpräventionskonzept, Sicherheitskonzept, Grundrisse, Qualifikationsnachweise, Führungszeugnisse — ein Ordner voller Dokumente. Die Behörde hat professionell und zügig gearbeitet, aber es gab trotzdem Rückfragen und Nachforderungen. Im März 2026 kam dann die Genehmigung.

Was wir anders machen würden: Erstens, die Räumlichkeiten früher suchen — parallel zur Vereinsgründung, nicht danach. Zweitens, von Anfang an mehr Mitglieder einbinden. Die Arbeit auf fünf Schultern zu verteilen war grenzwertig. Drittens, ein realistischeres Budget planen. Die Gesamtkosten lagen deutlich über unserer ersten Schätzung.

Was wir richtig gemacht haben: Transparenz. Wir haben von Anfang an offen kommuniziert — gegenüber der Behörde, gegenüber unseren Mitgliedern und gegenüber der Öffentlichkeit. Das hat Vertrauen aufgebaut und Türen geöffnet.

Wer selbst einen CSC gründen möchte: Auf unserer Seite „CSC gründen" teilen wir unsere Erfahrungen im Detail — inklusive Kostenaufstellung, Zeitplan und den Fehlern, die wir gemacht haben. Schreibt uns gerne, wenn ihr Fragen habt.`,
    content_en: `Ten months. That's how long it took from the first idea to the official cultivation license. Sounds doable? It was — but it was significantly more work than most people imagine.

It all started in May 2025. Five of us sat together and decided: We're founding a Cannabis Social Club in Hildesheim. The KCanG had been in effect since April 2024, the first licenses were being granted nationwide, and we didn't want to just watch.

Founding the association was the easy part. Writing statutes, holding a founding assembly, notary, association register — bureaucratic but manageable. By September 2025, we were officially registered. What we underestimated: The statutes must be KCanG-compliant. Our first version had gaps in the documentation requirements. The revision cost two weeks. Our advice: Have the statutes reviewed by a specialized lawyer from the start.

In parallel, we developed the addiction prevention concept. The KCanG requires a concrete, implementable concept — not an internet copy. We involved local counseling centers in Hildesheim, developed a self-assessment test and appointed internal contact persons. The concept ended up being 15 pages long and demonstrably accelerated the approval process because the authority saw we take it seriously.

The premises were the biggest bottleneck. Landlords who rent to a Cannabis Social Club? Not easy to find. We made over 20 inquiries before finding our space at Wetzellplatz 2. The requirements are strict: access controls, no visibility from outside, security concept, ventilation system with activated carbon filters. The renovation cost more and took longer than planned.

We submitted the license application in November 2025. Association register extract, statutes, prevention concept, security concept, floor plans, qualification certificates, criminal record checks — a folder full of documents. The authority worked professionally and promptly, but there were still follow-up questions and additional requests. In March 2026, the approval came.

What we would do differently: First, search for premises earlier — in parallel with the association founding, not after. Second, involve more members from the start. Distributing the work among five people was borderline. Third, plan a more realistic budget. Total costs were significantly above our first estimate.

What we did right: Transparency. We communicated openly from the start — toward the authority, toward our members and toward the public. That built trust and opened doors.

If you want to found a CSC yourself: On our "Start a CSC" page, we share our experiences in detail — including cost breakdown, timeline and the mistakes we made. Feel free to reach out if you have questions.`,
    tags: ['Meilenstein', 'Gründung', 'Lizenz', 'Erfahrungsbericht'],
    author: 'Gero Stetter',
  },
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
    date: '2025-09-04',
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
