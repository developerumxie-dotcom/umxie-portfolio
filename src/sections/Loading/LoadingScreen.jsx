import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onLoaded, onSystemReady }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1.2 - 1.8 seconds total duration as specified
    const timers = [
      setTimeout(() => { setStep(1); setProgress(32); }, 250),
      setTimeout(() => { setStep(2); setProgress(64); }, 650),
      setTimeout(() => { setStep(3); setProgress(88); }, 1050),
      setTimeout(() => {
        setStep(4);
        setProgress(100);
        if (onSystemReady) onSystemReady();
      }, 1350),
      setTimeout(() => { setIsFading(true); }, 1700),
      setTimeout(() => {
        setIsDone(true);
        if (onLoaded) onLoaded();
      }, 2300)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onLoaded, onSystemReady]);

  if (isDone) return null;

  return (
    <div className={`loading-screen ${isFading ? 'loading-screen--fading' : ''}`}>
      <div className="loading-header">
        <span>UMXIE // DEV.STUDIO</span>
        <span>INITIALIZING SEQUENCE</span>
      </div>

      <div className="loading-body">
        <div className="loading-title">
          <span className="blink">●</span>
          <span>INITIALIZING PORTFOLIO...</span>
        </div>

        <div className="loading-lines">
          <div className={`loading-line ${step >= 1 ? 'loading-line--active' : ''}`}>
            <span>DESIGN SYSTEM</span>
            <span className="loading-dots" />
            <span className="loading-status-ready">READY</span>
          </div>

          <div className={`loading-line ${step >= 2 ? 'loading-line--active' : ''}`}>
            <span>3D ENVIRONMENT</span>
            <span className="loading-dots" />
            <span className="loading-status-ready">READY</span>
          </div>

          <div className={`loading-line ${step >= 3 ? 'loading-line--active' : ''}`}>
            <span>PROJECTS</span>
            <span className="loading-dots" />
            <span className="loading-status-ready">READY</span>
          </div>

          <div className={`loading-line ${step >= 4 ? 'loading-line--active' : ''}`}>
            <span>INTERFACE</span>
            <span className="loading-dots" />
            <span className="loading-status-ready">READY</span>
          </div>
        </div>

        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="loading-footer">
        <div>
          <div className="loading-progress-val">{progress}%</div>
          <div className="loading-sys-ready">
            {progress === 100 ? 'SYSTEM READY' : 'CALIBRATING ASSETS'}
          </div>
        </div>

        <div className="mono-label" style={{ textAlign: 'right' }}>
          <span>LAT: 28.6139° N</span><br />
          <span>LNG: 77.2090° E</span>
        </div>
      </div>
    </div>
  );
}
