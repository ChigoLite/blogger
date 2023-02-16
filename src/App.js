import React from 'react';
import Home from './components/Home'
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
import Sharedroute from './routes/sharedroute';
import SingleArticle from './components/singleArticle';
import Poster from './components/createPost';
import PostArt from './components/PostArt';
import Login from './routes/login';
import {useCustomHooks} from './components/context'
import Logout from './components/logout';
const App = () => {
  
  const{isAuth}=useCustomHooks()
  return (
  
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sharedroute />}>
          <Route index element={<Home />} />
      <Route path='/login' element={<Login/>}/>
        <Route path='/createpost' element={ isAuth ? <PostArt/> : <Login/> }  />
          <Route path='/single/:id' element={<SingleArticle  />}/>
        </Route>
     </Routes>
</BrowserRouter>  
    
  );
}

export default App;
