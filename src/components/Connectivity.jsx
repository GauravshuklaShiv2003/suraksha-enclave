import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Chevron from './Chevron';
import { CONNECTIVITY, MAP_NODES } from '../data/content';
import { EASE_LUXE, viewportOnce } from '../lib/motion';

function SchematicMap() {
  const cx = 55;
  const cy = 50;
  return (
    <div className="glass relative aspect-square w-full overflow-hidden rounded-[28px]">
      {/* grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#E6CF9C 1px, transparent 1px), linear-gradient(90deg, #E6CF9C 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* highway spine */}
        <motion.path
          d="M0 58 C 25 55, 40 52, 55 50 S 85 44, 100 40"
          stroke="#C9A45C"
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 2, ease: EASE_LUXE }}
        />
        {MAP_NODES.map((n, i) => (
          <motion.line
            key={n.label}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="#E6CF9C"
            strokeOpacity="0.35"
            strokeWidth="0.25"
            strokeDasharray="1 1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.12 }}
          />
        ))}
        {[10, 20, 30].map((r, i) => (
          <motion.circle
            key={r}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#C9A45C"
            strokeOpacity="0.14"
            strokeWidth="0.3"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, delay: i * 0.15, ease: EASE_LUXE }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
      </svg>

      {/* nodes */}
      {MAP_NODES.map((n, i) => (
        <motion.div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 1 + i * 0.12 }}
        >
          <span className="mx-auto block h-2 w-2 rounded-full bg-gold-300" />
          <span className="mt-1.5 block whitespace-nowrap text-[11px] text-ivory/70 md:text-xs">{n.label}</span>
        </motion.div>
      ))}

      {/* the enclave */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${cx}%`, top: `${cy}%` }}>
        <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-gold-400/20" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-navy-950 shadow-[0_0_40px_rgba(201,164,92,0.6)]">
          <Chevron className="h-5 w-6" strokeWidth={2.2} />
        </span>
      </div>
      <p className="absolute bottom-4 right-5 text-[11px] text-ivory/40">Schematic, not to scale</p>
    </div>
  );
}

export default function Connectivity() {
  return (
    <section id="location" className="section">
      <SectionHeading
        kicker="Location"
        title="On the Tappal–Aligarh Highway, in the path of growth."
        intro="Airport, expressways and industrial corridors all within the enclave’s reach."
      />
      <div className="grid items-start gap-14 lg:grid-cols-2">
        <div className="space-y-10">
          {CONNECTIVITY.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.08}>
              <h3 className="mb-4 text-2xl text-gold-300">{g.group}</h3>
              <ul className="divide-y divide-white/5 border-y border-white/5">
                {g.items.map(({ icon: Icon, name }) => (
                  <li key={name} className="group flex items-center gap-4 py-3.5 text-ivory/80 transition-colors hover:text-ivory">
                    <Icon size={18} strokeWidth={1.4} className="text-gold-500 transition-transform duration-300 group-hover:scale-110" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="lg:sticky lg:top-28">
          <SchematicMap />
        </Reveal>
      </div>
    </section>
  );
}
