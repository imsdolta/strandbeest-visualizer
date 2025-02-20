import * as THREE from 'three';
import { loadGrassTexture } from '../utils/texture';

export function createTerrain() {
    const width = 50;
    const height = 50;
    const segments = 128;

    // Create geometry and manipulate vertices
    const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] = Math.random() * 2 - 1; // Random height variation
    }
    geometry.computeVertexNormals();

    // Load texture
    const material = new THREE.MeshStandardMaterial({
        map: loadGrassTexture(),
        side: THREE.DoubleSide,
    });

    // Create and position plane
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2; // Lay flat
    terrain.receiveShadow = true;

    return terrain;
}
