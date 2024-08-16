"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MeshComponent() {
  const fileUrl = "models/dome/scene.gltf";
  const mesh = useRef(null);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
