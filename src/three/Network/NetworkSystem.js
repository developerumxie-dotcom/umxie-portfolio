import * as THREE from 'three';
import { TECHNOLOGIES } from '../../data/technologies';

export class NetworkSystem {
  constructor(group) {
    this.group = group;
    this.techNodesMap = new Map();
    this.techLinesMap = [];
    this.init();
  }

  init() {
    const nodeGeometry = new THREE.SphereGeometry(0.09, 16, 16);
    const outerHaloGeometry = new THREE.RingGeometry(0.14, 0.16, 32);

    TECHNOLOGIES.forEach((tech) => {
      const nodeSubGroup = new THREE.Group();
      nodeSubGroup.position.set(tech.coords.x * 1.3, tech.coords.y * 1.1, tech.coords.z * 1.2);

      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x792CFF,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x240B4D
      });
      const mesh = new THREE.Mesh(nodeGeometry, baseMat);
      nodeSubGroup.add(mesh);

      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xCDB5FF,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45
      });
      const halo = new THREE.Mesh(outerHaloGeometry, haloMat);
      halo.lookAt(0, 0, 10);
      nodeSubGroup.add(halo);

      nodeSubGroup.userData = { id: tech.id, tech, mesh, halo, baseMat, haloMat };
      this.group.add(nodeSubGroup);
      this.techNodesMap.set(tech.id, nodeSubGroup);
    });

    // Interconnecting Network Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x4A1D85,
      transparent: true,
      opacity: 0.45
    });

    TECHNOLOGIES.forEach((tech) => {
      const startNode = this.techNodesMap.get(tech.id);
      if (!startNode) return;

      tech.connections.forEach((connId) => {
        const targetNode = this.techNodesMap.get(connId);
        if (targetNode && tech.id < connId) {
          const points = [
            startNode.position.clone(),
            targetNode.position.clone()
          ];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMat.clone());
          line.userData = { from: tech.id, to: connId };
          this.group.add(line);
          this.techLinesMap.push(line);
        }
      });
    });

    this.group.position.set(-0.3, 0, 0);
  }

  setHoveredTechnology(techId) {
    if (!techId) {
      // Reset all nodes and lines
      this.techNodesMap.forEach((nodeGroup) => {
        nodeGroup.userData.mesh.material.color.setHex(0x792CFF);
        nodeGroup.userData.mesh.material.emissive.setHex(0x240B4D);
        nodeGroup.userData.halo.material.color.setHex(0xCDB5FF);
        nodeGroup.userData.halo.material.opacity = 0.45;
        nodeGroup.scale.set(1, 1, 1);
      });

      this.techLinesMap.forEach((line) => {
        line.material.color.setHex(0x4A1D85);
        line.material.opacity = 0.45;
      });
      return;
    }

    const selectedNode = this.techNodesMap.get(techId);
    const techData = selectedNode?.userData?.tech;
    const connectedIds = techData?.connections || [];

    this.techNodesMap.forEach((nodeGroup, id) => {
      const isSelected = id === techId;
      const isConnected = connectedIds.includes(id);

      if (isSelected) {
        nodeGroup.userData.mesh.material.color.setHex(0xFFFFFF);
        nodeGroup.userData.mesh.material.emissive.setHex(0x792CFF);
        nodeGroup.userData.halo.material.color.setHex(0xCDB5FF);
        nodeGroup.userData.halo.material.opacity = 0.95;
        nodeGroup.scale.set(1.4, 1.4, 1.4);
      } else if (isConnected) {
        nodeGroup.userData.mesh.material.color.setHex(0xCDB5FF);
        nodeGroup.userData.mesh.material.emissive.setHex(0x4A1D85);
        nodeGroup.userData.halo.material.color.setHex(0x792CFF);
        nodeGroup.userData.halo.material.opacity = 0.75;
        nodeGroup.scale.set(1.15, 1.15, 1.15);
      } else {
        nodeGroup.userData.mesh.material.color.setHex(0x22133A);
        nodeGroup.userData.mesh.material.emissive.setHex(0x0A0414);
        nodeGroup.userData.halo.material.opacity = 0.1;
        nodeGroup.scale.set(0.9, 0.9, 0.9);
      }
    });

    this.techLinesMap.forEach((line) => {
      const { from, to } = line.userData;
      const isLineConnected = (from === techId && connectedIds.includes(to)) ||
        (to === techId && connectedIds.includes(from));

      if (isLineConnected) {
        line.material.color.setHex(0xCDB5FF);
        line.material.opacity = 0.95;
      } else {
        line.material.color.setHex(0x1A0933);
        line.material.opacity = 0.15;
      }
    });
  }

  update(time, mouse) {
    if (this.group.visible) {
      this.group.rotation.y = Math.sin(time * 0.4) * 0.15 + mouse.x * 0.2;
      this.group.rotation.x = Math.cos(time * 0.35) * 0.1 - mouse.y * 0.15;
    }
  }

  dispose() {
    this.techNodesMap.forEach((nodeGroup) => {
      nodeGroup.userData.mesh.geometry.dispose();
      nodeGroup.userData.mesh.material.dispose();
      nodeGroup.userData.halo.geometry.dispose();
      nodeGroup.userData.halo.material.dispose();
    });
    this.techLinesMap.forEach((line) => {
      line.geometry.dispose();
      line.material.dispose();
    });
  }
}
