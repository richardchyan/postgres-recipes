import React, { useState, useContext } from 'react';
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import { ThemeContext } from './context/ThemeContext';

const RecipeForm = ({ fetchRecipes, isEdit, closeModal, recipe}) => {

   const [name, setName] = useState(recipe ? recipe.recipe_name : '')
   const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : '')
   const [cookMethod, setCookMethod] = useState(recipe ? recipe.cook_method : '')
   const [cookTime, setCookTime] = useState(recipe ? recipe.cook_time : '')
   const { user } = useAuth0()

   const { color, changeColor } = useContext(ThemeContext)

   const handleSubmit = async (e) => {
      e.preventDefault()
      if(!isEdit){
         try {
            const newRecipe = { name, ingredients, cookTime, cookMethod, user: user.sub }
            const { data } = await axios.post('https://postgres-recipe-maker.herokuapp.com/recipes', newRecipe)
            setName('')
            setIngredients('')
            setCookMethod('')
            setCookTime('')
            fetchRecipes()
            } catch (error) {
               console.log(error)
            }
         } else {
            try {
               const { id } = recipe
               const editedRecipe = { name, ingredients, cookTime, cookMethod }
               const { data } = await axios.put(`https://postgres-recipe-maker.herokuapp.com/recipes/${id}`, editedRecipe)
               closeModal()
            } catch (error) {
               console.log(error.message)
            }
            
         }
      }
   
   return (
      <div className="max-w-screen-md m-auto shadow-md rounded-lg border-2 border-gray-300 dark:bg-gray-800 dark:text-white bg-blue-100 duration-300">
         <h3 className="text-xl text-left p-2 rounded-t-lg text-black  dark:text-white">{isEdit ? 'Edit a recipe' : 'Add a recipe'} </h3>
         <form className="p-2 rounded-b-lg" onSubmit={handleSubmit} >
            <label className="block text-left py-2">
               <span className="text-black dark:text-white text-sm uppercase tracking-wide">Recipe:</span>
               <input 
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full p-2 rounded-lg ring-2 ring-gray-300 focus:outline outline-4 outline-sky-700 text-black dark:text-white  dark:bg-gray-600"
               />
            </label>
            <label className="block text-left py-2">
               <span className="text-black dark:text-white text-sm uppercase tracking-wide"> Ingredients:</span>
               <input 
                  type="text"
                  required
                  onChange={e => setIngredients(e.target.value)}
                  value={ingredients}
                  className="w-full p-2 rounded-lg ring-2 ring-gray-300 focus:outline outline-4 outline-sky-700 text-black dark:text-white dark:bg-gray-600"
               />
            </label>
            <label className="block text-left py-2">
               <span className="text-black dark:text-white text-sm uppercase tracking-wide">Cook Method:</span>
               <input 
                  type="text"
                  required
                  onChange={e => setCookMethod(e.target.value)}
                  value={cookMethod}
                  className="w-full p-2 rounded-lg ring-2 ring-gray-300 focus:outline outline-4 outline-sky-700 text-black dark:text-white dark:bg-gray-600"
               />
            </label>
            <label className="block text-left py-2">
               <span className="text-black dark:text-white text-sm uppercase tracking-wide">Cook Time (minutes):</span>
               <input 
                  type="number"
                  required
                  onChange={e => setCookTime(e.target.value)}
                  value={cookTime}
                  className="w-full p-2 rounded-lg ring-2 ring-gray-300 focus:outline outline-4 outline-sky-700 text-black dark:text-white dark:bg-gray-600"
               />
            </label>
            <button className="text-sm rounded-lg border-2 border-white text-white bg-sky-700 hover:bg-sky-500 px-2 py-1" >{isEdit ? 'Edit recipe' : 'Add recipe'}</button>
         </form>
      </div>
   )
};

export default RecipeForm;
