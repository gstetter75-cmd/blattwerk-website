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

Wir setzen auf moderne Full-Spectrum LED-Technik. Gegenüber HPS-Lampen bieten LEDs deutliche Vorteile: niedrigerer Energieverbrauch, weniger Wärmeentwicklung und ein besseres Lichtspektrum für alle Wachstumsphasen. Qualitäts-LEDs mit Samsung LM301H-Dioden liefern den PPFD-Wert, den unsere Pflanzen für optimale Entwicklung brauchen.

**Substrat und Nährstoffe: organisch wo möglich**

Wir arbeiten mit hochwertigem Kokos-Substrat in Kombination mit organischen Nährstoffen. Die biologische Komponente verbessert das Terpenprofil der Ernte und führt zu einem reineren Endprodukt. Synthetische Dünger werden nur dort eingesetzt, wo es fachlich sinnvoll ist.

**Qualitätssicherung vor der Abgabe**

Bevor eine Ernte an Mitglieder abgegeben wird, durchläuft sie eine mehrstufige Qualitätssicherung: Sichtprüfung auf Schimmel, Schädlinge und Verunreinigungen, externe Laboranalyse auf THC/CBD-Gehalt und Schadstoffe sowie Dokumentation von Sorte, Erntedatum und Analyseergebnis.

Jedes Mitglied soll beim Bezug genau wissen, was es bekommt — Sorte, Potenz, Terpenspektrum. Keine Unsicherheit, keine Streckmittel.

**Trocknung und Fermentierung**

Der letzte Schritt vor der Abgabe ist oft der unterschätzte: eine sorgfältige Trocknung (10–14 Tage bei 60–65% Luftfeuchtigkeit) und anschließende Fermentierung in luftdichten Behältern. Erst dieser Prozess entfaltet das volle Geschmacks- und Aromaprofil einer Sorte.

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

We use modern full-spectrum LED technology. Compared to HPS lamps, LEDs offer clear advantages: lower energy consumption, less heat generation and a better light spectrum for all growth phases. Quality LEDs with Samsung LM301H diodes deliver the PPFD values our plants need for optimal development.

**Substrate and Nutrients: Organic Where Possible**

We work with high-quality coco substrate combined with organic nutrients. The biological component improves the terpene profile of the harvest and leads to a cleaner end product. Synthetic fertilisers are only used where professionally appropriate.

**Quality Assurance Before Distribution**

Before a harvest is distributed to members, it goes through a multi-stage quality assurance process: visual inspection for mould, pests and contamination, external laboratory analysis for THC/CBD content and contaminants, and documentation of strain, harvest date and analysis result.

Every member should know exactly what they're receiving — strain, potency, terpene spectrum. No uncertainty, no adulterants.

**Drying and Curing**

The final step before distribution is often the underestimated one: careful drying (10–14 days at 60–65% humidity) followed by curing in airtight containers. Only this process fully develops the flavour and aroma profile of a strain.

**Outlook**

In the coming weeks, we will complete the setup of our growing facilities. Starting in October, we're off — and we'll keep you regularly updated here on progress.

Questions about our growing concept? Write to us: info@blattwerk.dev`,
    tags: ['Anbau', 'Qualität', 'Indoor', 'Konzept', 'Transparenz'],
    author: 'Gero Stetter',
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

Weitere Informationen zur rechtlichen Grundlage findest du in unserer [Wissensdatenbank](/wissensdatenbank/legal). Wer selbst einen CSC gründen möchte, findet auf unserer Seite [CSC gründen](/csc-gruendung) einen Praxisleitfaden mit Erfahrungswerten.`,
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

For more information on the legal framework, visit our [knowledge base](/wissensdatenbank/legal). Anyone wanting to start a CSC can find a practical guide with real-world experience on our [Start a CSC](/csc-gruendung) page.`,
    tags: ['KCanG', 'Recht', 'Politik', '2026'],
    author: 'Redaktion BlattWerk e.V.',
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

In unserer [Sortendatenbank](/sortendatenbank) findest du für jede Sorte das vollständige Terpenprofil. Mehr über die Wissenschaft hinter Terpenen erfährst du in unserer [Wissensdatenbank](/wissensdatenbank).`,
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

In our [strain database](/sortendatenbank), you'll find the complete terpene profile for every strain. Learn more about the science behind terpenes in our [knowledge base](/wissensdatenbank).`,
    tags: ['Terpene', 'Wissen', 'Wirkung', 'Myrcen', 'Limonen'],
    author: 'Redaktion BlattWerk e.V.',
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

Unsere Empfehlung: Informiere dich in unserem ausführlichen Artikel „Cannabis und Straßenverkehr" in der Wissensdatenbank über alle Details — inklusive der Regelungen zu Blutentnahme, Polizeikontrollen und Fahrradfahren unter THC-Einfluss.`,
    content_en: `Since August 2024, there has been a specific THC limit of 3.5 ng/ml in blood serum for cannabis in road traffic. This removed cannabis from the blanket drug prohibition and placed it under a regulation similar to alcohol. What does this mean for you specifically?

Rule 1: The limit is 3.5 ng/ml. Anyone caught driving with a THC level above 3.5 ng/ml in blood serum commits an administrative offense. First offense: €500 fine, 1-month driving ban, 2 points. Second offense: €1,000, 3-month ban. Third offense onwards: €1,500, 3-month ban. Important: The limit refers to active THC in blood serum, not THC-COOH (the metabolite). THC-COOH is detectable much longer but is not used for the limit.

Rule 2: Mixing with alcohol is prohibited. Anyone who combines cannabis and alcohol and drives commits an offense regardless of THC level. There is absolute zero tolerance for the combination. Even small amounts of alcohol combined with cannabis can lead to sanctions.

Rule 3: New drivers face stricter rules. For new drivers in the probationary period and persons under 21, there is an absolute cannabis prohibition while driving — analogous to the 0.0 per mille alcohol limit. Any detectable THC level leads to sanctions.

Rule 4: The MPU can come quickly. From the second offense or with high THC levels, the driver's license authority can order a medical-psychological examination (MPU). The MPU costs €350–750, plus abstinence programs (€200–500), preparation courses (€300–1,500) and potentially lawyer costs. The entire process takes 6–18 months.

Rule 5: Temporal separation is the only safe protection. THC can be detectable in blood for varying lengths of time depending on consumption frequency. With occasional use, active THC levels fall below the limit within 6–8 hours. With regular use, it can take significantly longer. The only safe rule: Don't drive if you've consumed. When in doubt, wait an extra day.

Our recommendation: Read our detailed article "Cannabis and Road Traffic" in our knowledge base for all details — including regulations on blood draws, police stops, and cycling under THC influence.`,
    tags: ['Führerschein', 'Straßenverkehr', 'THC-Grenzwert', 'MPU', 'Recht'],
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
    slug: 'vorbereitung-laeuft',
    date: '2026-03-25',
    title_de: 'Vorbereitungen laufen — Anbaustart Oktober 2026',
    title_en: 'Preparations underway — Growing starts October 2026',
    summary_de: 'Nach Erhalt der Anbaulizenz laufen die Vorbereitungen für unseren Anbaustart im Oktober 2026. Infrastruktur, Sortenauswahl und Raumplanung stehen im Fokus.',
    summary_en: 'After receiving our cultivation license, we are preparing for our growing start in October 2026. Infrastructure, strain selection and room planning are our current focus.',
    content_de: `Die Anbaulizenz ist da — jetzt beginnen die Vorbereitungen. Nach dem Erhalt der offiziellen Genehmigung am 18. März 2026 arbeiten wir mit Hochdruck daran, alles für den Anbaustart im Oktober 2026 vorzubereiten.

Aktuell planen wir die Einrichtung unserer Anbauräume. Beleuchtung, Belüftung, Bewässerung — es gibt viel zu tun, bevor es losgehen kann. Jede Entscheidung wird sorgfältig abgewogen, denn Qualität steht für uns an erster Stelle.

Parallel dazu beschäftigen wir uns intensiv mit der Sortenauswahl. In unserer Sortendatenbank dokumentieren wir bereits über 50 Sorten mit Genetik, Terpenprofilen und THC/CBD-Werten — eine fundierte Grundlage für unsere Planung.

Außerdem arbeiten wir an den organisatorischen Strukturen: Dokumentation, Qualitätssicherung und Jugendschutz müssen stehen, bevor der erste Samen in die Erde kommt.

Bis zum Anbaustart halten wir euch hier im Blog und auf Instagram auf dem Laufenden.

Ihr wollt Teil dieser Gemeinschaft werden? Der Beitritt erfolgt über die Hanf-App.`,
    content_en: `The cultivation license is here — now the preparations begin. After receiving our official permit on March 18, 2026, we are working hard to get everything ready for our growing start in October 2026.

We are currently planning the setup of our growing facilities. Lighting, ventilation, irrigation — there is much to do before we can begin. Every decision is carefully considered, because quality is our top priority.

In parallel, we are working intensively on strain selection. Our strain database already documents over 50 strains with genetics, terpene profiles and THC/CBD values — a solid foundation for our planning.

We are also building the organizational structures: documentation, quality assurance and youth protection must be in place before the first seed goes into the ground.

We'll keep you posted here on the blog and on Instagram until the growing start.

Want to become part of this community? Join via the Hanf-App.`,
    tags: ['Vorbereitung', 'Meilenstein', 'Infrastruktur']
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
