import React from 'react';
import { Typography,  Box,TextField, Button, ThemeProvider,Stack } from '@mui/material';
import{Link}from 'react-router-dom'
import Theme from '../components/theme';
import { useCustomHooks } from '../components/context';
const Footer = () => {
  const{handleNewsLet,newsLet,newsLetter}=useCustomHooks()
  return (
    <ThemeProvider theme={Theme}>

    <div className='footer'>


          <Box mt='3' sx={{textAlign:'center',}}>
          <Typography variant='h5' gutterBottom>Suscribe to our newsletter.</Typography>
          <Box sx={{margin:'auto',width:'200px'}}>
            
            <TextField id="standard-basic"
              placeholder='Email....'
              value={newsLet}
              onChange={handleNewsLet}
              variant="outlined" size='normal' margin="normal" focused />
            <Button onClick={newsLetter} size='small' variant='outlined'>Suscribe</Button>
              </Box>
         
        </Box>
        <br />
        <hr />
        <Box mt='4' sx={{ textAlign: 'center', }}>
         
          <Typography sx={{color:'black',}} variant='div'>Nelson's Blog   </Typography>
            <h4>&copy; nelsonLite</h4>
          </Box>
</div>
    </ThemeProvider>
  );
}

export default Footer;
