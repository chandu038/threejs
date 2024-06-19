import * as THREE from "three";
import * as dat from "lil-gui";
import { Mesh } from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const geometry1 = new THREE.CapsuleGeometry(0.5, 1.2, 10, 80);
const material1 = new THREE.MeshBasicMaterial({ color: 0xffff });
const capsule = new THREE.Mesh(geometry1, material1);
scene.add(capsule);
cube.position.x = -2;
camera.position.z = 5;
const gui = new dat.GUI();
gui.add(cube.position, "x").min(-3).max(3).step(0.01);
gui.add(cube.position, "y").min(-3).max(3).step(0.01);
gui.add(cube.position, "z").min(-3).max(3).step(0.01);
gui.addColor(material, "color");
gui.addColor(material1, "color");
gui.add(mesh, "visible");
gui.add(material, "wireframe");

function animate() {
  capsule.rotation.x += 0.01;
  capsule.rotation.y += 0.01;
  capsule.rotation.z += 0.01;
  cube.rotation.x +=0.01;

  renderer.render(scene, camera);
}
