import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { STRAIN_DATABASE_ENABLED } from '@/lib/features';

// While the strain database is hidden, keep its pages out of search engines.
export const metadata: Metadata = STRAIN_DATABASE_ENABLED ? {} : { robots: { index: false, follow: false } };

export default function StrainDatabaseLayout({ children }: { readonly children: ReactNode }) {
  return children;
}
