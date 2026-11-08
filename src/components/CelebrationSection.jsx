import React from 'react';
import { OrnamentalDivider } from './Ornaments';
import { weddingData } from '../weddingData';

export default function CelebrationSection() {
  const { invitationMessage, couple } = weddingData;

  return (
    <section className="section-celebration" id="celebration">
      <div className="section-container">
        <div className="celebration-card">
          <span className="section-eyebrow">A Sacred Union</span>
          <h2 className="celebration-title">{invitationMessage.title}</h2>
          
          <OrnamentalDivider className="my-6" />

          <p className="celebration-paragraph">
            {invitationMessage.text}
          </p>

          <p className="celebration-quote">
            &ldquo;In each other, we have found not only a partner for life, but a sanctuary of unconditional trust, joy, and eternal friendship.&rdquo;
          </p>

          <div className="celebration-signature">
            <span className="signature-initials">— {couple.shortNames} —</span>
          </div>
        </div>
      </div>
    </section>
  );
}

