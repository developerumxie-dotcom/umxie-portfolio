import * as THREE from 'three';

/**
 * FloorGrid
 * 
 * Futuristic glowing neon purple perspective floor grid:
 * - Anti-aliased perspective grid lines receding into space
 * - Deep charcoal-space background with smooth distance fog falloff
 * - Soft purple neon light pool reflection directly underneath the digital planet
 * - Faint on the left side so hero typography is pristine and unobstructed
 */
export class FloorGrid {
  constructor(size = 64) {
    this.size = size;
    this.group = new THREE.Group();

    this.disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    this.initGrid();
  }

  initGrid() {
    const geom = new THREE.PlaneGeometry(this.size, this.size, 1, 1);
    geom.rotateX(-Math.PI / 2);
    this.disposables.geometries.push(geom);

    const mat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vWorldPosition;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vWorldPosition;
        varying vec2 vUv;

        uniform vec3 uLineColor;
        uniform vec3 uBaseColor;
        uniform vec3 uGlowColor;
        uniform vec3 uPlanetPos;
        uniform float uGridSize;
        uniform float uLineWidth;
        uniform float uTime;

        void main() {
          // Smooth continuous forward cyberspace drift
          vec2 coord = vec2(vWorldPosition.x, vWorldPosition.z - uTime * 0.28) / uGridSize;
          
          // Anti-aliased grid lines using screen derivatives
          vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
          float line = 1.0 - min(min(grid.x, grid.y), 1.0);

          // Distance fog falloff towards horizon and camera
          float dist = length(vWorldPosition.xz);
          float fog = smoothstep(26.0, 3.5, dist);

          // Gentle fade towards the left side to keep Hero text perfectly clear
          float leftFade = smoothstep(-6.0, 0.5, vWorldPosition.x);

          // Soft purple glow under the planet
          float planetDist = length(vWorldPosition.xz - uPlanetPos.xz);
          float planetReflect = exp(-planetDist * 0.85) * 0.32;

          vec3 finalColor = uBaseColor;
          finalColor += uLineColor * line * 0.60;
          finalColor += uGlowColor * planetReflect * 0.22;

          float alpha = clamp((line * 0.60 + planetReflect * 0.22) * fog * leftFade, 0.0, 0.80);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      uniforms: {
        uLineColor: { value: new THREE.Color(0x9333EA) },
        uBaseColor: { value: new THREE.Color(0x05030A) },
        uGlowColor: { value: new THREE.Color(0xA855F7) },
        uPlanetPos: { value: new THREE.Vector3(2.5, 0, 0) },
        uGridSize: { value: 1.30 },
        uLineWidth: { value: 0.018 },
        uTime: { value: 0 }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.disposables.materials.push(mat);

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.y = -1.95;
    this.group.add(this.mesh);
  }

  setPlanetPosition(x, z = 0) {
    if (this.mesh && this.mesh.material.uniforms.uPlanetPos) {
      this.mesh.material.uniforms.uPlanetPos.value.set(x, 0, z);
    }
  }

  update(time) {
    if (this.mesh && this.mesh.material.uniforms.uTime) {
      this.mesh.material.uniforms.uTime.value = time;
    }
  }

  dispose() {
    this.disposables.geometries.forEach(g => g.dispose());
    this.disposables.materials.forEach(m => m.dispose());
    this.disposables.textures.forEach(t => t.dispose());
    this.disposables.geometries = [];
    this.disposables.materials = [];
    this.disposables.textures = [];
  }
}
