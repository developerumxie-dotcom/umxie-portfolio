import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TechnicalLabel from '../../components/TechnicalLabel/TechnicalLabel';
import './About.css';

export default function About() {
  return (
    <section id="about" className="portfolio-section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Index & Label */}
          <div className="about-meta-col">
            <SectionTitle
              index="01"
              title="ABOUT"
              subtitle="SYS.ID // ARCH.01"
              theme="dark"
            />
            <div style={{ marginTop: '1.5rem' }}>
              <TechnicalLabel
                statusDot={true}
                statusColor="#FFFFFF"
                label="RUNTIME"
                value="NODE.JS / V8"
              />
            </div>
          </div>

          {/* Right Column: Statement, Story, Metadata */}
          <div className="about-content-col">
            <div className="about-statement">
              <span>I BUILD WITH</span>
              <span>CURIOSITY,</span>
              <span>LOGIC AND</span>
              <span>PURPOSE.</span>
            </div>

            <p className="about-description">
              I am a software engineer focused on building robust backend systems, scalable architectures, and seamless digital products. With deep fundamentals in asynchronous systems, database optimizations, and full-stack integration, I transform complex engineering problems into clean, deterministic, and maintainable software.
            </p>

            <div className="about-metadata-grid">
              <div className="about-metadata-item">
                <span className="mono-label">ROLE</span>
                <span className="mono-value">Software Engineer</span>
              </div>

              <div className="about-metadata-item">
                <span className="mono-label">FOCUS</span>
                <span className="mono-value">Backend / Full Stack</span>
              </div>

              <div className="about-metadata-item">
                <span className="mono-label">LOCATION</span>
                <span className="mono-value">India</span>
              </div>

              <div className="about-metadata-item">
                <span className="mono-label">STATUS</span>
                <span className="mono-value">Available // 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
