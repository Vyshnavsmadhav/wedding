import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ArrowRight } from 'lucide-react';

import HeroInvitation from './components/HeroInvitation';
import CelebrationSection from './components/CelebrationSection';
import ReceptionSection from './components/ReceptionSection';
import ClosingSection from './components/ClosingSection';
import MusicPlayer from './components/MusicPlayer';
import { useScrollArrival } from './hooks/useScrollArrival';
import { weddingData } from './weddingData';
import './App.css';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef(null);

  // Initialize IntersectionObserver arrival animations for staggered elements
  useScrollArrival(hasEntered);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite: false,
      autoResize: true,
    });

    // Make lenis globally accessible
    window.__lenis = lenis;

    // Synchronize Lenis scroll ticks with requestAnimationFrame
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Stop Lenis while on cover screen so background doesn't move unintentionally
    if (!hasEntered) {
      lenis.stop();
    } else {
      lenis.start();
      lenis.resize();
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, [hasEntered]);

  // Background traditional Indian classical wedding music toggle
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.warn('Audio playback restricted:', err);
      });
    }
  };

  const handleOpenInvitation = () => {
    setHasEntered(true);
    // Smoothly scroll to the invitation card using Lenis once opened
    setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.resize();
        window.__lenis.scrollTo(0, { immediate: true });
      }
    }, 50);

    // Optionally start peaceful background music on user action
    if (audioRef.current && !isPlayingMusic) {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.warn('Audio auto-start hindered by browser:', err);
      });
    }
  };

  return (
    <div className="wedding-website-wrapper">
      {/* Background Indian Classical Music Audio Element - Agam (Walk of the Bride) */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
      >
        <source src="/wedding-music.m4a" type="audio/mp4" />
        <source src="/wedding-music.mp4" type="audio/mp4" />
        <source src="/wedding-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Video Cover Landing Screen */}
      {!hasEntered && (
        <div className="video-cover-screen">
          <video
            className="cover-video"
            autoPlay
            loop
            muted
            playsInline
            src="/intro-video.mp4"
          />
          <div className="cover-video-overlay">
            <div className="cover-content">
              <span className="cover-tag">Shubha Vivaham</span>
              <h1 className="cover-quote">Two souls, one beautiful journey.</h1>
              <p className="cover-couple">
                Dr. Vishnu Prakash U.K. &amp; Dr. Sreelekha E.M.
              </p>
              <button 
                className="cover-open-btn"
                onClick={handleOpenInvitation}
              >
                <span>Open Invitation</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Invitation Page Content */}
      <main className="main-invitation-container">
        {/* Section 1: Hero Main Invitation Card */}
        <HeroInvitation />

        {/* Section 2: Person Showcase */}
        <CelebrationSection />

        {/* Section 3: Wedding Reception Celebrations */}
        <ReceptionSection />

        {/* Section 4: Closing Message */}
        <ClosingSection />
      </main>

      {/* Floating Music Toggle Button (Bottom-Right) */}
      <MusicPlayer 
        isPlaying={isPlayingMusic} 
        onToggle={toggleMusic} 
      />
    </div>
  );
}
