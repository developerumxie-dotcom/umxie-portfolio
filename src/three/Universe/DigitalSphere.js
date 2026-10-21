import * as THREE from 'three';

/**
 * DigitalSphere — Exact 1:1 Recreation of the Target Reference Design:
 * 
 * VISUAL ANATOMY:
 * 1. Crystal Glass Bubble Shell:
 *    - Continuous, smooth glowing purple/lavender silhouette rim contour
 *    - Signature curved white specular reflection hugging the outer left rim
 *    - Secondary soft lavender reflection arc along top-right edge
 *    - Very subtle transparent dark glass volume tint (NO opaque purple disc, NO center white spotlight)
 *    - Deep space, stars, and floor grid are clearly visible THROUGH the sphere
 * 2. 3D Constellation Network:
 *    - Geometric icosahedron triangulation (detail=1)
 *    - Clean white star cores with radiant violet bloom halos at focal vertices
 *    - Thin, delicate lavender connecting lines with 3D depth attenuation
 */
export class DigitalSphere {
  constructor(radius = 1.58) {
    this.radius = radius;
    this.group = new THREE.Group();

    this.disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    // Celestial axis tilt matching reference
    this.group.rotation.z = THREE.MathUtils.degToRad(14);
    this.group.rotation.x = THREE.MathUtils.degToRad(6);

    this._buildStarTextures();
    this._buildGlassBodyAndRim();
    this._buildSpecularGlintArcs();
    this._buildConstellationLines();
    this._buildStarNodes();
  }

  _buildStarTextures() {
    // 1. Star Core texture: bright white pinpoint with sharp lavender falloff
    const c1 = document.createElement('canvas');
    c1.width = c1.height = 128;
    const g1 = c1.getContext('2d');
    const r1 = g1.createRadialGradient(64, 64, 0, 64, 64, 64);
    r1.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
    r1.addColorStop(0.20, 'rgba(245, 235, 255, 0.95)');
    r1.addColorStop(0.45, 'rgba(216, 180, 254, 0.55)');
    r1.addColorStop(0.75, 'rgba(168, 85, 247, 0.15)');
    r1.addColorStop(1.0, 'rgba(168, 85, 247, 0.0)');
    g1.fillStyle = r1;
    g1.fillRect(0, 0, 128, 128);
    this.coreTex = new THREE.CanvasTexture(c1);
    this.disposables.textures.push(this.coreTex);

    // 2. Halo Bloom texture: soft radiant violet atmospheric glow
    const c2 = document.createElement('canvas');
    c2.width = c2.height = 256;
    const g2 = c2.getContext('2d');
    const r2 = g2.createRadialGradient(128, 128, 0, 128, 128, 128);
    r2.addColorStop(0.0, 'rgba(216, 180, 254, 0.80)');
    r2.addColorStop(0.25, 'rgba(192, 132, 252, 0.48)');
    r2.addColorStop(0.55, 'rgba(168, 85, 247, 0.18)');
    r2.addColorStop(0.80, 'rgba(147, 51, 234, 0.05)');
    r2.addColorStop(1.0, 'rgba(147, 51, 234, 0.0)');
    g2.fillStyle = r2;
    g2.fillRect(0, 0, 256, 256);
    this.haloTex = new THREE.CanvasTexture(c2);
    this.disposables.textures.push(this.haloTex);
  }

  _buildGlassBodyAndRim() {
    // Glass sphere geometry
    const geom = new THREE.SphereGeometry(this.radius, 64, 64);
    this.disposables.geometries.push(geom);

    // Custom glass shader:
    // - Continuous glowing lavender/violet silhouette rim around the sphere
    // - Crisp white specular highlight hugging the left outer edge
    // - Subtle dark crystal volume inside
    // - ZERO center white spotlight!
    const mat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPos;
        varying vec3 vWorldNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vViewPos = -mvPos.xyz;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPos;
        varying vec3 vWorldNormal;

        void main() {
          vec3 N = normalize(vNormal);
          vec3 V = normalize(vViewPos);
          
          // Fresnel rim: 0 at center, 1 at silhouette edge
          float NdotV = max(dot(N, V), 0.0);
          float fresnel = 1.0 - NdotV;
          
          // Continuous outer rim contour
          float rimGlow = pow(fresnel, 2.6);
          
          // Signature left-edge specular highlight (from ~8 o'clock to 11 o'clock)
          // Uses world normal X to highlight the left rim
          float leftRimFactor = smoothstep(-0.2, 0.9, -vWorldNormal.x);
          float leftSpecularRim = pow(fresnel, 2.2) * leftRimFactor * 0.95;
          
          // Secondary top-right edge specular highlight
          float rightRimFactor = smoothstep(0.2, 0.8, vWorldNormal.x) * smoothstep(0.0, 0.8, vWorldNormal.y);
          float rightSpecularRim = pow(fresnel, 3.2) * rightRimFactor * 0.45;
          
          // Base rim color: lavender / violet
          vec3 rimColor = vec3(0.72, 0.48, 0.98); // #B87BFA
          vec3 whiteSpec = vec3(1.0, 0.98, 1.0);  // Crisp white highlight
          vec3 darkGlass = vec3(0.04, 0.02, 0.08); // Subtle dark crystal body
          
          // Combine colors
          vec3 finalColor = darkGlass;
          finalColor += rimColor * rimGlow * 0.65;
          finalColor += whiteSpec * leftSpecularRim;
          finalColor += rimColor * rightSpecularRim;
          
          // Alpha: very subtle dark glass body inside (0.10) + prominent glowing rim (up to 0.92)
          float alpha = clamp(0.08 + rimGlow * 0.45 + leftSpecularRim * 0.65 + rightSpecularRim * 0.35, 0.0, 0.95);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      depthWrite: false
    });
    this.disposables.materials.push(mat);

    this.glassMesh = new THREE.Mesh(geom, mat);
    this.group.add(this.glassMesh);
  }

  _buildSpecularGlintArcs() {
    // Exact curved glass reflection arcs along the outer circumference
    const R = this.radius * 1.002;

    // 1. Primary White Specular Arc (Upper-Left rim, approx 110° to 165°)
    const pts1 = [];
    const count1 = 48;
    for (let i = 0; i <= count1; i++) {
      const a = (i / count1) * (Math.PI * 0.36) + Math.PI * 0.62;
      pts1.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0.20));
    }
    const g1 = new THREE.BufferGeometry().setFromPoints(pts1);
    this.disposables.geometries.push(g1);

    const m1 = new THREE.LineBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(m1);
    this.glint1 = new THREE.Line(g1, m1);
    this.group.add(this.glint1);

    // 2. Secondary Lavender Arc (Lower-Left edge, approx 180° to 220°)
    const pts2 = [];
    const count2 = 36;
    for (let i = 0; i <= count2; i++) {
      const a = (i / count2) * (Math.PI * 0.24) + Math.PI * 1.02;
      pts2.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0.16));
    }
    const g2 = new THREE.BufferGeometry().setFromPoints(pts2);
    this.disposables.geometries.push(g2);

    const m2 = new THREE.LineBasicMaterial({
      color: 0xD8B4FE,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(m2);
    this.glint2 = new THREE.Line(g2, m2);
    this.group.add(this.glint2);

    // 3. Top-Right Secondary Glint Arc (approx 35° to 65°)
    const pts3 = [];
    const count3 = 24;
    for (let i = 0; i <= count3; i++) {
      const a = (i / count3) * (Math.PI * 0.20) + Math.PI * 0.18;
      pts3.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0.14));
    }
    const g3 = new THREE.BufferGeometry().setFromPoints(pts3);
    this.disposables.geometries.push(g3);

    const m3 = new THREE.LineBasicMaterial({
      color: 0xC084FC,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(m3);
    this.glint3 = new THREE.Line(g3, m3);
    this.group.add(this.glint3);
  }

  _buildConstellationLines() {
    // Icosahedron with detail 1 gives ~42 vertices and clean geometric triangulation
    const ico = new THREE.IcosahedronGeometry(this.radius * 0.985, 1);
    const edges = new THREE.EdgesGeometry(ico);
    this.disposables.geometries.push(ico, edges);
    this.icoGeo = ico;

    // Custom shader for wireframe lines:
    // Front-facing lines are bright lavender, back lines are dimmer violet
    const lineMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPos;
        void main() {
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vViewPos = -mvPos.xyz;
          vNormal = normalize(normalMatrix * normalize(position));
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPos;
        void main() {
          float facing = dot(vNormal, normalize(vViewPos));
          vec3 frontColor = vec3(0.85, 0.72, 1.0); // #D8B4FE
          vec3 backColor  = vec3(0.55, 0.25, 0.90); // #8B5CF6
          vec3 color = mix(backColor, frontColor, clamp(facing * 0.5 + 0.5, 0.0, 1.0));
          
          float alpha = mix(0.12, 0.36, clamp(facing * 0.5 + 0.5, 0.0, 1.0));
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(lineMat);

    this.wire = new THREE.LineSegments(edges, lineMat);
    this.group.add(this.wire);
  }

  _buildStarNodes() {
    const pos = this.icoGeo.getAttribute('position');
    const count = pos.count;

    // 1. All vertex dots (tiny pinpricks of light)
    const allDotsArr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      allDotsArr[i * 3]     = pos.getX(i);
      allDotsArr[i * 3 + 1] = pos.getY(i);
      allDotsArr[i * 3 + 2] = pos.getZ(i);
    }
    const allDotsGeom = new THREE.BufferGeometry();
    allDotsGeom.setAttribute('position', new THREE.BufferAttribute(allDotsArr, 3));
    this.disposables.geometries.push(allDotsGeom);

    const dotsMat = new THREE.PointsMaterial({
      map: this.coreTex,
      color: 0xD8B4FE,
      size: 0.038,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(dotsMat);
    this.dots = new THREE.Points(allDotsGeom, dotsMat);
    this.group.add(this.dots);

    // 2. Focal Star Nodes: ~12 prominent bright stars exactly matching the reference composition
    const starIndices = [0, 3, 6, 9, 13, 17, 21, 25, 29, 33, 37, 40];
    const starArr = new Float32Array(starIndices.length * 3);

    starIndices.forEach((idx, i) => {
      const vi = idx % count;
      starArr[i * 3]     = pos.getX(vi) * 1.002;
      starArr[i * 3 + 1] = pos.getY(vi) * 1.002;
      starArr[i * 3 + 2] = pos.getZ(vi) * 1.002;
    });

    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute('position', new THREE.BufferAttribute(starArr, 3));
    this.disposables.geometries.push(starGeom);

    // Brilliant white star cores
    const starCoreMat = new THREE.PointsMaterial({
      map: this.coreTex,
      color: 0xFFFFFF,
      size: 0.11,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(starCoreMat);
    this.starCores = new THREE.Points(starGeom, starCoreMat);
    this.group.add(this.starCores);

    // Luminous violet bloom halos
    const starHaloMat = new THREE.PointsMaterial({
      map: this.haloTex,
      color: 0xC084FC,
      size: 0.32,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.disposables.materials.push(starHaloMat);
    this.starHalos = new THREE.Points(starGeom, starHaloMat);
    this.group.add(this.starHalos);
  }

  update(time, delta, motionFactor = 1.0) {
    const rotSpeed = 0.045 * delta * motionFactor;
    if (this.wire)      this.wire.rotation.y      += rotSpeed;
    if (this.dots)      this.dots.rotation.y      += rotSpeed;
    if (this.starCores) this.starCores.rotation.y += rotSpeed;
    if (this.starHalos) this.starHalos.rotation.y += rotSpeed;

    // Subtle gentle pulsation on the star halos
    if (this.starHalos) {
      this.starHalos.material.size = 0.31 + Math.sin(time * 2.2) * 0.03;
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
