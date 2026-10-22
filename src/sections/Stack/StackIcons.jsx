import React from 'react';

/**
 * High-fidelity SVG icons recreated cleanly for the Coding Universe Stack.
 * Guaranteed to be pixel-perfect, crisp on Retina displays, and zero external dependency risk.
 */

export function CategoryIcon({ id, className = '', size = 24 }) {
  switch (id) {
    case 'languages':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" strokeWidth="2" opacity="0.85" />
        </svg>
      );

    case 'frontend':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );

    case 'backend':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="2" y="3" width="20" height="5" rx="1.5" />
          <rect x="2" y="10" width="20" height="5" rx="1.5" />
          <rect x="2" y="17" width="20" height="5" rx="1.5" />
          <circle cx="6" cy="5.5" r="1" fill="currentColor" />
          <circle cx="6" cy="12.5" r="1" fill="currentColor" />
          <circle cx="6" cy="19.5" r="1" fill="currentColor" />
        </svg>
      );

    case 'databases':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );

    case 'cloud':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );

    case 'core_cs':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
          <path d="M12 5v14" />
        </svg>
      );

    case 'tools':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );

    case 'hardware':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );

    default:
      return null;
  }
}

export function TechIcon({ id, size = 36, className = '' }) {
  switch (id) {
    case 'javascript':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#F7DF1E" />
          <path
            d="M13.5 35.5c2.3 3.6 6 4 9.5 2 2.8-1.6 3.6-4.8 2.6-8.2-1.3-4.5-5.5-5.8-9-7.2-2.8-1.1-4.8-2.6-4.5-5.8.4-4 4.5-6.5 8.8-5.2 2.8.9 4.8 2.8 6 5.5l-4.5 2.8c-.8-1.6-1.9-2.5-3.8-2.5-1.8 0-3 .9-3 2.1 0 1.5 1.2 2.2 3.6 3.2 4.6 1.9 8.2 3.7 7.7 9.5-.5 5.5-4.8 8.4-10.2 8-4.4-.3-7.5-2.6-9.2-6.5l6-3.7z"
            fill="#000000"
            display="none"
          />
          {/* Exact JS badge font recreation */}
          <text
            x="24"
            y="33"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="26"
            fontWeight="900"
            fill="#000000"
            textAnchor="middle"
            letterSpacing="-1px"
          >
            JS
          </text>
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <defs>
            <linearGradient id="py-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#387EB8" />
              <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="py-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE873" />
              <stop offset="100%" stopColor="#FFD43B" />
            </linearGradient>
          </defs>
          <path
            d="M23.7 6c-8.8 0-8.2 3.8-8.2 3.8l.01 4h8.4v1.2H12.2s-5.6-.6-5.6 8.3c0 8.9 4.9 8.6 4.9 8.6h2.9v-4.1s-.2-4.9 4.8-4.9h8.3s4.7.1 4.7-4.6V10.7S32.8 6 23.7 6zm-4.7 2.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
            fill="url(#py-blue)"
          />
          <path
            d="M24.3 42c8.8 0 8.2-3.8 8.2-3.8l-.01-4h-8.4V33h11.7s5.6.6 5.6-8.3c0-8.9-4.9-8.6-4.9-8.6h-2.9v4.1s.2 4.9-4.8 4.9h-8.3s-4.7-.1-4.7 4.6v7.6s-.6 4.7 8.5 4.7zm4.7-2.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
            fill="url(#py-yellow)"
          />
        </svg>
      );

    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <path
            d="M17.5 35.8c0 0-2.3 1.2.8 1.6 3.7.5 5.8.4 10.3-.4 0 0 1.7 1.1 3.5 2-8 3.5-19.4 1.8-14.6-3.2z"
            fill="#E76F00"
          />
          <path
            d="M14.6 31.8c0 0-2.5 1.6.7 2.1 4.3.7 8.3.6 15-.8 0 0 1.2 1.2 2.3 1.8-10.4 3.7-23.7 2.1-18-3.1z"
            fill="#E76F00"
          />
          <path
            d="M26.2 23.8c2.4 2.8-1.2 5.3-1.2 5.3s6.3-3.2 3.4-7.2c-2.7-3.7-4.8-5.6 6.5-11.9-8.7 3.3-13.8 7.3-8.7 13.8z"
            fill="#5382A1"
          />
          <path
            d="M34.8 33.7c4.6-2.2 4.9-5.1 1.6-6-3.2-.8-4.6.4-4.6.4s1.2-.8 3.1-.3c1.7.4 2.1 2.2-1.3 3.6-4.9 2-7.8 2.2-14.4 1.5 0 0-1.2 1.1-2 1.6 8.5 1.2 13.5 1.3 17.6-.8z"
            fill="#5382A1"
          />
          <path
            d="M21.2 18.2c-4.4-4.8 3.2-9.4 3.2-9.4s-6.7 2.2-4.8 6.5c1.7 3.9 6.2 4.9 7.6 7.4 1.8 3.4-3.5 6.1-3.5 6.1s4.5-2.2 3.2-5.4c-1.5-3.6-7.8-3.4-5.7-5.2z"
            fill="#E76F00"
          />
        </svg>
      );

    case 'cpp':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="#00599C" rx="4" />
          <text
            x="24"
            y="30"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="15"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            C/C++
          </text>
        </svg>
      );

    case 'typescript':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#3178C6" />
          <text
            x="24"
            y="33"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="24"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            TS
          </text>
        </svg>
      );

    case 'go':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#00ADD8" />
          <text
            x="24"
            y="32"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="22"
            fontWeight="900"
            fontStyle="italic"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            GO
          </text>
        </svg>
      );

    case 'rust':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <circle cx="24" cy="24" r="20" fill="#241B18" stroke="#E66528" strokeWidth="2" />
          <circle cx="24" cy="24" r="14" fill="#E66528" />
          <text
            x="24"
            y="31"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="20"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            R
          </text>
        </svg>
      );

    case 'kotlin':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <defs>
            <linearGradient id="kt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F52FF" />
              <stop offset="50%" stopColor="#C711E1" />
              <stop offset="100%" stopColor="#E4485D" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="8" fill="#181524" />
          <polygon points="10,10 38,10 24,24 38,38 10,38" fill="url(#kt-grad)" />
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" />
          <ellipse
            cx="24"
            cy="24"
            rx="18"
            ry="7"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(60 24 24)"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="18"
            ry="7"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(120 24 24)"
          />
          <circle cx="24" cy="24" r="3.5" fill="#61DAFB" />
        </svg>
      );

    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="8,4 40,4 36.8,38 24,42 11.2,38" fill="#E44D26" />
          <polygon points="24,7 37.3,7 34.6,36.5 24,39.5" fill="#F16529" />
          <text
            x="24"
            y="29"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="22"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            5
          </text>
        </svg>
      );

    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="8,4 40,4 36.8,38 24,42 11.2,38" fill="#1572B6" />
          <polygon points="24,7 37.3,7 34.6,36.5 24,39.5" fill="#33A9DC" />
          <text
            x="24"
            y="29"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="22"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            3
          </text>
        </svg>
      );

    case 'angular':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,4 42,10 39,36 24,44 9,36 6,10" fill="#DD0031" />
          <polygon points="24,4 39,36 24,44" fill="#C3002F" />
          <text
            x="24"
            y="31"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="24"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            A
          </text>
        </svg>
      );

    case 'nodejs':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="#339933" />
          <text
            x="24"
            y="29"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="13"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            node
          </text>
        </svg>
      );

    case 'express':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#1C1826" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.5" />
          <text
            x="24"
            y="31"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="15"
            fontWeight="900"
            fill="#D8B4FE"
            textAnchor="middle"
            letterSpacing="1px"
          >
            EXX
          </text>
        </svg>
      );

    case 'rest':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#0C0A14" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.5" />
          <text
            x="24"
            y="23"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="12"
            fontWeight="900"
            fill="#C084FC"
            textAnchor="middle"
          >
            REST
          </text>
          <text
            x="24"
            y="35"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="#A855F7"
            textAnchor="middle"
          >
            APIs
          </text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <path
            d="M24 4c-1.5 5.2-9 12.3-9 20.5 0 9 5.8 15.5 9 15.5s9-6.5 9-15.5C33 16.3 25.5 9.2 24 4z"
            fill="#47A248"
          />
          <path
            d="M24 4v36c.3 0 9-6.5 9-15.5C33 16.3 25.5 9.2 24 4z"
            fill="#499D4A"
          />
          <path
            d="M24 40c-.8 2-1.5 3-1.5 4h3c0-1-.7-2-1.5-4z"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </svg>
      );

    case 'postgresql':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#141829" />
          <path
            d="M24 10c-7.7 0-14 5.5-14 13 0 4.5 2.5 8.5 6.5 10.8V38h4v-3.2c1.1.2 2.3.2 3.5.2 7.7 0 14-5.5 14-13S31.7 10 24 10z"
            fill="#336791"
          />
          <circle cx="18" cy="20" r="2" fill="#FFFFFF" />
          <path d="M26 22c2 1 5 1 7-1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'redis':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,6 42,16 24,26 6,16" fill="#DC382D" />
          <polygon points="6,16 24,26 24,42 6,32" fill="#B7281E" />
          <polygon points="42,16 24,26 24,42 42,32" fill="#8C1C14" />
        </svg>
      );

    case 'aws':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#14141E" />
          <text
            x="24"
            y="26"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="15"
            fontWeight="900"
            fill="#FF9900"
            textAnchor="middle"
          >
            aws
          </text>
          <path
            d="M14 31c6 4 14 4 20 0"
            stroke="#FF9900"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#0D1A2D" />
          <path
            d="M10 27h28c0 7-6 11-14 11s-14-4-14-11z"
            fill="#2496ED"
          />
          <rect x="15" y="21" width="4" height="4" fill="#2496ED" />
          <rect x="21" y="21" width="4" height="4" fill="#2496ED" />
          <rect x="27" y="21" width="4" height="4" fill="#2496ED" />
          <rect x="21" y="15" width="4" height="4" fill="#2496ED" />
          <circle cx="34" cy="29" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'linux':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#14131D" />
          <ellipse cx="24" cy="26" rx="10" ry="13" fill="#FFFFFF" />
          <ellipse cx="24" cy="28" rx="7" ry="10" fill="#000000" />
          <circle cx="21" cy="18" r="2" fill="#000000" />
          <circle cx="27" cy="18" r="2" fill="#000000" />
          <polygon points="21,21 27,21 24,25" fill="#FFA500" />
          <ellipse cx="18" cy="40" rx="4" ry="2" fill="#FFA500" />
          <ellipse cx="30" cy="40" rx="4" ry="2" fill="#FFA500" />
        </svg>
      );

    case 'cicd':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#101726" />
          <circle cx="18" cy="24" r="8" fill="none" stroke="#00C49F" strokeWidth="3" />
          <circle cx="30" cy="24" r="8" fill="none" stroke="#22D3EE" strokeWidth="3" />
        </svg>
      );

    case 'dsa':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <circle cx="24" cy="14" r="3.5" fill="#D8B4FE" />
          <circle cx="14" cy="32" r="3.5" fill="#C084FC" />
          <circle cx="34" cy="32" r="3.5" fill="#C084FC" />
          <line x1="24" y1="14" x2="14" y2="32" stroke="#A855F7" strokeWidth="2" />
          <line x1="24" y1="14" x2="34" y2="32" stroke="#A855F7" strokeWidth="2" />
        </svg>
      );

    case 'os':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <rect x="14" y="14" width="20" height="20" rx="3" fill="#241B38" stroke="#C084FC" strokeWidth="2" />
          <rect x="18" y="18" width="12" height="12" fill="#A855F7" opacity="0.6" />
          <line x1="18" y1="8" x2="18" y2="14" stroke="#D8B4FE" strokeWidth="2" />
          <line x1="30" y1="8" x2="30" y2="14" stroke="#D8B4FE" strokeWidth="2" />
          <line x1="18" y1="34" x2="18" y2="40" stroke="#D8B4FE" strokeWidth="2" />
          <line x1="30" y1="34" x2="30" y2="40" stroke="#D8B4FE" strokeWidth="2" />
        </svg>
      );

    case 'networks':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <rect x="16" y="12" width="16" height="11" rx="2" fill="none" stroke="#D8B4FE" strokeWidth="2" />
          <line x1="24" y1="23" x2="24" y2="33" stroke="#A855F7" strokeWidth="2" />
          <line x1="12" y1="33" x2="36" y2="33" stroke="#A855F7" strokeWidth="2" />
          <circle cx="12" cy="33" r="2.5" fill="#C084FC" />
          <circle cx="24" cy="33" r="2.5" fill="#C084FC" />
          <circle cx="36" cy="33" r="2.5" fill="#C084FC" />
        </svg>
      );

    case 'oop':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <polygon points="24,10 36,17 24,24 12,17" fill="#C084FC" />
          <polygon points="12,17 24,24 24,38 12,31" fill="#9333EA" />
          <polygon points="36,17 24,24 24,38 36,31" fill="#7E22CE" />
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#14111D" />
          <path
            d="M38 21.5l-14-14a3 3 0 0 0-4.2 0l-12.3 12.3a3 3 0 0 0 0 4.2l14 14a3 3 0 0 0 4.2 0l12.3-12.3a3 3 0 0 0 0-4.2z"
            fill="#F05032"
          />
          <circle cx="19" cy="24" r="3" fill="#FFFFFF" />
          <circle cx="29" cy="19" r="3" fill="#FFFFFF" />
          <circle cx="29" cy="29" r="3" fill="#FFFFFF" />
          <line x1="19" y1="24" x2="29" y2="19" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="29" y1="19" x2="29" y2="29" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );

    case 'jest':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#1C141E" />
          <path
            d="M12 28c0-8 6-14 14-14 6 0 10 3 10 3l-3 4s-3-2-7-2c-5 0-9 4-9 9 0 6 5 9 10 9 4 0 6-2 6-2v-4h-6v-4h11v11s-4 3-11 3c-7 0-14-5-14-13z"
            fill="#C21325"
          />
        </svg>
      );

    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#1F1511" />
          <circle cx="24" cy="24" r="16" fill="#FF6C37" />
          <polygon points="20,18 32,24 20,30" fill="#FFFFFF" />
        </svg>
      );

    case 'vscode':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#0D1525" />
          <path
            d="M34 8l-18 14 6 4 12-8V8z"
            fill="#0065A9"
          />
          <path
            d="M16 22L8 16l-2 2 6 6-6 6 2 2 8-6 18 14V8L16 22z"
            fill="#007ACC"
          />
          <path
            d="M34 40l-12-8-6 4 18 14V40z"
            fill="#1F8AD2"
          />
        </svg>
      );

    case 'systems_arch':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <rect x="12" y="12" width="24" height="24" rx="2" fill="none" stroke="#D8B4FE" strokeWidth="2" />
          <rect x="16" y="16" width="7" height="7" fill="#A855F7" />
          <rect x="25" y="16" width="7" height="7" fill="#A855F7" />
          <rect x="16" y="25" width="7" height="7" fill="#A855F7" />
          <rect x="25" y="25" width="7" height="7" fill="#A855F7" />
        </svg>
      );

    case 'memory_mgmt':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <rect x="8" y="18" width="32" height="12" rx="2" fill="#1F1832" stroke="#C084FC" strokeWidth="2" />
          <rect x="12" y="21" width="5" height="6" fill="#D8B4FE" />
          <rect x="19" y="21" width="5" height="6" fill="#D8B4FE" />
          <rect x="26" y="21" width="5" height="6" fill="#D8B4FE" />
          <rect x="33" y="21" width="5" height="6" fill="#D8B4FE" />
        </svg>
      );

    case 'system_bus':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <line x1="8" y1="18" x2="40" y2="18" stroke="#D8B4FE" strokeWidth="2" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="#C084FC" strokeWidth="2" />
          <line x1="8" y1="30" x2="40" y2="30" stroke="#A855F7" strokeWidth="2" />
          <circle cx="16" cy="18" r="2" fill="#FFFFFF" />
          <circle cx="28" cy="24" r="2" fill="#FFFFFF" />
          <circle cx="36" cy="30" r="2" fill="#FFFFFF" />
        </svg>
      );

    case 'embedded':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          <rect x="14" y="10" width="20" height="28" rx="2" fill="#201535" stroke="#D8B4FE" strokeWidth="1.8" />
          <circle cx="24" cy="16" r="3" fill="#A855F7" />
          <line x1="18" y1="24" x2="30" y2="24" stroke="#C084FC" strokeWidth="2" />
          <line x1="18" y1="28" x2="30" y2="28" stroke="#C084FC" strokeWidth="2" />
          <line x1="18" y1="32" x2="30" y2="32" stroke="#C084FC" strokeWidth="2" />
        </svg>
      );

    case 'php':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <ellipse cx="24" cy="24" rx="20" ry="12" fill="#777BB4" />
          <ellipse cx="24" cy="24" rx="17" ry="10" fill="#4F5B93" />
          <text
            x="24"
            y="29"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="14"
            fontWeight="900"
            fontStyle="italic"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            php
          </text>
        </svg>
      );

    case 'csharp':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="#68217A" />
          <polygon points="24,8 38,16 38,32 24,40 10,32 10,16" fill="#9B4993" />
          <text
            x="24"
            y="30"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="16"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            C#
          </text>
        </svg>
      );

    case 'swift':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#F05138" />
          <path
            d="M34.8 29.5c-3.8-3.6-8.5-6.8-13.6-7.8 7.3 2.8 11.2 7.7 13.6 7.8M13.2 13.5c4.5 4.8 8.6 11 9.8 17-5.5-3.8-10.4-9.8-9.8-17zm13 8.3c4 2.5 7.8 6.2 9.8 10.7-3.8-1.5-8.5-2.2-12.8-1.8 1.5-2.8 2.2-5.9 3-8.9z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'dart':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="12,12 24,4 36,16 24,28" fill="#0175C2" />
          <polygon points="12,12 24,28 12,36" fill="#02569B" />
          <polygon points="24,28 36,16 40,32 28,44" fill="#00B4AB" />
          <polygon points="12,36 24,28 28,44 16,44" fill="#29B6F6" />
        </svg>
      );

    case 'ruby':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="14,10 34,10 42,20 24,40 6,20" fill="#CC0000" />
          <polygon points="14,10 34,10 24,20" fill="#FF4444" />
          <polygon points="6,20 14,10 24,20" fill="#990000" />
          <polygon points="42,20 34,10 24,20" fill="#E60000" />
          <polygon points="6,20 24,40 24,20" fill="#B30000" />
          <polygon points="42,20 24,40 24,20" fill="#730000" />
        </svg>
      );

    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#00758F" />
          <ellipse cx="24" cy="14" rx="14" ry="5" fill="#E97B00" />
          <path d="M10 14v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M10 22v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <text
            x="24"
            y="41"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="10"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            SQL
          </text>
        </svg>
      );

    case 'bash':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#293138" stroke="#4EAA25" strokeWidth="1.5" />
          <polyline points="12,18 20,24 12,30" fill="none" stroke="#4EAA25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="24" y1="30" x2="34" y2="30" stroke="#4EAA25" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'more':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <circle cx="14" cy="24" r="3.5" fill="#C084FC" />
          <circle cx="24" cy="24" r="3.5" fill="#C084FC" />
          <circle cx="34" cy="24" r="3.5" fill="#C084FC" />
        </svg>
      );

    case 'nextjs':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <circle cx="24" cy="24" r="22" fill="#000000" stroke="#333333" strokeWidth="1.5" />
          <path d="M16 14v20M24 14l12 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 14v10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'vue':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,38 4,8 14,8 24,24 34,8 44,8" fill="#42B883" />
          <polygon points="24,38 14,8 19,8 24,17 29,8 34,8" fill="#35495E" />
        </svg>
      );

    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#0B1120" />
          <path
            d="M16 22c1.5-3 4-4.5 7.5-4.5 5 0 6.5 4 9 4.5 2 .5 4-.5 5.5-2.5-1.5 3-4 4.5-7.5 4.5-5 0-6.5-4-9-4.5-2-.5-4 .5-5.5 2.5zm-6 8c1.5-3 4-4.5 7.5-4.5 5 0 6.5 4 9 4.5 2 .5 4-.5 5.5-2.5-1.5 3-4 4.5-7.5 4.5-5 0-6.5-4-9-4.5-2-.5-4 .5-5.5 2.5z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'sass':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#CD6799" />
          <text
            x="24"
            y="30"
            fontFamily="'Inter', 'Brush Script MT', cursive, sans-serif"
            fontSize="18"
            fontWeight="bold"
            fontStyle="italic"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Sass
          </text>
        </svg>
      );

    case 'threejs':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#000000" stroke="#333333" strokeWidth="1" />
          <polygon points="24,8 40,36 8,36" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="24" y1="8" x2="24" y2="36" stroke="#FFFFFF" strokeWidth="1.5" />
          <polygon points="24,20 32,36 16,36" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      );

    case 'vite':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,44 6,10 42,10" fill="#41D1FF" />
          <polygon points="24,44 14,10 34,10" fill="#BD34FE" />
          <polygon points="24,12 18,24 24,24 22,34 30,22 24,22" fill="#FFD026" />
        </svg>
      );

    case 'redux':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#1C1826" />
          <circle cx="24" cy="24" r="6" fill="#764ABC" />
          <circle cx="16" cy="18" r="4" fill="#764ABC" opacity="0.8" />
          <circle cx="32" cy="18" r="4" fill="#764ABC" opacity="0.8" />
          <circle cx="24" cy="34" r="4" fill="#764ABC" opacity="0.8" />
        </svg>
      );

    case 'webpack':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#1C2733" />
          <polygon points="24,8 38,16 38,32 24,40 10,32 10,16" fill="#1C78C0" stroke="#566B7F" strokeWidth="1" />
          <polygon points="24,14 33,19 33,29 24,34 15,29 15,19" fill="#8ED6FB" />
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#00618A" />
          <text
            x="24"
            y="29"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="11"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            MySQL
          </text>
        </svg>
      );

    case 'sqlite':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#003B57" />
          <text
            x="24"
            y="28"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="10"
            fontWeight="900"
            fill="#00ADEF"
            textAnchor="middle"
          >
            SQLite
          </text>
        </svg>
      );

    case 'prisma':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#0C344B" />
          <polygon points="12,38 24,8 36,38" fill="none" stroke="#2D3748" strokeWidth="2" />
          <polygon points="16,36 24,14 32,36" fill="#5A67D8" />
        </svg>
      );

    case 'firebase':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="10,34 16,12 24,24" fill="#FFA000" />
          <polygon points="38,34 24,8 20,18" fill="#F57C00" />
          <polygon points="10,34 38,34 24,42" fill="#FFCA28" />
        </svg>
      );

    case 'supabase':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#1C1C1C" />
          <path d="M22 6L8 26h14L16 42l24-24H26l6-12H22z" fill="#3ECF8E" />
        </svg>
      );

    case 'kubernetes':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,6 39,15 39,33 24,42 9,33 9,15" fill="#326CE5" />
          <circle cx="24" cy="24" r="8" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="24" y1="16" x2="24" y2="32" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="16" y1="24" x2="32" y2="24" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );

    case 'githubactions':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#2088FF" />
          <circle cx="24" cy="24" r="14" fill="#FFFFFF" />
          <polygon points="21,18 30,24 21,30" fill="#2088FF" />
        </svg>
      );

    case 'terraform':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="12,8 22,14 22,26 12,20" fill="#5C4EE5" />
          <polygon points="24,15 34,21 34,33 24,27" fill="#844FBA" />
          <polygon points="24,29 34,35 34,47 24,41" fill="#5C4EE5" opacity="0.8" />
          <polygon points="12,22 22,28 22,40 12,34" fill="#00BC7F" />
        </svg>
      );

    case 'nginx':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="#009639" />
          <text
            x="24"
            y="31"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="22"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            N
          </text>
        </svg>
      );

    case 'gcp':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#FFFFFF" />
          <path d="M24 16c-4 0-7 3-7 7 0 .5 0 1 .2 1.5C14 25 12 28 12 31c0 3.3 2.7 6 6 6h16c3.9 0 7-3.1 7-7 0-3.5-2.6-6.4-6-6.9-.2-4.5-4-8.1-9-8.1z" fill="#4285F4" />
          <circle cx="21" cy="25" r="4" fill="#EA4335" />
          <circle cx="28" cy="25" r="4" fill="#FBBC05" />
          <circle cx="24" cy="30" r="3" fill="#34A853" />
        </svg>
      );

    case 'arduino':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#00979D" />
          <circle cx="18" cy="24" r="8" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="30" cy="24" r="8" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="15" y1="24" x2="21" y2="24" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="27" y1="24" x2="33" y2="24" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="30" y1="21" x2="30" y2="27" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );

    case 'raspberrypi':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#C51A4A" />
          <ellipse cx="24" cy="28" rx="12" ry="10" fill="#A2153D" />
          <circle cx="20" cy="26" r="3" fill="#FFFFFF" />
          <circle cx="28" cy="26" r="3" fill="#FFFFFF" />
          <path d="M20 16c2-4 6-4 8 0" stroke="#75A928" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'assembly':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#141124" stroke="#A855F7" strokeWidth="1.5" />
          <text
            x="24"
            y="24"
            fontFamily="'Courier New', monospace"
            fontSize="11"
            fontWeight="900"
            fill="#D8B4FE"
            textAnchor="middle"
          >
            ASM
          </text>
          <text
            x="24"
            y="36"
            fontFamily="'Courier New', monospace"
            fontSize="10"
            fontWeight="bold"
            fill="#4ADE80"
            textAnchor="middle"
          >
            0101
          </text>
        </svg>
      );

    case 'cpu_arch':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#110E1C" stroke="#A855F7" strokeWidth="1.5" />
          <rect x="14" y="14" width="20" height="20" rx="3" fill="#201535" stroke="#C084FC" strokeWidth="2" />
          <text
            x="24"
            y="28"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontSize="11"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            CPU
          </text>
        </svg>
      );

    case 'figma':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="8" fill="#1E1E1E" />
          <rect x="15" y="8" width="9" height="9" rx="4.5" fill="#F24E1E" />
          <rect x="24" y="8" width="9" height="9" rx="4.5" fill="#FF7262" />
          <rect x="15" y="17" width="9" height="9" rx="4.5" fill="#A259FF" />
          <circle cx="28.5" cy="21.5" r="4.5" fill="#1ABCFE" />
          <rect x="15" y="26" width="9" height="9" rx="4.5" fill="#0ACF83" />
        </svg>
      );

    default:
      return (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: '6px',
            backgroundColor: '#1C162E',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D8B4FE',
            fontWeight: 'bold',
            fontSize: '12px'
          }}
        >
          {id.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
