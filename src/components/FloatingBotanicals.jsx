import React, { useMemo } from 'react';

/**
 * Botanical Floating Leaves and Petals exclusively for the Hero Section.
 * Features:
 * - Muted sage-green leaves
 * - Soft blush-pink lotus petals
 * - Pale beige & champagne leaves
 * - Natural slow drifting, rotation, and falling trajectories
 * - Zero impact on layout, pointer-events: none, strictly bound to Hero
 */

export default function FloatingBotanicals() {
  const particles = useMemo(() => {
    // 14 carefully tuned elements for an elegant, non-cluttered floating effect
    return [
      { id: 1, type: 'leaf-sage', left: 8, delay: 0, duration: 16, size: 22, rot: 15, drift: 60 },
      { id: 2, type: 'petal-pink', left: 22, delay: 4, duration: 18, size: 19, rot: 45, drift: -50 },
      { id: 3, type: 'leaf-beige', left: 38, delay: 1.5, duration: 21, size: 24, rot: -20, drift: 70 },
      { id: 4, type: 'petal-pink', left: 52, delay: 7, duration: 17, size: 16, rot: 80, drift: 40 },
      { id: 5, type: 'leaf-sage', left: 68, delay: 3, duration: 20, size: 20, rot: -60, drift: -65 },
      { id: 6, type: 'leaf-beige', left: 82, delay: 8.5, duration: 22, size: 23, rot: 30, drift: 55 },
      { id: 7, type: 'petal-pink', left: 92, delay: 2, duration: 19, size: 18, rot: 110, drift: -45 },
      { id: 8, type: 'leaf-sage', left: 15, delay: 9, duration: 18, size: 18, rot: -40, drift: 50 },
      { id: 9, type: 'petal-pink', left: 32, delay: 11, duration: 16, size: 17, rot: 65, drift: -40 },
      { id: 10, type: 'leaf-beige', left: 45, delay: 5.5, duration: 23, size: 21, rot: -15, drift: 80 },
      { id: 11, type: 'leaf-sage', left: 62, delay: 12, duration: 19, size: 25, rot: 50, drift: -75 },
      { id: 12, type: 'petal-pink', left: 75, delay: 10, duration: 17, size: 20, rot: -85, drift: 35 },
      { id: 13, type: 'leaf-beige', left: 88, delay: 13, duration: 22, size: 19, rot: 25, drift: -60 },
      { id: 14, type: 'petal-pink', left: 5, delay: 6, duration: 20, size: 15, rot: 95, drift: 45 }
    ];
  }, []);

  return (
    <div className="floating-botanicals-layer" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`botanical-particle ${p.type}`}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift-x': `${p.drift}px`,
            '--init-rot': `${p.rot}deg`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`
          }}
        >
          {p.type.startsWith('leaf') ? (
            /* Elegant tapered leaf shape */
            <svg viewBox="0 0 30 40" fill="currentColor" width="100%" height="100%">
              <path d="M15,2 C25,12 28,26 15,38 C2,26 5,12 15,2 Z" />
              <path d="M15,6 L15,34" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
            </svg>
          ) : (
            /* Delicate curved lotus petal shape */
            <svg viewBox="0 0 30 38" fill="currentColor" width="100%" height="100%">
              <path d="M15,2 C24,8 27,22 15,36 C3,22 6,8 15,2 Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

