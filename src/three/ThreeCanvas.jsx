import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CameraController } from './Camera/CameraController';
import { LightingSetup } from './Lighting/LightingSetup';
import { ParticleSystem } from './Particles/ParticleSystem';
import { DigitalArchitecture } from './DigitalArchitecture';

export default function ThreeCanvas({
  activeSection = 'hero',
  scrollProgress = 0,
  scrollVelocity = 0,
  hoveredTech = null,
  mousePosition
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraControllerRef = useRef(null);
  const rendererRef = useRef(null);
  const lightingRef = useRef(null);
  const particlesRef = useRef(null);
  const architectureRef = useRef(null);
  const frameIdRef = useRef(null);

  const propsRef = useRef({
    activeSection,
    scrollProgress,
    scrollVelocity,
    hoveredTech,
    mousePosition
  });

  useEffect(() => {
    propsRef.current = {
      activeSection,
      scrollProgress,
      scrollVelocity,
      hoveredTech,
      mousePosition
    };
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    // 2. Camera & Controller - start at exact Screenshot 3 coordinates
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0.8, 0.2, 6.2);
    camera.lookAt(1.4, 0.2, 0);
    const cameraController = new CameraController(camera);
    cameraControllerRef.current = cameraController;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
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

    // Resize Handler
    const handleResize = () => {
      if (!cameraControllerRef.current || !rendererRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      cameraControllerRef.current.handleResize(width, height);
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Read current dynamic props from propsRef to avoid React stale closures
      const {
        activeSection: curSection,
        scrollVelocity: curVelocity,
        mousePosition: curMouse
      } = propsRef.current;

      // Real-time zero-latency scroll progress calculation for Hero -> About travel
      const scrollY = window.scrollY;
      const aboutElem = document.getElementById('about');
      const aboutTop = aboutElem ? aboutElem.offsetTop : window.innerHeight;
      const heroAboutProgress = aboutTop > 0 ? Math.min(Math.max(scrollY / aboutTop, 0), 1) : 0;

      // Overall document scroll progress
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const docProgress = totalScrollable > 0 ? Math.min(Math.max(scrollY / totalScrollable, 0), 1) : 0;

      // Camera update with continuous scroll interpolation
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
          { x: curMouse?.normalizedX || 0, y: curMouse?.normalizedY || 0 },
          curVelocity,
          isLightSection
        );
      }

      // Update Architecture
      if (architectureRef.current) {
        architectureRef.current.update(
          time,
          delta,
          { x: curMouse?.normalizedX || 0, y: curMouse?.normalizedY || 0 },
          docProgress,
          curVelocity
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener('resize', handleResize);
      if (lightingRef.current) lightingRef.current.dispose();
      if (particlesRef.current) particlesRef.current.dispose();
      if (architectureRef.current) architectureRef.current.dispose();
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Sync section state changes to 3D models
  useEffect(() => {
    if (architectureRef.current) {
      architectureRef.current.setSectionState(activeSection, scrollProgress);
    }
  }, [activeSection, scrollProgress]);

  // Sync hovered tech to 3D network
  useEffect(() => {
    if (architectureRef.current) {
      architectureRef.current.setHoveredTechnology(hoveredTech);
    }
  }, [hoveredTech]);

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
        transition: 'opacity 0.6s ease'
      }}
      aria-hidden="true"
    />
  );
}
