import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
//import useTranslateFullContent from './customHooks/useTranslateFullContent';



export default function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 1, marginTop: 'auto', marginBottom:'10px' }}>
      <Stack direction="row" sx={{alignItems:'center', justifyContent:'space-between'}}>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{marginLeft: '10px'}}
        >
          {`Inspired By: `} <Link color="inherit" target={'_blank'} href="https://www.facebook.com/50centemreais">50centemreais Project</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center"   sx={{marginRight: '10px'}}>
          {`See also: `}
          <Link color="inherit" target={'_blank'} href="https://twitter.com/MeioDolar">@MeioDolar Project</Link>
          </Typography>
      </Stack>
    </Box>
  );
}