import * as THREE from 'three';
import { NetworkSystem } from './Network/NetworkSystem';

export class DigitalArchitecture {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Section Groups
    this.heroGroup = new THREE.Group();
    this.aboutGroup = new THREE.Group();
    this.stackGroup = new THREE.Group();
    this.projectsGroup = new THREE.Group(); // Dark gray 3D objects for Selected Work
    this.experienceGroup = new THREE.Group();
    this.philosophyGroup = new THREE.Group();
    this.contactGroup = new THREE.Group();

    this.group.add(this.heroGroup);
    this.group.add(this.aboutGroup);
    this.group.add(this.stackGroup);
    this.group.add(this.projectsGroup);
    this.group.add(this.experienceGroup);
    this.group.add(this.philosophyGroup);
    this.group.add(this.contactGroup);

    this.initHeroStructure();
    this.initAboutArchitecture();
    this.networkSystem = new NetworkSystem(this.stackGroup);
    this.initProjectsArchitecture(); // DARK GRAY 3D architecture for light section
    this.initExperienceMicrochip();
    this.initPhilosophyRibbon();
    this.initContactSphere();
    this.initGridPlane();
  }

  initHeroStructure() {
    // 1. Central Wireframe Isometric Hypercube
    const boxGeometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const boxEdges = new THREE.EdgesGeometry(boxGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.8,
      linewidth: 1.5
    });
    this.heroOuterBox = new THREE.LineSegments(boxEdges, lineMaterial);
    this.heroGroup.add(this.heroOuterBox);

    // Inner wireframe cube
    const innerBoxGeom = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const innerEdges = new THREE.EdgesGeometry(innerBoxGeom);
    const innerMaterial = new THREE.LineBasicMaterial({
      color: 0x88888E,
      transparent: true,
      opacity: 0.5
    });
    this.heroInnerBox = new THREE.LineSegments(innerEdges, innerMaterial);
    this.heroGroup.add(this.heroInnerBox);

    // Core Solid Translucent Prismatic Monolith
    const coreGeom = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x222226,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 0.8,
      transparent: true,
      opacity: 0.85
    });
    this.heroCore = new THREE.Mesh(coreGeom, coreMat);
    this.heroGroup.add(this.heroCore);

    // Corner Vertex Nodes
    const sphereGeom = new THREE.SphereGeometry(0.045, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const positions = [
      [-1.2, -1.2, -1.2], [1.2, -1.2, -1.2], [1.2, 1.2, -1.2], [-1.2, 1.2, -1.2],
      [-1.2, -1.2, 1.2], [1.2, -1.2, 1.2], [1.2, 1.2, 1.2], [-1.2, 1.2, 1.2]
    ];

    this.heroCornerNodes = [];
    positions.forEach((pos) => {
      const node = new THREE.Mesh(sphereGeom, nodeMat);
      node.position.set(pos[0], pos[1], pos[2]);
      this.heroOuterBox.add(node);
      this.heroCornerNodes.push(node);
    });

    // Orbiting Geometric Rings / Data Coordinates
    const ringGeom = new THREE.RingGeometry(2.2, 2.22, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x66666F,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    this.heroRing1 = new THREE.Mesh(ringGeom, ringMat);
    this.heroRing1.rotation.x = Math.PI / 3;
    this.heroGroup.add(this.heroRing1);

    const ringGeom2 = new THREE.RingGeometry(2.8, 2.82, 64);
    this.heroRing2 = new THREE.Mesh(ringGeom2, ringMat.clone());
    this.heroRing2.rotation.y = Math.PI / 4;
    this.heroRing2.rotation.x = -Math.PI / 6;
    this.heroGroup.add(this.heroRing2);

    this.heroGroup.position.set(2.4, 0.2, 0);
  }

  initAboutArchitecture() {
    // Polished titanium sphere + dark gray monolithic block
    const sphereGeom = new THREE.SphereGeometry(1.1, 48, 48);
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xEEEEEE,
      metalness: 0.95,
      roughness: 0.12
    });
    this.aboutSphere = new THREE.Mesh(sphereGeom, chromeMat);
    this.aboutSphere.position.set(2.2, 1.2, -0.5);
    this.aboutGroup.add(this.aboutSphere);

    const prismGeom = new THREE.BoxGeometry(1.6, 2.8, 1.2);
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1A1A1E,
      metalness: 0.8,
      roughness: 0.3
    });
    this.aboutPrism = new THREE.Mesh(prismGeom, darkMat);
    this.aboutPrism.position.set(2.8, -0.6, -1.0);
    this.aboutPrism.rotation.set(0.1, -0.2, 0.05);
    this.aboutGroup.add(this.aboutPrism);

    const archEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(prismGeom),
      new THREE.LineBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.35 })
    );
    this.aboutPrism.add(archEdge);

    this.aboutGroup.position.set(0.5, 0, 0);
    this.aboutGroup.visible = true;
  }

  initProjectsArchitecture() {
    // DARK GRAY 3D architecture against the #F2F2F2 light surface:
    // Floating monolithic slabs & computational geometry that camera orbits sideways around
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1D1D22, // Dark gray as required
      metalness: 0.85,
      roughness: 0.28
    });

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x111113,
      transparent: true,
      opacity: 0.7
    });

    this.projectMonoliths = [];

    // Monolith 1: Vertical architectural pillar
    const slab1Geom = new THREE.BoxGeometry(1.8, 3.6, 0.6);
    const slab1 = new THREE.Mesh(slab1Geom, darkMat);
    slab1.position.set(-1.8, 0.2, -1.5);
    slab1.rotation.set(0.1, 0.35, -0.05);
    slab1.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab1Geom), edgeMat));
    this.projectsGroup.add(slab1);
    this.projectMonoliths.push(slab1);

    // Monolith 2: Horizontal datum plane
    const slab2Geom = new THREE.BoxGeometry(3.2, 0.5, 1.8);
    const slab2 = new THREE.Mesh(slab2Geom, darkMat);
    slab2.position.set(1.4, -1.2, -1.0);
    slab2.rotation.set(-0.15, -0.2, 0.1);
    slab2.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab2Geom), edgeMat));
    this.projectsGroup.add(slab2);
    this.projectMonoliths.push(slab2);

    // Monolith 3: Emerging cubic kernel (Project 03 emerges from 3D environment)
    const slab3Geom = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const slab3 = new THREE.Mesh(slab3Geom, darkMat);
    slab3.position.set(0.5, 1.6, -2.0);
    slab3.rotation.set(0.4, 0.5, 0.2);
    slab3.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab3Geom), edgeMat));
    this.projectsGroup.add(slab3);
    this.projectMonoliths.push(slab3);

    this.projectsGroup.position.set(0, 0, 0);
    this.projectsGroup.visible = false;
  }

  initExperienceMicrochip() {
    // Silicon wafer layers
    const layers = 4;
    this.chipLayers = [];

    for (let i = 0; i < layers; i++) {
      const size = 2.2 - i * 0.3;
      const geom = new THREE.BoxGeometry(size, 0.06, size);
      const edges = new THREE.EdgesGeometry(geom);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x1D1D22,
        metalness: 0.9,
        roughness: 0.2
      });
      const layerMesh = new THREE.Mesh(geom, mat);
      layerMesh.position.y = (i - 1.5) * 0.38;

      const edgeLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: i === 0 ? 0xFFFFFF : 0x777780,
          transparent: true,
          opacity: 0.7 - i * 0.12
        })
      );
      layerMesh.add(edgeLine);

      this.experienceGroup.add(layerMesh);
      this.chipLayers.push(layerMesh);
    }

    this.experienceGroup.position.set(2.4, 0, 0);
    this.experienceGroup.rotation.set(0.45, -0.55, 0.2);
    this.experienceGroup.visible = false;
  }

  initPhilosophyRibbon() {
    // Flowing parametric geometric curves / digital architectural plane
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.5, -1.5, -1),
      new THREE.Vector3(-1.5, 0.8, 0.5),
      new THREE.Vector3(1.2, -0.6, -0.5),
      new THREE.Vector3(3.5, 1.2, 0)
    ]);
    const tubeGeom = new THREE.TubeGeometry(curve, 64, 0.04, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x888890,
      metalness: 0.85,
      roughness: 0.15
    });
    this.philosophyRibbon = new THREE.Mesh(tubeGeom, tubeMat);
    this.philosophyGroup.add(this.philosophyRibbon);

    // Wireframe ribbon plane
    const ribbonPlaneGeom = new THREE.PlaneGeometry(6, 3, 24, 12);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x33333A,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    this.philosophyGrid = new THREE.Mesh(ribbonPlaneGeom, wireMat);
    this.philosophyGrid.rotation.x = -Math.PI / 2.6;
    this.philosophyGrid.position.set(0, -0.8, -1);
    this.philosophyGroup.add(this.philosophyGrid);

    this.philosophyGroup.visible = false;
  }

  initContactSphere() {
    // Focal sphere with orbit paths
    const sphereGeom = new THREE.SphereGeometry(1.3, 64, 64);
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0x222226,
      metalness: 0.98,
      roughness: 0.08
    });
    this.contactFocalSphere = new THREE.Mesh(sphereGeom, chromeMat);
    this.contactGroup.add(this.contactFocalSphere);

    const orbitGeom = new THREE.TorusGeometry(2.0, 0.015, 16, 100);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x111111,
      transparent: true,
      opacity: 0.4
    });
    this.contactOrbit1 = new THREE.Mesh(orbitGeom, orbitMat);
    this.contactOrbit1.rotation.x = Math.PI / 3;
    this.contactGroup.add(this.contactOrbit1);

    const orbitGeom2 = new THREE.TorusGeometry(2.5, 0.015, 16, 100);
    this.contactOrbit2 = new THREE.Mesh(orbitGeom2, orbitMat.clone());
    this.contactOrbit2.rotation.y = -Math.PI / 4;
    this.contactGroup.add(this.contactOrbit2);

    this.contactGroup.position.set(0, -1.8, -1.0);
    this.contactGroup.visible = false;
  }

  initGridPlane() {
    const gridHelper = new THREE.GridHelper(30, 30, 0x333338, 0x1A1A1E);
    gridHelper.position.y = -3.8;
    this.scene.add(gridHelper);
    this.floorGrid = gridHelper;
  }

  setHoveredTechnology(techId) {
    if (this.networkSystem) {
      this.networkSystem.setHoveredTechnology(techId);
    }
  }

  update(time, delta, mouse, scrollProgress, scrollVelocity) {
    const velInfluence = Math.min(scrollVelocity * 0.8, 1.5);
    const speed = (0.2 + velInfluence) * delta;

    // 1. Hero Object Rotation & Pulse
    if (this.heroOuterBox) {
      this.heroOuterBox.rotation.x += speed * 0.6;
      this.heroOuterBox.rotation.y += speed * 0.8;
      this.heroInnerBox.rotation.x -= speed * 0.9;
      this.heroInnerBox.rotation.y += speed * 0.5;

      this.heroRing1.rotation.z += speed * 0.3;
      this.heroRing2.rotation.z -= speed * 0.4;

      this.heroGroup.rotation.x = mouse.y * 0.25;
      this.heroGroup.rotation.y = mouse.x * 0.35;
    }

    // 2. Stack Network
    if (this.networkSystem) {
      this.networkSystem.update(time, mouse);
    }

    // 3. About Architecture
    if (this.aboutGroup.visible) {
      this.aboutSphere.position.y = 1.2 + Math.sin(time * 1.2) * 0.1;
      this.aboutPrism.rotation.y += speed * 0.3;
      this.aboutGroup.rotation.x = mouse.y * 0.2;
      this.aboutGroup.rotation.y = mouse.x * 0.25;
    }

    // 4. Projects Monoliths (Dark gray 3D objects slowly drifting)
    if (this.projectsGroup.visible && this.projectMonoliths) {
      this.projectMonoliths.forEach((m, idx) => {
        m.rotation.y += speed * (0.2 + idx * 0.1);
        m.position.y += Math.sin(time * 0.8 + idx * 1.2) * 0.002;
      });
      this.projectsGroup.rotation.y = mouse.x * 0.25;
    }

    // 5. Experience Microchip
    if (this.experienceGroup.visible) {
      this.chipLayers.forEach((layer, idx) => {
        layer.position.y = (idx - 1.5) * 0.38 + Math.sin(time * 1.5 + idx * 0.6) * 0.04;
      });
      this.experienceGroup.rotation.y = -0.55 + mouse.x * 0.2;
    }

    // 6. Philosophy Ribbon
    if (this.philosophyGroup.visible) {
      this.philosophyRibbon.rotation.z = Math.sin(time * 0.5) * 0.08;
      this.philosophyGrid.rotation.z = Math.cos(time * 0.3) * 0.05;
    }

    // 7. Contact Sphere
    if (this.contactGroup.visible) {
      this.contactOrbit1.rotation.z += speed * 0.5;
      this.contactOrbit2.rotation.z -= speed * 0.4;
      this.contactFocalSphere.rotation.y += speed * 0.3;
    }

    if (this.floorGrid) {
      this.floorGrid.position.z = (time * 0.2) % 1;
    }
  }

  setSectionState(sectionName, _sectionProgress) {
    this.heroGroup.visible = false;
    this.aboutGroup.visible = false;
    this.stackGroup.visible = false;
    this.projectsGroup.visible = false;
    this.experienceGroup.visible = false;
    this.philosophyGroup.visible = false;
    this.contactGroup.visible = false;

    switch (sectionName) {
      case 'hero':
      case 'about':
        this.heroGroup.visible = true;
        this.aboutGroup.visible = true;
        break;

      case 'stack':
        this.stackGroup.visible = true;
        break;

      case 'projects':
        this.projectsGroup.visible = true;
        break;

      case 'experience':
        this.experienceGroup.visible = true;
        break;

      case 'philosophy':
        this.philosophyGroup.visible = true;
        break;

      case 'contact':
        this.contactGroup.visible = true;
        break;

      default:
        this.heroGroup.visible = true;
        break;
    }
  }

  dispose() {
    this.scene.remove(this.group);
    if (this.networkSystem) this.networkSystem.dispose();
    if (this.floorGrid) this.scene.remove(this.floorGrid);
  }
}
