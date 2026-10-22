import React, { useState, useEffect, useMemo, useRef, memo } from 'react';
import { UNIVERSE_MODULES, ALL_TECHNOLOGIES_MAP } from './stackData';
import { CategoryIcon, TechIcon } from './StackIcons';
import { useCursor } from '../../components/Cursor/CursorContext';
import './Stack.css';

/**
 * 8 Module Planets configuration.
 * Coordinates are percentage of the universe stage (cx: 50%, cy: 53.5%).
 * Leader lines & labels are relative to each planet center (0, 0), locking them with 100% precision!
 */
const PLANET_NODES = [
  {
    id: 'languages',
    num: '01',
    name: 'LANGUAGES',
    icon: 'languages',
    x: 50,
    y: 26.5,
    mobX: 50,
    mobY: 13,
    bobClass: 'planet-bob-1',
    labelStyle: { top: '-46px', left: '50%', transform: 'translateX(-50%)' },
    leader: { x1: 0, y1: -26, x2: 0, y2: -15, dotX: 0, dotY: -15 }
  },
  {
    id: 'frontend',
    num: '02',
    name: 'FRONTEND',
    icon: 'frontend',
    x: 65.5,
    y: 33.5,
    mobX: 79,
    mobY: 25,
    bobClass: 'planet-bob-2',
    labelStyle: { top: '-28px', left: '56px' },
    leader: { x1: 52, y1: -18, x2: 26, y2: -8, dotX: 26, dotY: -8 }
  },
  {
    id: 'backend',
    num: '03',
    name: 'BACKEND',
    icon: 'backend',
    x: 74,
    y: 50.5,
    mobX: 83,
    mobY: 50,
    bobClass: 'planet-bob-3',
    labelStyle: { top: '50%', left: '64px', transform: 'translateY(-50%)' },
    leader: { x1: 60, y1: 0, x2: 34, y2: 0, dotX: 34, dotY: 0 }
  },
  {
    id: 'databases',
    num: '04',
    name: 'DATABASES',
    icon: 'databases',
    x: 67.5,
    y: 69,
    mobX: 79,
    mobY: 75,
    bobClass: 'planet-bob-4',
    labelStyle: { top: '50%', left: '64px', transform: 'translateY(-50%)' },
    leader: { x1: 60, y1: 0, x2: 34, y2: 0, dotX: 34, dotY: 0 }
  },
  {
    id: 'cloud',
    num: '05',
    name: 'CLOUD & DEVOPS',
    icon: 'cloud',
    x: 50,
    y: 79.5,
    mobX: 50,
    mobY: 87,
    bobClass: 'planet-bob-5',
    labelStyle: { top: '48px', left: '24px' },
    leader: { x1: 22, y1: 44, x2: 10, y2: 15, dotX: 10, dotY: 15 }
  },
  {
    id: 'core_cs',
    num: '06',
    name: 'CORE CS',
    icon: 'core_cs',
    x: 35,
    y: 72.5,
    mobX: 21,
    mobY: 75,
    bobClass: 'planet-bob-6',
    labelStyle: { top: '50%', right: '64px', transform: 'translateY(-50%)' },
    leader: { x1: -60, y1: 0, x2: -34, y2: 0, dotX: -34, dotY: 0 }
  },
  {
    id: 'tools',
    num: '07',
    name: 'TOOLS & TESTING',
    icon: 'tools',
    x: 27.5,
    y: 53.5,
    mobX: 17,
    mobY: 50,
    bobClass: 'planet-bob-7',
    labelStyle: { top: '50%', right: '64px', transform: 'translateY(-50%)' },
    leader: { x1: -60, y1: 0, x2: -34, y2: 0, dotX: -34, dotY: 0 }
  },
  {
    id: 'hardware',
    num: '08',
    name: 'SYSTEMS & HARDWARE',
    icon: 'hardware',
    x: 33.5,
    y: 35.5,
    mobX: 21,
    mobY: 25,
    bobClass: 'planet-bob-8',
    labelStyle: { top: '-28px', right: '56px' },
    leader: { x1: -52, y1: -18, x2: -26, y2: -8, dotX: -26, dotY: -8 }
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

const SyntaxCodeViewer = React.memo(function SyntaxCodeViewer({ code, language = 'javascript' }) {
  const renderedLines = useMemo(() => {
    const lines = code.split('\n');
    const tokenRegex = /(\b(?:const|let|var|return|function|import|from|export|default|class|new|if|else|def|public|static|void|int|using|namespace|SELECT|FROM|WHERE|ORDER|BY|CREATE|TABLE|package)\b|`[^`]*`|"[^"]*"|'[^']*'|\/\/[^\n]*|#\s[^\n]*|\b(?:console|log|greet|Math|print|println|System|fmt)\b)/g;

    return lines.map((line, idx) => {
      const parts = line.split(tokenRegex);
      return (
        <div key={idx} className="code-line">
          {parts.map((part, pIdx) => {
            if (['const', 'let', 'var', 'return', 'function', 'import', 'from', 'export', 'default', 'class', 'new', 'if', 'else', 'def', 'public', 'static', 'void', 'int', 'using', 'namespace', 'SELECT', 'FROM', 'WHERE', 'ORDER', 'BY', 'CREATE', 'TABLE', 'package'].includes(part)) {
              return <span key={pIdx} className="code-token-keyword">{part}</span>;
            }
            if (part.startsWith('`') || part.startsWith('"') || part.startsWith("'")) {
              return <span key={pIdx} className="code-token-string">{part}</span>;
            }
            if (part.startsWith('//') || part.startsWith('#')) {
              return <span key={pIdx} className="code-token-comment">{part}</span>;
            }
            if (['console', 'log', 'greet', 'print', 'println', 'System', 'fmt'].includes(part)) {
              return <span key={pIdx} className="code-token-func">{part}</span>;
            }
            return part;
          })}
        </div>
      );
    });
  }, [code]);

  return (
    <pre className="code-pre-block">
      <code>{renderedLines}</code>
    </pre>
  );
});

function StackComponent({ hoveredTech: _hoveredTech, onTechHover }) {
  const [viewMode, setViewMode] = useState('universe'); // 'universe' | 'module' | 'detail'
  const [selectedModuleId, setSelectedModuleId] = useState('languages');
  const [selectedTechId, setSelectedTechId] = useState('javascript');
  const [copied, setCopied] = useState(false);
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

  const handleRelatedSelect = (relatedId) => {
    if (ALL_TECHNOLOGIES_MAP[relatedId]) {
      setSelectedTechId(relatedId);
      const modId = ALL_TECHNOLOGIES_MAP[relatedId].moduleId;
      if (modId) setSelectedModuleId(modId);
    }
  };

  const handleCopyCode = async () => {
    if (!activeTech?.codeExample) return;
    try {
      await navigator.clipboard.writeText(activeTech.codeExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
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
        {/* Header Block (Upper-Left) */}
        <header className="stack-header-block">
          <div className="stack-index-tag">
            02 <span className="stack-index-tag-sub">/ TECH STACK</span>
          </div>
          <h2 className="stack-main-title">
            CODING <span className="stack-title-purple">UNIVERSE</span>
          </h2>
          <div className="stack-sub-tagline">EXPLORE MY TECHNOLOGY ECOSYSTEM</div>
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

          {/* The 8 Module Planet Nodes (Sphere + Ring + Leader Line + Label Locked Together!) */}
          {PLANET_NODES.map((cfg) => {
            return (
              <div
                key={cfg.id}
                className={`planet-node ${cfg.bobClass} planet-node--${cfg.id}`}
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
                  className="planet-sphere"
                  onClick={() => handlePlanetSelect(cfg.id)}
                  aria-label={`Module ${cfg.num}: ${cfg.name}`}
                >
                  <CategoryIcon id={cfg.icon} size={24} />
                </button>

                {/* Locked Leader Line from Label to Ring */}
                <svg
                  className="node-leader-svg"
                  width="300"
                  height="300"
                  viewBox="-150 -150 300 300"
                  style={{ position: 'absolute', top: -150, left: -150, pointerEvents: 'none', overflow: 'visible' }}
                  aria-hidden="true"
                >
                  <line
                    x1={cfg.leader.x1}
                    y1={cfg.leader.y1}
                    x2={cfg.leader.x2}
                    y2={cfg.leader.y2}
                    className="node-leader-line"
                  />
                  <circle
                    cx={cfg.leader.dotX}
                    cy={cfg.leader.dotY}
                    r="2"
                    className="node-leader-dot"
                  />
                </svg>

                {/* Label: 0X / NAME */}
                <div
                  className="node-label-container"
                  style={cfg.labelStyle}
                  onClick={() => handlePlanetSelect(cfg.id)}
                  role="button"
                  tabIndex={0}
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

                {/* 3-Row Technology Grid matching reference image */}
                <div className="glass-tech-grid-wrapper">
                  {/* Row 1: 4 Large Featured Cards */}
                  <div className="glass-tech-grid-featured">
                    {activeModule.technologies.filter(t => t.isFeatured).map((tech) => (
                      <button
                        key={tech.id}
                        className="glass-tech-card glass-tech-card--featured"
                        onClick={() => handleTechSelect(tech)}
                        aria-label={`Explore ${tech.name}`}
                      >
                        <div className="glass-tech-card-icon">
                          <TechIcon id={tech.id} size={44} />
                        </div>
                        <span className="glass-tech-card-name">{tech.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Secondary Technologies */}
                  <div className="glass-tech-grid-secondary">
                    {activeModule.technologies.filter(t => !t.isFeatured).map((tech) => (
                      <button
                        key={tech.id}
                        className="glass-tech-card glass-tech-card--secondary"
                        onClick={() => handleTechSelect(tech)}
                        aria-label={`Explore ${tech.name}`}
                      >
                        <div className="glass-tech-card-icon">
                          <TechIcon id={tech.id} size={30} />
                        </div>
                        <span className="glass-tech-card-name">{tech.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: TECHNOLOGY DETAIL VIEW (Level 2) */}
            {viewMode === 'detail' && (
              <div className="glass-detail-content stack-view-fade">
                <div className="glass-detail-grid">
                  <div className="glass-detail-left">
                    <div className="glass-detail-header-row">
                      <div className="glass-detail-icon-wrap">
                        <TechIcon id={activeTech.id} size={40} />
                      </div>
                      <div>
                        <span className="glass-detail-tag">{activeModule.name} / TECHNOLOGY</span>
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

                    {activeTech.relatedTechs && (
                      <div className="glass-detail-section">
                        <div className="glass-detail-section-title">RELATED TECHNOLOGIES</div>
                        <div className="glass-related-row">
                          {activeTech.relatedTechs.map((relId) => {
                            const relTech = ALL_TECHNOLOGIES_MAP[relId];
                            const relName = relTech ? relTech.name : relId;
                            return (
                              <button
                                key={relId}
                                className="glass-related-card"
                                onClick={() => handleRelatedSelect(relId)}
                              >
                                <TechIcon id={relId} size={18} />
                                <span>{relName}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="glass-detail-right">
                    <div className="glass-code-editor">
                      <div className="glass-code-topbar">
                        <span className="glass-code-filename">
                          {activeTech.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.
                          {activeTech.id === 'python' ? 'py' : activeTech.id === 'cpp' ? 'cpp' : activeTech.id === 'java' ? 'java' : activeTech.id === 'html' ? 'html' : activeTech.id === 'css' ? 'css' : 'js'}
                        </span>
                        <button
                          className="glass-copy-btn"
                          onClick={handleCopyCode}
                        >
                          {copied ? (
                            <span style={{ color: '#4ADE80' }}>✓ COPIED!</span>
                          ) : (
                            <span>COPY CODE</span>
                          )}
                        </button>
                      </div>
                      <SyntaxCodeViewer
                        code={activeTech.codeExample || '// Code snippet available'}
                        language={activeTech.id === 'python' ? 'python' : 'javascript'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(StackComponent);
