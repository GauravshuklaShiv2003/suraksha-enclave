import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { SoundProvider } from './hooks/useUISound';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Approvals from './components/Approvals';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Connectivity from './components/Connectivity';
import GrowthDrivers from './components/GrowthDrivers';
import Investment from './components/Investment';
import Footer from './components/Footer';

const PRELOAD_MS = 1500;

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    if (!loading) return undefined;
    const t = setTimeout(() => setLoading(false), PRELOAD_MS);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <SoundProvider>
      {/* reducedMotion="user" honours the visitor's OS "reduce motion" setting */}
      <MotionConfig reducedMotion="user">
        <div className="grain">
          <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>
          <Navbar visible={!loading} />
          <main>
            <Hero start={!loading} />
            <About />
            <Approvals />
            <Amenities />
            <Gallery />
            <Connectivity />
            <GrowthDrivers />
            <Investment />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </SoundProvider>
  );
}
