// src/components/RightPropertiesPanel.tsx
'use client';

import React from 'react';
import { Drawer, Toolbar, Typography, Paper } from '@mui/material';

const drawerWidth = 240;

const RightPropertiesPanel: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
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
      <Paper elevation={0} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Properties
        </Typography>
        <Typography variant="body2">
          No object selected
        </Typography>
      </Paper>
    </Drawer>
  );
};

export default RightPropertiesPanel;
