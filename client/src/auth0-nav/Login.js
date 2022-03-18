import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {

  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <button
        onClick={() => loginWithRedirect({ returnTo: window.location.origin })}
        className="text-2xl bg-blue-800 text-white rounded px-4 py-2"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
