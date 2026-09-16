import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useUISound } from '../hooks/useUISound';

/**
 * Glass card with soft 3D tilt and a gold border glow that follows the cursor.
 */
export default function TiltCard({ children, className = '', max = 7, sound = false }) {
  const ref = useRef(null);
  const { playHover } = useUISound();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const borderGlow = useMotionTemplate`radial-gradient(360px circle at ${mx}% ${my}%, rgba(230,207,156,0.9), rgba(201,164,92,0.25) 35%, transparent 60%)`;
  const innerGlow = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, rgba(216,185,122,0.10), transparent 45%)`;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px * 100);
    my.set(py * 100);
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onMouseEnter={sound ? playHover : undefined}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }}
      className={`group relative rounded-[22px] ${className}`}
    >
      {/* 1px ring that lights up under the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: borderGlow,
          padding: 1,
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)',
        }}
      />
      <div className="glass relative h-full overflow-hidden rounded-[22px]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: innerGlow }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </motion.div>
  );
}
