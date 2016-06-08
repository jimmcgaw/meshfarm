// (function() {
//   'use strict';
//   var scene = new THREE.Scene();
//   var renderer = new THREE.WebGLRenderer();
// }());


var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    geometry = new THREE.BoxGeometry( 500, 500, 500 );
    material = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.02;
    mesh.rotation.y -= 0.03;

    renderer.render( scene, camera );

}