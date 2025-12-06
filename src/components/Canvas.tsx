// src/components/Canvas.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas as FabricCanvas, Rect, Circle, IEvent } from 'fabric';
import { useStore } from '@/store/useStore';
import { Paper } from '@mui/material';

const Canvas: React.FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<FabricCanvas | null>(null);
  const { tool } = useStore();

  const stateRef = useRef(useStore.getState());
  useEffect(() => {
    const unsubscribe = useStore.subscribe(state => (stateRef.current = state));
    return () => unsubscribe();
  }, []);

  // Effect to update cursor based on the selected tool
  useEffect(() => {
    if (fabricRef.current) {
      const canvas = fabricRef.current;
      if (tool === 'symbol') {
        canvas.defaultCursor = 'copy';
        canvas.hoverCursor = 'copy';
      } else {
        canvas.defaultCursor = 'default';
        canvas.hoverCursor = 'move';
      }
      canvas.requestRenderAll();
    }
  }, [tool]);


  useEffect(() => {
    if (!canvasEl.current) return;

    console.log('Initializing Fabric Canvas...');

    const canvas = new FabricCanvas(canvasEl.current, {
      width: 800,
      height: 600,
      backgroundColor: '#f3f4f6',
    });

    fabricRef.current = canvas;

    canvas.on('mouse:down', (options: IEvent) => {
      const { tool, selectedSymbol } = stateRef.current;

      console.log('Canvas clicked. Pointer:', options.pointer);
      console.log('Current Tool:', tool);
      console.log('Current Symbol:', selectedSymbol);

      if (tool !== 'symbol' || !selectedSymbol || !options.pointer) return;

      let newShape;
      const { x, y } = options.pointer;

      if (selectedSymbol.toLowerCase().includes('table')) {
        newShape = new Rect({
          left: x,
          top: y,
          width: 100,
          height: 60,
          fill: 'brown',
          originX: 'center',
          originY: 'center',
        });
      } else if (selectedSymbol.toLowerCase().includes('chair')) {
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
        console.log('Shape added:', selectedSymbol);
      }
    });

    return () => {
      console.log('Disposing Fabric Canvas');
      canvas.dispose();
      fabricRef.current = null;
    };
  }, []);

  return (
    <Paper elevation={3} sx={{
      border: '1px solid #ccc',
      '& .lower-canvas, & .upper-canvas': {
        borderRadius: '8px',
      }
    }}>
      <canvas ref={canvasEl} />
    </Paper>
  );
};

export default Canvas;
