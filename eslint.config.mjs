import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Bestehende Komponenten lesen localStorage/matchMedia bewusst im Mount-Effect.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'playwright-report/**', 'test-results/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
