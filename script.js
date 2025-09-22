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

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.section', {
    scrollTrigger: '.section',
    opacity: 0,
    y: 100,
    duration: 1
  });

  gsap.from('.feature-block, .code-block, .contact-form', {
    scrollTrigger: '.section',
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 0.8
  });

  // Particles.js for Meteor Shower
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

  // Verify SVG Loading
  const logo = document.querySelector('.logo');
  if (logo && !logo.complete) {
    logo.addEventListener('error', () => {
      console.error('Failed to load SVG logo at assets/telegram-logo.svg');
    });
  }

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

  // Chat Demo (Features Page)
  const chatInput = document.getElementById('chat-input');
  const chatOutput = document.getElementById('chat-output');
  if (chatInput && chatOutput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatInput.value.trim()) {
        const userMessage = chatInput.value;
        chatOutput.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatOutput.innerHTML += `<p><strong>TOWAI:</strong> Thanks for your message! I'm an AI assistant ready to help with Telegram tasks.</p>`;
        chatOutput.scrollTop = chatOutput.scrollHeight;
        chatInput.value = '';
      }
    });
  }

  // Code Block Interaction (Open Source Page)
  const codeBlocks = document.querySelectorAll('.code-block');
  codeBlocks.forEach(block => {
    block.addEventListener('click', () => {
      block.innerHTML += `<p>API Documentation: Check out our GitHub for full details!</p>`;
    });
  });

  // Contact Form Interaction
  const contactFormButton = document.querySelector('.contact-form .cta-button');
  if (contactFormButton) {
    contactFormButton.addEventListener('click', () => {
      const inputs = document.querySelectorAll('.form-input');
      inputs.forEach(input => {
        input.style.boxShadow = '0 0 15px #3390EC';
        setTimeout(() => input.style.boxShadow = 'none', 1000);
      });
      alert('Feedback submitted! Connect with TOWAI on Telegram for more.');
    });
  }
});
