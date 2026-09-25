import * as THREE from 'three';

export class LightingSetup {
  constructor(scene) {
    this.scene = scene;
    this.lights = [];
    this.initLights();
  }

  initLights() {
    // 1. Ambient Light
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.7);
    this.scene.add(ambientLight);
    this.lights.push(ambientLight);

    // 2. Main Key Directional Light (sharp computational highlights)
    const mainKeyLight = new THREE.DirectionalLight(0xFFFFFF, 2.4);
    mainKeyLight.position.set(5, 8, 6);
    this.scene.add(mainKeyLight);
    this.lights.push(mainKeyLight);

    // 3. Rim Light (sculptural edge definition)
    const rimLight = new THREE.DirectionalLight(0xD0D0DA, 1.5);
    rimLight.position.set(-6, -4, -3);
    this.scene.add(rimLight);
    this.lights.push(rimLight);

    // 4. Fill Point Light
    const fillLight = new THREE.PointLight(0xFFFFFF, 0.9, 20);
    fillLight.position.set(0, 0, 5);
    this.scene.add(fillLight);
    this.lights.push(fillLight);
  }

  dispose() {
    this.lights.forEach((light) => {
      this.scene.remove(light);
      if (light.dispose) light.dispose();
    });
  }
}
