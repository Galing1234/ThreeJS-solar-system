import { Color, Scene, TextureLoader } from "three" ;

function createScene() {
  const loader = new TextureLoader() ; 
  //const background = loader.load('/src/World/components/planets/textures/spaceBackground.png') ;

  const scene = new Scene() ;

  scene.background = new Color('black') ;

  //scene.background = background ;

  return scene ;
}

export { createScene } ;