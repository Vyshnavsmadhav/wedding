import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LotusIcon, OrnamentalDivider } from './Ornaments';

const galleryPhotos = [
  { id: 1, src: '/gallery-1.webp', title: 'Cherished Moments', alt: 'Couple celebration portrait' },
  { id: 2, src: '/gallery-2.webp', title: 'Togetherness', alt: 'Couple smiling joyfully' },
  { id: 3, src: '/gallery-3.webp', title: 'Eternal Vows', alt: 'Couple traditional elegance' },
  { id: 4, src: '/gallery-4.webp', title: 'Golden Laughter', alt: 'Couple candid moment' },
  { id: 5, src: '/gallery-5.webp', title: 'A Beautiful Journey', alt: 'Couple timeless grace' },
  { id: 6, src: '/gallery-6.webp', title: 'Hand in Hand', alt: 'Couple outdoor memories' },
  { id: 7, src: '/gallery-7.webp', title: 'Pure Joy', alt: 'Couple joyous laughter' },
];

export default function SlidingCardGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation when user is near
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="sliding-window-gallery-section" id="gallery">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="gallery-header-block arrival-item" style={{ '--delay': '0.1s' }}>
          <LotusIcon size={34} color="var(--color-gold)" className="mb-2" />
          <h2 className="gallery-section-title">Cherished Moments</h2>
          <OrnamentalDivider className="my-2" />
          <p className="gallery-section-subtext">
            Capturing the smiles, laughter, and timeless glimpses of our voyage together
          </p>
        </div>

        {/* 3D Sliding Window Card Carousel */}
        <div 
          className="sliding-carousel-container arrival-item"
          style={{ '--delay': '0.2s' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation arrow Left */}
          <button 
            className="carousel-nav-btn prev-btn" 
            onClick={prevSlide}
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards Stage */}
          <div className="sliding-cards-stage">
            {galleryPhotos.map((photo, index) => {
              // Compute circular relative distance (-1: left, 0: center, 1: right, others hidden)
              const count = galleryPhotos.length;
              let diff = (index - currentIndex + count) % count;
              if (diff > count / 2) diff -= count;

              let cardClass = 'sliding-card';
              if (diff === 0) cardClass += ' active-center';
              else if (diff === -1) cardClass += ' preview-left';
              else if (diff === 1) cardClass += ' preview-right';
              else if (diff < -1) cardClass += ' hidden-far-left';
              else cardClass += ' hidden-far-right';

              return (
                <div 
                  key={photo.id} 
                  className={cardClass}
                  onClick={() => {
                    if (diff === -1) prevSlide();
                    if (diff === 1) nextSlide();
                  }}
                >
                  <div className="sliding-card-frame">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="sliding-card-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation arrow Right */}
          <button 
            className="carousel-nav-btn next-btn" 
            onClick={nextSlide}
            aria-label="Next photo"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators arrival-item" style={{ '--delay': '0.3s' }}>
          {galleryPhotos.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
