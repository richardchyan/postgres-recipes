import { createContext, useReducer, useEffect } from 'react'

const ThemeContext = createContext()

// Reducer

const themeReducer = (state, action) => {

   switch(action.type){
      case 'CHANGE_COLOR':
         return {...state, color: action.payload}
      case 'CHANGE_MODE':
         return {...state, mode: action.payload}
      default:
         return state
   }
}

const storedMode = localStorage.getItem('what-mode')

// Provider
const ThemeProvider = ({ children }) => {

   const initialState = {
      color: '#dbeafe',
      mode: storedMode
   }

   const [state, dispatch] = useReducer(themeReducer, initialState)

   const changeColor = (color) => {

      dispatch({ type: 'CHANGE_COLOR', payload: color })

   }

   const changeMode = (mode) => {

      dispatch({ type: 'CHANGE_MODE', payload: mode})
   }

   return (

      <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
         {children}
      </ThemeContext.Provider>
   )
}

export { ThemeContext, ThemeProvider }

