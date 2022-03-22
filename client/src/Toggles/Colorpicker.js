import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Colorpicker = () => {

   const colorSwath = ['#eff6ff', '#ccfbf1', '#0ea5e9']
   const {color, changeColor } = useContext(ThemeContext)

   return (
     <div>
       <div className="flex space-x-3">
         {colorSwath.map((color) => (
           <div
             key={color}
             style={{ background: color, height: "22px", width: "22px" }}
             className="rounded-full border border-gray-500"
             onClick={() => changeColor(color)}
           ></div>
         ))}
       </div>
     </div>
   );
}

export default Colorpicker