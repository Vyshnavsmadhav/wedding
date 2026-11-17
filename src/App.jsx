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
  const startMusicAtFiveSeconds = () => {
    if (!audioRef.current) return;
    try {
      if (audioRef.current.currentTime < 5) {
        audioRef.current.currentTime = 5;
      }
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.warn('Audio play hindered by browser autoplay policy:', err);
      });
    } catch (e) {
      console.warn('Error starting audio at 5s:', e);
    }
  };

  // Attempt to start music right from the cover page as soon as mounted or on first user interaction
  useEffect(() => {
    // Try auto-play immediately
    startMusicAtFiveSeconds();

    // Fallback: start immediately upon any user gesture on cover page
    const handleFirstUserInteraction = () => {
      startMusicAtFiveSeconds();
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('click', handleFirstUserInteraction);
    };

    window.addEventListener('pointerdown', handleFirstUserInteraction);
    window.addEventListener('touchstart', handleFirstUserInteraction);
    window.addEventListener('click', handleFirstUserInteraction);

    return () => {
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('click', handleFirstUserInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      if (audioRef.current.currentTime < 5) {
        audioRef.current.currentTime = 5;
      }
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

    startMusicAtFiveSeconds();
  };

  const handleVideoTimeUpdate = () => {
    // When video is ~0.8s from ending, trigger the seamless blend-in transition
    if (videoRef.current && !isTransitioning && !hasEntered) {
      const remaining = videoRef.current.duration - videoRef.current.currentTime;
      if (remaining <= 0.85 && videoRef.current.duration > 1.5) {
        handleOpenInvitation();
      }
    }
  };

  const handleVideoEnded = () => {
    handleOpenInvitation();
  };

  const handleOpenInvitation = () => {
    if (isTransitioning || hasEntered) return;
    setIsTransitioning(true);

    // Start background music seamlessly from 5s
    startMusicAtFiveSeconds();

    // Prepare Lenis to scroll cleanly
    if (window.__lenis) {
      window.__lenis.start();
      window.__lenis.resize();
    }

    // Seamless handover directly timed with the 1.2s dissolve
    setTimeout(() => {
      setHasEntered(true);
      setIsTransitioning(false);
      if (window.__lenis) {
        window.__lenis.resize();
        window.__lenis.scrollTo(0, { immediate: true });
      }
    }, 1200);
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
            webkit-playsinline="true"
            muted
            preload="auto"
            src="/intro-video.mp4"
            poster="/video-poster.jpg"
            onTimeUpdate={handleVideoTimeUpdate}
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
                <div className="wax-seal-ripple-wave ring-1" />
                <div className="wax-seal-ripple-wave ring-2" />
                <div className="wax-seal-pulse-ring" />
                <div className="wax-seal-tap-prompt">
                  <span>TAP TO UNSEAL</span>
                </div>
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
