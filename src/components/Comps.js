import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Sharedroute from '../routes/sharedroute';
import SingleArticle from '../components/singleArticle';
import PostArt from '../components/PostArt';
import Login from '../routes/login';
import {useCustomHooks} from '../components/context'
import Home from './Home'
const Comps = () => {
  const{isAuth}=useCustomHooks()

  return (
      <div className='mainCont' style={{
          height: window.innerHeight }}>
          <Routes>
              
         <Route path='/' element={<Sharedroute />}>
          <Route index element={<Home />} />
      <Route path='/login' element={<Login/>}/>
        <Route path='/createpost' element={ isAuth ? <PostArt/> : <Login/> }  />
          <Route path='/single/:id' element={<SingleArticle  />}/>
        </Route>
          </Routes>
    </div>
  );
}

export default Comps;
