// Planets.js

import { Group, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';
import { createMeshes } from './meshes.js';
import { createOrbit } from './animation.js';

class createPlanets extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.sun,
      this.meshes.mercury,
      this.meshes.venus,
      this.meshes.earth,
      this.meshes.mars,
      this.meshes.jupiter,
      this.meshes.saturn,
      this.meshes.uranus,
      this.meshes.neptune
    );

    // Initialize trail group
    this.trailGroup = new Group();
    this.add(this.trailGroup);

    // Store a delay value for adding trail spheres
    this.trailSphereDelay = 5; // Adjust this value to control the gap size

    // Set the initial delay
    this.currentTrailSphereDelay = this.trailSphereDelay;
  }

  update() {
    const delta = 0.01;

    // Update the other planets' rotations
    this.meshes.mercury.rotation.y += delta;
    this.meshes.venus.rotation.y += delta;
    this.meshes.earth.rotation.y += delta;
    this.meshes.mars.rotation.y += delta;
    this.meshes.jupiter.rotation.y += delta;
    this.meshes.saturn.rotation.y += delta;
    this.meshes.uranus.rotation.y += delta;
    this.meshes.neptune.rotation.y += delta;

    createOrbit(this.meshes.mercury, 4.25, 0.003, 0);
    createOrbit(this.meshes.venus, 6.5, 0.001, 0);
    createOrbit(this.meshes.earth, 9, 0.0006, 0);
    createOrbit(this.meshes.mars, 11.5, 0.0003, 0);
    createOrbit(this.meshes.jupiter, 15, 0.0001, 0);
    createOrbit(this.meshes.saturn, 20, 0.00006, 0);
    createOrbit(this.meshes.uranus, 25, 0.00004, 0);
    createOrbit(this.meshes.neptune, 30, 0.00002, 0);

    // Decrease the delay
    this.currentTrailSphereDelay -= 1;

    // Add a new trail sphere if the delay reaches 0
    if (this.currentTrailSphereDelay <= 0) {
      for (const planetName in this.meshes) {
        if (planetName !== 'sun') {
          const planetMesh = this.meshes[planetName];
          const trailSphere = new Mesh(
            new SphereGeometry(0.05, 8, 8),
            new MeshBasicMaterial({ color: 0xffffff })
          );
          trailSphere.position.copy(planetMesh.position);
          this.trailGroup.add(trailSphere);
        }
      }

      // Reset the delay
      this.currentTrailSphereDelay = this.trailSphereDelay;
    }

    // Limit the trail length by removing older trail objects
    const maxTrailLength = 100; // Adjust this value to control the trail length
    if (this.trailGroup.children.length > maxTrailLength) {
      this.trailGroup.remove(this.trailGroup.children[0]);
    }
  }
}

export { createPlanets };
