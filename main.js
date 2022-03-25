import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js';

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGL1Renderer({ canvas: document.querySelector("#bg"), });


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(50);
renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff9999 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

//Adding point light but it is set at 5,5,5
const pointLight = new THREE.PointLight(0xff99ff, 0.5);
pointLight.position.set(35, 35, 35);
scene.add(pointLight);

const pointLight1 = new THREE.PointLight(0xffff99, 0.5);
pointLight1.position.set(-35, -35, -35);
scene.add(pointLight1);

//Flood light addition
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);


//Allows user to manipulate the viewport and update the window
const controls = new OrbitControls(camera, renderer.domElement);



//Creating stars
function addStar() {
    const geometry = new THREE.SphereGeometry(.4, 0);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}
//Adding stars to the background
Array(200).fill().forEach(addStar)




//Creating background
const background1 = new THREE.Color(0x333333);
scene.background = background1;



//Adding a cube
const pic1 = new THREE.TextureLoader().load('images/python.jpeg');
const pic2 = new THREE.TextureLoader().load('images/c.jpeg');
const pic3 = new THREE.TextureLoader().load('images/cplus.jpeg');
const pic4 = new THREE.TextureLoader().load('images/java.jpeg');
var cubeMat = [
    new THREE.MeshBasicMaterial({ map: pic1 }),
    new THREE.MeshBasicMaterial({ map: pic2 }),
    new THREE.MeshBasicMaterial({ map: pic3 }),
    new THREE.MeshBasicMaterial({ map: pic4 }),
    new THREE.MeshBasicMaterial({ map: pic3 }),
    new THREE.MeshBasicMaterial({ map: pic4 })
];

cubeMat = new THREE.MeshFaceMaterial(cubeMat);

var cubegeom = new THREE.BoxGeometry(5, 5, 5);
var cube1 = new THREE.Mesh(cubegeom, cubeMat);

scene.add(cube1);




//Adding Cubes in the Background
function addCubes() {
    var geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    var material = new THREE.MeshFaceMaterial(cubeMat);
    var cube2 = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    cube2.position.set(x, y, z);
    scene.add(cube2);
}
//Adding stars to the background
Array(50).fill().forEach(addCubes)




//Adding pivots and Planets
var donutCenter = new THREE.Object3D();
scene.add(donutCenter);

var cameraCenter = new THREE.Object3D();
var Z_AXIS = new THREE.Vector3(0, 0, 1);
scene.add(cameraCenter)
cameraCenter.add(camera)
camera.position.setZ(42);
camera.lookAt(cameraCenter.position);
cameraCenter.rotateOnAxis(Z_AXIS, 0.01);


var donutCenter1 = new THREE.Object3D();
scene.add(donutCenter1);

var moonCenter = new THREE.Object3D();
scene.add(moonCenter);


//Adding Earth
const earthTexture = new THREE.TextureLoader().load("images/earth.jpg");
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: earthTexture
    })
);

donutCenter.add(earth);
earth.position.z = 20;
earth.position.setX(-4);




//Adding Mars
const marsTexture = new THREE.TextureLoader().load("images/mars.jpg");
const mars = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32),
    new THREE.MeshStandardMaterial({
        map: marsTexture
    })
);

donutCenter1.add(mars);
mars.position.z = 20;
mars.position.setX(-15);
mars.rotation.x = 8;



//Animating the scene
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.z += 0.015;
    torus.rotation.y += 0.015;
    cube1.rotation.y += -0.005;

    earth.rotation.y += 0.01;
    mars.rotation.z -= 0.02;
    donutCenter.rotation.y += 0.005;

    donutCenter1.rotation.y += 0.002;

    cameraCenter.rotation.y -= 0.001;

    controls.update();
    renderer.render(scene, camera);
}

animate();