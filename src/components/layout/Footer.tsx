import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import Image from 'next/image';

const NAV = [
  { key: 'about',      href: '/ueber-uns' },
  { key: 'strains',    href: '/sortendatenbank' },
  { key: 'knowledge',  href: '/wissensdatenbank' },
  { key: 'events',     href: '/events' },
  { key: 'membership', href: '/mitgliedschaft' },
] as const;

const LEGAL = [
  { key: 'legal_notice', href: '/impressum' },
  { key: 'privacy',      href: '/datenschutz' },
  { key: 'prevention',   href: '/suchtpraevention' },
] as const;

const SOCIAL = [
  { icon: Instagram, href: 'https://www.instagram.com/blattwerk_ev', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/4915233539841', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:info@blattwerk.dev', label: 'E-Mail' },
] as const;

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();
  const isDE = locale === 'de';

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'var(--bg)' }}>
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand + Social */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo.png`}
              alt="Blattwerk e.V."
              width={140}
              height={56}
              className="h-14 w-auto object-contain mb-3"
              style={{ filter: 'drop-shadow(0 0 10px rgba(34,197,94,0.25)) brightness(1.1)' }}
            />
            <p className="text-xs uppercase tracking-[0.1em] font-body mb-4" style={{ color: 'var(--text-faint)' }}>
              Cannabis Social Club<br />Hildesheim
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-md border border-[var(--border)] flex items-center justify-center text-ink-faint hover:text-accent hover:border-accent/30 transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5 font-body" style={{ color: 'var(--text-faint)' }}>
              {isDE ? 'Navigation' : 'Navigation'}
            </p>
            <ul className="flex flex-col gap-3">
              {NAV.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-xs uppercase tracking-[0.1em] font-body transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5 font-body" style={{ color: 'var(--text-faint)' }}>
              {isDE ? 'Rechtliches' : 'Legal'}
            </p>
            <ul className="flex flex-col gap-3">
              {LEGAL.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-xs uppercase tracking-[0.1em] font-body transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t(`footer.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5 font-body" style={{ color: 'var(--text-faint)' }}>
              {isDE ? 'Kontakt' : 'Contact'}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/kontakt"
                  className="text-xs uppercase tracking-[0.1em] font-body transition-colors duration-200"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@blattwerk.dev"
                  className="text-xs uppercase tracking-[0.1em] font-body transition-colors duration-200"
                  style={{ color: 'var(--text-muted)' }}
                >
                  info@blattwerk.dev
                </a>
              </li>
              <li>
                <a
                  href="tel:+4915233539841"
                  className="text-xs uppercase tracking-[0.1em] font-body transition-colors duration-200"
                  style={{ color: 'var(--text-muted)' }}
                >
                  +49 152 33539841
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.1em] font-body text-center sm:text-left"
            style={{ color: 'var(--text-faint)' }}>
            {t('footer.info_disclaimer')}
          </p>
          <p className="text-[10px] uppercase tracking-[0.1em] font-body shrink-0"
            style={{ color: 'var(--text-faint)' }}>
            © {year} Blattwerk e.V.
          </p>
        </div>
      </div>
    </footer>
  );
}
