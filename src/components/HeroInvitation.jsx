import React from 'react';
import { 
  LotusIcon, 
  CornerFlourish, 
  JasmineGarlandDecoration 
} from './Ornaments';
import FloatingBotanicals from './FloatingBotanicals';
import { weddingData } from '../weddingData';

export default function HeroInvitation() {
  const { couple, dates } = weddingData;

  return (
    <section className="invitation-hero-section" id="invitation">
      {/* Outer master card framing inspired by the reference card */}
      <div className="invitation-card-outer">
        {/* Subtle, continuous floating leaves and petals layer exclusively in hero card */}
        <FloatingBotanicals />

        {/* Four intricate corner flourishes */}
        <CornerFlourish position="top-left" />
        <CornerFlourish position="top-right" />
        <CornerFlourish position="bottom-left" />
        <CornerFlourish position="bottom-right" />

        {/* Natural jasmine foliage garland in top-right */}
        <JasmineGarlandDecoration className="hero-jasmine-accent" />

        {/* Two-column responsive card layout */}
        <div className="invitation-inner-grid">
          
          {/* Left Column: Traditional Kerala Arch Composition */}
          <div className="arch-visual-col">
            <div className="kerala-arch-wrapper">
              {/* SVG defining the architectural cusp arch silhouette with double gold outline */}
              <svg className="arch-clip-svg" viewBox="0 0 400 500" aria-hidden="true">
                <defs>
                  <clipPath id="keralaArchClip" clipPathUnits="userSpaceOnUse">
                    {/* Kerala / Indian architectural arch silhouette */}
                    <path d="
                      M 30,500 
                      L 30,190 
                      C 30,110 90,80 150,55 
                      C 175,45 190,20 200,4 
                      C 210,20 225,45 250,55 
                      C 310,80 370,110 370,190 
                      L 370,500 
                      Z
                    " />
                  </clipPath>
                </defs>
              </svg>

              {/* The Kerala Wedding Visual inside Arch */}
              <div className="arch-photo-container">
                <img 
                  src="/hero-reference.jpg" 
                  alt="Kerala Wedding Backwaters Visual"
                  className="arch-reference-crop"
                  loading="eager"
                />

                {/* Double-line antique gold architectural arch border outline */}
                <svg className="arch-border-svg" viewBox="0 0 400 500" fill="none">
                  {/* Outer Gold Line */}
                  <path 
                    d="
                      M 28,500 
                      L 28,190 
                      C 28,108 88,78 148,53 
                      C 174,43 190,18 200,2 
                      C 210,18 226,43 252,53 
                      C 312,78 372,108 372,190 
                      L 372,500
                    " 
                    stroke="var(--color-gold)" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  {/* Inner Fine Gold Line */}
                  <path 
                    d="
                      M 36,500 
                      L 36,192 
                      C 36,114 94,86 152,62 
                      C 176,52 191,28 200,12 
                      C 209,28 224,52 248,62 
                      C 306,86 364,114 364,192 
                      L 364,500
                    " 
                    stroke="var(--color-gold-light)" 
                    strokeWidth="1.2" 
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Invitation Typography */}
          <div className="typography-col">
            <div className="typo-content-wrapper">
              
              {/* Header Gold Lotus Ornament & Subha Vivaham */}
              <div className="subha-vivaham-badge">
                <LotusIcon size={34} color="var(--color-gold)" />
                <div className="gold-line-tag">
                  <span className="tiny-line" />
                  <span className="tag-text">{couple.subtagline}</span>
                  <span className="tiny-line" />
                </div>
              </div>

              {/* Main Headline: Two souls, one beautiful journey */}
              <h1 className="hero-script-heading">
                Two souls,<br />
                <span className="italic-journey">one beautiful journey.</span>
              </h1>

              {/* Couple's Names in Delicate Italic Serif */}
              <div className="names-ornament-group">
                <h2 className="couple-names">
                  {couple.groom} <span className="ampersand">&amp;</span> {couple.bride}
                </h2>
                
                {/* Antique Gold Divider with Micro Flourish */}
                <div className="names-divider">
                  <svg width="60" height="14" viewBox="0 0 60 14" fill="none">
                    <line x1="0" y1="7" x2="22" y2="7" stroke="var(--color-gold)" strokeWidth="0.8" />
                    <circle cx="30" cy="7" r="3" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
                    <circle cx="30" cy="7" r="1.2" fill="var(--color-gold)" />
                    <line x1="38" y1="7" x2="60" y2="7" stroke="var(--color-gold)" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>

              {/* Wedding Dates: Gregorian & Malayalam Calendar */}
              <div className="wedding-dates-block">
                <span className="date-leaf-motif">
                  <LotusIcon size={20} color="var(--color-gold)" />
                </span>

                <div className="dates-pill-container">
                  <span className="vertical-gold-bracket left" />
                  <div className="dates-inner">
                    <p className="gregorian-date">{dates.gregorian}</p>
                    <p className="malayalam-date">{dates.malayalam}</p>
                  </div>
                  <span className="vertical-gold-bracket right" />
                </div>

                <div className="bottom-subtle-lotus">
                  <LotusIcon size={30} color="var(--color-gold)" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Traditional ornamental lace border pattern along bottom edge */}
        <div className="bottom-ornamental-lace" />
      </div>
    </section>
  );
}

