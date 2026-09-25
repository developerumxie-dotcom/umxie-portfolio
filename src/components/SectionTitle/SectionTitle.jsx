import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({
  index = '01',
  title = '',
  subtitle = '',
  theme = 'dark', // 'dark' | 'light'
  className = '',
  ...props
}) {
  return (
    <div className={`section-header-block section-header-block--${theme} ${className}`} {...props}>
      <div className="section-meta-wrapper">
        <span className="section-index-badge">{index}</span>
        <h2 className="section-headline">{title}</h2>
      </div>
      {subtitle && <span className="section-subtitle-tag">{subtitle}</span>}
    </div>
  );
}
