import React, { useEffect ,useRef} from 'react';
import styles from "./Tech.module.scss";
import { OrbitControls, Environment } from '@react-three/drei'; // Import useHelper
import { Canvas } from '@react-three/fiber';
import { TechStackModel } from '../3d/models/Tech';
import Reveal from "@/gsap/text/Reveal";

const TechStack = ({loading}) => {
  const reveal = useRef(null);

  useEffect(()=>{
    if( !loading){
      Reveal(reveal);
    }
  },[loading])

  return (
    <div className={styles.main}>
        <h1 className={styles.heading} ref={reveal}>EXLPORE MY TECH STACK</h1>
       <div className={styles.model}>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 75 }} // Initial camera position and FOV
        >
          <ambientLight intensity={0.5} />
          <spotLight intensity={20} position={[0, 20, 50]} />
          <TechStackModel />
          <OrbitControls
            minDistance={5} // Minimum zoom distance
            maxDistance={50} // Maximum zoom distance
            enableZoom={false} // Enable zooming
            enablePan={true} // Enable panning
            // maxPolarAngle={Math.PI / 2} // Restrict vertical angle (horizontal plane)
            // minPolarAngle={Math.PI / 2} // Restrict vertical angle (horizontal plane)  
          />
          <Environment files="/models/tech-stack/studio_small_09_4k.hdr"/>
        </Canvas>
       </div>
    </div>
  );
};

export default TechStack;