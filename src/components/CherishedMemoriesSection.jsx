import React, { useState, useEffect, useRef } from 'react';
import { LotusIcon, OrnamentalDivider } from './Ornaments';

const PHOTOS = [
  {
    id: 1,
    src: '/cherished-1.webp',
    title: 'Warmth & Togetherness',
    caption: 'Moments filled with quiet laughter and comforting presence'
  },
  {
    id: 2,
    src: '/cherished-2.webp',
    title: 'Heritage & Roots',
    caption: 'Cherishing timeless traditions on the footsteps of home'
  },
  {
    id: 3,
    src: '/cherished-3.webp',
    title: 'Joyful Smiles',
    caption: 'Bright candid happiness captured in everyday memories'
  },
  {
    id: 4,
    src: '/cherished-4.webp',
    title: 'Serene Escapes',
    caption: 'Basking by the water, hand in hand as our story blossoms'
  },
  {
    id: 5,
    src: '/cherished-5.webp',
    title: 'Elegant Harmony',
    caption: 'A graceful journey stepping together into forever'
  }
];

export default function CherishedMemoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const timerRef = useRef(null);

  const resetAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4500);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
    resetAutoplay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    resetAutoplay();
  };

  const handleSelect = (idx) => {
    setCurrentIndex(idx);
    resetAutoplay();
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section className="cherished-memories-section" id="cherished-memories">
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

        {/* Arch Card Carousel */}
        <div className="cherished-carousel-wrapper arrival-item" style={{ '--delay': '0.2s' }}>
          <div 
            className="cherished-arch-card"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* The Golden Arch Window Frame */}
            <div className="cherished-arch-window-outer">
              <div className="cherished-arch-window-inner">
                {PHOTOS.map((photo, idx) => (
                  <div
                    key={photo.id}
                    className={`cherished-slide ${idx === currentIndex ? 'active' : ''}`}
                    aria-hidden={idx !== currentIndex}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className={`cherished-slide-photo photo-item-${photo.id}`}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <button 
              className="cherished-nav-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              &#10094;
            </button>
            <button 
              className="cherished-nav-btn next-btn" 
              onClick={handleNext}
              aria-label="Next photo"
            >
              &#10095;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
