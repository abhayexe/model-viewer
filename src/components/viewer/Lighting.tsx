import React from 'react';
import { useFrame } from '@react-three/fiber';
import { DirectionalLight, AmbientLight, CameraHelper } from 'three';

export function Lighting() {
  const directionalLightRef = React.useRef<DirectionalLight>(null);

  // Optional: Dynamically update or animate the light position if needed
  useFrame(() => {
    if (directionalLightRef.current) {
      directionalLightRef.current.position.set(5, 10, 5); // Adjust position dynamically
      directionalLightRef.current.target.position.set(0, 0, 0); // Always pointing at the scene center
    }
  });

  return (
    <>
      {/* Directional Light */}
      <directionalLight
        ref={directionalLightRef}
        position={[5, 10, 5]} // Initial position
        intensity={2.0}
        castShadow
        shadow-camera-far={50}
        shadow-camera-near={0.1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.001}
      />

      {/* Add a CameraHelper to visualize shadow camera bounds, for debugging */}
      {/* {process.env.NODE_ENV === 'development' && directionalLightRef.current && (
        <primitive object={new CameraHelper(directionalLightRef.current.shadow.camera)} />
      )} */}

      {/* Ambient Light */}
      <ambientLight intensity={0.2} color="#ffffff" />
    </>
  );
}