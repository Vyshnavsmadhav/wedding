import React, { useState, useEffect } from 'react';
import { weddingData } from '../weddingData';

export default function CountdownSection() {
  const targetDate = new Date(weddingData.dates.isoDateTime || "2026-12-13T08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <section className="countdown-section" id="countdown">
      <div className="countdown-card-wrapper arrival-item" style={{ '--delay': '0.15s' }}>
        
        {/* Mandala decorative pattern overlay */}
        <div className="countdown-mandala-bg" />

        {/* Content Heading */}
        <div className="countdown-header-box">
          <p className="countdown-eyebrow arrival-item" style={{ '--delay': '0.1s' }}>COUNTING DOWN TO</p>
          <h2 className="countdown-title-script arrival-item" style={{ '--delay': '0.18s' }}>The Auspicious Day</h2>
        </div>

        {/* 4 Arch Window Timer Cards */}
        <div className="countdown-timer-grid">
          
          {/* Days */}
          <div className="countdown-arch-card arrival-item" style={{ '--delay': '0.24s' }}>
            <span className="countdown-num">{pad(timeLeft.days)}</span>
            <span className="countdown-label">DAYS</span>
          </div>

          {/* Hours */}
          <div className="countdown-arch-card arrival-item" style={{ '--delay': '0.32s' }}>
            <span className="countdown-num">{pad(timeLeft.hours)}</span>
            <span className="countdown-label">HOURS</span>
          </div>

          {/* Minutes */}
          <div className="countdown-arch-card arrival-item" style={{ '--delay': '0.40s' }}>
            <span className="countdown-num">{pad(timeLeft.minutes)}</span>
            <span className="countdown-label">MINUTES</span>
          </div>

          {/* Seconds */}
          <div className="countdown-arch-card arrival-item" style={{ '--delay': '0.48s' }}>
            <span className="countdown-num">{pad(timeLeft.seconds)}</span>
            <span className="countdown-label">SECONDS</span>
          </div>

        </div>

      </div>
    </section>
  );
}
