// src/app/page.tsx
'use client';

import React from 'react';
import Canvas from '../components/Canvas';
import SymbolLibrary from '../components/SymbolLibrary';
import Header from '@/components/Header';
import RightPropertiesPanel from '@/components/RightPropertiesPanel';
import StatusBar from '@/components/StatusBar';
import { useStore } from '@/store/useStore';

export default function Home() {
  const { selectedSymbol } = useStore();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <aside className="bg-gray-700 text-white w-64 p-2 flex flex-col items-center gap-4">
          <SymbolLibrary />
          <div className="mt-4 p-4 bg-gray-100 rounded text-black">
            <p>Selected: {selectedSymbol || 'None'}</p>
          </div>
        </aside>
        <main className="flex-1 bg-gray-200 p-4">
          <Canvas />
        </main>
        <RightPropertiesPanel />
      </div>
      <StatusBar />
    </div>
  );
}
