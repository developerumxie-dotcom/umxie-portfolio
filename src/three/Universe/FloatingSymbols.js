import * as THREE from 'three';

/**
 * FloatingSymbols
 * 
 * Recreates the 6 backend programming symbols moving and rotating along a sleek
 * 3D single-line circular orbit around the globe:
 * 1. `{ }` — JSON data and backend objects
 * 2. `⇄`  — Data exchange between frontend and backend
 * 3. `🔐` — Authentication and security
 * 4. `⚙`  — Server processing and backend logic
 * 5. `⌘`  — Developer tools and command operations
 * 6. `⛁`  — Database storage
 * 
 * Key Features:
 * - A single-line circular orbit path encircling the 3D globe in space
 * - Continuous circular orbit rotation of all 6 symbols around the globe
 * - Each symbol is centered inside its own tiny, glowing single-line circle
 * - The tiny single-line circle continuously rotates smoothly around each symbol
 * - Clean white highlights and soft lavender-purple edge glow
 * - 100% transparent backgrounds — no solid cards, boxes, panels, or borders
 */
export class FloatingSymbols {
  constructor() {
    this.group = new THREE.Group();

    this.disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    this.orbitRadius = 2.24;
    this.orbitSpeed = 0.18; // Smooth cinematic orbital revolution

    // Tilt orbit circle slightly for rich 3D perspective
    this.orbitGroup = new THREE.Group();
    this.orbitGroup.rotation.set(0.24, -0.16, 0.10);
    this.group.add(this.orbitGroup);

    this.symbols = [];

    this.initOrbitLine();
    this.initSymbols();
  }

  // --- Main 3D Single-Line Orbit Circle ---
  initOrbitLine() {
    const segments = 240;
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(
          Math.cos(theta) * this.orbitRadius,
          Math.sin(theta) * this.orbitRadius,
          0
        )
      );
    }

    const orbitGeom = new THREE.BufferGeometry().setFromPoints(points);
    this.disposables.geometries.push(orbitGeom);

    const orbitMat = new THREE.LineBasicMaterial({
      color: 0xC084FC,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(orbitMat);

    const orbitLine = new THREE.LineLoop(orbitGeom, orbitMat);
    this.orbitGroup.add(orbitLine);
  }

  // --- Tiny Small Single-Line Circle Texture ---
  createTinyCircleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);

    const cx = 256, cy = 256, r = 222;

    // 1. Soft lavender glow pass
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = '#C084FC';
    ctx.lineWidth = 5.0;
    ctx.shadowColor = 'rgba(192, 132, 252, 0.90)';
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.restore();

    // 2. Crisp luminous single line core
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = '#F3E8FF';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(216, 180, 254, 0.95)';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.restore();

    // 3. Delicate luminous satellite beads on the circle rim to make rotation visible
    const beadAngles = [0, Math.PI];
    beadAngles.forEach((ang) => {
      const bx = cx + Math.cos(ang) * r;
      const by = cy + Math.sin(ang) * r;
      ctx.save();
      ctx.beginPath();
      ctx.arc(bx, by, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(216, 180, 254, 1.0)';
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.restore();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Symbol 1: { } (JSON Data & Backend Objects) ---
  createBracesTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);

    ctx.save();
    ctx.font = '700 210px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.shadowColor = 'rgba(192, 132, 252, 0.90)';
    ctx.shadowBlur = 34;
    ctx.fillStyle = '#C084FC';
    ctx.fillText('{ }', 256, 256);

    ctx.shadowColor = 'rgba(216, 180, 254, 0.95)';
    ctx.shadowBlur = 16;
    ctx.fillStyle = '#E9D5FF';
    ctx.fillText('{ }', 256, 256);

    const grad = ctx.createLinearGradient(0, 150, 0, 360);
    grad.addColorStop(0.0, '#FFFFFF');
    grad.addColorStop(0.45, '#FFFFFF');
    grad.addColorStop(0.85, '#F3E8FF');
    grad.addColorStop(1.0, '#D8B4FE');

    ctx.shadowBlur = 0;
    ctx.fillStyle = grad;
    ctx.fillText('{ }', 256, 256);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Symbol 2: ⇄ (Data Exchange: Frontend <-> Backend) ---
  createDataExchangeTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);

    const drawArrows = (strokeStyle, lineWidth, shadowColor = null, shadowBlur = 0) => {
      ctx.save();
      ctx.strokeStyle = strokeStyle;
      ctx.fillStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (shadowColor) {
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = shadowBlur;
      }

      // Top arrow (points right)
      const topY = 210;
      ctx.beginPath();
      ctx.moveTo(140, topY);
      ctx.lineTo(340, topY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(300, topY - 38);
      ctx.lineTo(365, topY);
      ctx.lineTo(300, topY + 38);
      ctx.stroke();

      // Bottom arrow (points left)
      const btmY = 302;
      ctx.beginPath();
      ctx.moveTo(372, btmY);
      ctx.lineTo(172, btmY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(212, btmY - 38);
      ctx.lineTo(147, btmY);
      ctx.lineTo(212, btmY + 38);
      ctx.stroke();

      ctx.restore();
    };

    drawArrows('#C084FC', 30, 'rgba(192, 132, 252, 0.90)', 34);
    drawArrows('#D8B4FE', 22, 'rgba(216, 180, 254, 0.95)', 16);

    const grad = ctx.createLinearGradient(140, 170, 365, 340);
    grad.addColorStop(0.0, '#FFFFFF');
    grad.addColorStop(0.6, '#FFFFFF');
    grad.addColorStop(1.0, '#E9D5FF');
    drawArrows(grad, 15, null, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Symbol 3: 🔐 (Authentication & Security: Padlock) ---
  createSecurityTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);

    const drawShackle = (strokeStyle, lineWidth, shadowColor = null, shadowBlur = 0) => {
      ctx.save();
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      if (shadowColor) {
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = shadowBlur;
      }
      ctx.beginPath();
      ctx.arc(256, 195, 62, Math.PI, 0, false);
      ctx.lineTo(318, 248);
      ctx.moveTo(194, 195);
      ctx.lineTo(194, 248);
      ctx.stroke();
      ctx.restore();
    };

    const pathBody = (x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    const drawKeyhole = () => {
      ctx.beginPath();
      ctx.arc(256, 312, 14, 0, Math.PI * 2, false);
      ctx.moveTo(248, 318);
      ctx.lineTo(243, 352);
      ctx.lineTo(269, 352);
      ctx.lineTo(264, 318);
      ctx.closePath();
    };

    drawShackle('#C084FC', 30, 'rgba(192, 132, 252, 0.90)', 32);
    drawShackle('#D8B4FE', 22, 'rgba(216, 180, 254, 0.95)', 16);
    drawShackle('#FFFFFF', 15, null, 0);

    const bx = 172, by = 242, bw = 168, bh = 142, br = 22;

    ctx.save();
    ctx.shadowColor = 'rgba(192, 132, 252, 0.90)';
    ctx.shadowBlur = 30;
    pathBody(bx, by, bw, bh, br);
    ctx.fillStyle = '#A855F7';
    ctx.fill();
    ctx.restore();

    ctx.save();
    pathBody(bx, by, bw, bh, br);
    const bodyGrad = ctx.createLinearGradient(bx, by, bx, by + bh);
    bodyGrad.addColorStop(0.0, '#FFFFFF');
    bodyGrad.addColorStop(0.20, '#F3E8FF');
    bodyGrad.addColorStop(0.55, '#C084FC');
    bodyGrad.addColorStop(1.0, '#7E22CE');
    ctx.fillStyle = bodyGrad;
    ctx.fill();

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3.5;
    ctx.stroke();
    ctx.restore();

    ctx.save();
    drawKeyhole();
    ctx.fillStyle = '#0F091C';
    ctx.shadowColor = 'rgba(192, 132, 252, 0.6)';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(bx + br, by + 4);
    ctx.lineTo(bx + bw - br, by + 4);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Symbol 4: ⚙ (Server Processing & Backend Logic: Gear) ---
  createGearTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);

    const cx = 256, cy = 256;
    const numTeeth = 8;
    const rOuter = 154;
    const rInner = 118;
    const rHole = 46;

    const buildGearPath = () => {
      ctx.beginPath();
      const step = (Math.PI * 2) / numTeeth;
      const halfTooth = step * 0.18;
      const slope = step * 0.12;

      for (let i = 0; i < numTeeth; i++) {
        const angle = i * step;

        const a1 = angle - halfTooth;
        const a2 = angle + halfTooth;
        const a3 = angle + halfTooth + slope;
        const a4 = (angle + step) - halfTooth - slope;

        const x1 = cx + Math.cos(a1) * rOuter;
        const y1 = cy + Math.sin(a1) * rOuter;
        const x2 = cx + Math.cos(a2) * rOuter;
        const y2 = cy + Math.sin(a2) * rOuter;
        const x3 = cx + Math.cos(a3) * rInner;
        const y3 = cy + Math.sin(a3) * rInner;
        const x4 = cx + Math.cos(a4) * rInner;
        const y4 = cy + Math.sin(a4) * rInner;

        if (i === 0) {
          ctx.moveTo(x1, y1);
        } else {
          ctx.lineTo(x1, y1);
        }
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
      }
      ctx.closePath();

      ctx.moveTo(cx + rHole, cy);
      ctx.arc(cx, cy, rHole, 0, Math.PI * 2, true);
      ctx.closePath();
    };

    ctx.save();
    ctx.shadowColor = 'rgba(192, 132, 252, 0.90)';
    ctx.shadowBlur = 32;
    buildGearPath();
    ctx.fillStyle = '#A855F7';
    ctx.fill();
    ctx.restore();

    ctx.save();
    buildGearPath();
    const grad = ctx.createLinearGradient(cx, cy - rOuter, cx, cy + rOuter);
    grad.addColorStop(0.0, '#FFFFFF');
    grad.addColorStop(0.25, '#F3E8FF');
    grad.addColorStop(0.65, '#C084FC');
    grad.addColorStop(1.0, '#7E22CE');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3.5;
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, rHole, 0, Math.PI * 2);
    ctx.strokeStyle = '#E9D5FF';
    ctx.lineWidth = 4;
    ctx.shadowColor = 'rgba(192, 132, 252, 0.75)';
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Symbol 5: ⌘ (Developer Tools & Command Operations) ---
  createCommandTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);

    ctx.save();
    ctx.font = '700 220px "JetBrains Mono", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI Symbol", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.shadowColor = 'rgba(192, 132, 252, 0.90)';
    ctx.shadowBlur = 36;
    ctx.fillStyle = '#C084FC';
    ctx.fillText('⌘', 256, 256);

    ctx.shadowColor = 'rgba(216, 180, 254, 0.95)';
    ctx.shadowBlur = 16;
    ctx.fillStyle = '#E9D5FF';
    ctx.fillText('⌘', 256, 256);

    const grad = ctx.createLinearGradient(0, 145, 0, 365);
    grad.addColorStop(0.0, '#FFFFFF');
    grad.addColorStop(0.45, '#FFFFFF');
    grad.addColorStop(0.85, '#F3E8FF');
    grad.addColorStop(1.0, '#D8B4FE');

    ctx.shadowBlur = 0;
    ctx.fillStyle = grad;
    ctx.fillText('⌘', 256, 256);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Symbol 6: ⛁ (Database Storage: 3-Tiered Cylinder) ---
  createDatabaseTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);

    const cx = 256;
    const rx = 118;
    const ry = 32;

    const drawTierBody = (startY, endY, isTop = false) => {
      ctx.beginPath();
      ctx.moveTo(cx - rx, startY);
      ctx.lineTo(cx - rx, endY);
      ctx.ellipse(cx, endY, rx, ry, 0, Math.PI, 0, true);
      ctx.lineTo(cx + rx, startY);
      if (isTop) {
        ctx.ellipse(cx, startY, rx, ry, 0, 0, Math.PI * 2);
      } else {
        ctx.ellipse(cx, startY, rx, ry, 0, 0, Math.PI, false);
      }
      ctx.closePath();
    };

    const tiers = [
      { startY: 162, endY: 216, isTop: true },
      { startY: 226, endY: 280, isTop: false },
      { startY: 290, endY: 344, isTop: false }
    ];

    ctx.save();
    ctx.shadowColor = 'rgba(192, 132, 252, 0.90)';
    ctx.shadowBlur = 32;
    ctx.fillStyle = '#A855F7';
    tiers.forEach(t => {
      drawTierBody(t.startY, t.endY, t.isTop);
      ctx.fill();
    });
    ctx.restore();

    tiers.forEach(t => {
      ctx.save();
      drawTierBody(t.startY, t.endY, t.isTop);
      const grad = ctx.createLinearGradient(cx - rx, t.startY, cx + rx, t.endY);
      grad.addColorStop(0.0, '#7E22CE');
      grad.addColorStop(0.32, '#FFFFFF');
      grad.addColorStop(0.68, '#C084FC');
      grad.addColorStop(1.0, '#6B21A8');
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3.5;
      ctx.stroke();
      ctx.restore();
    });

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, 162, rx, ry, 0, 0, Math.PI * 2);
    const topGrad = ctx.createRadialGradient(cx - 28, 152, 10, cx, 162, rx);
    topGrad.addColorStop(0.0, '#FFFFFF');
    topGrad.addColorStop(0.5, '#F3E8FF');
    topGrad.addColorStop(1.0, '#C084FC');
    ctx.fillStyle = topGrad;
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    tiers.forEach((t) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx - 66, t.startY + (t.endY - t.startY) * 0.52, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(216, 180, 254, 0.95)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  initSymbols() {
    // Shared geometry for the tiny rotating single-line circle plane
    const circleTex = this.createTinyCircleTexture();
    const circleGeom = new THREE.PlaneGeometry(0.56, 0.56);
    this.disposables.geometries.push(circleGeom);

    const circleMat = new THREE.MeshBasicMaterial({
      map: circleTex,
      transparent: true,
      opacity: 0.96,
      side: THREE.DoubleSide,
      depthWrite: false,
      toneMapped: false
    });
    this.disposables.materials.push(circleMat);

    // Shared geometry for the inner symbol plane (sits cleanly inside the circle)
    const symbolGeom = new THREE.PlaneGeometry(0.38, 0.38);
    this.disposables.geometries.push(symbolGeom);

    const symbolConfigs = [
      { id: 'braces', createTex: () => this.createBracesTexture(), isGear: false },
      { id: 'exchange', createTex: () => this.createDataExchangeTexture(), isGear: false },
      { id: 'security', createTex: () => this.createSecurityTexture(), isGear: false },
      { id: 'gear', createTex: () => this.createGearTexture(), isGear: true },
      { id: 'command', createTex: () => this.createCommandTexture(), isGear: false },
      { id: 'database', createTex: () => this.createDatabaseTexture(), isGear: false }
    ];

    const total = symbolConfigs.length;

    symbolConfigs.forEach((cfg, index) => {
      const itemGroup = new THREE.Group();

      // 1. Tiny single-line circle mesh (rotates smoothly around the symbol)
      const circleMesh = new THREE.Mesh(circleGeom, circleMat);
      itemGroup.add(circleMesh);

      // 2. Central symbol mesh (transparent background, sits cleanly inside circle)
      const symTex = cfg.createTex();
      const symMat = new THREE.MeshBasicMaterial({
        map: symTex,
        transparent: true,
        opacity: 0.98,
        side: THREE.DoubleSide,
        depthWrite: false,
        toneMapped: false
      });
      this.disposables.materials.push(symMat);

      const symbolMesh = new THREE.Mesh(symbolGeom, symMat);
      symbolMesh.position.z = 0.005; // Slightly in front of circle plane to prevent z-fighting
      itemGroup.add(symbolMesh);

      this.orbitGroup.add(itemGroup);

      // Distribute evenly along the 360-degree circular orbit
      const baseAngle = (index / total) * Math.PI * 2;

      this.symbols.push({
        id: cfg.id,
        itemGroup,
        circleMesh,
        symbolMesh,
        baseAngle,
        isGear: cfg.isGear,
        spinAngle: 0,
        circleSpinSpeed: 0.65 + (index % 3) * 0.12, // Distinct rotation speeds for each tiny circle
        phase: index * 1.05
      });
    });
  }

  update(time, delta, mouse = { x: 0, y: 0 }, motionFactor = 1.0) {
    const R = this.orbitRadius;

    this.symbols.forEach((s) => {
      // 1. Continuous circular orbit revolution around the 3D globe
      const currentAngle = s.baseAngle + time * this.orbitSpeed * motionFactor;
      const x = Math.cos(currentAngle) * R;
      const y = Math.sin(currentAngle) * R;
      // Gentle harmonic wave in Z for rich depth
      const z = Math.sin(currentAngle * 2 + s.phase) * 0.06 * motionFactor;

      s.itemGroup.position.set(x, y, z);

      // 2. Continuous smooth rotation of the tiny single-line circle around the symbol
      s.circleMesh.rotation.z = (time * s.circleSpinSpeed + s.phase) % (Math.PI * 2);
      // Subtle 3D gyroscopic tilt for the tiny circle
      s.circleMesh.rotation.x = Math.sin(time * 0.8 + s.phase) * 0.12 * motionFactor;
      s.circleMesh.rotation.y = Math.cos(time * 0.7 + s.phase) * 0.12 * motionFactor;

      // 3. Central symbol stays upright, crisp, and readable with subtle 3D parallax
      const mouseInfluenceX = mouse.y * 0.03 * motionFactor;
      const mouseInfluenceY = mouse.x * 0.04 * motionFactor;

      s.symbolMesh.rotation.x = mouseInfluenceX + Math.sin(time * 0.6 + s.phase) * 0.05 * motionFactor;
      s.symbolMesh.rotation.y = mouseInfluenceY + Math.cos(time * 0.5 + s.phase) * 0.06 * motionFactor;

      if (s.isGear) {
        // Continuous smooth rotation for the server processing gear
        s.spinAngle = (s.spinAngle + delta * 0.40 * motionFactor) % (Math.PI * 2);
        s.symbolMesh.rotation.z = s.spinAngle;
      } else {
        s.symbolMesh.rotation.z = Math.sin(time * 0.5 + s.phase) * 0.06 * motionFactor;
      }
    });

    // Subtle responsive tilt on the whole orbit group from mouse interaction
    const orbitTiltX = mouse.y * 0.04 * motionFactor;
    const orbitTiltY = mouse.x * 0.05 * motionFactor;
    this.orbitGroup.rotation.x = 0.24 + orbitTiltX;
    this.orbitGroup.rotation.y = -0.16 + orbitTiltY;
  }

  dispose() {
    this.disposables.geometries.forEach(g => g.dispose());
    this.disposables.materials.forEach(m => m.dispose());
    this.disposables.textures.forEach(t => t.dispose());
    this.disposables.geometries = [];
    this.disposables.materials = [];
    this.disposables.textures = [];
    this.symbols = [];
  }
}
