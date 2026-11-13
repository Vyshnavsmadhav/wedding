import React from 'react';
import FloatingBotanicals from './FloatingBotanicals';

export default function HeroInvitation() {
  return (
    <section className="invitation-hero-section" id="invitation">
      {/* Outer master card framing */}
      <div className="invitation-card-outer">
        {/* Subtle, continuous floating leaves and petals layer exclusively in hero card */}
        <FloatingBotanicals />
      </div>
    </section>
  );
}

