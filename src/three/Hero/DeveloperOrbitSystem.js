import * as THREE from 'three';

/**
 * DeveloperOrbitSystem
 * 
 * Futuristic dual-layer orbital system featuring 3D developer and programming symbols
 * rotating around the hero hypercube visual.
 * 
 * Symbols included:
 * Inner orbit:
 *  - `{ }` — JavaScript and programming logic
 *  - `</>` — HTML and frontend development
 *  - `=>` — JavaScript arrow functions
 *  - `;` — programming syntax
 *  - `01` — binary and digital systems
 * 
 * Outer orbit:
 *  - `[ ]` — arrays and data structures
 *  - `( )` — functions and expressions
 *  - `< >` — markup and code structure
 *  - `⚙` — engineering and system architecture
 *  - `⌘` — developer tools and commands
 */

const INNER_SYMBOLS = [
  { symbol: '{ }', label: 'LOGIC', desc: 'JavaScript Logic' },
  { symbol: '</>', label: 'JSX', desc: 'Frontend Markup' },
  { symbol: '=>', label: 'LAMBDA', desc: 'Arrow Functions' },
  { symbol: ';', label: 'SYNTAX', desc: 'Statement Delimiter' },
  { symbol: '01', label: 'BINARY', desc: 'Digital System' }
];

const OUTER_SYMBOLS = [
  { symbol: '[ ]', label: 'ARRAY', desc: 'Data Structures' },
  { symbol: '( )', label: 'SCOPE', desc: 'Functions & Calls' },
  { symbol: '< >', label: 'TAG', desc: 'Component Structure' },
  { symbol: '⚙', label: 'SYSTEM', desc: 'Engineering Core', isGear: true },
  { symbol: '⌘', label: 'DEVTOOLS', desc: 'Command System', isCmd: true }
];

export class DeveloperOrbitSystem {
  constructor(parentGroup, camera) {
    this.parentGroup = parentGroup;
    this.camera = camera;

    this.rootGroup = new THREE.Group();
    this.parentGroup.add(this.rootGroup);

    this.innerOrbitGroup = new THREE.Group();
    this.outerOrbitGroup = new THREE.Group();
    this.rootGroup.add(this.innerOrbitGroup);
    this.rootGroup.add(this.outerOrbitGroup);

    // Track objects for disposal
    this.disposables = {
      textures: [],
      materials: [],
      geometries: []
    };

    // Radii & Motion Configuration
    this.innerRadius = 2.45;
    this.outerRadius = 3.85;
    this.innerSpeed = 0.22;
    this.outerSpeed = -0.15;

    // Symbol node references
    this.innerNodes = [];
    this.outerNodes = [];

    // Helper vector
    this.tempCamVec = new THREE.Vector3();
    this.tempWorldPos = new THREE.Vector3();

    this.initOrbitalPlanes();
    this.initOrbitTracks();
    this.initSymbols();
  }

  /**
   * Set orbital inclinations for celestial gyroscope look
   */
  initOrbitalPlanes() {
    // Inner orbital plane: tilted ~28 deg on X, -14 deg on Y
    this.innerOrbitGroup.rotation.x = THREE.MathUtils.degToRad(26);
    this.innerOrbitGroup.rotation.y = THREE.MathUtils.degToRad(-16);
    this.innerOrbitGroup.rotation.z = THREE.MathUtils.degToRad(10);

    // Outer orbital plane: counter-tilted ~-22 deg on X, +32 deg on Y
    this.outerOrbitGroup.rotation.x = THREE.MathUtils.degToRad(-24);
    this.outerOrbitGroup.rotation.y = THREE.MathUtils.degToRad(34);
    this.outerOrbitGroup.rotation.z = THREE.MathUtils.degToRad(-12);
  }

  /**
   * Create subtle glowing orbital trajectory rings and micro-particles
   */
  initOrbitTracks() {
    // Inner orbital track ring
    const innerTrackGeom = this.createRingGeometry(this.innerRadius, 96);
    const innerTrackMat = new THREE.LineBasicMaterial({
      color: 0x5A4584,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending
    });
    this.disposables.geometries.push(innerTrackGeom);
    this.disposables.materials.push(innerTrackMat);
    const innerTrack = new THREE.LineLoop(innerTrackGeom, innerTrackMat);
    this.innerOrbitGroup.add(innerTrack);

    // Outer orbital track ring
    const outerTrackGeom = this.createRingGeometry(this.outerRadius, 128);
    const outerTrackMat = new THREE.LineBasicMaterial({
      color: 0x7E5AA6,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending
    });
    this.disposables.geometries.push(outerTrackGeom);
    this.disposables.materials.push(outerTrackMat);
    const outerTrack = new THREE.LineLoop(outerTrackGeom, outerTrackMat);
    this.outerOrbitGroup.add(outerTrack);

    // Orbiting micro-beacons along track
    this.initTrackParticles();
  }

  createRingGeometry(radius, segments = 64) {
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }

  initTrackParticles() {
    // Inner track data pips
    const innerPipsGeom = new THREE.BufferGeometry();
    const innerPipsCount = 8;
    const innerPositions = new Float32Array(innerPipsCount * 3);
    for (let i = 0; i < innerPipsCount; i++) {
      const angle = (i / innerPipsCount) * Math.PI * 2;
      innerPositions[i * 3] = Math.cos(angle) * this.innerRadius;
      innerPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.08;
      innerPositions[i * 3 + 2] = Math.sin(angle) * this.innerRadius;
    }
    innerPipsGeom.setAttribute('position', new THREE.BufferAttribute(innerPositions, 3));
    const pipsMat = new THREE.PointsMaterial({
      color: 0xCDB5FF,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    this.disposables.geometries.push(innerPipsGeom);
    this.disposables.materials.push(pipsMat);
    this.innerPips = new THREE.Points(innerPipsGeom, pipsMat);
    this.innerOrbitGroup.add(this.innerPips);

    // Outer track data pips
    const outerPipsGeom = new THREE.BufferGeometry();
    const outerPipsCount = 12;
    const outerPositions = new Float32Array(outerPipsCount * 3);
    for (let i = 0; i < outerPipsCount; i++) {
      const angle = (i / outerPipsCount) * Math.PI * 2;
      outerPositions[i * 3] = Math.cos(angle) * this.outerRadius;
      outerPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      outerPositions[i * 3 + 2] = Math.sin(angle) * this.outerRadius;
    }
    outerPipsGeom.setAttribute('position', new THREE.BufferAttribute(outerPositions, 3));
    const outerPipsMat = new THREE.PointsMaterial({
      color: 0xA855F7,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    this.disposables.geometries.push(outerPipsGeom);
    this.disposables.materials.push(outerPipsMat);
    this.outerPips = new THREE.Points(outerPipsGeom, outerPipsMat);
    this.outerOrbitGroup.add(this.outerPips);
  }

  /**
   * Render high-res procedural badge texture on HTML5 canvas
   */
  createSymbolTexture(item) {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, size, size);

    // 1. Semi-translucent dark purple-glass card backing
    const pad = 44;
    const cardW = size - pad * 2;
    const cardH = size - pad * 2;
    const radius = 54;

    ctx.save();
    this.drawRoundedRect(ctx, pad, pad, cardW, cardH, radius);

    // Glass gradient fill
    const bgGrad = ctx.createLinearGradient(pad, pad, pad + cardW, pad + cardH);
    bgGrad.addColorStop(0, 'rgba(28, 16, 46, 0.82)');
    bgGrad.addColorStop(0.5, 'rgba(18, 10, 32, 0.88)');
    bgGrad.addColorStop(1, 'rgba(10, 5, 20, 0.94)');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Glowing border outline
    const borderGrad = ctx.createLinearGradient(pad, pad, pad + cardW, pad + cardH);
    borderGrad.addColorStop(0, 'rgba(205, 181, 255, 0.85)');
    borderGrad.addColorStop(0.35, 'rgba(168, 85, 247, 0.65)');
    borderGrad.addColorStop(0.8, 'rgba(90, 69, 132, 0.4)');
    borderGrad.addColorStop(1, 'rgba(205, 181, 255, 0.6)');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.restore();

    // 2. Technical Corner Accent Ticks (Cyber / IDE Aesthetic)
    ctx.strokeStyle = 'rgba(205, 181, 255, 0.95)';
    ctx.lineWidth = 4;
    const tickLen = 22;

    // Top-Left corner tick
    ctx.beginPath();
    ctx.moveTo(pad + tickLen, pad + 8);
    ctx.lineTo(pad + 8, pad + 8);
    ctx.lineTo(pad + 8, pad + tickLen);
    ctx.stroke();

    // Bottom-Right corner tick
    ctx.beginPath();
    ctx.moveTo(pad + cardW - tickLen, pad + cardH - 8);
    ctx.lineTo(pad + cardW - 8, pad + cardH - 8);
    ctx.lineTo(pad + cardW - 8, pad + cardH - tickLen);
    ctx.stroke();

    // 3. Status Beacon Dot (top-right)
    ctx.save();
    ctx.shadowColor = 'rgba(168, 85, 247, 0.9)';
    ctx.shadowBlur = 14;
    ctx.fillStyle = '#CDB5FF';
    ctx.beginPath();
    ctx.arc(pad + cardW - 32, pad + 32, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 4. Micro-label (top-left)
    ctx.font = '600 24px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(205, 181, 255, 0.7)';
    ctx.fillText(`// ${item.label}`, pad + 24, pad + 38);

    // 5. Central Developer Symbol
    ctx.save();
    ctx.shadowColor = 'rgba(168, 85, 247, 0.95)';
    ctx.shadowBlur = 26;

    if (item.isGear) {
      // Precision vector Gear symbol ⚙
      this.drawVectorGear(ctx, size / 2, size / 2 + 10, 88, 58, 28, 8);
    } else if (item.isCmd) {
      // Precision vector Command symbol ⌘
      this.drawVectorCommand(ctx, size / 2, size / 2 + 12, 100);
    } else {
      // Monospace typography symbol with vertical gradient
      const symGrad = ctx.createLinearGradient(0, 160, 0, 360);
      symGrad.addColorStop(0, '#FFFFFF');
      symGrad.addColorStop(0.4, '#EDE9FE');
      symGrad.addColorStop(0.8, '#CDB5FF');
      symGrad.addColorStop(1, '#A855F7');
      ctx.fillStyle = symGrad;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      let fontSize = 120;
      if (item.symbol === ';') fontSize = 170;
      else if (item.symbol === '</>' || item.symbol === '=>') fontSize = 110;
      else if (item.symbol === '01') fontSize = 125;

      ctx.font = `bold ${fontSize}px "JetBrains Mono", "Courier New", monospace`;
      ctx.fillText(item.symbol, size / 2, size / 2 + 14);
    }
    ctx.restore();

    // 6. Subtitle description (bottom-center)
    ctx.font = '500 20px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(168, 162, 181, 0.65)';
    ctx.textAlign = 'center';
    ctx.fillText(item.desc.toUpperCase(), size / 2, pad + cardH - 24);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    this.disposables.textures.push(texture);
    return texture;
  }

  drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  drawVectorGear(ctx, cx, cy, outerR, innerR, hubR, teeth) {
    const angleStep = (Math.PI * 2) / teeth;
    const toothHalf = angleStep * 0.22;

    const grad = ctx.createLinearGradient(cx - outerR, cy - outerR, cx + outerR, cy + outerR);
    grad.addColorStop(0, '#FFFFFF');
    grad.addColorStop(0.5, '#CDB5FF');
    grad.addColorStop(1, '#A855F7');
    ctx.fillStyle = grad;

    ctx.beginPath();
    for (let i = 0; i < teeth; i++) {
      const a = i * angleStep;
      const a0 = a - toothHalf * 1.4;
      const a1 = a - toothHalf * 0.7;
      const a2 = a + toothHalf * 0.7;
      const a3 = a + toothHalf * 1.4;

      if (i === 0) {
        ctx.moveTo(cx + Math.cos(a0) * innerR, cy + Math.sin(a0) * innerR);
      } else {
        ctx.lineTo(cx + Math.cos(a0) * innerR, cy + Math.sin(a0) * innerR);
      }
      ctx.lineTo(cx + Math.cos(a1) * outerR, cy + Math.sin(a1) * outerR);
      ctx.lineTo(cx + Math.cos(a2) * outerR, cy + Math.sin(a2) * outerR);
      ctx.lineTo(cx + Math.cos(a3) * innerR, cy + Math.sin(a3) * innerR);
    }
    ctx.closePath();
    ctx.fill();

    // Clear inner hub hole
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(cx, cy, hubR, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Subtle hub ring
    ctx.strokeStyle = '#CDB5FF';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(cx, cy, hubR + 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  drawVectorCommand(ctx, cx, cy, size) {
    const grad = ctx.createLinearGradient(cx - size, cy - size, cx + size, cy + size);
    grad.addColorStop(0, '#FFFFFF');
    grad.addColorStop(0.4, '#EDE9FE');
    grad.addColorStop(1, '#A855F7');

    ctx.strokeStyle = grad;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const half = size * 0.35;
    const r = size * 0.22;

    // Draw standard ⌘ geometry: central square + 4 loop ears
    ctx.beginPath();

    // Center square
    ctx.rect(cx - half, cy - half, half * 2, half * 2);

    // Top-left loop
    ctx.moveTo(cx - half, cy - half);
    ctx.arc(cx - half - r, cy - half - r, r, 0, Math.PI * 2);

    // Top-right loop
    ctx.moveTo(cx + half, cy - half);
    ctx.arc(cx + half + r, cy - half - r, r, 0, Math.PI * 2);

    // Bottom-right loop
    ctx.moveTo(cx + half, cy + half);
    ctx.arc(cx + half + r, cy + half + r, r, 0, Math.PI * 2);

    // Bottom-left loop
    ctx.moveTo(cx - half, cy + half);
    ctx.arc(cx - half - r, cy + half + r, r, 0, Math.PI * 2);

    ctx.stroke();
  }

  /**
   * Build 3D Symbol Node with glass slab, glowing bevels, and front face
   */
  createSymbol3DNode(item, size) {
    const nodeGroup = new THREE.Group();

    // 1. High-resolution canvas texture plane
    const texture = this.createSymbolTexture(item);
    const planeGeom = new THREE.PlaneGeometry(size, size);
    // Rotate geometry 180 deg around Y so normal is along -Z.
    // Three.js lookAt points -Z towards target, keeping texture front-facing and un-mirrored.
    planeGeom.rotateY(Math.PI);
    this.disposables.geometries.push(planeGeom);

    const planeMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.disposables.materials.push(planeMat);

    const planeMesh = new THREE.Mesh(planeGeom, planeMat);
    nodeGroup.add(planeMesh);

    // 2. Physical Glass Slab Backing (gives tangible 3D depth from side angles)
    const slabGeom = new THREE.BoxGeometry(size * 0.94, size * 0.94, 0.032);
    slabGeom.rotateY(Math.PI);
    this.disposables.geometries.push(slabGeom);

    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x140B22,
      metalness: 0.9,
      roughness: 0.15,
      transparent: true,
      opacity: 0.65
    });
    this.disposables.materials.push(slabMat);

    const slabMesh = new THREE.Mesh(slabGeom, slabMat);
    slabMesh.position.z = 0.018; // Sits slightly behind front plane along local normal
    nodeGroup.add(slabMesh);

    // 3. Glowing Wireframe Edge on Backing
    const edgeGeom = new THREE.EdgesGeometry(slabGeom);
    this.disposables.geometries.push(edgeGeom);

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x6E489E,
      transparent: true,
      opacity: 0.55
    });
    this.disposables.materials.push(edgeMat);

    const edgeLines = new THREE.LineSegments(edgeGeom, edgeMat);
    slabMesh.add(edgeLines);

    // 4. Luminous Corner Beacon
    const pipGeom = new THREE.SphereGeometry(size * 0.038, 12, 12);
    this.disposables.geometries.push(pipGeom);
    const pipMat = new THREE.MeshBasicMaterial({ color: 0xCDB5FF });
    this.disposables.materials.push(pipMat);
    const pip = new THREE.Mesh(pipGeom, pipMat);
    pip.position.set(size * 0.4, size * 0.4, -0.01);
    nodeGroup.add(pip);

    return {
      group: nodeGroup,
      planeMat,
      slabMat,
      size,
      item
    };
  }

  /**
   * Instantiate inner and outer symbol sets
   */
  initSymbols() {
    // Inner Orbit: 5 smaller symbols (size = 0.46)
    const innerCount = INNER_SYMBOLS.length;
    INNER_SYMBOLS.forEach((item, index) => {
      const angle = (index / innerCount) * Math.PI * 2;
      const node = this.createSymbol3DNode(item, 0.46);

      node.baseAngle = angle;
      node.orbitRadius = this.innerRadius;
      node.phaseOffset = index * 1.35;

      this.innerOrbitGroup.add(node.group);
      this.innerNodes.push(node);
    });

    // Outer Orbit: 5 larger symbols (size = 0.60)
    const outerCount = OUTER_SYMBOLS.length;
    OUTER_SYMBOLS.forEach((item, index) => {
      // Offset initial angle by half-step so inner and outer symbols don't align synchronously
      const angle = (index / outerCount) * Math.PI * 2 + Math.PI / 5;
      const node = this.createSymbol3DNode(item, 0.60);

      node.baseAngle = angle;
      node.orbitRadius = this.outerRadius;
      node.phaseOffset = index * 1.6 + 2.0;

      this.outerOrbitGroup.add(node.group);
      this.outerNodes.push(node);
    });
  }

  /**
   * Per-frame animation update
   * Synchronized with ThreeCanvas loop and CameraController
   */
  update(time, delta, mouse = { x: 0, y: 0 }, scrollVelocity = 0) {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Orbital speeds: calm drift if reduced motion is requested
    const motionFactor = prefersReducedMotion ? 0.12 : 1.0;
    const scrollBoost = prefersReducedMotion ? 0 : Math.min(Math.abs(scrollVelocity) * 0.002, 0.35);

    const innerDelta = (this.innerSpeed + scrollBoost) * delta * motionFactor;
    const outerDelta = (this.outerSpeed - scrollBoost) * delta * motionFactor;

    // Continuous orbital rotation of groups
    this.innerOrbitGroup.rotation.y += innerDelta;
    this.outerOrbitGroup.rotation.y += outerDelta;

    // Track particles drift
    if (this.innerPips) {
      this.innerPips.rotation.y += innerDelta * 1.4;
    }
    if (this.outerPips) {
      this.outerPips.rotation.y += outerDelta * 1.3;
    }

    // Responsive adaptation: scale orbits on mobile and tablet devices
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isSmallMobile = typeof window !== 'undefined' && window.innerWidth < 480;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
    const radiusScale = isSmallMobile ? 0.65 : isMobile ? 0.76 : isTablet ? 0.88 : 1.0;
    const nodeScale = isSmallMobile ? 0.68 : isMobile ? 0.82 : isTablet ? 0.90 : 1.0;

    // Camera world position for billboarding and depth calculation
    if (this.camera) {
      this.camera.getWorldPosition(this.tempCamVec);
    }

    // 1. Update Inner Nodes
    this.innerNodes.forEach((node) => {
      const breathing = prefersReducedMotion
        ? 0
        : Math.sin(time * 1.4 + node.phaseOffset) * 0.14;
      const currentRadius = (node.orbitRadius + breathing) * radiusScale;

      // Gentle vertical bobbing wave
      const verticalBob = prefersReducedMotion
        ? 0
        : Math.sin(time * 1.8 + node.phaseOffset) * 0.18;

      const x = Math.cos(node.baseAngle) * currentRadius;
      const z = Math.sin(node.baseAngle) * currentRadius;
      node.group.position.set(x, verticalBob, z);

      // Billboarding toward camera in parent local space
      if (this.camera) {
        const localCam = this.innerOrbitGroup.worldToLocal(this.tempCamVec.clone());
        node.group.lookAt(localCam);

        // Subtle 3D levitation tilt
        if (!prefersReducedMotion) {
          node.group.rotation.z += Math.sin(time * 1.6 + node.phaseOffset) * 0.06;
          node.group.rotation.x += Math.cos(time * 1.3 + node.phaseOffset) * 0.04;
        }

        // Natural depth perspective: fade and scale subtly when in background
        node.group.getWorldPosition(this.tempWorldPos);
        const distanceToCam = this.tempCamVec.distanceTo(this.tempWorldPos);
        const depthT = THREE.MathUtils.clamp((distanceToCam - 4.5) / 3.0, 0, 1);

        const targetOpacity = THREE.MathUtils.lerp(0.95, 0.55, depthT);
        node.planeMat.opacity = targetOpacity;
        node.slabMat.opacity = targetOpacity * 0.65;

        const depthScale = THREE.MathUtils.lerp(1.0, 0.84, depthT) * nodeScale;
        node.group.scale.set(depthScale, depthScale, depthScale);
      }
    });

    // 2. Update Outer Nodes
    this.outerNodes.forEach((node) => {
      const breathing = prefersReducedMotion
        ? 0
        : Math.cos(time * 1.1 + node.phaseOffset) * 0.22;
      const currentRadius = (node.orbitRadius + breathing) * radiusScale;

      // Gentle undulating wave along orbital path
      const verticalBob = prefersReducedMotion
        ? 0
        : Math.cos(time * 1.4 + node.phaseOffset) * 0.26;

      const x = Math.cos(node.baseAngle) * currentRadius;
      const z = Math.sin(node.baseAngle) * currentRadius;
      node.group.position.set(x, verticalBob, z);

      // Billboarding toward camera in parent local space
      if (this.camera) {
        const localCam = this.outerOrbitGroup.worldToLocal(this.tempCamVec.clone());
        node.group.lookAt(localCam);

        // Subtle 3D levitation tilt
        if (!prefersReducedMotion) {
          node.group.rotation.z += Math.cos(time * 1.5 + node.phaseOffset) * 0.07;
          node.group.rotation.x += Math.sin(time * 1.2 + node.phaseOffset) * 0.05;
        }

        // Natural depth perspective
        node.group.getWorldPosition(this.tempWorldPos);
        const distanceToCam = this.tempCamVec.distanceTo(this.tempWorldPos);
        const depthT = THREE.MathUtils.clamp((distanceToCam - 4.5) / 3.5, 0, 1);

        const targetOpacity = THREE.MathUtils.lerp(0.98, 0.52, depthT);
        node.planeMat.opacity = targetOpacity;
        node.slabMat.opacity = targetOpacity * 0.65;

        const depthScale = THREE.MathUtils.lerp(1.0, 0.82, depthT) * nodeScale;
        node.group.scale.set(depthScale, depthScale, depthScale);
      }
    });

    // Interactive mouse parallax on orbital tilts
    if (!prefersReducedMotion) {
      const mouseX = mouse.x || 0;
      const mouseY = mouse.y || 0;
      this.innerOrbitGroup.rotation.x = THREE.MathUtils.degToRad(26) + mouseY * 0.18;
      this.innerOrbitGroup.rotation.z = THREE.MathUtils.degToRad(10) + mouseX * 0.15;

      this.outerOrbitGroup.rotation.x = THREE.MathUtils.degToRad(-24) - mouseY * 0.22;
      this.outerOrbitGroup.rotation.z = THREE.MathUtils.degToRad(-12) - mouseX * 0.18;
    }
  }

  /**
   * Complete GPU and memory cleanup
   */
  dispose() {
    this.parentGroup.remove(this.rootGroup);

    this.disposables.textures.forEach((t) => t.dispose());
    this.disposables.materials.forEach((m) => m.dispose());
    this.disposables.geometries.forEach((g) => g.dispose());

    this.disposables.textures = [];
    this.disposables.materials = [];
    this.disposables.geometries = [];
    this.innerNodes = [];
    this.outerNodes = [];
  }
}
