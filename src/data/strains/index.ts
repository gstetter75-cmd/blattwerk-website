import { strainsAG } from './strains-a-g';
import { strainsHO } from './strains-h-o';
import { strainsPZ } from './strains-p-z';

export type {
  Strain,
  StrainType,
  Difficulty,
  TerpeneProfile,
  CannabinoidProfile,
  EffectProfile,
  NegativeEffects,
  GrowingInfo,
} from './types';

export { effectLabels, negativeLabels, flavorLabels, medicalLabels, terpeneLabels, thcRanges } from './filters';

export const strains = [...strainsAG, ...strainsHO, ...strainsPZ];

export function getStrainBySlug(slug: string) {
  return strains.find((s) => s.slug === slug);
}

export function getStrainsByType(type: 'indica' | 'sativa' | 'hybrid') {
  return strains.filter((s) => s.type === type);
}

export function searchStrains(query: string) {
  const lower = query.toLowerCase();
  return strains.filter(
    (s) =>
      s.name.toLowerCase().includes(lower) ||
      s.description_de.toLowerCase().includes(lower) ||
      s.description_en.toLowerCase().includes(lower) ||
      s.flavors.some((f) => f.toLowerCase().includes(lower)) ||
      s.medical.some((m) => m.toLowerCase().includes(lower))
  );
}
