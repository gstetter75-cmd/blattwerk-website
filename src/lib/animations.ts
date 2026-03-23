import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit:    { opacity: 0, x: 32, transition: { duration: 0.25 } },
};

export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 0 0px rgba(34,197,94,0)' },
  hover: {
    y: -4,
    boxShadow: '0 8px 30px rgba(34,197,94,0.15)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

// Vereinfachte Varianten für prefers-reduced-motion
export const reducedFadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit:    { opacity: 0, transition: { duration: 0.1 } },
};
