import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './Scene';
import { DropZone } from '../dropzone/DropZone';
import { Button } from '../ui/Button';

export function ModelViewer() {
  const [model, setModel] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setModel(url);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {!model ? (
        <DropZone onFileSelect={handleFileSelect} />
      ) : (
        <div className="w-full h-full">
          <Button
            onClick={() => setModel(null)}
            className="absolute top-4 right-4 z-10"
          >
            Load new model
          </Button>
          <Canvas
            shadows
            camera={{ position: [0, 0.2, 10], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Scene modelUrl={model} />
            <OrbitControls makeDefault />
          </Canvas>
        </div>
      )}
    </div>
  );
}