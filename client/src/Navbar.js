import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import AuthNav from './auth0-nav/AuthNav'

const Navbar = () => {

   const [error, setError] = useState(null)
   const { user } = useAuth0()
 
   return (
     <>
       <nav className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 py-8 px-4 lg:px-32 justify-between items-center m-auto dark:bg-gray-700 dark:text-white">
         <div className="flex justify-center md:justify-start space-x-4">
           <h1 className="text-5xl font-poppins uppercase tracking-wide text-sky-700 underline dark:text-white">
             Recipes List
           </h1>
         </div>
         <div className="flex space-x-4 items-center justify-center md:justify-end mt-8 md:mt-0">
           {user && (
             <span className="text-lg font-semibold">
               Welcome back, {user.given_name ? user.given_name : user.nickname}
             </span>
           )}
           <AuthNav />
         </div>
       </nav>
     </>
   );
}

export default Navbar
