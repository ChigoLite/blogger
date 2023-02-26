import React, { useEffect } from 'react';
import { Typography,Button,Toolbar,AppBar,Box, Stack, ThemeProvider, Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import { useCustomHooks } from '../components/context';
import Theme from '../components/theme';

const Header = () => {
   const{isAuth,handleClickOpen}=useCustomHooks()
  return (
      <>
    <ThemeProvider theme={Theme}>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar color='primary' component='nav' sx={{height:'5.4rem'}}>
          <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link className='navLink' to='/'>
<h4 className='header'>viral community</h4>
                </Link>
            </Typography>
              {
                isAuth ? <Fab variant='extended' onClick={handleClickOpen}  ><span>Log Out</span></Fab> :
          <Link to ='/login' className='loginbtn'>
            <Fab >Login</Fab>
            </Link>
                  
              }
            <Link to='/createpost'>
                
              <Fab color='secondary' variant='extended' sx={{marginLeft:2}} >Post Article.</Fab>
          
            </Link>
        </Toolbar>
      </AppBar>
      </Box>
        <Box sx={{ marginTop:'6rem'}}>
        <Typography color='secondary' variant='h4'  sx={{fontFamily:'fantasy',fontSize:'1.2rem', textAlign: 'center', textTransform: 'capitalize', marginTop:2}}>
viral blogging, share your thought to the world.
      </Typography>
      </Box>
      <div className="line"></div>
    </ThemeProvider>
      </>

  );
}

export default Header;