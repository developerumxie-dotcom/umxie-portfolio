import React, { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react';
import solarSailerTrack from '../../assets/audio/solar-sailer.mp3';

const SoundContext = createContext({
  isPlaying: false,
  isInitialized: false,
  toggleSound: () => { },
  playSound: () => { },
  pauseSound: () => { },
  onSystemReady: () => { },
  audioRef: { current: null }
});

const TARGET_VOLUME = 1.0;

export function SoundProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const audioRef = useRef(null);
  const userManuallyDisabledRef = useRef(false);
  const hasStartedRef = useRef(false);
  const isMountedRef = useRef(true);
  const mountTimeRef = useRef(Date.now());
  const removeScrollListenersRef = useRef(null);

  const pendingScrollPlayRef = useRef(false);

  // Play audio safely with browser promise handling
  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // If user explicitly muted, do not play
    if (userManuallyDisabledRef.current) return;

    // If audio is already playing, sync state
    if (!audio.paused) {
      setIsPlaying(true);
      return;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (!isMountedRef.current) return;

          // Guard against race condition: user clicked OFF while playPromise was resolving
          if (userManuallyDisabledRef.current) {
            audio.pause();
            setIsPlaying(false);
            return;
          }

          setIsPlaying(true);
          hasStartedRef.current = true;
          pendingScrollPlayRef.current = false;

          // Remove scroll listeners once audio has successfully started playing
          if (removeScrollListenersRef.current) {
            removeScrollListenersRef.current();
          }
        })
        .catch((err) => {
          if (!isMountedRef.current) return;
          setIsPlaying(false);
          // If browser blocked playback due to autoplay policy
          if (err?.name === 'NotAllowedError' || err?.name === 'AbortError') {
            pendingScrollPlayRef.current = true;
          }
        });
    }
  }, []);

  // Explicit user play action (e.g. clicking SOUND ON)
  const playSound = useCallback(() => {
    userManuallyDisabledRef.current = false;
    playAudio();
  }, [playAudio]);

  // Explicit user pause action (e.g. clicking SOUND OFF)
  const pauseSound = useCallback(() => {
    userManuallyDisabledRef.current = true;
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }, []);

  // Normal Play / Pause toggle
  const toggleSound = useCallback(() => {
    const audio = audioRef.current;
    const currentlyPlaying = isPlaying || (audio && !audio.paused);

    if (currentlyPlaying) {
      // User manually turns audio OFF
      pauseSound();
    } else {
      // User manually turns audio ON
      playSound();
    }
  }, [isPlaying, pauseSound, playSound]);

  // Backward compatibility for loading screen completion (no-op: never autoplay on load)
  const onSystemReady = useCallback(() => { }, []);

  // Initialize single persistent Audio instance & scroll interaction listeners
  useEffect(() => {
    isMountedRef.current = true;
    mountTimeRef.current = Date.now();
    userManuallyDisabledRef.current = false;
    hasStartedRef.current = false;

    // Prevent browser scroll restoration from firing a false scroll event on refresh
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual';
      } catch { }
    }

    // 1. Create single persistent Audio instance
    const audio = new Audio(solarSailerTrack);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = TARGET_VOLUME;
    audioRef.current = audio;

    // Synchronize UI state with native audio element events
    const handleNativePlay = () => {
      if (isMountedRef.current && !userManuallyDisabledRef.current) {
        setIsPlaying(true);
      }
    };

    const handleNativePause = () => {
      if (isMountedRef.current) {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('play', handleNativePlay);
    audio.addEventListener('pause', handleNativePause);

    setIsInitialized(true);

    // 2. Setup first scroll detection (triggers music on first scroll)
    const handleScrollTrigger = (e) => {
      // If user manually turned sound OFF, scrolling MUST NEVER restart it
      if (userManuallyDisabledRef.current) {
        return;
      }

      // If already started or playing, do nothing
      if (hasStartedRef.current || (audioRef.current && !audioRef.current.paused)) {
        return;
      }

      // Ignore synthetic/restoration scroll events during initial 100ms of mount
      if (e?.type === 'scroll' && Date.now() - mountTimeRef.current < 100) {
        return;
      }

      playAudio();
    };

    // Keyboard scroll detection
    const SCROLL_KEYS = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', ' ', 'Home', 'End'];
    const handleKeyDown = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) {
        return;
      }
      if (SCROLL_KEYS.includes(e.key)) {
        handleScrollTrigger(e);
      }
    };

    // User gesture handler: ensures audio starts on click or touch
    const handleUserGesture = (e) => {
      if (userManuallyDisabledRef.current || hasStartedRef.current) return;
      if (e?.target?.closest?.('.sound-toggle')) return;

      playAudio();
    };

    // Attach listeners for scroll and interaction
    window.addEventListener('wheel', handleScrollTrigger, { passive: true });
    window.addEventListener('scroll', handleScrollTrigger, { passive: true });
    window.addEventListener('touchmove', handleScrollTrigger, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: true });
    window.addEventListener('pointerdown', handleUserGesture, { capture: true });
    window.addEventListener('click', handleUserGesture, { capture: true });

    const cleanupScrollListeners = () => {
      window.removeEventListener('wheel', handleScrollTrigger);
      window.removeEventListener('scroll', handleScrollTrigger);
      window.removeEventListener('touchmove', handleScrollTrigger);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handleUserGesture, { capture: true });
      window.removeEventListener('click', handleUserGesture, { capture: true });
      removeScrollListenersRef.current = null;
    };

    removeScrollListenersRef.current = cleanupScrollListeners;

    // Cleanup on unmount (Strict Mode safe)
    return () => {
      isMountedRef.current = false;
      cleanupScrollListeners();

      audio.removeEventListener('play', handleNativePlay);
      audio.removeEventListener('pause', handleNativePause);

      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [playAudio]);

  return (
    <SoundContext.Provider
      value={{
        isPlaying,
        isInitialized,
        toggleSound,
        playSound,
        pauseSound,
        onSystemReady,
        audioRef
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export const useSound = () => useContext(SoundContext);
