'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const navItems = [
  { key: 'home', href: '/' },
  {
    key: 'about',
    href: '/ueber-uns',
    children: [
      { key: 'about_club', href: '/ueber-uns' },
      { key: 'about_board', href: '/ueber-uns#vorstand' },
      { key: 'about_council', href: '/ueber-uns#anbaurat' },
      { key: 'about_statutes', href: '/ueber-uns#satzung' },
      { key: 'about_rules', href: '/ueber-uns#regeln' },
    ],
  },
  { key: 'membership', href: '/mitgliedschaft' },
  { key: 'strains', href: '/sortendatenbank' },
  { key: 'knowledge', href: '/wissensdatenbank' },
  { key: 'events', href: '/events' },
  { key: 'rooms', href: '/raeumlichkeiten' },
  { key: 'prevention', href: '/suchtpraevention' },
  { key: 'donations', href: '/spenden' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/kontakt' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const switchLocale = () => {
    const newLocale = locale === 'de' ? 'en' : 'de';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-0 group">
            <span className="font-heading text-2xl text-deep-forest">Blatt</span>
            <span className="font-heading text-2xl text-deep-forest font-bold">Werk</span>
            <span className="text-xs text-sage ml-1">e.V.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => 'children' in item && setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 flex items-center gap-1 ${
                    pathname === item.href
                      ? 'text-amber bg-sand/50'
                      : 'text-charcoal hover:text-amber hover:bg-sand/30'
                  }`}
                >
                  {t(item.key)}
                  {'children' in item && <ChevronDown className="w-3 h-3" />}
                </Link>

                {'children' in item && openDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-warm-white rounded-lg shadow-lg border border-sand py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:text-amber hover:bg-sand/30 transition-colors"
                      >
                        {t(child.key)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Language + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-sage hover:text-amber border border-sand rounded-lg transition-colors cursor-pointer"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              {locale === 'de' ? 'EN' : 'DE'}
            </button>

            <button
              className="lg:hidden p-2 text-charcoal hover:text-amber transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-sand bg-warm-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.key}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-amber bg-sand/50'
                      : 'text-charcoal hover:text-amber hover:bg-sand/30'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
                {'children' in item &&
                  item.children.map((child) => (
                    <Link
                      key={child.key}
                      href={child.href}
                      className="block pl-8 pr-4 py-2 text-sm text-sage hover:text-amber transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(child.key)}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
