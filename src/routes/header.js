import React, { useEffect } from 'react';
import { Typography,Button,Toolbar,AppBar,Box, Stack, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import { useCustomHooks } from '../components/context';
import Theme from '../components/theme';

const Header = () => {
   const{isAuth,handleClickOpen}=useCustomHooks()
  return (
    <ThemeProvider theme={Theme}>

    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar color='primary' position="static">
          <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link className='navLink' to='/'>
            Daily Trend.
            </Link>
            </Typography>
              {
                isAuth ? <Button sx={{border:2,color:'white'}} onClick={handleClickOpen}  ><span>Log Out</span></Button> :
          <Link to ='/login' className='loginbtn'>
            <span>Login</span>
            </Link>
                  
              }
            <Link to='/createpost'>
                
              <Button variant='contained' sx={{marginLeft:6}} color="inherit">Post Article.</Button>
          
            </Link>
        </Toolbar>
      </AppBar>
      </Box>
        <Typography color='secondary' variant='h4' gutterBottom sx={{fontFamily:'fantasy',fontSize:'1.2rem', textAlign: 'center', textTransform: 'capitalize', marginTop:2}}>
viral blogging, share your thought to the world.
      </Typography>
      <div className="line"></div>
</div>
    </ThemeProvider>

  );
}

export default Header;