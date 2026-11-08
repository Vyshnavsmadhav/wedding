import React from 'react';

/**
 * Traditional Indian Decorative Lotus & Floral SVGs
 */

export const LotusIcon = ({ className = '', size = 28, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size * 0.55} 
    viewBox="0 0 60 33" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`lotus-icon ${className}`}
    style={{ color }}
    aria-hidden="true"
  >
    {/* Center petal */}
    <path 
      d="M30 2C27 10 26 18 30 28C34 18 33 10 30 2Z" 
      fill="currentColor" 
      opacity="0.9"
    />
    {/* Left inner petal */}
    <path 
      d="M30 14C23 14 17 19 18 27C23 27 28 23 30 14Z" 
      fill="currentColor" 
      opacity="0.8"
    />
    {/* Right inner petal */}
    <path 
      d="M30 14C37 14 43 19 42 27C37 27 32 23 30 14Z" 
      fill="currentColor" 
      opacity="0.8"
    />
    {/* Left outer petal */}
    <path 
      d="M24 22C16 19 7 24 6 30C14 31 22 28 24 22Z" 
      fill="currentColor" 
      opacity="0.7"
    />
    {/* Right outer petal */}
    <path 
      d="M36 22C44 19 53 24 54 30C46 31 38 28 36 22Z" 
      fill="currentColor" 
      opacity="0.7"
    />
    {/* Base pod */}
    <path 
      d="M23 29C27 31 33 31 37 29C35 32 25 32 23 29Z" 
      fill="currentColor"
    />
  </svg>
);

export const OrnamentalDivider = ({ className = '', showLotus = true }) => (
  <div className={`ornamental-divider-wrapper ${className}`}>
    <span className="divider-line" />
    {showLotus ? (
      <span className="divider-icon">
        <LotusIcon size={24} color="var(--color-gold)" />
      </span>
    ) : (
      <span className="divider-diamond">&#9670;</span>
    )}
    <span className="divider-line" />
  </div>
);

export const CornerFlourish = ({ position = 'top-left' }) => {
  const transforms = {
    'top-left': 'none',
    'top-right': 'scaleX(-1)',
    'bottom-left': 'scaleY(-1)',
    'bottom-right': 'scale(-1, -1)'
  };

  return (
    <svg 
      className={`corner-flourish corner-${position}`}
      width="34" 
      height="34" 
      viewBox="0 0 40 40" 
      fill="none" 
      style={{ transform: transforms[position] }}
      aria-hidden="true"
    >
      <path 
        d="M2 38V12C2 6.47715 6.47715 2 12 2H38" 
        stroke="var(--color-gold)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M6 34V14C6 9.58172 9.58172 6 14 6H34" 
        stroke="var(--color-gold)" 
        strokeWidth="0.8" 
        strokeOpacity="0.7" 
        strokeLinecap="round" 
      />
      <circle cx="12" cy="12" r="2.5" fill="var(--color-gold)" />
      <path 
        d="M20 2C20 8 16 12 10 12" 
        stroke="var(--color-gold)" 
        strokeWidth="1" 
        strokeLinecap="round" 
      />
      <path 
        d="M2 20C8 20 12 16 12 10" 
        stroke="var(--color-gold)" 
        strokeWidth="1" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export const JasmineGarlandDecoration = ({ className = '' }) => (
  <svg 
    className={`jasmine-garland ${className}`} 
    viewBox="0 0 160 180" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Stem 1 */}
    <path d="M140 0C130 40 100 80 85 140" stroke="#718355" strokeWidth="2.5" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M135 15C125 15 120 25 122 30C128 30 134 25 135 15Z" fill="#586f44" />
    <path d="M145 28C145 38 152 42 156 38C155 30 148 26 145 28Z" fill="#6d8350" />
    <path d="M118 45C108 44 105 54 107 60C114 60 119 54 118 45Z" fill="#586f44" />
    <path d="M105 75C95 72 90 82 92 88C100 87 106 82 105 75Z" fill="#6d8350" />
    {/* Cascading Jasmine Buds and Blossoms */}
    <circle cx="128" cy="42" r="5" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="124" cy="54" r="5.5" fill="#ffffff" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="120" cy="67" r="6" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="114" cy="80" r="6.5" fill="#ffffff" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="108" cy="95" r="7" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="100" cy="112" r="7" fill="#ffffff" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="94" cy="128" r="6.5" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="88" cy="144" r="5.5" fill="#ffffff" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="84" cy="158" r="4.5" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="82" cy="170" r="3.5" fill="#dfcba5" />

    {/* Secondary Jasmine Strand */}
    <path d="M155 0C150 50 140 90 125 150" stroke="#718355" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="148" cy="48" r="4.5" fill="#ffffff" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="142" cy="66" r="5" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="138" cy="84" r="5.5" fill="#ffffff" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="134" cy="104" r="6" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="128" cy="126" r="5.5" fill="#ffffff" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="122" cy="146" r="4.5" fill="#fdfbf7" stroke="#dfcba5" strokeWidth="0.8" />
    <circle cx="118" cy="162" r="3" fill="#dfcba5" />
  </svg>
);

