import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'


const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const sphereDots = {
    size: 0.8
}

// Objects
const geometry = new THREE.SphereGeometry( sphereDots.size, 90, 90);

const particlesGeometry = new THREE.BufferGeometry;
const particlesCount = 5000;

const posArray = new Float32Array( particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3));

// Materials

const material = new THREE.PointsMaterial({
    size: Math.random() * 0.005,
    color: 'red'
})

const particleMaterial = new THREE.PointsMaterial({
    size: 0.005
})

// Mesh
const sphere = new THREE.Points(geometry,material)
const particlesMesh = new THREE.Points(particlesGeometry,particleMaterial)
scene.add(sphere, particlesMesh)



// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight 
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('#21282a'),1)

//post processing
const effectComposer = new EffectComposer(renderer)
effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
effectComposer.setSize(sizes.width, sizes.height)

const unrealBloomPass = new UnrealBloomPass()
unrealBloomPass.enabled = true
effectComposer.addPass(unrealBloomPass)

//mouse

document.addEventListener('mousemove', animateParticles)

let mouseY = 0
let mouseX = 0

function animateParticles(e) {
    mouseY = e.clientY
    mouseX = e.clientX
}
/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .15 * elapsedTime
    particlesMesh.rotation.y = mouseY * (elapsedTime * 0.00008) 

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)
    //effectComposer.render()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)


}

tick()