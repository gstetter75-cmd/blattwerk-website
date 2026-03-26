'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Z } from '@/lib/z-index';
import Image from 'next/image';
import { SearchDialog } from '@/components/search/SearchDialog';

/* ── Navigation structure ────────────────────────────────────────────── */

interface NavChild {
  readonly key: string;
  readonly href: string;
  readonly description?: string;
}

interface NavItem {
  readonly key: string;
  readonly href: string;
  readonly children?: readonly NavChild[];
}

const navItems: readonly NavItem[] = [
  {
    key: 'about',
    href: '/ueber-uns',
    children: [
      { key: 'about_club', href: '/ueber-uns', description: 'mission_desc' },
      { key: 'membership', href: '/mitgliedschaft', description: 'membership_desc' },
      { key: 'prevention', href: '/suchtpraevention', description: 'prevention_desc' },
      { key: 'csc_founding', href: '/csc-gruendung', description: 'csc_desc' },
    ],
  },
  { key: 'strains', href: '/sortendatenbank' },
  {
    key: 'knowledge',
    href: '/wissensdatenbank',
    children: [
      { key: 'knowledge', href: '/wissensdatenbank', description: 'knowledge_desc' },
      { key: 'events', href: '/events', description: 'events_desc' },
      { key: 'donations', href: '/spenden', description: 'donations_desc' },
    ],
  },
  { key: 'contact', href: '/kontakt' },
];

/* ── Mega menu panel ─────────────────────────────────────────────────── */

function MegaMenu({
  children,
  onClose,
  t,
}: {
  children: readonly NavChild[];
  onClose: () => void;
  t: (key: string) => string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-xl border border-white/[0.08] overflow-hidden"
      style={{
        zIndex: Z.dropdown,
        background: 'rgba(14, 26, 18, 0.97)',
        backdropFilter: 'blur(24px)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
        minWidth: '280px',
      }}
    >
      <div className="p-2">
        {children.map((child) => (
          <Link
            key={child.key}
            href={child.href}
            onClick={onClose}
            className="group flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-white/[0.05] transition-colors duration-150"
          >
            <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors duration-150">
              {t(child.key)}
            </span>
            {child.description && (
              <span className="text-xs text-ink-faint leading-relaxed">
                {t(child.description)}
              </span>
            )}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Header ──────────────────────────────────────────────────────────── */

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

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

  const handleMouseEnter = (key: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(key);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const switchLocale = () =>
    router.replace(pathname, { locale: locale === 'de' ? 'en' : 'de' });

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          scrolled ? 'border-b border-white/[0.06]' : ''
        }`}
        style={{
          zIndex: Z.elevated,
          background: scrolled ? 'rgba(14,26,18,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" className="shrink-0 group">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo.png`}
                alt="Blattwerk e.V."
                width={200}
                height={80}
                className="h-14 lg:h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                style={{ filter: 'drop-shadow(0 0 12px rgba(34,197,94,0.2))' }}
                priority
              />
            </Link>

            {/* Desktop Nav — centered */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const hasChildren = !!item.children;
                const active = isActive(item.href);

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => hasChildren ? handleMouseEnter(item.key) : setOpenMenu(null)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                        active
                          ? 'text-accent'
                          : 'text-ink-muted hover:text-ink hover:bg-white/[0.04]'
                      }`}
                    >
                      {t(item.key)}
                      {hasChildren && (
                        <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${
                          openMenu === item.key ? 'rotate-180' : ''
                        }`} />
                      )}
                      {active && (
                        <span
                          className="absolute bottom-0 left-4 right-4 h-px"
                          style={{ background: 'var(--accent)' }}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {hasChildren && openMenu === item.key && (
                        <MegaMenu
                          children={item.children!}
                          onClose={() => setOpenMenu(null)}
                          t={t}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <SearchDialog />

              <button
                onClick={switchLocale}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ink-faint hover:text-ink-muted border border-[var(--border)] rounded-md transition-colors cursor-pointer"
                aria-label={locale === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
              >
                <Globe className="w-3.5 h-3.5" />
                {locale === 'de' ? 'EN' : 'DE'}
              </button>

              <Link
                href="/mitgliedschaft"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  boxShadow: '0 0 20px rgba(34,197,94,0.2)',
                }}
              >
                {locale === 'de' ? 'Mitglied werden' : 'Join now'}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                aria-label={locale === 'de' ? 'Menü öffnen' : 'Open menu'}
              >
                <span className={`block w-5 h-px bg-ink transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-5 h-px bg-ink transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-px bg-ink transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 lg:hidden flex flex-col overflow-y-auto"
            style={{ zIndex: Z.overlay, background: 'rgba(14,26,18,0.98)', backdropFilter: 'blur(20px)' }}
          >
            {/* Top bar spacer */}
            <div className="h-20 shrink-0" />

            <nav className="flex-1 px-6 py-4">
              {navItems.map((item) => (
                <div key={item.key} className="border-b border-white/[0.06]">
                  <Link
                    href={item.href}
                    className={`block py-4 text-base font-medium transition-colors ${
                      isActive(item.href) ? 'text-accent' : 'text-ink hover:text-accent'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <div className="pb-3 pl-4 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="py-2 text-sm text-ink-muted hover:text-ink transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="px-6 pb-8 flex flex-col gap-4">
              <Link
                href="/mitgliedschaft"
                className="flex items-center justify-center gap-2 py-4 text-sm font-semibold rounded-lg"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  boxShadow: '0 0 20px rgba(34,197,94,0.2)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {locale === 'de' ? 'Mitglied werden' : 'Join now'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={switchLocale}
                className="flex items-center justify-center gap-2 py-3 text-sm text-ink-muted hover:text-ink transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                {locale === 'de' ? 'English' : 'Deutsch'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
