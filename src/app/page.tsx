// src/app/page.tsx
'use client';

import React from 'react';
import { Box, Drawer, Toolbar, Typography, Paper } from '@mui/material';
import Canvas from '../components/Canvas';
import SymbolLibrary from '../components/SymbolLibrary';
import Header from '@/components/Header';
import RightPropertiesPanel from '@/components/RightPropertiesPanel';
import StatusBar from '@/components/StatusBar';
import { useStore } from '@/store/useStore';

const drawerWidth = 240;

export default function Home() {
  const { selectedSymbol } = useStore();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'relative',
            },
          }}
        >
          <Toolbar />
          <SymbolLibrary />
          <Paper elevation={0} sx={{ mt: 2, p: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Selected: {selectedSymbol || 'None'}
            </Typography>
          </Paper>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'background.default',
          }}
        >
          <Canvas />
        </Box>
        <RightPropertiesPanel />
      </Box>
      <StatusBar />
    </Box>
  );
}
