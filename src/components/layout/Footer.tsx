import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { MessageCircle, Mail } from 'lucide-react';
import Image from 'next/image';

const NAV = [
  { key: 'about',        href: '/ueber-uns' },
  { key: 'strains',      href: '/sortendatenbank' },
  { key: 'knowledge',    href: '/wissensdatenbank' },
  { key: 'membership',   href: '/mitgliedschaft' },
  { key: 'blog',         href: '/blog' },
  { key: 'events',       href: '/events' },
  { key: 'csc_founding', href: '/csc-gruendung' },
] as const;

const LEGAL = [
  { key: 'legal_notice', href: '/impressum' },
  { key: 'privacy',      href: '/datenschutz' },
  { key: 'prevention',   href: '/suchtpraevention' },
] as const;

const SOCIAL = [
  { icon: MessageCircle, href: 'https://wa.me/4915233539841', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:info@blattwerk.dev', label: 'E-Mail' },
] as const;

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();
  const isDE = locale === 'de';

  return (
    <footer className="border-t border-[var(--border)]" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/optimized/logo.webp`}
              alt="BlattWerk e.V."
              width={140}
              height={56}
              className="h-12 w-auto object-contain mb-3 logo-adaptive"
            />
            <p className="text-xs text-ink-faint mb-5 leading-relaxed">
              Cannabis Social Club<br />Hildesheim
            </p>
            <div className="flex flex-col gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 text-sm text-ink-faint hover:text-accent transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-4">
              {isDE ? 'Navigation' : 'Navigation'}
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-ink-muted hover:text-accent transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-4">
              {isDE ? 'Rechtliches' : 'Legal'}
            </p>
            <ul className="flex flex-col gap-2.5">
              {LEGAL.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-ink-muted hover:text-accent transition-colors"
                  >
                    {t(`footer.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-4">
              {isDE ? 'Kontakt' : 'Contact'}
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/kontakt" className="text-sm text-ink-muted hover:text-accent transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a href="mailto:info@blattwerk.dev" className="text-sm text-ink-muted hover:text-accent transition-colors">
                  info@blattwerk.dev
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-faint text-center sm:text-left">
            {t('footer.info_disclaimer')}
          </p>
          <p className="text-xs text-ink-faint shrink-0">
            © {year} BlattWerk e.V.
          </p>
        </div>
      </div>
    </footer>
  );
}
