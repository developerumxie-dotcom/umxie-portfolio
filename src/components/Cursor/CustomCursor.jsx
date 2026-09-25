import React, { useEffect, useRef } from 'react';
import { useCursor } from './CursorContext';
import './CustomCursor.css';

export default function CustomCursor() {
  const { cursorType, cursorText } = useCursor();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lerp loop for the trailing outer ring
    const render = () => {
      // Lerp factor
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const isBadge = ['view', 'explore', 'open', 'sound'].includes(cursorType);

  let displayText = '';
  if (cursorType === 'view') displayText = cursorText || 'VIEW';
  else if (cursorType === 'explore') displayText = cursorText || 'EXPLORE';
  else if (cursorType === 'open') displayText = cursorText || 'OPEN ↗';
  else if (cursorType === 'sound') displayText = cursorText || 'SOUND';

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      <div
        ref={dotRef}
        className={`cursor-dot ${isBadge ? 'cursor-dot--hidden' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring cursor-ring--${cursorType}`}
      >
        {isBadge && <span className="cursor-text">{displayText}</span>}
      </div>
    </div>
  );
}
