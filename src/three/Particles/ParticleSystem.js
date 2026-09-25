import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particleCount = 280;
    this.init();
  }

  init() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const scales = new Float32Array(this.particleCount);

    for (let i = 0; i < this.particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      scales[i] = Math.random() * 0.8 + 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    this.material = new THREE.PointsMaterial({
      color: 0x888890,
      size: 0.035,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    this.points = new THREE.Points(geometry, this.material);
    this.scene.add(this.points);
  }

  update(time, delta, mouse, scrollVelocity = 0, isLightSection = false) {
    if (!this.points) return;

    // In light section, darken particles to remain visible and aesthetic
    if (isLightSection) {
      this.material.color.setHex(0x333339);
      this.material.opacity = 0.55;
      this.material.blending = THREE.NormalBlending;
    } else {
      this.material.color.setHex(0x888890);
      this.material.opacity = 0.45;
      this.material.blending = THREE.AdditiveBlending;
    }

    const velInfluence = Math.min(scrollVelocity * 0.8, 1.5);
    const speed = (0.2 + velInfluence) * delta;

    this.points.rotation.y += speed * 0.12;
    this.points.rotation.x = mouse.y * 0.06;
  }

  dispose() {
    if (this.points) {
      this.scene.remove(this.points);
      this.points.geometry.dispose();
      this.points.material.dispose();
    }
  }
}
