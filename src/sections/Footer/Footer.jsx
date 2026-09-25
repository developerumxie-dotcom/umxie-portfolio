import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container footer-inner">
        {/* Left */}
        <div className="footer-left">
          <span className="footer-brand">UMXIE</span>
          <span className="footer-role">SOFTWARE ENGINEER</span>
        </div>

        {/* Center */}
        <div className="footer-center">
          <span className="footer-tech">BUILT WITH REACT + THREE.JS</span>
          <span className="footer-sub">MONOCHROME SYSTEM ARCHITECTURE</span>
        </div>

        {/* Right */}
        <div className="footer-right">
          <div className="footer-status">
            <span className="footer-status-dot" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <span className="footer-copy">© 2026 UMXIE. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}
