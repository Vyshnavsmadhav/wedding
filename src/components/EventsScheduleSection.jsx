import React from 'react';
import { MapPin, Utensils } from 'lucide-react';

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
          
          {/* Top Section above dashed divider */}
          <div className="temple-content-top">
            <h3 className="temple-wedding-script arrival-item" style={{ '--delay': '0.2s' }}>
              Ceremony &amp; Lunch
            </h3>

            {/* Date Badge: Sunday | 13 | December */}
            <div className="temple-date-badge arrival-item" style={{ '--delay': '0.28s' }}>
              <span className="temple-date-day">Sunday</span>
              <span className="temple-date-num">13</span>
              <span className="temple-date-month">December</span>
            </div>

            <p className="temple-era-sub arrival-item" style={{ '--delay': '0.34s' }}>
              2026
            </p>

            <p className="temple-ceremony-sub arrival-item" style={{ '--delay': '0.4s' }}>
              FOLLOWING THE THALIKETTU
            </p>

            <div className="temple-lunch-row arrival-item" style={{ '--delay': '0.46s' }}>
              <Utensils size={15} className="temple-lunch-icon" />
              <span>Lunch will be served thereafter</span>
            </div>
          </div>

          {/* Bottom Section below dashed divider: Venue */}
          <div className="temple-content-bottom">
            <div className="temple-venue-box arrival-item" style={{ '--delay': '0.52s' }}>
              <h4 className="temple-venue-title">
                Olive International Convention Centre
              </h4>
              <p className="temple-venue-sub">
                Moodal, Kuttippuram
              </p>
            </div>
          </div>

          {/* Integrated Action Button inside bottom ticket space */}
          <div className="temple-ticket-btn-wrapper">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Olive+International+Convention+Centre+and+Exhibition+Hall+NH+66+Moodal+Kuttippuram+Kerala+679571"
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
    </section>
  );
}

