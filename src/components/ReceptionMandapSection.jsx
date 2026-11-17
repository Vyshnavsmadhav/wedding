import React from 'react';
import { MapPin } from 'lucide-react';

export default function ReceptionMandapSection() {
  return (
    <section className="reception-mandap-section" id="reception">
      <div className="reception-mandap-container">
        
        {/* Floral Ornament Top */}
        <div className="reception-top-ornament arrival-item" style={{ '--delay': '0.1s' }}>
          <span className="reception-ornament-line"></span>
          <span className="reception-ornament-flower">✿</span>
          <span className="reception-ornament-line"></span>
        </div>

        {/* Elegant Reception Stage Card */}
        <div className="reception-stage-card arrival-item" style={{ '--delay': '0.15s' }}>
          
          {/* Text Container Positioned Inside Arch */}
          <div className="reception-stage-content-body">
            <h3 className="reception-card-title-script arrival-item" style={{ '--delay': '0.2s' }}>
              Reception
            </h3>

            <p className="reception-card-tagline arrival-item" style={{ '--delay': '0.35s' }}>
              Join us for an evening of celebration,<br />
              dinner and togetherness as we begin<br />
              our new journey.
            </p>

            {/* Date Block */}
            <div className="reception-card-date-badge arrival-item" style={{ '--delay': '0.4s' }}>
              <span className="reception-date-day">Tuesday</span>
              <span className="reception-date-num">15</span>
              <span className="reception-date-month">December</span>
            </div>

            <p className="reception-card-era-sub arrival-item" style={{ '--delay': '0.42s' }}>
              (29th Vrischikam 1202)
            </p>

            <p className="reception-card-time arrival-item" style={{ '--delay': '0.45s' }}>
              05:30 PM &amp; 08:00 PM
            </p>

            {/* Venue Block */}
            <div className="reception-card-venue-box arrival-item" style={{ '--delay': '0.5s' }}>
              <p className="reception-venue-name">Shifa Convention Center,</p>
              <p className="reception-venue-location">Mannarkkad Road, Perinthalmanna</p>
            </div>

          </div>

          {/* Integrated Action Button inside bottom ticket outline */}
          <div className="reception-ticket-btn-wrapper arrival-item" style={{ '--delay': '0.55s' }}>
            <a 
              href="https://maps.google.com/?q=Shifa+Convention+Center+Mannarkkad+Road+Perinthalmanna"
              target="_blank"
              rel="noopener noreferrer"
              className="reception-ticket-map-btn"
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
