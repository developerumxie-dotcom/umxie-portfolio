import React, { useState, useEffect } from 'react';
import { CursorProvider } from './components/Cursor/CursorContext';
import { useSound } from './components/Sound/SoundContext';
import CustomCursor from './components/Cursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import LoadingScreen from './sections/Loading/LoadingScreen';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Stack from './sections/Stack/Stack';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Philosophy from './sections/Philosophy/Philosophy';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ThreeCanvas from './three/ThreeCanvas';
import { useMousePosition } from './hooks/useMousePosition';
import { useScrollProgress } from './hooks/useScrollProgress';
import { initScrollAnimations } from './animations/scrollAnimations';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { onSystemReady } = useSound();

  const mousePosition = useMousePosition();
  const { progress, velocity } = useScrollProgress();

  // Active section tracking via robust viewport calculation
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'stack', 'work', 'experience', 'philosophy', 'contact'];
    const sectionMap = {
      hero: 'hero',
      about: 'about',
      stack: 'stack',
      work: 'projects',
      experience: 'experience',
      philosophy: 'philosophy',
      contact: 'contact'
    };

    const handleScroll = () => {
      // When at or near top of the page, hero is always cleanly active
      if (window.scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      // Check which section intersects the primary viewing band of the viewport
      const viewportTrigger = window.innerHeight * 0.45;
      let matchedSection = 'hero';

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        if (rect.top <= viewportTrigger && rect.bottom >= viewportTrigger) {
          matchedSection = sectionMap[id] || id;
        }
      });

      setActiveSection(matchedSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoaded]);

  // Initialize GSAP ScrollTrigger animations when loading completes
  useEffect(() => {
    if (!isLoaded) return;
    const cleanupScroll = initScrollAnimations();
    return () => {
      if (cleanupScroll) cleanupScroll();
    };
  }, [isLoaded]);

  return (
    <CursorProvider>
      <div className="app-wrapper">
        {/* Film grain overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Global Interactive Custom Cursor */}
        <CustomCursor />

        {/* Loading Screen Experience */}
        <LoadingScreen
          onLoaded={() => setIsLoaded(true)}
          onSystemReady={onSystemReady}
        />

        {/* Background 3D Digital Architecture WebGL Canvas */}
        <ThreeCanvas
          activeSection={activeSection}
          scrollProgress={progress}
          scrollVelocity={velocity}
          hoveredTech={hoveredTech}
          mousePosition={mousePosition}
        />

        {/* Fixed Minimalist Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Content Flow */}
        <main className="content-flow">
          <Hero mousePosition={mousePosition} />
          <About />
          <Stack
            hoveredTech={hoveredTech}
            onTechHover={setHoveredTech}
          />
          <Projects />
          <Experience />
          <Philosophy />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </CursorProvider>
  );
}
