import React, { useEffect } from 'react';
import './App.css';
import fifty_cent from './resources/50cent.png'
import speech_bubble from './resources/speechBubble_crop.png'
import { Box, Stack, Typography } from '@mui/material';
import AppBar from './AppBar';
import Footer from './Footer';
import { getDollarQuotationRawData } from './services/quotationAPIHandler';
import { isNumber, toCurrencyFormat } from './services/numberUtils';

//https://stackoverflow.com/questions/48474/how-do-i-position-one-image-on-top-of-another-in-html

const App = () => {

  const [quotation, setQuotation] = React.useState<number|undefined|null>(undefined);

  useEffect(() => {

    const dollarQuotation = getDollarQuotationRawData("BRL");

    dollarQuotation.then((res:any) => {
      console.log({res});
      if(isNumber(res as number)){
        console.log("is number");
        setQuotation(res)
      }
      }).catch(() => setQuotation(null));
  }, [])

  return (
<Box sx={{  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'}}>
    <AppBar onChangeLanguage={() => {console.log("onChangeLanguage")}}/>
<Box sx={{
      display:'flex',
      flexDirection: 'column',
      minHeight: '560px',
      justifyContent:'center',
      alignContent:'center'
}}>


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
      <Typography  
      variant='h3'
      fontFamily={'"VT323", monospace'}
      letterSpacing={'1px'}
      whiteSpace={'nowrap'}
      sx={{  
        position: 'absolute',
        top: '36%',
        left: '50%',
        transform: 'translate(-50%, -50%)'}}
      >
        {isNumber(quotation as number) ? toCurrencyFormat((quotation as number)/2) : quotation === undefined ? "Wait..." : "Error :("}
      </Typography>
    </Box>
  </Box>
</Box>

</Stack>
</Box>
<Footer/>

</Box>
  );
}

export default App;
