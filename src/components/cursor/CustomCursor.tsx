'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CURSOR } from '@/lib/constants';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, CURSOR.SPRING);
  const ringY = useSpring(mouseY, CURSOR.SPRING);

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
          scale: clicking ? CURSOR.SCALE_CLICK.dot : hovering ? CURSOR.SCALE_HOVER.dot : 1,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ duration: CURSOR.TRANSITION_DURATION }}
        className="fixed w-1.5 h-1.5 rounded-full bg-accent"
      />

      {/* Ring — follows with spring lag */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: clicking ? CURSOR.SCALE_CLICK.ring : hovering ? CURSOR.SCALE_HOVER.ring : 1,
          borderColor: hovering ? 'rgba(34,197,94,0.8)' : 'rgba(34,197,94,0.3)',
          width: hovering ? CURSOR.RING_SIZE_HOVER : CURSOR.RING_SIZE_DEFAULT,
          height: hovering ? CURSOR.RING_SIZE_HOVER : CURSOR.RING_SIZE_DEFAULT,
        }}
        transition={{ duration: 0.2 }}
        className="fixed rounded-full border border-accent/30"
      />
    </div>
  );
}
