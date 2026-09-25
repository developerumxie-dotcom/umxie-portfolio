import React, { useState, useEffect } from 'react';
import { useCursor } from '../../components/Cursor/CursorContext';
import { useSound } from '../../components/Sound/SoundContext';
import MagneticElement from '../../components/Cursor/MagneticElement';
import './Hero.css';

export default function Hero({ mousePosition }) {
  const { setCursor, resetCursor } = useCursor();
  const { playSound } = useSound();
  const [coords, setCoords] = useState({ x: '042', y: '081', z: '266' });

  // Update real-time mock coordinates based on mouse movement
  useEffect(() => {
    if (mousePosition) {
      const calcX = Math.abs(Math.round(mousePosition.x % 1000)).toString().padStart(3, '0');
      const calcY = Math.abs(Math.round(mousePosition.y % 1000)).toString().padStart(3, '0');
      const calcZ = Math.abs(Math.round((mousePosition.x + mousePosition.y) % 500)).toString().padStart(3, '0');
      setCoords({ x: calcX, y: calcY, z: calcZ });
    }
  }, [mousePosition]);

  const handleScrollClick = (e) => {
    e.preventDefault();
    playSound();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreSkills = ["JAVASCRIPT", "NODE.JS", "REACT", "MONGODB"];

  return (
    <section id="hero" className="hero-section container">
      {/* Top Crosshairs */}
      <div className="crosshair" style={{ top: '80px', left: '20px' }} />
      <div className="crosshair" style={{ top: '80px', right: '20px' }} />

      <div className="hero-content hero-interactive-layer">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span>HELLO, I'M UMXIE.</span>
        </div>

        <h1 className="hero-title">
          <span>SOFTWARE</span>
          <span>ENGINEER</span>
        </h1>

        <p className="hero-statement">
          I build digital products, backend systems, and modern web experiences.
        </p>

        <div className="hero-tech-row">
          {coreSkills.map((tech) => (
            <MagneticElement key={tech} strength={6}>
              <div
                className="hero-tech-tag"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
              >
                {tech}
              </div>
            </MagneticElement>
          ))}
        </div>
      </div>

      <div className="hero-footer-bar hero-interactive-layer">
        <MagneticElement strength={8}>
          <a
            href="#about"
            onClick={handleScrollClick}
            className="hero-scroll-cta"
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="hero-scroll-arrow">↓</span>
          </a>
        </MagneticElement>

        <div className="hero-telemetry">
          <span>X: {coords.x} &nbsp; Y: {coords.y} &nbsp; Z: {coords.z}</span>
          <span>/ 00</span>
        </div>
      </div>
    </section>
  );
}
