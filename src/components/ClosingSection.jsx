import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';
import { LotusIcon, OrnamentalDivider } from './Ornaments';
import { weddingData } from '../weddingData';

export default function ClosingSection() {
  const { couple, closing } = weddingData;
  const [blessingSent, setBlessingSent] = useState(false);

  const handleSendBlessing = (e) => {
    if (blessingSent) return;

    // Fire festive South Indian wedding confetti petals & gold sparkles
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 55,
      spread: 65,
      origin: { x, y },
      colors: ['#b38b4c', '#dfcba5', '#541722', '#e0abb3', '#fdfbf7'],
      shapes: ['circle'],
      scalar: 0.9,
      ticks: 180,
    });

    // Permanently mark as blessed so it cannot be clicked again
    setBlessingSent(true);
  };

  return (
    <footer className="section-closing" id="closing">
      <div className="section-container">
        
        <div className="closing-content-card arrival-item" style={{ '--delay': '0.15s' }}>
          <LotusIcon size={38} color="var(--color-gold)" className="mb-3" />
          
          <h2 className="closing-heading arrival-item" style={{ '--delay': '0.25s' }}>{closing.heading}</h2>

          <p className="closing-message arrival-item" style={{ '--delay': '0.35s' }}>
            &ldquo;{closing.message}&rdquo;
          </p>

          <div className="arrival-item" style={{ '--delay': '0.45s' }}>
            <OrnamentalDivider className="my-6" />
          </div>

          <div className="closing-couple-signature arrival-item" style={{ '--delay': '0.55s' }}>
            <span className="signature-couple-name">Dr. Vishnu Prakash U.K.</span>
            <span className="signature-ampersand">&amp;</span>
            <span className="signature-couple-name">Dr. Sreelekha E.M.</span>
          </div>

          <p className="rsvp-note-text arrival-item" style={{ '--delay': '0.65s' }}>
            {closing.rsvpNote}
          </p>
        </div>

      </div>
    </footer>
  );
}

