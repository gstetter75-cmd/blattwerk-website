'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Z } from '@/lib/z-index';
import Image from 'next/image';

const navGroups = [
  {
    key: 'about',
    href: '/ueber-uns',
    children: [
      { key: 'about_club',     href: '/ueber-uns' },
      { key: 'about_board',    href: '/ueber-uns#vorstand' },
      { key: 'about_statutes', href: '/ueber-uns#satzung' },
      { key: 'about_rules',    href: '/ueber-uns#regeln' },
    ],
  },
  { key: 'strains', href: '/sortendatenbank' },
  {
    key: 'knowledge',
    href: '/wissensdatenbank',
    children: [
      { key: 'knowledge',   href: '/wissensdatenbank' },
      { key: 'prevention',  href: '/suchtpraevention' },
    ],
  },
  {
    key: 'events',
    href: '/events',
    children: [
      { key: 'events',    href: '/events' },
      { key: 'rooms',     href: '/raeumlichkeiten' },
      { key: 'donations', href: '/spenden' },
    ],
  },
  { key: 'contact', href: '/kontakt' },
] as const;

type NavGroup = typeof navGroups[number];
type NavGroupKey = NavGroup['key'];

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState<NavGroupKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Close mobile menu on Escape key & lock body scroll
  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const switchLocale = () =>
    router.replace(pathname, { locale: locale === 'de' ? 'en' : 'de' });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          scrolled ? 'border-b border-white/[0.06]' : ''
        }`}
        style={{
          zIndex: Z.elevated,
          background: scrolled ? 'rgba(5,10,7,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="shrink-0 group">
              <Image
                src="/images/logo.png"
                alt="Blattwerk e.V."
                width={180}
                height={72}
                className="h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                style={{ filter: 'drop-shadow(0 0 14px rgba(34,197,94,0.35)) brightness(1.15) contrast(1.1)' }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navGroups.map((group) => {
                const hasChildren = 'children' in group;
                const isActive = pathname === group.href || pathname.startsWith(group.href + '/');
                return (
                  <div
                    key={group.key}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenDropdown(group.key as NavGroupKey)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={group.href}
                      className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200 font-body py-2 ${
                        isActive ? 'text-accent' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {t(group.key)}
                      {hasChildren && (
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                          openDropdown === group.key ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>

                    {hasChildren && openDropdown === group.key && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.12 }}
                        className="absolute top-full left-0 mt-1 w-48 border border-white/[0.08] overflow-hidden"
                        style={{ zIndex: Z.dropdown, background: 'rgba(10,17,13,0.97)', backdropFilter: 'blur(20px)' }}
                      >
                        {'children' in group && group.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            className="block px-4 py-2.5 text-xs text-ink-muted hover:text-ink hover:bg-white/[0.04] transition-colors font-body uppercase tracking-[0.1em]"
                          >
                            {t(child.key)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-4">
              <button
                onClick={switchLocale}
                className="hidden sm:flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors font-body uppercase tracking-[0.12em] cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                {locale === 'de' ? 'EN' : 'DE'}
              </button>

              <Link
                href="/mitgliedschaft"
                className="hidden lg:inline-flex items-center px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] border border-accent/50 text-accent hover:bg-accent hover:text-void transition-all duration-200 font-body"
              >
                {locale === 'de' ? 'Mitglied werden' : 'Join now'}
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                aria-label="Menu"
              >
                <span className={`block w-5 h-px bg-ink transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-px bg-ink transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-px bg-ink transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 lg:hidden flex flex-col pt-20 px-6 overflow-y-auto"
            style={{ zIndex: Z.overlay, background: 'rgba(5,10,7,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col gap-1">
              {navGroups.map((group) => (
                <div key={group.key}>
                  <Link
                    href={group.href}
                    className="block py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink-muted hover:text-ink border-b border-white/[0.06] transition-colors font-body"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(group.key)}
                  </Link>
                  {'children' in group && group.children.map((child) => (
                    <Link
                      key={child.key}
                      href={child.href}
                      className="block py-2.5 pl-4 text-xs uppercase tracking-[0.1em] text-ink-faint hover:text-ink-muted transition-colors font-body"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(child.key)}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/mitgliedschaft"
                className="flex items-center justify-center py-4 text-xs font-bold uppercase tracking-[0.15em] border border-accent/50 text-accent font-body"
                onClick={() => setMobileOpen(false)}
              >
                {locale === 'de' ? 'Mitglied werden' : 'Join now'}
              </Link>
              <button
                onClick={switchLocale}
                className="flex items-center justify-center gap-2 py-3 text-xs text-ink-muted hover:text-ink transition-colors font-body uppercase tracking-[0.12em] cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                {locale === 'de' ? 'English' : 'Deutsch'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
