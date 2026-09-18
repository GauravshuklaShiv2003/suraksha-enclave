import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Volume2, VolumeX } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-[#040A1A]/80 backdrop-blur-md border-b border-[#C9A45C]/15 shadow-2xl' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo Image */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-12 md:h-14 flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Suraksha Enclave" 
                className="h-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(201,164,92,0.3)]"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-[#07122B]/30 backdrop-blur-md px-8 py-3 rounded-full border border-[#C9A45C]/15 shadow-inner">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm tracking-wider uppercase text-[#F6F1E6]/70 hover:text-[#C9A45C] transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons (Call & Menu) */}
          <div className="flex items-center gap-4">
            
            {/* Call Now Button */}
            <a 
              href={BRAND.phoneHref}
              className="hidden sm:flex items-center gap-2.5 bg-[#C9A45C] text-[#040A1A] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#e6cf9c] transition-all duration-300 shadow-lg hover:scale-105"
            >
              <Phone size={16} strokeWidth={2} />
              <span>Call now</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-[#07122B]/60 border border-[#C9A45C]/20 text-[#F6F1E6] hover:text-[#C9A45C] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[80px] z-40 bg-[#040A1A]/95 backdrop-blur-xl border-b border-[#C9A45C]/20 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 text-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-wider text-[#F6F1E6]/80 hover:text-[#C9A45C] py-2 transition-colors font-heading"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href={BRAND.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 bg-[#C9A45C] text-[#040A1A] py-3 rounded-full font-medium text-base shadow-lg"
              >
                <Phone size={18} />
                <span>Call now ({BRAND.phone})</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}