
import * as THREE from 'three';

export function createStrandbeest(scene) {
    // Body
    const bodyGeometry = new THREE.BoxGeometry(1, 1, 3);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 1.5, 0);
    scene.add(body);

    // Placeholder: Add legs and joints
    const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 16);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    leg.position.set(0, 0.5, 1);
    scene.add(leg);

    // Add more components here later

    return body;
}
