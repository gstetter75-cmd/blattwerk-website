'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Globe, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { Z } from '@/lib/z-index';
import { lockBodyScroll } from '@/lib/scroll-lock';
import { BlattWerkLogo } from '@/components/brand/BlattWerkLogo';
import { SearchDialog } from '@/components/search/SearchDialog';
import { ThemeToggle } from '@/components/ThemeToggle';

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
  { key: 'about', href: '/ueber-uns' },
  { key: 'membership', href: '/mitgliedschaft' },
  { key: 'strains', href: '/sortendatenbank' },
  { key: 'knowledge', href: '/wissensdatenbank' },
  {
    key: 'more',
    href: '/kontakt',
    children: [
      { key: 'blog', href: '/blog', description: 'blog_desc' },
      { key: 'events', href: '/events', description: 'events_desc' },
      { key: 'contact', href: '/kontakt', description: 'contact_desc' },
      { key: 'prevention', href: '/suchtpraevention', description: 'prevention_desc' },
      { key: 'csc_founding', href: '/csc-gruendung', description: 'csc_desc' },
    ],
  },
];

// The full desktop nav only fits from Tailwind's `xl` breakpoint (80rem = 1280px);
// below that the burger menu is used. Keep this query in sync with the `xl:` classes.
const DESKTOP_NAV_QUERY = '(min-width: 80rem)';
const MOBILE_MENU_ID = 'mobile-menu';

const navItemClass = (active: boolean) =>
  `flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
    active ? 'text-accent' : 'text-ink-muted hover:text-ink hover:bg-[var(--glass)]'
  }`;

type AriaCurrent = 'page' | 'true' | undefined;

function DropdownMenu({
  id,
  items,
  onClose,
  t,
  ariaCurrent,
}: {
  id: string;
  items: readonly NavChild[];
  onClose: () => void;
  t: (key: string) => string;
  ariaCurrent: (href: string) => AriaCurrent;
}) {
  return (
    <div
      id={id}
      className="animate-scale-in absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-[var(--border)] bg-bg-elevated shadow-lg overflow-hidden"
      style={{ zIndex: Z.dropdown }}
    >
      <ul className="p-2">
        {items.map((child) => (
          <li key={child.key}>
            <Link
              href={child.href}
              onClick={onClose}
              aria-current={ariaCurrent(child.href)}
              className="group flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-bg-surface transition-colors duration-150"
            >
              <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                {t(child.key)}
              </span>
              {child.description && (
                <span className="text-xs text-ink-faint leading-relaxed">
                  {t(child.description)}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const isDE = locale === 'de';
  const pathname = usePathname();
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close all menus on navigation (state adjusted during render instead of in an effect).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timeoutRef = closeTimeout;
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const releaseScrollLock = lockBodyScroll();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    // The overlay is hidden from `xl` up — close it so the body scroll lock is released.
    const desktopQuery = window.matchMedia(DESKTOP_NAV_QUERY);
    const onBreakpointChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    desktopQuery.addEventListener('change', onBreakpointChange);
    return () => {
      releaseScrollLock();
      window.removeEventListener('keydown', onKeyDown);
      desktopQuery.removeEventListener('change', onBreakpointChange);
    };
  }, [mobileOpen]);

  // Close the desktop dropdown on clicks/taps outside the nav.
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [openMenu]);

  const handleMouseEnter = (key: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(key);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Escape') return;
    setOpenMenu(null);
    e.currentTarget.querySelector('button')?.focus();
  };

  // Close when keyboard focus leaves the dropdown. A null target (e.g. Safari
  // does not focus clicked links) is left to the outside-click handler.
  const handleMenuBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget;
    if (next instanceof Node && !e.currentTarget.contains(next)) setOpenMenu(null);
  };

  const switchLocale = () =>
    router.replace(pathname, { locale: isDE ? 'en' : 'de' });

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const ariaCurrent = (href: string): AriaCurrent => {
    if (pathname === href || pathname === href + '/') return 'page';
    return isActive(href) ? 'true' : undefined;
  };

  const mainNavLabel = isDE ? 'Hauptnavigation' : 'Main navigation';
  const ctaLabel = isDE ? 'Mitgliedschaft' : 'Membership';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
          scrolled ? 'shadow-sm border-b border-[var(--border)]' : ''
        }`}
        style={{
          // Stay above the mobile overlay while it is open so logo and close button remain visible.
          // z-index is left out of the transition above so it switches instantly.
          zIndex: mobileOpen ? Z.overlay + 1 : Z.elevated,
          background: scrolled ? 'var(--header-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-16 lg:h-20">

            {/* Logo — scaled down on narrow phones so it never collides with the actions */}
            <Link href="/" className="shrink-0">
              <BlattWerkLogo className="brand-logo block h-7 min-[22.5rem]:h-8 sm:h-10 lg:h-11 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav ref={navRef} aria-label={mainNavLabel} className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => {
                const children = item.children;
                const isOpen = openMenu === item.key;
                const menuId = `nav-menu-${item.key}`;
                const active = children
                  ? children.some((child) => isActive(child.href))
                  : isActive(item.href);

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => (children ? handleMouseEnter(item.key) : setOpenMenu(null))}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={children ? handleMenuKeyDown : undefined}
                    onBlur={children ? handleMenuBlur : undefined}
                  >
                    {children ? (
                      <button
                        type="button"
                        onClick={() => setOpenMenu(isOpen ? null : item.key)}
                        aria-expanded={isOpen}
                        aria-controls={isOpen ? menuId : undefined}
                        className={`${navItemClass(active)} cursor-pointer`}
                      >
                        {t(item.key)}
                        <ChevronDown className={`w-3.5 h-3.5 opacity-40 transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={ariaCurrent(item.href)}
                        className={navItemClass(active)}
                      >
                        {t(item.key)}
                      </Link>
                    )}

                    {children && isOpen && (
                      <DropdownMenu
                        id={menuId}
                        items={children}
                        onClose={() => setOpenMenu(null)}
                        t={t}
                        ariaCurrent={ariaCurrent}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right actions — the decorative ⌘K hint is dropped on the full desktop row to keep it airy
                (the shortcut itself still works) */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              <div className="flex xl:[&_kbd]:hidden">
                <SearchDialog />
              </div>
              <ThemeToggle />

              <button
                type="button"
                onClick={switchLocale}
                className="hidden sm:flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-medium text-ink-faint hover:text-ink border border-[var(--border)] rounded-lg transition-colors cursor-pointer"
                aria-label={isDE ? 'Switch to English' : 'Auf Deutsch wechseln'}
              >
                <Globe className="w-3.5 h-3.5" />
                {isDE ? 'EN' : 'DE'}
              </button>

              <Link
                href="/mitgliedschaft"
                className="hidden md:inline-flex shrink-0 items-center whitespace-nowrap px-4 py-2.5 text-sm font-semibold text-[var(--on-accent)] rounded-lg transition-opacity duration-200 hover:opacity-90"
                style={{ background: 'var(--accent)' }}
              >
                {ctaLabel}
              </Link>

              {/* Mobile menu button — negative margin optically aligns the icon with the content edge */}
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-expanded={mobileOpen}
                aria-controls={mobileOpen ? MOBILE_MENU_ID : undefined}
                aria-label={
                  mobileOpen
                    ? (isDE ? 'Menü schließen' : 'Close menu')
                    : (isDE ? 'Menü öffnen' : 'Open menu')
                }
                className="xl:hidden -mr-3 w-11 h-11 flex items-center justify-center rounded-lg cursor-pointer text-ink-muted hover:text-ink hover:bg-bg-surface transition-colors"
              >
                {mobileOpen
                  ? <X className="w-5 h-5" />
                  : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu (also used on tablets and small laptops below `xl`) */}
      {mobileOpen && (
          <div
            id={MOBILE_MENU_ID}
            className="animate-fade-in fixed inset-0 xl:hidden flex flex-col bg-bg overflow-y-auto"
            style={{ zIndex: Z.overlay }}
          >
            <div className="h-16 lg:h-20 shrink-0" />

            <div className="flex-1 flex flex-col w-full max-w-6xl mx-auto px-6 lg:px-8">
              <nav aria-label={mainNavLabel} className="flex-1 py-6 w-full sm:max-w-md">
                {navItems.map((item) => (
                  <div key={item.key} className="border-b border-[var(--border)]">
                    {item.children ? (
                      <p className="py-4 text-base font-medium text-ink-faint">
                        {t(item.key)}
                      </p>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={ariaCurrent(item.href)}
                        className={`block py-4 text-base font-medium transition-colors ${
                          isActive(item.href) ? 'text-accent' : 'text-ink hover:text-accent'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(item.key)}
                      </Link>
                    )}
                    {item.children && (
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            aria-current={ariaCurrent(child.href)}
                            className={`py-2 text-sm transition-colors ${
                              isActive(child.href) ? 'text-accent' : 'text-ink-muted hover:text-ink'
                            }`}
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

              <div className="pb-8 flex flex-col gap-4 w-full sm:max-w-md">
                <Link
                  href="/mitgliedschaft"
                  className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[var(--on-accent)] rounded-lg"
                  style={{ background: 'var(--accent)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={switchLocale}
                  className="flex items-center justify-center gap-2 py-3 text-sm text-ink-muted hover:text-ink transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  {isDE ? 'English' : 'Deutsch'}
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
