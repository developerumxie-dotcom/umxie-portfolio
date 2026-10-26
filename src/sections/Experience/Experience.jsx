import React, { useRef, useState, useEffect } from 'react';
import { JOURNEY_MILESTONES } from '../../data/experience';
import { useCursor } from '../../components/Cursor/CursorContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Experience.css';

export default function Experience() {
  const sectionRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();
  const [activeYear, setActiveYear] = useState('2019');

  // Synchronize active milestone with scroll position
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const entries = sectionEl.querySelectorAll('.experience-entry');
    if (!entries || entries.length === 0) return;

    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.getAttribute('data-year');
            if (year) {
              setActiveYear(year);
            }
          }
        });
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: 0.15
      }
    );

    entries.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="portfolio-section experience-section">
      {/* Subtle Binary Code Watermark Background */}
      <div className="journey-binary-canvas" aria-hidden="true">
        <span>01000010 01000001 01000011 01001011 01000101 01001110 01000100 00100000 01010011 01011001 01010011 01010100 01000101 01001101 01010011</span>
        <span>01000011 01001111 01000100 01000101 00100000 00101111 00101111 00100000 01010100 01000101 01000011 01001000 01001110 01001100 01001111 01000111 01011001</span>
        <span>01010000 01010010 01001111 01000111 01010010 01000001 01001101 01001101 01001001 01001110 01000111 00100000 00110010 00110000 00110001 00111001</span>
        <span>01000100 01000101 01010110 01001111 01000000 01010011 00100000 00100110 00100000 01000011 01001100 01001111 01010101 01000100</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle
          index="04"
          title="MY JOURNEY"
          subtitle="DEVELOPER TIMELINE / 2019—2026"
          description="From my first lines of HTML and CSS to exploring modern backend systems, cloud infrastructure, and AI-powered applications."
          theme="dark"
        />

        {/* Left-Aligned Timeline Column */}
        <div className="experience-timeline-col">
          <div className="timeline-track-line">
            <div className="timeline-progress-fill" />
          </div>

          <div className="experience-items-list">
            {JOURNEY_MILESTONES.map((item) => {
              const isSelected = activeYear === item.year;
              return (
                <article
                  key={item.year}
                  data-year={item.year}
                  id={`milestone-${item.year}`}
                  className={`experience-entry ${isSelected ? 'experience-entry--active' : ''} ${item.isCurrent ? 'experience-entry--current' : ''}`}
                  onClick={() => setActiveYear(item.year)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                >
                  {/* Left Column: Year */}
                  <div className="journey-year-col">
                    <span className="experience-year-badge">{item.year}</span>
                  </div>

                  {/* Timeline Node Marker */}
                  <div className="timeline-node-marker" />

                  {/* Right Column: Milestone Content Details */}
                  <div className="journey-content-col">
                    <div className="journey-entry-meta">
                      <span className="journey-index-num">{item.id}</span>
                      <span className="journey-category-badge">{item.category}</span>
                      {item.isCurrent && (
                        <span className="journey-current-badge">CURRENT FOCUS</span>
                      )}
                    </div>

                    {/* 1. Standard Main Heading (No box model border) */}
                    <h3 className="experience-tech-headline">
                      {(item.mainHeading || item.technologies).map((tech, idx, arr) => (
                        <span key={tech} className="tech-heading-item">
                          {tech}
                          {idx < arr.length - 1 && (
                            <span className="tech-heading-sep"> / </span>
                          )}
                        </span>
                      ))}
                    </h3>

                    {/* 2. Milestone Subtitle */}
                    <div className="experience-role-title">{item.title}</div>

                    {/* 3. Description */}
                    <p className="experience-desc">{item.description}</p>

                    {/* 4. TECHNOLOGY FOCUS Section for All Milestones */}
                    {item.isCurrent ? (
                      <div className="journey-tech-focus-container">
                        <div className="journey-tech-focus-label">TECHNOLOGY FOCUS</div>

                        <div className="journey-focus-breakdown">
                          {/* Group 1: BACKEND ENGINEERING (Primary Focus) */}
                          <div className="journey-focus-section">
                            <div className="journey-group-title">
                              <span className="journey-group-dot journey-group-dot--primary" />
                              <span>BACKEND ENGINEERING <span className="journey-group-badge journey-group-badge--primary">(PRIMARY FOCUS)</span></span>
                            </div>
                            <div className="experience-stack-pills">
                              {item.backendEngineering?.map((tech) => (
                                <span key={tech} className="tech-tag tech-tag--primary">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Group 2: CLOUD & DEVOPS */}
                          <div className="journey-focus-section">
                            <div className="journey-group-title">
                              <span className="journey-group-dot" />
                              <span>CLOUD &amp; DEVOPS <span className="journey-group-badge">(CURRENT LEARNING)</span></span>
                            </div>
                            <div className="experience-stack-pills">
                              {item.cloudDevops?.map((tech) => (
                                <span key={tech} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Group 3: AI INTEGRATION */}
                          <div className="journey-focus-section">
                            <div className="journey-group-title">
                              <span className="journey-group-dot" />
                              <span>AI INTEGRATION <span className="journey-group-badge">(CURRENT LEARNING)</span></span>
                            </div>
                            <div className="experience-stack-pills">
                              {item.aiIntegration?.map((tech) => (
                                <span key={tech} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      item.technologyFocus && (
                        <div className="journey-tech-focus-container">
                          <div className="journey-tech-focus-label">TECHNOLOGY FOCUS</div>
                          <div className="experience-stack-pills">
                            {item.technologyFocus.map((tech) => (
                              <span key={tech} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
