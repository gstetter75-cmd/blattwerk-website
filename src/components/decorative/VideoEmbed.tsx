'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  readonly videoId: string;
  readonly title: string;
  readonly className?: string;
}

/**
 * Privacy-friendly YouTube embed -- loads only on click (no tracking until play).
 * Uses youtube-nocookie.com domain for enhanced privacy.
 */
export function VideoEmbed({ videoId, title, className = '' }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (loaded) {
    return (
      <div className={`relative w-full rounded-xl overflow-hidden ${className}`} style={{ aspectRatio: '16/9' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={`relative w-full rounded-xl overflow-hidden group cursor-pointer ${className}`}
      style={{ aspectRatio: '16/9' }}
      aria-label={`Video abspielen: ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
        style={{ background: 'rgba(0,0,0,0.45)', opacity: 0.7 }}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-accent">
          <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-sm font-body text-white/80 truncate">{title}</p>
      </div>
    </button>
  );
}
