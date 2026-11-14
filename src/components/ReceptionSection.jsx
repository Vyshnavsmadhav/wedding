import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { LotusIcon, OrnamentalDivider } from './Ornaments';

export default function ReceptionSection() {
  return (
    <section className="section-reception" id="reception">
      <div className="section-container">
        
        {/* Reception Announcement Card */}
        <div className="reception-card arrival-item" style={{ '--delay': '0.15s' }}>
          <div className="reception-header-row arrival-item" style={{ '--delay': '0.25s' }}>
            <div className="reception-lotus">
              <LotusIcon size={32} color="var(--color-gold)" />
            </div>
            <span className="reception-eyebrow">Wedding Reception</span>
            <h2 className="reception-title">Evening Celebrations</h2>
            <OrnamentalDivider className="my-3" />
            <p className="reception-subtext">
              We look forward to celebrating this joyful milestone with you
            </p>
          </div>

          {/* Three-Column Highlight Banner matching the snapshot */}
          <div className="reception-triad-banner">
            
            {/* Column 1: Date */}
            <div className="reception-triad-col arrival-item" style={{ '--delay': '0.35s' }}>
              <div className="reception-icon-wrapper">
                <Calendar size={28} className="reception-triad-icon" strokeWidth={1.5} />
              </div>
              <div className="reception-triad-text">
                <span className="reception-intro-word">on Tuesday</span>
                <span className="reception-main-date">15<sup>th</sup></span>
                <span className="reception-month-year">December 2026</span>
                <span className="reception-era-sub">(29th Vrischikam 1202)</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="reception-triad-divider arrival-item" style={{ '--delay': '0.4s' }} aria-hidden="true" />

            {/* Column 2: Venue */}
            <div className="reception-triad-col arrival-item" style={{ '--delay': '0.45s' }}>
              <div className="reception-icon-wrapper">
                <MapPin size={28} className="reception-triad-icon" strokeWidth={1.5} />
              </div>
              <div className="reception-triad-text">
                <span className="reception-venue-title">Shifa</span>
                <span className="reception-venue-name">Convention Center</span>
                <span className="reception-venue-sub">Mannarkkad Road</span>
                <span className="reception-venue-city">Perinthalmanna</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="reception-triad-divider arrival-item" style={{ '--delay': '0.5s' }} aria-hidden="true" />

            {/* Column 3: Time */}
            <div className="reception-triad-col arrival-item" style={{ '--delay': '0.55s' }}>
              <div className="reception-icon-wrapper">
                <Clock size={28} className="reception-triad-icon" strokeWidth={1.5} />
              </div>
              <div className="reception-triad-text">
                <span className="reception-time-val">5.30 Pm</span>
                <span className="reception-time-amp">&amp;</span>
                <span className="reception-time-val">8.00 Pm</span>
              </div>
            </div>

          </div>

          {/* Get Directions Button */}
          <div className="reception-action-row arrival-item" style={{ '--delay': '0.65s' }}>
            <a 
              href="https://maps.google.com/?q=Shifa+Convention+Center+Mannarkkad+Road+Perinthalmanna"
              target="_blank"
              rel="noopener noreferrer"
              className="reception-map-btn"
            >
              <MapPin size={16} />
              <span>View Location on Google Maps</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

