import * as THREE from "three";

export function loadGrassTexture() {
  const loader = new THREE.TextureLoader();
  const texture = loader.load("../../assets/red_sand.webp");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(100, 100);
  return texture;
}
