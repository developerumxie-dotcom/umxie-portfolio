import React from 'react';
import MagneticElement from '../Cursor/MagneticElement';
import { useCursor } from '../Cursor/CursorContext';
import './Button.css';

export default function Button({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'text'
  magnetic = true,
  magneticStrength = 8,
  cursorType = 'hover',
  cursorText = '',
  arrow = false,
  className = '',
  ariaLabel,
  ...props
}) {
  const { setCursor, resetCursor } = useCursor();

  const handleMouseEnter = () => {
    if (cursorType) {
      setCursor(cursorType, cursorText);
    }
  };

  const handleMouseLeave = () => {
    resetCursor();
  };

  const buttonClasses = `btn-component btn-${variant} ${className}`;

  const content = (
    <>
      <span className="btn-label">{children}</span>
      {arrow && <span className="btn-arrow" aria-hidden="true">→</span>}
    </>
  );

  const innerElement = href ? (
    <a
      href={href}
      target={target}
      rel={rel}
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );

  if (magnetic) {
    return (
      <MagneticElement strength={magneticStrength}>
        {innerElement}
      </MagneticElement>
    );
  }

  return innerElement;
}
