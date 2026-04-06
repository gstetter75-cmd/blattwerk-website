'use client';

import { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight, AlertCircle, GitCompareArrows } from 'lucide-react';
import { strains, effectLabels, flavorLabels, typeConfig } from '@/data/strains';
import type { Strain, EffectProfile } from '@/data/strains';
import { StarRating } from './StarRating';

/* ── Types ──────────────────────────────────────────────────────────── */

type GoalKey = 'relaxation' | 'creativity' | 'focus' | 'balanced';
type ThcPref = 'low' | 'medium' | 'high' | 'cbd';

interface WizardState {
  goal: GoalKey | null;
  thcPref: ThcPref | null;
  flavors: Set<string>;
}

/* ── Constants ──────────────────────────────────────────────────────── */

const TOTAL_STEPS = 4;
const MAX_FLAVORS = 3;
const MAX_RESULTS = 5;

const GOAL_EFFECTS: Record<Exclude<GoalKey, 'balanced'>, (keyof EffectProfile)[]> = {
  relaxation: ['relaxed', 'sleepy'],
  creativity: ['creative', 'energetic', 'euphoric'],
  focus: ['focused', 'uplifted'],
};

const GOAL_OPTIONS: { value: GoalKey; label: { de: string; en: string }; desc: { de: string; en: string } }[] = [
  {
    value: 'relaxation',
    label: { de: 'Entspannung', en: 'Relaxation' },
    desc: { de: 'Körperliche Ruhe und Gelassenheit', en: 'Physical calm and tranquility' },
  },
  {
    value: 'creativity',
    label: { de: 'Kreativität & Energie', en: 'Creativity & Energy' },
    desc: { de: 'Zerebrale Stimulation und Antrieb', en: 'Cerebral stimulation and drive' },
  },
  {
    value: 'focus',
    label: { de: 'Fokus & Klarheit', en: 'Focus & Clarity' },
    desc: { de: 'Mentale Schärfe und Konzentration', en: 'Mental sharpness and concentration' },
  },
  {
    value: 'balanced',
    label: { de: 'Ausgewogen', en: 'Balanced' },
    desc: { de: 'Keine spezifische Präferenz', en: 'No specific preference' },
  },
];

const THC_OPTIONS: { value: ThcPref; label: { de: string; en: string } }[] = [
  { value: 'low', label: { de: 'Niedrig (unter 15%)', en: 'Low (under 15%)' } },
  { value: 'medium', label: { de: 'Mittel (15–22%)', en: 'Medium (15–22%)' } },
  { value: 'high', label: { de: 'Hoch (über 22%)', en: 'High (above 22%)' } },
  { value: 'cbd', label: { de: 'CBD-dominant (CBD > THC)', en: 'CBD-dominant (CBD > THC)' } },
];

const FLAVOR_OPTIONS: { value: string; label: { de: string; en: string } }[] = [
  { value: 'berry', label: { de: 'Fruchtig', en: 'Fruity' } },
  { value: 'earthy', label: { de: 'Erdig', en: 'Earthy' } },
  { value: 'citrus', label: { de: 'Zitrus', en: 'Citrus' } },
  { value: 'sweet', label: { de: 'Süß', en: 'Sweet' } },
  { value: 'spicy', label: { de: 'Würzig', en: 'Spicy' } },
  { value: 'pine', label: { de: 'Kiefer', en: 'Pine' } },
];

/* ── Scoring ────────────────────────────────────────────────────────── */

function scoreStrain(strain: Strain, state: WizardState): number {
  let score = 0;

  // Goal-based effect scoring (0–100 per effect)
  if (state.goal && state.goal !== 'balanced') {
    const keys = GOAL_EFFECTS[state.goal];
    score += keys.reduce((sum, k) => sum + strain.effects[k], 0);
  } else {
    // Balanced: use overall rating as proxy
    score += strain.rating * 20;
  }

  // Flavor matching (0–30 per match)
  if (state.flavors.size > 0) {
    const flavorMatches = strain.flavors.filter((f) => state.flavors.has(f)).length;
    score += flavorMatches * 30;
  }

  return score;
}

function filterByThc(list: readonly Strain[], pref: ThcPref | null): Strain[] {
  if (!pref) return [...list];
  return list.filter((s) => {
    const thc = s.cannabinoids.thc;
    const cbd = s.cannabinoids.cbd;
    switch (pref) {
      case 'low': return thc < 15;
      case 'medium': return thc >= 15 && thc <= 22;
      case 'high': return thc > 22;
      case 'cbd': return cbd > thc;
    }
  });
}

function getResults(state: WizardState): Strain[] {
  const filtered = filterByThc(strains, state.thcPref);
  const scored = filtered.map((s) => ({ strain: s, score: scoreStrain(s, state) }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, MAX_RESULTS).map((s) => s.strain);
}

/* ── Sub-components ─────────────────────────────────────────────────── */

const TYPE_LEFT_BORDER: Record<string, string> = {
  indica: 'rgba(99,102,241,0.5)',
  sativa: 'rgba(245,158,11,0.5)',
  hybrid: 'rgba(34,197,94,0.5)',
};

const TYPE_TEXT_COLOR: Record<string, string> = {
  indica: 'rgba(79,70,229,0.85)',
  sativa: 'rgba(217,119,6,0.85)',
  hybrid: 'rgba(22,163,74,0.85)',
};

function ResultCard({ strain, locale }: { strain: Strain; locale: string }) {
  const lang = locale === 'de' ? 'de' : 'en';
  const config = typeConfig[strain.type];
  const accentBorder = TYPE_LEFT_BORDER[strain.type] ?? 'rgba(34,197,94,0.5)';
  const typeTextColor = TYPE_TEXT_COLOR[strain.type] ?? 'rgba(22,163,74,0.85)';

  const topEffects = Object.entries(strain.effects)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([key]) => key as keyof typeof effectLabels);

  return (
    <Link href={`/sortendatenbank/${strain.slug}`} className="block">
      <article
        className="flex flex-col transition-colors duration-200 bg-bg border border-[var(--border)] hover:border-ink-faint/30"
        style={{ borderLeft: `4px solid ${accentBorder}` }}
      >
        <div className="p-5 flex flex-col gap-3">
          {/* Name + Type badge */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading italic text-lg leading-tight">{strain.name}</h3>
            <span
              className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] mt-0.5"
              style={{ color: typeTextColor }}
            >
              {config.label[lang]}
            </span>
          </div>

          {/* THC / CBD */}
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-ink-muted">
              THC <span className="font-semibold text-accent">{strain.cannabinoids.thc}%</span>
            </span>
            <span className="text-ink-faint">&middot;</span>
            <span className="text-ink-muted">
              CBD <span>{strain.cannabinoids.cbd}%</span>
            </span>
          </div>

          {/* Effects */}
          <div className="flex flex-wrap gap-1.5">
            {topEffects.map((key) => (
              <span
                key={key}
                className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 text-ink-muted border border-[var(--border)]"
              >
                {effectLabels[key][lang]}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[var(--border)]">
            <StarRating rating={strain.rating} />
            <span className="text-xs font-mono text-ink-muted">{strain.rating.toFixed(1)}</span>
            <span className="text-xs text-ink-faint">({strain.review_count.toLocaleString()})</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ── Progress indicator ─────────────────────────────────────────────── */

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className="h-1 flex-1 transition-colors duration-300"
          style={{
            backgroundColor: i < step ? 'var(--accent)' : 'var(--border)',
          }}
        />
      ))}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */

export function StrainFinder() {
  const locale = useLocale();
  const lang = locale === 'de' ? 'de' : 'en';
  const [step, setStep] = useState(1);
  const [state, setState] = useState<WizardState>({
    goal: null,
    thcPref: null,
    flavors: new Set(),
  });

  const results = useMemo(() => getResults(state), [state]);

  const canNext =
    (step === 1 && state.goal !== null) ||
    (step === 2 && state.thcPref !== null) ||
    step === 3;

  const goNext = () => {
    if (step < TOTAL_STEPS && canNext) setStep(step + 1);
  };
  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleFlavor = (flavor: string) => {
    setState((prev) => {
      const next = new Set(prev.flavors);
      if (next.has(flavor)) {
        next.delete(flavor);
      } else if (next.size < MAX_FLAVORS) {
        next.add(flavor);
      }
      return { ...prev, flavors: next };
    });
  };

  const reset = () => {
    setStep(1);
    setState({ goal: null, thcPref: null, flavors: new Set() });
  };

  const stepLabels: Record<number, { de: string; en: string }> = {
    1: { de: 'Was suchst du?', en: 'What are you looking for?' },
    2: { de: 'THC-Präferenz', en: 'THC Preference' },
    3: { de: 'Geschmack', en: 'Flavor Preference' },
    4: { de: 'Ergebnisse', en: 'Results' },
  };

  return (
    <section className="py-10 bg-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-2">
          <ProgressBar step={step} total={TOTAL_STEPS} />
        </div>
        <div className="flex items-center justify-between mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
            {lang === 'de' ? `Schritt ${step} von ${TOTAL_STEPS}` : `Step ${step} of ${TOTAL_STEPS}`}
          </p>
          <p className="text-sm text-ink-muted">{stepLabels[step][lang]}</p>
        </div>

        {/* Steps */}
        {step === 1 && (
            <div key="step1" className="animate-fade-up space-y-3">
              {GOAL_OPTIONS.map((opt) => {
                const active = state.goal === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setState((prev) => ({ ...prev, goal: opt.value }))}
                    className="w-full text-left p-5 border transition-colors duration-200 cursor-pointer"
                    style={{
                      borderColor: active ? 'var(--accent)' : 'var(--border)',
                      backgroundColor: active ? 'rgba(34,197,94,0.05)' : 'var(--bg-elevated)',
                    }}
                  >
                    <p className="font-heading italic text-lg mb-1">{opt.label[lang]}</p>
                    <p className="text-sm text-ink-muted">{opt.desc[lang]}</p>
                  </button>
                );
              })}
            </div>
          )}

          {step === 2 && (
            <div key="step2" className="animate-fade-up space-y-3">
              {THC_OPTIONS.map((opt) => {
                const active = state.thcPref === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setState((prev) => ({ ...prev, thcPref: opt.value }))}
                    className="w-full text-left p-5 border transition-colors duration-200 cursor-pointer"
                    style={{
                      borderColor: active ? 'var(--accent)' : 'var(--border)',
                      backgroundColor: active ? 'rgba(34,197,94,0.05)' : 'var(--bg-elevated)',
                    }}
                  >
                    <p className="font-heading italic text-lg">{opt.label[lang]}</p>
                  </button>
                );
              })}
            </div>
          )}

          {step === 3 && (
            <div key="step3" className="animate-fade-up">
              <p className="text-sm text-ink-muted mb-4">
                {lang === 'de'
                  ? `Wähle bis zu ${MAX_FLAVORS} Geschmacksrichtungen (optional).`
                  : `Select up to ${MAX_FLAVORS} flavors (optional).`}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FLAVOR_OPTIONS.map((opt) => {
                  const active = state.flavors.has(opt.value);
                  const disabled = !active && state.flavors.size >= MAX_FLAVORS;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => toggleFlavor(opt.value)}
                      disabled={disabled}
                      className="p-4 border text-center transition-colors duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        borderColor: active ? 'var(--accent)' : 'var(--border)',
                        backgroundColor: active ? 'rgba(34,197,94,0.05)' : 'var(--bg-elevated)',
                      }}
                    >
                      <p className="text-sm font-medium">{opt.label[lang]}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div key="step4" className="animate-fade-up">
              {results.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <p className="font-heading italic text-xl mb-2">
                    {lang === 'de' ? 'Keine passenden Sorten gefunden' : 'No matching strains found'}
                  </p>
                  <p className="text-sm text-ink-muted mb-6">
                    {lang === 'de'
                      ? 'Versuche andere Kriterien für bessere Ergebnisse.'
                      : 'Try different criteria for better results.'}
                  </p>
                  <button
                    onClick={reset}
                    className="text-sm cursor-pointer underline text-accent"
                  >
                    {lang === 'de' ? 'Neu starten' : 'Start over'}
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-ink-faint">
                    {lang === 'de'
                      ? `Top ${results.length} Ergebnisse`
                      : `Top ${results.length} results`}
                  </p>
                  <div className="space-y-4">
                    {results.map((strain) => (
                      <ResultCard key={strain.slug} strain={strain} locale={locale} />
                    ))}
                  </div>

                  {/* Compare + restart links */}
                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[var(--border)]">
                    <Link
                      href="/sortendatenbank/vergleich"
                      className="flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition-colors"
                    >
                      <GitCompareArrows className="w-4 h-4" />
                      {lang === 'de' ? 'Vergleichen' : 'Compare'}
                    </Link>
                    <button
                      onClick={reset}
                      className="text-sm cursor-pointer text-ink-muted hover:text-accent transition-colors"
                    >
                      {lang === 'de' ? 'Neu starten' : 'Start over'}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

        {/* Navigation buttons */}
        {step < TOTAL_STEPS && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--border)]">
            <button
              onClick={goBack}
              disabled={step === 1}
              className="flex items-center gap-2 text-sm transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-ink-muted hover:text-ink"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === 'de' ? 'Zurück' : 'Back'}
            </button>
            <button
              onClick={goNext}
              disabled={!canNext}
              className="flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-accent hover:text-accent/80"
            >
              {step === 3
                ? (lang === 'de' ? 'Ergebnisse anzeigen' : 'Show results')
                : (lang === 'de' ? 'Weiter' : 'Next')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-14 flex gap-3 py-4 border-t border-[var(--border)]">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-ink-faint" />
          <p className="text-xs leading-relaxed text-ink-faint">
            {lang === 'de'
              ? 'Diese Informationen dienen ausschließlich zu Bildungszwecken und ersetzen keine medizinische Beratung. Cannabis nur für Vereinsmitglieder ab 21 Jahren.'
              : 'This information is for educational purposes only and does not replace medical advice. Cannabis only for club members aged 21 and over.'}
          </p>
        </div>
      </div>
    </section>
  );
}
