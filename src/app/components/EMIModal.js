'use client';
import { X } from 'lucide-react';

export default function EMIModal({ isOpen, onClose, mode }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <h2 className="text-lg font-bold mb-4">
          {mode === 'upload' ? 'Upload EMI' : 'View EMI'}
        </h2>
        {/* Add your content here */}
        <p>This is the {mode === 'upload' ? 'Upload' : 'View'} EMI modal content.</p>
      </div>
    </div>
  );
}
