import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { OrnamentalDivider } from './Ornaments';
import { weddingData } from '../weddingData';

export default function DetailsSection() {
  const { dates, events } = weddingData;

  return (
    <section className="section-details" id="details">
      <div className="section-container">
        
        <div className="section-header-block">
          <span className="section-eyebrow">Auspicious Moments</span>
          <h2 className="section-heading">Wedding Itinerary &amp; Muhurtham</h2>
          <OrnamentalDivider className="my-4" />
          <p className="section-subtext">
            Join us in commemorating every cherished ritual of this sacred South Indian matrimonial heritage.
          </p>
        </div>

        {/* Date & Muhurtham Highlight Banner */}
        <div className="auspicious-timing-banner">
          <div className="timing-col">
            <span className="timing-label">Gregorian Calendar</span>
            <span className="timing-val">{dates.gregorian}</span>
            <span className="timing-sub">{dates.day}</span>
          </div>

          <div className="timing-separator">
            <Calendar size={22} className="text-gold" />
          </div>

          <div className="timing-col">
            <span className="timing-label">Traditional Malayalam Era</span>
            <span className="timing-val">{dates.malayalam}</span>
            <span className="timing-sub">Kollam Era</span>
          </div>

          <div className="timing-separator">
            <Clock size={22} className="text-gold" />
          </div>

          <div className="timing-col">
            <span className="timing-label">Shubha Muhurtham</span>
            <span className="timing-val">{dates.muhurtham}</span>
            <span className="timing-sub">Auspicious Hour</span>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="events-grid">
          {events.map((evt, idx) => (
            <div key={idx} className="event-card">
              <div className="event-card-header">
                <span className="event-order">0{idx + 1}</span>
                <Sparkles size={16} className="event-sparkle" />
              </div>

              <h3 className="event-title">{evt.name}</h3>
              
              <div className="event-time-badge">
                <Clock size={14} />
                <span>{evt.time}</span>
              </div>

              <p className="event-desc">{evt.description}</p>

              <div className="event-attire-tag">
                <span className="attire-label">Suggested Attire:</span>
                <span className="attire-val">{evt.attire}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

