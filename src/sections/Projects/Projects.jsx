import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../data/projects';
import { useCursor } from '../../components/Cursor/CursorContext';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import { triggerProjectTransition } from '../../animations/pageTransitions';
import './Projects.css';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [transitioningId, setTransitioningId] = useState(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenProject = (project) => {
    setTransitioningId(project.id);
    triggerProjectTransition(project.id, () => {
      setActiveModalProject(project);
      setTransitioningId(null);
      resetCursor();
    });
  };

  return (
    <section id="work" className="portfolio-section projects-section">
      <div className="container">
        {/* Section Header */}
        <SectionTitle
          index="03"
          title="SELECTED WORK"
          subtitle="PRODUCTION SYSTEMS // FULL STACK"
          theme="light"
        />

        {/* Project List */}
        <div className="projects-showcase-list">
          {PROJECTS.map((project, index) => {
            const isReverse = index % 2 === 1;
            const isTransitioning = transitioningId === project.id;

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="project-showcase-block"
              >
                <div className={`project-inner-grid ${isReverse ? 'project-inner-grid--reverse' : ''}`}>
                  {/* Left Column: Editorial Information */}
                  <div className="project-info-side">
                    <div className="project-meta-top">
                      <span className="project-num">{project.num} // 03</span>
                      <span className="project-category-badge">
                        {project.stats[0]?.label}: {project.stats[0]?.value}
                      </span>
                    </div>

                    <h3 className="project-heading">{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech-list">
                      {project.technologies.map((t) => (
                        <span key={t} className="tech-tag tech-tag--light">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="dark"
                      arrow={true}
                      onClick={() => handleOpenProject(project)}
                      cursorType="hover"
                      ariaLabel={`View project architecture for ${project.title}`}
                    >
                      VIEW PROJECT
                    </Button>
                  </div>

                  {/* Right Column: Visual Mockup with 3D Parallax Tilt */}
                  <div className="project-visual-side">
                    <ProjectPreview
                      project={project}
                      onClick={() => handleOpenProject(project)}
                      isTransitioning={isTransitioning}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      <div
        className={`project-modal-backdrop ${
          activeModalProject ? 'project-modal-backdrop--open' : ''
        }`}
        onClick={() => setActiveModalProject(null)}
      >
        {activeModalProject && (
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <button
              className="project-modal-close-btn"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close modal window"
            >
              [ESC / CLOSE ✕]
            </button>

            <div className="project-meta-top" style={{ marginTop: '0.5rem' }}>
              <span className="mono-label">ARCH.SPEC // {activeModalProject.num}</span>
              <span className="tech-tag">{activeModalProject.technologies.join(' · ')}</span>
            </div>

            <h2 id="modal-project-title" className="headline-large" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#FFFFFF' }}>
              {activeModalProject.title}
            </h2>

            <p className="body-large" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              {activeModalProject.extendedDetails}
            </p>

            <img
              src={activeModalProject.image}
              alt={activeModalProject.title}
              style={{
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                marginBottom: '1.5rem',
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover'
              }}
            />

            {/* Architecture Metrics Grid */}
            <div className="project-modal-stats-grid">
              {activeModalProject.stats.map((s) => (
                <div key={s.label} className="project-modal-stat-box">
                  <span className="mono-label">{s.label}</span>
                  <span className="mono-value" style={{ fontSize: '1.25rem', color: '#FFFFFF' }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Engineering Implementations */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 className="mono-label" style={{ marginBottom: '0.75rem', color: '#FFFFFF' }}>
                KEY ENGINEERING IMPLEMENTATIONS
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {activeModalProject.architectureHighlights.map((hl, i) => (
                  <li key={i} className="body-regular" style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>0{i + 1}.</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-modal-actions">
              <Button
                href={activeModalProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                cursorType="open"
                cursorText="OPEN ↗"
              >
                LIVE DEMO ↗
              </Button>

              <Button
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                cursorType="open"
                cursorText="OPEN ↗"
              >
                SOURCE CODE
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
