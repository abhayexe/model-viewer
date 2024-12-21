import { useRef } from 'react';
import { FileUploadIcon } from '../icons/FileUploadIcon';
import { Button } from '../ui/Button';

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

export function DropZone({ onFileSelect }: DropZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.glb')) {
      onFileSelect(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith('.glb')) {
      onFileSelect(file);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-500 rounded-lg"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <FileUploadIcon />
      <p className="text-xl mb-2">Drag and drop your .glb model here</p>
      <p className="text-sm text-gray-400 mb-4">or</p>
      <input
        type="file"
        accept=".glb"
        onChange={handleFileSelect}
        className="hidden"
        ref={fileInputRef}
      />
      <Button onClick={() => fileInputRef.current?.click()}>
        Choose file
      </Button>
    </div>
  );
}