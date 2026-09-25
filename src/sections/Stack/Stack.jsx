import React, { useState } from 'react';
import { TECHNOLOGIES } from '../../data/technologies';
import { useCursor } from '../../components/Cursor/CursorContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TechnicalLabel from '../../components/TechnicalLabel/TechnicalLabel';
import './Stack.css';

// 2D Normalized positions (%) for the interactive constellation view
const NODE_POSITIONS = {
  nodejs: { left: 46, top: 22 },
  react: { left: 22, top: 20 },
  express: { left: 72, top: 22 },
  javascript: { left: 14, top: 46 },
  mongodb: { left: 78, top: 46 },
  multer: { left: 62, top: 52 },
  git: { left: 20, top: 72 },
  jwt: { left: 36, top: 82 },
  aws: { left: 52, top: 86 },
  rest: { left: 70, top: 74 }
};

export default function Stack({ hoveredTech, onTechHover }) {
  const [selectedId, setSelectedId] = useState('nodejs');
  const { setCursor, resetCursor } = useCursor();

  const activeTechId = hoveredTech || selectedId;
  const currentTech = TECHNOLOGIES.find((t) => t.id === activeTechId) || TECHNOLOGIES[0];

  const handleNodeEnter = (techId) => {
    setSelectedId(techId);
    if (onTechHover) onTechHover(techId);
    setCursor('hover');
  };

  const handleNodeLeave = () => {
    if (onTechHover) onTechHover(null);
    resetCursor();
  };

  return (
    <section id="stack" className="portfolio-section stack-section">
      <div className="container">
        <SectionTitle
          index="02"
          title="TECH STACK"
          subtitle="DISTRIBUTED TOPOLOGY // 10 ACTIVE NODES"
          theme="dark"
        />

        <div className="stack-layout">
          {/* Left: 2D Interactive Constellation Graph */}
          <div className="stack-constellation-container">
            {/* SVG Connecting Lines */}
            <svg className="stack-canvas-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              {TECHNOLOGIES.flatMap((tech) => {
                const startPos = NODE_POSITIONS[tech.id];
                if (!startPos) return [];

                return tech.connections.map((targetId) => {
                  const targetPos = NODE_POSITIONS[targetId];
                  if (!targetPos || tech.id > targetId) return null;

                  const isConnected =
                    (activeTechId === tech.id && tech.connections.includes(targetId)) ||
                    (activeTechId === targetId && TECHNOLOGIES.find(t => t.id === targetId)?.connections.includes(tech.id));

                  const isMuted = activeTechId && !isConnected;

                  return (
                    <line
                      key={`${tech.id}-${targetId}`}
                      x1={`${startPos.left}%`}
                      y1={`${startPos.top}%`}
                      x2={`${targetPos.left}%`}
                      y2={`${targetPos.top}%`}
                      className={`stack-svg-line ${
                        isConnected ? 'stack-svg-line--active' : ''
                      } ${isMuted ? 'stack-svg-line--muted' : ''}`}
                    />
                  );
                });
              })}
            </svg>

            {/* Interactive HTML Node Pills */}
            <div className="stack-nodes-layer">
              {TECHNOLOGIES.map((tech) => {
                const pos = NODE_POSITIONS[tech.id];
                if (!pos) return null;

                const isSelected = activeTechId === tech.id;
                const isConnected = currentTech?.connections.includes(tech.id);
                const isMuted = activeTechId && !isSelected && !isConnected;

                let nodeClass = 'stack-node-pill';
                if (isSelected) nodeClass += ' stack-node-pill--selected';
                else if (isConnected) nodeClass += ' stack-node-pill--connected';
                else if (isMuted) nodeClass += ' stack-node-pill--muted';

                return (
                  <button
                    key={tech.id}
                    className={nodeClass}
                    style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                    onMouseEnter={() => handleNodeEnter(tech.id)}
                    onMouseLeave={handleNodeLeave}
                    onClick={() => setSelectedId(tech.id)}
                    aria-label={`Technology node: ${tech.name}`}
                  >
                    <span>{tech.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Technical HUD Information Card */}
          <div className="stack-detail-panel">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="stack-detail-category">{currentTech.category}</span>
                <TechnicalLabel statusDot={true} statusColor="#FFFFFF" label="STATUS" value="ONLINE" />
              </div>
              <h3 className="stack-detail-title">{currentTech.name}</h3>
              <p className="stack-detail-desc">{currentTech.description}</p>
              <div className="stack-detail-notes">
                {currentTech.details}
              </div>
            </div>

            <div>
              <div className="stack-detail-connections-title">
                Connected Architecture:
              </div>
              <div className="stack-detail-connections-tags">
                {currentTech.connections.map((connId) => {
                  const connTech = TECHNOLOGIES.find((t) => t.id === connId);
                  return (
                    <span key={connId} className="stack-detail-conn-pill">
                      {connTech ? connTech.name : connId}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
