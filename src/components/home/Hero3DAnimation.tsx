
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, PresentationControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Model component
function Model() {
  const modelRef = useRef<THREE.Mesh>(null);
  
  // Simple animation for the model
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });
  
  // Create a simple geometric model since we don't have an external 3D model file
  return (
    <group>
      {/* Main structure */}
      <mesh ref={modelRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#0EA5E9"
          metalness={0.6}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Orbiting elements */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2, 0.5, 0]} scale={0.5} castShadow>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={1.0} floatIntensity={1.0}>
        <mesh position={[-1.8, -0.2, 0.8]} scale={0.4} castShadow>
          <dodecahedronGeometry />
          <meshStandardMaterial color="#0369A1" metalness={0.3} roughness={0.4} />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[0, -1.5, 1]} scale={0.6} castShadow>
          <octahedronGeometry />
          <meshStandardMaterial color="#FCD34D" metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

const Hero3DAnimation = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-0 opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1.5 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
        >
          <Model />
        </PresentationControls>
        
        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
};

export default Hero3DAnimation;
