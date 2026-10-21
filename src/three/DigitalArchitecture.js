import * as THREE from 'three';
import { HomeCodingUniverse } from './Universe/HomeCodingUniverse';
import { FloorGrid } from './Universe/FloorGrid';

/**
 * DigitalArchitecture
 * 
 * Central Three.js manager implementing the cinematic scroll-based transition:
 * 1. Move left: As user scrolls down from Home, the entire 3D globe animation (globe + 
 *    orbiting backend symbols + code panels) moves smoothly toward the left side.
 * 2. Zoom out: Gradually shrinks to a smaller size while moving left.
 * 3. Transition: At the left side and minimum size, smoothly reverses direction with zero jerk.
 * 4. Move right: Moves across the screen toward the right side, gradually zooming back in.
 * 5. Final position & End: Moves completely to the right side at full size (never reduced in size).
 *    At the end, glides completely off-screen to the right at 100% full scale.
 * 
 * Preserves the 3D model, purple lighting, symbol circular orbit, continuous breathing zoom,
 * and floor grid, moving and scaling everything as one unified entity.
 */
export class DigitalArchitecture {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    // 1. Unified 3D Animation Unit (Globe + Orbit System + Code Panels + 6 Backend Symbols)
    this.heroGroup = new THREE.Group();
    this.group.add(this.heroGroup);
    this.homeUniverse = new HomeCodingUniverse(this.camera);
    this.heroGroup.add(this.homeUniverse.group);

    // 2. Perspective Ground Grid
    this.floorGrid = new FloorGrid(60);
    this.scene.add(this.floorGrid.group);

    // Initial position based on screen width
    const pos = this.getPositions();
    this.currentX = pos.rightX;
    this.currentScrollScale = 1.0;
    this.currentScrollZ = 0.0;
  }

  getPositions() {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1440;
    let rightX, leftX, finalRightX;

    if (width < 640) {
      rightX = 0.20;
      leftX = -0.85;
      finalRightX = 0.35;
    } else if (width < 768) {
      rightX = 0.45;
      leftX = -1.15;
      finalRightX = 0.55;
    } else if (width < 1024) {
      rightX = 1.45;
      leftX = -1.85;
      finalRightX = 1.55;
    } else if (width < 1440) {
      rightX = 2.40;
      leftX = -2.35;
      finalRightX = 2.55;
    } else {
      rightX = 2.58;
      leftX = -2.55;
      finalRightX = 2.75;
    }

    return { rightX, leftX, finalRightX };
  }

  setHoveredTechnology(_techId) {
    // No-op
  }

  update(
    time,
    delta,
    mouse,
    _docProgress,
    scrollVelocity,
    _heroAboutProgress = 0,
    _curSection = 'hero',
    _scrollThroughAbout = 0,
    scrollY,
    aboutTop,
    aboutHeight
  ) {
    // 1. Continuous smooth breathing zoom loop (~8.7s cycle)
    const zoomCadence = 0.72;
    const zoomPhase = (Math.sin(time * zoomCadence) + 1.0) * 0.5;
    const loopZoomScale = 1.0 - zoomPhase * 0.075;
    const loopZoomZ = -zoomPhase * 0.45;

    // 2. Real-time scroll measurement
    const actualScrollY = (typeof scrollY === 'number')
      ? scrollY
      : (typeof window !== 'undefined' ? window.scrollY : 0);
    const actualAboutTop = (typeof aboutTop === 'number' && aboutTop > 0)
      ? aboutTop
      : (typeof window !== 'undefined' ? window.innerHeight : 900);
    const actualAboutHeight = (typeof aboutHeight === 'number' && aboutHeight > 0)
      ? aboutHeight
      : (typeof window !== 'undefined' ? window.innerHeight : 900);

    // Scroll inflection and arrival boundaries
    const midScroll = actualAboutTop * 0.58;
    const endScroll = actualAboutTop + actualAboutHeight * 0.18;

    // Normalized progress p: 0.0 (Home) -> 0.5 (Left & Min size) -> 1.0 (Right of About & Full size)
    let p = 0;
    if (actualScrollY <= 0) {
      p = 0;
    } else if (actualScrollY < midScroll) {
      const t1 = actualScrollY / midScroll;
      const e1 = t1 * t1 * (3 - 2 * t1); // Cubic Hermite smoothstep
      p = e1 * 0.5;
    } else if (actualScrollY < endScroll) {
      const t2 = (actualScrollY - midScroll) / (endScroll - midScroll);
      const e2 = t2 * t2 * (3 - 2 * t2); // Cubic Hermite smoothstep
      p = 0.5 + e2 * 0.5;
    } else {
      p = 1.0;
    }

    // Coordinates for responsive positions
    const { rightX, leftX, finalRightX } = this.getPositions();
    const minScale = 0.50; // Smaller size when zoomed out at the left
    const minZ = -1.6;     // Move backward for enhanced 3D zoom out

    let targetX, targetScale, targetZ;

    if (p <= 0.5) {
      // Phase 1: Move left & Zoom out
      const u1 = p / 0.5;
      const k1 = u1 * u1 * (3 - 2 * u1);
      targetX = THREE.MathUtils.lerp(rightX, leftX, k1);
      targetScale = THREE.MathUtils.lerp(1.0, minScale, k1);
      targetZ = THREE.MathUtils.lerp(0.0, minZ, k1);
    } else {
      // Phase 2: Smooth turnaround, Move right & Zoom in to final full-size position completely on right
      const u2 = (p - 0.5) / 0.5;
      const k2 = u2 * u2 * (3 - 2 * u2);
      targetX = THREE.MathUtils.lerp(leftX, finalRightX, k2);
      targetScale = THREE.MathUtils.lerp(minScale, 1.0, k2);
      targetZ = THREE.MathUtils.lerp(minZ, 0.0, k2);
    }

    // At the end: move completely to the right side without reducing the size
    const exitStart = actualAboutTop + actualAboutHeight * 0.80;
    const exitEnd = actualAboutTop + actualAboutHeight * 1.15;
    let isExitedOffscreen = false;

    if (actualScrollY > exitStart) {
      const exitP = Math.min((actualScrollY - exitStart) / (exitEnd - exitStart), 1.0);
      const exitEase = exitP * exitP * (3 - 2 * exitP);

      // Move completely off-screen to the right (+6.0 units further right on desktop)
      const width = typeof window !== 'undefined' ? window.innerWidth : 1440;
      const offscreenDist = width < 768 ? 3.5 : 6.0;
      targetX += exitEase * offscreenDist;

      // DO NOT reduce size: targetScale remains at full size (1.0)
      if (exitP >= 1.0) {
        isExitedOffscreen = true;
      }
    }

    // Frame lerping ensures zero-jerk, silky-smooth motion across trackpads and mousewheels
    const lerpFactor = Math.min(delta * 7.5, 0.18);
    this.currentX += (targetX - this.currentX) * lerpFactor;
    this.currentScrollScale += (targetScale - this.currentScrollScale) * lerpFactor;
    this.currentScrollZ += (targetZ - this.currentScrollZ) * lerpFactor;

    // 3. Update Home Coding Universe as one unified entity
    if (this.homeUniverse) {
      const isVisible = !isExitedOffscreen && actualScrollY < exitEnd + 100;
      this.heroGroup.visible = isVisible;

      if (isVisible) {
        this.homeUniverse.update(time, delta, mouse, scrollVelocity);

        // Apply synchronized scroll position, zoom, and breathing loop
        this.heroGroup.position.x = this.currentX;
        this.heroGroup.position.y = 0;
        this.heroGroup.position.z = this.currentScrollZ + loopZoomZ;

        // Preserve 100% full scale at the end (not reduced)
        const totalScale = this.currentScrollScale * loopZoomScale;
        this.heroGroup.scale.set(totalScale, totalScale, totalScale);
      }
    }

    // 4. Update Perspective Floor Grid to track planet position
    if (this.floorGrid) {
      this.floorGrid.update(time);
      this.floorGrid.setPlanetPosition(this.currentX);
    }
  }

  setSectionState(sectionName) {
    if (this.floorGrid) {
      this.floorGrid.group.visible = (sectionName !== 'projects' && sectionName !== 'philosophy');
    }
  }

  dispose() {
    this.scene.remove(this.group);
    if (this.homeUniverse) this.homeUniverse.dispose();
    if (this.floorGrid) {
      this.scene.remove(this.floorGrid.group);
      this.floorGrid.dispose();
    }
  }
}
