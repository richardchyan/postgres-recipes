import './App.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useAuth0 } from '@auth0/auth0-react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home'
import Colorpicker from './Toggles/Colorpicker';
import ModeToggle from './Toggles/ModeToggle';
import SkeletonForm from './Skeletons/SkeletonForm';
import SkeletonRecipe from './Skeletons/SkeletonRecipe';
import SkeletonNavbar from './Skeletons/SkeletonNavbar';

function App() {

  const { isLoading, isAuthenticated } = useAuth0()
  const { mode } = useContext(ThemeContext)

  if (isLoading && mode === 'light') {
    return (
      <div className="text-sky-700">
      <SkeletonNavbar />
        <SkeletonForm />
        <SkeletonRecipe />
        <SkeletonRecipe />
        <SkeletonRecipe />
        <SkeletonRecipe />
      </div>
    );
  } 

  if (isLoading && mode === 'dark') {
    return (
      <div className="bg-gray-800 text-white">
        <div className="bg-gray-700">
          <SkeletonNavbar />
        </div>
        <SkeletonForm />
        <SkeletonRecipe />
        <SkeletonRecipe />
        <SkeletonRecipe />
        <SkeletonRecipe />
      </div>
    );
  } 

  return (
    <Router>
      <div className={ mode === 'light' ? 'App h-screen' : 'App dark bg-gray-800 h-screen'}>
        <Navbar />
        <div className="flex justify-between items-center max-w-screen-md m-auto mt-1 px-4">
          {/* <Colorpicker/> */}
          <ModeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
