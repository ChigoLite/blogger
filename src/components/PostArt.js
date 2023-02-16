import { Box, Button, Container, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Poster from './createPost';
import { useCustomHooks } from './context';
import Logout from './logout';

const PostArt = () => {
  const { article,title } = useCustomHooks()

  return (
      <Container sx={{marginBottom:'1rem'}}>
          <Paper elevation={4}>
              

        <Logout/>
        <Poster />
        <Box sx={{display:'flex',alignItems:'flex-end'}}>
      
        </Box>
          </Paper>
  </Container>
  );
}

export default PostArt;
