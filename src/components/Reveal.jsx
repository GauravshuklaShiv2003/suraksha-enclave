import { motion } from 'framer-motion';
import { fadeUpBlur, viewportOnce } from '../lib/motion';

/** Wrap anything to fade-up + blur-to-focus when it scrolls into view. */
export default function Reveal({ children, as = 'div', delay = 0, className = '', variants = fadeUpBlur }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Comp>
  );
}
