document.addEventListener('DOMContentLoaded', () => {
  // --- THREE.JS COSMIC PARTICLES (mesmo efeito da Liga da IA) ---
  function initDottedSurface() {
    const container = document.getElementById('dotted-surface');
    if (!container || !window.THREE) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const particleCount = 1000;
    const positions = [];
    const velocities = [];
    const geometry = new THREE.BufferGeometry();

    for (let i = 0; i < particleCount; i++) {
      positions.push(
        Math.random() * 4000 - 2000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1500
      );
      velocities.push(Math.random() * 1.5 + 0.5);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 5,
      color: 0x1DBF85,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });

    scene.add(new THREE.Points(geometry, material));

    function animate() {
      requestAnimationFrame(animate);
      const arr = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        arr[idx] += velocities[i];
        if (arr[idx] > 2000) {
          arr[idx] = -2000;
          arr[idx + 1] = Math.random() * 2000 - 1000;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
  }

  initDottedSurface();
});
