import { MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from "three";

function createMaterial() {
  const loader = new TextureLoader() ;
  const sunTexture = loader.load('./src/World/components/planets/textures/sun.png') ;

  const mercuryTexture = loader.load('./src/World/components/planets/textures/mercury.png') ;
  
  const venusTexture = loader.load('./src/World/components/planets/textures/venus.png') ;

  const earthTexture = loader.load('./src/World/components/planets/textures/earth.png') ;

  const marsTexture = loader.load('./src/World/components/planets/textures/mars.png') ;

  const jupiterTexture = loader.load('./src/World/components/planets/textures/jupiter.png') ;

  const saturnTexture = loader.load('./src/World/components/planets/textures/saturn.png') ;

  const uranusTexture = loader.load('./src/World/components/planets/textures/uranus.png') ;

  const neptuneTexture = loader.load('./src/World/components/planets/textures/neptune.png') ;

  const sun = new MeshStandardMaterial({
    map: sunTexture
  }) ;

  const mercury = new MeshStandardMaterial({
    map: mercuryTexture
  }) ;

  const venus = new MeshStandardMaterial({
    map: venusTexture
  }) ;
  
  const earth = new MeshStandardMaterial({
    map: earthTexture
  }) ;

  const mars = new MeshStandardMaterial({
    map: marsTexture
  }) ;

  const jupiter = new MeshStandardMaterial({
    map: jupiterTexture
  }) ;

  const saturn = new MeshStandardMaterial({
    map: saturnTexture
  }) ;

  const uranus = new MeshStandardMaterial({
    map: uranusTexture
  }) ;

  const neptune = new MeshStandardMaterial({
    map: neptuneTexture
  }) ;

  return { sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } ;
}

export { createMaterial } ;