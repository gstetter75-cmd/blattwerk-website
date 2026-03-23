import { Star } from 'lucide-react';

export function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const cls = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${cls} ${
            star <= Math.round(rating)
              ? 'text-gold-theme fill-gold-theme'
              : 'text-bg-elevated fill-bg-elevated'
          }`}
        />
      ))}
    </div>
  );
}
