import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes GSAP ScrollTrigger animations across the portfolio:
 * - Enter, Active, Exit state classes and camera triggers
 * - Project scroll transitions:
 *   Project 01: enters from depth (scale + opacity)
 *   Project 02: slides into position (x-transform + subtle rotation)
 *   Project 03: emerges from 3D environment (y-transform + clip-path)
 * - Experience timeline progress line drawing
 */
export function initScrollAnimations() {
  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return () => {};

  const triggers = [];

  // 1. Hero Content subtle fade & rise on scroll
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const heroTween = gsap.to(heroContent, {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom 40%',
        scrub: 0.6,
      },
      opacity: 0,
      y: -60,
      ease: 'power2.out'
    });
    triggers.push(heroTween.scrollTrigger);
  }

  // 2. About section reveal
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    const statementLines = aboutSection.querySelectorAll('.about-statement span');
    const aboutTween = gsap.from(statementLines, {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        end: 'top 35%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 1.0,
      ease: 'power3.out'
    });
    triggers.push(aboutTween.scrollTrigger);
  }

  // 3. Projects Cinematic Transitions
  // Project 01: Enters from depth (scale up + fade in)
  const proj1 = document.getElementById('project-01');
  if (proj1) {
    const p1Tween = gsap.fromTo(
      proj1.querySelector('.project-visual-side'),
      { scale: 0.88, opacity: 0.4 },
      {
        scrollTrigger: {
          trigger: proj1,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 0.8,
        },
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      }
    );
    triggers.push(p1Tween.scrollTrigger);
  }

  // Project 02: Slides into position
  const proj2 = document.getElementById('project-02');
  if (proj2) {
    const p2Tween = gsap.fromTo(
      proj2.querySelector('.project-visual-side'),
      { x: 70, opacity: 0.3 },
      {
        scrollTrigger: {
          trigger: proj2,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 0.8,
        },
        x: 0,
        opacity: 1,
        ease: 'power2.out'
      }
    );
    triggers.push(p2Tween.scrollTrigger);
  }

  // Project 03: Emerges from the 3D environment
  const proj3 = document.getElementById('project-03');
  if (proj3) {
    const p3Tween = gsap.fromTo(
      proj3.querySelector('.project-visual-side'),
      { y: 80, scale: 0.92, opacity: 0.3 },
      {
        scrollTrigger: {
          trigger: proj3,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 0.8,
        },
        y: 0,
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      }
    );
    triggers.push(p3Tween.scrollTrigger);
  }

  // 4. Experience timeline: Progressive Line Drawing
  const expSection = document.getElementById('experience');
  const progressFill = document.querySelector('.timeline-progress-fill');
  if (expSection && progressFill) {
    const expTween = gsap.fromTo(
      progressFill,
      { height: '0%' },
      {
        scrollTrigger: {
          trigger: expSection,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
        height: '100%',
        ease: 'none'
      }
    );
    triggers.push(expTween.scrollTrigger);

    // Stagger reveal of experience entries
    const expEntries = expSection.querySelectorAll('.experience-entry');
    const entryTween = gsap.from(expEntries, {
      scrollTrigger: {
        trigger: expSection,
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -30,
      stagger: 0.25,
      duration: 0.85,
      ease: 'power2.out'
    });
    triggers.push(entryTween.scrollTrigger);
  }

  // 5. Philosophy 4 Principles Horizontal Rows Reveal
  const philSection = document.getElementById('philosophy');
  if (philSection) {
    const rows = philSection.querySelectorAll('.principle-row');
    const philTween = gsap.from(rows, {
      scrollTrigger: {
        trigger: philSection,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 35,
      stagger: 0.15,
      duration: 0.9,
      ease: 'power3.out'
    });
    triggers.push(philTween.scrollTrigger);
  }

  // Refresh ScrollTrigger once DOM layout finishes settling
  ScrollTrigger.refresh();

  return () => {
    triggers.forEach((trigger) => trigger?.kill());
  };
}
