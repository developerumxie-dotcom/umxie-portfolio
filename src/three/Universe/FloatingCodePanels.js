import * as THREE from 'three';

/**
 * FloatingCodePanels
 * 
 * Recreates the exact 3 floating code editor panels from the reference image:
 * - Panel 1 (Top-Left of Sphere): const dev = { learn: true, build: true, grow: true }
 * - Panel 2 (Mid-Right of Sphere, overlapping right side of glass sphere): function create() { ... }
 * - Panel 3 (Bottom-Right of Sphere): async function fetchData() { ... }
 * 
 * Orientations and styling match the reference:
 * - High-res textures for pin-sharp text
 * - Dark translucent glass background: rgba(12, 9, 20, 0.86)
 * - Thin subtle purple borders: rgba(168, 85, 247, 0.40)
 * - 3 window control dots on top left
 * - Crisp syntax highlighting in white, lavender, and violet
 */
export class FloatingCodePanels {
  constructor(camera) {
    this.camera = camera;
    this.group = new THREE.Group();

    this.disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    this.panels = [];
    this.initPanels();
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

  drawPanelBase(ctx, width, height, radius = 20) {
    // Semi-translucent dark glass background
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0.0, 'rgba(16, 11, 26, 0.90)');
    grad.addColorStop(0.5, 'rgba(11, 8, 19, 0.86)');
    grad.addColorStop(1.0, 'rgba(7, 5, 12, 0.90)');
    ctx.fillStyle = grad;
    this.drawRoundedRect(ctx, 4, 4, width - 8, height - 8, radius);
    ctx.fill();

    // Subtle violet glass border
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.38)';
    ctx.lineWidth = 3.0;
    ctx.stroke();

    // 3 subtle window dots in top-left
    const dotX = 36;
    const dotY = 32;
    const dotSpacing = 22;
    const dotColors = [
      'rgba(192, 132, 252, 0.70)',
      'rgba(168, 85, 247, 0.55)',
      'rgba(216, 180, 254, 0.45)'
    ];

    dotColors.forEach((color, i) => {
      ctx.beginPath();
      ctx.arc(dotX + i * dotSpacing, dotY, 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });
  }

  // --- Texture 1: const dev = { learn: true, build: true, grow: true } ---
  createDevPanelTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');

    this.drawPanelBase(ctx, canvas.width, canvas.height, 24);

    const lines = [
      {
        num: '1',
        tokens: [
          { t: 'const ', c: '#C084FC' },
          { t: 'dev', c: '#FFFFFF' },
          { t: ' = {', c: '#D8B4FE' }
        ]
      },
      {
        num: '2',
        tokens: [
          { t: '  learn', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: 'true', c: '#C084FC' },
          { t: ',', c: '#B9B3C9' }
        ]
      },
      {
        num: '3',
        tokens: [
          { t: '  build', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: 'true', c: '#C084FC' },
          { t: ',', c: '#B9B3C9' }
        ]
      },
      {
        num: '4',
        tokens: [
          { t: '  grow', c: '#D8B4FE' },
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

    ctx.font = '600 44px "JetBrains Mono", monospace';
    const startY = 148;
    const lineSpacing = 92;

    lines.forEach((line, idx) => {
      const y = startY + idx * lineSpacing;
      ctx.fillStyle = 'rgba(185, 179, 201, 0.40)';
      ctx.fillText(line.num, 38, y);

      let curX = 110;
      line.tokens.forEach(tok => {
        ctx.fillStyle = tok.c;
        ctx.fillText(tok.t, curX, y);
        curX += ctx.measureText(tok.t).width;
      });
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Texture 2: function create() { return { design: true, code: true, deploy: true } } ---
  createCreatePanelTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 840;
    const ctx = canvas.getContext('2d');

    this.drawPanelBase(ctx, canvas.width, canvas.height, 24);

    const lines = [
      {
        num: '1',
        tokens: [
          { t: 'function ', c: '#C084FC' },
          { t: 'create', c: '#FFFFFF' },
          { t: '() {', c: '#D8B4FE' }
        ]
      },
      {
        num: '2',
        tokens: [
          { t: '  return ', c: '#C084FC' },
          { t: '{', c: '#D8B4FE' }
        ]
      },
      {
        num: '3',
        tokens: [
          { t: '    design', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: 'true', c: '#C084FC' },
          { t: ',', c: '#B9B3C9' }
        ]
      },
      {
        num: '4',
        tokens: [
          { t: '    code', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: 'true', c: '#C084FC' },
          { t: ',', c: '#B9B3C9' }
        ]
      },
      {
        num: '5',
        tokens: [
          { t: '    deploy', c: '#D8B4FE' },
          { t: ': ', c: '#B9B3C9' },
          { t: 'true', c: '#C084FC' }
        ]
      },
      {
        num: '6',
        tokens: [
          { t: '  }', c: '#D8B4FE' }
        ]
      },
      {
        num: '7',
        tokens: [
          { t: '}', c: '#D8B4FE' }
        ]
      },
      {
        num: '8',
        tokens: []
      }
    ];

    ctx.font = '600 42px "JetBrains Mono", monospace';
    const startY = 136;
    const lineSpacing = 82;

    lines.forEach((line, idx) => {
      const y = startY + idx * lineSpacing;
      ctx.fillStyle = 'rgba(185, 179, 201, 0.40)';
      ctx.fillText(line.num, 38, y);

      let curX = 110;
      line.tokens.forEach(tok => {
        ctx.fillStyle = tok.c;
        ctx.fillText(tok.t, curX, y);
        curX += ctx.measureText(tok.t).width;
      });
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  // --- Texture 3: async function fetchData() { ... } ---
  createFetchDataPanelTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1120;
    canvas.height = 840;
    const ctx = canvas.getContext('2d');

    this.drawPanelBase(ctx, canvas.width, canvas.height, 24);

    const lines = [
      {
        num: '1',
        tokens: [
          { t: 'async function ', c: '#C084FC' },
          { t: 'fetchData', c: '#FFFFFF' },
          { t: '() {', c: '#D8B4FE' }
        ]
      },
      {
        num: '2',
        tokens: [
          { t: '  try ', c: '#C084FC' },
          { t: '{', c: '#D8B4FE' }
        ]
      },
      {
        num: '3',
        tokens: [
          { t: '    const ', c: '#C084FC' },
          { t: 'res', c: '#FFFFFF' },
          { t: ' = ', c: '#B9B3C9' },
          { t: 'await ', c: '#C084FC' },
          { t: 'api.get()', c: '#D8B4FE' }
        ]
      },
      {
        num: '4',
        tokens: [
          { t: '    return ', c: '#C084FC' },
          { t: 'res.data', c: '#FFFFFF' }
        ]
      },
      {
        num: '5',
        tokens: [
          { t: '  } ', c: '#D8B4FE' },
          { t: 'catch ', c: '#C084FC' },
          { t: '(', c: '#D8B4FE' },
          { t: 'error', c: '#FFFFFF' },
          { t: ') {', c: '#D8B4FE' }
        ]
      },
      {
        num: '6',
        tokens: [
          { t: '    console.error', c: '#D8B4FE' },
          { t: '(', c: '#B9B3C9' },
          { t: 'error', c: '#FFFFFF' },
          { t: ')', c: '#B9B3C9' }
        ]
      },
      {
        num: '7',
        tokens: [
          { t: '  }', c: '#D8B4FE' }
        ]
      },
      {
        num: '8',
        tokens: [
          { t: '}', c: '#D8B4FE' }
        ]
      }
    ];

    ctx.font = '600 41px "JetBrains Mono", monospace';
    const startY = 136;
    const lineSpacing = 82;

    lines.forEach((line, idx) => {
      const y = startY + idx * lineSpacing;
      ctx.fillStyle = 'rgba(185, 179, 201, 0.40)';
      ctx.fillText(line.num, 38, y);

      let curX = 110;
      line.tokens.forEach(tok => {
        ctx.fillStyle = tok.c;
        ctx.fillText(tok.t, curX, y);
        curX += ctx.measureText(tok.t).width;
      });
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.disposables.textures.push(texture);
    return texture;
  }

  initPanels() {
    // Panel 1: Top-Left (const dev = { ... })
    const tex1 = this.createDevPanelTexture();
    const geom1 = new THREE.PlaneGeometry(1.32, 0.94);
    this.disposables.geometries.push(geom1);

    const mat1 = new THREE.MeshBasicMaterial({
      map: tex1,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.disposables.materials.push(mat1);

    const mesh1 = new THREE.Mesh(geom1, mat1);
    mesh1.position.set(-0.95, 1.34, 0.32);
    mesh1.rotation.set(0.04, 0.08, -0.02);

    this.group.add(mesh1);
    this.panels.push({
      mesh: mesh1,
      basePos: mesh1.position.clone(),
      baseRot: mesh1.rotation.clone(),
      floatSpeed: 0.8,
      floatAmp: 0.026,
      rotAmp: 0.012,
      phase: 0.0
    });

    // Panel 2: Mid-Right (function create() { ... })
    // Positioned in front of the right hemisphere of the glass sphere
    const tex2 = this.createCreatePanelTexture();
    const geom2 = new THREE.PlaneGeometry(1.44, 1.12);
    this.disposables.geometries.push(geom2);

    const mat2 = new THREE.MeshBasicMaterial({
      map: tex2,
      transparent: true,
      opacity: 0.96,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.disposables.materials.push(mat2);

    const mesh2 = new THREE.Mesh(geom2, mat2);
    mesh2.position.set(1.08, 0.12, 0.70);
    mesh2.rotation.set(0.02, -0.13, 0.01);

    this.group.add(mesh2);
    this.panels.push({
      mesh: mesh2,
      basePos: mesh2.position.clone(),
      baseRot: mesh2.rotation.clone(),
      floatSpeed: 0.7,
      floatAmp: 0.022,
      rotAmp: 0.012,
      phase: 1.8
    });

    // Panel 3: Bottom-Right (async function fetchData() { ... })
    const tex3 = this.createFetchDataPanelTexture();
    const geom3 = new THREE.PlaneGeometry(1.48, 1.12);
    this.disposables.geometries.push(geom3);

    const mat3 = new THREE.MeshBasicMaterial({
      map: tex3,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.disposables.materials.push(mat3);

    const mesh3 = new THREE.Mesh(geom3, mat3);
    mesh3.position.set(1.50, -0.96, 0.45);
    mesh3.rotation.set(-0.03, -0.07, -0.01);

    this.group.add(mesh3);
    this.panels.push({
      mesh: mesh3,
      basePos: mesh3.position.clone(),
      baseRot: mesh3.rotation.clone(),
      floatSpeed: 0.75,
      floatAmp: 0.024,
      rotAmp: 0.010,
      phase: 3.4
    });
  }

  update(time, delta, mouse = { x: 0, y: 0 }, motionFactor = 1.0) {
    this.panels.forEach((p) => {
      const floatY = Math.sin(time * p.floatSpeed + p.phase) * p.floatAmp * motionFactor;
      const mouseInfluenceX = mouse.y * 0.035 * motionFactor;
      const mouseInfluenceY = mouse.x * 0.045 * motionFactor;

      p.mesh.position.y = p.basePos.y + floatY;
      p.mesh.rotation.x = p.baseRot.x + mouseInfluenceX + Math.sin(time * 0.5 + p.phase) * p.rotAmp * motionFactor;
      p.mesh.rotation.y = p.baseRot.y + mouseInfluenceY;
    });
  }

  dispose() {
    this.disposables.geometries.forEach(g => g.dispose());
    this.disposables.materials.forEach(m => m.dispose());
    this.disposables.textures.forEach(t => t.dispose());
    this.disposables.geometries = [];
    this.disposables.materials = [];
    this.disposables.textures = [];
    this.panels = [];
  }
}
