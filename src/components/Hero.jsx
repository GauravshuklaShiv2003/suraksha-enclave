import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { QUICK_FACTS } from '../data/content';
import { heroZoom, fadeUpBlur, EASE_LUXE } from '../lib/motion';

export default function Hero({ start }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const state = start ? 'visible' : 'hidden';

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden">
      
      {/* Background: cinematic portal video + parallax */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <motion.video
          variants={heroZoom}
          initial="hidden"
          animate={state}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero-portal.mp4"
        />
      </motion.div>

      {/* Light Overlay for video clarity */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-site px-6 pb-16 pt-40 md:px-10 md:pb-24 flex flex-col items-center text-center"
      >
        {/* BIG GOLDEN CENTERED TEXT */}
        <motion.h1
          variants={fadeUpBlur}
          custom={0.4}
          initial="hidden"
          animate={state}
          className="max-w-5xl font-display text-[2.2rem] leading-[1.2] text-[#C9A24B] drop-shadow-lg sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          A tribute to service. A secure future.
        </motion.h1>

        {/* Centered Buttons */}
        <motion.div
          variants={fadeUpBlur}
          custom={0.6}
          initial="hidden"
          animate={state}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <MagneticButton href="#contact">Book a site visit</MagneticButton>
          <MagneticButton href="#about" variant="outline">
            Explore the enclave
          </MagneticButton>
        </motion.div>

        {/* Floating glass fact strip (Kept left aligned internally for neatness) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE_LUXE, delay: 0.9 }}
          className="glass mt-16 grid w-full gap-6 rounded-3xl p-6 text-left sm:grid-cols-3 md:mt-20 md:p-8"
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-300 md:flex z-20"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}