import * as THREE from 'three';

/**
 * LightingSetup
 * 
 * Matches the reference image's dark cinematic lighting:
 * - Near-black ambient — preserves #07070B deep space background
 * - Single sharp white key light for glass specular reflection on sphere
 * - Subtle lavender secondary rim light
 * - Zero strong purple point lights that cause solid color washing
 */
export class LightingSetup {
  constructor(scene) {
    this.scene = scene;
    this.lights = [];
    this.initLights();
  }

  initLights() {
    // Very dark ambient — keeps background inky black
    const ambient = new THREE.AmbientLight(0x06050C, 0.45);
    this.scene.add(ambient);
    this.lights.push(ambient);

    // Sharp white key light — creates the bright specular glint on the glass sphere
    const key = new THREE.DirectionalLight(0xFFFFFF, 1.8);
    key.position.set(-4.0, 5.0, 5.5);
    this.scene.add(key);
    this.lights.push(key);

    // Secondary soft lavender rim light
    const sec = new THREE.DirectionalLight(0xD8B4FE, 0.75);
    sec.position.set(-3.5, -2.5, 3.5);
    this.scene.add(sec);
    this.lights.push(sec);
  }

  dispose() {
    this.lights.forEach(l => {
      this.scene.remove(l);
      if (l.dispose) l.dispose();
    });
    this.lights = [];
  }
}
