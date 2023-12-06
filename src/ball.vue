<template>
  <div ref="spaceContainer"></div>
</template>

<script>
import * as THREE from "three";

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      sphere: null,
      particles: [],
    };
  },
  mounted() {
    this.init();
    this.createSphere();
    this.createParticles();
    this.animate();
  },
  methods: {
    init() {
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.$refs.spaceContainer.appendChild(this.renderer.domElement);
    },
    createSphere() {
      // 创建旋转的球体
      const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.4});
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      this.scene.add(this.sphere);
    },
    createParticles() {
      const particleGeometry = new THREE.BufferGeometry();
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.001,
        opacity: 0.1
      });

      const particlesCount = 1000;
      const particlesPositions = new Float32Array(particlesCount * 100);

      for (let i = 0; i < particlesCount * 3; i++) {
        particlesPositions[i] = (Math.random() - 0.5) * 10;
      }

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particlesPositions, 3)
      );

      this.particles = new THREE.Points(particleGeometry, particleMaterial);
      this.scene.add(this.particles);
    },
    animate() {
      requestAnimationFrame(this.animate);

      // this.sphere.rotation.x += 0.01;
      // this.sphere.rotation.y += 0.01;

      this.particles.rotation.x += 0.0004;
      this.particles.rotation.y += 0.0004;

      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped>
/* 样式 */
</style>
