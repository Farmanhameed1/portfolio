import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects that move with parallax
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Digital Marketing Neural Mesh / Starfield
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const primaryColor = new THREE.Color(0x6366f1); // Indigo
    const accentColor = new THREE.Color(0x06b6d4); // Cyan
    const highlightColor = new THREE.Color(0xa855f7); // Purple

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 1600;
      positions[i3 + 1] = (Math.random() - 0.5) * 2200;
      positions[i3 + 2] = (Math.random() - 0.5) * 1200;

      const mixed = Math.random();
      const col = mixed < 0.4 ? primaryColor : mixed < 0.75 ? accentColor : highlightColor;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture / dot
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(168,85,247,0.8)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 14,
      map: texture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    worldGroup.add(particles);

    // 2. 3D Geometric Floating Wireframes (Representing Marketing Algorithms & GEO)
    const floatingNodes: THREE.Mesh[] = [];

    const geomIcosa = new THREE.IcosahedronGeometry(36, 1);
    const geomOcta = new THREE.OctahedronGeometry(28, 0);
    const geomTorus = new THREE.TorusGeometry(32, 4, 12, 36);

    const wireMat1 = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const wireMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const wireMat3 = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const geometries = [geomIcosa, geomOcta, geomTorus];
    const materials = [wireMat1, wireMat2, wireMat3];

    for (let i = 0; i < 9; i++) {
      const mesh = new THREE.Mesh(
        geometries[i % geometries.length],
        materials[i % materials.length]
      );
      mesh.position.x = (Math.random() - 0.5) * 1100;
      mesh.position.y = (Math.random() - 0.5) * 1800;
      mesh.position.z = (Math.random() - 0.5) * 600 - 100;
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      worldGroup.add(mesh);
      floatingNodes.push(mesh);
    }

    // Interactive mouse tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 120;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 120;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll parallax tracking
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // 3D Parallax Camera displacement
      camera.position.x = currentMouseX;
      camera.position.y = -currentMouseY - scrollY * 0.28;
      camera.lookAt(0, -scrollY * 0.28, 0);

      // Rotate group slowly
      worldGroup.rotation.y = elapsedTime * 0.04 + currentMouseX * 0.001;
      particles.rotation.x = elapsedTime * 0.01;

      // Animate floating wireframes
      floatingNodes.forEach((node, idx) => {
        node.rotation.x += 0.006 * (idx % 2 === 0 ? 1 : -1);
        node.rotation.y += 0.009;
        node.position.y += Math.sin(elapsedTime * 1.2 + idx) * 0.35;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      geomIcosa.dispose();
      geomOcta.dispose();
      geomTorus.dispose();
      wireMat1.dispose();
      wireMat2.dispose();
      wireMat3.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-canvas-container"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
