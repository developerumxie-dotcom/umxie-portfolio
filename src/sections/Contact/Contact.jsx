import React, { useState } from 'react';
import { useCursor } from '../../components/Cursor/CursorContext';
import MagneticElement from '../../components/Cursor/MagneticElement';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TechnicalLabel from '../../components/TechnicalLabel/TechnicalLabel';
import './Contact.css';

export default function Contact() {
  const { setCursor, resetCursor } = useCursor();
  const [copiedToast, setCopiedToast] = useState(false);

  const contactLinks = [
    {
      service: 'EMAIL',
      target: 'developerumxie@gmail.com',
      url: 'mailto:developerumxie@gmail.com',
      isEmail: true
    },
    {
      service: 'GITHUB',
      target: 'github.com/dev.umxie',
      url: 'https://github.com/developerumxie-dotcom',
      isEmail: false
    },
    {
      service: 'LINKEDIN',
      target: 'linkedin.com/in/muhammed-umair',
      url: 'https://www.linkedin.com/in/muhammed-umair-23540939b/',
      isEmail: false
    }
  ];

  const handleCopyEmail = (e, email) => {
    navigator.clipboard?.writeText(email);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="container">
        <SectionTitle
          index="07"
          title="CONTACT"
          subtitle="GET IN TOUCH // INQUIRIES & COLLABORATIONS"
          theme="light"
        />

        <div className="contact-grid">
          {/* Left Column: Huge Headline & Direct Inquiries */}
          <div className="contact-left-col">
            <h2 className="contact-headline">
              <span>LET'S BUILD</span>
              <span>SOMETHING</span>
              <span>USEFUL.</span>
            </h2>

            <p className="contact-sub-statement">
              Have an idea, project or opportunity?
            </p>

            <div className="contact-focus-line">
              KERALA, INDIA · BACKEND ENGINEERING · FULL-STACK DEVELOPMENT
            </div>

            {/* Premium Purple LET'S TALK Button */}
            <div className="contact-cta-wrap">
              <MagneticElement strength={8}>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=developerumxie@gmail.com&su=Let%27s%20Discuss%20a%20Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-talk-btn"
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  aria-label="Let's talk - Send email to developerumxie@gmail.com via Gmail"
                >
                  <span className="contact-talk-text">Let's talk</span>
                </a>
              </MagneticElement>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <TechnicalLabel
                statusDot={true}
                statusColor="var(--accent-purple)"
                label="RESPONSE TIME"
                value="< 24H"
                theme="light"
              />
              <span className="mono-label" style={{ color: 'var(--text-dark-muted)' }}>
                UTC+05:30
              </span>
            </div>
          </div>

          {/* Right Column: Large Typographic Links */}
          <div className="contact-links-list">
            {contactLinks.map((link) => (
              <MagneticElement key={link.service} strength={12}>
                <a
                  href={link.url}
                  target={link.isEmail ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link-item"
                  onClick={link.isEmail ? (e) => handleCopyEmail(e, link.target) : undefined}
                  onMouseEnter={() => setCursor('open', 'OPEN ↗')}
                  onMouseLeave={resetCursor}
                  aria-label={`${link.service}: ${link.target}`}
                >
                  <div className="contact-link-label-group">
                    <span className="contact-link-service">{link.service}</span>
                    <span className="contact-link-target">{link.target}</span>
                  </div>

                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              </MagneticElement>
            ))}
          </div>
        </div>
      </div>

      {/* Copy Toast Notification */}
      {copiedToast && (
        <div className="contact-toast" role="status" aria-live="polite">
          <span>✓ EMAIL COPIED TO CLIPBOARD (developerumxie@gmail.com)</span>
        </div>
      )}
    </section>
  );
}
