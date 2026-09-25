import React from 'react';
import { useSound } from './SoundContext';
import { useCursor } from '../Cursor/CursorContext';
import './SoundToggle.css';

export default function SoundToggle({ className = '' }) {
  const { isPlaying, toggleSound } = useSound();
  const { setCursor, resetCursor } = useCursor();

  const handleMouseEnter = () => {
    setCursor('sound', 'SOUND');
  };

  const handleMouseLeave = () => {
    resetCursor();
  };

  return (
    <button
      type="button"
      className={`sound-toggle ${isPlaying ? 'sound-toggle--playing' : 'sound-toggle--paused'} ${className}`}
      onClick={toggleSound}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Toggle background music"
      aria-pressed={isPlaying}
      title={isPlaying ? 'Mute background music ("Solar Sailer")' : 'Play background music ("Solar Sailer")'}
    >
      {/* Sound indicator: filled circle when playing, hollow circle when paused */}
      <span className="sound-toggle-indicator" aria-hidden="true">
        <span className="sound-toggle-dot" />
      </span>

      {/* Three tiny animated equalizer bars */}
      <span className="sound-toggle-bars" aria-hidden="true">
        <span className="sound-toggle-bar bar-1" />
        <span className="sound-toggle-bar bar-2" />
        <span className="sound-toggle-bar bar-3" />
      </span>

      {/* Minimalist textual label */}
      <span className="sound-toggle-text">
        <span className="sound-toggle-prefix">SOUND </span>
        <span className="sound-toggle-state">{isPlaying ? 'ON' : 'OFF'}</span>
      </span>

      {/* Accessible feedback for assistive technologies */}
      <span className="sr-only">
        {isPlaying ? 'Background music is playing' : 'Background music is paused'}
      </span>
    </button>
  );
}
