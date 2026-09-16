import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Chevron from './Chevron';
import { BRAND, QUICK_FACTS } from '../data/content';
import { heroZoom, stagger, wordRise, fadeUpBlur, EASE_LUXE } from '../lib/motion';

export default function Hero({ start }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const state = start ? 'visible' : 'hidden';
  const words = BRAND.headline.split(' ');

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background: cinematic slow zoom + parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.div
          variants={heroZoom}
          initial="hidden"
          animate={state}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Fallback gradient shows if hero.jpg is missing
            backgroundImage:
              "url('/images/hero.jpg'), radial-gradient(ellipse at 70% 20%, #1C3569 0%, #07122B 55%, #040A1A 100%)",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/30 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-site px-6 pb-16 pt-40 md:px-10 md:pb-24"
      >
        <motion.div
          variants={fadeUpBlur}
          custom={0.2}
          initial="hidden"
          animate={state}
          className="mb-8 flex items-center gap-4"
        >
          <Chevron className="h-5 w-7 text-gold-400" count={2} />
          <p className="font-display text-lg italic text-gold-300 md:text-xl">{BRAND.tribute}</p>
        </motion.div>

        <motion.h1
          variants={stagger(0.07, 0.35)}
          initial="hidden"
          animate={state}
          className="max-w-5xl text-[2.6rem] leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[5.6rem]"
          aria-label={BRAND.headline}
        >
          {words.map((w, i) => (
            <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span variants={wordRise} className="inline-block" aria-hidden>
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeUpBlur}
          custom={1.2}
          initial="hidden"
          animate={state}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/70 md:text-xl"
        >
          {BRAND.subline} A 14-acre gated enclave on the Tappal–Aligarh Highway, inside the Jewar Airport influence zone.
        </motion.p>

        <motion.div
          variants={fadeUpBlur}
          custom={1.4}
          initial="hidden"
          animate={state}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="#contact">Book a site visit</MagneticButton>
          <MagneticButton href="#about" variant="outline">
            Explore the enclave
          </MagneticButton>
        </motion.div>

        {/* Floating glass fact strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE_LUXE, delay: 1.7 }}
          className="glass mt-16 grid gap-6 rounded-3xl p-6 sm:grid-cols-3 md:mt-20 md:p-8"
        >
          {QUICK_FACTS.map((f, i) => (
            <div key={f.label} className={`flex items-start gap-3 ${i > 0 ? 'sm:border-l sm:border-gold-500/15 sm:pl-6' : ''}`}>
              {i === 1 && <MapPin size={18} className="mt-1.5 shrink-0 text-gold-400" strokeWidth={1.5} />}
              <div>
                <p className="font-display text-2xl text-gold md:text-3xl">{f.text ?? `${f.value}${f.suffix}`}</p>
                <p className="mt-1 text-sm text-ivory/55">{f.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : {}}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-300 md:flex"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
