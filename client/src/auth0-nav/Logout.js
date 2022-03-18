import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
   
   const { logout } = useAuth0()
 
  return (
    <div>
      <button
        onClick={() => logout({ redirectTo: window.location.origin })}
        className="text-2xl bg-gray-500 text-white rounded px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
