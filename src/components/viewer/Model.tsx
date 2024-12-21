import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

interface ModelProps {
  url: string;
}

export function Model({ url }: ModelProps) {
  const gltf = useLoader(GLTFLoader, url);

  return (
    <Suspense fallback={null}>
      <primitive 
        object={gltf.scene} 
        scale={2} 
        position={[0, 0.1, 0]} 
      />
    </Suspense>
  );  
}