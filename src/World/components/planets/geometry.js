import { BoxGeometry, SphereGeometry, CylinderGeometry } from "three";

function createGeometry() {
  const sun = new SphereGeometry(3, 32, 32) ;

  const mercury = new SphereGeometry(0.65, 32, 32) ;
  
  const venus = new SphereGeometry(0.8, 32, 32) ;
  
  const earth = new SphereGeometry(0.9, 32, 32) ;

  const mars = new SphereGeometry(0.7, 32, 32) ;

  const jupiter = new SphereGeometry(2, 32, 32) ;

  const saturn = new SphereGeometry(1.6, 32, 32) ;

  const uranus = new SphereGeometry(1.3, 32, 32) ;

  const neptune = new SphereGeometry(1.2, 32, 32) ;

  return { sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune} ;
}

export { createGeometry } ;