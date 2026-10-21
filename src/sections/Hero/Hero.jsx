import React from 'react';
import { useCursor } from '../../components/Cursor/CursorContext';
import { useSound } from '../../components/Sound/SoundContext';
import MagneticElement from '../../components/Cursor/MagneticElement';
import './Hero.css';

export default function Hero({ mousePosition }) {
  const { setCursor, resetCursor } = useCursor();
  const { playSound } = useSound();

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
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content hero-interactive-layer">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>HELLO, I'M UMXIE.</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-software">SOFTWARE</span>
            <span className="hero-title-engineer">ENGINEER</span>
          </h1>

          <p className="hero-statement">
            I BUILD DIGITAL PRODUCTS, BACKEND SYSTEMS,<br className="hero-break-desk" />
            AND MODERN WEB EXPERIENCES.
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
              <span className="hero-scroll-line" />
              <span>SCROLL TO EXPLORE</span>
              <span className="hero-scroll-arrow">↓</span>
            </a>
          </MagneticElement>
        </div>
      </div>
    </section>
  );
}
