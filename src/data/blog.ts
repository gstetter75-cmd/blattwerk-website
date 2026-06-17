/**
 * Blog/News data for BlattWerk e.V.
 * New posts are added at the top of the array.
 */

export type BlogCategory = 'vereinsnews' | 'anbau' | 'recht' | 'wissen';

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
  readonly category: BlogCategory;
}

export const blogPosts: readonly BlogPost[] = [
  {
    slug: 'maryjane-berlin-2026-rueckblick',
    date: '2026-06-17',
    title_de: 'Mary Jane Berlin 2026 — unser Rückblick',
    title_en: 'Mary Jane Berlin 2026 — Our Recap',
    summary_de: 'Vier Tage Berlin, Europas größte Cannabis-Fachmesse, ein Team voller neuer Eindrücke — und konkrete Erkenntnisse, die direkt in unseren Anbaustart einfließen. Was wir mitgenommen haben.',
    summary_en: 'Four days in Berlin, Europe\'s largest cannabis trade fair, a team full of new impressions — and concrete insights flowing directly into our growing start. What we took home.',
    content_de: `Die Mary Jane ist vorbei — und wir sind zurück in Hildesheim. Zeit für einen ehrlichen Rückblick.

Wir hatten im Vorfeld bereits [angekündigt](/blog/maryjane-berlin-2026), dass wir nicht als Aussteller, sondern als lernender Verein hinfahren. Genau das haben wir getan — und es hat sich gelohnt.

**Vier Tage, viele Gespräche**

Die Mary Jane 2026 war größer als erwartet. Hunderte Aussteller aus ganz Europa, Panels zu Rechtslage, Anbautechnik, Vereinsmanagement und Prävention, und vor allem: Dutzende Gründer und Vorstände anderer Cannabis Social Clubs, die denselben Weg gegangen sind wie wir.

Was auf einer Messe dieser Größe kaum von offiziellen Bühnen kommt, erfährt man in den Gesprächen am Rande: Welche Lüftungslösungen funktionieren wirklich? Welche Behörden machen Probleme, welche kooperieren? Wie managen andere Vereine die Mitgliederverwaltung? Solche Informationen lassen sich nicht googeln.

**Was wir konkret mitnehmen**

Für unseren Anbaustart im Oktober haben wir klare Erkenntnisse gewonnen:

- **Beleuchtung:** Der Markt hat sich in den letzten zwei Jahren stark entwickelt. Wir haben uns mehrere Systeme vor Ort angesehen und werden unsere Entscheidung auf dieser Grundlage überdenken.
- **Klimatisierung:** Mehrere etablierte CSCs haben uns von ihren Erfahrungen mit Kühl- und Entfeuchtungslösungen berichtet. Konkrete Modelle, keine Werbung.
- **Vereinsstruktur:** Wie andere Vereine Mitgliederverwaltung, Abgabe-Dokumentation und Prävention organisieren — mit echten Tools, nicht mit Theorie.

**Ein Abend, der in Erinnerung bleibt**

Besonders in Erinnerung bleibt uns der Abend auf der Dachterrasse — zusammen mit Gleichgesinnten aus anderen CSCs, die wie wir einfach machen wollen, was gesetzlich möglich ist. Das Foto, das wir in der Hanf-App geteilt haben, zeigt unser Team in diesem Moment. Keine große Inszenierung, keine Bühne — einfach ein paar Menschen, die etwas aufbauen.

**Fazit**

Die Mary Jane ist nicht für jeden. Wer als Endkunde hingeht, kann sich informieren und die Branche erleben. Für uns als aktiven Verein war sie konkret nützlich: Wir haben Kontakte geknüpft, Fragen beantwortet bekommen, die uns seit Monaten beschäftigen, und einen Überblick über den Stand der Dinge gewonnen.

Nächstes Jahr kommen wir wieder — vielleicht mit eigenem Stand.`,
    content_en: `Mary Jane is over — and we're back in Hildesheim. Time for an honest recap.

We had [announced beforehand](/blog/maryjane-berlin-2026) that we were going not as exhibitors but as a club looking to learn. That's exactly what we did — and it was worth it.

**Four days, many conversations**

Mary Jane 2026 was bigger than expected. Hundreds of exhibitors from across Europe, panels on legal situation, cultivation technology, club management and prevention, and above all: dozens of founders and board members from other Cannabis Social Clubs who have taken the same path as us.

What rarely comes from the official stages at a fair this size, you learn in conversations on the sidelines: which ventilation solutions actually work? Which authorities create problems, which cooperate? How do other clubs manage member administration? That kind of information you can't google.

**What we're taking home**

For our growing start in October, we came away with clear insights:

- **Lighting:** The market has evolved significantly in the past two years. We looked at several systems in person and will reconsider our decision on this basis.
- **Climate control:** Several established CSCs shared their experience with cooling and dehumidification solutions. Concrete models, no advertising.
- **Club structure:** How other clubs organise member management, distribution documentation and prevention — with real tools, not theory.

**An evening to remember**

What sticks in our memory most is the evening on the rooftop terrace — together with like-minded people from other CSCs, all simply trying to do what is legally possible. The photo we shared in the Hanf-App shows our team in that moment. No staging, no spotlight — just a few people building something.

**Takeaway**

Mary Jane isn't for everyone. Those who attend as end consumers can get informed and experience the industry. For us as an active association it was concretely useful: we made contacts, got answers to questions that had been on our minds for months, and gained an overview of where things stand.

Next year we'll be back — perhaps with our own stand.`,
    tags: ['Mary Jane', 'Berlin', 'Messe', 'Netzwerk', 'Rückblick'],
    author: 'Gero Stetter',
    category: 'vereinsnews',
  },
  {
    slug: 'anbau-update-juni-2026',
    date: '2026-06-11',
    title_de: 'Anbau-Update Juni 2026 — Räume stehen, Genehmigung beantragt',
    title_en: 'Growing update June 2026 — premises secured, permit applied for',
    summary_de: 'Die Räumlichkeiten für unseren Anbau stehen fest, das Konzept ist ausgearbeitet und die Nutzungsänderung bei der Stadt beantragt. Jetzt warten wir auf das grüne Licht.',
    summary_en: 'Our growing premises are secured, the concept is finalised and the change-of-use application has been submitted to the city. Now we are waiting for the green light.',
    content_de: `Wir können ein weiteres Kapitel aufschlagen: Die Vorbereitungen für unseren Anbaustart sind in vollem Gange — und wir möchten euch auf dem Laufenden halten.

**Die Räumlichkeiten stehen**

Nach langer Suche haben wir geeignete Räumlichkeiten für unseren Anbau gefunden und gesichert. Die Lage, die Größe und die baulichen Voraussetzungen passen zu unserem Anbaukonzept. Das war einer der aufwändigsten Schritte im gesamten Prozess — und er ist geschafft.

**Das Anbaukonzept steht**

Parallel zur Raumsuche haben wir unser Anbaukonzept ausgearbeitet: Wie wird beleuchtet, belüftet, bewässert? Welche Ernte- und Trocknungsinfrastruktur brauchen wir? Das alles ist auf unsere Mitgliederzahl und Bedarfsmengen abgestimmt und auf dem Papier fertig. Die Ausstattung selbst bestellen wir erst, wenn die Genehmigung vorliegt — das macht organisatorisch und finanziell mehr Sinn.

**Nutzungsänderung beantragt**

Der nächste formale Schritt ist eingereicht: Wir haben bei der Stadt Hildesheim die Genehmigung zur Nutzungsänderung für die Räumlichkeiten beantragt. Das ist ein reguläres Verfahren, das wir bei der Suche nach geeigneten Räumlichkeiten bereits eingeplant haben. Jetzt liegt der Ball bei der Behörde.

**Was als nächstes kommt**

Sobald die Genehmigung erteilt ist, bestellen wir die Ausstattung und beginnen den Ausbau der Räumlichkeiten. Danach folgt die Einrichtung der Anbauinfrastruktur — und dann endlich der Anbaustart.

Wir halten euch hier im Blog und über unsere Mitgliederkommunikation auf dem Laufenden. Es geht voran.`,
    content_en: `We can turn another page: preparations for our growing start are in full swing — and we want to keep you up to date.

**Premises secured**

After a long search, we have found and secured suitable premises for our cultivation. The location, size and structural conditions match our growing concept. This was one of the most demanding steps in the entire process — and it is done.

**Growing concept finalised**

In parallel with the search for premises, we have worked out our growing concept: how will lighting, ventilation and irrigation be set up? What harvest and drying infrastructure do we need? All of this is tailored to our membership numbers and required quantities, and is ready on paper. We will order the actual equipment once the permit is in place — which makes more sense organisationally and financially.

**Change-of-use application submitted**

The next formal step has been taken: we have submitted an application to the City of Hildesheim for a change of use for the premises. This is a standard procedure that we already accounted for when looking for suitable premises. The ball is now in the authority's court.

**What comes next**

Once the permit is granted, we will order the equipment and begin fitting out the premises. After that comes the installation of the growing infrastructure — and then finally the growing start.

We will keep you updated here on the blog and through our member communications. Things are moving forward.`,
    tags: ['Anbau', 'Vorbereitung', 'Räumlichkeiten', 'Nutzungsänderung', 'Update'],
    author: 'Gero Stetter',
    category: 'vereinsnews',
  },
  {
    slug: 'cannabis-abgabe-so-funktioniert-es',
    date: '2026-06-09',
    title_de: 'So läuft die Cannabis-Abgabe bei BlattWerk ab',
    title_en: 'How cannabis distribution works at BlattWerk',
    summary_de: 'Wie läuft der Cannabis-Bezug im CSC konkret ab? Was muss ich mitbringen, wie viel darf ich bekommen und was passiert bei der Abgabe? Alle Antworten im Überblick.',
    summary_en: 'How does cannabis distribution at a CSC actually work? What do I need to bring, how much can I receive and what happens at the point of distribution? All the answers in one overview.',
    content_de: `Viele Interessierte und neue Mitglieder stellen sich dieselbe Frage: Wie läuft das bei BlattWerk eigentlich ab, wenn ich Cannabis beziehen möchte? Wir erklären den Prozess von Anfang bis Ende.

**Grundvoraussetzung: Vollmitgliedschaft**

Cannabis kann nur von Vollmitgliedern bezogen werden — nicht von Passivmitgliedern und nicht von Nicht-Mitgliedern. Die Vollmitgliedschaft setzt eine abgeschlossene Ausweiskontrolle durch ein Vorstandsmitglied voraus.

**Schritt 1: Vorbeikommen**

Die Abgabe findet in unserem Vereinsbüro am Wetzellplatz 2 in Hildesheim statt. Du kommst persönlich vorbei — keine Lieferung, kein Versand. Das ist gesetzlich so vorgeschrieben: Cannabis darf nur direkt vor Ort an Mitglieder abgegeben werden.

**Schritt 2: Ausweis und Mitgliedsausweis**

Du bringst deinen Personalausweis oder Reisepass mit. Die Identitätsprüfung ist bei jeder Abgabe verpflichtend — nicht nur bei der ersten.

**Schritt 3: Mengengrenzen**

Das KCanG legt klare Grenzen fest:
- Maximal **25 Gramm pro Tag**
- Maximal **50 Gramm pro Kalendermonat**

Diese Grenzen gelten für alle Clubs in Deutschland. Wir dokumentieren jede Abgabe, wie es das Gesetz verlangt.

**Schritt 4: Preis**

Du zahlst den Selbstkostenpreis — das sind die anteiligen Kosten für Anbau, Energie, Material und Verarbeitung. Kein Gewinnaufschlag. Der genaue Preis variiert je nach Sorte und Erntemenge und wird vor der Abgabe kommuniziert.

**Schritt 5: Verpackung und Dokumentation**

Das Cannabis wird in neutraler, kindersicherer Verpackung mit Pflichtangaben nach KCanG ausgegeben: Sortenname, THC/CBD-Gehalt, Erntedatum, Warnhinweise.

**Was du nicht tun darfst**

Das Cannabis ist ausschließlich für deinen persönlichen Konsum. Weitergabe an Dritte — auch unentgeltlich — ist strafbar. Das gilt auch für den Transport: Unterwegs darfst du maximal 25 Gramm mitführen.

**Wann geht es los?**

Aktuell läuft unsere Anbau-Vorbereitung. Die erste Abgabe wird stattfinden, sobald die erste Ernte qualitätsgeprüft und freigegeben ist. Wir informieren alle Mitglieder rechtzeitig per E-Mail und hier im Blog.`,
    content_en: `Many interested people and new members ask the same question: how does it actually work at BlattWerk when I want to obtain cannabis? We explain the process from start to finish.

**Basic requirement: Full membership**

Cannabis can only be obtained by full members — not by passive members and not by non-members. Full membership requires a completed ID check by a board member.

**Step 1: Come in person**

Distribution takes place at our club office at Wetzellplatz 2 in Hildesheim. You come in person — no delivery, no postal service. This is legally required: cannabis may only be handed over directly on-site to members.

**Step 2: ID and membership card**

Bring your ID card or passport. Identity verification is mandatory at every distribution — not just the first time.

**Step 3: Quantity limits**

The KCanG sets clear limits:
- Maximum **25 grams per day**
- Maximum **50 grams per calendar month**

These limits apply to all clubs in Germany. We document every distribution as required by law.

**Step 4: Price**

You pay the cost price — the proportional costs for growing, energy, materials and processing. No profit markup. The exact price varies by strain and harvest quantity and will be communicated before distribution.

**Step 5: Packaging and documentation**

Cannabis is dispensed in neutral, child-resistant packaging with mandatory information under the KCanG: strain name, THC/CBD content, harvest date, warning notices.

**What you must not do**

The cannabis is exclusively for your personal consumption. Passing it on to third parties — even for free — is a criminal offence. This also applies to transport: you may carry a maximum of 25 grams when out and about.

**When does it start?**

Our growing preparations are currently underway. The first distribution will take place once the first harvest has been quality-checked and approved. We will notify all members in good time by email and here on the blog.`,
    tags: ['Abgabe', 'Mitgliedschaft', 'KCanG', 'Prozess', 'FAQ'],
    author: 'Redaktion BlattWerk e.V.',
    category: 'vereinsnews',
  },
  {
    slug: 'cannabis-social-club-hildesheim',
    date: '2026-06-08',
    title_de: 'Cannabis Social Club in Hildesheim — was BlattWerk e.V. bietet',
    title_en: 'Cannabis Social Club in Hildesheim — what BlattWerk e.V. offers',
    summary_de: 'BlattWerk e.V. ist der erste lizenzierte Cannabis Social Club in Hildesheim und der Region. Was das bedeutet, was wir anbieten und warum der Standort Hildesheim für uns eine bewusste Entscheidung war.',
    summary_en: 'BlattWerk e.V. is the first licensed Cannabis Social Club in Hildesheim and the region. What this means, what we offer, and why Hildesheim as a location was a deliberate choice.',
    content_de: `Seit dem 1. April 2024 ist Cannabis-Anbau in Vereinen in Deutschland legal — geregelt durch das Konsumcannabisgesetz (KCanG). Seitdem entstehen Cannabis Social Clubs (CSCs) im ganzen Land. BlattWerk e.V. ist der erste lizenzierte CSC in Hildesheim.

**Hildesheim als bewusste Entscheidung**

Wir sind alle aus Hildesheim oder dem direkten Umland. Die Idee war von Anfang an klar: Wir gründen einen Club für die Menschen hier — nicht irgendwo, sondern in unserer Stadt. Hildesheim hat eine lebendige Vereinskultur, eine junge Bevölkerung und eine Verwaltung, die dem Thema aufgeschlossen begegnet ist.

**Was BlattWerk anbietet**

Als lizenzierte Anbauvereinigung nach dem KCanG bieten wir unseren Mitgliedern:

- **Legalen Cannabis-Bezug** direkt aus unserem Anbau, ohne Zwischenhändler
- **Geprüfte Qualität** — jede Ernte wird auf Reinheit und Cannabinoid-Gehalt analysiert
- **Transparenz** über Herkunft, Anbaumethode und Inhaltsstoffe
- **Mitbestimmung** bei der Sortenauswahl und der Vereinsentwicklung
- **Präventionsangebote** und ehrliche Aufklärung über Cannabis und Risiken

**Wer bei BlattWerk Mitglied werden kann**

Jeder Erwachsene mit Wohnsitz in Deutschland kann Mitglied werden — unabhängig davon, ob man in Hildesheim wohnt oder aus dem Umland kommt (Hannover, Alfeld, Peine, Salzgitter, Hameln). Das KCanG erlaubt die Mitgliedschaft in einem Club, unabhängig vom Wohnort, solange man in Deutschland gemeldet ist.

**Anbaulizenz seit März 2026**

Die offizielle Anbaugenehmigung wurde uns am 18. März 2026 erteilt. Damit sind wir eine der wenigen lizenzierten Anbauvereinigungen in Niedersachsen. Aktuell laufen die Vorbereitungen für unseren ersten Grow.

**Interesse?**

Wer Mitglied werden möchte oder einfach mehr erfahren will: Komm zu unserer wöchentlichen Sprechstunde (jeden Mittwoch, 18–20 Uhr, Wetzellplatz 2 Hildesheim) oder schreib uns über das Kontaktformular.`,
    content_en: `Since 1 April 2024, cannabis cultivation in clubs has been legal in Germany — regulated by the Cannabis Act (KCanG). Since then, Cannabis Social Clubs (CSCs) have been forming across the country. BlattWerk e.V. is the first licensed CSC in Hildesheim.

**Hildesheim as a deliberate choice**

We are all from Hildesheim or the immediate surrounding area. The idea was clear from the start: we are founding a club for the people here — not somewhere abstract, but in our city. Hildesheim has a lively club culture, a young population and an administration that approached the topic openly.

**What BlattWerk offers**

As a licensed cultivation association under the KCanG, we offer our members:

- **Legal cannabis access** directly from our own cultivation, without middlemen
- **Tested quality** — every harvest is analysed for purity and cannabinoid content
- **Transparency** about origin, growing method and ingredients
- **Co-determination** on strain selection and club development
- **Prevention services** and honest education about cannabis and risks

**Who can join BlattWerk**

Any adult registered in Germany can become a member — regardless of whether they live in Hildesheim or come from the surrounding area (Hanover, Alfeld, Peine, Salzgitter, Hameln). The KCanG allows membership in one club regardless of place of residence, as long as you are registered in Germany.

**Cultivation licence since March 2026**

The official cultivation permit was granted to us on 18 March 2026. This makes us one of the few licensed cultivation associations in Lower Saxony. Preparations for our first grow are currently underway.

**Interested?**

Anyone who wants to become a member or simply find out more: come to our weekly office hour (every Wednesday, 6–8 pm, Wetzellplatz 2 Hildesheim) or write to us via the contact form.`,
    tags: ['Hildesheim', 'Cannabis Social Club', 'Niedersachsen', 'KCanG', 'Mitgliedschaft'],
    author: 'Redaktion BlattWerk e.V.',
    category: 'vereinsnews',
  },
  {
    slug: 'maryjane-berlin-2026',
    date: '2026-06-10',
    title_de: 'BlattWerk auf der Mary Jane Berlin — wir sind dabei',
    title_en: 'BlattWerk at Mary Jane Berlin — we\'re there',
    summary_de: 'Vom 11. bis 14. Juni 2026 ist BlattWerk e.V. auf der Mary Jane in Berlin. Europas größte Cannabis-Fachmesse — und wir mittendrin.',
    summary_en: 'From June 11 to 14, 2026, BlattWerk e.V. will be at Mary Jane in Berlin. Europe\'s largest cannabis trade fair — and we\'ll be right in the middle of it.',
    content_de: `Diese Woche ist es so weit: BlattWerk e.V. fährt als Besucher zur Mary Jane nach Berlin.

Die Mary Jane ist Europas führende Cannabis-Fachmesse — vier Tage voller Aussteller, Vorträge, Netzwerken und allem, was die Cannabis-Branche gerade bewegt. Wir sind nicht als Aussteller dabei, sondern als Verein, der lernen, Kontakte knüpfen und sich einen Überblick verschaffen möchte.

**Was uns interessiert**

Unser Fokus liegt auf dem Praktischen: Welche Anbauausstattung hat sich in anderen Vereinen bewährt? Welche Sorten funktionieren für den Indoor-Grow besonders gut? Was hat sich bei der Behördenkommunikation geändert? Solche Fragen lassen sich nirgendwo besser klären als in direkten Gesprächen mit Leuten, die es bereits tun.

**Ihr seid auch da?**

Wenn ihr auf der Mary Jane seid und uns begegnet — sprecht uns gerne an. Wir freuen uns über den Austausch.

**Was wir mitnehmen**

Alles, was wir auf der Messe lernen, fließt in unsere Vorbereitung für den Anbaustart im Oktober ein. Den Bericht gibt es hier im Blog nach unserer Rückkehr.`,
    content_en: `This week it's time: BlattWerk e.V. is heading to Mary Jane in Berlin — as visitors.

Mary Jane is Europe's leading cannabis trade fair — four days full of exhibitors, talks, networking and everything that's currently moving the cannabis industry. We're not there as exhibitors, but as a club looking to learn, make contacts and get an overview.

**What we're interested in**

Our focus is on the practical: which growing equipment has proven itself in other clubs? Which strains work particularly well for indoor grows? What has changed in communication with authorities? These questions are best answered in direct conversations with people who are already doing it.

**You're there too?**

If you're at Mary Jane and run into us — feel free to say hi. We're happy to exchange ideas.

**What we'll take home**

Everything we learn at the fair will flow into our preparation for the growing start in October. The follow-up report will be here on the blog after our return.`,
    tags: ['Mary Jane', 'Messe', 'Berlin', 'Netzwerk'],
    author: 'Gero Stetter',
    category: 'vereinsnews',
  },
  {
    slug: 'sortenauswahl-erster-grow',
    date: '2026-06-10',
    title_de: 'Unsere Sortenauswahl für den ersten Grow',
    title_en: 'Our Strain Selection for the First Grow',
    summary_de: 'Welche Sorten bauen wir als erstes an — und warum? Ein Blick in unsere Überlegungen zu Genetics, THC/CBD, Terpenen und Anbautauglichkeit.',
    summary_en: 'Which strains will we grow first — and why? A look into our thinking on genetics, THC/CBD, terpenes and grow suitability.',
    content_de: `Eine der spannendsten Fragen bei der Vorbereitung: Welche Sorten bauen wir als erstes an?

Die Entscheidung ist nicht trivial. Als CSC haben wir eine Verantwortung gegenüber unseren Mitgliedern — wir wollen Vielfalt bieten, aber auch Verlässlichkeit. Gerade beim ersten Grow zählt Stabilität mehr als Experimentierfreude.

**Unsere Auswahlkriterien**

Bei der Sortenauswahl orientieren wir uns an mehreren Faktoren:

- **Anbautauglichkeit Indoor:** Wir suchen Sorten mit kompaktem Wuchs, guter Resistenz gegen Schimmel und Schädlinge und einer vorhersehbaren Blütezeit von 8–10 Wochen.
- **Cannabinoid-Profil:** Wir wollen eine ausgewogene Mischung aus [THC](/wissensdatenbank/cannabinoids/thc)-starken Sorten, [CBD](/wissensdatenbank/cannabinoids/cbd)-betonten Sorten und mittleren Profilen — so decken wir unterschiedliche Bedürfnisse unserer Mitglieder ab.
- **Terpenspektrum:** Aromatische Vielfalt ist uns wichtig. Wir achten auf ein breites [Terpenspektrum](/wissensdatenbank/terpenes/was-sind-terpene): von erdigen Myrcen-lastigen Sorten bis zu fruchtig-terpinhaltigen Profilen.
- **Verfügbarkeit und Stabilität:** Wir setzen auf Sorten von renommierten Saatgutanbietern mit stabilen, dokumentierten Genetiken — keine Exoten, die im ersten Grow unberechenbar sein könnten.

**Indica, Sativa, Hybrid**

Unser erster Grow wird aus allen drei Typen bestehen. Die genaue Aufteilung richtet sich nach dem Feedback unserer Mitglieder — wer Wünsche hat, kann sich gerne melden.

**In der Sortendatenbank**

Alle Sorten, die wir in Betracht ziehen, sind in unserer [Sortendatenbank](/sortendatenbank) dokumentiert. Der Sortenvergleich hilft euch, die Unterschiede auf einen Blick zu sehen.

Die finale Liste geben wir rechtzeitig vor dem Anbaustart bekannt.`,
    content_en: `One of the most exciting questions in our preparation: which strains will we grow first?

The decision isn't trivial. As a CSC, we have a responsibility to our members — we want to offer variety, but also reliability. Especially in the first grow, stability matters more than experimentation.

**Our Selection Criteria**

- **Indoor suitability:** Compact growth, good resistance to mould and pests, predictable flowering time of 8–10 weeks.
- **Cannabinoid profile:** A balanced mix of [THC](/wissensdatenbank/cannabinoids/thc)-strong, [CBD](/wissensdatenbank/cannabinoids/cbd)-focused and medium profiles.
- **Terpene spectrum:** Broad aromatic variety — learn more about [terpene profiles](/wissensdatenbank/terpenes/was-sind-terpene).
- **Stability:** Strains from reputable seed banks with documented genetics.

**Indica, Sativa, Hybrid**

Our first grow will include all three types. The exact split depends on member feedback — if you have preferences, feel free to get in touch.

**In the Strain Database**

All strains we're considering are documented in our [strain database](/sortendatenbank). The comparison tool helps you see the differences at a glance.

The final list will be announced well before the growing start.`,
    tags: ['Sorten', 'Genetics', 'Indoor', 'Planung'],
    author: 'Gero Stetter',
    category: 'anbau',
  },
  {
    slug: 'vereinsleben-juni-2026',
    date: '2026-06-10',
    title_de: 'Vereinsleben bei BlattWerk — was gerade passiert',
    title_en: 'Club Life at BlattWerk — What\'s Happening Right Now',
    summary_de: 'Ein Blick hinter die Kulissen: Was tut sich gerade bei BlattWerk e.V.? Treffen, Workshops, Vorbereitungen und wie du dich einbringen kannst.',
    summary_en: 'A look behind the scenes: what\'s going on at BlattWerk e.V. right now? Meetings, workshops, preparations and how you can get involved.',
    content_de: `Es ist ruhig auf der Website — aber im Verein ist einiges los. Hier ein ehrlicher Einblick in das, was bei BlattWerk e.V. gerade passiert.

**Vorstandstreffen und Planung**

Der Vorstand trifft sich regelmäßig, um die Vorbereitung auf den Anbaustart zu koordinieren. Die Themen: Raumeinrichtung, Budgetplanung, Sortenauswahl, Mitgliederverwaltung und rechtliche Fragen. Viel davon ist Kleinstarbeit, die nach außen kaum sichtbar ist — aber die Basis für alles weitere legt.

**Anbauräume werden eingerichtet**

Die Einrichtung unserer Anbauräume läuft. Wir sind dabei, Beleuchtung, Belüftung und Bewässerung Schritt für Schritt aufzubauen. Wer handwerklich fit ist und Lust hat zu helfen, darf sich gerne melden — solche Unterstützung ist immer willkommen.

**Workshops für Mitglieder**

Im Sommer 2026 planen wir erste interne Workshops für Mitglieder:

- **Grow-Grundlagen** — Was passiert in den einzelnen Wachstumsphasen? Worauf kommt es bei Licht, Substrat und Nährstoffen an?
- **Safer Use** — Verantwortungsvoller Konsum, Wechselwirkungen, Grenzen kennen.
- **Rechtliches Update** — Was hat sich beim KCanG getan? Was ist als Mitglied relevant?

Die genauen Termine werden wir rechtzeitig hier im Blog und über die Hanf-App bekanntgeben.

**Mitgliederwachstum**

Wir wachsen. Ohne genaue Zahlen zu nennen: Der Verein hat in den letzten Wochen neue Mitglieder gewonnen — Menschen aus Hildesheim und Umgebung, die eine legale, transparente Alternative zum Schwarzmarkt suchen. Genau dafür sind wir angetreten.

Wer noch nicht Mitglied ist: Der Beitritt läuft über die Hanf-App, der monatliche Beitrag beträgt 10 €. Alle Infos auf unserer [Mitgliedschaftsseite](/mitgliedschaft).

**Wie du dich einbringen kannst**

BlattWerk lebt von denen, die mitmachen. Du musst nicht hauptberuflich dabei sein — auch kleine Beiträge zählen:

- Bei der Einrichtung der Anbauräume helfen
- An Workshops und Infoveranstaltungen teilnehmen
- Ideen und Feedback einbringen
- Einfach dabei sein und die Gemeinschaft mitgestalten

Schreib uns bei Interesse: [info@blattwerk.dev](mailto:info@blattwerk.dev)

**Nächster Meilenstein: Oktober 2026**

Anbaustart. Bis dahin arbeiten wir weiter — und halten euch hier auf dem Laufenden.`,
    content_en: `It\'s quiet on the website — but there\'s plenty happening in the club. Here\'s an honest look at what\'s going on at BlattWerk e.V. right now.

**Board Meetings and Planning**

The board meets regularly to coordinate preparations for the growing start. Topics include: setting up growing facilities, budget planning, strain selection, member management and legal questions. Much of this is small-scale work that\'s barely visible externally — but it lays the foundation for everything else.

**Growing Facilities Being Set Up**

The setup of our growing facilities is underway. We\'re working step by step on lighting, ventilation and irrigation. If you\'re handy and want to help, feel free to get in touch — that kind of support is always welcome.

**Workshops for Members**

In summer 2026, we are planning the first internal workshops for members:

- **Growing Basics** — What happens during the different growth phases? What matters with light, substrate and nutrients?
- **Safer Use** — Responsible consumption, interactions, knowing your limits.
- **Legal Update** — What\'s changed with the KCanG? What\'s relevant for members?

Exact dates will be announced here on the blog and via the Hanf-App in good time.

**Member Growth**

We\'re growing. Without naming exact figures: the club has gained new members in recent weeks — people from Hildesheim and the surrounding area looking for a legal, transparent alternative to the black market. That\'s exactly what we set out to achieve.

Not yet a member? Joining is done via the Hanf-App, with a monthly fee of €10. All details on our [membership page](/mitgliedschaft).

**How You Can Get Involved**

BlattWerk lives through the people who participate. You don\'t have to be fully committed — small contributions count too:

- Help set up the growing facilities
- Attend workshops and info events
- Share ideas and feedback
- Simply be part of it and help shape the community

Interested? Write to us: info@blattwerk.dev

**Next Milestone: October 2026**

Growing start. Until then, we keep working — and we\'ll keep you posted here.`,
    tags: ['Vereinsleben', 'Community', 'Workshops', 'Mitgliedschaft'],
    author: 'Gero Stetter',
    category: 'vereinsnews',
  },
  {
    slug: 'unser-anbaukonzept',
    date: '2026-06-10',
    title_de: 'Unser Anbaukonzept — Philosophie, Setup und Qualitätssicherung',
    title_en: 'Our Growing Concept — Philosophy, Setup and Quality Assurance',
    summary_de: 'Wie wir anbauen werden: indoor, kontrolliert, qualitätsorientiert. Ein Einblick in unser Anbaukonzept — von der Beleuchtung bis zur Qualitätsprüfung vor der Abgabe.',
    summary_en: 'How we will grow: indoor, controlled, quality-focused. A look into our growing concept — from lighting to quality testing before distribution.',
    content_de: `Mit dem Anbaustart im Oktober 2026 rückt die Frage, wie wir eigentlich anbauen werden, immer konkreter. Wir haben die letzten Monate genutzt, um unser Anbaukonzept auszuarbeiten — und möchten es hier transparent vorstellen.

**Unsere Philosophie: Qualität vor Quantität**

Wir sind kein Gewerbebetrieb. Wir bauen für unsere Mitglieder an — nicht für den Markt, nicht für Gewinn. Das verändert die Prioritäten grundlegend. Für uns steht Qualität an erster Stelle: kontrollierte Bedingungen, sorgfältige Sortenauswahl und lückenlose Dokumentation. Lieber eine kleinere Ernte mit konsistenter Qualität als eine große mit Kompromissen.

**Indoor-Anbau: Warum wir auf Kontrolle setzen**

Wir setzen auf Indoor-Anbau in kontrollierten Räumlichkeiten. Das hat konkrete Gründe: konstante Bedingungen unabhängig von Jahreszeit und Wetter, vollständige Kontrolle über Temperatur, Luftfeuchtigkeit, Licht und Nährstoffe, kein Eintrag von Schädlingen oder Umwelteinflüssen von außen und eine ganzjährig planbare Erntefolge.

Gerade für einen CSC, der verlässlich an seine Mitglieder abgeben möchte, ist Berechenbarkeit wichtig. Outdoor-Anbau hat seine Vorzüge — für uns ist der Indoor-Weg zum jetzigen Zeitpunkt der richtige.

**Beleuchtung: Full-Spectrum LED**

Wir setzen auf moderne Full-Spectrum LED-Technik. Gegenüber HPS-Lampen bieten LEDs deutliche Vorteile: niedrigerer Energieverbrauch, weniger Wärmeentwicklung und ein besseres Lichtspektrum für alle Wachstumsphasen. Qualitäts-LEDs mit Samsung LM301H-Dioden liefern den PPFD-Wert, den unsere Pflanzen für optimale Entwicklung brauchen. Mehr Hintergründe in unserem Artikel [Beleuchtung im Cannabis-Indoor-Grow](/wissensdatenbank/growing/beleuchtung-led-guide).

**Substrat und Nährstoffe: organisch wo möglich**

Wir arbeiten mit hochwertigem Kokos-Substrat in Kombination mit organischen [Nährstoffen](/wissensdatenbank/growing/naehrstoffe-duengung). Die biologische Komponente verbessert das [Terpenprofil](/wissensdatenbank/terpenes/was-sind-terpene) der Ernte und führt zu einem reineren Endprodukt. Synthetische Dünger werden nur dort eingesetzt, wo es fachlich sinnvoll ist.

**Qualitätssicherung vor der Abgabe**

Bevor eine Ernte an Mitglieder abgegeben wird, durchläuft sie eine mehrstufige Qualitätssicherung: Sichtprüfung auf Schimmel, Schädlinge und Verunreinigungen, externe Laboranalyse auf THC/CBD-Gehalt und Schadstoffe sowie Dokumentation von Sorte, Erntedatum und Analyseergebnis.

Jedes Mitglied soll beim Bezug genau wissen, was es bekommt — Sorte, Potenz, Terpenspektrum. Keine Unsicherheit, keine Streckmittel.

**Trocknung und Fermentierung**

Der letzte Schritt vor der Abgabe ist oft der unterschätzte: eine sorgfältige [Trocknung und Fermentierung](/wissensdatenbank/growing/trocknung-fermentierung) (10–14 Tage bei 60–65% Luftfeuchtigkeit in luftdichten Behältern). Erst dieser Prozess entfaltet das volle Geschmacks- und Aromaprofil einer Sorte.

**Ausblick**

In den kommenden Wochen schließen wir die Einrichtung unserer Anbauräume ab. Ab Oktober geht's los — und wir werden euch hier regelmäßig über den Fortschritt informieren.

Fragen zum Anbaukonzept? Schreibt uns: [info@blattwerk.dev](mailto:info@blattwerk.dev)`,
    content_en: `With our growing start in October 2026 approaching, the question of how we will actually grow is becoming increasingly concrete. We've used the past months to develop our growing concept — and we want to present it here transparently.

**Our Philosophy: Quality over Quantity**

We are not a commercial operation. We grow for our members — not for the market, not for profit. This fundamentally shifts priorities. For us, quality comes first: controlled conditions, careful strain selection and complete documentation. We'd rather have a smaller harvest with consistent quality than a large one with compromises.

**Indoor Growing: Why We Prioritise Control**

We rely on indoor growing in controlled premises. There are concrete reasons: consistent conditions regardless of season and weather, complete control over temperature, humidity, light and nutrients, no introduction of pests or external environmental influences, and a year-round plannable harvest cycle.

Particularly for a CSC that wants to reliably supply its members, predictability matters. Outdoor growing has its merits — for us, the indoor path is the right one at this stage.

**Lighting: Full-Spectrum LED**

We use modern full-spectrum LED technology. Compared to HPS lamps, LEDs offer clear advantages: lower energy consumption, less heat generation and a better light spectrum for all growth phases. Quality LEDs with Samsung LM301H diodes deliver the PPFD values our plants need for optimal development. More background in our article [Lighting in Cannabis Indoor Growing](/wissensdatenbank/growing/beleuchtung-led-guide).

**Substrate and Nutrients: Organic Where Possible**

We work with high-quality coco substrate combined with organic [nutrients](/wissensdatenbank/growing/naehrstoffe-duengung). The biological component improves the [terpene profile](/wissensdatenbank/terpenes/was-sind-terpene) of the harvest and leads to a cleaner end product. Synthetic fertilisers are only used where professionally appropriate.

**Quality Assurance Before Distribution**

Before a harvest is distributed to members, it goes through a multi-stage quality assurance process: visual inspection for mould, pests and contamination, external laboratory analysis for THC/CBD content and contaminants, and documentation of strain, harvest date and analysis result.

Every member should know exactly what they're receiving — strain, potency, terpene spectrum. No uncertainty, no adulterants.

**Drying and Curing**

The final step before distribution is often the underestimated one: careful [drying and curing](/wissensdatenbank/growing/trocknung-fermentierung) (10–14 days at 60–65% humidity in airtight containers). Only this process fully develops the flavour and aroma profile of a strain.

**Outlook**

In the coming weeks, we will complete the setup of our growing facilities. Starting in October, we're off — and we'll keep you regularly updated here on progress.

Questions about our growing concept? Write to us: info@blattwerk.dev`,
    tags: ['Anbau', 'Qualität', 'Indoor', 'Konzept', 'Transparenz'],
    author: 'Gero Stetter',
    category: 'anbau',
  },
  {
    slug: 'kcang-2026-was-hat-sich-geaendert',
    date: '2026-04-14',
    title_de: 'KCanG 2026 — Was hat sich seit Inkrafttreten geändert?',
    title_en: 'KCanG 2026 — What Has Changed Since It Took Effect?',
    summary_de: 'Zwei Jahre nach dem Konsumcannabisgesetz — wie viele CSCs sind lizenziert, welche Herausforderungen bestehen und was steht als Nächstes an?',
    summary_en: 'Two years after the Cannabis Act — how many CSCs are licensed, what challenges remain and what comes next?',
    content_de: `Am 1. April 2024 trat das Konsumcannabisgesetz (KCanG) in Kraft. Zwei Jahre später lässt sich eine erste Bilanz ziehen: Was wurde umgesetzt, wo hakt es, und was steht noch aus?

**Lizenzierte Anbauvereinigungen in Deutschland**

Stand April 2026 sind bundesweit rund 300 Cannabis Social Clubs offiziell lizenziert. Die Verteilung ist ungleichmäßig: Nordrhein-Westfalen, Berlin und Bayern haben die meisten genehmigten Vereine, während einige Bundesländer — darunter Sachsen und das Saarland — deutlich weniger Genehmigungen erteilt haben. Die Unterschiede liegen vor allem an den zuständigen Landesbehörden und deren Auslegung der Genehmigungsvoraussetzungen.

**Herausforderungen in der Praxis**

Die größten Hürden für Anbauvereinigungen sind nach wie vor struktureller Natur. Geeignete Räumlichkeiten zu finden, die sowohl den baurechtlichen als auch den sicherheitstechnischen Anforderungen entsprechen, bleibt schwierig. Viele Vereine berichten von Problemen bei der Kontoeröffnung, da einige Banken die Zusammenarbeit mit Cannabis-Vereinen ablehnen. Die Bürokratie — von der Antragstellung bis zur endgültigen Genehmigung — dauert in den meisten Bundesländern zwischen drei und neun Monaten.

**Was funktioniert**

Die Präventionsarbeit in den Clubs hat sich als Stärke des Modells erwiesen. Die gesetzlich vorgeschriebenen Suchtpräventionsbeauftragten, regelmäßige Informationsveranstaltungen und der direkte Kontakt zu Mitgliedern ermöglichen eine niedrigschwellige Aufklärung. Auch der Gemeinschaftsaspekt wird von vielen Mitgliedern positiv bewertet.

**Niedersachsen im Detail**

In Niedersachsen ist das LAVES für die Genehmigung zuständig. Das Verfahren gilt als vergleichsweise strukturiert. Aktuell sind im Land mehrere Vereine lizenziert, darunter BlattWerk e.V. in Hildesheim. Die Zusammenarbeit mit den Behörden verläuft sachlich und lösungsorientiert.

**Ausblick: Modellprojekte für kommerziellen Verkauf**

Die zweite Säule des KCanG — regionale Modellprojekte für den kommerziellen Verkauf in lizenzierten Fachgeschäften — befindet sich weiterhin in der Vorbereitungsphase. Mehrere Kommunen haben Interesse bekundet, konkrete Starttermine stehen jedoch noch aus. Die wissenschaftliche Begleitforschung wird die Auswirkungen auf Gesundheitsschutz, Jugendschutz und den Schwarzmarkt untersuchen.

Weitere Informationen zur rechtlichen Grundlage findest du in unserem Artikel [KCanG im Überblick](/wissensdatenbank/legal/kcang-ueberblick). Wer selbst einen CSC gründen möchte, findet auf unserer Seite [CSC gründen](/csc-gruendung) einen Praxisleitfaden mit Erfahrungswerten.`,
    content_en: `On April 1, 2024, the Cannabis Act (KCanG) came into effect. Two years later, it is time for an initial assessment: what has been implemented, where are the problems, and what remains to be done?

**Licensed Cultivation Associations in Germany**

As of April 2026, approximately 300 Cannabis Social Clubs are officially licensed nationwide. The distribution is uneven: North Rhine-Westphalia, Berlin and Bavaria have the most approved associations, while some states — including Saxony and Saarland — have issued significantly fewer licenses. The differences are mainly due to the responsible state authorities and their interpretation of licensing requirements.

**Practical Challenges**

The biggest hurdles for cultivation associations remain structural. Finding suitable premises that meet both building code and security requirements continues to be difficult. Many associations report problems opening bank accounts, as some banks refuse to work with cannabis clubs. The bureaucracy — from application to final approval — takes between three and nine months in most states.

**What Works**

Prevention work within clubs has proven to be a strength of the model. The legally mandated addiction prevention officers, regular information events and direct contact with members enable low-threshold education. The community aspect is also rated positively by many members.

**Lower Saxony in Detail**

In Lower Saxony, LAVES is responsible for licensing. The process is considered comparatively well-structured. Several associations are currently licensed in the state, including BlattWerk e.V. in Hildesheim. Cooperation with authorities has been factual and solution-oriented.

**Outlook: Pilot Projects for Commercial Sales**

The second pillar of the KCanG — regional pilot projects for commercial sales in licensed specialty shops — remains in the preparatory phase. Several municipalities have expressed interest, but concrete start dates are still pending. The accompanying scientific research will examine effects on health protection, youth protection and the black market.

For more information on the legal framework, read our article [KCanG Overview](/wissensdatenbank/legal/kcang-ueberblick). Anyone wanting to start a CSC can find a practical guide with real-world experience on our [Start a CSC](/csc-gruendung) page.`,
    tags: ['KCanG', 'Recht', 'Politik', '2026'],
    author: 'Redaktion BlattWerk e.V.',
    category: 'recht',
  },
  {
    slug: 'qualitaetskontrolle-cannabis-social-club',
    date: '2026-04-12',
    title_de: 'Qualitätskontrolle im Cannabis Social Club — So wird geprüft',
    title_en: 'Quality Control in a Cannabis Social Club — How Testing Works',
    summary_de: 'Von der Ernte bis zur Laboranalyse: Wie ein Cannabis Social Club die Qualität seiner Erzeugnisse sicherstellt — mit Schadstofftests, Cannabinoid-Analyse und Kennzeichnungspflichten.',
    summary_en: 'From harvest to lab analysis: how a Cannabis Social Club ensures the quality of its products — with contaminant testing, cannabinoid analysis and labeling requirements.',
    content_de: `Einer der wichtigsten Vorteile einer Anbauvereinigung gegenüber dem Schwarzmarkt ist die kontrollierte Qualität. Doch wie läuft die Qualitätskontrolle in einem Cannabis Social Club konkret ab? Ein Überblick über die einzelnen Schritte — von der Ernte bis zur Abgabe.

**Schritt 1: Sichtprüfung und Erntekontrolle**

Nach der Ernte erfolgt zunächst eine visuelle Inspektion. Dabei wird auf Schimmelbefall, Schädlingsbefall, Verfärbungen und allgemeine Pflanzengesundheit geprüft. Pflanzen mit sichtbaren Mängeln werden aussortiert und nicht weiterverarbeitet. Die Trocknung und Aushärtung (Curing) werden unter kontrollierten Bedingungen durchgeführt, um gleichbleibende Qualität sicherzustellen.

**Schritt 2: Feuchtigkeitsmessung**

Der Feuchtigkeitsgehalt des getrockneten Cannabis wird mit einem kalibrierten Messgerät bestimmt. Der ideale Wert liegt zwischen 8 und 12 Prozent. Zu hohe Feuchtigkeit begünstigt Schimmelbildung, zu niedrige Feuchtigkeit verschlechtert Geschmack und Konsistenz. Diese Messung ist eine Grundvoraussetzung für die Lagerfähigkeit.

**Schritt 3: Cannabinoid-Analyse im Labor**

Eine akkreditierte Laboranalyse bestimmt die genauen Gehalte von THC, CBD und weiteren Cannabinoiden. Zusätzlich wird ein Terpenprofil erstellt, das Aufschluss über Aromastoffe und deren potenzielle Wirkungsunterschiede gibt. Diese Analyse ist nicht nur für die Kennzeichnung erforderlich, sondern hilft Mitgliedern auch bei der informierten Auswahl. Die Ergebnisse fließen in unsere [Sortendatenbank](/sortendatenbank) ein.

**Schritt 4: Schadstofftests**

Das Labor prüft auf Schwermetalle (Blei, Cadmium, Quecksilber, Arsen), Pestizidrückstände, mikrobiologische Belastungen (Schimmelsporen, Bakterien) und gegebenenfalls Lösungsmittelrückstände. Cannabis, das die Grenzwerte überschreitet, wird nicht an Mitglieder abgegeben und fachgerecht entsorgt.

**Schritt 5: Kennzeichnung nach KCanG**

Das KCanG schreibt eine eindeutige Kennzeichnung vor. Jede Abgabe muss den THC- und CBD-Gehalt in Prozent, das Gewicht, die Sortenbezeichnung, das Erntedatum und einen Hinweis auf gesundheitliche Risiken enthalten. Diese Transparenz dient dem Verbraucherschutz und unterscheidet legale Anbauvereinigungen grundlegend vom unregulierten Markt.

**BlattWerk und Qualität**

Bei BlattWerk e.V. ist die Qualitätskontrolle fester Bestandteil des Anbaubetriebs. Jede Ernte wird dokumentiert und laboranalytisch geprüft, bevor eine Abgabe an Mitglieder erfolgt. Weitere Informationen zu den angebauten Sorten findest du in unserer [Sortendatenbank](/sortendatenbank), Hintergrundwissen zu Cannabinoiden und Terpenen in unserer [Wissensdatenbank](/wissensdatenbank).`,
    content_en: `One of the most important advantages of a cultivation association over the black market is controlled quality. But how does quality control actually work in a Cannabis Social Club? An overview of the individual steps — from harvest to distribution.

**Step 1: Visual Inspection and Harvest Control**

After harvest, a visual inspection is conducted first. This checks for mold, pest infestation, discoloration and general plant health. Plants with visible defects are sorted out and not processed further. Drying and curing are carried out under controlled conditions to ensure consistent quality.

**Step 2: Moisture Testing**

The moisture content of the dried cannabis is determined with a calibrated measuring device. The ideal value is between 8 and 12 percent. Excessive moisture promotes mold growth, while insufficient moisture degrades taste and consistency. This measurement is a basic prerequisite for shelf stability.

**Step 3: Cannabinoid Analysis in the Laboratory**

An accredited laboratory analysis determines the exact levels of THC, CBD and other cannabinoids. Additionally, a terpene profile is created that provides information about aromatic compounds and their potential differences in effect. This analysis is not only required for labeling but also helps members make informed choices. The results are incorporated into our [strain database](/sortendatenbank).

**Step 4: Contaminant Testing**

The laboratory tests for heavy metals (lead, cadmium, mercury, arsenic), pesticide residues, microbiological contamination (mold spores, bacteria) and, where applicable, solvent residues. Cannabis that exceeds the limit values is not distributed to members and is disposed of properly.

**Step 5: Labeling Under the KCanG**

The KCanG requires clear labeling. Each distribution must include the THC and CBD content in percent, weight, strain name, harvest date and a note on health risks. This transparency serves consumer protection and fundamentally distinguishes legal cultivation associations from the unregulated market.

**BlattWerk and Quality**

At BlattWerk e.V., quality control is an integral part of cultivation operations. Every harvest is documented and laboratory-tested before distribution to members. For more information on the strains we grow, visit our [strain database](/sortendatenbank). Background knowledge on cannabinoids and terpenes can be found in our [knowledge base](/wissensdatenbank).`,
    tags: ['Qualität', 'Anbau', 'Labortest', 'KCanG'],
    author: 'Redaktion BlattWerk e.V.',
    category: 'anbau',
  },
  {
    slug: 'cannabis-social-clubs-niedersachsen',
    date: '2026-04-10',
    title_de: 'Cannabis Social Clubs in Niedersachsen — Ein Überblick',
    title_en: 'Cannabis Social Clubs in Lower Saxony — An Overview',
    summary_de: 'Wie viele CSCs gibt es in Niedersachsen? Welche Hürden gibt es? Ein Überblick über die Lage der Anbauvereinigungen im Bundesland — mit Blick auf Hildesheim.',
    summary_en: 'How many CSCs are there in Lower Saxony? What hurdles exist? An overview of cultivation associations in the state — with a focus on Hildesheim.',
    content_de: `Das Konsumcannabisgesetz (KCanG) ist seit April 2024 in Kraft, doch die Umsetzung verläuft in den Bundesländern unterschiedlich schnell. Niedersachsen gehört zu den Ländern, in denen die Genehmigungsverfahren vergleichsweise strukturiert ablaufen — auch wenn es Herausforderungen gibt.

Stand April 2026 sind in Niedersachsen mehrere Anbauvereinigungen lizenziert, darunter BlattWerk e.V. in Hildesheim. Weitere Clubs befinden sich in Hannover, Braunschweig, Oldenburg und Göttingen in verschiedenen Stadien des Genehmigungsprozesses.

Die Hürden sind überall ähnlich: geeignete Räumlichkeiten finden, ein überzeugendes Suchtpräventionskonzept vorlegen, die Finanzierung sichern und die Geduld für einen Genehmigungsprozess aufbringen, der mehrere Monate dauern kann. In Niedersachsen ist das Landesamt für Verbraucherschutz und Lebensmittelsicherheit (LAVES) die zuständige Behörde.

Was Hildesheim besonders macht: Als mittelgroße Stadt mit rund 100.000 Einwohnern zeigt Hildesheim, dass Cannabis Social Clubs nicht nur in Großstädten funktionieren. Die Nähe zur Gemeinschaft, kürzere Wege und ein engagiertes Netzwerk vor Ort sind echte Vorteile.

Für alle, die selbst einen CSC in Niedersachsen gründen möchten, haben wir auf unserer Seite [CSC gründen](/csc-gruendung) einen ausführlichen Praxisleitfaden zusammengestellt — mit Kostenaufstellung, Zeitplan und unseren eigenen Erfahrungen.

Die Entwicklung der Cannabis Social Clubs in Niedersachsen steht noch am Anfang. Wir sind überzeugt: Je mehr Vereine transparent, professionell und gesetzeskonform arbeiten, desto stärker wird die Akzeptanz in der Gesellschaft wachsen.

Wer Fragen zur Gründung hat oder sich mit uns austauschen möchte, kann uns jederzeit über unser [Kontaktformular](/kontakt) erreichen.`,
    content_en: `The Cannabis Act (KCanG) has been in effect since April 2024, but implementation varies in speed across German states. Lower Saxony is among those where approval processes run comparatively smoothly — though challenges remain.

As of April 2026, several cultivation associations are licensed in Lower Saxony, including BlattWerk e.V. in Hildesheim. Additional clubs in Hannover, Braunschweig, Oldenburg and Göttingen are at various stages of the approval process.

The hurdles are similar everywhere: finding suitable premises, presenting a convincing addiction prevention concept, securing funding and having the patience for an approval process that can take several months. In Lower Saxony, the State Office for Consumer Protection and Food Safety (LAVES) is the responsible authority.

What makes Hildesheim special: As a mid-sized city with around 100,000 inhabitants, Hildesheim shows that Cannabis Social Clubs don't only work in major cities. Proximity to the community, shorter distances and an engaged local network are real advantages.

For anyone wanting to found a CSC in Lower Saxony, we've compiled a detailed practical guide on our [Start a CSC](/csc-gruendung) page — with cost breakdown, timeline and our own experiences.

The development of Cannabis Social Clubs in Lower Saxony is still in its early stages. We're convinced: the more associations work transparently, professionally and in compliance with the law, the more acceptance will grow in society.

If you have questions about founding a club or want to exchange ideas with us, you can reach us anytime via our [contact form](/kontakt).`,
    tags: ['Niedersachsen', 'CSC', 'Anbauvereinigung', 'Regional'],
    category: 'recht',
    author: 'Redaktion BlattWerk e.V.',
  },
  {
    slug: 'mitglied-werden-so-funktionierts',
    date: '2026-04-08',
    title_de: 'Mitglied werden bei BlattWerk — So funktioniert\u2019s',
    title_en: 'Becoming a Member at BlattWerk — How It Works',
    summary_de: 'Von der Registrierung über die Hanf-App bis zur Identitätsprüfung: Schritt für Schritt erklärt, wie du Mitglied bei BlattWerk e.V. wirst.',
    summary_en: 'From registration via the Hanf-App to identity verification: A step-by-step guide to becoming a member of BlattWerk e.V.',
    content_de: `Du überlegst, Mitglied bei BlattWerk e.V. zu werden? Hier erfährst du Schritt für Schritt, wie der Aufnahmeprozess abläuft — transparent und ohne Überraschungen.

**Voraussetzungen**

Bevor du eine Mitgliedsanfrage stellst, prüfe diese Voraussetzungen:
- Du bist mindestens 21 Jahre alt
- Du hast deinen Wohnsitz in Deutschland
- Du bist nicht bereits Mitglied in einer anderen Anbauvereinigung (das KCanG erlaubt nur eine gleichzeitige Mitgliedschaft)
- Du erfüllst alle gesetzlichen Voraussetzungen nach dem KCanG

**Schritt 1: Registrierung über die Hanf-App**

Die Mitgliedschaft bei BlattWerk beginnt digital: Lade die Hanf-App herunter und registriere dich dort. Suche nach „BlattWerk Hildesheim" und stelle eine Mitgliedsanfrage. Die App ist das offizielle Tool, über das Anbauvereinigungen in Deutschland ihre Mitglieder verwalten.

**Schritt 2: Vorläufige Aufnahme**

Nach deiner Anfrage wirst du als vorläufiges Mitglied zugelassen. Das bedeutet: Dein Antrag wurde registriert, aber du musst noch einen weiteren Schritt erledigen.

**Schritt 3: Identitätsprüfung**

Um deine Mitgliedschaft zu bestätigen, musst du dich persönlich bei einem Vorstandsmitglied vorstellen und deinen Ausweis vorzeigen. Das ist gesetzlich vorgeschrieben — wir müssen sicherstellen, dass alle Angaben korrekt sind und du die Altersvoraussetzung erfüllst.

**Schritt 4: Einführung und Prävention**

Als neues Mitglied erhältst du eine Einführung in die Vereinsregeln, unser Suchtpräventionskonzept und den [Selbsteinschätzungstest](/suchtpraevention). Das ist keine Formalität — das KCanG verpflichtet uns zur aktiven Prävention.

**Kosten**

Der Monatsbeitrag beträgt 10 €. Damit finanzieren wir den Vereinsbetrieb: Miete, Strom, Verwaltung, Präventionsarbeit und den gemeinschaftlichen Anbau. Cannabis wird zum Selbstkostenpreis an Mitglieder abgegeben — wir sind gemeinnützig und nicht gewinnorientiert.

Alle Details findest du auf unserer [Mitgliedschaftsseite](/mitgliedschaft). Bei Fragen erreichst du uns unter info@blattwerk.dev.`,
    content_en: `Thinking about joining BlattWerk e.V.? Here's a step-by-step guide to the admission process — transparent and without surprises.

**Requirements**

Before submitting a membership request, check these requirements:
- You are at least 21 years old
- You reside in Germany
- You are not already a member of another cultivation association (the KCanG only allows one simultaneous membership)
- You meet all legal requirements under the KCanG

**Step 1: Register via the Hanf-App**

Membership at BlattWerk starts digitally: Download the Hanf-App and register there. Search for "BlattWerk Hildesheim" and submit a membership request. The app is the official tool through which cultivation associations in Germany manage their members.

**Step 2: Provisional Admission**

After your request, you'll be admitted as a provisional member. This means: Your application has been registered, but you still need to complete one more step.

**Step 3: Identity Verification**

To confirm your membership, you must present yourself in person to a board member and show your ID. This is legally required — we must ensure all information is correct and you meet the age requirement.

**Step 4: Introduction and Prevention**

As a new member, you'll receive an introduction to club rules, our addiction prevention concept and the [self-assessment test](/suchtpraevention). This is not a formality — the KCanG requires us to actively practice prevention.

**Costs**

The monthly fee is €10. This funds club operations: rent, electricity, administration, prevention work and communal cultivation. Cannabis is distributed to members at cost price — we are non-profit.

Find all details on our [membership page](/mitgliedschaft). For questions, reach us at info@blattwerk.dev.`,
    tags: ['Mitgliedschaft', 'Anleitung', 'Aufnahme', 'Hanf-App'],
    author: 'Redaktion BlattWerk e.V.',
    category: 'vereinsnews',
  },
  {
    slug: 'terpene-verstehen',
    date: '2026-04-06',
    title_de: 'Terpene verstehen — Warum Cannabis nicht gleich Cannabis ist',
    title_en: 'Understanding Terpenes — Why Not All Cannabis Is the Same',
    summary_de: 'Myrcen, Limonen, Linalool — Terpene bestimmen Geschmack, Geruch und Wirkung von Cannabis. Warum das Terpenprofil wichtiger ist als Indica oder Sativa.',
    summary_en: 'Myrcene, limonene, linalool — terpenes determine the taste, smell and effect of cannabis. Why the terpene profile matters more than indica or sativa.',
    content_de: `Wer sich mit Cannabis beschäftigt, stößt schnell auf Begriffe wie THC und CBD. Doch die eigentliche Vielfalt von Cannabis liegt in den Terpenen — aromatischen Verbindungen, die Geschmack, Geruch und vor allem die Wirkung entscheidend beeinflussen.

**Was sind Terpene?**

Terpene sind flüchtige organische Verbindungen, die in vielen Pflanzen vorkommen — nicht nur in Cannabis. Lavendel enthält Linalool, Zitronen enthalten Limonen, Hopfen enthält Myrcen. In Cannabis wurden über 200 verschiedene Terpene identifiziert, wobei eine Handvoll die Wirkung dominiert.

**Die wichtigsten Cannabis-Terpene**

*Myrcen* ist das häufigste Terpen in Cannabis und verantwortlich für erdige, moschusartige Aromen. Hoher Myrcen-Anteil wird mit entspannender, sedierender Wirkung assoziiert. Sorten mit über 0,5% Myrcen gelten als besonders körperbetont.

*Limonen* riecht nach Zitrusfrüchten und wird mit stimmungsaufhellender, energetisierender Wirkung in Verbindung gebracht. Sorten mit hohem Limonen-Anteil eignen sich tendenziell besser für Tagesaktivitäten.

*Linalool* kennt man aus Lavendel — blumig, beruhigend. In Cannabis trägt Linalool zu angstlösenden und entspannenden Eigenschaften bei.

*Pinene* riecht nach Kiefernwald und wird mit Klarheit und Fokus assoziiert. Interessant: Pinene kann dem „Vergesslichkeitseffekt" von THC entgegenwirken.

*Caryophyllen* ist einzigartig, weil es als einziges Terpen direkt an Cannabinoid-Rezeptoren (CB2) bindet. Es hat entzündungshemmende Eigenschaften und schmeckt pfeffrig-würzig.

**Warum Indica vs. Sativa irreführend ist**

Die klassische Einteilung in Indica (entspannend) und Sativa (anregend) basiert auf Wuchsform, nicht auf Wirkung. In der Realität bestimmt das Terpenprofil — zusammen mit dem Cannabinoidverhältnis — wie eine Sorte wirkt. Eine „Sativa" mit hohem Myrcen-Anteil kann durchaus sedierend wirken, während eine „Indica" mit viel Limonen energetisierend sein kann.

In unserer [Sortendatenbank](/sortendatenbank) findest du für jede Sorte das vollständige Terpenprofil. Vertiefe dein Wissen mit unseren Artikeln: [Was sind Terpene?](/wissensdatenbank/terpenes/was-sind-terpene), [Myrcen](/wissensdatenbank/terpenes/myrcen), [Limonen](/wissensdatenbank/terpenes/limonen) und [Caryophyllen](/wissensdatenbank/terpenes/caryophyllen).`,
    content_en: `Anyone exploring cannabis quickly encounters terms like THC and CBD. But the real diversity of cannabis lies in terpenes — aromatic compounds that decisively influence taste, smell and especially effects.

**What Are Terpenes?**

Terpenes are volatile organic compounds found in many plants — not just cannabis. Lavender contains linalool, lemons contain limonene, hops contain myrcene. Over 200 different terpenes have been identified in cannabis, though a handful dominate the effects.

**The Most Important Cannabis Terpenes**

*Myrcene* is the most common terpene in cannabis, responsible for earthy, musky aromas. High myrcene content is associated with relaxing, sedating effects. Strains with over 0.5% myrcene are considered particularly body-focused.

*Limonene* smells like citrus fruits and is associated with mood-lifting, energizing effects. Strains high in limonene tend to be better suited for daytime activities.

*Linalool* is known from lavender — floral, calming. In cannabis, linalool contributes to anxiety-reducing and relaxing properties.

*Pinene* smells like pine forest and is associated with clarity and focus. Interestingly, pinene can counteract the "forgetfulness effect" of THC.

*Caryophyllene* is unique because it's the only terpene that directly binds to cannabinoid receptors (CB2). It has anti-inflammatory properties and tastes peppery-spicy.

**Why Indica vs. Sativa Is Misleading**

The classic division into indica (relaxing) and sativa (stimulating) is based on growth form, not effects. In reality, the terpene profile — together with the cannabinoid ratio — determines how a strain works. A "sativa" with high myrcene can be quite sedating, while an "indica" with lots of limonene can be energizing.

In our [strain database](/sortendatenbank), you'll find the complete terpene profile for every strain. Deepen your knowledge with our articles: [What Are Terpenes?](/wissensdatenbank/terpenes/was-sind-terpene), [Myrcene](/wissensdatenbank/terpenes/myrcen), [Limonene](/wissensdatenbank/terpenes/limonen) and [Caryophyllene](/wissensdatenbank/terpenes/caryophyllen).`,
    tags: ['Terpene', 'Wissen', 'Wirkung', 'Myrcen', 'Limonen'],
    author: 'Redaktion BlattWerk e.V.',
    category: 'wissen',
  },
  {
    slug: 'cannabis-fuehrerschein-2026',
    date: '2026-04-03',
    title_de: 'Cannabis und Führerschein 2026 — Die 5 wichtigsten Regeln',
    title_en: 'Cannabis and Driving License 2026 — The 5 Most Important Rules',
    summary_de: 'Der THC-Grenzwert liegt bei 3,5 ng/ml, Mischkonsum mit Alkohol ist verboten, und die MPU kann teuer werden. Was du als Cannabis-Konsument über den Führerschein wissen musst.',
    summary_en: 'The THC limit is 3.5 ng/ml, mixing with alcohol is prohibited, and the MPU can be expensive. What you need to know about driving as a cannabis user.',
    content_de: `Seit August 2024 gilt für Cannabis im Straßenverkehr ein eigenständiger THC-Grenzwert von 3,5 ng/ml im Blutserum. Damit wurde Cannabis aus dem pauschalen Drogenverbot herausgelöst und einer ähnlichen Regelung wie Alkohol unterstellt. Was bedeutet das konkret für dich?

Regel 1: Der Grenzwert liegt bei 3,5 ng/ml. Wer mit einem THC-Wert über 3,5 ng/ml im Blutserum am Steuer erwischt wird, begeht eine Ordnungswidrigkeit. Erstverstoß: 500 € Bußgeld, 1 Monat Fahrverbot, 2 Punkte in Flensburg. Zweitverstoß: 1.000 €, 3 Monate Fahrverbot. Ab dem dritten Verstoß: 1.500 €, 3 Monate Fahrverbot. Wichtig: Der Grenzwert bezieht sich auf aktives THC im Blutserum, nicht auf THC-COOH (den Abbauwert). THC-COOH ist deutlich länger nachweisbar, wird aber für den Grenzwert nicht herangezogen.

Regel 2: Mischkonsum mit Alkohol ist verboten. Wer Cannabis und Alkohol kombiniert und fährt, begeht unabhängig vom THC-Wert eine Ordnungswidrigkeit. Es gilt eine absolute Null-Toleranz für die Kombination. Auch geringe Alkoholmengen in Kombination mit Cannabis können zu Sanktionen führen.

Regel 3: Fahranfänger haben strengere Regeln. Für Fahranfänger in der Probezeit und Personen unter 21 Jahren gilt ein absolutes Cannabisverbot am Steuer — analog zur 0,0-Promille-Grenze bei Alkohol. Jeder nachweisbare THC-Wert führt zu Sanktionen.

Regel 4: Die MPU kann schnell kommen. Ab dem zweiten Verstoß oder bei hohen THC-Werten kann die Fahrerlaubnisbehörde eine medizinisch-psychologische Untersuchung (MPU) anordnen. Die MPU kostet 350–750 €, dazu kommen Abstinenzprogramme (200–500 €), Vorbereitungskurse (300–1.500 €) und gegebenenfalls Anwaltskosten. Der gesamte Prozess dauert 6–18 Monate.

Regel 5: Zeitliche Trennung ist der einzige sichere Schutz. THC kann je nach Konsumhäufigkeit unterschiedlich lange im Blut nachweisbar sein. Bei gelegentlichem Konsum fällt der aktive THC-Spiegel innerhalb von 6–8 Stunden unter den Grenzwert. Bei regelmäßigem Konsum kann es deutlich länger dauern. Die einzige sichere Regel: Nicht fahren, wenn du konsumiert hast. Im Zweifel lieber einen Tag länger warten.

Unsere Empfehlung: Informiere dich in unserem Artikel [Cannabis und Straßenverkehr](/wissensdatenbank/legal/cannabis-strassenverkehr) über alle Details — inklusive der Regelungen zu Blutentnahme, Polizeikontrollen und Fahrradfahren unter THC-Einfluss. Den spezifischen Leitfaden zum Thema [Führerschein und Cannabis](/wissensdatenbank/legal/fuehrerschein-cannabis) findest du ebenfalls in unserer Wissensdatenbank.`,
    content_en: `Since August 2024, there has been a specific THC limit of 3.5 ng/ml in blood serum for cannabis in road traffic. This removed cannabis from the blanket drug prohibition and placed it under a regulation similar to alcohol. What does this mean for you specifically?

Rule 1: The limit is 3.5 ng/ml. Anyone caught driving with a THC level above 3.5 ng/ml in blood serum commits an administrative offense. First offense: €500 fine, 1-month driving ban, 2 points. Second offense: €1,000, 3-month ban. Third offense onwards: €1,500, 3-month ban. Important: The limit refers to active THC in blood serum, not THC-COOH (the metabolite). THC-COOH is detectable much longer but is not used for the limit.

Rule 2: Mixing with alcohol is prohibited. Anyone who combines cannabis and alcohol and drives commits an offense regardless of THC level. There is absolute zero tolerance for the combination. Even small amounts of alcohol combined with cannabis can lead to sanctions.

Rule 3: New drivers face stricter rules. For new drivers in the probationary period and persons under 21, there is an absolute cannabis prohibition while driving — analogous to the 0.0 per mille alcohol limit. Any detectable THC level leads to sanctions.

Rule 4: The MPU can come quickly. From the second offense or with high THC levels, the driver's license authority can order a medical-psychological examination (MPU). The MPU costs €350–750, plus abstinence programs (€200–500), preparation courses (€300–1,500) and potentially lawyer costs. The entire process takes 6–18 months.

Rule 5: Temporal separation is the only safe protection. THC can be detectable in blood for varying lengths of time depending on consumption frequency. With occasional use, active THC levels fall below the limit within 6–8 hours. With regular use, it can take significantly longer. The only safe rule: Don't drive if you've consumed. When in doubt, wait an extra day.

Our recommendation: Read our article [Cannabis and Road Traffic](/wissensdatenbank/legal/cannabis-strassenverkehr) for all details — including regulations on blood draws, police stops, and cycling under THC influence. The specific guide on [Driving License and Cannabis](/wissensdatenbank/legal/fuehrerschein-cannabis) is also available in our knowledge base.`,
    tags: ['Führerschein', 'Straßenverkehr', 'THC-Grenzwert', 'MPU', 'Recht'],
    author: 'Gero Stetter',
    category: 'recht',
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

Die Vereinsgründung war der einfachste Teil. Satzung schreiben, Gründungsversammlung abhalten, Notar, Vereinsregister — das ist bürokratisch, aber überschaubar. Im September 2025 waren wir offiziell im Vereinsregister eingetragen. Was wir unterschätzt haben: Die Satzung muss KCanG-konform sein. Unsere erste Version hatte Lücken bei den Dokumentationspflichten. Die Nachbesserung hat zwei Wochen gekostet. Einen Anwalt braucht ihr dafür nicht — es gibt genug Mustervorlagen und Erfahrungsberichte anderer CSCs, mit denen man arbeiten kann.

Parallel haben wir das Suchtpräventionskonzept erarbeitet. Das KCanG verlangt ein konkretes, umsetzbares Konzept — keine Kopie aus dem Internet. Wir haben lokale Beratungsstellen in Hildesheim eingebunden, einen Selbsteinschätzungstest entwickelt und interne Ansprechpersonen benannt. Das Konzept war am Ende 15 Seiten lang und hat den Genehmigungsprozess nachweislich beschleunigt, weil die Behörde gesehen hat, dass wir es ernst meinen.

Die Räumlichkeiten waren der größte Engpass. Vermieter, die an einen Cannabis Social Club vermieten? Nicht einfach zu finden. Wir haben über 20 Anfragen gestellt, bevor wir am Wetzellplatz 2 fündig wurden. Die Anforderungen sind streng: Zugangskontrollen, keine Einsehbarkeit von außen, Sicherheitskonzept, Lüftungssystem mit Aktivkohlefiltern. Der Umbau hat mehr gekostet und länger gedauert als geplant.

Den Lizenzantrag haben wir im November 2025 eingereicht. Vereinsregisterauszug, Satzung, Suchtpräventionskonzept, Sicherheitskonzept, Grundrisse, Qualifikationsnachweise, Führungszeugnisse — ein Ordner voller Dokumente. Die Behörde hat professionell und zügig gearbeitet, aber es gab trotzdem Rückfragen und Nachforderungen. Im März 2026 kam dann die Genehmigung.

Was wir anders machen würden: Erstens, die Räumlichkeiten früher suchen — parallel zur Vereinsgründung, nicht danach. Zweitens, von Anfang an mehr Mitglieder einbinden. Die Arbeit auf fünf Schultern zu verteilen war grenzwertig. Drittens, ein realistischeres Budget planen. Die Gesamtkosten lagen deutlich über unserer ersten Schätzung.

Was wir richtig gemacht haben: Transparenz. Wir haben von Anfang an offen kommuniziert — gegenüber der Behörde, gegenüber unseren Mitgliedern und gegenüber der Öffentlichkeit. Das hat Vertrauen aufgebaut und Türen geöffnet.

Wer selbst einen CSC gründen möchte: Auf unserer Seite [CSC gründen](/csc-gruendung) teilen wir unsere Erfahrungen im Detail — inklusive Kostenaufstellung, Zeitplan und den Fehlern, die wir gemacht haben. Die rechtlichen Grundlagen erklärt unser Artikel [KCanG im Überblick](/wissensdatenbank/legal/kcang-ueberblick). Schreibt uns gerne, wenn ihr Fragen habt.`,
    content_en: `Ten months. That's how long it took from the first idea to the official cultivation license. Sounds doable? It was — but it was significantly more work than most people imagine.

It all started in May 2025. Five of us sat together and decided: We're founding a Cannabis Social Club in Hildesheim. The KCanG had been in effect since April 2024, the first licenses were being granted nationwide, and we didn't want to just watch.

Founding the association was the easy part. Writing statutes, holding a founding assembly, notary, association register — bureaucratic but manageable. By September 2025, we were officially registered. What we underestimated: The statutes must be KCanG-compliant. Our first version had gaps in the documentation requirements. The revision cost two weeks. You don't need a lawyer for this — there are enough templates and experience reports from other CSCs to work with.

In parallel, we developed the addiction prevention concept. The KCanG requires a concrete, implementable concept — not an internet copy. We involved local counseling centers in Hildesheim, developed a self-assessment test and appointed internal contact persons. The concept ended up being 15 pages long and demonstrably accelerated the approval process because the authority saw we take it seriously.

The premises were the biggest bottleneck. Landlords who rent to a Cannabis Social Club? Not easy to find. We made over 20 inquiries before finding our space at Wetzellplatz 2. The requirements are strict: access controls, no visibility from outside, security concept, ventilation system with activated carbon filters. The renovation cost more and took longer than planned.

We submitted the license application in November 2025. Association register extract, statutes, prevention concept, security concept, floor plans, qualification certificates, criminal record checks — a folder full of documents. The authority worked professionally and promptly, but there were still follow-up questions and additional requests. In March 2026, the approval came.

What we would do differently: First, search for premises earlier — in parallel with the association founding, not after. Second, involve more members from the start. Distributing the work among five people was borderline. Third, plan a more realistic budget. Total costs were significantly above our first estimate.

What we did right: Transparency. We communicated openly from the start — toward the authority, toward our members and toward the public. That built trust and opened doors.

If you want to found a CSC yourself: On our [Start a CSC](/csc-gruendung) page, we share our experiences in detail — including cost breakdown, timeline and the mistakes we made. The legal foundations are explained in our article [KCanG Overview](/wissensdatenbank/legal/kcang-ueberblick). Feel free to reach out if you have questions.`,
    tags: ['Meilenstein', 'Gründung', 'Lizenz', 'Erfahrungsbericht'],
    author: 'Gero Stetter',
    category: 'vereinsnews',
  },
  {
    slug: 'vorbereitung-laeuft',
    date: '2026-03-25',
    title_de: 'Vorbereitungen laufen — Anbaustart Oktober 2026',
    title_en: 'Preparations underway — Growing starts October 2026',
    summary_de: 'Nach Erhalt der Anbaulizenz laufen die Vorbereitungen für unseren Anbaustart im Oktober 2026. Infrastruktur, Sortenauswahl und Raumplanung stehen im Fokus.',
    summary_en: 'After receiving our cultivation license, we are preparing for our growing start in October 2026. Infrastructure, strain selection and room planning are our current focus.',
    content_de: `Die Anbaulizenz ist da — jetzt beginnen die Vorbereitungen. Nach dem Erhalt der offiziellen Genehmigung am 18. März 2026 arbeiten wir mit Hochdruck daran, alles für den Anbaustart im Oktober 2026 vorzubereiten.

Aktuell planen wir die Einrichtung unserer Anbauräume. Beleuchtung, Belüftung, Bewässerung — es gibt viel zu tun, bevor es losgehen kann. Jede Entscheidung wird sorgfältig abgewogen, denn Qualität steht für uns an erster Stelle.

Parallel dazu beschäftigen wir uns intensiv mit der Sortenauswahl. In unserer [Sortendatenbank](/sortendatenbank) dokumentieren wir bereits über 50 Sorten mit Genetik, [Terpenprofilen](/wissensdatenbank/terpenes/was-sind-terpene) und THC/CBD-Werten — eine fundierte Grundlage für unsere Planung.

Außerdem arbeiten wir an den organisatorischen Strukturen: Dokumentation, Qualitätssicherung und Jugendschutz müssen stehen, bevor der erste Samen in die Erde kommt.

Bis zum Anbaustart halten wir euch hier im Blog und auf Instagram auf dem Laufenden.

Ihr wollt Teil dieser Gemeinschaft werden? Der Beitritt erfolgt über die Hanf-App.`,
    content_en: `The cultivation license is here — now the preparations begin. After receiving our official permit on March 18, 2026, we are working hard to get everything ready for our growing start in October 2026.

We are currently planning the setup of our growing facilities. Lighting, ventilation, irrigation — there is much to do before we can begin. Every decision is carefully considered, because quality is our top priority.

In parallel, we are working intensively on strain selection. Our [strain database](/sortendatenbank) already documents over 50 strains with genetics, [terpene profiles](/wissensdatenbank/terpenes/was-sind-terpene) and THC/CBD values — a solid foundation for our planning.

We are also building the organizational structures: documentation, quality assurance and youth protection must be in place before the first seed goes into the ground.

We'll keep you posted here on the blog and on Instagram until the growing start.

Want to become part of this community? Join via the Hanf-App.`,
    tags: ['Vorbereitung', 'Meilenstein', 'Infrastruktur'],
    author: 'Gero Stetter',
    category: 'anbau',
  },
  {
    slug: 'anbaulizenz-erteilt',
    date: '2026-03-18',
    title_de: 'Anbaulizenz erteilt — ein Meilenstein für BlattWerk',
    title_en: 'Cultivation License Granted — A Milestone for BlattWerk',
    summary_de: 'Am 18. März 2026 hat BlattWerk e.V. die offizielle Anbaulizenz erhalten. Ein historischer Moment für unseren Verein und für Hildesheim.',
    summary_en: 'On March 18, 2026, BlattWerk e.V. received its official cultivation license. A historic moment for our association and for Hildesheim.',
    content_de: `Heute ist ein Tag, den wir lange herbeigesehnt haben: BlattWerk e.V. hat die offizielle Anbaulizenz erhalten.

Damit sind wir als Anbauvereinigung gemäß dem Konsumcannabisgesetz (KCanG) berechtigt, Cannabis gemeinschaftlich anzubauen und an unsere Mitglieder abzugeben.

Der Weg hierhin war nicht einfach. Von der Vereinsgründung über die Erstellung des Präventionskonzepts, die Suche nach geeigneten Räumlichkeiten bis hin zum Lizenzantrag — jeder Schritt erforderte Sorgfalt, Geduld und die Unterstützung unserer Mitglieder.

Was bedeutet die Lizenz?
- Die offizielle Genehmigung zum gemeinschaftlichen Anbau liegt vor
- Die Abgabe an Mitglieder nach Selbstkostenpreis wird ermöglicht
- Alle gesetzlichen Auflagen (Jugendschutz, Prävention, Dokumentation) werden von uns erfüllt

Wir sind stolz auf das, was wir gemeinsam erreicht haben. Jetzt beginnt die Vorbereitung auf den Anbau — und wir freuen uns darauf.

Danke an alle Mitglieder und Unterstützer, die diesen Weg mit uns gegangen sind.`,
    content_en: `Today is a day we've been looking forward to for a long time: BlattWerk e.V. has received its official cultivation license.

This authorizes us as a cultivation association under the Cannabis Act (KCanG) to communally grow cannabis and distribute it to our members.

The path here wasn't easy. From founding the association, creating the prevention concept, finding suitable premises to the license application — every step required diligence, patience and the support of our members.

What does the license mean?
- We have official approval for communal cultivation
- Distribution to members at cost price is enabled
- All legal requirements (youth protection, prevention, documentation) are met by us

We are proud of what we've achieved together. Now the preparation for cultivation begins — and we're looking forward to it.

Thank you to all members and supporters who have walked this path with us.`,
    tags: ['Lizenz', 'Meilenstein', 'KCanG'],
    author: 'Gero Stetter',
    category: 'vereinsnews',
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
    category: 'vereinsnews',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
