import { MapPin, Phone, Globe } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import Chevron from './Chevron';
import { BRAND, NAV_LINKS } from '../data/content';
import { useUISound } from '../hooks/useUISound';

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { playHover } = useUISound();
  const contacts = [
    { icon: Phone, label: BRAND.phone, href: BRAND.phoneHref },
    { icon: Globe, label: BRAND.website, href: BRAND.websiteHref },
    { icon: InstagramIcon, label: BRAND.instagram, href: BRAND.instagramHref },
    { icon: MapPin, label: BRAND.address, href: BRAND.mapsHref },
  ];

  return (
    <footer id="contact" className="relative border-t border-gold-500/10 bg-navy-950">
      <div className="section pb-12">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              kicker="Visit us"
              title="See the enclave for yourself."
              intro="Call to schedule a guided site visit, or drop by our Noida office."
            />
            <Reveal delay={0.2} className="flex flex-wrap gap-4">
              <MagneticButton href={BRAND.phoneHref}>
                <Phone size={16} strokeWidth={1.6} /> Call {BRAND.phone}
              </MagneticButton>
              <MagneticButton href={BRAND.websiteHref} variant="outline">
                Visit website
              </MagneticButton>
            </Reveal>
          </div>

          <Reveal delay={0.1} as="ul" className="glass self-start rounded-3xl p-3">
            {contacts.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onMouseEnter={playHover}
                  className="flex items-start gap-4 rounded-2xl p-4 text-ivory/80 transition-colors hover:bg-white/[0.04] hover:text-ivory"
                >
                  <Icon width={18} height={18} size={18} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold-400" />
                  <span className="leading-relaxed">{label}</span>
                </a>
              </li>
            ))}
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-white/5 pt-10 md:flex-row md:items-center">
          <a href="#top" className="flex items-center gap-3">
            <Chevron className="h-6 w-8 text-gold-400" />
            <span className="font-display text-lg tracking-[0.14em]">SURAKSHA ENCLAVE</span>
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6 text-sm text-ivory/50">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-ivory/35">
          © {new Date().getFullYear()} Suraksha Enclave. Images are artistic impressions. Returns and neighbouring prices
          are indicative market estimates, not guarantees. Please verify approvals and documents before purchase.
        </p>
      </div>
    </footer>
  );
}
