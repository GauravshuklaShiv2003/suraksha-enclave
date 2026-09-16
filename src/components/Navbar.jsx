import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Chevron from './Chevron';
import SoundToggle from './SoundToggle';
import MagneticButton from './MagneticButton';
import { BRAND, NAV_LINKS } from '../data/content';
import { EASE_LUXE } from '../lib/motion';
import { useUISound } from '../hooks/useUISound';

export default function Navbar({ visible }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { playHover } = useUISound();

  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 40));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: EASE_LUXE, delay: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <nav
        className={`mx-auto flex max-w-site items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7 ${
          solid ? 'glass shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]' : 'border border-transparent'
        }`}
        aria-label="Main"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Suraksha Enclave home">
          <Chevron className="h-6 w-8 text-gold-400" />
          <span className="leading-none">
            <span className="block font-display text-lg tracking-[0.14em] text-ivory">SURAKSHA</span>
            <span className="block text-[10px] tracking-[0.45em] text-gold-400">ENCLAVE</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onMouseEnter={playHover}
                className="group relative text-[15px] text-ivory/75 transition-colors hover:text-ivory"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <SoundToggle />
          <MagneticButton href={BRAND.phoneHref} className="hidden !px-5 !py-2.5 md:inline-flex" strength={0.2}>
            <Phone size={15} strokeWidth={1.6} /> Call now
          </MagneticButton>
          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-ivory lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, ease: EASE_LUXE }}
            className="glass mx-auto mt-3 max-w-site rounded-3xl p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-display text-2xl text-ivory/85 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={BRAND.phoneHref} className="mt-4 flex items-center gap-2 px-3 text-gold-300">
              <Phone size={16} /> {BRAND.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
