import { motion } from 'framer-motion';
import Chevron from './Chevron';
import { EASE_LUXE } from '../lib/motion';

/** 1.5s intro: chevrons fade in, a gold line draws, then the curtain lifts. */
export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.9, ease: EASE_LUXE } }}
      role="status"
      aria-label="Loading Suraksha Enclave"
    >
      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, ease: EASE_LUXE }}
        className="flex flex-col items-center"
      >
        <Chevron className="h-9 w-12 text-gold-400" />
        <p className="mt-5 font-display text-2xl tracking-[0.2em] text-ivory md:text-3xl">SURAKSHA</p>
        <p className="mt-1 text-xs tracking-[0.5em] text-gold-400">ENCLAVE</p>
      </motion.div>

      <div className="mt-10 h-px w-56 overflow-hidden bg-white/10">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-gold-700 via-gold-300 to-gold-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>
    </motion.div>
  );
}
