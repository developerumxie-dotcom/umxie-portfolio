import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../../data/experience';
import { useCursor } from '../../components/Cursor/CursorContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Philosophy.css';

export default function Philosophy() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="philosophy" className="portfolio-section philosophy-section">
      <div className="container">
        <SectionTitle
          index="05"
          title="PHILOSOPHY"
          subtitle="CORE ENGINEERING PRINCIPLES"
          theme="dark"
        />

        {/* Centered Huge Headline Block */}
        <div className="philosophy-hero-block">
          <h2 className="philosophy-headline">
            <span>BUILD SIMPLE.</span>
            <span>UNDERSTAND DEEP.</span>
            <span>KEEP IMPROVING.</span>
          </h2>

          <p className="philosophy-lead">
            I care about understanding systems from the ground up, writing maintainable code, and creating computational solutions that stand the test of time.
          </p>
        </div>

        {/* 4 Minimal Principles with Horizontal Dividers */}
        <div className="principles-list">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="principle-row"
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
            >
              <span className="principle-num">{principle.id}</span>
              <h3 className="principle-title">{principle.title}</h3>
              <div className="principle-desc-group">
                <p className="principle-headline">{principle.headline}</p>
                <p className="principle-details">{principle.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
