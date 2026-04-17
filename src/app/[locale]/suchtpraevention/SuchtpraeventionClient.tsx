'use client';

import { HomeSection } from '@/components/shared/HomeSection';
import { SelfAssessment } from '@/components/prevention/SelfAssessment';
import { RiskAccordion } from '@/components/prevention/RiskAccordion';
import { ResourceRow } from '@/components/prevention/ResourceRow';
import { StickyEmergencyBar } from '@/components/prevention/StickyEmergencyBar';
import {
  conceptItems,
  riskTopics,
  warningSigns,
  localResources,
  helpResources,
} from '@/data/prevention';

interface Props {
  isDE: boolean;
}

function localize<T extends { title_de: string; title_en: string; text_de: string; text_en: string }>(
  items: readonly T[],
  isDE: boolean,
): readonly { title: string; text: string }[] {
  return items.map((item) => ({
    title: isDE ? item.title_de : item.title_en,
    text: isDE ? item.text_de : item.text_en,
  }));
}

export function SuchtpraeventionClient({ isDE }: Props) {
  const concepts = localize(conceptItems, isDE);
  const risks = localize(riskTopics, isDE);
  const signs = isDE ? warningSigns.de : warningSigns.en;

  const localRes = localResources.map((r) => ({
    name: isDE ? r.name_de : r.name_en,
    contact: r.contact,
    tel: r.tel,
    url: r.url,
  }));

  const helpRes = helpResources.map((r) => ({
    name: isDE ? r.name_de : r.name_en,
    contact: r.contact,
    tel: r.tel,
    url: r.url,
  }));

  const knowledgeLinks = [
    { slug: 'health', label: isDE ? 'Gesundheit & Safer Use' : 'Health & Safer Use' },
    { slug: 'prevention', label: isDE ? 'Prävention & Jugendschutz' : 'Prevention & Youth Protection' },
    { slug: 'legal', label: isDE ? 'Rechtliche Lage' : 'Legal Situation' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="animate-fade-up">
            <p className="text-sm font-medium text-gold-theme mb-4">
              {isDE ? 'Suchtprävention' : 'Addiction Prevention'}
            </p>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              {isDE ? 'Suchtprävention & Cannabis — Konzept & Hilfe' : 'Addiction Prevention & Cannabis — Concept & Help'}
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mb-4">
              {isDE
                ? 'Cannabis kann Freude bereiten — und es kann Probleme machen. Wir reden offen darüber. Ohne erhobenen Zeigefinger, aber ehrlich.'
                : 'Cannabis can bring joy — and it can cause problems. We talk about it openly. Without lecturing, but honestly.'}
            </p>
            <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Wenn du Fragen hast, dir Sorgen machst oder einfach reden willst — wir sind für dich da. Vertraulich und ohne Vorurteile.'
                : 'If you have questions, are worried or just want to talk — we\'re here for you. Confidential and without judgment.'}
            </p>
          </div>
        </div>
      </section>

      {/* Age notice */}
      <div className="py-3 border-b border-[var(--border)]" style={{ background: 'var(--warning-bg)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center gap-4">
          <span className="shrink-0 text-sm font-medium" style={{ color: 'var(--warning)' }}>
            {isDE ? 'Hinweis' : 'Notice'}
          </span>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--warning-text)' }}>
            {isDE
              ? 'Bei BlattWerk e.V. ist die Mitgliedschaft erst ab 21 Jahren möglich. Wir setzen bewusst auf ein höheres Mindestalter, um junge Menschen zu schützen.'
              : 'At BlattWerk e.V., membership is available from age 21 only. We deliberately set a higher minimum age to protect young people.'}
          </p>
        </div>
      </div>

      {/* Concept */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Unser Konzept' : 'Our Concept'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {concepts.map(({ title, text }) => (
                <div key={title} className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <h3 className="font-heading font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* Risks */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Risiken ehrlich benennen' : 'Naming Risks Honestly'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              {isDE
                ? 'Verantwortungsvoller Umgang beginnt damit, die Risiken zu kennen. Hier die wichtigsten Fakten — evidenzbasiert und ohne Panikmache.'
                : 'Responsible use starts with knowing the risks. Here are the key facts — evidence-based and without scaremongering.'}
            </p>
            <RiskAccordion topics={risks} />
          </div>
        </section>
      </HomeSection>

      {/* Warning Signs */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Wie erkenne ich problematischen Konsum?' : 'How Do I Recognize Problematic Use?'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              {isDE
                ? 'Nicht jeder Konsum ist problematisch. Aber wenn du dich in mehreren dieser Punkte wiedererkennst, lohnt es sich, genauer hinzuschauen.'
                : 'Not all use is problematic. But if you recognize yourself in several of these points, it\'s worth taking a closer look.'}
            </p>
            <div className="space-y-3">
              {signs.map((sign, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <span className="shrink-0 w-6 h-6 rounded-full border-2 border-[var(--border)] mt-0.5" />
                  <p className="text-sm leading-relaxed">{sign}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Einen oder zwei Punkte wiederzuerkennen heißt nicht automatisch, dass du ein Problem hast. Aber es ist ein guter Anlass, ehrlich mit dir selbst zu sein — oder mit jemandem zu sprechen.'
                : 'Recognizing one or two points doesn\'t automatically mean you have a problem. But it\'s a good reason to be honest with yourself — or to talk to someone.'}
            </p>
          </div>
        </section>
      </HomeSection>

      {/* Self Assessment */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Selbsteinschätzung' : 'Self-Assessment'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              {isDE
                ? 'Dieser kurze Test hilft dir, deinen Konsum besser einzuordnen. 8 Fragen, anonym, keine Daten werden gespeichert.'
                : 'This short test helps you better assess your use. 8 questions, anonymous, no data is stored.'}
            </p>
            <SelfAssessment isDE={isDE} />
          </div>
        </section>
      </HomeSection>

      {/* Contact Persons */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Ansprechpersonen' : 'Contact Persons'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Bei Fragen zur Suchtprävention oder bei Bedarf an Beratung.'
                : 'For questions about addiction prevention or counseling needs.'}
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                <p className="text-xs font-medium text-gold-theme mb-3">
                  {isDE ? 'Suchtpräventionsbeauftragte' : 'Addiction Prevention Officer'}
                </p>
                <h3 className="font-heading font-semibold text-lg">Jennifer Trebbin</h3>
                <p className="text-sm text-ink-muted mt-2 italic">
                  {isDE
                    ? '„Ihr könnt mich jederzeit ansprechen — vertraulich und ohne Vorwürfe."'
                    : '"You can reach out to me anytime — confidential and without judgment."'}
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                <p className="text-xs font-medium text-gold-theme mb-3">
                  {isDE ? 'Externe Ansprechpartnerin' : 'External Contact Person'}
                </p>
                <h3 className="font-heading font-semibold text-lg">Angela Stetter</h3>
                <p className="text-sm text-ink-muted mt-2 italic">
                  {isDE
                    ? '„Kein Thema ist zu klein — meldet euch gerne."'
                    : '"No topic is too small — feel free to reach out."'}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-ink-muted">{isDE ? 'Kontakt:' : 'Contact:'}</span>
              <a
                href="mailto:praevention@blattwerk.dev"
                className="text-sm font-medium text-gold-theme transition-opacity hover:opacity-70"
              >
                praevention@blattwerk.dev
              </a>
            </div>
            <div className="mt-6 p-4 rounded-xl border border-[var(--border)] bg-bg-elevated">
              <h4 className="text-xs font-medium text-gold-theme mb-2">
                {isDE ? 'Was passiert, wenn ich mich melde?' : 'What happens when I reach out?'}
              </h4>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-ink-muted">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 font-heading font-bold text-accent">1.</span>
                  <span>{isDE ? 'Vertrauliches Gespräch — in deinem Tempo' : 'Confidential conversation — at your pace'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 font-heading font-bold text-accent">2.</span>
                  <span>{isDE ? 'Gemeinsam Optionen besprechen' : 'Discuss options together'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 font-heading font-bold text-accent">3.</span>
                  <span>{isDE ? 'Bei Bedarf Vermittlung an Fachstelle' : 'Referral to specialists if needed'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* Local Resources */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Anlaufstellen in Hildesheim' : 'Local Resources in Hildesheim'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Kostenlose und auf Wunsch anonyme Beratung — für Betroffene und Angehörige.'
                : 'Free and optionally anonymous counseling — for those affected and their relatives.'}
            </p>
            {localRes.map((resource, i) => (
              <ResourceRow key={resource.name} resource={resource} isFirst={i === 0} />
            ))}
          </div>
        </section>
      </HomeSection>

      {/* National Resources */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Überregionale Hilfsangebote' : 'National Help Resources'}
            </h2>
            {helpRes.map((resource, i) => (
              <ResourceRow key={resource.name} resource={resource} isFirst={i === 0} />
            ))}
          </div>
        </section>
      </HomeSection>

      {/* Knowledge Links */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Weiterlesen' : 'Further Reading'}
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl">
              {isDE
                ? 'In unserer Wissensdatenbank findest du ausführliche Artikel zu diesen Themen.'
                : 'In our knowledge base you\'ll find detailed articles on these topics.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {knowledgeLinks.map(({ slug, label }) => (
                <a
                  key={slug}
                  href={`/${isDE ? 'de' : 'en'}/wissensdatenbank/${slug}`}
                  className="px-5 py-3 rounded-xl border border-[var(--border)] bg-bg-elevated text-sm font-medium transition-all hover:border-accent hover:text-accent"
                >
                  {label} &#8599;
                </a>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* KCanG footer note */}
      <div className="py-10 max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-xs leading-relaxed max-w-3xl text-ink-faint">
          {isDE
            ? 'Das Suchtpräventionskonzept des BlattWerk e.V. erfüllt die Anforderungen des KCanG (§ 6 Abs. 3). Dieses Gesetz verpflichtet Anbauvereinigungen, ein Gesundheits- und Jugendschutzkonzept vorzuhalten, Präventionsbeauftragte zu benennen und Mitglieder über Risiken aufzuklären. Bei akuten Notfällen: Notruf 112.'
            : 'The addiction prevention concept of BlattWerk e.V. meets the requirements of the KCanG (§ 6 para. 3). This law requires cultivation associations to maintain a health and youth protection concept, appoint prevention officers and inform members about risks. In acute emergencies: call 112.'}
        </p>
      </div>

      <StickyEmergencyBar isDE={isDE} />
    </>
  );
}
