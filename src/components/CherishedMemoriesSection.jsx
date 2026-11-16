import React from 'react';
import { LotusIcon, OrnamentalDivider } from './Ornaments';

export default function CherishedMemoriesSection() {
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

        {/* Arch Frame Portrait Showcase */}
        <div className="cherished-frame-container arrival-item" style={{ '--delay': '0.2s' }}>
          <div className="cherished-arch-frame">
            <img 
              src="/cherished-memory-frame.jpg" 
              alt="Dr. Vishnu Prakash U.K. & Dr. Sreelekha E.M. - Cherished Memory" 
              className="cherished-arch-img"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
