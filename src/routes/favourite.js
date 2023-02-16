import React from 'react';
import { useCustomHooks } from '../components/context';
const Favourite = () => {
    const{favouritePost}=useCustomHooks()
    console.log(favouritePost)
  return (
    <div>
      
    </div>
  );
}

export default Favourite;
