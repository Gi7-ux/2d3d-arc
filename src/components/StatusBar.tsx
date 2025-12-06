// src/components/StatusBar.tsx
'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useStore } from '@/store/useStore';

const StatusBar: React.FC = () => {
  const { tool } = useStore();

  return (
    <AppBar position="static" color="default" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar variant="dense">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Tool: {tool}</Typography>
          <Typography variant="body2">Scale: 1:100</Typography>
          <Typography variant="body2">X: 0, Y: 0</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default StatusBar;
