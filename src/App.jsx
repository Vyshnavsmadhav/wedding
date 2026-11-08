import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ArrowRight } from 'lucide-react';

import HeroInvitation from './components/HeroInvitation';
import CelebrationSection from './components/CelebrationSection';
import DetailsSection from './components/DetailsSection';
import VenueSection from './components/VenueSection';
import ClosingSection from './components/ClosingSection';
import MusicPlayer from './components/MusicPlayer';
import { weddingData } from './weddingData';
import './App.css';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

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
                Dr. Akshay S Suresh &amp; Dr. Surya Suresh
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

        {/* Section 2: The Wedding Celebration */}
        <CelebrationSection />

        {/* Section 3: Wedding Details & Muhurtham */}
        <DetailsSection />

        {/* Section 4: Venue & Location */}
        <VenueSection />

        {/* Section 5: Closing Message & Family Blessings */}
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
