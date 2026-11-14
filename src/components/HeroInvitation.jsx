import React from 'react';
import FloatingBotanicals from './FloatingBotanicals';
import { LotusIcon } from './Ornaments';

export default function HeroInvitation() {
  return (
    <section className="invitation-hero-section" id="invitation">
      {/* Outer master card framing */}
      <div className="invitation-card-outer">
        {/* Subtle, continuous floating leaves and petals layer exclusively in hero card */}
        <FloatingBotanicals />

        {/* Hero Content Statement */}
        <div className="hero-statement-container">
          <div className="hero-statement-lotus arrival-item" style={{ '--delay': '0.1s' }}>
            <LotusIcon size={34} color="var(--color-gold)" />
          </div>
          <p className="hero-statement-subtitle arrival-item" style={{ '--delay': '0.2s' }}>
            Inviting you all
          </p>
          
          {/* Underlined Date Detail Block */}
          <div className="hero-date-detail arrival-item" style={{ '--delay': '0.35s' }}>
            <span className="hero-date-numbers">2026.12.13</span>
            <span className="hero-date-day">(Sun)</span>
          </div>

          {/* Main Visual & Event Details Row */}
          <div className="hero-main-row">
            {/* Overlapping 3:4 Aspect Ratio Image Placeholders */}
            <div className="hero-photos-composition">
              {/* Primary / Main 3:4 Image Frame (Couple Seated Together Portrait) */}
              <div className="photo-placeholder-frame primary-frame arrival-item" style={{ '--delay': '0.45s' }}>
                <div className="photo-inner-wrapper">
                  <img 
                    src="/hero-couple-seated-portrait.webp" 
                    alt="Couple Traditional Wedding Seated Portrait"
                    className="photo-placeholder-img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Overlapping Secondary 3:4 Image Frame (Holding Hands) */}
              <div className="photo-placeholder-frame secondary-frame arrival-item" style={{ '--delay': '0.6s' }}>
                <div className="photo-inner-wrapper">
                  <img 
                    src="/hero-holding-hands.webp" 
                    alt="Holding Hands with Traditional Gold Jewellery & Kasavu Attire"
                    className="photo-placeholder-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Event Ceremony & Reception Details (Beside Pictures) */}
            <div className="hero-event-details-box arrival-item" style={{ '--delay': '0.5s' }}>
              <div className="event-details-flourish">
                <LotusIcon size={26} color="var(--color-gold)" />
              </div>
              <p className="event-detail-line solemnized-line">
                Marriage will be solemnized on Sunday 13th December 2026
              </p>
              <p className="event-detail-line muhurtham-line">
                Muhurtham between 8.00 am to 9.00 am
              </p>
              <p className="event-detail-line thalikettu-line">
                Thalikettu at Kuttippuram Nottanalukkal Bhagavathy Temple
              </p>
              <p className="event-detail-line reception-line">
                Function and Lunch thereafter at Olive Convention Center,
                <span className="block-location">Moodal- Kuttippuram</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

