import { createPlanets } from './components/planets/Planets.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();
    this.planets = new createPlanets();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight, this.planets);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
    this.animate();
  }

  stop() {
    loop.stop();
  }

  animate() {
    const time = performance.now() * 0.001; // Convert time to seconds
    this.planets.update(time); // Pass the current time to update the planets' positions
    this.render();
    requestAnimationFrame(() => this.animate());
  }
}

export { World };
