import { useEffect } from 'react';

/**
 * Custom hook to initialize an IntersectionObserver that reveals elements
 * with staggered fade-and-slide arrival animations as they enter the viewport.
 */
export function useScrollArrival(hasEntered = true) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('arrived');
            // Unobserve once animated so it doesn't flicker on re-scroll
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Give the DOM a moment to settle after cover dismiss
    const timer = setTimeout(() => {
      const animateElements = document.querySelectorAll('.arrival-item');
      animateElements.forEach((el) => observer.observe(el));
    }, 60);

    return () => {
      clearTimeout(timer);
      const animateElements = document.querySelectorAll('.arrival-item');
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, [hasEntered]);
}

