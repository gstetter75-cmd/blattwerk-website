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
