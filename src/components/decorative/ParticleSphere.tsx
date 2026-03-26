'use client';

import { useEffect, useRef } from 'react';
import { useMouseRef } from '@/hooks/useMouse';
import { SPHERE } from '@/lib/constants';

interface Point3D { x: number; y: number; z: number; }

/**
 * Sample points from an SVG path using a hidden canvas.
 * Draws the path, then scatters random points and keeps those inside the fill.
 */
function samplePathPoints(n: number, w: number, h: number): Point3D[] {
  // Cannabis leaf SVG path — 7-fingered leaf
  const path = new Path2D(
    // Center leaflet
    'M 250 30 Q 260 100 270 150 Q 285 180 300 170 Q 280 200 270 230 Q 290 220 310 200 ' +
    'Q 290 250 270 290 Q 260 320 250 350 ' +
    'Q 240 320 230 290 Q 210 250 190 200 Q 210 220 230 230 Q 220 200 200 170 ' +
    'Q 215 180 230 150 Q 240 100 250 30 Z ' +
    // Right inner leaflet
    'M 280 160 Q 320 120 350 100 Q 365 95 370 110 Q 350 130 330 160 ' +
    'Q 360 145 380 140 Q 355 170 330 190 Q 310 200 280 210 Z ' +
    // Left inner leaflet
    'M 220 160 Q 180 120 150 100 Q 135 95 130 110 Q 150 130 170 160 ' +
    'Q 140 145 120 140 Q 145 170 170 190 Q 190 200 220 210 Z ' +
    // Right outer leaflet
    'M 310 190 Q 360 170 400 160 Q 415 158 415 175 Q 395 185 370 200 ' +
    'Q 390 195 405 200 Q 380 215 350 220 Q 330 220 310 215 Z ' +
    // Left outer leaflet
    'M 190 190 Q 140 170 100 160 Q 85 158 85 175 Q 105 185 130 200 ' +
    'Q 110 195 95 200 Q 120 215 150 220 Q 170 220 190 215 Z ' +
    // Right small leaflet
    'M 330 210 Q 370 205 400 210 Q 408 215 402 225 Q 380 225 360 230 Q 345 228 330 220 Z ' +
    // Left small leaflet
    'M 170 210 Q 130 205 100 210 Q 92 215 98 225 Q 120 225 140 230 Q 155 228 170 220 Z ' +
    // Stem
    'M 246 340 L 254 340 L 256 440 Q 253 460 250 470 Q 247 460 244 440 Z'
  );

  const offscreen = document.createElement('canvas');
  offscreen.width = w;
  offscreen.height = h;
  const ctx = offscreen.getContext('2d')!;

  // Scale path to fill canvas
  const scale = Math.min(w, h) / 500;
  ctx.setTransform(scale, 0, 0, scale, (w - 500 * scale) / 2, (h - 500 * scale) / 2);
  ctx.fill(path);

  const imageData = ctx.getImageData(0, 0, w, h).data;
  const pts: Point3D[] = [];
  let attempts = 0;
  const maxAttempts = n * 50;

  while (pts.length < n && attempts < maxAttempts) {
    attempts++;
    const px = Math.random() * w;
    const py = Math.random() * h;
    const idx = (Math.floor(py) * w + Math.floor(px)) * 4;

    if (imageData[idx + 3] > 0) {
      // Normalize to -1..1 range
      const nx = (px / w - 0.5) * 2;
      const ny = (py / h - 0.5) * 2;
      const z = (Math.random() - 0.5) * 0.1;
      pts.push({ x: nx, y: ny, z });
    }
  }

  return pts;
}

/**
 * Sample points along the edges of the path for a glowing outline effect.
 */
function sampleEdgePoints(n: number, w: number, h: number): Point3D[] {
  const path = new Path2D(
    'M 250 30 Q 260 100 270 150 Q 285 180 300 170 Q 280 200 270 230 Q 290 220 310 200 ' +
    'Q 290 250 270 290 Q 260 320 250 350 ' +
    'Q 240 320 230 290 Q 210 250 190 200 Q 210 220 230 230 Q 220 200 200 170 ' +
    'Q 215 180 230 150 Q 240 100 250 30 Z ' +
    'M 280 160 Q 320 120 350 100 Q 365 95 370 110 Q 350 130 330 160 ' +
    'Q 360 145 380 140 Q 355 170 330 190 Q 310 200 280 210 Z ' +
    'M 220 160 Q 180 120 150 100 Q 135 95 130 110 Q 150 130 170 160 ' +
    'Q 140 145 120 140 Q 145 170 170 190 Q 190 200 220 210 Z ' +
    'M 310 190 Q 360 170 400 160 Q 415 158 415 175 Q 395 185 370 200 ' +
    'Q 390 195 405 200 Q 380 215 350 220 Q 330 220 310 215 Z ' +
    'M 190 190 Q 140 170 100 160 Q 85 158 85 175 Q 105 185 130 200 ' +
    'Q 110 195 95 200 Q 120 215 150 220 Q 170 220 190 215 Z ' +
    'M 330 210 Q 370 205 400 210 Q 408 215 402 225 Q 380 225 360 230 Q 345 228 330 220 Z ' +
    'M 170 210 Q 130 205 100 210 Q 92 215 98 225 Q 120 225 140 230 Q 155 228 170 220 Z ' +
    'M 246 340 L 254 340 L 256 440 Q 253 460 250 470 Q 247 460 244 440 Z'
  );

  const offscreen = document.createElement('canvas');
  offscreen.width = w;
  offscreen.height = h;
  const ctx = offscreen.getContext('2d')!;

  const scale = Math.min(w, h) / 500;
  ctx.setTransform(scale, 0, 0, scale, (w - 500 * scale) / 2, (h - 500 * scale) / 2);

  // Draw only the stroke (outline)
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#fff';
  ctx.stroke(path);

  const imageData = ctx.getImageData(0, 0, w, h).data;
  const pts: Point3D[] = [];
  let attempts = 0;

  while (pts.length < n && attempts < n * 80) {
    attempts++;
    const px = Math.random() * w;
    const py = Math.random() * h;
    const idx = (Math.floor(py) * w + Math.floor(px)) * 4;

    if (imageData[idx + 3] > 0) {
      const nx = (px / w - 0.5) * 2;
      const ny = (py / h - 0.5) * 2;
      const z = (Math.random() - 0.5) * 0.08;
      pts.push({ x: nx, y: ny, z });
    }
  }

  return pts;
}

function rotate(p: Point3D, yaw: number, pitch: number): Point3D {
  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const rx = p.x * cosY - p.z * sinY;
  const rz = p.x * sinY + p.z * cosY;
  const cosX = Math.cos(pitch), sinX = Math.sin(pitch);
  const ry = p.y * cosX - rz * sinX;
  const rz2 = p.y * sinX + rz * cosX;
  return { x: rx, y: ry, z: rz2 };
}

interface ParticleSphereProps {
  size?: number;
  count?: number;
  className?: string;
}

export function ParticleSphere({ size = 480, count = 800, className = '' }: ParticleSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const angleRef = useRef(0);
  const visibleRef = useRef(true);
  const mouse = useMouseRef();
  const tiltRef = useRef({ yaw: 0, pitch: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, SPHERE.MAX_DPR);
    canvas.width = size * dpr;
    canvas.height = size * dpr;

    // Sample resolution for hit-testing
    const sampleSize = 500;

    // 60% fill particles (dimmer, smaller) + 40% edge particles (brighter, larger)
    const fillCount = Math.floor(count * 0.6);
    const edgeCount = count - fillCount;
    const fillPts = samplePathPoints(fillCount, sampleSize, sampleSize);
    const edgePts = sampleEdgePoints(edgeCount, sampleSize, sampleSize);

    const allPts = [
      ...fillPts.map(p => ({ ...p, edge: false })),
      ...edgePts.map(p => ({ ...p, edge: true })),
    ];

    const scale = size * 0.45;
    const cx = size / 2;
    const cy = size / 2;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !prefersReduced) {
          rafRef.current = requestAnimationFrame(render);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    function render() {
      if (!ctx || !visibleRef.current) return;
      ctx.clearRect(0, 0, size * dpr, size * dpr);

      const targetYaw = mouse.current.x * 0.2;
      const targetPitch = -mouse.current.y * 0.12;
      tiltRef.current.yaw += (targetYaw - tiltRef.current.yaw) * SPHERE.TILT_LERP;
      tiltRef.current.pitch += (targetPitch - tiltRef.current.pitch) * SPHERE.TILT_LERP;

      const sway = Math.sin(angleRef.current * 0.5) * 0.03;
      const totalYaw = sway + tiltRef.current.yaw;
      const totalPitch = tiltRef.current.pitch * 0.4;

      const projected = allPts.map((p) => {
        const r = rotate(p, totalYaw, totalPitch);
        return {
          sx: cx + r.x * scale,
          sy: cy + r.y * scale,
          depth: (r.z + 1) / 2,
          edge: p.edge,
        };
      });

      projected.sort((a, b) => a.depth - b.depth);

      for (const { sx, sy, depth, edge } of projected) {
        if (edge) {
          // Edge particles: brighter, slightly larger
          const dotR = 0.8 + depth * 1.6;
          const alpha = 0.2 + depth * 0.8;
          ctx.beginPath();
          ctx.arc(sx * dpr, sy * dpr, dotR * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
          ctx.fill();
        } else {
          // Fill particles: dimmer, smaller
          const dotR = 0.5 + depth * 1.2;
          const alpha = 0.05 + depth * 0.35;
          ctx.beginPath();
          ctx.arc(sx * dpr, sy * dpr, dotR * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
          ctx.fill();
        }
      }

      if (!prefersReduced) {
        angleRef.current += SPHERE.ROTATION_SPEED;
        rafRef.current = requestAnimationFrame(render);
      }
    }

    render();
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [size, count, mouse]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}
