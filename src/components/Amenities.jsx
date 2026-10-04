import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { fadeUpBlur, stagger } from '../lib/motion';

const AMENITIES_WITH_IMAGES = [
  { title: 'Gated & guarded', text: 'Single controlled entry with 24x7 security staff.', img: '/images/gated community.png' },
  { title: 'CCTV surveillance', text: 'Camera coverage across entries, roads and common areas.', img: '/images/cctv entrance.png' },
  { title: 'Underground electricity', text: 'Concealed cabling for safer streets and clean skylines.', img: '/images/electricity.png' },
  { title: 'Street lighting', text: 'Well-lit avenues from dusk to dawn.', img: '/images/street light.jpg' }, // Original naam space ke sath
  { title: 'Sewage & water', text: 'A dedicated sewage treatment plant and water management system.', img: '/images/sewage water.png' },
  { title: 'Wide roads', text: 'Generous carriageways planned for easy movement.', img: '/images/wide roads.png' },
  { title: 'Parks & green space', text: 'Ample open lawns and tree-lined walks.', img: '/images/park.png' },
  { title: 'Temple', text: 'A serene temple space reserved within the enclave.', img: '/images/Golden Temple Courtyard at Sunset.png' }
];

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
        {AMENITIES_WITH_IMAGES.map(({ title, text, img }) => (
          <motion.li
            key={title}
            variants={fadeUpBlur}
          >
            <TiltCard className="h-full w-full" max={7} sound>
              <div className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden p-7 rounded-xl">
                
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${img}')` }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Text Content */}
                <div className="relative z-10 translate-y-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <h3 className="text-2xl text-gold-400">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ivory/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {text}
                  </p>
                </div>

              </div>
            </TiltCard>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}