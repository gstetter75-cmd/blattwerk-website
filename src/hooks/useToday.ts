'use client';

import { useSyncExternalStore } from 'react';
import { getTodayIsoDate } from '@/data/events';

// Re-check the date whenever the visitor returns to the tab (e.g. after midnight).
function subscribeToDateChanges(onChange: () => void): () => void {
  window.addEventListener('focus', onChange);
  document.addEventListener('visibilitychange', onChange);
  return () => {
    window.removeEventListener('focus', onChange);
    document.removeEventListener('visibilitychange', onChange);
  };
}

/**
 * Hydrates with the build date (matching the static HTML), then switches to the
 * visitor's current date, so past events never appear as upcoming without a rebuild.
 */
export function useToday(buildDate: string): string {
  return useSyncExternalStore(subscribeToDateChanges, getTodayIsoDate, () => buildDate);
}
