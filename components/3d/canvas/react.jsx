"use client"

import MeshComponent from "../models/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Dome() {
    return (
      <div style={{ width: '800px', height: '600px' }}>
        <Canvas style={{ width: '100%', height: '100%' ,border:"1px solid red"}}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1} 
            castShadow 
          />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
          <MeshComponent />
        </Canvas>
      </div>
    );
}
