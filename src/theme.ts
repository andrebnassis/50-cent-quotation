import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette:{
    primary:{
        main: '#3d3d35'
    },
    secondary:{
        main: '#fff'
    }
},
  typography: {
    fontFamily: [
      '"Ubuntu"', 'sans-serif',
      '"VT323"', 'monospace'
  ].join(','),
    fontSize: 16,
  }
});
