import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
   
   const { logout } = useAuth0()
 
  return (
    <div>
      <button
        onClick={() => logout({ redirectTo: window.location.origin })}
        className="text-md bg-sky-800 text-white rounded px-2 py-1 md:px-4 md:py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
