document.addEventListener('DOMContentLoaded', () => {
  // Three.js Galaxy Background
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('galaxy-canvas'), alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x3390EC, wireframe: true });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  // GSAP Scroll Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('#home', {
    scrollTrigger: '#home',
    opacity: 0,
    y: 100,
    duration: 1
  });

  gsap.from('.feature-block', {
    scrollTrigger: '#features',
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 0.8
  });

  gsap.from('#open-source', {
    scrollTrigger: '#open-source',
    opacity: 0,
    x: -100,
    duration: 1
  });

  gsap.from('#contact', {
    scrollTrigger: '#contact',
    opacity: 0,
    y: 100,
    duration: 1
  });

  // Particles.js for Meteor Shower (1s and 0s)
  particlesJS('particles-js', {
    particles: {
      number: { value: 100 },
      color: { value: '#3390EC' },
      shape: { type: 'text', text: ['1', '0'] },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 6, direction: 'bottom', random: true }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } }
    }
  });

  // Custom Cursor
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Shuttle Animation
  const shuttle = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.1, 0.1),
    new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
  );
  scene.add(shuttle);

  let shuttleDirection = 1;
  function moveShuttle() {
    shuttle.position.x += 0.05 * shuttleDirection;
    if (Math.abs(shuttle.position.x) > 5) shuttleDirection *= -1;
    requestAnimationFrame(moveShuttle);
  }
  moveShuttle();
});
