import { motion } from 'framer-motion';
import Reveal from './Reveal';
import Chevron from './Chevron';
import { fadeUpBlur } from '../lib/motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-site px-6 md:px-10 max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content Column */}
        <div>
          <Reveal className="flex items-center gap-4 mb-8">
             <Chevron className="w-5 h-5 text-gold-500" count={2} />
             <span className="text-gold-300 text-sm tracking-widest uppercase">The idea behind the enclave</span>
          </Reveal>
          
          <Reveal>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-ivory mb-8 leading-[1.1]">
              Built on the discipline of service. Now open to every family.
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-ivory/70 text-lg mb-6 leading-relaxed">
              Suraksha Enclave was first conceived for India's uniformed forces, shaped by their discipline and the trust they place in order. That same standard now welcomes civilian homeowners and investors.
            </p>
            <p className="text-ivory/70 text-lg mb-12 leading-relaxed">
              It is a thoughtfully planned gated environment for families who want to build and for investors who want to hold, with clear documentation, planned infrastructure and organised land ownership from day one.
            </p>
          </Reveal>

          {/* Pillars */}
          <Reveal delay={0.2} className="flex gap-8 border-t border-gold-500/20 pt-8">
            {['Discipline', 'Trust', 'Clarity'].map((pillar, i) => (
              <div key={i} className="text-gold-300 font-heading text-xl md:text-2xl">
                {pillar}
              </div>
            ))}
          </Reveal>
        </div>

        {/* Right Image Container */}
        <Reveal delay={0.3} className="relative h-[400px] lg:h-[650px] w-full">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden glass p-2 border border-gold-500/20 shadow-2xl">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-navy-900">
              
              {/* Corrected path reflecting your public/images/ folder structure */}
              <img 
                src="/images/bigmap.jpg" 
                alt="Suraksha Enclave Vision" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
              
              {/* Overlay gradient to blend the image edges with the dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
            
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}