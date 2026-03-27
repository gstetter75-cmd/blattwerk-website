'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isDE: boolean;
}

interface Question {
  de: string;
  en: string;
}

const questions: readonly Question[] = [
  {
    de: 'Wie oft hast du in den letzten 6 Monaten Cannabis konsumiert?',
    en: 'How often have you used cannabis in the past 6 months?',
  },
  {
    de: 'Wie oft warst du in den letzten 6 Monaten „high" von Cannabis?',
    en: 'How often were you "high" from cannabis in the past 6 months?',
  },
  {
    de: 'Wie oft hast du das starke Verlangen verspürt, Cannabis zu konsumieren?',
    en: 'How often have you had a strong desire or urge to use cannabis?',
  },
  {
    de: 'Wie oft hat dein Cannabiskonsum dazu geführt, dass du Dinge nicht erledigt hast?',
    en: 'How often has your cannabis use led to you not doing things you were supposed to?',
  },
  {
    de: 'Wie oft hat jemand (Freunde, Familie, Arzt) Bedenken zu deinem Konsum geäußert?',
    en: 'How often has someone (friends, family, doctor) expressed concern about your use?',
  },
  {
    de: 'Wie oft hast du versucht, deinen Konsum zu reduzieren, ohne es zu schaffen?',
    en: 'How often have you tried to cut down or stop using cannabis without success?',
  },
  {
    de: 'Wie oft hattest du Probleme mit Gedächtnis oder Konzentration nach dem Konsum?',
    en: 'How often have you had problems with memory or concentration after using cannabis?',
  },
  {
    de: 'Wie oft hast du Cannabis in einer gefährlichen Situation konsumiert (z.B. vor dem Autofahren)?',
    en: 'How often have you used cannabis in a hazardous situation (e.g. before driving)?',
  },
] as const;

const answerOptions = [
  { de: 'Nie', en: 'Never', value: 0 },
  { de: 'Selten', en: 'Rarely', value: 1 },
  { de: 'Manchmal', en: 'Sometimes', value: 2 },
  { de: 'Oft', en: 'Often', value: 3 },
  { de: 'Sehr oft', en: 'Very often', value: 4 },
] as const;

type ResultLevel = 'green' | 'yellow' | 'red';

function getResultLevel(score: number): ResultLevel {
  if (score <= 8) return 'green';
  if (score <= 12) return 'yellow';
  return 'red';
}

function getResultContent(level: ResultLevel, isDE: boolean) {
  switch (level) {
    case 'green':
      return {
        title: isDE ? 'Unauffällig' : 'No Concerns',
        text: isDE
          ? 'Dein Ergebnis deutet auf einen unproblematischen Umgang hin. Bleib achtsam und informiert.'
          : 'Your result suggests unproblematic use. Stay mindful and informed.',
        color: 'var(--accent)',
        bg: 'rgba(45, 106, 79, 0.08)',
      };
    case 'yellow':
      return {
        title: isDE ? 'Erhöhte Aufmerksamkeit empfohlen' : 'Increased Attention Recommended',
        text: isDE
          ? 'Einige Antworten deuten auf mögliche Risiken hin. Ein Gespräch mit unseren Beauftragten oder einer Beratungsstelle kann helfen, Klarheit zu gewinnen.'
          : 'Some answers suggest possible risks. A conversation with our officers or a counseling center can help gain clarity.',
        color: 'var(--warning)',
        bg: 'var(--warning-bg)',
      };
    case 'red':
      return {
        title: isDE ? 'Beratung empfohlen' : 'Counseling Recommended',
        text: isDE
          ? 'Deine Antworten deuten auf einen möglicherweise problematischen Konsum hin. Wir empfehlen dir, mit unseren Beauftragten oder einer professionellen Beratungsstelle zu sprechen — vertraulich und ohne Vorwürfe.'
          : 'Your answers suggest potentially problematic use. We recommend speaking with our officers or a professional counseling center — confidential and without judgment.',
        color: '#b91c1c',
        bg: 'rgba(185, 28, 28, 0.06)',
      };
  }
}

export function SelfAssessment({ isDE }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = Object.keys(answers).length === questions.length;
  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);

  function handleAnswer(questionIndex: number, value: number) {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
    setShowResult(false);
  }

  function handleReset() {
    setAnswers({});
    setShowResult(false);
  }

  const result = showResult ? getResultContent(getResultLevel(totalScore), isDE) : null;

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <div key={i} className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
          <p className="text-sm font-medium mb-4">
            <span className="text-gold-theme mr-2">{i + 1}.</span>
            {isDE ? q.de : q.en}
          </p>
          <div className="flex flex-wrap gap-2">
            {answerOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(i, opt.value)}
                className="px-3 py-1.5 text-xs rounded-lg border transition-all"
                style={{
                  borderColor: answers[i] === opt.value ? 'var(--accent)' : 'var(--border)',
                  backgroundColor: answers[i] === opt.value ? 'rgba(45, 106, 79, 0.1)' : 'transparent',
                  color: answers[i] === opt.value ? 'var(--accent)' : 'var(--text-muted)',
                  fontWeight: answers[i] === opt.value ? 600 : 400,
                }}
              >
                {isDE ? opt.de : opt.en}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-4">
        <button
          onClick={() => setShowResult(true)}
          disabled={!allAnswered}
          className="px-6 py-3 rounded-xl text-sm font-semibold transition-all"
          style={{
            backgroundColor: allAnswered ? 'var(--accent)' : 'var(--border)',
            color: allAnswered ? '#fff' : 'var(--text-faint)',
            cursor: allAnswered ? 'pointer' : 'not-allowed',
          }}
        >
          {isDE ? 'Auswertung anzeigen' : 'Show Result'}
        </button>
        {Object.keys(answers).length > 0 && (
          <button
            onClick={handleReset}
            className="px-4 py-3 rounded-xl text-sm text-ink-muted transition-opacity hover:opacity-70"
          >
            {isDE ? 'Zurücksetzen' : 'Reset'}
          </button>
        )}
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="p-6 rounded-xl border"
            style={{ borderColor: result.color, backgroundColor: result.bg }}
          >
            <h4 className="font-heading font-bold text-lg mb-2" style={{ color: result.color }}>
              {result.title}
            </h4>
            <p className="text-sm leading-relaxed mb-4">{result.text}</p>

            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="mailto:praevention@blattwerk.dev"
                className="px-3 py-1.5 rounded-lg font-medium transition-opacity hover:opacity-70"
                style={{ backgroundColor: result.color, color: '#fff' }}
              >
                {isDE ? 'Unsere Beauftragten kontaktieren' : 'Contact Our Officers'}
              </a>
              <a
                href="https://www.drugcom.de"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border font-medium transition-opacity hover:opacity-70"
                style={{ borderColor: result.color, color: result.color }}
              >
                {isDE ? 'Selbsttest auf drugcom.de' : 'Self-test on drugcom.de'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-ink-faint leading-relaxed">
        {isDE
          ? 'Dieser Selbsttest basiert auf dem CUDIT-R (Cannabis Use Disorder Identification Test — Revised) und dient ausschließlich der Selbsteinschätzung. Er ersetzt keine professionelle Diagnose. Deine Antworten werden nicht gespeichert und verlassen nicht deinen Browser.'
          : 'This self-assessment is based on the CUDIT-R (Cannabis Use Disorder Identification Test — Revised) and is for self-evaluation only. It does not replace a professional diagnosis. Your answers are not stored and never leave your browser.'}
      </p>
    </div>
  );
}
