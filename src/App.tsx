import React from 'react';
import './App.css';
import fifty_cent from './resources/50cent.png'
import speech_bubble from './resources/speechBubble_crop.png'
import { Box, Stack, Typography } from '@mui/material';

//https://stackoverflow.com/questions/48474/how-do-i-position-one-image-on-top-of-another-in-html

function App() {
  return (
<Stack 
  flexDirection ='row'
  justifyContent='center'
  alignContent='center'>

<Box sx={{
    position: 'relative',
}}>
  <Box
   component="img"
   sx={{
    position: 'relative',
    width: '100%',
    maxWidth:'424px',
    height: 'auto'
  }} src={fifty_cent} alt="50cent"/>
  <Box sx={{
    position: 'absolute',
    transform: 'translate(0%, 0%)',
    bottom: '70%',
    right: '20%'
    }}>  
    <Box sx={{
      position: 'relative',
    }}
    >
      <Box 
      component="img" 
      src={speech_bubble} 
      alt="speech bubble" 
      sx={{
        maxWidth: '100%',
        height: 'auto'
      }}/>
      <Typography sx={{  
        position: 'absolute',
        top: '36%',
        left: '50%',
        transform: 'translate(-50%, -50%)'}}
      >
        R$ 2,75
      </Typography>
    </Box>
  </Box>
</Box>

</Stack>
  );
}

export default App;
