import React, { useRef, useState } from 'react';

export default function MagneticElement({
  children,
  strength = 8, // 5 - 12px range as specified in requirements
  className = '',
  as: Component = 'div',
  ...props
}) {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!elementRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = elementRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Constrain pull to max strength
    const distance = Math.hypot(deltaX, deltaY);
    const maxDist = Math.max(width, height) / 2;

    if (distance < maxDist * 1.5) {
      const pullX = (deltaX / maxDist) * strength;
      const pullY = (deltaY / maxDist) * strength;
      setPosition({ x: pullX, y: pullY });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Component
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out',
        display: 'inline-block'
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
