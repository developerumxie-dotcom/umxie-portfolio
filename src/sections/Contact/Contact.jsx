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
      target: 'umxie.dev@gmail.com',
      url: 'mailto:umxie.dev@gmail.com',
      isEmail: true
    },
    {
      service: 'GITHUB',
      target: 'github.com/umxie',
      url: 'https://github.com/umxie',
      isEmail: false
    },
    {
      service: 'LINKEDIN',
      target: 'linkedin.com/in/umxie',
      url: 'https://linkedin.com/in/umxie',
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
          index="06"
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
              Have an idea, project or opportunity?<br />
              Let's talk.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <TechnicalLabel
                statusDot={true}
                statusColor="#111111"
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
          <span>✓ EMAIL COPIED TO CLIPBOARD (umxie.dev@gmail.com)</span>
        </div>
      )}
    </section>
  );
}
