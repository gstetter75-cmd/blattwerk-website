'use client';

import { useEffect, useRef } from 'react';
import { useMouseRef } from '@/hooks/useMouse';

interface Point3D { x: number; y: number; z: number; }

function buildSphere(n: number): Point3D[] {
  const pts: Point3D[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push({ x: r * Math.cos(theta), y, z: r * Math.sin(theta) });
  }
  return pts;
}

/** Rotate a point around Y then X axis */
function rotate(p: Point3D, yaw: number, pitch: number): Point3D {
  // Y-axis rotation (yaw)
  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const rx = p.x * cosY - p.z * sinY;
  const rz = p.x * sinY + p.z * cosY;

  // X-axis rotation (pitch)
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

export function ParticleSphere({ size = 480, count = 350, className = '' }: ParticleSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const angleRef = useRef(0);
  const mouse = useMouseRef();

  // Smoothed mouse tilt (interpolated in animation loop)
  const tiltRef = useRef({ yaw: 0, pitch: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;

    const pts = buildSphere(count);
    const radius = size * 0.41;
    const cx = size / 2;
    const cy = size / 2;

    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size * dpr, size * dpr);

      // Smooth tilt toward mouse position
      const targetYaw = mouse.current.x * 0.6;
      const targetPitch = -mouse.current.y * 0.4;
      tiltRef.current.yaw += (targetYaw - tiltRef.current.yaw) * 0.04;
      tiltRef.current.pitch += (targetPitch - tiltRef.current.pitch) * 0.04;

      const totalYaw = angleRef.current + tiltRef.current.yaw;
      const totalPitch = tiltRef.current.pitch;

      // Project all points with rotation
      const projected = pts.map((p) => {
        const r = rotate(p, totalYaw, totalPitch);
        return {
          sx: cx + r.x * radius,
          sy: cy + r.y * radius,
          depth: (r.z + 1) / 2, // 0=back, 1=front
        };
      });

      // Painters algorithm
      projected.sort((a, b) => a.depth - b.depth);

      for (const { sx, sy, depth } of projected) {
        const dotR = 0.7 + depth * 2.6;
        const alpha = 0.06 + depth * 0.76;
        ctx.beginPath();
        ctx.arc(sx * dpr, sy * dpr, dotR * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
        ctx.fill();
      }

      if (!prefersReduced) {
        angleRef.current += 0.0025;
        rafRef.current = requestAnimationFrame(render);
      }
    }

    render();
    return () => cancelAnimationFrame(rafRef.current);
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
