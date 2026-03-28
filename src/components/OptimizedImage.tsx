/**
 * OptimizedImage — serves WebP with responsive srcSet, falls back to original.
 * Uses <picture> element for optimal format negotiation.
 *
 * Expects optimized images at: /images/optimized/<name>.webp
 * and responsive variants at: /images/optimized/<name>-640w.webp, <name>-1024w.webp
 */

interface OptimizedImageProps {
  /** Original image path, e.g. "/images/cannabis-plant-veg.jpg" */
  readonly src: string;
  readonly alt: string;
  readonly fill?: boolean;
  readonly width?: number;
  readonly height?: number;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly sizes?: string;
  readonly priority?: boolean;
  readonly loading?: 'lazy' | 'eager';
}

function getOptimizedName(src: string): string {
  // /images/knowledge/foo.jpg → knowledge-foo
  const withoutPrefix = src.replace(/^\/images\//, '');
  const withoutExt = withoutPrefix.replace(/\.\w+$/, '');
  return withoutExt.replace(/\//g, '-');
}

export function OptimizedImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  style,
  sizes = '100vw',
  priority,
  loading,
}: OptimizedImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const name = getOptimizedName(src);
  const base = `${basePath}/images/optimized`;

  const webpSrcSet = [
    `${base}/${name}-640w.webp 640w`,
    `${base}/${name}-1024w.webp 1024w`,
    `${base}/${name}.webp 1920w`,
  ].join(', ');

  const imgProps = {
    alt,
    className,
    style: fill
      ? { ...style, position: 'absolute' as const, inset: 0, width: '100%', height: '100%', objectFit: 'cover' as const }
      : style,
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    sizes,
    loading: priority ? undefined : (loading ?? 'lazy' as const),
    fetchPriority: priority ? ('high' as const) : undefined,
    decoding: 'async' as const,
  };

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img src={`${basePath}${src}`} {...imgProps} />
    </picture>
  );
}
