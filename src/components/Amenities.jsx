import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { AMENITIES } from '../data/content';
import { fadeUpBlur, stagger, viewportOnce } from '../lib/motion';

export default function Amenities() {
  return (
    <section id="amenities" className="section">
      <SectionHeading
        kicker="Life inside the gates"
        title="Infrastructure you can see, and some you never have to."
        intro="Security, utilities and open space are planned into the layout, not added later."
      />

      <motion.ul
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {AMENITIES.map(({ icon: Icon, title, text, featured }) => (
          <motion.li
            key={title}
            variants={fadeUpBlur}
            className={featured ? 'sm:col-span-2 lg:col-span-4' : ''}
          >
            <TiltCard className="h-full" max={featured ? 3 : 7} sound>
              {featured ? (
                <div className="relative flex min-h-[260px] flex-col justify-end overflow-hidden p-8 md:p-12">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                    style={{ backgroundImage: "url('/images/club.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
                  <div className="relative max-w-lg">
                    <Icon size={26} strokeWidth={1.3} className="text-gold-300" />
                    <h3 className="mt-5 text-4xl text-gold md:text-5xl">{title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-ivory/70">{text}</p>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col p-7">
                  <Icon size={26} strokeWidth={1.3} className="text-gold-400" />
                  <h3 className="mt-8 text-2xl text-ivory">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ivory/60">{text}</p>
                </div>
              )}
            </TiltCard>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
