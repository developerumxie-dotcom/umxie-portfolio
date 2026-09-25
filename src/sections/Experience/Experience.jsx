import React, { useRef } from 'react';
import { EXPERIENCES } from '../../data/experience';
import { useCursor } from '../../components/Cursor/CursorContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TechnicalLabel from '../../components/TechnicalLabel/TechnicalLabel';
import './Experience.css';

export default function Experience() {
  const sectionRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="experience" ref={sectionRef} className="portfolio-section experience-section">
      <div className="container">
        <SectionTitle
          index="04"
          title="EXPERIENCE"
          subtitle="TIMELINE // 2025 — 2026"
          theme="dark"
        />

        <div className="experience-grid">
          {/* Left Column: Vertical Timeline */}
          <div className="experience-timeline-col">
            <div className="timeline-track-line">
              <div className="timeline-progress-fill" />
            </div>

            <div className="experience-items-list">
              {EXPERIENCES.map((item) => (
                <article
                  key={`${item.year}-${item.company}`}
                  className="experience-entry"
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                >
                  <div className="timeline-node-marker" />
                  <span className="experience-year-badge">{item.year}</span>
                  <h3 className="experience-role-title">{item.role}</h3>
                  <div className="experience-company-name">
                    {item.company} &nbsp;·&nbsp; {item.location}
                  </div>
                  <p className="experience-desc">{item.description}</p>
                  <div className="experience-stack-pills">
                    {item.stack.map((s) => (
                      <span key={s} className="tech-tag" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Telemetry Spec Card */}
          <div className="experience-spec-col">
            <div className="spec-header">
              <span>SYSTEM ARCHITECTURE // TELEMETRY LOG</span>
            </div>

            <div className="spec-metrics-list">
              <div className="spec-metric-row">
                <span className="mono-label">RUNTIME ENVIRONMENT</span>
                <span className="mono-value">NODE.JS / V8</span>
              </div>
              <div className="spec-metric-row">
                <span className="mono-label">DATABASE ENGINES</span>
                <span className="mono-value">MONGODB / REDIS</span>
              </div>
              <div className="spec-metric-row">
                <span className="mono-label">INTERFACE PARADIGM</span>
                <span className="mono-value">REACT / CONCURRENT UI</span>
              </div>
              <div className="spec-metric-row">
                <span className="mono-label">CONTAINER & HOSTING</span>
                <span className="mono-value">AWS / DOCKER</span>
              </div>
              <div className="spec-metric-row">
                <span className="mono-label">AUTHENTICATION PROTOCOL</span>
                <span className="mono-value">JWT / REFRESH TOKENS</span>
              </div>
              <div className="spec-metric-row">
                <span className="mono-label">SECURITY POSTURE</span>
                <span className="mono-value">OWASP TOP 10 HARDENED</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <TechnicalLabel
                statusDot={true}
                statusColor="#FFFFFF"
                label="LIVE CLUSTER"
                value="ALL SERVICES OPERATIONAL"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
