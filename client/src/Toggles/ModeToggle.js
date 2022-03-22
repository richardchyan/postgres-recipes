import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import darkIcon from "../icons/dark.svg";

const ModeToggle = () => {
  const { mode, changeMode } = useContext(ThemeContext);

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  
  localStorage.setItem('what-mode', mode)
  console.log(mode);

  return (
    <div>
      <img 
         src={darkIcon} 
         alt="dark mode toggle" 
         onClick={toggleMode}
         style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(0%)'}}
         className="cursor-pointer"
      />
    </div>
  );
};

export default ModeToggle;
