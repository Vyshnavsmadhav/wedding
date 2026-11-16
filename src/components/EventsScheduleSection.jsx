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
          
          {/* Top Section above dashed divider: Muhurtham, Script Wedding, Date, Time */}
          <div className="temple-content-top">
            <p className="temple-muhurtham-label arrival-item" style={{ '--delay': '0.2s' }}>
              MUHURTHAM
            </p>
            
            <h3 className="temple-wedding-script arrival-item" style={{ '--delay': '0.25s' }}>
              The Wedding
            </h3>
            
            <p className="temple-date-line arrival-item" style={{ '--delay': '0.3s' }}>
              Sunday 13 December
            </p>

            <p className="temple-year-line arrival-item" style={{ '--delay': '0.35s' }}>
              2 0 2 6
            </p>

            <div className="temple-time-pill arrival-item" style={{ '--delay': '0.4s' }}>
              <span className="temple-time-icon">🕒</span>
              <span className="temple-time-text">8:00 AM to 9:00 AM</span>
            </div>
          </div>

          {/* Bottom Section below dashed divider: Temple Venue Name, Location, Button */}
          <div className="temple-content-bottom">
            <h4 className="temple-venue-title arrival-item" style={{ '--delay': '0.45s' }}>
              Kuttippuram Nottanalukkal<br />Bhagavathy Temple
            </h4>
            <p className="temple-venue-sub arrival-item" style={{ '--delay': '0.5s' }}>
              Moodal, Kuttippuram
            </p>

            {/* Integrated Action Button inside bottom ticket space */}
            <div className="temple-ticket-btn-wrapper arrival-item" style={{ '--delay': '0.55s' }}>
              <a 
                href="https://maps.google.com/?q=Nottanalukkal+Bhagavathy+Temple+Kuttippuram"
                target="_blank"
                rel="noopener noreferrer"
                className="temple-ticket-map-btn"
              >
                <MapPin size={14} />
                <span>VIEW LOCATION</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

