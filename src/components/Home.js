import { ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Loader from '../routes/loader';
import Article from './ArticleView';
import { useCustomHooks } from './context';
import Logout from './logout';
import Theme from './theme';



const Home = () => {
  const { skeleton,getArticle } = useCustomHooks()
 useEffect(() => {
        getArticle()
    }, [])
  return (
    <>
      <ThemeProvider theme={Theme}>

      {skeleton && <Loader/>}
        <Logout/>
        <Article />
      </ThemeProvider>
    
    </>
  );
}

export default Home;
