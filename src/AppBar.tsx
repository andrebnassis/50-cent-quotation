import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack'
import { FaGithub } from 'react-icons/fa'
import Link from '@mui/material/Link';
const AppBar:React.FC = () => {

  const githubRepoUrl = 'https://github.com/andrebnassis/50-cent-quotation';

  return (
    <MuiAppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
          
          <Stack direction="row" sx={{alignItems:'center', justifyContent:'center'}}>
          <Box >
            <Tooltip title="View source code">
              <IconButton onClick={() => window.open(githubRepoUrl)} sx={{color:'#fff'}}>
                  <FaGithub/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
          <Typography
            variant="h6"
          >
            <Link color="inherit" target={'_blank'} underline={'none'} href={githubRepoUrl}>
            50 Cent Quotation
            </Link>
          </Typography>
          </Box>
          </Stack>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;