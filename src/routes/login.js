import { Container } from '@mui/material';
import React from 'react';
import { useCustomHooks } from '../components/context';
import {FaGoogle} from 'react-icons/fa'
const Login = () => {
    const{Login}=useCustomHooks()
  return (
      <div>
          <Container>
              <div className="loginCont">
                  <div className='login'>

          <h5 className='loginhead'>Sign in with gmail.</h5>
                      <button onClick={Login} className='logingmail'><FaGoogle className='gmail'/> sign in <span></span></button>
                       
                  </div>

              </div>
              

          </Container>
    </div>
  );
}

export default Login;
