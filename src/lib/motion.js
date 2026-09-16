// Central animation language for the whole site.
// Change timings here and every section follows.

export const EASE_LUXE = [0.22, 1, 0.36, 1]; // slow, confident settle
export const EASE_CINEMA = [0.16, 1, 0.3, 1];

// Spring used for carousels, magnetic buttons, tilt.
export const SPRING_SLIDE = { type: 'spring', stiffness: 220, damping: 32, mass: 0.9 };
export const SPRING_SOFT = { type: 'spring', stiffness: 160, damping: 18, mass: 0.5 };

// Section reveal: fade up + blur to focus. Pass `custom={delay}` to offset.
export const fadeUpBlur = {
  hidden: { opacity: 0, y: 48, filter: 'blur(12px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: EASE_LUXE, delay },
  }),
};

// Parent that staggers its children.
export const stagger = (each = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: each, delayChildren } },
});

// Hero headline: each word rises from behind a mask.
export const wordRise = {
  hidden: { y: '115%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_LUXE },
  },
};

// Hero background: slow cinematic push-in.
export const heroZoom = {
  hidden: { scale: 1.28 },
  visible: { scale: 1.02, transition: { duration: 7, ease: EASE_CINEMA } },
};

// Thin gold rule drawing itself.
export const drawLine = {
  hidden: { scaleX: 0 },
  visible: (delay = 0) => ({
    scaleX: 1,
    transition: { duration: 1.2, ease: EASE_LUXE, delay },
  }),
};

export const viewportOnce = { once: true, amount: 0.25 };
