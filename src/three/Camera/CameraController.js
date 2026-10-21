import * as THREE from 'three';

export class CameraController {
  constructor(camera) {
    this.camera = camera;
    this.currentLookAt = new THREE.Vector3(0.8, 0.1, 0);

    // Camera target coordinates for each section
    this.sectionTargets = {
      hero: { x: 0.4, y: 0.1, z: 5.8, lookX: 0.8, lookY: 0.1, lookZ: 0 },
      about: { x: 0, y: 0, z: 5.6, lookX: 0, lookY: 0, lookZ: 0 },
      stack: { x: 0, y: 0, z: 5.6, lookX: 0, lookY: 0, lookZ: 0 },
      projects: { x: 0, y: 0, z: 5.6, lookX: 0, lookY: 0, lookZ: 0 },
      experience: { x: 0, y: 0, z: 5.6, lookX: 0, lookY: 0, lookZ: 0 },
      philosophy: { x: 0, y: 0, z: 5.6, lookX: 0, lookY: 0, lookZ: 0 },
      contact: { x: 0, y: 0, z: 5.6, lookX: 0, lookY: 0, lookZ: 0 }
    };
  }

  update(activeSection, mousePosition, _scrollProgress = 0, heroAboutProgress = 0) {
    let targetX, targetY, targetZ, lookX, lookY, lookZ;

    if (activeSection === 'hero' || activeSection === 'about') {
      const t = Math.max(0, Math.min(heroAboutProgress, 1));
      const easeT = t * t * (3 - 2 * t);

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const heroTarget = isMobile
        ? { x: 0.05, y: 0.1, z: 6.4, lookX: 0.05, lookY: 0.1, lookZ: 0 }
        : this.sectionTargets.hero;
      const aboutTarget = this.sectionTargets.about;

      targetX = THREE.MathUtils.lerp(heroTarget.x, aboutTarget.x, easeT);
      targetY = THREE.MathUtils.lerp(heroTarget.y, aboutTarget.y, easeT);
      targetZ = THREE.MathUtils.lerp(heroTarget.z, aboutTarget.z, easeT);
      lookX = THREE.MathUtils.lerp(heroTarget.lookX, aboutTarget.lookX, easeT);
      lookY = THREE.MathUtils.lerp(heroTarget.lookY, aboutTarget.lookY, easeT);
      lookZ = THREE.MathUtils.lerp(heroTarget.lookZ, aboutTarget.lookZ, easeT);
    } else {
      const target = this.sectionTargets[activeSection] || this.sectionTargets.hero;
      targetX = target.x;
      targetY = target.y;
      targetZ = target.z;
      lookX = target.lookX;
      lookY = target.lookY;
      lookZ = target.lookZ;
    }

    // Subtle mouse influence
    const mouseX = (mousePosition?.normalizedX || 0) * 0.35;
    const mouseY = (mousePosition?.normalizedY || 0) * 0.25;

    const lerpFactor = 0.08;
    this.camera.position.x += (targetX + mouseX - this.camera.position.x) * lerpFactor;
    this.camera.position.y += (targetY + mouseY - this.camera.position.y) * lerpFactor;
    this.camera.position.z += (targetZ - this.camera.position.z) * lerpFactor;

    const targetLook = new THREE.Vector3(lookX, lookY, lookZ);
    this.currentLookAt.lerp(targetLook, 0.08);
    this.camera.lookAt(this.currentLookAt);
  }

  handleResize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
