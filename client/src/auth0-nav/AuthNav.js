import React from 'react';
import Login from './Login.js'
import Logout from './Logout.js'
import { useAuth0 } from '@auth0/auth0-react';

const AuthNav = () => {

   const { isAuthenticated } = useAuth0()

  return (
     <div>
        {isAuthenticated ? <Logout /> : <Login />}
     </div>
  )
};

export default AuthNav;
