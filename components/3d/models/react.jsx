"use client";

import { useRef,useEffect } from "react";
import { useFrame, useLoader ,useThree} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MeshComponent() {
  const fileUrl = "models/room/scene.gltf";
  const mesh = useRef(null);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const { camera } = useThree();

  // Set the camera position and zoom when the component mounts
  useEffect(() => {
    camera.position.set(.5, .5 , -.5); 
    camera.lookAt(0,1, 1); 
  }, [camera]);

  // useFrame(() => {
  //   if (mesh.current) {
  //     mesh.current.rotation.y += 0.001;
  //   }
  // });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
