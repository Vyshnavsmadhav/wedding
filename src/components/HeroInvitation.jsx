import React from 'react';
import { MapPin } from 'lucide-react';

export default function HeroInvitation() {
  return (
    <section className="invitation-hero-section" id="invitation">
      {/* Outer master card framing */}
      <div className="invitation-card-outer kerala-watercolor-theme">
        {/* Hero Content Statement positioned within the watercolor frame */}
        <div className="kerala-frame-content-wrapper">
          
          {/* Ganesha Invocation Icon & Chant */}
          <div className="hero-ganesha-block arrival-item" style={{ '--delay': '0.1s' }}>
            <img 
              src="/ganesha-ornament.png" 
              alt="Shree Ganesha" 
              className="hero-ganesha-img"
            />
            <p className="hero-ganesha-mantra">
              || Shree Ganeshay Namaha ||
            </p>
          </div>

          {/* Invitation Solicitation Header Text */}
          <div className="hero-solicit-box arrival-item" style={{ '--delay': '0.2s' }}>
            <p className="hero-solicit-text">
              With the blessings of our families, we warmly invite you to join us in celebrating our wedding and to bless us as we embark on this beautiful journey together.
            </p>
          </div>

          {/* Couple Announcement with Script Names & Parents Info */}
          <div className="hero-couple-names-section">
            
            {/* Groom Details */}
            <div className="hero-person-block arrival-item" style={{ '--delay': '0.3s' }}>
              <h1 className="hero-groom-name">Dr. Vishnu Prakash U.K.</h1>
              <p className="hero-parent-info">
                S/o Mr. Prakash P. &amp; Mrs. Lakshmi Devi
              </p>
            </div>

            {/* Connecting 'with' script */}
            <div className="hero-with-script arrival-item" style={{ '--delay': '0.38s' }}>
              with
            </div>

            {/* Bride Details */}
            <div className="hero-person-block arrival-item" style={{ '--delay': '0.45s' }}>
              <h1 className="hero-bride-name">Dr. Sreelekha E.M.</h1>
              <p className="hero-parent-info">
                D/o Sri Velineni Srinivasa Rao &amp; Smt. Velineni Sunitha Rani
              </p>
            </div>

          </div>

          {/* Wedding Ceremony & Muhurtham Schedule Block */}
          <div className="hero-ceremony-details arrival-item" style={{ '--delay': '0.52s' }}>
            <p className="hero-muhurtham-time">
              Muhurtham between 8.00 am to 9.00 am
            </p>
            <p className="hero-ceremony-venue">
              Thalikettu at Kuttippuram Nottanalukkal Bhagavathy Temple
            </p>
            <p className="hero-reception-lunch">
              Function and Lunch thereafter at Olive Convention Center,<br />
              Moodal- Kuttippuram
            </p>
          </div>

        </div>

        {/* View Location Action Under the Hero Card */}
        <div className="hero-under-card-action arrival-item" style={{ '--delay': '0.55s' }}>
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

