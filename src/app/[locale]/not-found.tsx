import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const locale = useLocale();
  const isDE = locale === 'de';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Blob Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blob-animation pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative text-center max-w-md mx-auto">
        <p className="font-heading text-8xl italic font-medium text-gold-theme opacity-20 select-none mb-2">
          404
        </p>
        <h1 className="font-heading text-3xl italic text-ink mb-3">
          {isDE ? 'Seite nicht gefunden' : 'Page not found'}
        </h1>
        <p className="text-ink-muted text-base leading-relaxed mb-8">
          {isDE
            ? 'Diese Seite existiert nicht oder wurde verschoben.'
            : 'This page does not exist or has been moved.'}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-void font-semibold rounded-md hover:bg-accent-soft transition-colors duration-200 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {isDE ? 'Zurück zur Startseite' : 'Back to home'}
        </Link>
      </div>
    </div>
  );
}
