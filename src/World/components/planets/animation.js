// animation.js

import { AnimationMixer, AnimationClip } from 'three';

function createOrbit(mesh, radius, rotationSpeed, offsetX) {
  const time = performance.now() * rotationSpeed;

  // Calculate the new position of the object along the circle
  const x = Math.cos(time) * radius + offsetX; // Apply the offset to the x position
  const z = Math.sin(time) * radius;

  // Update the object's position based on the circular path with offset
  mesh.position.x = x;
  mesh.position.y = 0.5;
  mesh.position.z = z; // Set the z-position based on the circular path

  // Rotate the mesh on the x-axis (slower rotation)
  mesh.rotation.x += 0.005; // Adjust this value to control the rotation speed on the x-axis
}

export { createOrbit };