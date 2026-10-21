import * as THREE from 'three';

/**
 * AboutCodingUniverse
 * 
 * Recreates the matching 3D visual language for the About section:
 * - Shared visual system: same near-black background, violet/lavender lighting
 * - Delicate wireframe network / sphere with connected nodes
 * - Subtle elliptical orbital lines and traveling particles
 * - Floating glass architecture panel positioned safely in the right negative space
 * - ZERO text obstruction: placed in the far-right margin (x > 3.0, z ~ -0.4)
 */
export class AboutCodingUniverse {
  constructor(camera) {
    this.camera = camera;
    this.group = new THREE.Group();
    this.group.visible = false;

    this.disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    this.initNetwork();
    this.initOrbit();
    this.initArchitecturePanel();

    // Positioned in the right negative space of About section
    this.group.position.set(2.8, 0.1, -0.4);
  }

  initNetwork() {
    // 1. Triangular wireframe sphere (matching Home's icosahedron)
    const icoGeom = new THREE.IcosahedronGeometry(1.2, 2);
    const edgesGeom = new THREE.EdgesGeometry(icoGeom);
    this.disposables.geometries.push(icoGeom);
    this.disposables.geometries.push(edgesGeom);

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x9D65E8,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(edgeMat);

    this.wireMesh = new THREE.LineSegments(edgesGeom, edgeMat);
    this.group.add(this.wireMesh);

    // 2. Vertex nodes
    const posAttr = icoGeom.getAttribute('position');
    const pointsGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(posAttr.count * 3);

    for (let i = 0; i < posAttr.count; i++) {
      positions[i * 3] = posAttr.getX(i);
      positions[i * 3 + 1] = posAttr.getY(i);
      positions[i * 3 + 2] = posAttr.getZ(i);
    }

    pointsGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.disposables.geometries.push(pointsGeom);

    const pointsMat = new THREE.PointsMaterial({
      color: 0xD8B4FE,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(pointsMat);

    this.pointsMesh = new THREE.Points(pointsGeom, pointsMat);
    this.group.add(this.pointsMesh);
  }

  initOrbit() {
    // Elliptical orbit around about network
    const points = [];
    const a = 2.1;
    const b = 1.3;
    for (let i = 0; i <= 120; i++) {
      const theta = (i / 120) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * a, 0, Math.sin(theta) * b));
    }

    const orbitGeom = new THREE.BufferGeometry().setFromPoints(points);
    this.disposables.geometries.push(orbitGeom);

    const orbitMat = new THREE.LineBasicMaterial({
      color: 0xC084FC,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(orbitMat);

    this.orbitLoop = new THREE.LineLoop(orbitGeom, orbitMat);
    this.orbitLoop.rotation.set(
      THREE.MathUtils.degToRad(35),
      THREE.MathUtils.degToRad(-15),
      THREE.MathUtils.degToRad(20)
    );
    this.group.add(this.orbitLoop);

    // Traveling particles
    const partCount = 4;
    const partGeom = new THREE.BufferGeometry();
    const partPos = new Float32Array(partCount * 3);
    this.partPhases = [];

    for (let i = 0; i < partCount; i++) {
      const phase = (i / partCount) * Math.PI * 2;
      this.partPhases.push(phase);
      partPos[i * 3] = Math.cos(phase) * a;
      partPos[i * 3 + 1] = 0;
      partPos[i * 3 + 2] = Math.sin(phase) * b;
    }

    partGeom.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
    this.disposables.geometries.push(partGeom);

    const partMat = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.065,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(partMat);

    this.partMesh = new THREE.Points(partGeom, partMat);
    this.orbitLoop.add(this.partMesh);

    this.orbitA = a;
    this.orbitB = b;
    this.partGeom = partGeom;
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

  initArchitecturePanel() {
    const canvas = document.createElement('canvas');
    canvas.width = 460;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');

    // Panel background
    const grad = ctx.createLinearGradient(0, 0, 460, 320);
    grad.addColorStop(0, 'rgba(18, 12, 32, 0.88)');
    grad.addColorStop(1, 'rgba(8, 5, 16, 0.92)');
    ctx.fillStyle = grad;
    this.drawRoundedRect(ctx, 4, 4, 452, 312, 12);
    ctx.fill();

    ctx.strokeStyle = 'rgba(168, 85, 247, 0.38)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Header dots
    const dotColors = [
      'rgba(192, 132, 252, 0.65)',
      'rgba(168, 85, 247, 0.55)',
      'rgba(216, 180, 254, 0.45)'
    ];
    dotColors.forEach((color, i) => {
      ctx.beginPath();
      ctx.arc(24 + i * 16, 20, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    const lines = [
      {
        num: '1',
        tokens: [
          { t: 'const ', c: '#C084FC' },
          { t: 'sys', c: '#FFFFFF' },
          { t: ' = {', c: '#D8B4FE' }
        ]
      },
      {
        num: '2',
        tokens: [
          { t: '  runtime', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: "'v8 / node'", c: '#C084FC' },
          { t: ',', c: '#B9B3C9' }
        ]
      },
      {
        num: '3',
        tokens: [
          { t: '  scale', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: 'true', c: '#C084FC' },
          { t: ',', c: '#B9B3C9' }
        ]
      },
      {
        num: '4',
        tokens: [
          { t: '  resilient', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: 'true', c: '#C084FC' }
        ]
      },
      {
        num: '5',
        tokens: [
          { t: '}', c: '#D8B4FE' }
        ]
      }
    ];

    ctx.font = '600 22px "JetBrains Mono", monospace';
    const startY = 72;
    const lineSpacing = 44;

    lines.forEach((line, idx) => {
      const y = startY + idx * lineSpacing;
      ctx.fillStyle = 'rgba(185, 179, 201, 0.42)';
      ctx.fillText(line.num, 20, y);

      let curX = 56;
      line.tokens.forEach(tok => {
        ctx.fillStyle = tok.c;
        ctx.fillText(tok.t, curX, y);
        curX += ctx.measureText(tok.t).width;
      });
    });

    const tex = new THREE.CanvasTexture(canvas);
    this.disposables.textures.push(tex);

    const geom = new THREE.PlaneGeometry(1.28, 0.9);
    this.disposables.geometries.push(geom);

    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.disposables.materials.push(mat);

    this.panelMesh = new THREE.Mesh(geom, mat);
    this.panelMesh.position.set(0.7, -0.3, 0.4);
    this.panelMesh.rotation.set(0.04, -0.16, 0.02);
    this.group.add(this.panelMesh);
  }

  update(time, delta, mouse = { x: 0, y: 0 }, motionFactor = 1.0) {
    if (!this.group.visible) return;

    const rotSpeed = 0.12 * delta * motionFactor;
    if (this.wireMesh) this.wireMesh.rotation.y += rotSpeed;
    if (this.pointsMesh) this.pointsMesh.rotation.y += rotSpeed;
    if (this.orbitLoop) this.orbitLoop.rotation.y += rotSpeed * 0.7;

    // Orbit particles
    if (this.partGeom && this.partPhases) {
      const posAttr = this.partGeom.getAttribute('position');
      const positions = posAttr.array;
      for (let p = 0; p < this.partPhases.length; p++) {
        const curAngle = this.partPhases[p] + time * 0.25 * motionFactor;
        positions[p * 3] = Math.cos(curAngle) * this.orbitA;
        positions[p * 3 + 1] = 0;
        positions[p * 3 + 2] = Math.sin(curAngle) * this.orbitB;
      }
      posAttr.needsUpdate = true;
    }

    // Panel gentle float
    if (this.panelMesh) {
      this.panelMesh.position.y = -0.3 + Math.sin(time * 0.8) * 0.03 * motionFactor;
      this.panelMesh.rotation.y = -0.16 + mouse.x * 0.05 * motionFactor;
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
