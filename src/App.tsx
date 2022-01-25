import React from 'react';
import logo from './logo.svg';
import './App.css';
import fifty_cent from './resources/50cent.png'
import speech_bubble from './resources/speechBubble_crop.png'
import { Box } from '@mui/material';

//https://stackoverflow.com/questions/48474/how-do-i-position-one-image-on-top-of-another-in-html

function App() {
  return (
<div style={{
    position: 'relative'
}}>
  <img style={{
    position: 'relative'
  }} src={fifty_cent} alt="50cent"/>
  <div style={{position: 'absolute', top: 0, left: 0, transform: 'translate(0%, 0%)'}}>  
    <div style={{
      position: 'relative',
    }}
    >
      <img src={speech_bubble} alt="speech bubble"/>
      <code style={{  
        position: 'absolute',
        top: '36%',
        left: '50%',
        transform: 'translate(-50%, -50%)'}}
      >
        R$ 2,75
      </code>
    </div>
  </div>
</div>
  );
}

export default App;
