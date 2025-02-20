import { createScene } from './components/scene.js';
import { addLighting } from './components/lighting.js';
import { createTerrain } from './components/terrain.js';
import { createStrandbeest } from './components/strandbeest.js';

// Initialize scene, camera, and renderer
const { scene, camera, renderer } = createScene();

// Add lighting
addLighting(scene);

// Add terrain
const terrain = createTerrain();
scene.add(terrain);

// Add Strandbeest
createStrandbeest(scene);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

