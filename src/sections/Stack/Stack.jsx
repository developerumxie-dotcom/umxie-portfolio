import React, { useState, useEffect, useMemo, useRef, memo } from 'react';
import { UNIVERSE_MODULES, ALL_TECHNOLOGIES_MAP } from './stackData';
import { CategoryIcon, TechIcon } from './StackIcons';
import { useCursor } from '../../components/Cursor/CursorContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Stack.css';

/**
 * 8 Module Planets configuration.
 * Coordinates are percentage of the universe stage (cx: 50%, cy: 53.5%).
 * Leader lines & labels are relative to each planet center (0, 0), locking them with 100% precision!
 */
const PLANET_NODES = [
  {
    id: 'languages',
    num: '2.1',
    name: 'LANGUAGES',
    icon: 'languages',
    x: 50,
    y: 26.5,
    mobX: 50,
    mobY: 13,
    bobClass: 'planet-bob-1',
    labelStyle: { top: '-34px', left: '50%', transform: 'translateX(-50%)' }
  },
  {
    id: 'frontend',
    num: '2.2',
    name: 'FRONTEND',
    icon: 'frontend',
    x: 65.5,
    y: 33.5,
    mobX: 79,
    mobY: 25,
    bobClass: 'planet-bob-2',
    labelStyle: { top: '-24px', left: '38px' }
  },
  {
    id: 'backend',
    num: '2.3',
    name: 'BACKEND',
    icon: 'backend',
    x: 74,
    y: 50.5,
    mobX: 83,
    mobY: 50,
    bobClass: 'planet-bob-3',
    labelStyle: { top: '50%', left: '46px', transform: 'translateY(-50%)' }
  },
  {
    id: 'databases',
    num: '2.4',
    name: 'DATABASES',
    icon: 'databases',
    x: 67.5,
    y: 69,
    mobX: 79,
    mobY: 75,
    bobClass: 'planet-bob-4',
    labelStyle: { top: '50%', left: '46px', transform: 'translateY(-50%)' }
  },
  {
    id: 'cloud',
    num: '2.5',
    name: 'CLOUD & DEVOPS',
    icon: 'cloud',
    x: 50,
    y: 79.5,
    mobX: 50,
    mobY: 87,
    bobClass: 'planet-bob-5',
    labelStyle: { bottom: '-30px', left: '50%', transform: 'translateX(-50%)' }
  },
  {
    id: 'core_cs',
    num: '2.6',
    name: 'CORE CS',
    icon: 'core_cs',
    x: 35,
    y: 72.5,
    mobX: 21,
    mobY: 75,
    bobClass: 'planet-bob-6',
    labelStyle: { top: '50%', right: '46px', transform: 'translateY(-50%)' }
  },
  {
    id: 'tools',
    num: '2.7',
    name: 'TOOLS & TESTING',
    icon: 'tools',
    x: 27.5,
    y: 53.5,
    mobX: 17,
    mobY: 50,
    bobClass: 'planet-bob-7',
    labelStyle: { top: '50%', right: '46px', transform: 'translateY(-50%)' }
  },
  {
    id: 'hardware',
    num: '2.8',
    name: 'SYSTEMS & HARDWARE',
    icon: 'hardware',
    x: 33.5,
    y: 35.5,
    mobX: 21,
    mobY: 25,
    bobClass: 'planet-bob-8',
    labelStyle: { top: '-24px', right: '38px' }
  }
];

// Clean 4-point cross diffraction stars strictly in open background space matching reference image
const BACKGROUND_STAR_FLARES = [
  { x: 19, y: 39, size: 16 },
  { x: 60, y: 19, size: 18 },
  { x: 90, y: 38, size: 17 },
  { x: 18, y: 74, size: 18 },
  { x: 77, y: 79, size: 16 },
  { x: 64, y: 82, size: 14 }
];

// Natural pinprick stars scattered across the space
const STATIC_STARS = [
  { x: 10, y: 15, r: 1.0, o: 0.5 },
  { x: 15, y: 35, r: 1.2, o: 0.6 },
  { x: 24, y: 18, r: 1.0, o: 0.4 },
  { x: 30, y: 25, r: 1.3, o: 0.7 },
  { x: 42, y: 12, r: 1.1, o: 0.5 },
  { x: 58, y: 14, r: 1.2, o: 0.6 },
  { x: 72, y: 16, r: 1.0, o: 0.4 },
  { x: 86, y: 18, r: 1.3, o: 0.7 },
  { x: 94, y: 32, r: 1.0, o: 0.5 },
  { x: 88, y: 64, r: 1.2, o: 0.6 },
  { x: 82, y: 82, r: 1.0, o: 0.4 },
  { x: 68, y: 86, r: 1.3, o: 0.7 },
  { x: 44, y: 90, r: 1.1, o: 0.5 },
  { x: 26, y: 86, r: 1.2, o: 0.6 },
  { x: 12, y: 80, r: 1.0, o: 0.4 },
  { x: 7, y: 55, r: 1.2, o: 0.6 },
  { x: 20, y: 48, r: 1.0, o: 0.4 },
  { x: 46, y: 44, r: 1.3, o: 0.5 },
  { x: 55, y: 62, r: 1.0, o: 0.4 },
  { x: 38, y: 62, r: 1.2, o: 0.6 }
];

function StarSpike({ size = 20, color = '#C084FC' }) {
  const half = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ overflow: 'visible' }}>
      <line x1="0" y1={half} x2={size} y2={half} stroke={color} strokeWidth="1.2" opacity="0.85" />
      <line x1={half} y1="0" x2={half} y2={size} stroke={color} strokeWidth="1.2" opacity="0.85" />
      <circle cx={half} cy={half} r="2" fill="#FFFFFF" />
      <circle cx={half} cy={half} r="4" fill={color} opacity="0.4" />
    </svg>
  );
}

function StackComponent({ hoveredTech: _hoveredTech, onTechHover }) {
  const [viewMode, setViewMode] = useState('universe'); // 'universe' | 'module' | 'detail'
  const [selectedModuleId, setSelectedModuleId] = useState('languages');
  const [selectedTechId, setSelectedTechId] = useState('javascript');
  const [isVisible, setIsVisible] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const sectionRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  // 1. IntersectionObserver: pause planetary CSS animations when section is off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Tab visibility: pause animations immediately when tab is in background
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // 3. Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setViewMode('universe');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeModule =
    UNIVERSE_MODULES.find((m) => m.id === selectedModuleId) || UNIVERSE_MODULES[0];

  const activeTech =
    ALL_TECHNOLOGIES_MAP[selectedTechId] ||
    activeModule.technologies[0] ||
    ALL_TECHNOLOGIES_MAP['javascript'];

  const handlePlanetSelect = (moduleId) => {
    setSelectedModuleId(moduleId);
    setViewMode('module');
    resetCursor();
    if (onTechHover) onTechHover(null);
  };

  const handleTechSelect = (tech) => {
    setSelectedTechId(tech.id);
    setViewMode('detail');
    if (onTechHover) onTechHover(tech.id);
  };

  const shouldPause = !isVisible || !isTabVisible;

  return (
    <section
      id="stack"
      ref={sectionRef}
      className={`portfolio-section stack-section ${viewMode !== 'universe' ? 'stack-has-modal' : ''} ${shouldPause ? 'stack-paused' : ''}`}
      aria-label="Coding Universe Stack"
    >
      <div className="stack-universe-ambient" aria-hidden="true" />

      {/* ====================================================================
          PERMANENT CODING UNIVERSE BACKGROUND (Always Visible & Preserved!)
          ==================================================================== */}
      <div className="stack-main-wrapper">
        {/* Header Block (Upper-Left) - Section 02 MY STACK */}
        <header className="stack-header-block">
          <SectionTitle
            index="02"
            title="TECH STACK"
            subtitle="CODING UNIVERSE"
            theme="dark"
          />
        </header>

        {/* Central Universe Stage */}
        <div className="universe-stage">
          {/* Background SVG: Concentric Orbits Tilted at -16° & Stars */}
          <svg
            className="universe-orbits-svg"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="orbit-purple-linear" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.38" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.32" />
              </linearGradient>
            </defs>

            {/* Natural Stars */}
            {STATIC_STARS.map((star, idx) => (
              <circle
                key={`star-${idx}`}
                cx={(star.x / 100) * 1000}
                cy={(star.y / 100) * 600}
                r={star.r}
                fill="#FFFFFF"
                opacity={star.o}
              />
            ))}

            {/* Concentric Tilted Orbits (Desktop: horizontal tilted; Mobile: portrait concentric) */}
            <g className="orbits-desktop" transform="rotate(-15.5 500 318)">
              <ellipse cx="500" cy="318" rx="190" ry="84" className="orbit-svg-ellipse-fine" />
              <ellipse cx="500" cy="318" rx="270" ry="120" className="orbit-svg-ellipse" />
              <ellipse
                cx="500"
                cy="318"
                rx="345"
                ry="153"
                className="orbit-svg-ellipse-highlight"
                stroke="url(#orbit-purple-linear)"
              />
              <ellipse cx="500" cy="318" rx="415" ry="184" className="orbit-svg-ellipse" />
              <ellipse cx="500" cy="318" rx="465" ry="206" className="orbit-svg-ellipse-fine" strokeDasharray="3 6" opacity="0.45" />

              {/* Subtle orbital glowing satellite beacons */}
              <circle cx="845" cy="318" r="1.6" fill="#FFFFFF" opacity="0.8" />
              <circle cx="155" cy="318" r="1.6" fill="#FFFFFF" opacity="0.8" />
              <circle cx="500" cy="165" r="1.4" fill="#C084FC" opacity="0.75" />
              <circle cx="500" cy="471" r="1.4" fill="#C084FC" opacity="0.75" />
            </g>

            {/* Mobile Portrait Concentric Orbits */}
            <g className="orbits-mobile">
              <ellipse cx="500" cy="300" rx="190" ry="165" className="orbit-svg-ellipse-fine" />
              <ellipse cx="500" cy="300" rx="290" ry="220" className="orbit-svg-ellipse" />
              <ellipse
                cx="500"
                cy="300"
                rx="360"
                ry="255"
                className="orbit-svg-ellipse-highlight"
                stroke="url(#orbit-purple-linear)"
              />
              <ellipse cx="500" cy="300" rx="420" ry="285" className="orbit-svg-ellipse-fine" strokeDasharray="3 6" opacity="0.45" />
            </g>
          </svg>

          {/* Background Glowing Star Flares */}
          {BACKGROUND_STAR_FLARES.map((star, idx) => (
            <div
              key={`flare-${idx}`}
              className="star-spike-wrap"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`
              }}
            >
              <StarSpike size={star.size} />
            </div>
          ))}

          {/* Central Visual: UMXIE STACK (Non-clickable graphic) */}
          <div
            className="central-planet-wrapper"
            aria-hidden="true"
          >
            {/* Equatorial Cosmic Ring with Glowing Beacon */}
            <div className="central-ring">
              <span className="central-ring-beacon" />
            </div>

            <div className="central-planet-sphere">
              <span className="central-planet-title">UMXIE</span>
              <span className="central-planet-sub">STACK</span>
            </div>
          </div>

          {/* The 8 Module Planet Nodes (Sphere + Ring + Label Locked Together!) */}
          <div className="planets-orbit-container">
            {PLANET_NODES.map((cfg) => {
              const isSelected = selectedModuleId === cfg.id;
              return (
                <div
                  key={cfg.id}
                  className={`planet-node ${cfg.bobClass} planet-node--${cfg.id} ${isSelected ? 'planet-node--selected' : ''}`}
                  style={{
                    '--desk-x': `${cfg.x}%`,
                    '--desk-y': `${cfg.y}%`,
                    '--mob-x': `${cfg.mobX}%`,
                    '--mob-y': `${cfg.mobY}%`,
                    left: `${cfg.x}%`,
                    top: `${cfg.y}%`
                  }}
                  onMouseEnter={() => setCursor('open', 'OPEN ↗')}
                  onMouseLeave={resetCursor}
                >
                  {/* Planet's Tilted Ring */}
                  <div className="planet-ring" aria-hidden="true" />

                  {/* 3D Planet Sphere */}
                  <button
                    className={`planet-sphere ${isSelected ? 'planet-sphere--selected' : ''}`}
                    onClick={() => handlePlanetSelect(cfg.id)}
                    aria-label={`Module ${cfg.num}: ${cfg.name}`}
                    aria-pressed={isSelected}
                  >
                    <CategoryIcon id={cfg.icon} size={24} />
                  </button>

                  {/* Label: 0X / NAME */}
                  <div
                    className={`node-label-container ${isSelected ? 'node-label--selected' : ''}`}
                    style={cfg.labelStyle}
                    onClick={() => handlePlanetSelect(cfg.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handlePlanetSelect(cfg.id);
                      }
                    }}
                    aria-label={`Select ${cfg.name}`}
                  >
                    <span className="node-num">{cfg.num}</span>
                    <span className="node-slash">/</span>
                    <span className="node-name">{cfg.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====================================================================
          FLOATING TRANSPARENT GLASS PANEL (When any planet is clicked)
          ==================================================================== */}
      {viewMode !== 'universe' && (
        <div
          className="universe-glass-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setViewMode('universe');
            }
          }}
        >
          <div className="universe-glass-card" role="dialog" aria-modal="true">
            {/* Top Navigation Row: Back Button & Circular Close Button */}
            <div className="glass-card-topbar">
              <button
                className="glass-nav-back-btn"
                onClick={() => {
                  if (viewMode === 'detail') {
                    setViewMode('module');
                  } else {
                    setViewMode('universe');
                  }
                }}
                aria-label={viewMode === 'detail' ? `Back to ${activeModule.name}` : 'Back to universe'}
              >
                <span className="glass-back-arrow">←</span> {viewMode === 'detail' ? `BACK TO ${activeModule.name}` : 'BACK TO UNIVERSE'}
              </button>

              <button
                className="glass-circular-close-btn"
                onClick={() => setViewMode('universe')}
                aria-label="Close panel"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="2" x2="10" y2="10" />
                  <line x1="10" y1="2" x2="2" y2="10" />
                </svg>
              </button>
            </div>

            {/* VIEW 2: MODULE GRID VIEW */}
            {viewMode === 'module' && (
              <div className="glass-module-content stack-view-fade">
                {/* Module Header Block with Glowing Module Planet on the left */}
                <div className="glass-module-header">
                  <div className="glass-module-planet-wrap">
                    <div className="glass-module-planet-ring" />
                    <div className="glass-module-planet-sphere">
                      <CategoryIcon id={activeModule.categoryIcon} size={28} />
                    </div>
                  </div>

                  <div className="glass-module-header-meta">
                    <div className="glass-module-num-tag">{activeModule.number} <span className="glass-module-slash">/</span> MODULE</div>
                    <h3 className="glass-module-title">{activeModule.name}</h3>
                    <p className="glass-module-subtitle">{activeModule.subtitle}</p>
                  </div>
                </div>

                {/* 3 Skill-Level Categorized Sections */}
                <div className="glass-categories-container">
                  {(activeModule.categories || []).map((cat, catIdx) => (
                    <section
                      key={cat.id || cat.title || catIdx}
                      className={`glass-category-section glass-category--tier-${cat.tier || catIdx + 1}`}
                      aria-labelledby={`cat-title-${activeModule.id}-${cat.id || catIdx}`}
                    >
                      <div className="glass-category-header">
                        <div className="glass-category-heading-wrap">
                          <span
                            className={`glass-category-dot glass-category-dot--tier-${cat.tier || catIdx + 1}`}
                            aria-hidden="true"
                          />
                          <h4
                            id={`cat-title-${activeModule.id}-${cat.id || catIdx}`}
                            className="glass-category-title"
                          >
                            {cat.title}
                          </h4>
                        </div>
                        <span className="glass-category-count" title={`${cat.technologies.length} skills in this category`}>
                          {cat.technologies.length}
                        </span>
                      </div>

                      <div className={`glass-tech-grid glass-tech-grid--tier-${cat.tier || catIdx + 1}`}>
                        {cat.technologies.map((tech) => (
                          <button
                            key={tech.id}
                            className={`glass-tech-card ${cat.tier === 1 ? 'glass-tech-card--tier1' : 'glass-tech-card--compact'}`}
                            onClick={() => handleTechSelect(tech)}
                            aria-label={`Explore ${tech.name}`}
                          >
                            <div className="glass-tech-card-icon">
                              <TechIcon id={tech.icon || tech.id} size={cat.tier === 1 ? 34 : 26} />
                            </div>
                            <span className="glass-tech-card-name">{tech.name}</span>
                          </button>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: TECHNOLOGY DETAIL VIEW (Level 2) */}
            {viewMode === 'detail' && (
              <div className="glass-detail-content stack-view-fade">
                <div className="glass-detail-header-row">
                  <div className="glass-detail-icon-wrap">
                    <TechIcon id={activeTech.icon || activeTech.id} size={44} />
                  </div>
                  <div>
                    <span className="glass-detail-tag">{activeModule.name} / {activeTech.categoryTitle || 'TECHNOLOGY'}</span>
                    <h3 className="glass-detail-title">{activeTech.name}</h3>
                  </div>
                </div>

                <p className="glass-detail-desc">{activeTech.description}</p>

                {activeTech.badges && (
                  <div className="glass-detail-badges">
                    {activeTech.badges.map((b, idx) => (
                      <span key={idx} className="glass-badge-pill">{b}</span>
                    ))}
                  </div>
                )}

                {activeTech.keyConcepts && (
                  <div className="glass-detail-section">
                    <div className="glass-detail-section-title">KEY CONCEPTS</div>
                    <div className="glass-detail-tags">
                      {activeTech.keyConcepts.map((concept, idx) => (
                        <span key={idx} className="glass-concept-pill">{concept}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(StackComponent);
