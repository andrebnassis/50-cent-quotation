import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Ubuntu"', 'sans-serif',
      '"VT323"', 'monospace'
  ].join(','),
    fontSize: 16,
  }
});
