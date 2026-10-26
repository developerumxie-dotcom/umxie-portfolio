import React, { useState } from 'react';
import { useCursor } from '../../components/Cursor/CursorContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FAQ_DATA } from '../../data/faq';
import './FAQ.css';

export default function FAQ({
  items = FAQ_DATA,
  title = 'Frequently Asked Questions',
  subtitle = 'TECHNICAL FAQS // CAPABILITIES & ARCHITECTURE',
  id = 'faq',
  className = ''
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const { setCursor, resetCursor } = useCursor();

  const handleMouseEnter = (index) => {
    setCursor('hover');
    setOpenIndex(index);
  };

  const handleMouseLeave = (index) => {
    resetCursor();
    setOpenIndex((current) => (current === index ? null : current));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      setOpenIndex(nextIndex);
      document.getElementById(`faq-trigger-${items[nextIndex].id || nextIndex}`)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      setOpenIndex(prevIndex);
      document.getElementById(`faq-trigger-${items[prevIndex].id || prevIndex}`)?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setOpenIndex(0);
      document.getElementById(`faq-trigger-${items[0].id || 0}`)?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastIndex = items.length - 1;
      setOpenIndex(lastIndex);
      document.getElementById(`faq-trigger-${items[lastIndex].id || lastIndex}`)?.focus();
    }
  };

  return (
    <section id={id} className={`portfolio-section faq-section ${className}`}>
      <div className="container">
        <SectionTitle
          index="06"
          title={title}
          subtitle={subtitle}
          theme="dark"
        />

        <div className="faq-wrapper">
          <div className="faq-list" role="presentation">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const triggerId = `faq-trigger-${item.id || index}`;
              const panelId = `faq-panel-${item.id || index}`;

              return (
                <div
                  key={item.id || index}
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <button
                    id={triggerId}
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenIndex(index)}
                    onFocus={() => handleMouseEnter(index)}
                    onBlur={() => handleMouseLeave(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <div className="faq-question-lead">
                      <span className="faq-number" aria-hidden="true">
                        {item.number || `6.${index + 1}`}
                      </span>
                      <span className="faq-question-text">{item.question}</span>
                    </div>

                    <span
                      className={`faq-icon-indicator ${isOpen ? 'faq-icon-indicator--open' : ''}`}
                      aria-hidden="true"
                    >
                      <span className="faq-icon-line faq-icon-line--h" />
                      <span className="faq-icon-line faq-icon-line--v" />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`faq-panel ${isOpen ? 'faq-panel--open' : ''}`}
                  >
                    <div className="faq-panel-inner">
                      <div className="faq-answer-content">
                        <p className="faq-answer-text">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
