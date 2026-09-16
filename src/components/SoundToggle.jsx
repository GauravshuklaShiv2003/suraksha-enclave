import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUISound } from '../hooks/useUISound';

export default function SoundToggle() {
  const { enabled, toggle } = useUISound();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Mute interface sounds' : 'Turn on interface sounds'}
      className="glass relative flex h-10 w-10 items-center justify-center rounded-full text-gold-300 transition-colors hover:text-gold-200"
    >
      <motion.span key={String(enabled)} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        {enabled ? <Volume2 size={17} strokeWidth={1.5} /> : <VolumeX size={17} strokeWidth={1.5} />}
      </motion.span>
    </button>
  );
}
