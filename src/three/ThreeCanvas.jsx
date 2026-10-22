import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CameraController } from './Camera/CameraController';
import { LightingSetup } from './Lighting/LightingSetup';
import { ParticleSystem } from './Particles/ParticleSystem';
import { DigitalArchitecture } from './DigitalArchitecture';

export default function ThreeCanvas({
  activeSection = 'hero',
  hoveredTech = null
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraControllerRef = useRef(null);
  const rendererRef = useRef(null);
  const lightingRef = useRef(null);
  const particlesRef = useRef(null);
  const architectureRef = useRef(null);
  const frameIdRef = useRef(null);

  const activeSectionRef = useRef(activeSection);
  const hoveredTechRef = useRef(hoveredTech);
  const mouseRef = useRef({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const scrollRef = useRef({ scrollY: 0, velocity: 0 });

  useEffect(() => {
    activeSectionRef.current = activeSection;
    if (architectureRef.current) {
      architectureRef.current.setSectionState(activeSection);
    }
  }, [activeSection]);

  useEffect(() => {
    hoveredTechRef.current = hoveredTech;
    if (architectureRef.current) {
      architectureRef.current.setHoveredTechnology(hoveredTech);
    }
  }, [hoveredTech]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    // 2. Camera & Controller
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0.4, 0.1, 5.8);
    camera.lookAt(0.8, 0.1, 0);
    const cameraController = new CameraController(camera);
    cameraControllerRef.current = cameraController;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio to 1.5 to save 50%+ GPU fill rate
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.82;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting Rig
    const lighting = new LightingSetup(scene);
    lightingRef.current = lighting;

    // 5. Particles
    const particles = new ParticleSystem(scene);
    particlesRef.current = particles;

    // 6. Digital Architecture
    const architecture = new DigitalArchitecture(scene, camera);
    architectureRef.current = architecture;

    // Cached layout metrics to completely eliminate layout thrashing
    let cachedMetrics = {
      aboutTop: window.innerHeight,
      aboutHeight: window.innerHeight,
      aboutEnd: window.innerHeight * 2,
      totalScrollable: 1000
    };

    const updateCachedMetrics = () => {
      const aboutElem = document.getElementById('about');
      if (aboutElem) {
        const top = aboutElem.offsetTop;
        const height = aboutElem.offsetHeight;
        cachedMetrics = {
          aboutTop: top,
          aboutHeight: height,
          aboutEnd: top + height,
          totalScrollable: Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        };
      }
    };
    updateCachedMetrics();

    // Resize Handler
    const handleResize = () => {
      if (!cameraControllerRef.current || !rendererRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      cameraControllerRef.current.handleResize(width, height);
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      updateCachedMetrics();
    };

    // Internal mouse listener without triggering React re-renders
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.normalizedY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Internal passive scroll velocity calculation
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let scrollTimeout = null;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const now = performance.now();
      const dt = Math.max(now - lastScrollTime, 16);
      const dy = currentY - lastScrollY;
      scrollRef.current.scrollY = currentY;
      scrollRef.current.velocity = Math.abs(dy / dt);
      lastScrollY = currentY;
      lastScrollTime = now;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollRef.current.velocity = 0;
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      // 1. Pause immediately when browser tab is hidden to prevent computer heating
      if (document.hidden) return;

      const curSection = activeSectionRef.current;
      const isHeroOrAbout = curSection === 'hero' || curSection === 'about';

      // 2. The 3D globe & perspective grid belong exclusively to Hero and About.
      // Outside of Hero/About, clear the canvas buffer completely and skip rendering so nothing ever freezes on other pages.
      if (!isHeroOrAbout) {
        if (rendererRef.current) {
          rendererRef.current.clear();
        }
        return;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      const curMouse = mouseRef.current;
      const curVelocity = scrollRef.current.velocity;

      const { aboutTop, aboutHeight, aboutEnd, totalScrollable } = cachedMetrics;
      const heroAboutProgress = aboutTop > 0 ? Math.min(Math.max(scrollY / aboutTop, 0), 1) : 0;
      const scrollThroughAbout = aboutEnd > 0 ? Math.min(Math.max(scrollY / aboutEnd, 0), 1) : 0;
      const docProgress = totalScrollable > 0 ? Math.min(Math.max(scrollY / totalScrollable, 0), 1) : 0;

      // Camera update
      if (cameraControllerRef.current) {
        cameraControllerRef.current.update(
          curSection,
          curMouse,
          docProgress,
          heroAboutProgress
        );
      }

      const isLightSection = curSection === 'projects' || curSection === 'contact';

      // Update Particles
      if (particlesRef.current) {
        particlesRef.current.update(
          time,
          delta,
          { x: curMouse.normalizedX, y: curMouse.normalizedY },
          curVelocity,
          isLightSection
        );
      }

      // Update Architecture
      if (architectureRef.current) {
        architectureRef.current.update(
          time,
          delta,
          { x: curMouse.normalizedX, y: curMouse.normalizedY },
          docProgress,
          curVelocity,
          heroAboutProgress,
          curSection,
          scrollThroughAbout,
          scrollY,
          aboutTop,
          aboutHeight
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      if (lightingRef.current) lightingRef.current.dispose();
      if (particlesRef.current) particlesRef.current.dispose();
      if (architectureRef.current) architectureRef.current.dispose();
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, []);


  // Sync hovered tech to 3D network
  useEffect(() => {
    if (architectureRef.current) {
      architectureRef.current.setHoveredTechnology(hoveredTech);
    }
  }, [hoveredTech]);

  const isThreeVisible = activeSection === 'hero' || activeSection === 'about';

  return (
    <div
      ref={containerRef}
      id="three-canvas-root"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: isThreeVisible ? 1 : 0,
        visibility: isThreeVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.4s ease, visibility 0.4s ease'
      }}
      aria-hidden="true"
    />
  );
}
