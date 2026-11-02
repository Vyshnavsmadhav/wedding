import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Sparkles,
  ArrowRight,
  Share2,
  Compass,
  Wine
} from 'lucide-react';
import './App.css';

export default function App() {
  // Target wedding date: Saturday, September 19, 2026
  const targetDate = new Date('2026-09-19T16:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    attendance: 'attending',
    guests: '1',
    dietary: '',
    note: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpForm.name.trim()) return;

    setSubmitted(true);
    // Vercel monochrome burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#171717', '#6b7280', '#e5e7eb', '#ffffff']
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const itinerary = [
    {
      time: "03:30 PM",
      title: "Guest Arrival & Welcome Refreshment",
      desc: "Welcome tea, sparkling water, and artisanal light bites at the Meadow Pavilion.",
      badge: "Arrival"
    },
    {
      time: "04:30 PM",
      title: "The Ceremony",
      desc: "Unplugged vows at the Reflection Pool Courtyard.",
      badge: "Ceremony"
    },
    {
      time: "05:30 PM",
      title: "Cocktails & Golden Hour",
      desc: "Architectural terrace reception with select local Napa wines & acoustic strings.",
      badge: "Cocktail"
    },
    {
      time: "07:00 PM",
      title: "Seated Dinner & Speeches",
      desc: "Four-course seasonal tasting menu by Chef Laurent in the Glass Pavilion.",
      badge: "Dinner"
    },
    {
      time: "09:30 PM",
      title: "Celebration & Dancing",
      desc: "Live music, midnight dessert bar, and sparkler sendoff.",
      badge: "Afterparty"
    }
  ];

  const faqs = [
    {
      q: "What is the dress code?",
      a: "Black tie optional / Modern formal. We invite guests to wear black, charcoal, neutral, or monochrome tones to match the editorial evening setting."
    },
    {
      q: "Are children invited?",
      a: "While we love all the little ones in our lives, our wedding and evening reception will be an adults-only celebration."
    },
    {
      q: "What is the parking situation at the venue?",
      a: "Complimentary valet parking will be available at the main courtyard gate. Shuttles will also run between Napa Valley Marriott and the estate."
    },
    {
      q: "When should I RSVP by?",
      a: "Kindly submit your RSVP by July 15, 2026 using the form below so we can confirm seating and culinary preferences."
    }
  ];

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <header className="header">
        <div className="content-container">
          <nav className="nav" aria-label="Main Navigation">
            <a href="#hero" className="brand-link" id="nav-brand">
              <svg className="brand-triangle" viewBox="0 0 100 86" aria-hidden="true">
                <polygon points="50 0, 100 86, 0 86" />
              </svg>
              <span>Eleni &amp; Julian</span>
            </a>

            <div className="nav-links">
              <a href="#schedule" className="nav-link" id="nav-schedule">Schedule</a>
              <a href="#venue" className="nav-link" id="nav-venue">Venue</a>
              <a href="#registry" className="nav-link" id="nav-registry">Details</a>
              <a href="#rsvp" className="button-primary" id="nav-rsvp">RSVP</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="content-container">
          {/* Vercel Central Triangle with Atmospheric Soft Glow */}
          <div className="hero-mark-wrapper">
            <div className="hero-glow" aria-hidden="true"></div>
            <svg className="hero-triangle" viewBox="0 0 100 86" aria-label="Vercel Triangle Monogram">
              <polygon points="50 0, 100 86, 0 86" />
            </svg>
          </div>

          <div>
            <div className="pill-badge">
              <span className="badge-dot"></span>
              <span>Saturday, September 19, 2026 &bull; Napa Valley</span>
            </div>
          </div>

          <h1 className="hero-title">
            Eleni Vance &amp; Julian Scott
          </h1>

          <p className="hero-subtitle">
            A restrained, timeless union celebration of two lives becoming one.
            Join us for an evening of architectural serenity, fine wine, and heartfelt vows.
          </p>

          <div className="hero-actions">
            <a href="#rsvp" className="button-primary" id="hero-rsvp-btn">
              Confirm Attendance
              <ArrowRight size={16} />
            </a>
            <button onClick={handleCopyLink} className="button-secondary" id="hero-share-btn">
              <Share2 size={16} />
              {copied ? 'Link Copied!' : 'Share Invitation'}
            </button>
          </div>

          {/* Hero Editorial Media Card */}
          <div className="hero-media-card">
            <img 
              src="/couple.jpg" 
              alt="Eleni &amp; Julian editorial portrait" 
              className="hero-image"
              loading="eager"
            />
            <div className="hero-caption-bar">
              <span>01 / PRELUDE</span>
              <span>ST. HELENA ARCHITECTURAL ESTATE &bull; NAPA VALLEY, CA</span>
              <span>38.5025° N, 122.4697° W</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Grid */}
      <section className="countdown-section" aria-label="Wedding Countdown">
        <div className="content-container">
          <div className="metric-grid">
            <div className="metric-card">
              <div className="metric-number">{timeLeft.days}</div>
              <div className="metric-label">Days to Go</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">{timeLeft.hours}</div>
              <div className="metric-label">Hours</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">{timeLeft.minutes}</div>
              <div className="metric-label">Minutes</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">{timeLeft.seconds}</div>
              <div className="metric-label">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary / Schedule Section */}
      <section className="itinerary-section" id="schedule">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">02 &bull; TIMELINE</span>
            <h2 className="section-title">The Order of Events</h2>
            <p className="section-desc">
              Thoughtfully curated to flow seamlessly from daylight vows to midnight revelry.
            </p>
          </div>

          <div className="timeline-list">
            {itinerary.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-time">
                  <Clock size={16} />
                  <span>{item.time}</span>
                </div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div>
                  <span className="timeline-badge">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="venue-section" id="venue">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">03 &bull; SANCTUARY</span>
            <h2 className="section-title">The Location</h2>
            <p className="section-desc">
              Designed around concrete monoliths, tranquil reflection waters, and open skies.
            </p>
          </div>

          <div className="venue-grid">
            <div className="venue-card-visual">
              <img 
                src="/venue.jpg" 
                alt="Pavilion and reflection pool" 
                className="venue-image"
              />
            </div>

            <div className="venue-details-card">
              <h3 className="venue-name">The Glass &amp; Stone Pavilion</h3>
              <p className="venue-address">
                1420 Meadowood Lane, St. Helena, Napa Valley, CA 94574
              </p>

              <div className="spec-list">
                <div className="spec-item">
                  <MapPin size={18} className="spec-icon" />
                  <div>
                    <h5>Directions &amp; Arrival</h5>
                    <p>Located 15 minutes north of Yountville. Private gate entry code will be sent to registered guests.</p>
                  </div>
                </div>

                <div className="spec-item">
                  <Compass size={18} className="spec-icon" />
                  <div>
                    <h5>Recommended Accommodations</h5>
                    <p>Preferred rate block available under 'Vance-Scott' at Meadowood Resort and Alila Napa Valley.</p>
                  </div>
                </div>

                <div className="spec-item">
                  <Wine size={18} className="spec-icon" />
                  <div>
                    <h5>Dress Code</h5>
                    <p>Monochrome Formal / Black Tie Optional. Flat footwear suggested for gravel courtyards.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-secondary"
                id="maps-link"
              >
                Open in Google Maps
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Registry Section */}
      <section className="gallery-section" id="registry">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">04 &bull; DETAILS</span>
            <h2 className="section-title">Registry &amp; Notes</h2>
            <p className="section-desc">
              Everything you need to know about our registry, gifts, and photography guidelines.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img src="/rings.jpg" alt="Wedding bands" className="gallery-card-img" />
              <h4>Unplugged Vows</h4>
              <p>
                We kindly ask that all phones and cameras remain silent and tucked away during the ceremony so everyone can be fully present.
              </p>
              <span className="timeline-badge" style={{ alignSelf: 'flex-start' }}>Protocol</span>
            </div>

            <div className="gallery-card">
              <div style={{
                aspectRatio: '1/1',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-neutral)',
                border: 'var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px'
              }}>
                <Heart size={48} strokeWidth={1.2} color="var(--color-primary)" />
              </div>
              <h4>Honeymoon &amp; Arch Fund</h4>
              <p>
                Your presence is our highest honor. If you wish to gift, contributions to our architectural studio and Kyoto honeymoon fund are warmly appreciated.
              </p>
              <a href="#rsvp" className="button-link" style={{ alignSelf: 'flex-start' }}>
                View registry details &rarr;
              </a>
            </div>

            <div className="gallery-card">
              <div style={{
                aspectRatio: '1/1',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-neutral)',
                border: 'var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px'
              }}>
                <Sparkles size={48} strokeWidth={1.2} color="var(--color-primary)" />
              </div>
              <h4>Travel Concierge</h4>
              <p>
                Flying in from out of state? SFO and OAK airports are within a 90-minute drive. Reach out to our concierge for coordinated group transfers.
              </p>
              <a href="mailto:concierge@vancescott.com" className="button-link" style={{ alignSelf: 'flex-start' }}>
                Contact concierge &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form Section */}
      <section className="rsvp-section" id="rsvp">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">05 &bull; CONFIRMATION</span>
            <h2 className="section-title">RSVP to the Union</h2>
            <p className="section-desc">
              Please respond by July 15, 2026. We look forward to sharing this day with you.
            </p>
          </div>

          <div className="rsvp-card">
            {submitted ? (
              <div className="success-banner">
                <h4>Thank you, {rsvpForm.name}!</h4>
                <p>
                  Your RSVP response ({rsvpForm.attendance === 'attending' ? 'Attending' : 'Regretfully Declining'}) has been registered. We have sent a confirmation note to {rsvpForm.email}.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="button-secondary"
                  style={{ marginTop: '16px' }}
                >
                  Edit Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="rsvp-attendance">Will you be attending?</label>
                  <div className="radio-group" id="rsvp-attendance">
                    <label className={`radio-pill-label ${rsvpForm.attendance === 'attending' ? 'active' : ''}`}>
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="attending" 
                        checked={rsvpForm.attendance === 'attending'} 
                        onChange={(e) => setRsvpForm({...rsvpForm, attendance: e.target.value})}
                      />
                      <Check size={16} />
                      Joyfully Accept
                    </label>

                    <label className={`radio-pill-label ${rsvpForm.attendance === 'declining' ? 'active' : ''}`}>
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="declining" 
                        checked={rsvpForm.attendance === 'declining'} 
                        onChange={(e) => setRsvpForm({...rsvpForm, attendance: e.target.value})}
                      />
                      Regretfully Decline
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="guest-name">Full Name *</label>
                  <input 
                    id="guest-name"
                    type="text" 
                    required 
                    placeholder="E.g. Elena Rostova" 
                    className="form-input"
                    value={rsvpForm.name}
                    onChange={(e) => setRsvpForm({...rsvpForm, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="guest-email">Email Address *</label>
                  <input 
                    id="guest-email"
                    type="email" 
                    required 
                    placeholder="elena@example.com" 
                    className="form-input"
                    value={rsvpForm.email}
                    onChange={(e) => setRsvpForm({...rsvpForm, email: e.target.value})}
                  />
                </div>

                {rsvpForm.attendance === 'attending' && (
                  <>
                    <div className="form-group">
                      <label className="form-label" htmlFor="guest-count">Total Guests in Party</label>
                      <select 
                        id="guest-count"
                        className="form-select"
                        value={rsvpForm.guests}
                        onChange={(e) => setRsvpForm({...rsvpForm, guests: e.target.value})}
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests (+1)</option>
                        <option value="3">3 Guests</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="guest-dietary">Dietary Preferences or Allergies</label>
                      <input 
                        id="guest-dietary"
                        type="text" 
                        placeholder="E.g. Vegetarian, Gluten-free, none" 
                        className="form-input"
                        value={rsvpForm.dietary}
                        onChange={(e) => setRsvpForm({...rsvpForm, dietary: e.target.value})}
                      />
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="guest-note">Note for the Couple (Optional)</label>
                  <textarea 
                    id="guest-note"
                    rows="3" 
                    placeholder="Write a message, favorite song recommendation, or memory..." 
                    className="form-textarea"
                    value={rsvpForm.note}
                    onChange={(e) => setRsvpForm({...rsvpForm, note: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="button-primary" style={{ width: '100%', height: '46px' }} id="submit-rsvp-btn">
                  Submit RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section" id="faq">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">06 &bull; FREQUENTLY ASKED</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-question-btn"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  aria-expanded={expandedFaq === idx}
                >
                  <span>{faq.q}</span>
                  {expandedFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="content-container">
          <div className="footer-content">
            <div className="footer-brand">
              <svg className="brand-triangle" viewBox="0 0 100 86" aria-hidden="true" style={{ width: '16px', height: '14px' }}>
                <polygon points="50 0, 100 86, 0 86" />
              </svg>
              <span>Eleni &amp; Julian &bull; 2026</span>
            </div>
            <div>
              <span>Designed with Vercel Minimalist Principles</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
