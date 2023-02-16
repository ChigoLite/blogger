import React from 'react';
import { Typography,  Box,TextField, Button, ThemeProvider } from '@mui/material';
import{Link}from 'react-router-dom'
import Theme from '../components/theme';
const Footer = () => {
  return (
    <ThemeProvider theme={Theme}>

    <div className='footer'>


          <Box mt='3' sx={{textAlign:'center',}}>
            <Typography variant='h5' gutterBottom>Suscribe to our newsletter.</Typography>
            <TextField id="standard-basic" variant="outlined" size='normal'  margin="normal" focused />
          </Box>
          <Box  sx={{ textAlign: 'center' }}>
            <Button variant='contained'>Submit</Button>
            
          </Box>
        <Box mt='4' sx={{ textAlign: 'center', }}>
         
          <br />
          <Typography sx={{color:'black',}} variant='div'>Nelson's Blog   </Typography>
            <h4>&copy; nelsonLite</h4>
          </Box>
</div>
    </ThemeProvider>
  );
}

export default Footer;
