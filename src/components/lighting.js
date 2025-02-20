// lighting setup 
import * as THREE from "three";

export function addLighting(scene) {
    const ambientLighting = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLighting);

    const directionLight = new THREE.DirectionalLight(0xffffff, 1);
    directionLight.position.set(10, 10, 10);
    directionLight.castShadow = true;
    scene.add(directionLight)
}
