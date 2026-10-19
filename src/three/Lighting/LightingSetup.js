import * as THREE from 'three';

export class LightingSetup {
  constructor(scene) {
    this.scene = scene;
    this.lights = [];
    this.initLights();
  }

  initLights() {
    // 1. Ambient Light - Rich dark purple atmosphere
    const ambientLight = new THREE.AmbientLight(0x24143D, 0.95);
    this.scene.add(ambientLight);
    this.lights.push(ambientLight);

    // 2. Main Key Directional Light (crisp violet-white architectural specular highlights)
    const mainKeyLight = new THREE.DirectionalLight(0xF8F4FF, 2.4);
    mainKeyLight.position.set(5, 8, 6);
    this.scene.add(mainKeyLight);
    this.lights.push(mainKeyLight);

    // 3. Rim Light (electric purple edge definition)
    const rimLight = new THREE.DirectionalLight(0x792CFF, 2.5);
    rimLight.position.set(-6, -4, -3);
    this.scene.add(rimLight);
    this.lights.push(rimLight);

    // 4. Fill Point Light (soft luminous lavender)
    const fillLight = new THREE.PointLight(0xCDB5FF, 1.4, 25);
    fillLight.position.set(0, 0, 5);
    this.scene.add(fillLight);
    this.lights.push(fillLight);

    // 5. Underlight (deep rich violet bounce)
    const underLight = new THREE.DirectionalLight(0x4E18B8, 1.2);
    underLight.position.set(0, -6, 2);
    this.scene.add(underLight);
    this.lights.push(underLight);
  }

  dispose() {
    this.lights.forEach((light) => {
      this.scene.remove(light);
      if (light.dispose) light.dispose();
    });
  }
}
