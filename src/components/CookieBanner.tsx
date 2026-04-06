'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Cookie } from 'lucide-react';
import { Z } from '@/lib/z-index';

const STORAGE_KEY = 'blattwerk-cookie-consent';

const TEXTS = {
  de: {
    title: 'Cookies & Datenschutz',
    text: 'Wir verwenden ausschließlich technisch notwendige Cookies. Keine Tracking- oder Werbe-Cookies.',
    privacy: 'Datenschutzerklärung',
    acknowledge: 'Verstanden',
  },
  en: {
    title: 'Cookies & Privacy',
    text: 'We only use technically necessary cookies. No tracking or advertising cookies.',
    privacy: 'Privacy Policy',
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
    <>
      {visible && (
        <div
          className="animate-slide-up fixed bottom-5 left-4 right-4 sm:left-auto sm:right-5 sm:w-96 rounded-xl border border-[var(--border)] bg-bg-elevated p-5 shadow-lg"
          style={{ zIndex: Z.cookie }}
          role="dialog"
          aria-label={t.title}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink mb-1">{t.title}</p>
              <p className="text-xs text-ink-muted leading-relaxed">
                {t.text}{' '}
                <a
                  href={`/${locale === 'en' ? 'en' : 'de'}/datenschutz/`}
                  className="underline text-accent hover:opacity-70 transition-opacity"
                >
                  {t.privacy}
                </a>
              </p>
            </div>
          </div>

          <button
            onClick={acknowledge}
            className="w-full py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 cursor-pointer hover:opacity-90"
            style={{ background: 'var(--accent)' }}
          >
            {t.acknowledge}
          </button>
        </div>
      )}
    </>
  );
}
