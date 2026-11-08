import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isPlaying, onToggle }) {
  return (
    <div className="music-player-container">
      <button 
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? 'Mute background wedding music' : 'Play background wedding music'}
        title={isPlaying ? 'Mute Music' : 'Play Traditional Wedding Music'}
      >
        {isPlaying ? (
          <Volume2 size={20} className="music-icon active" />
        ) : (
          <Music size={20} className="music-icon" />
        )}
        
        {/* Subtle pulsing concentric ring when active */}
        {isPlaying && <span className="music-pulse-ring" />}
      </button>
    </div>
  );
}

