'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Leaf, BookOpen, Command } from 'lucide-react';
import { strains } from '@/data/strains';
import { allArticles } from '@/data/knowledge';
import { Z } from '@/lib/z-index';

interface SearchResult {
  readonly type: 'strain' | 'article';
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
}

const MAX_RESULTS = 8;

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const isDE = locale === 'de';

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  const results = useMemo((): readonly SearchResult[] => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const strainResults: SearchResult[] = strains
      .filter((s) => {
        const desc = isDE ? s.description_de : s.description_en;
        return s.name.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
      })
      .slice(0, MAX_RESULTS)
      .map((s) => ({
        type: 'strain',
        title: s.name,
        subtitle: `${s.type} · THC ${s.cannabinoids.thc}%`,
        href: `/sortendatenbank/${s.slug}`,
      }));

    const articleResults: SearchResult[] = allArticles
      .filter((a) => {
        const title = isDE ? a.title_de : a.title_en;
        const summary = isDE ? a.summary_de : a.summary_en;
        const tags = a.tags.join(' ');
        const searchable = `${title} ${summary} ${tags}`.toLowerCase();
        return q.split(' ').every((word) => searchable.includes(word));
      })
      .slice(0, MAX_RESULTS)
      .map((a) => ({
        type: 'article',
        title: isDE ? a.title_de : a.title_en,
        subtitle: `${a.reading_time} min · ${a.tags.slice(0, 2).join(', ')}`,
        href: `/wissensdatenbank/${a.category}/${a.slug}`,
      }));

    return [...strainResults, ...articleResults].slice(0, MAX_RESULTS);
  }, [query, isDE]);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const onKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      navigate(results[selectedIndex].href);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-ink-faint hover:text-ink-muted border border-[var(--border)] rounded-md transition-colors cursor-pointer"
        aria-label={isDE ? 'Suche öffnen' : 'Open search'}
      >
        <Search className="w-3 h-3" />
        <span className="hidden md:inline">{isDE ? 'Suche' : 'Search'}</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-bg-elevated rounded text-[10px] font-mono">
          <Command className="w-2.5 h-2.5" />K
        </kbd>
      </button>

      {/* Dialog */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0"
              style={{ zIndex: Z.modal, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-[90vw] max-w-lg rounded-xl border border-[var(--border)] overflow-hidden"
              style={{ zIndex: Z.modal + 1, background: 'var(--bg-surface)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
              role="dialog"
              aria-label={isDE ? 'Suche' : 'Search'}
            >
              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
                <Search className="w-4 h-4 text-ink-faint shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                  onKeyDown={onKeyNavigation}
                  placeholder={isDE ? 'Sorten, Artikel durchsuchen...' : 'Search strains, articles...'}
                  className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint outline-none"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="text-ink-faint hover:text-ink transition-colors cursor-pointer"
                  aria-label={isDE ? 'Schließen' : 'Close'}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto">
                {query && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm text-ink-faint">
                    {isDE ? 'Keine Ergebnisse gefunden' : 'No results found'}
                  </div>
                )}

                {results.length > 0 && (
                  <ul className="py-2" role="listbox">
                    {results.map((result, i) => (
                      <li key={`${result.type}-${result.href}`} role="option" aria-selected={i === selectedIndex}>
                        <button
                          onClick={() => navigate(result.href)}
                          onMouseEnter={() => setSelectedIndex(i)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${
                            i === selectedIndex ? 'bg-accent/10' : 'hover:bg-white/[0.03]'
                          }`}
                        >
                          <div className="w-7 h-7 rounded-md bg-bg-elevated flex items-center justify-center shrink-0">
                            {result.type === 'strain'
                              ? <Leaf className="w-3.5 h-3.5 text-accent" />
                              : <BookOpen className="w-3.5 h-3.5 text-gold-theme" />}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-ink truncate">{result.title}</p>
                            <p className="text-xs text-ink-faint truncate">{result.subtitle}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {!query && (
                  <div className="px-4 py-6 text-center text-xs text-ink-faint">
                    {isDE ? 'Tippe um Sorten und Artikel zu finden' : 'Type to find strains and articles'}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2 border-t border-[var(--border)] flex items-center justify-between text-[10px] text-ink-faint">
                <span>↑↓ {isDE ? 'navigieren' : 'navigate'} · ↵ {isDE ? 'öffnen' : 'open'} · esc {isDE ? 'schließen' : 'close'}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
