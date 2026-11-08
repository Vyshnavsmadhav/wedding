import React from 'react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';
import { OrnamentalDivider } from './Ornaments';
import { weddingData } from '../weddingData';

export default function VenueSection() {
  const { venue } = weddingData;

  return (
    <section className="section-venue" id="venue">
      <div className="section-container">
        
        <div className="section-header-block">
          <span className="section-eyebrow">The Destination</span>
          <h2 className="section-heading">Venue &amp; Location</h2>
          <OrnamentalDivider className="my-4" />
          <p className="section-subtext">
            Nestled on the tranquil banks of Kerala's Ashtamudi waters, welcoming you into traditional serenity.
          </p>
        </div>

        <div className="venue-card-wrapper">
          {/* Left Details Info */}
          <div className="venue-info-box">
            <div className="venue-pin-badge">
              <MapPin size={24} className="text-maroon" />
            </div>

            <h3 className="venue-title">{venue.name}</h3>
            <p className="venue-subtitle">{venue.subtitle}</p>

            <div className="venue-address-block">
              <span className="address-label">Address</span>
              <p className="address-text">{venue.address}</p>
            </div>

            <div className="venue-contacts">
              <div className="contact-row">
                <Phone size={15} />
                <span>{venue.phone}</span>
              </div>
              <div className="contact-row">
                <Mail size={15} />
                <span>{venue.email}</span>
              </div>
            </div>

            <div className="venue-actions">
              <a 
                href={venue.directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-directions"
              >
                <Navigation size={16} />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="venue-map-box">
            <iframe
              title="Wedding Venue Location Map"
              src={venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

