import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const navLinks = [
  { key: 'about', href: '/ueber-uns' },
  { key: 'membership', href: '/mitgliedschaft' },
  { key: 'strains', href: '/sortendatenbank' },
  { key: 'knowledge', href: '/wissensdatenbank' },
  { key: 'events', href: '/events' },
] as const;

const legalLinks = [
  { key: 'legal_notice', href: '/impressum' },
  { key: 'privacy', href: '/datenschutz' },
  { key: 'prevention', href: '/suchtpraevention' },
] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-surface border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className="font-heading text-xl italic text-ink font-medium">Blattwerk</span>
              <span className="text-xs text-ink-muted ml-1">e.V.</span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Cannabis Social Club Hildesheim
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-4">
              {t('footer.legal_notice')}
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                  >
                    {t(`footer.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-4">
              {t('nav.contact')}
            </h3>
            <Link
              href="/kontakt"
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-ink-muted text-center sm:text-left">
            {t('footer.info_disclaimer')}
          </p>
          <p className="text-xs text-ink-muted shrink-0">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
