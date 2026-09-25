import * as THREE from 'three';

export class CameraController {
  constructor(camera) {
    this.camera = camera;
    this.currentLookAt = new THREE.Vector3(1.4, 0.2, 0);

    // Camera target coordinates for each section
    this.sectionTargets = {
      hero: { x: 0.8, y: 0.2, z: 6.2, lookX: 1.4, lookY: 0.2, lookZ: 0 },
      about: { x: 0.8, y: 0.2, z: 5.5, lookX: 1.4, lookY: 0.2, lookZ: 0 },
      stack: { x: -0.2, y: 0.1, z: 5.6, lookX: 0, lookY: 0, lookZ: 0 },
      // Projects: camera moves sideways around the environment as specified
      projects: { x: -2.0, y: 0.3, z: 7.2, lookX: 0.5, lookY: 0.1, lookZ: 0 },
      experience: { x: 0.6, y: -0.1, z: 6.0, lookX: 1.2, lookY: 0, lookZ: 0 },
      philosophy: { x: 0, y: 0.3, z: 6.6, lookX: 0, lookY: 0, lookZ: 0 },
      contact: { x: 0, y: -0.8, z: 6.5, lookX: 0, lookY: -0.8, lookZ: 0 }
    };
  }

  update(activeSection, mousePosition, scrollProgress = 0, heroAboutProgress = 0) {
    let targetX, targetY, targetZ, lookX, lookY, lookZ;

    if (activeSection === 'hero' || activeSection === 'about') {
      const t = Math.max(0, Math.min(heroAboutProgress, 1));
      // Cinematic smoothstep curve for scroll-controlled depth travel
      const easeT = t * t * (3 - 2 * t);

      const heroTarget = this.sectionTargets.hero;
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

    // Mouse influence
    const mouseX = (mousePosition?.normalizedX || 0) * 0.45;
    const mouseY = (mousePosition?.normalizedY || 0) * 0.35;

    // Sideways orbital drift during projects scroll
    let extraX = 0;
    if (activeSection === 'projects') {
      extraX = Math.sin(scrollProgress * Math.PI) * 0.8;
    }

    const lerpFactor = 0.08;
    this.camera.position.x += (targetX + mouseX + extraX - this.camera.position.x) * lerpFactor;
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
