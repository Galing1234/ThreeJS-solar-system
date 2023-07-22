import { WebGLRenderer } from "three" ;

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true}) ;

  // turn on the physically correct lighting model
  renderer.useLegacyLights = true;

  return renderer ;
}

export { createRenderer } ;