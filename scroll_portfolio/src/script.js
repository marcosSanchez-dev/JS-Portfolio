import "./style.css";
import * as THREE from "three";
import * as dat from "lil-gui";
import gsap from "gsap";
import SmoothScroll from "./Components/smoothScroll";
/**
 * Debug
 */
const gui = new dat.GUI();

const parameters = {
  materialColor: "#71f89f",
};

const sectionDivs = document.querySelectorAll(".section");

gui.addColor(parameters, "materialColor").onChange(() => {
  //material.color.set(parameters.materialColor);
  particlesMaterial.color.set(parameters.materialColor);

  sectionDivs.forEach(
    (element) => (element.style.color = parameters.materialColor)
  );
});

//texture loader

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/* 
    Textures
*/

const textureLoader = new THREE.TextureLoader();
const gradientTexture = textureLoader.load("textures/gradients/3.jpg");
const particlesTexture = textureLoader.load("textures/particles/1.png");
const bgTexture = textureLoader.load("textures/bg/foto1.jpg");

//gradientTexture.magFilter = THREE.NearestFilter;

/**
 * Objects
 */

const objectsDistance = 3;

const material = new THREE.MeshNormalMaterial({
  //  metalness: 0,
  //  roughness: 1,
  //  transmission: 1,
  //  thickness: 0.14,
});

const mesh1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 0), material);
const mesh2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), material);
const mesh3 = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
  material
);

const sectionMeshes = [mesh1, mesh2, mesh3];

mesh1.position.y = -objectsDistance * 0;
mesh2.position.y = -objectsDistance * 1;
mesh3.position.y = -objectsDistance * 2;

mesh1.position.x = 2;
mesh2.position.x = -2;
mesh3.position.x = 2;

scene.add(mesh1, mesh2, mesh3);

/* 
  Particles
*/

const numberOfParticles = 200;
const positionOfParticles = new Float32Array(numberOfParticles * 3);

for (let i = 0; i < numberOfParticles; i++) {
  positionOfParticles[i * 3 + 0] = (Math.random() - 0.5) * 10;
  positionOfParticles[i * 3 + 1] =
    objectsDistance * 0.5 -
    Math.random() * objectsDistance * sectionMeshes.length;
  positionOfParticles[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positionOfParticles, 3)
);

//particles Material
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.3,
  sizeAttenuation: true,
  color: parameters.materialColor,
  transparent: true,
  alphaMap: particlesTexture,
  alphaTest: 0.001,
  depthTest: false,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

/* 
    LIGHTS
*/

const directionalLight = new THREE.DirectionalLight("white", 1);
directionalLight.position.set(1, 1, 0);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  //Smooth scroll
  smoothScroll.onResize();
});

/**
 * Camera
 */

//camera group

const cameraGroup = new THREE.Group();
scene.add(cameraGroup);

// Base camera
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 6;
cameraGroup.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/* 
    Parallax
*/

const cursor = {};
cursor.x = 0;
cursor.y = 0;

window.addEventListener("mousemove", function (e) {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = e.clientY / sizes.height - 0.5;

  //console.log('X: ' + cursor.x, ' Y: ' + cursor.y);
});

/* 
  Scroll
*/
let scrollY = window.scrollY;
let currentSection = 0;
const scrollSettings = {
  height: 0,
  limit: 0,
  hard: 0,
  soft: 0,
  ease: 0.09,
  normalized: 0,
  running: false,
};

const smoothScroll = new SmoothScroll({
  element: document.querySelector(".content"),
  viewport: sizes,
  scroll: scrollSettings,
});
smoothScroll.onResize();
smoothScroll.update();

window.addEventListener("scroll", function () {
  scrollY = window.scrollY; //te duelve el valor de numero de pixeles que haz recorrido en el scroll
  //console.log('scroll: ' + scrollY);

  //console.log('scrollY = ' + scrollY);

  const newSection = Math.round(scrollY / sizes.height);

  //console.log('newSection = ' + newSection);

  //console.log('sizes.height = ' + sizes.height);

  if (newSection != currentSection) {
    currentSection = newSection;

    //console.log('currentSection = ' + currentSection);

    gsap.to(sectionMeshes[currentSection].rotation, {
      duration: 1.5,
      ease: "power2.inOut",
      x: "+=2",
      y: "+=1.5",
      z: "+=1.5",
    });
  }
});

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  //Smooth scroll
  smoothScroll.update();

  //particles

  particlesMesh.rotation.y = elapsedTime / 40;

  //camera movement
  camera.position.y = (-scrollY / sizes.height) * objectsDistance * 1.5; //tomas en cuenta el numero de pixeles en el viewport

  const parallaxX = cursor.x * 0.5;
  const parallaxY = -cursor.y * 0.5;

  cameraGroup.position.x +=
    (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
  cameraGroup.position.y +=
    (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

  // Render
  renderer.render(scene, camera);

  for (const mesh of sectionMeshes) {
    mesh.rotation.x += deltaTime * 0.1;
    mesh.rotation.y += deltaTime * 0.12;
  }

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
