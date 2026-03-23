interface DotGridProps {
  className?: string;
  opacity?: number;
  spacing?: number;
  dotSize?: number;
  color?: string;
}

export function DotGrid({
  className,
  opacity = 0.04,
  spacing = 24,
  dotSize = 1,
  color = '#22c55e',
}: DotGridProps) {
  const id = `dot-pattern-${spacing}-${dotSize}`;
  return (
    <svg
      className={className}
      aria-hidden="true"
      style={{ opacity, pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={id} x="0" y="0" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
          <circle cx={dotSize} cy={dotSize} r={dotSize} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
