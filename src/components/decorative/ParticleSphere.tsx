'use client';

import { useEffect, useRef } from 'react';
import { useMouseRef } from '@/hooks/useMouse';
import { SPHERE } from '@/lib/constants';

interface Point2D { x: number; y: number; }

/**
 * Build points along a cannabis leaf silhouette.
 * Uses parametric curves for the 7 serrated leaflets.
 */
function buildLeafPoints(n: number): readonly Point2D[] {
  const pts: Point2D[] = [];

  // Leaflet parameters: angle from center, length, width
  const leaflets = [
    { angle: 0, len: 1.0, w: 0.18 },       // center (longest)
    { angle: 0.38, len: 0.82, w: 0.15 },    // inner pair
    { angle: -0.38, len: 0.82, w: 0.15 },
    { angle: 0.72, len: 0.58, w: 0.12 },    // middle pair
    { angle: -0.72, len: 0.58, w: 0.12 },
    { angle: 1.05, len: 0.36, w: 0.09 },    // outer pair
    { angle: -1.05, len: 0.36, w: 0.09 },
  ];

  const pointsPerLeaflet = Math.floor(n * 0.12);
  const stemPoints = Math.floor(n * 0.04);

  // Generate points along each leaflet
  for (const { angle, len, w } of leaflets) {
    const cos = Math.cos(angle - Math.PI / 2);
    const sin = Math.sin(angle - Math.PI / 2);

    for (let i = 0; i < pointsPerLeaflet; i++) {
      // t goes from 0 (base) to 1 (tip)
      const t = i / (pointsPerLeaflet - 1);

      // Leaflet shape: wide at 0.3, tapering to point
      const widthAtT = w * Math.sin(t * Math.PI) * (1 - t * 0.3);

      // Serrated edge
      const serration = 1 + Math.sin(t * Math.PI * 6) * 0.08 * (1 - t);

      // Random offset within the leaflet width
      const lateral = (Math.random() - 0.5) * 2 * widthAtT * serration;
      const along = t * len;

      // Rotate by leaflet angle
      const px = along * cos - lateral * sin;
      const py = along * sin + lateral * cos;

      pts.push({ x: px, y: py });
    }
  }

  // Stem
  for (let i = 0; i < stemPoints; i++) {
    const t = i / (stemPoints - 1);
    const sx = (Math.random() - 0.5) * 0.03;
    const sy = t * 0.35 + 0.05; // below center, going down
    pts.push({ x: sx, y: sy });
  }

  // Fill remaining points scattered lightly inside the leaf area
  while (pts.length < n) {
    const leaflet = leaflets[Math.floor(Math.random() * leaflets.length)];
    const t = Math.random();
    const cos = Math.cos(leaflet.angle - Math.PI / 2);
    const sin = Math.sin(leaflet.angle - Math.PI / 2);
    const widthAtT = leaflet.w * Math.sin(t * Math.PI) * (1 - t * 0.3);
    const lateral = (Math.random() - 0.5) * 2 * widthAtT * 0.7;
    const along = t * leaflet.len;
    pts.push({
      x: along * cos - lateral * sin,
      y: along * sin + lateral * cos,
    });
  }

  return pts;
}

interface Point3D { x: number; y: number; z: number; }

function liftTo3D(pts: readonly Point2D[]): readonly Point3D[] {
  return pts.map(({ x, y }) => {
    // Give slight z-depth based on distance from center for a subtle 3D feel
    const dist = Math.sqrt(x * x + y * y);
    const z = Math.sin(dist * Math.PI * 1.5) * 0.15 + (Math.random() - 0.5) * 0.08;
    return { x, y, z };
  });
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

export function ParticleSphere({ size = 480, count = 500, className = '' }: ParticleSphereProps) {
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

    const leaf2D = buildLeafPoints(count);
    const pts = liftTo3D(leaf2D);
    const scale = size * 0.42;
    const cx = size / 2;
    const cy = size * 0.48; // slightly above center

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

      // Gentle swaying instead of full rotation
      const targetYaw = mouse.current.x * 0.3;
      const targetPitch = -mouse.current.y * 0.2;
      tiltRef.current.yaw += (targetYaw - tiltRef.current.yaw) * SPHERE.TILT_LERP;
      tiltRef.current.pitch += (targetPitch - tiltRef.current.pitch) * SPHERE.TILT_LERP;

      const sway = Math.sin(angleRef.current * 0.8) * 0.06;
      const totalYaw = sway + tiltRef.current.yaw;
      const totalPitch = tiltRef.current.pitch;

      const projected = pts.map((p) => {
        const r = rotate(p, totalYaw, totalPitch);
        return {
          sx: cx + r.x * scale,
          sy: cy + r.y * scale,
          depth: (r.z + 1) / 2,
        };
      });

      projected.sort((a, b) => a.depth - b.depth);

      for (const { sx, sy, depth } of projected) {
        const dotR = 0.8 + depth * 2.0;
        const alpha = 0.1 + depth * 0.7;
        ctx.beginPath();
        ctx.arc(sx * dpr, sy * dpr, dotR * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
        ctx.fill();
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
