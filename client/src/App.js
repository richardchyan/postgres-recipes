import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useAuth0 } from '@auth0/auth0-react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home'
import Colorpicker from './Colorpicker';
import ModeToggle from './ModeToggle';


function App() {

  const { isLoading } = useAuth0()
  const { mode } = useContext(ThemeContext)

  if(isLoading){
    return <div className="text-7xl text-center mt-10">...Loading</div>
  }

  return (
    <Router>
      <div className={ mode === 'light' ? 'App' : 'App dark bg-gray-800'}>
        <Navbar />
        <div className="flex justify-between items-center max-w-screen-md m-auto mt-2 px-4">
          <Colorpicker/>
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
