import { useCallback, useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { GALLERY } from '../data/content';
import { SPRING_SLIDE } from '../lib/motion';
import { useUISound } from '../hooks/useUISound';

const GAP = 24;

export default function Gallery() {
  const viewportRef = useRef(null);
  const [vw, setVw] = useState(1200);
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const { playSlide, playHover } = useUISound();

  const slideW = vw < 768 ? vw * 0.84 : Math.min(vw * 0.62, 880);
  const offset = (vw - slideW) / 2;
  const targetFor = useCallback((i) => offset - i * (slideW + GAP), [offset, slideW]);

  // Measure the viewport so slides stay centred on any screen
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setVw(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Spring to the active slide whenever index or size changes
  useEffect(() => {
    const controls = animate(x, targetFor(index), SPRING_SLIDE);
    return () => controls.stop();
  }, [index, targetFor, x]);

  const go = useCallback(
    (dir) => {
      const next = Math.max(0, Math.min(GALLERY.length - 1, index + dir));
      if (next === index) return;
      playSlide();
      setIndex(next);
    },
    [index, playSlide]
  );

  const goTo = (i) => {
    if (i === index) return;
    playSlide();
    setIndex(i);
  };

  const onDragEnd = (_, { offset: o, velocity }) => {
    const swipe = o.x + velocity.x * 0.25;
    const threshold = slideW * 0.18;
    if (swipe < -threshold && index < GALLERY.length - 1) go(1);
    else if (swipe > threshold && index > 0) go(-1);
    else animate(x, targetFor(index), SPRING_SLIDE); // snap back
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  const arrowCls =
    'glass flex h-12 w-12 items-center justify-center rounded-full text-gold-200 transition hover:border-gold-400/60 disabled:opacity-30';

  return (
    <section className="py-24 md:py-32" aria-roledescription="carousel" aria-label="Project gallery">
      <div className="mx-auto flex max-w-site flex-wrap items-end justify-between gap-6 px-6 md:px-10">
        <SectionHeading kicker="A walk through" title="Picture the everyday here." />
        <Reveal className="mb-14 flex gap-3 md:mb-20">
          <button type="button" className={arrowCls} onClick={() => go(-1)} onMouseEnter={playHover} disabled={index === 0} aria-label="Previous image">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button type="button" className={arrowCls} onClick={() => go(1)} onMouseEnter={playHover} disabled={index === GALLERY.length - 1} aria-label="Next image">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </Reveal>
      </div>

      <Reveal>
        <div
          ref={viewportRef}
          className="overflow-hidden outline-none"
          tabIndex={0}
          onKeyDown={onKey}
          aria-live="polite"
        >
          <motion.ul
            className="flex cursor-grab touch-pan-y active:cursor-grabbing"
            style={{ x, gap: GAP }}
            drag="x"
            dragMomentum={false}
            dragElastic={0.14}
            dragConstraints={{ left: targetFor(GALLERY.length - 1) - 80, right: targetFor(0) + 80 }}
            onDragEnd={onDragEnd}
          >
            {GALLERY.map((s, i) => {
              const active = i === index;
              return (
                <motion.li
                  key={s.src}
                  className="relative shrink-0 select-none"
                  style={{ width: slideW }}
                  animate={{ scale: active ? 1 : 0.9, opacity: active ? 1 : 0.4 }}
                  transition={SPRING_SLIDE}
                  aria-label={`${i + 1} of ${GALLERY.length}: ${s.title}`}
                  onClick={() => goTo(i)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] border border-gold-500/15">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${s.src}'), linear-gradient(135deg, #132754, #07122B)`,
                      }}
                      role="img"
                      aria-label={s.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                    <motion.div
                      className="absolute bottom-0 left-0 p-6 md:p-10"
                      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
                      transition={{ duration: 0.6, delay: active ? 0.2 : 0 }}
                    >
                      <h3 className="text-3xl text-ivory md:text-4xl">{s.title}</h3>
                      <p className="mt-2 text-ivory/65">{s.caption}</p>
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </Reveal>

      {/* Progress rail */}
      <div className="mx-auto mt-10 flex max-w-site items-center gap-2 px-6 md:px-10" role="tablist">
        {GALLERY.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${s.title}`}
            onClick={() => goTo(i)}
            className="relative h-8 flex-1"
          >
            <span className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
            {i === index && (
              <motion.span
                layoutId="gallery-rail"
                className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-gold-600 to-gold-300"
                transition={SPRING_SLIDE}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
