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

        {/* Traditional Mandap Watercolor Card */}
        <div className="schedule-mandap-card arrival-item" style={{ '--delay': '0.15s' }}>
          
          {/* Center Ceremony Invitation Content on Clean Canvas */}
          <div className="mandap-content-body">
            <p className="ceremony-eyebrow arrival-item" style={{ '--delay': '0.2s' }}>
              JOIN US FOR THE
            </p>
            
            <h3 className="ceremony-title-script arrival-item" style={{ '--delay': '0.3s' }}>
              Wedding Ceremony
            </h3>
            
            <p className="ceremony-tagline arrival-item" style={{ '--delay': '0.35s' }}>
              As we tie the knot and begin<br />our new journey together.
            </p>

            {/* Date Block */}
            <div className="ceremony-date-badge arrival-item" style={{ '--delay': '0.4s' }}>
              <span className="date-side-day">Sunday</span>
              <span className="date-center-num">13</span>
              <span className="date-side-month">December</span>
            </div>

            <p className="ceremony-time arrival-item" style={{ '--delay': '0.45s' }}>
              08:00 AM - 09:00 AM
            </p>

            {/* Venue Block */}
            <div className="ceremony-venue-box arrival-item" style={{ '--delay': '0.5s' }}>
              <span className="venue-label">Venue:</span>
              <p className="venue-name">Kuttippuram Nottanalukkal Bhagavathy Temple,</p>
              <p className="venue-location">Moodal - Kuttippuram</p>
            </div>
          </div>

        </div>

        {/* View Location Action Under the Card */}
        <div className="schedule-under-card-action arrival-item" style={{ '--delay': '0.55s' }}>
          <a 
            href="https://maps.google.com/?q=Nottanalukkal+Bhagavathy+Temple+Kuttippuram"
            target="_blank"
            rel="noopener noreferrer"
            className="schedule-mandap-map-btn"
          >
            <MapPin size={15} />
            <span>View on Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
}

