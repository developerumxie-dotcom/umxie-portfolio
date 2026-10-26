import React, { useRef, useState } from 'react';

export default function MagneticElement({
  children,
  strength = 8, // 5 - 12px range as specified in requirements
  className = '',
  as: Component = 'div',
  onMouseEnter,
  onMouseLeave,
  style = {},
  ...props
}) {
  const elementRef = useRef(null);

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
      elementRef.current.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;
      elementRef.current.style.transition = 'transform 0.1s ease-out';
    }
  };

  const handleMouseLeave = (e) => {
    if (elementRef.current) {
      elementRef.current.style.transform = 'translate3d(0, 0, 0)';
      elementRef.current.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    }
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  const handleMouseEnter = (e) => {
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  return (
    <Component
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        display: 'inline-block',
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
