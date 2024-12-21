import { Stage } from '@react-three/drei';
import { Model } from './Model';
import { PostProcessing } from '../effects/PostProcessing';
import { Lighting } from './Lighting';

interface SceneProps {
  modelUrl: string;
}

export function Scene({ modelUrl }: SceneProps) {
  return (
    <>
      <color attach="background" args={['#1a1a1a']} />
      <Lighting />
      <mesh 
      
        receiveShadow 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]}
      >
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
      <Model url={modelUrl} castShadow receiveShadow />
      <PostProcessing />
    </>
  );
}