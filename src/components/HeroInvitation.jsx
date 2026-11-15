import React from 'react';

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
              Together with our families, we solicit your gracious presence and blessings on the auspicious occasion of the wedding celebration of
            </p>
          </div>

          {/* Couple Announcement with Script Names & Parents Info */}
          <div className="hero-couple-names-section">
            
            {/* Groom Details */}
            <div className="hero-person-block arrival-item" style={{ '--delay': '0.3s' }}>
              <h1 className="hero-groom-name">Dr. Vishnu Prakash U.K.</h1>
              <p className="hero-parent-info">
                S/o Sri Chintha Anjaneyulu &amp; Smt. Chintha Aruna
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

        </div>
      </div>
    </section>
  );
}

