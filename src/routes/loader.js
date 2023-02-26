import { CircularProgress ,Box,ThemeProvider, Skeleton} from '@mui/material';
import React from 'react';
import Theme from '../components/theme';

const Loader = () => {
  return (
    <div className='loader'>
      <ThemeProvider theme={Theme}>
         <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
      </ThemeProvider>
    </div>
  );
}

export default Loader;
