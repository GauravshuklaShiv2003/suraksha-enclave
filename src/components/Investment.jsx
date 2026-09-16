import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import Chevron from './Chevron';
import { INVESTMENT } from '../data/content';
import { EASE_LUXE, viewportOnce } from '../lib/motion';

export default function Investment() {
  return (
    <section className="section">
      <div className="relative overflow-hidden rounded-[36px] border border-gold-500/20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 md:p-16">
        <Chevron
          className="pointer-events-none absolute -right-10 -top-6 h-[420px] w-[520px] text-gold-500/[0.06]"
          strokeWidth={0.6}
        />
        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal className="flex items-center gap-3 text-gold-400">
              <TrendingUp size={20} strokeWidth={1.5} />
              <span className="text-sm tracking-wide">Investment potential</span>
            </Reveal>
            <div className="mt-6 flex items-end gap-5">
              <motion.p
                initial={{ opacity: 0, scale: 0.7, filter: 'blur(20px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={viewportOnce}
                transition={{ duration: 1.4, ease: EASE_LUXE }}
                className="font-display text-[8rem] leading-[0.8] text-gold md:text-[11rem]"
              >
                {INVESTMENT.multiple}
              </motion.p>
              <Reveal delay={0.4} className="pb-3">
                <p className="font-display text-3xl text-ivory">in {INVESTMENT.horizon}*</p>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.3} className="mt-8 max-w-md text-lg leading-relaxed text-ivory/70">
              {INVESTMENT.note}
            </Reveal>
            <Reveal delay={0.45} className="mt-10">
              <MagneticButton href="#contact">Talk to our investment desk</MagneticButton>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="mb-5 text-ivory/60">What land is fetching nearby</p>
            <div className="glass overflow-x-auto rounded-3xl">
              <table className="w-full min-w-[420px] text-left">
                <thead>
                  <tr className="border-b border-gold-500/15 text-sm text-ivory/45">
                    <th className="px-6 py-4 font-normal">Project</th>
                    <th className="px-6 py-4 font-normal">Approx. price</th>
                    <th className="px-6 py-4 font-normal">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {INVESTMENT.comparables.map((c) => (
                    <tr key={c.project} className="border-b border-white/5 last:border-0">
                      <td className="px-6 py-5 font-display text-xl text-ivory">{c.project}</td>
                      <td className="px-6 py-5">
                        <span className="text-gold-300">{c.price}</span>
                        <span className="block text-sm text-ivory/45">for {c.area}</span>
                      </td>
                      <td className="px-6 py-5 text-ivory/70">{c.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-ivory/40">*{INVESTMENT.disclaimer}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
