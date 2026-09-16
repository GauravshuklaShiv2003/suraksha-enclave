import { motion } from 'framer-motion';
import Reveal from './Reveal';
import Chevron from './Chevron';
import { drawLine, viewportOnce } from '../lib/motion';

export default function SectionHeading({ kicker, title, intro, align = 'left' }) {
  const centered = align === 'center';
  return (
    <div className={`mb-14 max-w-3xl md:mb-20 ${centered ? 'mx-auto text-center' : ''}`}>
      {kicker && (
        <Reveal className={`mb-6 flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
          <Chevron className="h-5 w-6 text-gold-500" count={2} />
          <span className="text-sm tracking-wide text-gold-400">{kicker}</span>
          <motion.span
            className="h-px w-16 origin-left bg-gradient-to-r from-gold-500 to-transparent"
            variants={drawLine}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          />
        </Reveal>
      )}
      <Reveal as="h2" delay={0.08} className="text-4xl leading-[1.08] text-ivory md:text-6xl">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.16} className="mt-6 text-lg leading-relaxed text-ivory/65">
          {intro}
        </Reveal>
      )}
    </div>
  );
}
