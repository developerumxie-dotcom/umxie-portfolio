import React from 'react';
import './TechnicalLabel.css';

export default function TechnicalLabel({
  label = '',
  value = '',
  statusDot = false,
  statusColor = '#FFFFFF',
  className = '',
  theme = 'dark', // 'dark' | 'light'
  ...props
}) {
  return (
    <div className={`tech-label-component tech-label--${theme} ${className}`} {...props}>
      {statusDot && (
        <span
          className="tech-label-dot"
          style={{ backgroundColor: statusColor }}
          aria-hidden="true"
        />
      )}
      {label && <span className="tech-label-name">{label}</span>}
      {value && <span className="tech-label-val">{value}</span>}
    </div>
  );
}
