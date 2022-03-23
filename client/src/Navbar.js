import React, { useState, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import AuthNav from './auth0-nav/AuthNav'
import bakery from './icons/bakery.svg'
import bread from './icons/bread.svg'
import { ThemeContext } from './context/ThemeContext'


const Navbar = () => {

   const [error, setError] = useState(null)
   const { mode } = useContext(ThemeContext);
   const { user } = useAuth0()
 
   return (
     <div className="bg-gray-50 dark:bg-gray-700">
       <nav className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl py-2 md:py-4 md:px-4 justify-between items-center m-auto  dark:text-white">
         <div className="flex justify-center items-center md:justify-start space-x-4">
           <h1 className="text-2xl md:text-5xl font-poppins uppercase tracking-wide text-sky-700 underline dark:text-white">
             Recipes List Maker
           </h1>
           <img src={bread} alt="Bread slice" style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(0%)'}} />
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
     </div>
   );
}

export default Navbar
