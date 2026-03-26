'use client';

import { useLocale } from 'next-intl';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export default function Error({ reset }: { reset: () => void }) {
  const locale = useLocale();
  const isDE = locale === 'de';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <AlertTriangle className="w-12 h-12 text-gold-theme mx-auto mb-4 opacity-50" />
        <h1 className="font-heading text-3xl italic text-ink mb-3">
          {isDE ? 'Etwas ist schiefgelaufen' : 'Something went wrong'}
        </h1>
        <p className="text-ink-muted text-base leading-relaxed mb-8">
          {isDE
            ? 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.'
            : 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent text-void font-semibold rounded-md hover:bg-accent-soft transition-colors duration-200 text-sm cursor-pointer"
            type="button"
          >
            {isDE ? 'Erneut versuchen' : 'Try again'}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-ink-muted font-semibold rounded-md hover:bg-bg-elevated transition-colors duration-200 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDE ? 'Startseite' : 'Home'}
          </Link>
        </div>
      </div>
    </div>
  );
}
