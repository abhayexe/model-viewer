import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { FileUpload } from 'lucide-react';
import { Model } from './Model';

export function ModelViewer() {
  const [model, setModel] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.glb')) {
      const url = URL.createObjectURL(file);
      setModel(url);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith('.glb')) {
      const url = URL.createObjectURL(file);
      setModel(url);
    }
  };

  return (
    <div 
      className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!model ? (
        <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-500 rounded-lg">
          <FileUpload className="w-16 h-16 mb-4 text-gray-400" />
          <p className="text-xl mb-2">Drag and drop your .glb model here</p>
          <p className="text-sm text-gray-400 mb-4">or</p>
          <input
            type="file"
            accept=".glb"
            onChange={handleFileSelect}
            className="hidden"
            ref={fileInputRef}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Choose file
          </button>
        </div>
      ) : (
        <div className="w-full h-full">
          <button
            onClick={() => setModel(null)}
            className="absolute top-4 right-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors z-10"
          >
            Load new model
          </button>
          <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
            <Stage environment="city" intensity={0.6}>
              <Model url={model} />
            </Stage>
            <OrbitControls makeDefault />
          </Canvas>
        </div>
      )}
    </div>
  );
}