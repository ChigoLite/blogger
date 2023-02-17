import { CircularProgress ,Box,ThemeProvider, Skeleton} from '@mui/material';
import React from 'react';
import Theme from '../components/theme';
import { useCustomHooks } from '../components/context';

const Loader = () => {
  const{post}=useCustomHooks()
  return (
    <div className='loader'>
      <ThemeProvider theme={Theme}>
          {post.map((load, index) => {
            return (
              <Box key={index} sx={{ display: 'flex' }}>
    <Skeleton animation='wave' variant="rectangular" width={300} height={118} />
      </Box>
  )
})}
      </ThemeProvider>
    </div>
  );
}

export default Loader;
