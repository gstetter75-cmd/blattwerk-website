/**
 * Feature switches shared by the app and build scripts (scripts read features.json).
 *
 * strainDatabase: the strain database is hidden until the board has reviewed its
 * content against the advertising ban (§ 6 KCanG). Data and pages stay in the code;
 * set to true to show it again and remove the /sortendatenbank redirects in public/_redirects.
 */
import features from './features.json';

export const STRAIN_DATABASE_ENABLED: boolean = features.strainDatabase;

export const STRAIN_DATABASE_PATH = '/sortendatenbank';

/** True for links that point into the strain database. */
export function isStrainDatabaseHref(href: string): boolean {
  return href === STRAIN_DATABASE_PATH || href.startsWith(`${STRAIN_DATABASE_PATH}/`);
}

/** Removes nav entries that point to hidden features. Does not mutate the input. */
export function visibleNavItems<T extends { readonly href: string }>(items: readonly T[]): readonly T[] {
  return STRAIN_DATABASE_ENABLED ? items : items.filter((item) => !isStrainDatabaseHref(item.href));
}
