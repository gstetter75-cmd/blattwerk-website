/**
 * Shared constants — replaces magic numbers throughout the codebase.
 */

/* ── ParticleSphere ───────────────────────────────────────────────────── */

export const SPHERE = {
  /** Radius relative to canvas size */
  RADIUS_RATIO: 0.41,
  /** Auto-rotation speed (radians per frame) */
  ROTATION_SPEED: 0.0025,
  /** How much the mouse X position tilts the sphere */
  MOUSE_TILT_X: 0.6,
  /** How much the mouse Y position tilts the sphere (inverted) */
  MOUSE_TILT_Y: 0.4,
  /** Interpolation factor for smooth tilt following */
  TILT_LERP: 0.04,
  /** Minimum dot radius (back of sphere) */
  DOT_RADIUS_MIN: 0.7,
  /** Dot radius range (front adds this much) */
  DOT_RADIUS_RANGE: 2.6,
  /** Minimum alpha (back) */
  ALPHA_MIN: 0.06,
  /** Alpha range (front adds this much) */
  ALPHA_RANGE: 0.76,
  /** Maximum device pixel ratio to use */
  MAX_DPR: 2,
} as const;

/* ── CustomCursor ─────────────────────────────────────────────────────── */

export const CURSOR = {
  SPRING: { stiffness: 120, damping: 14, mass: 0.8 },
  SCALE_CLICK: { dot: 0.5, ring: 0.8 },
  SCALE_HOVER: { dot: 0, ring: 1.8 },
  RING_SIZE_DEFAULT: '32px',
  RING_SIZE_HOVER: '48px',
  TRANSITION_DURATION: 0.12,
} as const;

/* ── Animations ───────────────────────────────────────────────────────── */

export const ANIMATION = {
  EASE_OUT_QUART: [0.25, 0.46, 0.45, 0.94] as readonly number[],
  FADE_UP_Y: 24,
  SLIDE_IN_X: 32,
  STAGGER_DELAY: 0.08,
  STAGGER_INITIAL: 0.1,
} as const;

/* ── Header ───────────────────────────────────────────────────────────── */

export const HEADER = {
  SCROLL_THRESHOLD: 40,
  BG_SCROLLED: 'rgba(14,26,18,0.92)',
  BACKDROP_BLUR: 'blur(20px)',
} as const;

/* ── Rate Limiting (Contact Form) ─────────────────────────────────────── */

export const RATE_LIMIT = {
  /** Minimum seconds between form submissions */
  COOLDOWN_SECONDS: 60,
  /** LocalStorage key */
  STORAGE_KEY: 'bw_contact_last_submit',
} as const;

/* ── Contact ────────────────────────────────────────────────────────── */

export const CONTACT = {
  EMAIL: 'info@blattwerk.dev',
  PHONE: '+49 15233539841',
  PHONE_HREF: 'tel:+4915233539841',
  ADDRESS: 'Wetzellplatz 2, 31137 Hildesheim',
} as const;
