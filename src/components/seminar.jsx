import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const PHOTOS = [
  { src: '/images/seminar/seminar-1.jpg', caption: 'Meerut Investment Summit' },
  { src: '/images/seminar/seminar-2.jpg', caption: 'Meerut Investment Summit' },
  { src: '/images/seminar/seminar-3.jpg', caption: 'Meerut Investment Summit' },
  { src: '/images/seminar/seminar-4.jpg', caption: 'Meerut Investment Summit' },
  { src: '/images/seminar/seminar-5.jpg', caption: 'Meerut Investment Summit' },
  { src: '/images/seminar/seminar-6.jpg', caption: 'Meerut Investment Summit' },
  { src: '/images/seminar/seminar-7.jpg', caption: 'Meerut Investment Summit' },
  { src: '/images/seminar/seminar-8.jpg', caption: 'Meerut Investment Summit' },
];

export default function Seminar() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  return (
    <section className="se-seminar font-body" id="seminar">
      <div className="se-wrap">
        
        <Reveal>
          <p className="se-eyebrow">Event Highlights</p>
          <h2 className="se-title text-[#F6F1E6]">Meerut Investment Summit 2026</h2>
          <p className="se-lead">Suraksha Enclave brought doctors, businessmen and channel partners together in Meerut to discuss the opportunity at Jattari, on the Yamuna Expressway growth corridor.</p>

          <ul className="se-meta">
            <li><small>Date</small><span>20 September 2026</span></li>
            <li><small>City</small><span>Meerut</span></li>
            <li><small>Hosted by</small><span>Suraksha Enclave</span></li>
            <li><small>Attended by</small><span>Doctors, businessmen & channel partners</span></li>
          </ul>
        </Reveal>

        <div className="se-feature">
          <Reveal className="se-story">
            <p>As part of Suraksha Enclave's ongoing outreach across the Yamuna Expressway growth corridor, we hosted an investment summit in Meerut on September 20, 2026...</p>
            <p>The doctors, businessmen and channel partners who attended the summit were walked through the region's infrastructure roadmap under the YEIDA Master Plan 2041...</p>
            <p>Events like this are part of a sustained effort by Suraksha Enclave to build direct, informed relationships with investors...</p>
          </Reveal>

          <Reveal delay={0.2}>
            <figure className="se-hero-img">
              <img src="/images/seminar/seminar-featured.jpg" alt="Attendees at the Meerut Investment Summit 2026" />
              <figcaption>Meerut Investment Summit, 20 September 2026</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <div className="se-gallery-head">
            <h3 className="text-[#F6F1E6]">What was discussed</h3>
            <p>Key themes from the summit.</p>
          </div>
          <ol className="se-points">
            <li>The region's infrastructure roadmap under the YEIDA Master Plan 2041</li>
            <li>Government-approved layout and bank-loan eligibility at Suraksha Enclave</li>
            <li>The investment case for entering a growth corridor early, before prices have moved</li>
            <li>Connectivity: NH-334D frontage, proximity to the Tappal interchange, and direct access to the Yamuna Expressway</li>
          </ol>
        </Reveal>

        <Reveal>
          <div className="se-gallery-head">
            <h3 className="text-[#F6F1E6]">Moments from the seminar</h3>
            <p>Tap any photo to view it full size.</p>
          </div>
          <div className="se-grid">
            {PHOTOS.map((photo, i) => (
              <button 
                key={i} 
                className={`se-item ${i === 0 ? 'se-big' : ''} ${i === 7 ? 'se-wide' : ''}`}
                onClick={() => openLightbox(i)}
              >
                <img src={photo.src} alt={`Seminar photo ${i + 1}`} />
                <span className="se-cap">{photo.caption}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="se-cta">
            <p className="text-[#F6F1E6]">Want to know more about Suraksha Enclave and upcoming events?</p>
            <a className="se-btn" href="#contact">Get in touch <ArrowRight size={18} /></a>
          </div>
        </Reveal>

      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#020610]/95 flex items-center justify-center p-6" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white hover:text-[#C9A24B]" onClick={closeLightbox}>
            <X size={36} />
          </button>
          
          <button className="absolute left-4 md:left-10 text-white hover:text-[#C9A24B]" onClick={prev}>
            <ChevronLeft size={48} />
          </button>
          
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img src={PHOTOS[currentIndex].src} alt="Full view" className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <p className="text-center text-[#F4EFE3] mt-4">{PHOTOS[currentIndex].caption} ({currentIndex + 1} / {PHOTOS.length})</p>
          </div>
          
          <button className="absolute right-4 md:right-10 text-white hover:text-[#C9A24B]" onClick={next}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}