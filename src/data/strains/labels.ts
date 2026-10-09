/**
 * Display helpers for strain pages: locale-aware number formatting and
 * translations for free-text, enum-like data fields.
 *
 * Numbers are formatted by hand instead of via Intl / toLocaleString so that
 * the server (Node ICU data) and the browser always produce identical strings.
 * This keeps client components free of hydration mismatches (React #418) and
 * guarantees German separators even on builds without full ICU data.
 */
import { flavorLabels } from './filters';

export type StrainLang = 'de' | 'en';

type LabelMap = Readonly<Record<string, { readonly de: string; readonly en: string }>>;

const SEPARATORS: Readonly<Record<StrainLang, { group: string; decimal: string }>> = {
  de: { group: '.', decimal: ',' },
  en: { group: ',', decimal: '.' },
};

// German typography puts a (no-break) space before the percent sign: "22 %".
const PERCENT_SUFFIX: Readonly<Record<StrainLang, string>> = {
  de: ' %',
  en: '%',
};

const DEFAULT_MAX_FRACTION_DIGITS = 2;

function groupThousands(digits: string, separator: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

/**
 * Formats a number with fixed German or English separators.
 * With `fractionDigits` the number of decimals is fixed (4.4 → "4,4");
 * without it up to two decimals are shown and trailing zeros dropped
 * (0.5 → "0,5", 22 → "22", 4100 → "4.100").
 */
export function formatNumber(value: number, lang: StrainLang, fractionDigits?: number): string {
  if (!Number.isFinite(value)) return String(value);
  const { group, decimal } = SEPARATORS[lang];
  const fixed = Math.abs(value).toFixed(fractionDigits ?? DEFAULT_MAX_FRACTION_DIGITS);
  const [intPart, rawFraction = ''] = fixed.split('.');
  const fraction = fractionDigits === undefined ? rawFraction.replace(/0+$/, '') : rawFraction;
  const sign = value < 0 && Number(fixed) !== 0 ? '-' : '';
  return `${sign}${groupThousands(intPart, group)}${fraction ? `${decimal}${fraction}` : ''}`;
}

/** Formats a percentage value: "22 %" / "0,5 %" (de), "22%" / "0.5%" (en). */
export function formatPercent(value: number, lang: StrainLang, fractionDigits?: number): string {
  return `${formatNumber(value, lang, fractionDigits)}${PERCENT_SUFFIX[lang]}`;
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function lookupLabel(maps: readonly LabelMap[], key: string, lang: StrainLang): string {
  const normalized = key.trim().toLowerCase();
  const match = maps.find((map) => map[normalized])?.[normalized];
  return match ? match[lang] : capitalize(key.trim());
}

/** Covers every value used in `growing.susceptibilities` plus common extras. */
export const susceptibilityLabels: LabelMap = {
  mold: { de: 'Schimmel', en: 'Mold' },
  'bud rot': { de: 'Knospenfäule', en: 'Bud rot' },
  botrytis: { de: 'Grauschimmel (Botrytis)', en: 'Botrytis' },
  mildew: { de: 'Mehltau', en: 'Mildew' },
  'powdery mildew': { de: 'Echter Mehltau', en: 'Powdery mildew' },
  'root rot': { de: 'Wurzelfäule', en: 'Root rot' },
  pests: { de: 'Schädlinge', en: 'Pests' },
  'spider mites': { de: 'Spinnmilben', en: 'Spider mites' },
  humidity: { de: 'Hohe Luftfeuchtigkeit', en: 'High humidity' },
  cold: { de: 'Kälte', en: 'Cold' },
  'cold snaps': { de: 'Kälteeinbrüche', en: 'Cold snaps' },
  heat: { de: 'Hitze', en: 'Heat' },
  stretching: { de: 'Starke Streckung', en: 'Stretching' },
  'nutrient sensitivity': { de: 'Nährstoffempfindlichkeit', en: 'Nutrient sensitivity' },
  'odor control': { de: 'Starker Geruch', en: 'Odor control' },
  'heavy branches': { de: 'Schwere Äste', en: 'Heavy branches' },
  'branch breakage': { de: 'Astbruch', en: 'Branch breakage' },
};

// Flavor keys used in the strain data that are missing from `flavorLabels`.
const supplementalFlavorLabels: LabelMap = {
  banana: { de: 'Banane', en: 'Banana' },
  cake: { de: 'Kuchen', en: 'Cake' },
  cookie: { de: 'Keks', en: 'Cookie' },
  cream: { de: 'Sahne', en: 'Cream' },
  creamy: { de: 'Cremig', en: 'Creamy' },
  dough: { de: 'Teig', en: 'Dough' },
  fruity: { de: 'Fruchtig', en: 'Fruity' },
  fuel: { de: 'Benzin', en: 'Fuel' },
  garlic: { de: 'Knoblauch', en: 'Garlic' },
  gas: { de: 'Gas', en: 'Gas' },
  grapefruit: { de: 'Grapefruit', en: 'Grapefruit' },
  hash: { de: 'Haschisch', en: 'Hash' },
  incense: { de: 'Weihrauch', en: 'Incense' },
  lime: { de: 'Limette', en: 'Lime' },
  menthol: { de: 'Menthol', en: 'Menthol' },
  musky: { de: 'Moschus', en: 'Musky' },
  orange: { de: 'Orange', en: 'Orange' },
  papaya: { de: 'Papaya', en: 'Papaya' },
  sage: { de: 'Salbei', en: 'Sage' },
  sandalwood: { de: 'Sandelholz', en: 'Sandalwood' },
  skunky: { de: 'Skunk', en: 'Skunky' },
  watermelon: { de: 'Wassermelone', en: 'Watermelon' },
  wine: { de: 'Wein', en: 'Wine' },
};

export function getSusceptibilityLabel(key: string, lang: StrainLang): string {
  return lookupLabel([susceptibilityLabels], key, lang);
}

export function getFlavorLabel(key: string, lang: StrainLang): string {
  return lookupLabel([flavorLabels, supplementalFlavorLabels], key, lang);
}
