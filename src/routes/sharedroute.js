import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
const Sharedroute = () => {
  return (
      <div className='sharedlayout'>
      <div className='space'>
      
          <Header/>
        <Outlet /> 
          <Footer/>
      </div>  
        

      </div>
  );
}

export default Sharedroute;
