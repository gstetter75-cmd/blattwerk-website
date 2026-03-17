export type StrainType = 'indica' | 'sativa' | 'hybrid';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface TerpeneProfile {
  myrcene: number;
  limonene: number;
  caryophyllene: number;
  pinene: number;
  linalool: number;
  humulene: number;
  terpinolene: number;
  ocimene: number;
}

export interface CannabinoidProfile {
  thc: number;
  cbd: number;
  cbg: number;
  cbc: number;
  thcv: number;
}

export interface EffectProfile {
  creative: number;
  euphoric: number;
  relaxed: number;
  energetic: number;
  focused: number;
  happy: number;
  sleepy: number;
  talkative: number;
  uplifted: number;
  hungry: number;
}

export interface NegativeEffects {
  dry_mouth: number;
  dry_eyes: number;
  paranoia: number;
  dizziness: number;
  anxiety: number;
}

export interface GrowingInfo {
  difficulty: Difficulty;
  flowering_days_min: number;
  flowering_days_max: number;
  yield_indoor: number; // g/m²
  yield_outdoor: number; // g/plant
  indoor: boolean;
  outdoor: boolean;
  height_cm_min: number;
  height_cm_max: number;
  susceptibilities: string[];
}

export interface Strain {
  slug: string;
  name: string;
  type: StrainType;
  description_de: string;
  description_en: string;
  genetics: {
    parent1: string;
    parent2: string;
  };
  cannabinoids: CannabinoidProfile;
  terpenes: TerpeneProfile;
  effects: EffectProfile;
  negatives: NegativeEffects;
  flavors: string[];
  medical: string[];
  growing: GrowingInfo;
  rating: number;
  review_count: number;
}
