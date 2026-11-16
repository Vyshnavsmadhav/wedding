import React from 'react';
import { MapPin } from 'lucide-react';

export default function EventsScheduleSection() {
  return (
    <section className="events-schedule-section" id="schedule">
      <div className="events-schedule-container">
        
        {/* Section Header: Events Schedule with Lotus Ornament */}
        <div className="schedule-header arrival-item" style={{ '--delay': '0.1s' }}>
          <h2 className="schedule-title-script">Events Schedule</h2>
          <div className="schedule-header-ornament">
            <span className="ornament-line"></span>
            <span className="ornament-flower">✿</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* Traditional Temple Card Theme */}
        <div className="schedule-temple-card arrival-item" style={{ '--delay': '0.15s' }}>
          
          {/* Top Section above dashed divider (matching Reception Card style) */}
          <div className="temple-content-top">
            <p className="temple-muhurtham-label arrival-item" style={{ '--delay': '0.2s' }}>
              YOU ARE CORDIALLY INVITED TO
            </p>
            
            <h3 className="temple-wedding-script arrival-item" style={{ '--delay': '0.25s' }}>
              The Wedding
            </h3>

            <p className="temple-tagline arrival-item" style={{ '--delay': '0.3s' }}>
              Join us as we tie the knot and begin<br />
              our sacred journey together in divine grace.
            </p>
            
            {/* Date Badge: Sunday | 13 | December */}
            <div className="temple-date-badge arrival-item" style={{ '--delay': '0.35s' }}>
              <span className="temple-date-day">Sunday</span>
              <span className="temple-date-num">13</span>
              <span className="temple-date-month">December</span>
            </div>

            <p className="temple-era-sub arrival-item" style={{ '--delay': '0.38s' }}>
              (2026)
            </p>

            <p className="temple-time arrival-item" style={{ '--delay': '0.4s' }}>
              08:00 AM &amp; 09:00 AM (Muhurtham)
            </p>
          </div>

          {/* Bottom Section below dashed divider: Venue and Maps Button */}
          <div className="temple-content-bottom">
            <div className="temple-venue-box arrival-item" style={{ '--delay': '0.45s' }}>
              <span className="temple-venue-label">Venue:</span>
              <h4 className="temple-venue-title">
                Kuttippuram Nottanalukkal Bhagavathy Temple,
              </h4>
              <p className="temple-venue-sub">
                Moodal, Kuttippuram
              </p>
            </div>

            {/* Integrated Action Button inside bottom ticket space */}
            <div className="temple-ticket-btn-wrapper arrival-item" style={{ '--delay': '0.55s' }}>
              <a 
                href="https://maps.google.com/?q=Nottanalukkal+Bhagavathy+Temple+Kuttippuram"
                target="_blank"
                rel="noopener noreferrer"
                className="temple-ticket-map-btn"
              >
                <MapPin size={15} />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

