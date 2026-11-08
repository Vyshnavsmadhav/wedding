import React from 'react';
import { Heart } from 'lucide-react';
import { LotusIcon, OrnamentalDivider } from './Ornaments';
import { weddingData } from '../weddingData';

export default function ClosingSection() {
  const { couple, closing } = weddingData;

  return (
    <footer className="section-closing" id="closing">
      <div className="section-container">
        
        <div className="closing-content-card">
          <LotusIcon size={38} color="var(--color-gold)" className="mb-3" />
          
          <h2 className="closing-heading">{closing.heading}</h2>

          <p className="closing-message">
            &ldquo;{closing.message}&rdquo;
          </p>

          <OrnamentalDivider className="my-6" />

          <div className="closing-couple-signature">
            <span className="signature-couple-name">{couple.groom}</span>
            <span className="signature-ampersand">&amp;</span>
            <span className="signature-couple-name">{couple.bride}</span>
          </div>

          <p className="rsvp-note-text">
            {closing.rsvpNote}
          </p>

          <div className="cultural-blessing-footer">
            <p className="sanskrit-blessing">
              ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।<br />
              सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥
            </p>
            <p className="footer-credits">
              Crafted with warm blessings &bull; {couple.shortNames} &bull; 2026
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

