import { CSSProperties } from 'react';

interface CannabisLeafProps {
  className?: string;
  size?: number;
  opacity?: number;
  style?: CSSProperties;
}

export function CannabisLeaf({ className, size = 200, opacity = 0.06, style }: CannabisLeafProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 200 240"
      fill="currentColor"
      aria-hidden="true"
      style={{ opacity, ...style }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central leaflet (tallest) */}
      <path d="M100 8 C94 38 80 58 78 80 C76 96 85 108 100 112 C115 108 124 96 122 80 C120 58 106 38 100 8Z" />
      {/* Inner-left leaflet */}
      <path d="M72 28 C64 52 54 64 57 80 C60 94 73 100 86 96 C91 89 88 74 82 54 C78 40 74 32 72 28Z" />
      {/* Inner-right leaflet */}
      <path d="M128 28 C136 52 146 64 143 80 C140 94 127 100 114 96 C109 89 112 74 118 54 C122 40 126 32 128 28Z" />
      {/* Mid-left leaflet */}
      <path d="M46 52 C36 68 30 78 36 91 C41 100 55 102 69 94 C73 87 66 72 55 61 C52 57 48 54 46 52Z" />
      {/* Mid-right leaflet */}
      <path d="M154 52 C164 68 170 78 164 91 C159 100 145 102 131 94 C127 87 134 72 145 61 C148 57 152 54 154 52Z" />
      {/* Outer-left leaflet */}
      <path d="M28 78 C18 87 17 97 25 106 C32 113 47 111 58 103 C56 96 45 88 34 83 C31 81 28 78 28 78Z" />
      {/* Outer-right leaflet */}
      <path d="M172 78 C182 87 183 97 175 106 C168 113 153 111 142 103 C144 96 155 88 166 83 C169 81 172 78 172 78Z" />
      {/* Stem */}
      <path d="M97 110 C97 145 95 182 96 222 C97 228 100 230 104 228 C105 222 103 182 103 110Z" />
    </svg>
  );
}
