// src/components/SymbolLibrary.tsx
"use client";

import { useStore } from "@/store/useStore";
import { IconButton, Tooltip, Paper, Typography, Grid } from '@mui/material';
import ChairIcon from '@mui/icons-material/Chair';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

const symbols = [
  { name: "Chair", icon: <ChairIcon /> },
  { name: "Table", icon: <TableRestaurantIcon /> },
];

const SymbolLibrary = () => {
  const { selectedSymbol, setSelectedSymbol } = useStore();

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="subtitle1" gutterBottom align="center">
        Symbols
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {symbols.map((symbol) => (
          <Grid key={symbol.name}>
            <Tooltip title={symbol.name} placement="top">
              <IconButton
                color={selectedSymbol === symbol.name ? 'primary' : 'default'}
                onClick={() => setSelectedSymbol(symbol.name)}
                sx={{
                  border: 2,
                  borderColor: selectedSymbol === symbol.name ? 'primary.main' : 'transparent',
                  borderRadius: 2,
                }}
              >
                {symbol.icon}
              </IconButton>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SymbolLibrary;
