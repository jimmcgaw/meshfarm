var example = (function() {
  'use strict';
  var scene = new THREE.Scene(),
    renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
    light = new THREE.AmbientLight(0xffff00),
    camera,
    box;

    function initScene() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('webgl-container').appendChild(renderer.domElement);

      scene.add(light);

      camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);

      camera.position.z = 100;
      scene.add(camera);

      box = new THREE.Mesh(new THREE.TorusGeometry( 10, 3, 16, 100 ), new THREE.MeshBasicMaterial({color: 0x00FFFF}));

      box.name = "box";
      scene.add(box);
      box.scale.set(1,1,1);

      renderFrame();

    }

    function renderFrame(){
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      box.rotation.z += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(renderFrame);
    }

    window.onload = initScene;

    return {
      scene: scene
    };
})();
