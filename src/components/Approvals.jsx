import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { stagger, fadeUpBlur } from '../lib/motion';

const APPROVALS_DATA = [
  {
    title: "YEIDA NOC",
    desc: "No Objection Certificate from the Yamuna Expressway Industrial Development Authority.",
    img: "/images/77008.jpg"
  },
  {
    title: "ADA NOC",
    desc: "No Objection Certificate from the Aligarh Development Authority.",
    img: "/images/77011.jpg"
  },
  {
    title: "Section 80 CLU",
    desc: "Change of Land Use approved under Section 80 of the U.P. Revenue Code.",
    img: "/images/77017.jpg"
  },
  {
    title: "Approved layout",
    desc: "Layout plan approved by the competent authority.",
    img: "/images/77014.jpg"
  }
];

export default function Approvals() {
  return (
    <section id="approvals" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-site px-6 md:px-10 max-w-7xl">
        
        {/* Section Headers */}
        <Reveal>
          <h2 className="font-heading text-4xl md:text-5xl text-ivory mb-4">
            Every document in place<br/>before you invest.
          </h2>
          <p className="text-lg text-ivory/70 mb-12 max-w-2xl">
            The paperwork that protects your purchase has already been done.
          </p>
        </Reveal>

        {/* Cards Grid */}
        <motion.div 
          variants={stagger(0.1, 0.2)}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-10%" }} 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {APPROVALS_DATA.map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUpBlur}
              className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-navy-900/60 transition-colors border-t border-t-gold-500/30"
            >
              <div className="h-12 w-12 overflow-hidden rounded bg-white flex items-center justify-center p-1 shrink-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="h-full w-full object-contain mix-blend-multiply" 
                />
              </div>
              
              <div>
                <h3 className="font-heading text-xl text-gold-300 mb-2">{item.title}</h3>
                <p className="text-sm text-ivory/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}