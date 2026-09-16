import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useUISound } from '../hooks/useUISound';

const VARIANTS = {
  gold:
    'bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-[length:200%_100%] bg-left text-navy-950 ' +
    'shadow-[0_12px_40px_-12px_rgba(201,164,92,0.65)] hover:bg-right transition-[background-position] duration-700',
  outline: 'border border-gold-500/45 text-gold-200 hover:text-navy-950 transition-colors duration-500',
};

/**
 * Button that leans toward the cursor (magnetic) and plays a soft tick on hover.
 * `gold`: gradient that shifts + a light sheen sweeps across.
 * `outline`: a gold fill sweeps in from the left.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'gold',
  strength = 0.3,
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const { playHover } = useUISound();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, ...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : { type: 'button' };

  return (
    <Tag
      ref={ref}
      {...linkProps}
      {...rest}
      onClick={onClick}
      onMouseEnter={playHover}
      onFocus={playHover}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-[15px] font-normal tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {variant === 'gold' ? (
        <span
          aria-hidden
          className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
        />
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        />
      )}
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </Tag>
  );
}
