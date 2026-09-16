import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { APPROVALS } from '../data/content';
import { fadeUpBlur, stagger, viewportOnce } from '../lib/motion';

export default function Approvals() {
  return (
    <section id="approvals" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/70 to-transparent" aria-hidden />
      <div className="section">
        <SectionHeading
          kicker="Approvals in hand"
          title="Every document in place before you invest."
          intro="The paperwork that protects your purchase has already been done."
        />
        <motion.ul
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {APPROVALS.map(({ icon: Icon, title, text }) => (
            <motion.li key={title} variants={fadeUpBlur}>
              <TiltCard className="h-full" sound>
                <div className="flex h-full flex-col p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/10 text-gold-300">
                    <Icon size={22} strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-6 text-2xl text-ivory">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ivory/60">{text}</p>
                </div>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
