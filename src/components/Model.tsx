import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps {
  url: string;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export function Model({ url, castShadow = true, receiveShadow = true }: ModelProps) {
  const gltf = useLoader(GLTFLoader, url);
  
  // Apply shadow properties to all meshes in the model
  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = castShadow;
      child.receiveShadow = receiveShadow;
    }
  });

  return <primitive object={gltf.scene} />;
}