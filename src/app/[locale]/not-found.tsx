import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { ArrowLeft, BookOpen, Leaf, Users, Mail } from 'lucide-react';

export const metadata = {
  title: '404 – Seite nicht gefunden | BlattWerk e.V.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const locale = useLocale();
  const isDE = locale === 'de';

  const suggestions = [
    { href: '/wissensdatenbank', icon: BookOpen, label: isDE ? 'Wissensdatenbank' : 'Knowledge Base' },
    { href: '/sortendatenbank', icon: Leaf, label: isDE ? 'Sortendatenbank' : 'Strain Database' },
    { href: '/mitgliedschaft', icon: Users, label: isDE ? 'Mitgliedschaft' : 'Membership' },
    { href: '/kontakt', icon: Mail, label: isDE ? 'Kontakt' : 'Contact' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-void font-semibold rounded-md hover:bg-accent-soft transition-colors duration-200 text-sm mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {isDE ? 'Zur Startseite' : 'Back to home'}
        </Link>

        <div className="pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-ink-faint mb-4">
            {isDE ? 'Vielleicht suchst du:' : 'Maybe you\'re looking for:'}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {suggestions.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[var(--border)] text-sm text-ink-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
