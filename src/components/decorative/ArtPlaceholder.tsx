import { CannabisLeaf } from './CannabisLeaf';

interface ArtPlaceholderProps {
  seed?: number;
  label?: string;
  className?: string;
}

const gradients = [
  'radial-gradient(ellipse at 30% 40%, rgba(34,197,94,0.18) 0%, rgba(7,13,10,0) 65%), radial-gradient(ellipse at 75% 70%, rgba(245,158,11,0.1) 0%, rgba(7,13,10,0) 55%)',
  'radial-gradient(ellipse at 65% 30%, rgba(34,197,94,0.15) 0%, rgba(7,13,10,0) 60%), radial-gradient(ellipse at 25% 75%, rgba(99,102,241,0.1) 0%, rgba(7,13,10,0) 50%)',
  'radial-gradient(ellipse at 50% 20%, rgba(245,158,11,0.14) 0%, rgba(7,13,10,0) 55%), radial-gradient(ellipse at 50% 80%, rgba(34,197,94,0.1) 0%, rgba(7,13,10,0) 50%)',
  'radial-gradient(ellipse at 80% 50%, rgba(34,197,94,0.16) 0%, rgba(7,13,10,0) 60%), radial-gradient(ellipse at 20% 50%, rgba(245,158,11,0.08) 0%, rgba(7,13,10,0) 55%)',
  'radial-gradient(ellipse at 40% 60%, rgba(99,102,241,0.12) 0%, rgba(7,13,10,0) 55%), radial-gradient(ellipse at 70% 30%, rgba(34,197,94,0.14) 0%, rgba(7,13,10,0) 55%)',
  'radial-gradient(ellipse at 20% 30%, rgba(245,158,11,0.12) 0%, rgba(7,13,10,0) 60%), radial-gradient(ellipse at 80% 70%, rgba(34,197,94,0.16) 0%, rgba(7,13,10,0) 55%)',
];

const rotations = [12, -8, 22, -15, 5, -25];

export function ArtPlaceholder({ seed = 0, label, className }: ArtPlaceholderProps) {
  const gradient = gradients[seed % gradients.length];
  const rotation = rotations[seed % rotations.length];

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className ?? ''}`}
      style={{ background: gradient }}
    >
      {/* Subtle border glow */}
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: 'linear-gradient(135deg, rgba(34,197,94,0.04) 0%, rgba(245,158,11,0.02) 100%)',
        }}
      />

      {/* Decorative cannabis leaf */}
      <CannabisLeaf
        size={120}
        opacity={0.07}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent"
        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` } as React.CSSProperties}
      />

      {/* Small accent circles */}
      <div
        className="absolute top-4 right-6 w-16 h-16 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-4 left-6 w-12 h-12 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)' }}
      />

      {/* Label */}
      {label && (
        <span className="relative text-xs text-ink-faint mt-[60%]">{label}</span>
      )}
    </div>
  );
}
