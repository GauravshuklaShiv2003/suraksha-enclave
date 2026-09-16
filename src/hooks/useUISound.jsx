import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';

/**
 * One shared audio layer for the whole site.
 * Loading the sounds once here (instead of inside every card/button)
 * keeps memory low and lets one toggle mute everything.
 *
 * Files expected in /public:  hover.mp3  and  slide.mp3
 */

const SoundContext = createContext({
  enabled: false,
  toggle: () => {},
  playHover: () => {},
  playSlide: () => {},
});

const STORAGE_KEY = 'se-sound';

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== 'off';
    } catch {
      return true;
    }
  });

  // Browsers block audio until the visitor clicks/taps/presses a key once.
  // We wait for that, so hover ticks never throw autoplay warnings.
  const unlocked = useRef(false);
  const lastHover = useRef(0);

  const [hoverRaw] = useSound('/hover.mp3', {
    volume: 0.16,
    soundEnabled: enabled,
    interrupt: true,
  });
  const [slideRaw] = useSound('/slide.mp3', {
    volume: 0.32,
    soundEnabled: enabled,
    interrupt: true,
  });

  useEffect(() => {
    const unlock = () => {
      unlocked.current = true;
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  const playHover = useCallback(() => {
    if (!unlocked.current) return;
    const now = performance.now();
    if (now - lastHover.current < 90) return; // no machine-gun ticks
    lastHover.current = now;
    // tiny pitch variation so repeated ticks feel organic
    hoverRaw({ playbackRate: 0.95 + Math.random() * 0.1 });
  }, [hoverRaw]);

  const playSlide = useCallback(() => {
    if (!unlocked.current) return;
    slideRaw({ playbackRate: 0.97 + Math.random() * 0.06 });
  }, [slideRaw]);

  const toggle = useCallback(() => {
    unlocked.current = true;
    setEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
      } catch {
        /* storage unavailable: preference just won't persist */
      }
      return next;
    });
  }, []);

  return (
    <SoundContext.Provider value={{ enabled, toggle, playHover, playSlide }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useUISound() {
  return useContext(SoundContext);
}
