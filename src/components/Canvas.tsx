// src/components/Canvas.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas as FabricCanvas, Rect, Circle, IEvent } from 'fabric';
import { useStore } from '@/store/useStore';

const Canvas: React.FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<FabricCanvas | null>(null);
  const { selectedSymbol } = useStore();

  const selectedSymbolRef = useRef(selectedSymbol);
  useEffect(() => {
    selectedSymbolRef.current = selectedSymbol;
    console.log('Selected symbol updated to:', selectedSymbol);
  }, [selectedSymbol]);

  useEffect(() => {
    if (!canvasEl.current) return;

    console.log('Initializing Fabric Canvas...');

    const canvas = new FabricCanvas(canvasEl.current, {
      width: 800,
      height: 600,
      backgroundColor: '#f3f4f6',
    });

    fabricRef.current = canvas;

    const testRect = new Rect({
      left: 50,
      top: 50,
      fill: 'red',
      width: 50,
      height: 50,
      selectable: true,
    });
    canvas.add(testRect);
    canvas.requestRenderAll();

    canvas.on('mouse:down', (options: IEvent) => {
      const currentSymbol = selectedSymbolRef.current;

      console.log('Canvas clicked. Pointer:', options.pointer);
      console.log('Current Symbol:', currentSymbol);

      if (!currentSymbol || !options.pointer) return;

      let newShape;
      const { x, y } = options.pointer;

      if (currentSymbol.toLowerCase().includes('table')) {
        newShape = new Rect({
          left: x,
          top: y,
          width: 100,
          height: 60,
          fill: 'brown',
          originX: 'center',
          originY: 'center',
        });
      } else if (currentSymbol.toLowerCase().includes('chair')) {
        newShape = new Circle({
          left: x,
          top: y,
          radius: 20,
          fill: 'blue',
          originX: 'center',
          originY: 'center',
        });
      }

      if (newShape) {
        canvas.add(newShape);
        canvas.requestRenderAll();
        console.log('Shape added:', currentSymbol);
      }
    });

    return () => {
      console.log('Disposing Fabric Canvas');
      canvas.dispose();
      fabricRef.current = null;
    };
  }, []);

  return (
    <div className="border-2 border-gray-300 shadow-lg inline-block">
      <canvas ref={canvasEl} />
    </div>
  );
};

export default Canvas;
