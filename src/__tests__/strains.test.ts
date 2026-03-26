import { describe, it, expect } from 'vitest';
import { strains, getStrainBySlug } from '@/data/strains';

describe('Strain Database', () => {
  it('has strains loaded', () => {
    expect(strains.length).toBeGreaterThan(40);
  });

  it('finds strain by slug', () => {
    const strain = getStrainBySlug('ak-47');
    expect(strain).toBeDefined();
    expect(strain?.name).toBe('AK-47');
  });

  it('returns undefined for unknown slug', () => {
    expect(getStrainBySlug('not-a-strain')).toBeUndefined();
  });

  it('every strain has required fields', () => {
    for (const strain of strains) {
      expect(strain.slug).toBeTruthy();
      expect(strain.name).toBeTruthy();
      expect(['indica', 'sativa', 'hybrid']).toContain(strain.type);
      expect(strain.description_de.length).toBeGreaterThan(20);
      expect(strain.description_en.length).toBeGreaterThan(20);
      expect(strain.cannabinoids.thc).toBeGreaterThanOrEqual(0);
      expect(strain.cannabinoids.cbd).toBeGreaterThanOrEqual(0);
      expect(strain.rating).toBeGreaterThanOrEqual(0);
      expect(strain.rating).toBeLessThanOrEqual(5);
    }
  });

  it('all slugs are unique', () => {
    const slugs = strains.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all related_slugs reference existing strains', () => {
    const slugSet = new Set(strains.map((s) => s.slug));
    // Only check strains that have related_slugs (if the type has it)
    for (const strain of strains) {
      if ('related_slugs' in strain) {
        for (const related of (strain as { related_slugs: string[] }).related_slugs) {
          expect(slugSet.has(related)).toBe(true);
        }
      }
    }
  });
});
