import { EllipseCurve } from "three";

const loopTime = 1;
const earthOrbitSpeed = 0.001;

function createOrbit(mesh, renderer, scene, camera) {
  const curve = new EllipseCurve(0, 0, 200, 300, 0, 2 * Math.PI);

  function updateOrbit() {
    const time = earthOrbitSpeed * performance.now();
    const t = (time % loopTime) / loopTime;

    let p = curve.getPoint(t);
    mesh.position.x = p.x;
    mesh.position.y = p.y;

    mesh.rotation.y += 0.0015;

    renderer.render(scene, camera);
    requestAnimationFrame(updateOrbit);
  }

  updateOrbit();
}

export { createOrbit };
