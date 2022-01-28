import React, { useCallback, useEffect } from 'react';
import './App.css';
import fifty_cent from './resources/50cent.png'
import speech_bubble from './resources/speechBubble_crop.png'
import { Box, Stack, Typography } from '@mui/material';
import AppBar from './AppBar';
import Footer from './Footer';
import { getDollarQuotationRawData } from './services/quotationAPIHandler';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { isNumber, toCurrencyFormat } from './services/numberUtils';

const sharedUrl = 'https://andrebnassis.github.io/50-cent-quotation/';

const App = () => {

  const [quotation, setQuotation] = React.useState<number|undefined|null>(undefined);

  const fetchMyAPI = useCallback(async () => {
    try{
      let response = await getDollarQuotationRawData('BRL')
       setQuotation(response as number);
    }
    catch(err){
      setQuotation(null)
    }
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  return (
<Box sx={{  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'}}>
    <AppBar />
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
<Box sx={{display:'flex', flexDirection:'column', alignItems:'center', margin: '0 10px 0 10px'}}>
          <Box sx={{display:'flex', "& button":{margin: '5px'}}}>
            <FacebookShareButton url={sharedUrl} quote={toCurrencyFormat((quotation as number)/2)} hashtag='#50CentQuotation' windowHeight={window.innerHeight*0.9}>
              <FacebookIcon
                size={28}
                round={false}
              />
            </FacebookShareButton>
            <TwitterShareButton url={sharedUrl} title={toCurrencyFormat((quotation as number)/2)} hashtags={['50CentQuotation']}  windowHeight={window.innerHeight*0.9}>
              <TwitterIcon
                size={28}
                round={false}
              />
            </TwitterShareButton>
            <WhatsappShareButton url={sharedUrl} title={toCurrencyFormat((quotation as number)/2)}  windowHeight={window.innerHeight*0.9}>
              <WhatsappIcon
                size={28}
                round={false}
              />
            </WhatsappShareButton>
          </Box>
</Box>

</Box>
<Footer/>

</Box>
  );
}

export default App;
