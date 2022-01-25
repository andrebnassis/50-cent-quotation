import React from 'react';
import logo from './logo.svg';
import './App.css';
import fifty_cent from './resources/50cent.png'
import speech_bubble from './resources/speechBubble_crop.png'
import { Box } from '@mui/material';

function App() {
  return (
<div className="speech-bubble-container">
  <img src={speech_bubble} alt="Snow"/>
  <code className="centered">R$ 2,75</code>
</div>
  );
}

export default App;
