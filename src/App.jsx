import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ArrowRight } from 'lucide-react';

import HeroInvitation from './components/HeroInvitation';
import CountdownSection from './components/CountdownSection';
import EventsScheduleSection from './components/EventsScheduleSection';
import ReceptionMandapSection from './components/ReceptionMandapSection';
import CherishedMemoriesSection from './components/CherishedMemoriesSection';
import ClosingSection from './components/ClosingSection';
import MusicPlayer from './components/MusicPlayer';
import FloatingBotanicals from './components/FloatingBotanicals';
import { useScrollArrival } from './hooks/useScrollArrival';
import { weddingData } from './weddingData';
import './App.css';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

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

  const handleSealClick = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    setIsVideoPlaying(true);
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch((err) => {
      console.warn('Video play prevented:', err);
    });

    if (audioRef.current && !isPlayingMusic) {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.warn('Audio play prevented:', err);
      });
    }
  };

  const handleVideoEnded = () => {
    handleOpenInvitation();
  };

  const handleOpenInvitation = () => {
    if (isTransitioning || hasEntered) return;
    setIsTransitioning(true);

    // Give Lenis the signal to start immediately
    if (window.__lenis) {
      window.__lenis.start();
      window.__lenis.resize();
    }

    // Optionally start peaceful background music on user action
    if (audioRef.current && !isPlayingMusic) {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.warn('Audio auto-start hindered by browser:', err);
      });
    }

    // Fluid cross-fade timeout allowing smooth blending before unmounting cover
    setTimeout(() => {
      setHasEntered(true);
      setIsTransitioning(false);
      if (window.__lenis) {
        window.__lenis.resize();
        window.__lenis.scrollTo(0, { immediate: true });
      }
    }, 1100);
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

      {/* Video Cover Landing Screen with Fluid Cross-fade Exit */}
      {!hasEntered && (
        <div className={`video-cover-screen ${isVideoPlaying ? 'video-active' : 'envelope-active'} ${isTransitioning ? 'cover-dissolving' : ''}`}>
          <video
            ref={videoRef}
            className="cover-video"
            playsInline
            muted
            src="/intro-video.mp4"
            poster="/video-poster.jpg"
            onEnded={handleVideoEnded}
          />

          {/* Envelope Card overlay when video hasn't started */}
          {!isVideoPlaying && (
            <div className="envelope-interactive-overlay">
              <div 
                className="wax-seal-hotspot"
                onClick={handleSealClick}
                role="button"
                tabIndex={0}
                aria-label="Click wax seal to open invitation video"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSealClick(e);
                  }
                }}
              >
                <div className="wax-seal-pulse-ring" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Global floating leaves and petals layer across the full website */}
      <FloatingBotanicals />

      {/* Main Invitation Page Content */}
      <main className="main-invitation-container">
        {/* Section 1: Hero Main Invitation Card */}
        <HeroInvitation />

        {/* Countdown Clock to the Auspicious Day */}
        <CountdownSection />

        {/* Section 2: Events Schedule Mandap Theme */}
        <EventsScheduleSection />

        {/* Section 3: Reception Mandap Theme (Evening Celebrations) */}
        <ReceptionMandapSection />

        {/* Section 4: Cherished Memory Arch Portrait */}
        <CherishedMemoriesSection />

        {/* Section 5: Closing Message */}
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
