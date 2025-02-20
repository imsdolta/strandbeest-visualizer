// scene camera and renderer setup 

import * as THREE from "three";

export function createScene() {

    const scene = new THREE.Scene();
    // setbg 
    scene.background = new THREE.Color(0x87ceeb)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 10, 20);


    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return { scene, camera, renderer }
}
