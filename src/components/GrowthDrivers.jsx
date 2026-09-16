import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import CountUp from './CountUp';
import { GROWTH_DRIVERS } from '../data/content';
import { fadeUpBlur, stagger, viewportOnce } from '../lib/motion';

export default function GrowthDrivers() {
  return (
    <section id="growth" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/70 to-transparent" aria-hidden />
      <div className="section">
        <SectionHeading
          kicker="Growth drivers"
          title="Thousands of acres of new industry, moving in next door."
          intro="Mega projects around YEIDA and Tappal–Bajna are set to bring jobs, residents and demand for land."
        />
        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {GROWTH_DRIVERS.map(({ icon: Icon, name, size, unit, where }) => (
            <motion.li key={name} variants={fadeUpBlur}>
              <TiltCard className="h-full" sound>
                <div className="flex h-full flex-col p-8">
                  <div className="flex items-start justify-between">
                    <Icon size={26} strokeWidth={1.3} className="text-gold-400" />
                    <span className="text-right text-sm text-ivory/45">{where}</span>
                  </div>
                  <div className="mt-10">
                    {size ? (
                      <p className="font-display text-5xl text-gold md:text-6xl">
                        <CountUp to={size} />
                        <span className="ml-2 font-sans text-base text-ivory/50">{unit}</span>
                      </p>
                    ) : (
                      <p className="font-display text-3xl italic text-gold-300">Multimodal hub</p>
                    )}
                    <h3 className="mt-3 text-2xl text-ivory">{name}</h3>
                  </div>
                </div>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
