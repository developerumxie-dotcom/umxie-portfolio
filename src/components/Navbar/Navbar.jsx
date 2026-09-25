import React, { useState, useEffect } from 'react';
import { useCursor } from '../Cursor/CursorContext';
import MagneticElement from '../Cursor/MagneticElement';
import SoundToggle from '../Sound/SoundToggle';
import './Navbar.css';

export default function Navbar({ activeSection = 'hero' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', target: '#about', id: 'about' },
    { label: 'STACK', target: '#stack', id: 'stack' },
    { label: 'WORK', target: '#work', id: 'projects' },
    { label: 'EXPERIENCE', target: '#experience', id: 'experience' },
    { label: 'CONTACT', target: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isLightSection = activeSection === 'contact'; // Dynamic navbar contrast adjustment

  return (
    <header className={`portfolio-navbar ${isScrolled ? 'portfolio-navbar--scrolled' : ''} ${isLightSection ? 'portfolio-navbar--light' : ''}`}>
      <div className="container nav-inner">
        {/* Left: Brand */}
        <MagneticElement strength={6}>
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="nav-brand"
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
          >
            <span className="nav-brand-title">UMXIE</span>
            <span className="nav-brand-sub">SOFTWARE ENGINEER</span>
          </a>
        </MagneticElement>

        {/* Right Navigation Actions */}
        <div className="nav-right-actions">
          {/* Desktop Links */}
          <div className="nav-links-wrapper">
            <ul className="nav-links">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.label}>
                    <MagneticElement strength={8}>
                      <a
                        href={item.target}
                        onClick={(e) => handleNavClick(e, item.target)}
                        className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                        onMouseEnter={() => setCursor('hover')}
                        onMouseLeave={resetCursor}
                      >
                        {item.label}
                      </a>
                    </MagneticElement>
                  </li>
                );
              })}
            </ul>

            <div className="nav-status">
              <span className="nav-status-dot" />
              <span>SYS.ON</span>
            </div>
          </div>

          {/* Top-Right Futuristic Sound Control */}
          <div className="nav-sound-wrapper">
            <MagneticElement strength={6}>
              <SoundToggle />
            </MagneticElement>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`nav-hamburger ${mobileMenuOpen ? 'nav-hamburger--open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'mobile-nav-overlay--open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item, idx) => (
            <li key={item.label}>
              <a
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className="mobile-nav-link"
              >
                <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', opacity: 0.5, marginRight: '1rem' }}>
                  0{idx + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-meta">
          <span>UMXIE // 2026</span>
          <span>SYSTEM READY</span>
        </div>
      </div>
    </header>
  );
}
