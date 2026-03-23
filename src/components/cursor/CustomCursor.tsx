'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring follows with spring physics (lag effect)
  const springConfig = { stiffness: 120, damping: 14, mass: 0.8 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnterLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovering(true);
      }
    };

    const onLeaveLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onEnterLink);
    window.addEventListener('mouseout', onLeaveLink);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onEnterLink);
      window.removeEventListener('mouseout', onLeaveLink);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block" aria-hidden="true">
      {/* Dot — follows exactly */}
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: clicking ? 0.5 : hovering ? 0 : 1,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
        className="fixed w-1.5 h-1.5 rounded-full bg-accent"
      />

      {/* Ring — follows with spring lag */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: clicking ? 0.8 : hovering ? 1.8 : 1,
          borderColor: hovering ? 'rgba(34,197,94,0.8)' : 'rgba(34,197,94,0.3)',
          width: hovering ? '48px' : '32px',
          height: hovering ? '48px' : '32px',
        }}
        transition={{ duration: 0.2 }}
        className="fixed rounded-full border border-accent/30"
      />
    </div>
  );
}
