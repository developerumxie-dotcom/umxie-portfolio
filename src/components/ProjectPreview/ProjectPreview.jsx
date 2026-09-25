import React, { useState, useRef } from 'react';
import { useCursor } from '../Cursor/CursorContext';
import './ProjectPreview.css';

export default function ProjectPreview({
  project,
  onClick,
  isTransitioning = false,
  className = ''
}) {
  const { setCursor, resetCursor } = useCursor();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    // Subtle tilt: +/- 10 degrees max
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({
      x: normalizedX * 12,
      y: normalizedY * -12,
      imgX: normalizedX * -15,
      imgY: normalizedY * -15
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0, imgX: 0, imgY: 0 });
    resetCursor();
  };

  const handleMouseEnter = () => {
    setCursor('view', 'VIEW PROJECT →');
  };

  return (
    <div
      ref={frameRef}
      className={`project-preview-container ${isTransitioning ? 'project-preview--expanding' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateY(${offset.x || 0}deg) rotateX(${offset.y || 0}deg)`
      }}
      role="button"
      tabIndex={0}
      aria-label={`View detailed project architecture for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="project-preview-inner">
        <img
          src={project.image}
          alt={`${project.title} Interface preview`}
          className="project-preview-img"
          loading="lazy"
          style={{
            transform: `translate3d(${offset.imgX || 0}px, ${offset.imgY || 0}px, 0) scale(${isTransitioning ? 1.08 : 1.02})`
          }}
        />

        {/* Minimalist HUD overlay corners */}
        <div className="project-preview-hud-tag">
          <span>SPEC.V2 // 0{project.id}</span>
        </div>
      </div>
    </div>
  );
}
