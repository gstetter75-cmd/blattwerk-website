import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const navLinks = [
  { key: 'about', href: '/ueber-uns' },
  { key: 'membership', href: '/mitgliedschaft' },
  { key: 'strains', href: '/sortendatenbank' },
  { key: 'knowledge', href: '/wissensdatenbank' },
  { key: 'events', href: '/events' },
] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-forest text-warm-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-baseline gap-0 mb-4">
              <span className="font-heading text-xl text-warm-white">Blatt</span>
              <span className="font-heading text-xl text-warm-white font-bold">Werk</span>
              <span className="text-xs text-sage ml-1">e.V.</span>
            </div>
            <p className="text-sm text-warm-white/60 leading-relaxed">
              Cannabis Social Club Hildesheim
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-warm-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-warm-white/60 hover:text-amber transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-warm-white uppercase tracking-wider mb-4">
              {t('footer.legal_notice')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-warm-white/60 hover:text-amber transition-colors"
                >
                  {t('footer.legal_notice')}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-warm-white/60 hover:text-amber transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/suchtpraevention"
                  className="text-sm text-warm-white/60 hover:text-amber transition-colors"
                >
                  {t('footer.prevention')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-warm-white uppercase tracking-wider mb-4">
              {t('nav.contact')}
            </h3>
            <Link
              href="/kontakt"
              className="text-sm text-warm-white/60 hover:text-amber transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-warm-white/40 text-center mb-2">
            {t('footer.info_disclaimer')}
          </p>
          <p className="text-xs text-warm-white/40 text-center">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
