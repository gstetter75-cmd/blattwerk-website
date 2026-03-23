'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Menu, X, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { staggerContainer, fadeUp, reducedFadeIn } from '@/lib/animations';
import { Z } from '@/lib/z-index';

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
  { key: 'contact', href: '/kontakt' },
] as const;

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-md text-ink-muted hover:text-ink hover:bg-bg-elevated transition-all duration-200 cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const prefersReduced = useReducedMotion();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const switchLocale = () => {
    const newLocale = locale === 'de' ? 'en' : 'de';
    router.replace(pathname, { locale: newLocale });
  };

  const itemVariants = prefersReduced ? reducedFadeIn : fadeUp;
  const containerVariants = prefersReduced ? {} : staggerContainer;

  return (
    <>
      <header
        className={`sticky top-0 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-[var(--border)] shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ zIndex: Z.elevated }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="group flex items-baseline gap-0.5">
              <span className="font-heading text-2xl italic text-ink font-medium tracking-tight">
                Blattwerk
              </span>
              <span className="text-xs text-ink-muted ml-1 font-body not-italic">e.V.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => 'children' in item && setOpenDropdown(item.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm rounded-md transition-all duration-200 flex items-center gap-1 font-medium ${
                      pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-ink-muted hover:text-ink hover:bg-bg-elevated'
                    }`}
                  >
                    {t(item.key)}
                    {'children' in item && (
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    )}
                  </Link>

                  {'children' in item && openDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-bg-surface backdrop-blur-xl rounded-lg border border-[var(--border)] shadow-card py-1.5"
                      style={{ zIndex: Z.dropdown }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-bg-elevated transition-colors"
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: Theme + Language + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <button
                onClick={switchLocale}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm text-ink-muted hover:text-ink border border-[var(--border)] rounded-md hover:bg-bg-elevated transition-all duration-200 cursor-pointer font-medium"
                aria-label="Switch language"
              >
                <Globe className="w-3.5 h-3.5" />
                {locale === 'de' ? 'EN' : 'DE'}
              </button>

              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-bg-elevated rounded-md transition-all cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-bg/95 backdrop-blur-xl"
              style={{ zIndex: Z.overlay }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 32 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-bg-surface border-l border-[var(--border)] overflow-y-auto"
              style={{ zIndex: Z.overlay + 1 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
                <span className="font-heading text-xl italic text-ink">Blattwerk</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink rounded-md hover:bg-bg-elevated transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-4 space-y-1"
              >
                {navItems.map((item) => (
                  <motion.li key={item.key} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                        pathname === item.href
                          ? 'text-accent bg-accent/10'
                          : 'text-ink-muted hover:text-ink hover:bg-bg-elevated'
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
                          className="block pl-8 pr-4 py-2 text-sm text-ink-faint hover:text-ink-muted transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="p-4 border-t border-[var(--border)]">
                <button
                  onClick={switchLocale}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm text-ink-muted hover:text-ink hover:bg-bg-elevated rounded-md transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  {locale === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
