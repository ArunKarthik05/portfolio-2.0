'use client'
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { AnimationMixer } from 'three';

export function TechStackModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/tech-stack/techstack_final-transformed.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play all animations found
    if (actions) {
      names.forEach(name => {
        const action = actions[name];
        if (action) {
          action.play();
          action.setLoop(AnimationMixer.LoopRepeat); // Loop the animation
        }
      });
    }
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="NurbsCircle" rotation={[-Math.PI, 0.006, -Math.PI]} scale={5} />
        <group name="JAVA" position={[1.669, 0, -4.711]} rotation={[-Math.PI, 0.057, -Math.PI]} scale={2.527}>
          <mesh name="Mesh002" geometry={nodes.Mesh002.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh002_1" geometry={nodes.Mesh002_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Mesh002_2" geometry={nodes.Mesh002_2.geometry} material={materials.PaletteMaterial002} />
        </group>
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials.PaletteMaterial003} position={[-4.47, 0, -2.235]} rotation={[-Math.PI, 0.057, -Math.PI]} scale={1.997}>
          <mesh name="Curve" geometry={nodes.Curve.geometry} material={materials.PaletteMaterial003} position={[-0.06, 0.385, -0.008]} scale={0.501} />
          <mesh name="Icosphere011" geometry={nodes.Icosphere011.geometry} material={nodes.Icosphere011.material} position={[-0.129, -0.203, -0.298]} rotation={[Math.PI, -0.057, Math.PI]} scale={0.022} />
        </mesh>
        <group name="Curve019" position={[2.506, 0, 4.324]} rotation={[-Math.PI, 0.057, -Math.PI]} scale={3.363}>
          <mesh name="Curve016" geometry={nodes.Curve016.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Curve016_1" geometry={nodes.Curve016_1.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Curve016_2" geometry={nodes.Curve016_2.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Curve016_3" geometry={nodes.Curve016_3.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Curve016_4" geometry={nodes.Curve016_4.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Curve016_5" geometry={nodes.Curve016_5.geometry} material={materials.PaletteMaterial003} />
        </group>
        <group name="Circle011" position={[-4.677, 0, 1.764]} rotation={[Math.PI, 0.057, Math.PI / 2]}>
          <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Circle002_1" geometry={nodes.Circle002_1.geometry} material={materials.PaletteMaterial004} />
          <mesh name="Circle002_2" geometry={nodes.Circle002_2.geometry} material={materials.PaletteMaterial004} />
          <mesh name="Circle002_3" geometry={nodes.Circle002_3.geometry} material={materials.PaletteMaterial003} />
        </group>
        <group name="Circle007" position={[4.305, 0, -2.538]} rotation={[1.605, -0.541, -3.076]} scale={0.362}>
          <mesh name="Circle004" geometry={nodes.Circle004.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Circle004_1" geometry={nodes.Circle004_1.geometry} material={materials.PaletteMaterial005} />
        </group>
        <group name="Cube002" position={[-1.728, 0, 4.689]} rotation={[0, 1.514, -Math.PI / 2]} scale={[-0.04, -0.093, -0.12]}>
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.PaletteMaterial003} />
        </group>
        <group name="Curve011" position={[4.844, 0, 1.237]} rotation={[1.571, 0, -3.085]} scale={6.61}>
          <mesh name="Curve015" geometry={nodes.Curve015.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Curve015_1" geometry={nodes.Curve015_1.geometry} material={materials.PaletteMaterial003} />
        </group>
        <group name="Circle012" position={[-1.938, 0, -4.606]} rotation={[Math.PI, 0.057, Math.PI / 2]} scale={-1}>
          <mesh name="Circle016" geometry={nodes.Circle016.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Circle016_1" geometry={nodes.Circle016_1.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Circle016_2" geometry={nodes.Circle016_2.geometry} material={materials.PaletteMaterial006} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/tech-stack/techstack_final-transformed.glb');
