export const effectLabels = {
  creative: { de: 'Kreativ', en: 'Creative' },
  euphoric: { de: 'Euphorisch', en: 'Euphoric' },
  relaxed: { de: 'Entspannt', en: 'Relaxed' },
  energetic: { de: 'Energetisch', en: 'Energetic' },
  focused: { de: 'Fokussiert', en: 'Focused' },
  happy: { de: 'Glücklich', en: 'Happy' },
  sleepy: { de: 'Schläfrig', en: 'Sleepy' },
  talkative: { de: 'Gesprächig', en: 'Talkative' },
  uplifted: { de: 'Erhebend', en: 'Uplifted' },
  hungry: { de: 'Hungrig', en: 'Hungry' },
} as const;

export const negativeLabels = {
  dry_mouth: { de: 'Mundtrockenheit', en: 'Dry Mouth' },
  dry_eyes: { de: 'Trockene Augen', en: 'Dry Eyes' },
  paranoia: { de: 'Paranoia', en: 'Paranoia' },
  dizziness: { de: 'Schwindel', en: 'Dizziness' },
  anxiety: { de: 'Angst', en: 'Anxiety' },
} as const;

export const flavorLabels: Record<string, { de: string; en: string }> = {
  earthy: { de: 'Erdig', en: 'Earthy' },
  citrus: { de: 'Zitrus', en: 'Citrus' },
  berry: { de: 'Beeren', en: 'Berry' },
  diesel: { de: 'Diesel', en: 'Diesel' },
  sweet: { de: 'Süß', en: 'Sweet' },
  spicy: { de: 'Würzig', en: 'Spicy' },
  pine: { de: 'Kiefer', en: 'Pine' },
  floral: { de: 'Blumig', en: 'Floral' },
  woody: { de: 'Holzig', en: 'Woody' },
  tropical: { de: 'Tropisch', en: 'Tropical' },
  pungent: { de: 'Scharf', en: 'Pungent' },
  cheese: { de: 'Käse', en: 'Cheese' },
  lemon: { de: 'Zitrone', en: 'Lemon' },
  blueberry: { de: 'Blaubeere', en: 'Blueberry' },
  grape: { de: 'Traube', en: 'Grape' },
  vanilla: { de: 'Vanille', en: 'Vanilla' },
  mint: { de: 'Minze', en: 'Mint' },
  lavender: { de: 'Lavendel', en: 'Lavender' },
  strawberry: { de: 'Erdbeere', en: 'Strawberry' },
  pineapple: { de: 'Ananas', en: 'Pineapple' },
  mango: { de: 'Mango', en: 'Mango' },
  cherry: { de: 'Kirsche', en: 'Cherry' },
  nutty: { de: 'Nussig', en: 'Nutty' },
  coffee: { de: 'Kaffee', en: 'Coffee' },
  chocolate: { de: 'Schokolade', en: 'Chocolate' },
  pepper: { de: 'Pfeffer', en: 'Pepper' },
  herbal: { de: 'Kräuter', en: 'Herbal' },
  skunk: { de: 'Skunk', en: 'Skunk' },
  ammonia: { de: 'Ammoniak', en: 'Ammonia' },
  butter: { de: 'Butter', en: 'Butter' },
  candy: { de: 'Bonbon', en: 'Candy' },
};

export const medicalLabels: Record<string, { de: string; en: string }> = {
  stress: { de: 'Stress', en: 'Stress' },
  anxiety: { de: 'Angst', en: 'Anxiety' },
  pain: { de: 'Schmerzen', en: 'Pain' },
  depression: { de: 'Depression', en: 'Depression' },
  insomnia: { de: 'Schlaflosigkeit', en: 'Insomnia' },
  nausea: { de: 'Übelkeit', en: 'Nausea' },
  appetite_loss: { de: 'Appetitlosigkeit', en: 'Appetite Loss' },
  inflammation: { de: 'Entzündung', en: 'Inflammation' },
  muscle_spasm: { de: 'Muskelspasmen', en: 'Muscle Spasms' },
  headache: { de: 'Kopfschmerzen', en: 'Headache' },
  fatigue: { de: 'Erschöpfung', en: 'Fatigue' },
  ptsd: { de: 'PTBS', en: 'PTSD' },
  migraines: { de: 'Migräne', en: 'Migraines' },
  cramps: { de: 'Krämpfe', en: 'Cramps' },
};

export const terpeneLabels = {
  myrcene: { de: 'Myrcen', en: 'Myrcene' },
  limonene: { de: 'Limonen', en: 'Limonene' },
  caryophyllene: { de: 'Caryophyllen', en: 'Caryophyllene' },
  pinene: { de: 'Pinen', en: 'Pinene' },
  linalool: { de: 'Linalool', en: 'Linalool' },
  humulene: { de: 'Humulen', en: 'Humulene' },
  terpinolene: { de: 'Terpinolen', en: 'Terpinolene' },
  ocimene: { de: 'Ocimen', en: 'Ocimene' },
} as const;

export const thcRanges = [
  { key: '0-10', label: { de: '0–10%', en: '0–10%' }, min: 0, max: 10 },
  { key: '10-15', label: { de: '10–15%', en: '10–15%' }, min: 10, max: 15 },
  { key: '15-20', label: { de: '15–20%', en: '15–20%' }, min: 15, max: 20 },
  { key: '20+', label: { de: '20%+', en: '20%+' }, min: 20, max: 100 },
];

// O(1) lookup map — avoids N+1 find() in filter loops
export const thcRangesMap = new Map(thcRanges.map((r) => [r.key, r]));

export const typeConfig = {
  indica: {
    border: 'border-t-indigo-400',
    badge: 'bg-indigo-500/15 text-indigo-300',
    badgeBordered: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30',
    glow: '0 8px 30px rgba(99,102,241,0.2)',
    label: { de: 'Indica', en: 'Indica' },
  },
  sativa: {
    border: 'border-t-amber-400',
    badge: 'bg-amber-500/15 text-amber-300',
    badgeBordered: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    glow: '0 8px 30px rgba(245,158,11,0.2)',
    label: { de: 'Sativa', en: 'Sativa' },
  },
  hybrid: {
    border: 'border-t-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-300',
    badgeBordered: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    glow: '0 8px 30px rgba(52,211,153,0.2)',
    label: { de: 'Hybrid', en: 'Hybrid' },
  },
} as const;

export const difficultyConfig = {
  easy:   { label: { de: 'Einfach',   en: 'Easy' },   badge: 'bg-emerald-500/15 text-emerald-300' },
  medium: { label: { de: 'Mittel',    en: 'Medium' },  badge: 'bg-amber-500/15 text-amber-300' },
  hard:   { label: { de: 'Schwierig', en: 'Hard' },    badge: 'bg-red-500/15 text-red-400' },
} as const;
