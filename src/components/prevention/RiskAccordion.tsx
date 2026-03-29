'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface RiskTopic {
  readonly title: string;
  readonly text: string;
}

export function RiskAccordion({ topics }: { readonly topics: readonly RiskTopic[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {topics.map((topic, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={topic.title}
            className="rounded-xl border border-[var(--border)] bg-bg-elevated overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-bg-surface"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-base">{topic.title}</span>
              <span
                className="shrink-0 ml-4 text-ink-faint transition-transform"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.25 }}
                className="px-5 pb-5"
              >
                <p className="text-sm leading-relaxed text-ink-muted">{topic.text}</p>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
