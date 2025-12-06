// src/components/Header.tsx
'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import GetAppIcon from '@mui/icons-material/GetApp';

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          2D/3D Floor Plan Builder
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />}>
            New Project
          </Button>
          <Button variant="contained" color="secondary" startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button variant="outlined" color="inherit" startIcon={<GetAppIcon />}>
            Export
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
