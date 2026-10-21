import * as THREE from 'three';

/**
 * OrbitSystem
 * 
 * Recreates the exact orbital system from the reference image:
 * - Thin, smooth purple and lavender elliptical orbits encircling the digital sphere
 * - Luminous star-like satellite beads with circular radial glow traveling along the paths
 * - Key prominent stationary/semi-stationary focal beacons at the curve apexes matching the reference image:
 *   1) Far-left curve apex (prominent satellite bead near DB)
 *   2) Far-right curve apex (outside panel 2)
 *   3) Bottom-right curve apex
 *   4) Upper-left curve apex
 */
export class OrbitSystem {
  constructor() {
    this.group = new THREE.Group();

    this.disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    this.initTextures();

    this.orbitConfigs = [
      {
        // Primary prominent orbit passing from lower-left up towards upper-right
        a: 2.68,
        b: 1.74,
        rotX: THREE.MathUtils.degToRad(28),
        rotY: THREE.MathUtils.degToRad(15),
        rotZ: THREE.MathUtils.degToRad(-14),
        coreColor: 0xD8B4FE,
        glowColor: 0xA855F7,
        opacity: 0.58,
        speed: 0.16,
        particles: 4,
        nodeSize: 0.088
      },
      {
        // Second intersecting orbit crossing from upper-left down to lower-right
        a: 2.88,
        b: 1.86,
        rotX: THREE.MathUtils.degToRad(-24),
        rotY: THREE.MathUtils.degToRad(-18),
        rotZ: THREE.MathUtils.degToRad(20),
        coreColor: 0xC084FC,
        glowColor: 0x9333EA,
        opacity: 0.45,
        speed: -0.14,
        particles: 4,
        nodeSize: 0.082
      },
      {
        // Wider subtle outer inclination
        a: 3.28,
        b: 2.08,
        rotX: THREE.MathUtils.degToRad(48),
        rotY: THREE.MathUtils.degToRad(-30),
        rotZ: THREE.MathUtils.degToRad(12),
        coreColor: 0xA855F7,
        glowColor: 0x7E22CE,
        opacity: 0.32,
        speed: 0.11,
        particles: 3,
        nodeSize: 0.075
      }
    ];

    this.orbitNodes = [];

    this.initOrbits();
    this.initProminentOrbitBeacons();
  }

  initTextures() {
    // 1. Core texture
    const canvasCore = document.createElement('canvas');
    canvasCore.width = canvasCore.height = 128;
    const ctxCore = canvasCore.getContext('2d');
    const gradCore = ctxCore.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradCore.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
    gradCore.addColorStop(0.25, 'rgba(235, 215, 255, 0.95)');
    gradCore.addColorStop(0.55, 'rgba(192, 132, 252, 0.45)');
    gradCore.addColorStop(0.85, 'rgba(168, 85, 247, 0.10)');
    gradCore.addColorStop(1.0, 'rgba(168, 85, 247, 0.0)');
    ctxCore.fillStyle = gradCore;
    ctxCore.fillRect(0, 0, 128, 128);
    this.coreTexture = new THREE.CanvasTexture(canvasCore);
    this.disposables.textures.push(this.coreTexture);

    // 2. Halo texture
    const canvasHalo = document.createElement('canvas');
    canvasHalo.width = canvasHalo.height = 256;
    const ctxHalo = canvasHalo.getContext('2d');
    const gradHalo = ctxHalo.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradHalo.addColorStop(0.0, 'rgba(216, 180, 254, 0.80)');
    gradHalo.addColorStop(0.30, 'rgba(192, 132, 252, 0.45)');
    gradHalo.addColorStop(0.65, 'rgba(147, 51, 234, 0.15)');
    gradHalo.addColorStop(0.90, 'rgba(147, 51, 234, 0.03)');
    gradHalo.addColorStop(1.0, 'rgba(147, 51, 234, 0.0)');
    ctxHalo.fillStyle = gradHalo;
    ctxHalo.fillRect(0, 0, 256, 256);
    this.haloTexture = new THREE.CanvasTexture(canvasHalo);
    this.disposables.textures.push(this.haloTexture);
  }

  createEllipseGeometry(a, b, segments = 240) {
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * a, 0, Math.sin(theta) * b));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }

  initOrbits() {
    this.orbitConfigs.forEach((cfg) => {
      const orbitRingGroup = new THREE.Group();
      orbitRingGroup.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);

      // 1. Thin luminous core line
      const lineGeom = this.createEllipseGeometry(cfg.a, cfg.b);
      this.disposables.geometries.push(lineGeom);

      const lineMat = new THREE.LineBasicMaterial({
        color: cfg.coreColor,
        transparent: true,
        opacity: cfg.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      this.disposables.materials.push(lineMat);

      const lineLoop = new THREE.LineLoop(lineGeom, lineMat);
      orbitRingGroup.add(lineLoop);

      // 2. Travelling satellite beads along this orbit
      const partGeom = new THREE.BufferGeometry();
      const positions = new Float32Array(cfg.particles * 3);
      const phases = [];

      for (let p = 0; p < cfg.particles; p++) {
        const basePhase = (p / cfg.particles) * Math.PI * 2;
        phases.push(basePhase);

        positions[p * 3]     = Math.cos(basePhase) * cfg.a;
        positions[p * 3 + 1] = 0;
        positions[p * 3 + 2] = Math.sin(basePhase) * cfg.b;
      }

      partGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      this.disposables.geometries.push(partGeom);

      // Star core
      const partMat = new THREE.PointsMaterial({
        map: this.coreTexture,
        color: 0xFFFFFF,
        size: cfg.nodeSize,
        transparent: true,
        opacity: 0.98,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      this.disposables.materials.push(partMat);
      const particlesMesh = new THREE.Points(partGeom, partMat);
      orbitRingGroup.add(particlesMesh);

      // Bloom halo
      const haloMat = new THREE.PointsMaterial({
        map: this.haloTexture,
        color: 0xC084FC,
        size: cfg.nodeSize * 3.0,
        transparent: true,
        opacity: 0.68,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      this.disposables.materials.push(haloMat);
      const haloMesh = new THREE.Points(partGeom, haloMat);
      orbitRingGroup.add(haloMesh);

      this.group.add(orbitRingGroup);

      this.orbitNodes.push({
        group: orbitRingGroup,
        config: cfg,
        particlesMesh,
        haloMesh,
        partGeom,
        phases
      });
    });
  }

  initProminentOrbitBeacons() {
    // Key prominent glowing satellite beads directly visible in the reference image:
    // 1) Left sweeping curve apex (prominent beacon at approx [-1.90, -0.38, 0.60])
    // 2) Right sweeping curve apex (prominent beacon at approx [2.18, 0.42, 0.35])
    // 3) Bottom-right beacon ([1.18, -1.18, 0.50])
    // 4) Upper-center beacon ([-0.45, 1.76, 0.20])
    const beaconCoords = [
      [-2.08, -0.42, 0.65],
      [2.38, 0.46, 0.38],
      [1.32, -1.30, 0.55],
      [-0.50, 1.94, 0.22]
    ];

    const beaconGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(beaconCoords.length * 3);

    beaconCoords.forEach((coord, i) => {
      positions[i * 3]     = coord[0];
      positions[i * 3 + 1] = coord[1];
      positions[i * 3 + 2] = coord[2];
    });

    beaconGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.disposables.geometries.push(beaconGeom);

    // Brilliant white star core
    const beaconCoreMat = new THREE.PointsMaterial({
      map: this.coreTexture,
      color: 0xFFFFFF,
      size: 0.13,
      transparent: true,
      opacity: 0.99,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(beaconCoreMat);

    this.beaconCore = new THREE.Points(beaconGeom, beaconCoreMat);
    this.group.add(this.beaconCore);

    // Large glowing violet halo
    const beaconHaloMat = new THREE.PointsMaterial({
      map: this.haloTexture,
      color: 0xC084FC,
      size: 0.36,
      transparent: true,
      opacity: 0.82,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(beaconHaloMat);

    this.beaconHalo = new THREE.Points(beaconGeom, beaconHaloMat);
    this.group.add(this.beaconHalo);
  }

  update(time, delta, motionFactor = 1.0) {
    this.orbitNodes.forEach((node) => {
      const cfg = node.config;
      const posAttr = node.partGeom.getAttribute('position');
      const positions = posAttr.array;

      for (let p = 0; p < cfg.particles; p++) {
        const currentAngle = node.phases[p] + time * cfg.speed * motionFactor;
        positions[p * 3]     = Math.cos(currentAngle) * cfg.a;
        positions[p * 3 + 1] = 0;
        positions[p * 3 + 2] = Math.sin(currentAngle) * cfg.b;
      }
      posAttr.needsUpdate = true;

      node.group.rotation.y += cfg.speed * 0.04 * delta * motionFactor;
    });

    if (this.beaconHalo) {
      this.beaconHalo.material.size = 0.34 + Math.sin(time * 2.4) * 0.04;
    }
  }

  dispose() {
    this.disposables.geometries.forEach(g => g.dispose());
    this.disposables.materials.forEach(m => m.dispose());
    this.disposables.textures.forEach(t => t.dispose());
    this.disposables.geometries = [];
    this.disposables.materials = [];
    this.disposables.textures = [];
    this.orbitNodes = [];
  }
}
