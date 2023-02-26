import React,{useEffect} from 'react';
import { Stack, Alert } from '@mui/material'
import { useCustomHooks } from './context';

const Notification = () => {
  const { notification,setNotification} = useCustomHooks()
  
   useEffect(() => {
    const interval=setTimeout(() => {
      setNotification(false)
    }, 3000);
  },[notification])
  return (
    <div>
       {notification &&
        <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Comment posted.</Alert>
    </Stack>
        }
    </div>
  );
}

export default Notification;
