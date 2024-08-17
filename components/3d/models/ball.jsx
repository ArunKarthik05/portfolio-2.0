'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const SplineScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Camera setup
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -50000,
      10000
    );
    camera.position.set(0, 0, 0);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    // Scene setup
    const scene = new THREE.Scene();

    // Spline scene loading
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/JonUyXTjggwpvoCx/scene.splinecode',
      (splineScene) => {
        scene.add(splineScene);
      }
    );

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setClearAlpha(0);
    scene.background = new THREE.Color('#000000');
    mountRef.current.appendChild(renderer.domElement);

    // Orbit controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    // Window resize handler
    const onWindowResize = () => {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    const animate = (time) => {
      controls.update();
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    // Cleanup on component unmount
    // return () => {
    //   window.removeEventListener('resize', onWindowResize);
    //   renderer.dispose();
    //   mountRef.current.removeChild(renderer.domElement);
    // };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SplineScene;
