import { Mesh, MathUtils, Group, EllipseCurve, BufferGeometry, LineBasicMaterial, Line} from 'three' ;

import { createMaterial } from './material.js';
import { createGeometry } from './geometry.js';

function createMeshes() {
  const geometry = createGeometry() ;
  const material = createMaterial() ;

  const sun = new Mesh(geometry.sun, material.sun) ;
  sun.position.y += 0.5 ;

  const mercury = new Mesh(geometry.mercury, material.mercury) ;
  mercury.position.y += 0.5 ;
  mercury.position.x -= 4.25 ;

  const venus = new Mesh(geometry.venus, material.venus) ;
  venus.position.y += 0.5 ;
  venus.position.x -= 6.5 ;

  const earth = new Mesh(geometry.earth, material.earth) ;
  earth.position.y += 0.5 ;
  earth.position.x -= 9 ;

  const mars = new Mesh(geometry.mars, material.mars) ;
  mars.position.y += 0.5 ;
  mars.position.x -= 11.5 ;

  const jupiter = new Mesh(geometry.jupiter, material.jupiter) ;
  jupiter.position.y += 0.5 ;
  jupiter.position.x -= 15 ;

  const saturn = new Mesh(geometry.saturn, material.saturn) ;
  saturn.position.y += 0.5 ;
  saturn.position.x -= 20 ;

  const uranus = new Mesh(geometry.uranus, material.uranus) ;
  uranus.position.y += 0.5 ;
  uranus.position.x -= 25 ;

  const neptune = new Mesh(geometry.neptune, material.neptune) ;
  neptune.position.y += 0.5 ;
  neptune.position.x -= 30 ;
 
  return { 
    sun,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune
  } ;
}

export { createMeshes } ;