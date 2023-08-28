import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module'

import fShader from '../shaders/main.frag';
import vShader from '../shaders/main.vert';

var container, plane;
var camera, scene, renderer, clock, stats;
var uniforms;

init();

function init() {
    container = document.getElementById('container');

    camera = new THREE.Camera();
    camera.position.z = 0;

    scene = new THREE.Scene();
    clock = new THREE.Clock();

    uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_mouse: { type: "v2", value: new THREE.Vector2() }
    };

    var geometry = new THREE.PlaneGeometry(2, 2);
    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vShader,
        fragmentShader: fShader
    });
    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    stats = new Stats();
    document.body.appendChild(stats.dom);

    document.onmousemove = function (e) {
        uniforms.u_mouse.value.x = e.pageX
        uniforms.u_mouse.value.y = e.pageY
    }
    animate();

}

function onWindowResize(event) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.x = renderer.domElement.width;
    uniforms.u_resolution.value.y = renderer.domElement.height;
}

function animate() {
    requestAnimationFrame(animate);
    stats.update();
    render();
}

function render() {
    uniforms.u_time.value += clock.getDelta();
    //plane.rotation.x += 0.01;
    //plane.rotation.y += 0.01;
    renderer.render(scene, camera);
}