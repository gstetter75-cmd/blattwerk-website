'use client';

import { useEffect, useRef } from 'react';
import { useMouseRef } from '@/hooks/useMouse';
import { SPHERE } from '@/lib/constants';

interface Point2D { x: number; y: number; }
interface Point3D { x: number; y: number; z: number; }

/**
 * Build a recognizable cannabis leaf from particles.
 * Each leaflet is a narrow, elongated shape with serrated edges.
 */
function buildLeafPoints(n: number): readonly Point2D[] {
  const pts: Point2D[] = [];

  // 7 leaflets: center + 3 pairs, each angled outward
  // [angle, length, maxWidth, curvature]
  const leaflets: Array<[number, number, number, number]> = [
    [0,     0.92, 0.065, 0],        // center — tallest, narrow
    [0.32,  0.78, 0.055, 0.04],     // inner pair
    [-0.32, 0.78, 0.055, -0.04],
    [0.62,  0.55, 0.045, 0.06],     // middle pair
    [-0.62, 0.55, 0.045, -0.06],
    [0.95,  0.34, 0.035, 0.08],     // outer pair (smallest)
    [-0.95, 0.34, 0.035, -0.08],
  ];

  const perLeaflet = Math.floor(n * 0.125);

  for (const [angle, len, maxW, curve] of leaflets) {
    const dir = angle - Math.PI / 2; // rotate so 0 = up

    for (let i = 0; i < perLeaflet; i++) {
      const t = i / (perLeaflet - 1); // 0 = base, 1 = tip

      // Leaflet width profile: narrow at base, widest at ~30%, tapers to point
      const envelope = Math.pow(Math.sin(t * Math.PI), 0.6) * (1 - Math.pow(t, 2.5));
      const w = maxW * Math.max(0, envelope);

      // Serrated edge — sharper teeth
      const teeth = 5 + Math.floor(len * 6);
      const serration = 1 + Math.sin(t * teeth * Math.PI) * 0.15 * (1 - t * 0.8);

      // Point along the leaflet midline with slight curve
      const curveOffset = curve * Math.sin(t * Math.PI);
      const along = t * len;

      // Random position within the leaflet width (edge-weighted for outline look)
      const r = Math.random();
      const edgeBias = r < 0.6 ? (Math.random() > 0.5 ? 1 : -1) * (0.7 + Math.random() * 0.3) : (Math.random() - 0.5) * 2;
      const lateral = edgeBias * w * serration;

      const cos = Math.cos(dir);
      const sin = Math.sin(dir);
      pts.push({
        x: along * cos - (lateral + curveOffset) * sin,
        y: along * sin + (lateral + curveOffset) * cos,
      });
    }

    // Add extra points along the midline (veins)
    const veinPoints = Math.floor(perLeaflet * 0.2);
    const cos = Math.cos(dir);
    const sin = Math.sin(dir);
    for (let i = 0; i < veinPoints; i++) {
      const t = i / (veinPoints - 1);
      const along = t * len;
      const curveOffset = curve * Math.sin(t * Math.PI);
      const jitter = (Math.random() - 0.5) * 0.008;
      pts.push({
        x: along * cos - (jitter + curveOffset) * sin,
        y: along * sin + (jitter + curveOffset) * cos,
      });
    }
  }

  // Stem — straight line going down from center
  const stemCount = Math.floor(n * 0.04);
  for (let i = 0; i < stemCount; i++) {
    const t = i / (stemCount - 1);
    pts.push({
      x: (Math.random() - 0.5) * 0.015,
      y: t * 0.32 + 0.02,
    });
  }

  // Fill to exact count with random points on existing leaflets
  while (pts.length < n) {
    const [angle, len, maxW, curve] = leaflets[Math.floor(Math.random() * leaflets.length)];
    const t = Math.pow(Math.random(), 0.7); // bias toward tips
    const dir = angle - Math.PI / 2;
    const envelope = Math.pow(Math.sin(t * Math.PI), 0.6) * (1 - Math.pow(t, 2.5));
    const w = maxW * Math.max(0, envelope);
    const lateral = (Math.random() - 0.5) * 2 * w;
    const along = t * len;
    const curveOffset = curve * Math.sin(t * Math.PI);
    const cos = Math.cos(dir);
    const sin = Math.sin(dir);
    pts.push({
      x: along * cos - (lateral + curveOffset) * sin,
      y: along * sin + (lateral + curveOffset) * cos,
    });
  }

  return pts;
}

function liftTo3D(pts: readonly Point2D[]): readonly Point3D[] {
  return pts.map(({ x, y }) => {
    const dist = Math.sqrt(x * x + y * y);
    const z = Math.sin(dist * Math.PI * 2) * 0.12 + (Math.random() - 0.5) * 0.05;
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

export function ParticleSphere({ size = 480, count = 600, className = '' }: ParticleSphereProps) {
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
    const scale = size * 0.48;
    const cx = size / 2;
    const cy = size * 0.5;

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

      // Gentle swaying
      const targetYaw = mouse.current.x * 0.25;
      const targetPitch = -mouse.current.y * 0.15;
      tiltRef.current.yaw += (targetYaw - tiltRef.current.yaw) * SPHERE.TILT_LERP;
      tiltRef.current.pitch += (targetPitch - tiltRef.current.pitch) * SPHERE.TILT_LERP;

      const sway = Math.sin(angleRef.current * 0.6) * 0.04;
      const totalYaw = sway + tiltRef.current.yaw;
      const totalPitch = tiltRef.current.pitch * 0.5;

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
        const dotR = 0.6 + depth * 1.8;
        const alpha = 0.08 + depth * 0.65;
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
