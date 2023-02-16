import { CircularProgress ,Box,ThemeProvider} from '@mui/material';
import React from 'react';
import Theme from '../components/theme';

const Loader = () => {
  return (
    <div className='loader'>
      <ThemeProvider theme={Theme}>
        <Box sx={{ display: 'flex' }}>
        <CircularProgress sx={{
           font
        :'2rem'}} color='secondary' />
      </Box>
      </ThemeProvider>
    </div>
  );
}

export default Loader;
