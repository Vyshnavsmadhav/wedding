import React from 'react';
import { OrnamentalDivider, LotusIcon } from './Ornaments';
import { weddingData } from '../weddingData';

export default function CelebrationSection() {
  return (
    <section className="section-celebration" id="celebration">
      <div className="section-container">
        
        {/* Couple Profiles Grid: Groom Card & Bride Card */}
        <div className="couple-profiles-vertical">
          {/* Groom Showcase (Details on Top) */}
          <div className="person-beside-showcase">
            <div className="person-photo-frame arrival-item" style={{ '--delay': '0.15s' }}>
              <div className="person-photo-wrapper">
                <img 
                  src="/groom-akshay.webp" 
                  alt="Dr. Vishnu Prakash U.K."
                  className="person-photo-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="person-details-box arrival-item" style={{ '--delay': '0.35s' }}>
              <h2 className="person-name-script">Dr. Vishnu Prakash U.K.</h2>
              <p className="person-family-subtitle">
                S/o Mr. Prakash P. &amp; Mrs. Lakshmi Devi
              </p>
            </div>
          </div>

          <div className="arrival-item" style={{ '--delay': '0.2s' }}>
            <OrnamentalDivider className="my-8" />
          </div>

          {/* Bride Showcase (Details on Left, Photo on Right) */}
          <div className="person-beside-showcase reverse">
            <div className="person-details-box arrival-item" style={{ '--delay': '0.25s' }}>
              <h2 className="person-name-script">Dr. Sreelekha E.M.</h2>
              <p className="person-family-subtitle">
                D/o Sri Velineni Srinivasa Rao &amp; Smt. Velineni Sunitha Rani
              </p>
            </div>

            <div className="person-photo-frame arrival-item" style={{ '--delay': '0.45s' }}>
              <div className="person-photo-wrapper">
                <img 
                  src="/bride-pillar-portrait.webp" 
                  alt="Dr. Sreelekha E.M."
                  className="person-photo-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

