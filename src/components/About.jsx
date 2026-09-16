import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';
import { ABOUT } from '../data/content';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" ref={ref} className="section">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading kicker="The idea behind the enclave" title={ABOUT.title} />
          {ABOUT.body.map((p, i) => (
            <Reveal as="p" key={i} delay={0.1 * i} className="mb-5 max-w-[62ch] text-lg leading-relaxed text-ivory/70">
              {p}
            </Reveal>
          ))}

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {ABOUT.pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.15 * i} className="border-t border-gold-500/25 pt-5">
                <h3 className="text-2xl text-gold-300">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="absolute -inset-4 rounded-[32px] border border-gold-500/20" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <motion.div
              style={{
                y: imgY,
                backgroundImage:
                  "url('/images/about.jpg'), linear-gradient(160deg, #132754 0%, #07122B 70%)",
              }}
              className="absolute -inset-[10%] bg-cover bg-center"
              role="img"
              aria-label="Tree-lined avenue inside Suraksha Enclave"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          </div>
          <div className="glass absolute -bottom-8 -left-4 rounded-2xl px-7 py-5 md:-left-10">
            <p className="font-display text-5xl text-gold">
              <CountUp to={14} />
            </p>
            <p className="text-sm text-ivory/60">acres, fully planned</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
