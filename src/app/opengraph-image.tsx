import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BlattWerk e.V. – Cannabis Social Club Hildesheim';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#070d0a',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'serif',
        }}
      >
        {/* Green glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Gold glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Border card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24,
            padding: '60px 80px',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            maxWidth: 900,
            width: '100%',
          }}
        >
          {/* Label */}
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#22c55e',
              marginBottom: 20,
              margin: '0 0 20px 0',
            }}
          >
            Cannabis Social Club · Hildesheim
          </p>

          {/* Title */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 500,
              color: '#f0faf2',
              margin: '0 0 16px 0',
              lineHeight: 1.1,
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            BlattWerk e.V.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 22,
              color: 'rgba(240,250,242,0.55)',
              margin: '0 0 48px 0',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            Gemeinschaft · Aufklärung · Verantwortung
          </p>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 2,
              background: 'linear-gradient(90deg, #22c55e, #86efac)',
              borderRadius: 2,
            }}
          />
        </div>

        {/* Bottom domain */}
        <p
          style={{
            position: 'absolute',
            bottom: 32,
            fontSize: 14,
            color: 'rgba(240,250,242,0.25)',
            letterSpacing: '0.05em',
          }}
        >
          blattwerk-ev.de
        </p>
      </div>
    ),
    { ...size }
  );
}
