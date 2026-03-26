'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Z } from '@/lib/z-index';

const STORAGE_KEY = 'blattwerk-cookie-consent';

const TEXTS = {
  de: {
    title: 'Cookies & Datenschutz',
    text: 'Wir verwenden ausschließlich technisch notwendige Cookies. Keine Tracking- oder Werbe-Cookies.',
    acknowledge: 'Verstanden',
  },
  en: {
    title: 'Cookies & Privacy',
    text: 'We only use technically necessary cookies. No tracking or advertising cookies.',
    acknowledge: 'Got it',
  },
} as const;

export function CookieBanner() {
  const locale = useLocale();
  const t = TEXTS[locale === 'en' ? 'en' : 'de'];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const acknowledge = () => {
    localStorage.setItem(STORAGE_KEY, 'acknowledged');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-5 sm:w-96 rounded-xl border border-[var(--border)] p-5"
          style={{
            zIndex: Z.cookie,
            background: 'var(--bg-surface)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
          }}
          role="dialog"
          aria-label={t.title}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink mb-1">{t.title}</p>
              <p className="text-xs text-ink-muted leading-relaxed">{t.text}</p>
            </div>
          </div>

          <button
            onClick={acknowledge}
            className="w-full py-2 text-sm font-semibold text-void rounded-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #22c55e, #86efac)',
              boxShadow: '0 0 12px rgba(34,197,94,0.2)',
            }}
          >
            {t.acknowledge}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
