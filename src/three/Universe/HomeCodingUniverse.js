import * as THREE from 'three';
import { DigitalSphere } from './DigitalSphere';
import { OrbitSystem } from './OrbitSystem';
import { FloatingCodePanels } from './FloatingCodePanels';
import { FloatingSymbols } from './FloatingSymbols';

export class HomeCodingUniverse {
  constructor(camera) {
    this.camera = camera;
    this.group = new THREE.Group();

    this.disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    // 1. Digital Sphere (matching reference image scale)
    this.sphere = new DigitalSphere(1.58);
    this.group.add(this.sphere.group);

    // 2. Orbit System
    this.orbitSystem = new OrbitSystem();
    this.group.add(this.orbitSystem.group);

    // 3. Floating Code Panels
    this.panels = new FloatingCodePanels(this.camera);
    this.group.add(this.panels.group);

    // 4. Floating Programming Symbols
    this.symbols = new FloatingSymbols();
    this.group.add(this.symbols.group);

    this.group.position.set(0, 0.02, 0);
  }

  getTargetX() {
    if (typeof window === 'undefined') return 2.75;
    const width = window.innerWidth;
    if (width < 640) return 0.35;
    if (width < 768) return 0.65;
    if (width < 1024) return 1.75;
    if (width < 1440) return 2.75;
    return 2.98;
  }

  getScale() {
    if (typeof window === 'undefined') return 1.0;
    const width = window.innerWidth;
    if (width < 480) return 0.62;
    if (width < 768) return 0.74;
    if (width < 1024) return 0.88;
    return 1.0;
  }

  update(time, delta, mouse = { x: 0, y: 0 }, scrollVelocity = 0) {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const motionFactor = prefersReducedMotion ? 0.15 : 1.0;

    const scale = this.getScale();
    this.group.scale.set(scale, scale, scale);

    if (this.sphere) this.sphere.update(time, delta, motionFactor);
    if (this.orbitSystem) this.orbitSystem.update(time, delta, motionFactor);
    if (this.panels) this.panels.update(time, delta, mouse, motionFactor);
    if (this.symbols) this.symbols.update(time, delta, mouse, motionFactor);

    if (!prefersReducedMotion) {
      const targetRotX = mouse.y * 0.06;
      const targetRotY = mouse.x * 0.09;
      this.group.rotation.x += (targetRotX - this.group.rotation.x) * 0.04;
      this.group.rotation.y += (targetRotY - this.group.rotation.y) * 0.04;
    }
  }

  dispose() {
    this.disposables.geometries.forEach(g => g.dispose());
    this.disposables.materials.forEach(m => m.dispose());
    this.disposables.textures.forEach(t => t.dispose());
    this.disposables.geometries = [];
    this.disposables.materials = [];
    this.disposables.textures = [];

    if (this.sphere) this.sphere.dispose();
    if (this.orbitSystem) this.orbitSystem.dispose();
    if (this.panels) this.panels.dispose();
    if (this.symbols) this.symbols.dispose();
  }
}
